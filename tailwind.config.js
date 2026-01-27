/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#0a1628',
        'terminal-text': '#e0e6f0',
        'terminal-accent': '#4da6ff',
        'terminal-accent-bright': '#7ec8ff',
        'terminal-dim': '#6b7d9e',
        'terminal-success': '#4dff91',
        'terminal-border': '#1e3a5f',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
