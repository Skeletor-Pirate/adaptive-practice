# Adaptive Practice Platform 🎓

> **CBSE-first adaptive learning & mastery platform for Classes IX–XII and JEE/NEET Foundations.**
> Personalizes each student's journey through automated diagnosis, dynamic difficulty calibration, step-by-step worked solutions, and spaced retention schedules.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black.svg)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.14-2D3748.svg)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-1.6-6E9F18.svg)](https://vitest.dev/)
[![Status](https://img.shields.io/badge/Build-Passing-emerald.svg)]()

---

## 🌟 Overview & Core Principles

The **Adaptive Practice Platform** addresses the primary reason students struggle in secondary and senior-secondary STEM subjects: **practicing at the wrong difficulty level without timely diagnostic intervention.**

Rather than static problem sets, the platform applies an evidence-driven learning engine:
1. **Intelligent Baseline Diagnosis**: Assesses student skill level in under 10 minutes.
2. **Adaptive Practice Engine**: Questions adjust dynamically (Easy → Medium → Hard → Competitive) based on response correctness and speed.
3. **Step-by-Step Worked Solutions**: Delivers instant, comprehensive mathematical and scientific breakdowns to solidify conceptual understanding.
4. **Progressive Micro-Hints**: Helps learners break through cognitive roadblocks without immediately spoiling the answer.
5. **Classroom & Cohort Visibility**: Gives teachers actionable dashboards highlighting struggling topics and students requiring targeted intervention.

---

## 🚀 Quick Demo Accounts

The platform includes built-in instant login for quick evaluation without manual credential setup:

| Role | Email | Password | Access Highlights |
| :--- | :--- | :--- | :--- |
| **Student** | `student@example.com` | `password123` | Interactive practice engine, daily streaks, XP scoring, topic mastery breakdown |
| **Teacher** | `teacher@example.com` | `password123` | Class rosters (Class IX-A, Class X-B), cohort accuracy metrics, practice set assigner |
| **Admin** | `admin@example.com` | `password123` | Full curriculum question bank explorer, telemetry metrics, board standards config |

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing across all models and services)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom glassmorphism design system
- **Icons**: [Lucide React](https://lucide.dev/)
- **ORM & Data**: [Prisma ORM](https://www.prisma.io/) (PostgreSQL-ready with built-in resilient fallback provider)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (JWT session strategy, multi-role support)
- **Testing**: [Vitest](https://vitest.dev/) (Unit and integration test suites)
- **Validation & State**: [Zod](https://zod.dev/) & [Zustand](https://github.com/pmndrs/zustand)

---

## 📁 Repository Structure

```
adaptive-practice/
├── prisma/
│   └── schema.prisma         # Prisma data models & relation mappings
├── src/
│   ├── app/
│   │   ├── (admin)/admin/    # Administrator content & telemetry dashboard
│   │   ├── (auth)/auth/      # Sign-in portal with 1-click quick demo accounts
│   │   ├── (student)/
│   │   │   ├── student/      # Student mastery dashboard & streaks
│   │   │   ├── practice/     # Real-time adaptive practice question engine
│   │   │   └── diagnostic/   # 10-minute baseline diagnostic assessment
│   │   ├── (teacher)/teacher/# Teacher portal with class rosters & intervention
│   │   ├── api/
│   │   │   ├── auth/         # NextAuth handler routes
│   │   │   └── questions/    # Question query and filtering API
│   │   ├── globals.css       # Tailwind directives & glassmorphic utilities
│   │   ├── layout.tsx        # Root layout with session provider and navigation
│   │   └── page.tsx          # High-converting landing page
│   ├── components/
│   │   └── layout/Navbar.tsx # Responsive header with role switcher & user session
│   ├── lib/
│   │   ├── auth.ts           # NextAuth configuration and credentials provider
│   │   └── prisma.ts         # Singleton Prisma client manager
│   ├── services/
│   │   ├── questions.ts      # Question bank & adaptive query logic
│   │   └── users.ts          # User management services
│   ├── tests/
│   │   ├── auth.test.ts      # Authentication & user lookup tests
│   │   └── questions.test.ts # Question filtering & retrieval unit tests
│   └── types/                # Core domain types & NextAuth module augmentation
├── render.yaml               # Render Cloud deployment blueprint
├── vercel.json               # Vercel deployment configuration
└── package.json
```

---

## 🏃 Getting Started

### 1. Clone & Install

```bash
git clone <repository-url>
cd adaptive-practice
npm install
```

### 2. Configure Environment

Copy the example environment configuration:
```bash
cp .env.example .env
```

### 3. Generate Prisma Client

```bash
npx prisma generate
```

### 4. Run the Development Server

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or custom port via `npm run dev -- -p 3005`).

---

## 🧪 Testing & Verification

Run the full Vitest automated test suite:
```bash
npm test
```

Validate TypeScript compile integrity:
```bash
npx tsc --noEmit
```

Test production build:
```bash
npm run build
```

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the `adaptive-practice` repository.
4. In **Environment Variables**, set:
   - `NEXTAUTH_SECRET`: (Generate a secure random string or 32-char key)
   - `NEXTAUTH_URL`: `https://your-vercel-domain.vercel.app`
5. Click **Deploy**. (The included `vercel.json` automatically runs Prisma generation during the build).

### Deploying to Render

1. Link your repository in [Render Dashboard](https://dashboard.render.com/).
2. Select **Blueprint** and point to `render.yaml`, or create a **Web Service**:
   - **Build Command**: `npm install && npx prisma generate && npm run build`
   - **Start Command**: `npm run start`
   - **Node Version**: `20` or `22`

---

## 📄 License

MIT License • Built for modern secondary education.
