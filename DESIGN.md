---
name: Tactful Design System
colors:
  surface: '#e9fdff'
  surface-dim: '#c8dee0'
  surface-bright: '#e9fdff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e1f8fa'
  surface-container: '#dcf2f4'
  surface-container-high: '#d6ecef'
  surface-container-highest: '#d0e7e9'
  on-surface: '#0a1f21'
  on-surface-variant: '#3f484a'
  inverse-surface: '#203436'
  inverse-on-surface: '#def5f7'
  outline: '#6f797a'
  outline-variant: '#bec8ca'
  surface-tint: '#156872'
  primary: '#004a52'
  on-primary: '#ffffff'
  primary-container: '#0b636d'
  on-primary-container: '#95dde8'
  inverse-primary: '#8bd2dd'
  secondary: '#006972'
  on-secondary: '#ffffff'
  secondary-container: '#7ef0ff'
  on-secondary-container: '#006d77'
  tertiary: '#553f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#725500'
  on-tertiary-container: '#ffc940'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a7eefa'
  primary-fixed-dim: '#8bd2dd'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f57'
  secondary-fixed: '#8ef2ff'
  secondary-fixed-dim: '#62d7e5'
  on-secondary-fixed: '#001f23'
  on-secondary-fixed-variant: '#004f56'
  tertiary-fixed: '#ffdf9a'
  tertiary-fixed-dim: '#f7be1d'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4300'
  background: '#e9fdff'
  on-background: '#0a1f21'
  surface-variant: '#d0e7e9'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system embodies a **Modern Corporate** aesthetic with a specific focus on high-fidelity AI technology. It prioritizes clarity, intelligence, and trustworthiness. The visual language balances the precision of enterprise software with the approachable fluidity of modern AI interfaces.

The style leverages a "Clean Tech" approach: significant whitespace, a sophisticated dark-to-teal color progression, and subtle depth through layered surfaces. The emotional response is one of reliability and "calm power"—software that feels both robust and effortlessly smart.

## Colors
The palette is rooted in a deep "Teal-and-Ink" foundation. 
- **Primary:** The deep teal (`#0B636D`) serves as the core brand anchor, used for primary actions and brand presence.
- **Secondary:** The vibrant cyan (`#29ABB9`) is used for highlights, data visualizations, and interactive accents to provide a "glow" effect typical of AI interfaces.
- **Tertiary:** The gold (`#EAB308`) is a high-contrast utility color reserved for warnings, specialized status indicators, or critical call-to-actions.
- **Neutral:** The near-black ink (`#0A1F21`) provides the grounding for typography and high-contrast dark-mode backgrounds.

The system uses a crisp white background for the primary interface to maintain maximum readability and a professional SaaS feel.

## Typography
The system uses a dual-font strategy to balance character with utility. 
- **Plus Jakarta Sans** is the display face, used for headlines and prominent brand moments. Its geometric but soft curves provide a modern, welcoming tech aesthetic.
- **Inter** is the workhorse font for all body copy, inputs, and labels. Its high x-height and neutral design ensure maximum legibility in data-dense software environments.

Scale transitions occur primarily at the headline level for mobile, while body text remains consistent to preserve readability across devices.

## Layout & Spacing
The layout relies on a **12-column fluid grid** for desktop environments, transitioning to a **4-column grid** for mobile. A strict 4px/8px baseline rhythm is enforced to ensure vertical consistency.

- **Desktop (1440px+):** 40px outer margins, 24px gutters.
- **Tablet (768px - 1439px):** 32px outer margins, 20px gutters.
- **Mobile (Up to 767px):** 16px outer margins, 16px gutters.

Spacing tokens are used for both internal component padding and external layout margins to create a rhythmic, structured appearance that feels engineered and precise.

## Elevation & Depth
Depth is communicated through **Ambient Shadows** and **Tonal Layers**. Instead of harsh black shadows, this system uses "tinted elevation" where shadows inherit a small amount of the primary brand color to feel more integrated.

- **Level 0 (Base):** White or `#F4F7F7` surface. No shadow.
- **Level 1 (Card):** 1px border (`#E2E8F0`) with a very soft shadow: `0 2px 4px rgba(11, 99, 109, 0.05)`.
- **Level 2 (Dropdown/Popover):** `0 10px 15px -3px rgba(11, 99, 109, 0.1), 0 4px 6px -2px rgba(11, 99, 109, 0.05)`.
- **Level 3 (Modal):** `0 20px 25px -5px rgba(11, 99, 109, 0.1), 0 10px 10px -5px rgba(11, 99, 109, 0.04)`.

Glassmorphism is used sparingly for navigation bars and overlay panels, employing a `20px` backdrop blur and a `10%` white tint.

## Shapes
The shape language is consistently **Rounded**, reflecting a modern software feel that isn't overly aggressive. 
- **Standard Components:** (Buttons, Inputs, Cards) use a 0.5rem (8px) radius.
- **Large Components:** (Modals, Feature Sections) use a 1rem (16px) radius.
- **Small Utilities:** (Badges, Chips, Tooltips) use a 0.25rem (4px) radius or are fully pill-shaped.

This consistency in curvature creates a cohesive "container" strategy across the entire product.

## Components

### Buttons
- **Primary:** Solid `#0B636D` with white text. Hover state: `#29ABB9` with a subtle scale-up (1.02x). Active state: `#0A1F21`.
- **Secondary:** Transparent with `#0B636D` border and text. Hover: Background becomes 5% opacity of primary color.
- **Ghost:** No border. Hover: Background `#F4F7F7`.

### Interactive States
- **Focus:** 3px ring of `#29ABB9` with 50% opacity, offset by 2px.
- **Disabled:** 40% opacity on all elements, `cursor: not-allowed`.

### Input Fields
- **Default:** White background, 1px border `#CBD5E1`.
- **Hover:** Border color changes to `#0B636D`.
- **Active/Focus:** Border color changes to `#29ABB9`, shadow level 1 applied.

### Cards & Containers
- Cards use the Level 1 shadow and 0.5rem radius.
- AI-driven components (like chat bubbles or insights) utilize a subtle gradient border from `#0B636D` to `#29ABB9` to differentiate "smart" elements from static content.

### Status Chips
- **Success:** Soft teal background with deep teal text.
- **Warning:** Soft gold background with deep gold/brown text.
- **Neutral:** Light gray (`#F4F7F7`) background with `#526B6D` text.