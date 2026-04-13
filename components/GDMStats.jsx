import React, { useRef, useEffect, useState } from ‘react’;
import { tokens } from ‘./tokens’;

const GDMStats = ({ stats }) => {
const statRefs = useRef([]);
const [cols, setCols] = useState(4);

// Fix 1: responsive columns via useEffect (inline @media doesn’t work)
useEffect(() => {
const update = () => {
const w = window.innerWidth;
if (w < 480) setCols(1);
else if (w < 768) setCols(2);
else setCols(4);
};
update();
window.addEventListener(‘resize’, update);
return () => window.removeEventListener(‘resize’, update);
}, []);

const easeOutQuad = (t) => t * (2 - t);

useEffect(() => {
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
const raw = entry.target.dataset.value;
const numeric = parseInt(raw);
const valueEl = entry.target.querySelector(’.stat-value’);

```
        // Fix 2: skip count-up for non-numeric values like $799, 24/7
        if (isNaN(numeric) || raw !== String(numeric)) {
          if (valueEl) valueEl.textContent = raw;
          observer.unobserve(entry.target);
          return;
        }

        const duration = 2000;
        let startTimestamp = null;

        const animateCount = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = timestamp - startTimestamp;
          const easedProgress = easeOutQuad(Math.min(progress / duration, 1));
          const currentValue = Math.floor(easedProgress * numeric);
          if (valueEl) valueEl.textContent = currentValue;
          if (progress < duration) {
            requestAnimationFrame(animateCount);
          } else {
            if (valueEl) valueEl.textContent = numeric;
          }
        };

        requestAnimationFrame(animateCount);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

statRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
return () => statRefs.current.forEach((ref) => { if (ref) observer.unobserve(ref); });
```

}, [stats]);

const containerStyle = {
backgroundColor: tokens.colors.surface,
padding: ‘60px 24px’,
display: ‘grid’,
gridTemplateColumns: `repeat(${cols}, 1fr)`,
gap: ‘1px’,
background: ‘rgba(0,200,212,.1)’,
};

const statItemStyle = {
display: ‘flex’,
flexDirection: ‘column’,
alignItems: ‘center’,
textAlign: ‘center’,
backgroundColor: tokens.colors.surface,
padding: ‘28px 20px’,
};

const valueContainerStyle = {
display: ‘flex’,
alignItems: ‘baseline’,
color: tokens.colors.cyan,
fontFamily: tokens.fonts.display,
fontSize: ‘44px’,
lineHeight: 1,
marginBottom: ‘6px’,
};

const unitStyle = {
color: tokens.colors.textSecondary,
fontSize: ‘0.55em’,
marginLeft: ‘3px’,
};

const labelStyle = {
fontFamily: tokens.fonts.condensed,
textTransform: ‘uppercase’,
color: tokens.colors.textSecondary,
fontSize: ‘10px’,
letterSpacing: ‘2px’,
marginTop: ‘4px’,
};

return (
<div style={containerStyle}>
{stats.map((stat, index) => (
<div
key={index}
ref={(el) => (statRefs.current[index] = el)}
style={statItemStyle}
data-value={stat.value}
>
<div style={valueContainerStyle}>
<span className="stat-value">0</span>
<span style={unitStyle}>{stat.unit}</span>
</div>
<span style={labelStyle}>{stat.label}</span>
</div>
))}
</div>
);
};

export default GDMStats;
