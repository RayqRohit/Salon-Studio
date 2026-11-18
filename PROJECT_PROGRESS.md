# 📋 Salon Studio — Project Progress Tracker

> This file tracks all architectural decisions, completed work, active tasks, and upcoming milestones. It is updated continuously as the project evolves.

---

## 📌 1. Project Overview & Decisions Log

| Category | Decision / Selection | Notes |
| :--- | :--- | :--- |
| **Project Type** | Salon Website + Admin Panel | Single Next.js project with route groups (`(website)` and `admin`) |
| **Framework** | Next.js 16 (App Router) | React 19, TypeScript |
| **Styling** | Tailwind CSS v4 | Clean, responsive, mobile-first design |
| **Database** | PostgreSQL hosted on **Supabase** | Free tier, 500MB storage, managed relational database |
| **ORM** | **Prisma** | Type-safe database queries and automated schema migrations |
| **Image Storage** | **Supabase Storage** | For salon gallery photos, product images, and staff avatars |
| **Authentication**| **Supabase Auth / NextAuth** | Protected admin panel routes |
| **Deployment** | **Vercel** | Free global CDN, automatic deployments from GitHub for portfolio/LinkedIn |
| **Domain** | **Hostinger** | Custom domain connection via DNS records |

---

## 🚀 2. Roadmap & Milestone Status

- [x] **Milestone 1: Project Discovery & Architecture Alignment** *(Completed: 2026-11-17)*
  - Reviewed requirements in `salon_website_project_summary.md`.
  - Resolved database debate: selected Supabase (PostgreSQL) + Prisma over standalone MySQL/VPS.
  - Finalized portfolio/LinkedIn deployment strategy (Vercel).

- [x] **Milestone 2: Foundation & Next.js Setup** *(Completed: 2026-11-17)*
  - Initialized Next.js with TypeScript, Tailwind CSS, ESLint, App Router, and `src/` directory.
  - Verified local environment (Node v22, npm v10).
  - Created persistent project tracking (`PROJECT_PROGRESS.md`).

- [x] **Milestone 3: Public Website UI & Frontend Design** *(Completed: 2026-11-18)*
  - Downloaded template fonts (`DM Sans`, `Geist`, `Inter`) to `public/fonts/`.
  - Downloaded high-res template images & SVGs to `public/images/`.
  - Replicated exact Framer-style layout:
    - Docked top-left Navbar with brand logo, links, and theme toggle switch.
    - Interactive Hero Carousel (3 slides, prev/next arrows, active dots, "View Project" button, "Selected Work" notch).
    - Profile Bio Card (Avatar, name, role, bio description).
    - Social Links stack (Instagram, Pinterest, Behance, Twitter + solid white Contact Me button).
    - Latest Work showcase (Section header, 2-column image cards with "Beige" & "Darkness" notch tags).
  - Production build successfully compiles with 0 errors.

- [ ] **Milestone 4: Supabase Database & Prisma Modeling** *(Next Up)*
  - Setup Supabase project & link PostgreSQL via Prisma.
  - Convert frontend mock data models to production Prisma schema.
  - Connect database queries directly into public website pages.

- [ ] **Milestone 5: Admin Panel & Dynamic Content Management**
  - Secure Admin Login screen.
  - Dashboard overview (metrics, quick actions).
  - CRUD operations for Services & Prices.
  - Image upload interface with Supabase Storage.
  - Product & Offer management.

- [ ] **Milestone 6: Verification, Optimization & Deployment**
  - End-to-end testing (forms, responsive layouts, permissions).
  - GitHub repository push.
  - Vercel production deployment & custom domain linking.
  - Keep-alive ping setup to prevent Supabase free-tier inactivity pause.

---

## 📝 3. Detailed Activity Log

| Date | Step | Description / Action Taken | Status |
| :--- | :--- | :--- | :--- |
| **2026-11-17** | **Discovery** | Deep review of project summary document and hosting options. | ✅ Done |
| **2026-11-17** | **Step 1** | Initialized Next.js 16 app with TypeScript, Tailwind CSS v4, and App Router structure. | ✅ Done |
| **2026-11-17** | **Step 1** | Created `PROJECT_PROGRESS.md` to track progress and future changes. | ✅ Done |
| **2026-11-17** | **Strategy** | Switched roadmap to **UI-First approach**: build public website UI first with mock data, then integrate Supabase & Prisma. | ✅ Done |
| **2026-11-18** | **Cleanup** | Removed default Next.js boilerplate styling & page content (`page.tsx`, `globals.css`, `layout.tsx`). Set clean canvas for salon UI. | ✅ Done |
| **2026-11-18** | **Cleanup** | Removed all unused default Next.js SVG icons (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`) and updated `README.md`. | ✅ Done |
| **2026-11-18** | **Assets** | Downloaded all reference fonts (`DM Sans`, `Geist`, `Inter`) to `public/fonts/` and high-res template images to `public/images/`. | ✅ Done |
| **2026-11-18** | **Homepage UI** | Built full main page matching the reference: docked Navbar, interactive Hero Carousel with notch badges, Profile Bio Card, Social Links Stack, and Latest Work cards. | ✅ Done |
| **2026-11-18** | **UI Refinement** | Refined 1:1 match with Framer template: updated profile avatar to exact image, styled "Latest Work" into a dark rounded card container, fixed icons (outline camera, cursive Pinterest P, Behance Bē, classic Twitter bird, envelope), and aligned heights. | ✅ Done |
| **Pending** | **Step 2 (UI)** | Add secondary pages (Work, About, Contact) or adapt content specifically for Salon Studio services. | ⏳ Planned |
