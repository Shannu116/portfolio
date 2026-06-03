# 🔥 Cyberpunk Portfolio - Shanmukha Perla

A cutting-edge cyberpunk-themed portfolio website featuring Matrix rain animation, terminal styling, glitch effects, and smooth GSAP animations. Built for cybersecurity professionals and tech enthusiasts.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌟 Live Demo

Visit the live portfolio: [https://shannu116.github.io/portfolio/](https://shannu116.github.io/portfolio/)

## 📸 Preview

![Portfolio Screenshot](preview.png)

## ✨ Features

### 🎨 Visual Effects
- **Matrix Rain Background** - Animated falling code effect inspired by The Matrix
- **Terminal Loading Screen** - Hacker-style initialization with progress bar
- **CRT Screen Effects** - Authentic scanlines and noise overlay
- **Neon Glow Animations** - Pulsing cyan and blue neon effects
- **Glitch Text Effects** - Dynamic RGB split on hero title

### 🎯 Sections
- **Hero** - Terminal prefix with typing animation (CYBERSECURITY ANALYST | PENETRATION TESTER | SOC ANALYST)
- **About** - Stats cards with projects, certifications, CGPA + TryHackMe badge integration
- **Skills** - 4 categories: Security Tools, Programming, Networking, Operating Systems
- **Projects** - 6 real security projects with hover effects
- **Contact** - Terminal-styled form with neon buttons

### ⚡ Technologies & Animations
- **GSAP 3.12.2** - Professional scroll-triggered animations
- **ScrollTrigger** - Smooth reveals and parallax effects
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **CSS3 Animations** - Keyframe animations and transitions
- **Canvas API** - Custom Matrix rain effect

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Shannu116/portfolio.git
cd portfolio

## 📁 File Structure

```
portfolio/
│
├── index.html          # Main HTML with cyberpunk elements
├── styles.css          # Cyberpunk theme styling
├── script.js           # Interactive features + GSAP animations
├── matrix.js           # Matrix rain background effect
├── shannu_resume.pdf   # Your resume
└── README.md          # Documentation
```

### 2. Open in Browser
Simply open `index.html` in your browser - no build process required!

### 3. Customize
- Update personal info in `index.html`
- Replace `profile_pic.png` with your photo
- Add your `resume.pdf`
- Modify colors in `styles.css` `:root` section

## 🎨 Customization Guide

### Change Color Scheme
Modify colors in `styles.css`:
```css
:root {
    --neon-cyan: #00d9ff;
    --neon-blue: #00a8ff;
    --neon-purple: #5865F2;
}
```

### Update Typing Animation
Change job titles in `script.js`:
```javascript
const textArray = [
    'YOUR TITLE 1', 
    'YOUR TITLE 2', 
    'YOUR TITLE 3'
];
```

### Adjust Matrix Effect Speed
In `matrix.js`, change the interval:
```javascript
// Change interval for speed (lower = faster)
setInterval(drawMatrix, 35); // Lower = faster
```

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit: Cyberpunk portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```
3. Go to Settings → Pages → Build and deployment → Source: **GitHub Actions**
4. Push to `main` (or run the **Deploy static content to Pages** workflow manually)
5. Your site will be live at `https://YOUR_USERNAME.github.io/portfolio/`

### Netlify
1. Drag and drop your folder to [Netlify](https://app.netlify.com/drop)
2. Or connect your GitHub repository for auto-deployment

### Vercel
```bash
npm i -g vercel
vercel
```

## 📧 Contact Form Setup

The form currently shows an alert. Make it functional:

### Option 1: FormSpree (Free)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms
Add `data-netlify="true"` to the form tag:
```html
<form class="contact-form terminal-form" data-netlify="true">
```

### Option 3: EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Add their library and configure in `script.js`

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure and semantics |
| CSS3 | Cyberpunk styling and animations |
| JavaScript ES6+ | Interactive features |
| GSAP 3.12.2 | Scroll animations |
| Canvas API | Matrix rain effect |
| Font Awesome | Icons |
| Google Fonts | Typography (Orbitron, Share Tech Mono, Space Mono) |

## 📝 Features Breakdown

### Visual Effects
- ✅ Matrix rain background
- ✅ CRT scanlines overlay
- ✅ Terminal loading screen
- ✅ Neon glow animations
- ✅ Glitch text effect on hero
- ✅ Smooth scroll animations

### Sections
- ✅ Hero with typing animation
- ✅ About with stats and TryHackMe badge
- ✅ Skills with 4 categories
- ✅ Projects showcase (6 projects)
- ✅ Contact form with terminal styling
- ✅ Responsive footer

### Performance
- No dependencies to install
- Optimized animations
- Lazy-loaded scripts
- Minimal external requests

## 🎯 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11 (limited support)

## 📱 Responsive Design

Fully responsive with breakpoints:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Matrix effect inspired by The Matrix
- Cyberpunk aesthetic inspired by Cyberpunk 2077
- Terminal styling inspired by Mr. Robot
- GSAP for smooth animations
- Font Awesome for icons
- Google Fonts for typography

## 📞 Contact

**Shanmukha Perla**
- Email: shanmukhaperla@gmail.com
- LinkedIn: [linkedin.com/in/shanmukha-perla-58216a2b6](https://www.linkedin.com/in/shanmukha-perla-58216a2b6)
- GitHub: [@Shannu116](https://github.com/Shannu116)
- TryHackMe: [R00tH4sh1r4](https://tryhackme.com/p/R00tH4sh1r4)

---

<div align="center">

**⚡ Built with passion for cybersecurity and clean code ⚡**

Made with 💙 by Shanmukha Perla

```
> SYSTEM STATUS: OPERATIONAL
> PORTFOLIO INITIALIZED
> READY TO DEPLOY
```

</div>
