import React, { useState } from ‘react’;
import { tokens } from ‘./tokens’;

const GDMButton = ({ variant = ‘primary’, size = ‘md’, children, onClick, style, disabled, …rest }) => {
const [isHovered, setIsHovered] = useState(false);

const baseStyle = {
fontFamily: tokens.fonts.condensed,
textTransform: ‘uppercase’,
letterSpacing: ‘2px’,
borderRadius: tokens.borderRadius,
cursor: disabled ? ‘not-allowed’ : ‘pointer’,
border: ‘none’,
transition: ‘all 0.2s ease’,
opacity: isHovered && !disabled ? 0.85 : 1,
display: ‘inline-flex’,
alignItems: ‘center’,
justifyContent: ‘center’,
textDecoration: ‘none’,
fontWeight: 700,
};

const variantStyles = {
primary: {
background: tokens.gradient,
color: tokens.colors.background,
},
secondary: {
backgroundColor: tokens.colors.cyan,
color: tokens.colors.background,
},
ghost: {
backgroundColor: ‘transparent’,
border: `1px solid ${tokens.colors.cyan}`,
color: tokens.colors.cyan,
},
outline: {
backgroundColor: ‘transparent’,
border: `1px solid rgba(232,255,254,.3)`,
color: tokens.colors.textPrimary,
},
danger: {
backgroundColor: ‘transparent’,
border: `1px solid rgba(255,68,102,.3)`,
color: ‘#ff4466’,
},
};

const sizeStyles = {
sm: { padding: ‘8px 16px’, fontSize: ‘10px’ },
md: { padding: ‘12px 24px’, fontSize: ‘11px’ },
lg: { padding: ‘16px 32px’, fontSize: ‘12px’ },
};

const combinedStyle = {
…baseStyle,
…variantStyles[variant],
…sizeStyles[size],
…style,
};

return (
<button
style={combinedStyle}
onClick={onClick}
disabled={disabled}
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}
{…rest}
>
{children}
</button>
);
};

export default GDMButton;
