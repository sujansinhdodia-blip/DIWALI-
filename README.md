# 🪔 Happy Diwali Greeting Website

A stunning, joyful, component-based Diwali greeting website built with React, Vite, Tailwind CSS, and Framer Motion — from the **Darbar Family** to share with friends and family.

---

## ✨ Features

- **Twilight Night Sky**: Deep indigo to saffron sunset gradient with twinkling stars and soft golden bokeh.
- **Continuous Fireworks**: Real-time canvas fireworks bursting in the sky + bigger burst on any click.
- **Interactive Diya**: Click "Light the Diya" to ignite the flame, glow the screen, and trigger a fireworks show!
- **Bloomed Rangoli**: Colorful mandala that blooms and spins smoothly.
- **Swaying Lanterns & Fairy Lights**: Animated hanging lanterns and twinkling string lights across the top.
- **Floating Petals**: Marigold flower petals gently drifting down.
- **Golden Shimmer Main Title**: Letter-by-letter reveal animation.
- **Personal Message Card**: Heartfelt wishes in a frosted-glass card.
- **Trilingual Wishes Carousel**: Auto-rotating wishes in English, Hindi, and Gujarati.
- **Personalized Greeting**: Guests can enter their name to see a custom celebration with confetti.
- **Share Buttons**: Direct WhatsApp, Instagram, and Copy-Link with pre-written festive message.
- **Sparkle Mouse Trail**: Golden sparkle stars follow mouse / finger movement.
- **Festive Background Music**: Mute / unmute button in the top-right corner.
- **Temple / City Skyline**: Glowing silhouette at the bottom with illuminated windows.
- **Fully Responsive**: Mobile-first design optimized for WhatsApp sharing.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

---

## ⚙️ How to Personalize (Single Config File!)

Open **`src/config.js`** to customize everything:

```javascript
const config = {
  // 1. Change your family name:
  familyName: "Darbar Family",

  // 2. Change the hero text:
  heroTitle: "Happy Diwali 🪔",
  heroSubtitle: "May your life be filled with light, love, and joy",

  // 3. Edit your heartfelt message:
  personalMessage: `As the festival of lights...`,

  // 4. Edit or add wishes (English, Hindi, Gujarati):
  wishes: [ ... ],

  // 5. Change the share message & update your deployed URL:
  shareMessage: "🪔 Wishing you a very Happy Diwali...",
  siteUrl: "https://your-site.vercel.app",
};
```

---

## 🌐 Deploy for Free (Share with Family & Friends)

### Option 1: Deploy on Vercel (Easiest - 1 minute)
1. Push this project to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep all default settings (Framework Preset: **Vite**).
5. Click **Deploy**.
6. Done! Copy your link and update `siteUrl` in `src/config.js`.

### Option 2: Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) and log in.
2. Drag and drop the `dist/` folder directly, OR connect your GitHub repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.

---

## 📁 Project Structure

```
diwali/
├── index.html
├── vite.config.js
├── src/
│   ├── config.js              <- 🎯 Personalize everything here
│   ├── index.css             <- Styles & animations
│   ├── main.jsx
│   ├── App.jsx
│   └── components/
│       ├── Hero.jsx           <- Shimmer title & letter reveal
│       ├── InteractiveDiya.jsx<- Clickable diya with flame glow
│       ├── FireworksCanvas.jsx<- Continuous fireworks engine
│       ├── Rangoli.jsx        <- Blooming rotating mandala
│       ├── Lanterns.jsx       <- Swaying lanterns & fairy lights
│       ├── FloatingPetals.jsx <- Drifting marigold petals
│       ├── PersonalMessage.jsx<- Glassmorphism wish card
│       ├── WishesCarousel.jsx <- Trilingual wishes slider
│       ├── NameGreeting.jsx   <- Custom name greeting + confetti
│       ├── ShareButtons.jsx   <- WhatsApp / Instagram / Copy Link
│       ├── StarryBackground.jsx<- Twinkling stars & bokeh
│       ├── Cityline.jsx       <- Temple & city silhouette
│       ├── MouseSparkle.jsx   <- Follow-the-cursor sparkles
│       ├── MusicToggle.jsx    <- Audio control button
│       └── Footer.jsx         <- Shubh Deepavali & sign-off
```

---

With love, **Darbar Family** ❤️
