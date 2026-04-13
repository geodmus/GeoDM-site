# GeoDMus React Component Library

A branded React component library built for **Geo Digital Media** ([geodm.us](https://geodm.us)), a full-service digital agency based in Chicago, IL. All components use inline styles powered by a centralized design token system, require no external dependencies beyond React, and are fully mobile responsive.

## Installation

Copy the component `.jsx` files and `tokens.js` into your React project. No additional packages are required.

Make sure to include the following Google Fonts in your project's `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@400;500;600&display=swap" rel="stylesheet">
```

## File Structure

```
geodmus-components/
├── tokens.js        # Design tokens (colors, fonts, spacing)
├── GDMNav.jsx       # Fixed navigation bar
├── GDMHero.jsx      # Hero section with CTAs
├── GDMButton.jsx    # Multi-variant button
├── GDMCard.jsx      # Content card with featured state
├── GDMStats.jsx     # Animated statistics grid
├── index.jsx        # Demo page showcasing all components
└── README.md
```

## Design Tokens (`tokens.js`)

The `tokens.js` file centralizes the design system's core values. All components import tokens via a named export:

```javascript
import { tokens } from './tokens';
```

```javascript
export const tokens = {
  colors: {
    cyan: '#00c8d4',
    magenta: '#cc2d8f',
    background: '#020608',
    surface: '#0a1214',
    textPrimary: '#e8fffe',
    textSecondary: '#4a7a80',
    danger: '#e53e3e',
    white: '#ffffff',
  },
  fonts: {
    display: "'Bebas Neue', sans-serif",
    body: "'Barlow', sans-serif",
    condensed: "'Barlow Condensed', sans-serif",
  },
  borderRadius: '2px',
  gradient: 'linear-gradient(135deg, #00c8d4, #cc2d8f)',
};
```

---

## Components

### GDMNav

Fixed-position navigation bar with the GeoDMus branded logo (cyan **D**, magenta **M**), horizontal nav links, a gradient CTA button, and a mobile hamburger menu with full-screen overlay.

#### Usage

```jsx
import GDMNav from './GDMNav';

const Page = () => (
  <div>
    <GDMNav />
    {/* Page content */}
  </div>
);
```

#### Props

GDMNav takes no props. Navigation links and CTA are built in. Customize by editing the `navLinks` array inside the component.

---

### GDMHero

Full-viewport hero section with a subtle grid texture overlay, eyebrow text, headline, subheading, and two CTA buttons.

#### Usage

```jsx
import GDMHero from './GDMHero';

<GDMHero
  eyebrow="Full-Service Digital Agency"
  headline="We Build Digital Empires"
  subheading="Website design, AI automation, marketing, and Web3 strategy — all under one roof."
  ctaPrimary={{ text: 'Start Your Project', onClick: () => {} }}
  ctaSecondary={{ text: 'View Our Work', onClick: () => {} }}
/>
```

#### Props

| Prop | Type | Description | Default |
|---|---|---|---|
| `eyebrow` | `string` | Small uppercase text above the headline | `undefined` |
| `headline` | `string` | Main headline text (Bebas Neue, 64px desktop / 40px mobile) | `undefined` |
| `subheading` | `string` | Supporting paragraph below the headline | `undefined` |
| `ctaPrimary` | `{ text: string, onClick: function }` | Gradient primary CTA button | `undefined` |
| `ctaSecondary` | `{ text: string, onClick: function }` | Cyan-bordered secondary CTA button | `undefined` |

---

### GDMButton

Multi-variant, multi-size button component with hover effects.

#### Usage

```jsx
import GDMButton from './GDMButton';

<GDMButton variant="primary" size="md" onClick={() => {}}>
  Get Started
</GDMButton>

<GDMButton variant="ghost" size="lg" disabled>
  Disabled Ghost
</GDMButton>
```

#### Props

| Prop | Type | Description | Default |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'outline' \| 'danger'` | Visual style variant | `'primary'` |
| `size` | `'sm' \| 'md' \| 'lg'` | Button size | `'md'` |
| `children` | `ReactNode` | Button label content | — |
| `onClick` | `function` | Click handler | `undefined` |
| `disabled` | `boolean` | Disables the button | `false` |
| `style` | `object` | Additional inline styles to merge | `undefined` |

**Variant details:**

| Variant | Background | Text | Border |
|---|---|---|---|
| `primary` | Cyan-magenta gradient | White | None |
| `secondary` | Solid cyan | Dark (surface) | None |
| `ghost` | Transparent | Cyan | 1px cyan |
| `outline` | Transparent | White | 1px white |
| `danger` | Red (#e53e3e) | White | None |

---

### GDMCard

Content card with optional numbering and a featured highlight state.

#### Usage

```jsx
import GDMCard from './GDMCard';

<GDMCard
  number="01"
  title="Website Design & Development"
  body="Stunning, responsive websites tailored to your brand."
  link="#services"
  featured
/>
```

#### Props

| Prop | Type | Description | Default |
|---|---|---|---|
| `number` | `string` | Large watermark number displayed top-left (48px, 30% opacity) | `undefined` |
| `title` | `string` | Card title (Bebas Neue, 24px) | `undefined` |
| `body` | `string` | Card body text (Barlow, 15px) | `undefined` |
| `link` | `string` | URL for the "Learn More →" link | `undefined` |
| `featured` | `boolean` | Adds cyan top border and glow effect | `false` |

---

### GDMStats

Animated statistics section with a 4-column responsive grid. Values count up from 0 when scrolled into view using IntersectionObserver and requestAnimationFrame with easeOutQuad easing.

#### Usage

```jsx
import GDMStats from './GDMStats';

<GDMStats stats={[
  { value: 50, unit: '+', label: 'Projects Delivered' },
  { value: 98, unit: '%', label: 'Client Satisfaction' },
  { value: 24, unit: '/7', label: 'Support Available' },
  { value: 3, unit: 'x', label: 'Average ROI' },
]} />
```

#### Props

| Prop | Type | Description | Default |
|---|---|---|---|
| `stats` | `Array<{ value: number, unit: string, label: string }>` | Array of stat objects to display | `[]` |

**Responsive breakpoints:** 4 columns on desktop, 2 columns on tablet, 1 column on mobile.

---

## Demo Page (`index.jsx`)

The `index.jsx` file renders a complete demo page showcasing all five components with sample GeoDMus content. Import it as your app's root component to preview the full library.

```jsx
import App from './index';
```

---

## Company Info

Built for **Geo Digital Media** — [geodm.us](https://geodm.us)

Founded by Giovanni Salazar | Chicago, IL | hello@geodm.us | 773.236.1831

