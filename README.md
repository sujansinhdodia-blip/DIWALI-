# 🪔 Happy Diwali Greeting Website — Darbar Family

> A joyful, interactive, and SEO-optimized Diwali greeting experience built with React, Vite, Tailwind CSS, Framer Motion, and festive Indian background music.

---

## 🌐 Live Deployed URL

✨ **Visit Live Website**: [**https://sujansinhdodia-blip.github.io/DIWALI-/**](https://sujansinhdodia-blip.github.io/DIWALI-/)

*(Alternative Vercel Deployment: [https://diwali-darbar.vercel.app](https://diwali-darbar.vercel.app))*

---

## 🌟 Key Features

- **Festive Diwali Song**: Plays authentic festive audio from the Darbar Family (`/diwali-song.mp4`) with smooth equalizer animation and loop controls.
- **Interactive Sacred Diya**: Tap to ignite the flickering flame, illuminating the screen with a warm golden glow and launching a celebratory fireworks show.
- **Continuous 60fps Canvas Fireworks**: Particle fireworks bursting in the twilight sky + click-anywhere to launch rockets and confetti bursts.
- **Mandala Rangoli**: Blooming floral mandala with smooth continuous rotation.
- **Swaying Lanterns & Fairy Lights**: Animated hanging lanterns and twinkling string lights along the top.
- **Falling Marigold Petals**: Realistic flower petals gently drifting down.
- **Temple & City Skyline**: Illuminated temple dome and night city with glowing lit windows.
- **Trilingual Wishes Carousel**: Auto-rotating blessings in **English**, **Hindi (हिन्दी)**, and **Gujarati (ગુજરાતી)**.
- **Personalized Name Greeting**: Enter any name to generate an instant celebration card with confetti.
- **One-Click Share Buttons**: Direct sharing to **WhatsApp** (pre-composed message with live link), **Instagram**, and **Copy Link**.
- **Sparkle Cursor Trail**: 4-pointed golden stars trailing mouse and finger movements.

---

## 🔍 SEO & Social Sharing Optimization

- **Schema.org Structured Data**: Complete JSON-LD markup for `WebSite` and `Event` (Diwali Festival of Lights).
- **Open Graph Protocol (OG)**: Customized rich card previews with `og-image.svg` (1200x630) for WhatsApp, Facebook, iMessage, and LinkedIn.
- **Twitter Card**: `summary_large_image` for rich tweet previews.
- **Robots & Sitemap**: Pre-configured `robots.txt` and `sitemap.xml` for full Google search indexation.
- **Trilingual Accessibility**: Language annotations for English (`en-IN`), Hindi (`hi-IN`), and Gujarati (`gu-IN`).

---

## ⚙️ Easy Customization (`src/config.js`)

All messages, family names, and wishes can be customized in a single configuration file at **[`src/config.js`](src/config.js)**:

```javascript
const config = {
  // Family name
  familyName: "Darbar Family",

  // Hero section
  heroTitle: "Happy Diwali 🪔",
  heroSubtitle: "May your life be filled with light, love, and joy",

  // Personal message
  personalMessage: `As the festival of lights...`,

  // Wishes (English, Hindi, Gujarati)
  wishes: [ ... ],

  // Share message & URL
  shareMessage: "🪔 Wishing you a very Happy Diwali from the Darbar Family!...",
  siteUrl: "https://sujansinhdodia-blip.github.io/DIWALI-/",
};
```

---

## 🚀 Local Development

```bash
# 1. Install packages
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build
```

---

## 🛠️ GitHub Pages One-Time Setup

To make the live URL active on GitHub Pages:
1. Open this repository on GitHub: [https://github.com/sujansinhdodia-blip/DIWALI-](https://github.com/sujansinhdodia-blip/DIWALI-)
2. Go to **Settings** → **Pages** (under Code and automation).
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!

---

With warm festive blessings,  
**Darbar Family ❤️**
