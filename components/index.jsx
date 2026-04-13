import React from ‘react’;
import GDMNav from ‘./GDMNav’;
import GDMHero from ‘./GDMHero’;
import GDMButton from ‘./GDMButton’;
import GDMCard from ‘./GDMCard’;
import GDMStats from ‘./GDMStats’;
import { tokens } from ‘./tokens’;

const App = () => {
const pageStyle = {
backgroundColor: tokens.colors.background,
minHeight: ‘100vh’,
color: tokens.colors.textPrimary,
fontFamily: tokens.fonts.body,
};

const sectionStyle = {
padding: ‘80px 24px’,
maxWidth: ‘1200px’,
margin: ‘0 auto’,
};

const sectionTitleStyle = {
fontFamily: tokens.fonts.display,
fontSize: ‘40px’,
color: tokens.colors.cyan,
textAlign: ‘center’,
marginBottom: ‘40px’,
};

const subsectionTitleStyle = {
fontFamily: tokens.fonts.condensed,
fontSize: ‘18px’,
color: tokens.colors.textSecondary,
textTransform: ‘uppercase’,
letterSpacing: ‘2px’,
marginBottom: ‘16px’,
marginTop: ‘24px’,
};

const buttonContainerStyle = {
display: ‘flex’,
flexWrap: ‘wrap’,
gap: ‘15px’,
justifyContent: ‘center’,
marginBottom: ‘30px’,
};

const cardContainerStyle = {
display: ‘grid’,
gridTemplateColumns: ‘repeat(auto-fit, minmax(300px, 1fr))’,
gap: ‘30px’,
};

const handleCtaClick = () => {
alert(‘CTA Clicked!’);
};

const statsData = [
{ value: 50, unit: ‘+’, label: ‘Projects Delivered’ },
{ value: 98, unit: ‘%’, label: ‘Client Satisfaction’ },
{ value: 24, unit: ‘/7’, label: ‘Support Available’ },
{ value: 3, unit: ‘x’, label: ‘Average ROI’ },
];

return (
<div style={pageStyle}>
<GDMNav />

```
  <GDMHero
    eyebrow="Full-Service Digital Agency"
    headline="We Build Digital Empires"
    subheading="Website design, AI automation, marketing, and Web3 strategy — all under one roof."
    ctaPrimary={{ text: 'Start Your Project', onClick: handleCtaClick }}
    ctaSecondary={{ text: 'View Our Work', onClick: handleCtaClick }}
  />

  <div style={sectionStyle}>
    <h2 style={sectionTitleStyle}>GDMButton Variants & Sizes</h2>

    <h3 style={subsectionTitleStyle}>Primary</h3>
    <div style={buttonContainerStyle}>
      <GDMButton variant="primary" size="sm" onClick={handleCtaClick}>Small Primary</GDMButton>
      <GDMButton variant="primary" size="md" onClick={handleCtaClick}>Medium Primary</GDMButton>
      <GDMButton variant="primary" size="lg" onClick={handleCtaClick}>Large Primary</GDMButton>
    </div>

    <h3 style={subsectionTitleStyle}>Secondary</h3>
    <div style={buttonContainerStyle}>
      <GDMButton variant="secondary" size="sm" onClick={handleCtaClick}>Small Secondary</GDMButton>
      <GDMButton variant="secondary" size="md" onClick={handleCtaClick}>Medium Secondary</GDMButton>
      <GDMButton variant="secondary" size="lg" onClick={handleCtaClick}>Large Secondary</GDMButton>
    </div>

    <h3 style={subsectionTitleStyle}>Ghost</h3>
    <div style={buttonContainerStyle}>
      <GDMButton variant="ghost" size="sm" onClick={handleCtaClick}>Small Ghost</GDMButton>
      <GDMButton variant="ghost" size="md" onClick={handleCtaClick}>Medium Ghost</GDMButton>
      <GDMButton variant="ghost" size="lg" onClick={handleCtaClick}>Large Ghost</GDMButton>
    </div>

    <h3 style={subsectionTitleStyle}>Outline</h3>
    <div style={buttonContainerStyle}>
      <GDMButton variant="outline" size="sm" onClick={handleCtaClick}>Small Outline</GDMButton>
      <GDMButton variant="outline" size="md" onClick={handleCtaClick}>Medium Outline</GDMButton>
      <GDMButton variant="outline" size="lg" onClick={handleCtaClick}>Large Outline</GDMButton>
    </div>

    <h3 style={subsectionTitleStyle}>Danger</h3>
    <div style={buttonContainerStyle}>
      <GDMButton variant="danger" size="sm" onClick={handleCtaClick}>Small Danger</GDMButton>
      <GDMButton variant="danger" size="md" onClick={handleCtaClick}>Medium Danger</GDMButton>
      <GDMButton variant="danger" size="lg" onClick={handleCtaClick}>Large Danger</GDMButton>
    </div>
  </div>

  <div style={sectionStyle}>
    <h2 style={sectionTitleStyle}>GDMCard Examples</h2>
    <div style={cardContainerStyle}>
      <GDMCard
        number="01"
        title="Website Design & Development"
        body="Stunning, responsive websites tailored to your brand. Built for speed, SEO, and conversion."
        link="#services"
      />
      <GDMCard
        number="02"
        title="AI Automation & Systems"
        body="Streamline operations with intelligent AI solutions that save time and scale your business."
        link="#services"
        featured
      />
      <GDMCard
        number="03"
        title="Marketing & Social Media"
        body="Boost your online presence and reach more customers with data-driven marketing strategies."
        link="#services"
      />
    </div>
  </div>

  <GDMStats stats={statsData} />
</div>
```

);
};

export default App;
