import React from ‘react’;
import { tokens } from ‘./tokens’;

const GDMCard = ({ number, title, body, link, featured = false }) => {
const cardStyle = {
backgroundColor: tokens.colors.surface,
borderRadius: tokens.borderRadius,
padding: ‘32px’,
border: `1px solid rgba(0,200,212,0.1)`,
display: ‘flex’,
flexDirection: ‘column’,
position: ‘relative’,
overflow: ‘hidden’,
…(featured && {
borderTop: `2px solid ${tokens.colors.cyan}`,
boxShadow: `0 0 20px rgba(0,200,212,0.15)`,
}),
};

const numberStyle = {
position: ‘absolute’,
top: ‘16px’,
left: ‘16px’,
color: tokens.colors.cyan,
fontFamily: tokens.fonts.display,
fontSize: ‘48px’,
opacity: 0.3,
lineHeight: 1,
};

const titleStyle = {
color: tokens.colors.textPrimary,
fontFamily: tokens.fonts.display,
fontSize: ‘24px’,
marginTop: ‘8px’,
marginBottom: ‘16px’,
lineHeight: 1.2,
};

const bodyStyle = {
color: tokens.colors.textSecondary,
fontFamily: tokens.fonts.body,
fontSize: ‘15px’,
lineHeight: 1.6,
marginBottom: ‘24px’,
flexGrow: 1,
};

const linkStyle = {
color: tokens.colors.cyan,
fontFamily: tokens.fonts.condensed,
textTransform: ‘uppercase’,
textDecoration: ‘none’,
letterSpacing: ‘1px’,
display: ‘inline-flex’,
alignItems: ‘center’,
fontSize: ‘16px’,
fontWeight: ‘bold’,
};

return (
<div style={cardStyle}>
{number && <div style={numberStyle}>{number}</div>}
<h3 style={titleStyle}>{title}</h3>
<p style={bodyStyle}>{body}</p>
{link && (
<a href={link} style={linkStyle}>
Learn More →
</a>
)}
</div>
);
};

export default GDMCard;
