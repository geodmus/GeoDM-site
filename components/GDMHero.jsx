import React, { useState, useEffect } from ‘react’;
import { tokens } from ‘./tokens’;

const GDMHero = ({ eyebrow, headline, subheading, ctaPrimary, ctaSecondary }) => {
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
const checkMobile = () => {
setIsMobile(window.innerWidth < 768);
};

```
checkMobile();
window.addEventListener('resize', checkMobile);

return () => {
  window.removeEventListener('resize', checkMobile);
};
```

}, []);

const heroStyles = {
minHeight: ‘100vh’,
backgroundColor: tokens.colors.background,
display: ‘flex’,
justifyContent: ‘center’,
alignItems: ‘center’,
position: ‘relative’,
overflow: ‘hidden’,
padding: ‘64px 24px’, // Added padding for smaller screens to prevent content from touching edges
boxSizing: ‘border-box’,
};

const gridOverlayStyles = {
position: ‘absolute’,
top: 0,
left: 0,
width: ‘100%’,
height: ‘100%’,
backgroundImage: ‘linear-gradient(to right, rgba(0,200,212,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,200,212,0.03) 1px, transparent 1px)’,
backgroundSize: ‘40px 40px’,
pointerEvents: ‘none’,
};

const contentContainerStyles = {
maxWidth: ‘800px’,
textAlign: ‘center’,
padding: ‘0 24px’,
position: ‘relative’,
zIndex: 1,
};

const eyebrowStyles = {
fontFamily: tokens.fonts.condensed,
textTransform: ‘uppercase’,
color: tokens.colors.cyan,
fontSize: ‘14px’,
letterSpacing: ‘3px’,
marginBottom: ‘16px’,
};

const headlineStyles = {
fontFamily: tokens.fonts.display,
color: tokens.colors.textPrimary,
fontSize: isMobile ? ‘40px’ : ‘64px’,
lineHeight: 1.05,
marginBottom: ‘24px’,
};

const subheadingStyles = {
fontFamily: tokens.fonts.body,
color: tokens.colors.textSecondary,
fontSize: isMobile ? ‘16px’ : ‘18px’,
lineHeight: 1.6,
marginBottom: ‘40px’,
maxWidth: ‘600px’,
margin: ‘auto’,
};

const ctaButtonRowStyles = {
display: ‘flex’,
gap: ‘16px’,
justifyContent: ‘center’,
flexWrap: ‘wrap’,
};

const ctaPrimaryStyles = {
background: tokens.gradient,
color: tokens.colors.white,
fontFamily: tokens.fonts.condensed,
textTransform: ‘uppercase’,
padding: ‘14px 32px’,
borderRadius: tokens.borderRadius,
border: ‘none’,
cursor: ‘pointer’,
fontSize: ‘16px’,
letterSpacing: ‘1px’,
};

const ctaSecondaryStyles = {
backgroundColor: ‘transparent’,
border: `1px solid ${tokens.colors.cyan}`,
color: tokens.colors.cyan,
fontFamily: tokens.fonts.condensed,
textTransform: ‘uppercase’,
padding: ‘14px 32px’,
borderRadius: tokens.borderRadius,
cursor: ‘pointer’,
fontSize: ‘16px’,
letterSpacing: ‘1px’,
};

return (
<section style={heroStyles}>
<div style={gridOverlayStyles}></div>
<div style={contentContainerStyles}>
<p style={eyebrowStyles}>{eyebrow}</p>
<h1 style={headlineStyles}>{headline}</h1>
<p style={subheadingStyles}>{subheading}</p>
<div style={ctaButtonRowStyles}>
{ctaPrimary && (
<button style={ctaPrimaryStyles} onClick={ctaPrimary.onClick}>
{ctaPrimary.text}
</button>
)}
{ctaSecondary && (
<button style={ctaSecondaryStyles} onClick={ctaSecondary.onClick}>
{ctaSecondary.text}
</button>
)}
</div>
</div>
</section>
);
};

export default GDMHero;
