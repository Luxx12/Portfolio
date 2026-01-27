# Gabe's Terminal Portfolio

A terminal-style portfolio website built with Next.js and Tailwind CSS.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deploy to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy (Vercel auto-detects Next.js)

## Project Structure

```
portfolio-nextjs/
├── app/
│   ├── globals.css      # Global styles + Tailwind
│   ├── layout.js        # Root layout
│   └── page.js          # Main page
├── components/
│   ├── Navbar.js        # Navigation bar
│   ├── Terminal.js      # Terminal input/commands
│   ├── HomeView.js      # Home page
│   ├── AboutView.js     # About page
│   ├── ProjectsView.js  # Projects page
│   ├── ResumeView.js    # Resume page
│   ├── ContactView.js   # Contact form
│   └── GameView.js      # Runner game
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── jsconfig.json
```

## Features

- Terminal-style navigation with commands
- Responsive design for mobile
- Interactive runner game
- Contact form via FormSubmit
- ASCII art headers
