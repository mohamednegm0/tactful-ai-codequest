#!/usr/bin/env bun
// PreToolUse hook for Edit/Write. Blocks:
//  - physical CSS properties in .css files (must use logical equivalents)
//  - inline style="..." attributes in markup/template files

import { readFileSync } from "node:fs";

const input = JSON.parse(readFileSync(0, "utf8"));
const tool = input.tool_name;
const ti = input.tool_input ?? {};

if (tool !== "Edit" && tool !== "Write" && tool !== "MultiEdit") process.exit(0);

const path = (ti.file_path ?? "").replaceAll("\\", "/").toLowerCase();
const ext = path.slice(path.lastIndexOf("."));

let text = "";
if (tool === "Write") text = ti.content ?? "";
else if (tool === "Edit") text = ti.new_string ?? "";
else if (tool === "MultiEdit") text = (ti.edits ?? []).map(e => e.new_string ?? "").join("\n");

if (!text) process.exit(0);

const violations = [];

const cssExts = [".css", ".scss", ".sass", ".less"];
const markupExts = [".html", ".htm", ".tsx", ".jsx", ".vue", ".svelte", ".ts", ".js"];

const stripComments = (s) =>
  s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");

if (cssExts.includes(ext)) {
  const src = stripComments(text);
  const physical = [
    { re: /(^|[\s;{])margin-(left|right)\s*:/gi, msg: "margin-left/right -> margin-inline-start/end" },
    { re: /(^|[\s;{])padding-(left|right)\s*:/gi, msg: "padding-left/right -> padding-inline-start/end" },
    { re: /(^|[\s;{])border-(left|right)(-[a-z]+)?\s*:/gi, msg: "border-left/right -> border-inline-start/end" },
    { re: /(^|[\s;{])(left|right)\s*:/gi, msg: "left/right -> inset-inline-start/end" },
    { re: /text-align\s*:\s*(left|right)\b/gi, msg: "text-align: left/right -> start/end" },
    { re: /float\s*:\s*(left|right)\b/gi, msg: "float: left/right -> inline-start/end" },
    { re: /clear\s*:\s*(left|right)\b/gi, msg: "clear: left/right -> inline-start/end" },
  ];
  for (const { re, msg } of physical) {
    const m = src.match(re);
    if (m) violations.push(`CSS physical property (${m.length}x): ${msg}`);
  }
}

if (markupExts.includes(ext)) {
  const inlineStyle = text.match(/\sstyle\s*=\s*["'`{]/g);
  if (inlineStyle) {
    violations.push(`Inline style= attribute (${inlineStyle.length}x). Move to a stylesheet.`);
  }
}

if (violations.length === 0) process.exit(0);

const reason = [
  `Blocked by check-css-rules hook for ${ti.file_path}:`,
  ...violations.map(v => `  - ${v}`),
  "",
  "Fix and retry. See ~/.claude/projects/c--tactful-ai/memory/ for rules.",
].join("\n");

console.log(JSON.stringify({
  hookSpecificOutput: {
    hookEventName: "PreToolUse",
    permissionDecision: "deny",
    permissionDecisionReason: reason,
  },
}));
process.exit(0);
