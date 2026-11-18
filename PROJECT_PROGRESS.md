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

- [ ] **Milestone 3: Public Website UI & Frontend Design** *(Active / Next Up)*
  - Luxury / Modern Salon Theme & Design System (Tailwind CSS, fonts, color palette).
  - Navigation Bar & Mobile Drawer.
  - Hero Section (High-impact salon headline, imagery & quick CTAs).
  - Services & Pricing Showcase with Men / Women / Unisex category filtering.
  - Hair & Beauty Transformation Gallery.
  - Stylist Team Showcase & Customer Testimonials.
  - Floating WhatsApp Booking button & Contact / Google Maps section.

- [ ] **Milestone 4: Supabase Database & Prisma Modeling**
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
| **Pending** | **Step 2 (UI)** | Build public website layout, Navbar, Hero section, and Services showcase. | ⏳ Planned |
