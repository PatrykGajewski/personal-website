
# Personal Website – Engineering Portfolio

## Overview

This repository contains the source code for my personal website.

The goal of this project is not only to present my work and experience, but also to demonstrate engineering standards, architectural decisions, and production-level practices in a small-scale application.

The project is intentionally built as a real-world production-ready system rather than a static `business card` page.

---

## Goals

- Build a fast, accessible, and SEO-friendly static website
- Demonstrate modern frontend architecture using Next.js
- Create a small but scalable design system with Tailwind CSS
- Implement light/dark theme support
- Implement multilingual support
- Set up automated CI/CD deployment
- Maintain clean Git repository with incremental, well documented commits history

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS (custom theme configuration)
- **Deployment:** Vercel (automatic CI/CD)
- **Domain:** Managed via OVH
- **Linting & Formatting:** ESLint + Prettier
- **Git Hooks:** Husky + lint-staged

---
## Local Development

### Install dependencies:

`npm install`

### Run development server:

`npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for production:

`npm run build`

---

## Architecture Principles

- Clear separation between layout, UI components, and domain sections
- Minimal client-side JavaScript where possible
- Accessibility-first approach (semantic HTML, ARIA where necessary)
- Performance-oriented (image optimization, minimal bundle size)
- Small, composable components
- Explicit architectural decisions documented via ADRs

---

## Features (MVP)

- Home
- About
- Portfolio
- Resume
- Contact form
- Light/Dark theme toggle
- Multilingual support (EN / PL)
- Lighthouse score target: ~100 (Performance, Accessibility, Best Practices)

---

## Roadmap

### Phase 1 – Foundation
- Project setup (strict TS, ESLint, Prettier)
- Tailwind custom theme
- Basic layout and sections
- Light/Dark mode

### Phase 2 – Production Readiness
- Multilingual routing
- Contact form with server validation
- Performance optimization
- CI configuration

### Phase 3 – Enhancements (Future)
- Three.js interactive section
- Blog (MDX)
- Design system documentation

---