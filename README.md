# Shiva Ganesh Talikota - Portfolio Website

A stunning liquid glass portfolio website built with Next.js, featuring dynamic animations, glassmorphism effects, and creative easter eggs.

![Portfolio Preview](https://via.placeholder.com/1200x600/1a1a2e/00f5ff?text=Shiva+Ganesh+Talikota+Portfolio)

## ✨ Features

- **🌊 Liquid Glass UI**: Advanced glassmorphism effects with backdrop blur
- **🎮 Interactive Animations**: Smooth Framer Motion animations and micro-interactions  
- **🎯 Easter Eggs**: Hidden surprises including Konami code, click sequences, and more
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **♿ Accessible**: WCAG compliant with keyboard navigation and screen reader support
- **⚡ High Performance**: Optimized for Core Web Vitals and SEO
- **🎨 Dynamic Backgrounds**: Animated gradient meshes and floating orbs
- **🔥 Modern Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion

## 🚀 Demo

Visit the live site: [shivaganesh.dev](https://shivaganesh.dev) *(Coming Soon)*

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism utilities
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist (Variable)
- **Deployment**: Vercel (Recommended)

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shivaganesh22/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 🎮 Easter Eggs

This portfolio includes several hidden features:

1. **Konami Code**: Press ↑↑↓↓←→←→BA for a Matrix surprise
2. **Secret Click**: Click the main heading 7 times quickly
3. **Developer Console**: Open dev tools for a special message
4. **Particle Trail**: Move your mouse around for interactive particles
5. **Random Achievements**: Rare achievement badges that appear randomly

## 📁 Project Structure

```
portfolio-website/
├── .github/
│   └── copilot-instructions.md
├── public/
│   ├── next.svg
│   └── vercel.svg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── EasterEgg.tsx
│       ├── Hero.tsx
│       ├── Learning.tsx
│       ├── Navigation.tsx
│       └── Projects.tsx
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 🎨 Customization

### Colors
The portfolio uses a custom color palette defined in `tailwind.config.ts`:
- **Neon Cyan**: `#00f5ff`
- **Neon Purple**: `#8b5cf6`
- **Neon Pink**: `#f472b6`
- **Neon Green**: `#10b981`

### Content
Update the content in the following components:
- `Hero.tsx`: Name, title, and introduction
- `About.tsx`: Bio, skills, and highlights
- `Projects.tsx`: Featured projects and GitHub links
- `Learning.tsx`: Current learning areas and research interests
- `Contact.tsx`: Contact information and collaboration areas

### Animations
All animations are built with Framer Motion and can be customized in each component file. Key animation variants are defined inline for easy modification.

## 🔧 Build & Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📊 Performance

The portfolio is optimized for performance:
- **First Load JS**: 164 kB (target: <200 kB)
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for FCP, LCP, and CLS
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 About

**Shiva Ganesh Talikota**
- Founder & CEO @ matriXO
- AI/ML Engineer & EdTech Innovator
- 🌍 Based in Hyderabad, India
- 📧 Email: shivaganesh.talikota@gmail.com
- 🔗 LinkedIn: [shiva-ganesh-talikota](https://linkedin.com/in/shiva-ganesh-talikota)
- 🐱 GitHub: [shivaganesh22](https://github.com/shivaganesh22)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for seamless deployment

---

⭐ **If you found this portfolio inspiring, please give it a star!**

*Built with ❤️ and lots of ☕*
