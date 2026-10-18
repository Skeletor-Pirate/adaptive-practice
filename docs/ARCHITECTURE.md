# Architecture & Technical Design Document

## 1. Domain Model Overview

The system is engineered around four core domains:
- **Curriculum Domain**: `Board`, `Topic`, `DifficultyLevel`, `Question`, `QuestionOption`.
- **Learner Mastery Domain**: `User`, `UserProfile`, `UserProgress`, `Assessment`, `StudySession`.
- **Pedagogical Social Domain**: `Class`, `Enrollment`, `Assignment`.
- **Telemetry Domain**: `AnalyticsData`, response time latency, accuracy curves.

## 2. Adaptive Engine Pipeline

The adaptive engine follows a closed feedback loop:
```
[Student Answer] ──> [Validation] ──> [Instant Feedback & Worked Steps]
       │                                         │
       ▼                                         ▼
[Accuracy Delta] ───────────────────> [Difficulty Recalibration]
                                                 │
                                                 ▼
                                     [Next Recommended Item]
```

- **Level 1 (Easy)**: Basic definitions, single-step operations.
- **Level 3 (Medium)**: Multi-step derivations, system of equations, algebraic substitutions.
- **Level 5 (Hard / Foundation)**: Complex application, discriminant analysis, competitive exam edge cases.

## 3. Resilient Data Layer

To enable friction-free local development and fast demo execution, the services implement a resilient fallback architecture:
- If PostgreSQL is configured via `DATABASE_URL`, queries route through Prisma ORM.
- If no external database is present, the domain services seamlessly fall back to the enriched CBSE Class IX-X question repository, maintaining complete application functionality without crashes or connection timeouts.
