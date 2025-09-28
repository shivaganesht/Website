import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced Liquid Glass Theme
        'glass': {
          'subtle': 'rgba(255, 255, 255, 0.06)',
          'light': 'rgba(255, 255, 255, 0.1)',
          'medium': 'rgba(255, 255, 255, 0.15)',
          'strong': 'rgba(255, 255, 255, 0.2)',
          'dark': 'rgba(0, 0, 0, 0.3)',
        },
        'neon': {
          'cyan': '#00f5ff',
          'purple': '#8b5cf6',
          'pink': '#f472b6',
          'green': '#10b981',
          'blue': '#3b82f6',
          'yellow': '#f59e0b',
          'orange': '#f97316',
          'red': '#ef4444',
        },
        'gradient': {
          'start': '#667eea',
          'middle': '#764ba2',
          'end': '#f093fb',
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        'glass-strong': 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))',
        'glass-subtle': 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
        'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'mesh-gradient': `
          radial-gradient(ellipse at top, hsla(280,100%,74%,0.15) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, hsla(340,100%,76%,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at left, hsla(189,100%,56%,0.1) 0%, transparent 50%),
          radial-gradient(ellipse at right, hsla(270,100%,70%,0.1) 0%, transparent 50%),
          radial-gradient(ellipse at center, hsla(220,100%,60%,0.08) 0%, transparent 50%)
        `,
        'aurora': `
          linear-gradient(118deg, 
            rgba(120, 119, 198, 0.3) 0%, 
            rgba(255, 154, 158, 0.2) 50%, 
            rgba(0, 245, 255, 0.2) 100%
          )
        `,
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '20px',
        'glass-strong': '32px',
        'glass-heavy': '40px',
        'glass-ultra': '60px',
      },
      backdropSaturate: {
        '150': '1.5',
        '180': '1.8',
        '200': '2',
      },
      backdropBrightness: {
        '110': '1.1',
        '120': '1.2',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'liquid-morph': 'liquid-morph 8s ease-in-out infinite',
        'aurora': 'aurora 15s ease-in-out infinite',
        'glass-float': 'glass-float 4s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 3s linear infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
        'glitch': 'glitch 2s ease-in-out infinite',
        'typewriter': 'typewriter 2s steps(40, end)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        glow: {
          'from': { 'box-shadow': '0 0 20px #00f5ff, 0 0 30px #00f5ff, 0 0 40px #00f5ff' },
          'to': { 'box-shadow': '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff' },
        },
        'slide-up': {
          'from': { transform: 'translateY(100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'scale-in': {
          'from': { transform: 'scale(0.9)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'liquid-morph': {
          '0%': { 
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            transform: 'rotate(0deg) scale(1)',
          },
          '25%': { 
            borderRadius: '58% 42% 75% 25% / 76% 24% 76% 24%',
            transform: 'rotate(90deg) scale(1.1)',
          },
          '50%': { 
            borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%',
            transform: 'rotate(180deg) scale(0.9)',
          },
          '75%': { 
            borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%',
            transform: 'rotate(270deg) scale(1.05)',
          },
          '100%': { 
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            transform: 'rotate(360deg) scale(1)',
          },
        },
        'aurora': {
          '0%': { 
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(0deg)',
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            filter: 'hue-rotate(180deg)',
          },
          '100%': { 
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(360deg)',
          },
        },
        'glass-float': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            filter: 'blur(0px)',
          },
          '33%': { 
            transform: 'translateY(-10px) rotate(2deg)',
            filter: 'blur(0.5px)',
          },
          '66%': { 
            transform: 'translateY(5px) rotate(-1deg)',
            filter: 'blur(0.3px)',
          },
        },
        'neon-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)',
            filter: 'brightness(1)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 245, 255, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)',
            filter: 'brightness(1.2)',
          },
        },
        'matrix-rain': {
          '0%': { 
            transform: 'translateY(-100vh)',
            opacity: '0',
          },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { 
            transform: 'translateY(100vh)',
            opacity: '0',
          },
        },
        'hologram': {
          '0%, 100%': { 
            filter: 'hue-rotate(0deg) contrast(1)',
            transform: 'scale(1)',
          },
          '33%': { 
            filter: 'hue-rotate(120deg) contrast(1.2)',
            transform: 'scale(1.02)',
          },
          '66%': { 
            filter: 'hue-rotate(240deg) contrast(0.8)',
            transform: 'scale(0.98)',
          },
        },
        'glitch': {
          '0%': { 
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)',
          },
          '20%': { 
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(90deg)',
          },
          '40%': { 
            transform: 'translate(-2px, -2px)',
            filter: 'hue-rotate(180deg)',
          },
          '60%': { 
            transform: 'translate(2px, 2px)',
            filter: 'hue-rotate(270deg)',
          },
          '80%': { 
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(360deg)',
          },
          '100%': { 
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)',
          },
        },
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow-cyan': '0 0 20px rgba(0, 245, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-pink': '0 0 20px rgba(244, 114, 182, 0.3)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        'glass': '20px',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config