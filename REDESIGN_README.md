# Harp Lessons NYC - Modern Conservatory Redesign

A luxury, high-end website redesign built with Next.js, featuring smooth animations and a refined aesthetic.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Lenis** - Smooth scroll library
- **Lucide React** - Beautiful icon library

## Getting Started

### 1. Install Dependencies (if not already done)

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### 3. Build for Production

```bash
npm run build
npm start
```

## Design Features

### Motion & Feel

- **Smooth Scrolling**: Lenis provides weighted, luxurious scroll feel
- **Scroll Reveals**: Elements ease in with staggered y-axis float and opacity fade
- **Micro-interactions**:
  - Magnetic hover effects on buttons
  - Scale shifts on interactive elements
  - Elegant expanding underlines on links

### Typography

- **Serif**: Playfair Display for headings (elegant, high-end)
- **Sans**: Inter for body copy (clean, geometric)

### Animation Physics

All animations use Apple's UI physics curve:

```javascript
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
```

This creates smooth, professional motion that never feels bouncy or cartoony.

## Project Structure

```
.
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.js            # Root layout with fonts
│   └── page.js              # Main page
├── components/
│   ├── SmoothScroll.jsx     # Lenis integration
│   ├── Header.jsx           # Animated header with scroll detection
│   ├── Hero.jsx             # Full-screen hero with staggered animations
│   ├── Pillars.jsx          # Three audience cards with hover effects
│   ├── About.jsx            # Split layout with parallax
│   ├── Lessons.jsx          # Lesson details section
│   ├── FAQ.jsx              # Accordion FAQ
│   ├── Contact.jsx          # Contact form + info
│   └── Footer.jsx           # Footer with back-to-top
├── images/                  # All existing images
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts

```

## Key Components

### Header
- Transparent initially, becomes solid white on scroll
- Smooth fade-in animation on load
- Elegant hover states with expanding underlines
- Mobile responsive with animated menu

### Hero
- Full viewport height (100vh)
- Background image with dark overlay
- Staggered text animations that rise up
- Animated scroll indicator

### Pillars (Three Audiences)
- 3-column grid layout
- Lucide React icons (User, Music, Star)
- Subtle hover lift effect
- Scroll-triggered fade-in

### About
- Split layout (image + text)
- Parallax effect on image
- Smooth scroll reveal animations

### FAQ
- Accordion-style with smooth expand/collapse
- Rotating + icon on open
- Sticky image on desktop

### Contact
- Formspree integration (same endpoint as before)
- Elegant form styling with focus states
- Direct contact links with hover effects

## Customization

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#585c53',
    light: '#737360',
    lighter: '#85927c',
  },
  cream: '#f9f9f9',
}
```

### Fonts

To change fonts, edit `app/layout.js`:

```javascript
import { YourSerifFont, YourSansFont } from 'next/font/google'
```

### Animation Timing

To adjust the "feel" of animations, modify the transition in any component:

```javascript
// Slower, more dramatic
transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}

// Faster, snappier
transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
```

### Smooth Scroll Settings

Edit `components/SmoothScroll.jsx`:

```javascript
const lenis = new Lenis({
  duration: 1.2,        // Increase for slower scroll
  wheelMultiplier: 1,   // Increase for more scroll per wheel turn
})
```

## Analytics & Tracking

The original site has Google Tag Manager, Meta Pixel, and Google Analytics. To integrate these:

1. Add tracking scripts to `app/layout.js` in the `<head>` section
2. Keep the Formspree endpoint: `https://formspree.io/f/mrbpoaqr`
3. Add form submission tracking to `components/Contact.jsx`

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Static Export

If you need a static export:

1. Edit `next.config.js`:
```javascript
output: 'export',
```

2. Build:
```bash
npm run build
```

The static files will be in the `out/` directory.

## Tips for "Strong" Feel

1. **Never use default easing** - Always use the Apple curve: `[0.16, 1, 0.3, 1]`
2. **Stagger animations** - Use `staggerChildren` in Framer Motion variants
3. **Respect scroll direction** - Elements should rise up (y: 40 → 0)
4. **Keep durations consistent** - 0.8s for most animations, 0.3s for micro-interactions
5. **Use transform over position** - GPU-accelerated, smoother animations

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (including iOS)

Note: Smooth scrolling may be reduced on mobile devices for performance.

## Performance

- Images lazy load by default
- Lenis smooth scroll is disabled on touch devices
- All animations are GPU-accelerated (transform/opacity)
- Font loading optimized with `next/font`

## Need Help?

- Framer Motion Docs: https://www.framer.com/motion/
- Lenis Smooth Scroll: https://lenis.studiofreight.com/
- Tailwind CSS: https://tailwindcss.com/
- Next.js Docs: https://nextjs.org/docs

---

**Built with ❤️ for modern conservatory aesthetics**
