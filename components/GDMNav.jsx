import React, { useState, useEffect } from ‘react’;
import { tokens } from ‘./tokens’;

const GDMNav = () => {
const [isOpen, setIsOpen] = useState(false);
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

const navLinks = [‘Services’, ‘Ventures’, ‘Pricing’, ‘About’, ‘Contact’];

const navStyles = {
position: ‘fixed’,
top: 0,
left: 0,
width: ‘100%’,
zIndex: 1000,
backgroundColor: `rgba(${parseInt(tokens.colors.surface.slice(1, 3), 16)}, ${parseInt(tokens.colors.surface.slice(3, 5), 16)}, ${parseInt(tokens.colors.surface.slice(5, 7), 16)}, 0.95)`,
backdropFilter: ‘blur(5px)’,
padding: ‘16px 32px’,
display: ‘flex’,
justifyContent: ‘space-between’,
alignItems: ‘center’,
boxSizing: ‘border-box’,
};

const logoStyles = {
fontFamily: tokens.fonts.display,
fontSize: ‘28px’,
letterSpacing: ‘2px’,
color: tokens.colors.textPrimary,
};

const linkContainerStyles = {
display: ‘flex’,
gap: ‘32px’,
};

const linkStyles = {
fontFamily: tokens.fonts.condensed,
textTransform: ‘uppercase’,
color: tokens.colors.textSecondary,
fontSize: ‘14px’,
letterSpacing: ‘1px’,
textDecoration: ‘none’,
transition: ‘color 0.3s ease’,
};

const linkHoverStyles = {
color: tokens.colors.cyan,
};

const ctaButtonStyles = {
background: tokens.gradient,
color: tokens.colors.white,
fontFamily: tokens.fonts.condensed,
textTransform: ‘uppercase’,
padding: ‘10px 24px’,
borderRadius: tokens.borderRadius,
border: ‘none’,
cursor: ‘pointer’,
fontSize: ‘14px’,
letterSpacing: ‘1px’,
};

const hamburgerStyles = {
display: ‘flex’,
flexDirection: ‘column’,
gap: ‘4px’,
cursor: ‘pointer’,
};

const hamburgerLineStyles = {
width: ‘24px’,
height: ‘2px’,
backgroundColor: tokens.colors.cyan,
};

const mobileMenuOverlayStyles = {
position: ‘fixed’,
top: 0,
left: 0,
width: ‘100%’,
height: ‘100%’,
backgroundColor: tokens.colors.background,
display: ‘flex’,
flexDirection: ‘column’,
justifyContent: ‘center’,
alignItems: ‘center’,
zIndex: 999,
};

const mobileMenuLinkStyles = {
…linkStyles,
fontSize: ‘24px’,
padding: ‘16px’,
};

return (
<nav style={navStyles}>
<div style={logoStyles}>
GEO<span style={{ color: tokens.colors.cyan }}>D</span>
<span style={{ color: tokens.colors.magenta }}>M</span>us
</div>

```
  {isMobile ? (
    <div style={hamburgerStyles} onClick={() => setIsOpen(!isOpen)}>
      <div style={hamburgerLineStyles}></div>
      <div style={hamburgerLineStyles}></div>
      <div style={hamburgerLineStyles}></div>
    </div>
  ) : (
    <>
      <div style={linkContainerStyles}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={linkStyles}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyles.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyles.color)}
          >
            {link}
          </a>
        ))}
      </div>
      <button style={ctaButtonStyles}>Get Started</button>
    </>
  )}

  {isMobile && isOpen && (
    <div style={mobileMenuOverlayStyles}>
      {navLinks.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          style={mobileMenuLinkStyles}
          onClick={() => setIsOpen(false)}
        >
          {link}
        </a>
      ))}
      <button style={{ ...ctaButtonStyles, marginTop: '32px', fontSize: '18px' }} onClick={() => setIsOpen(false)}>Get Started</button>
    </div>
  )}
</nav>
```

);
};

export default GDMNav;
