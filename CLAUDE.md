# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BloomHive is a community and discovery platform for AI video creators (like Dribbble for AI video). Creators showcase portfolios with rich metadata (AI models, tools, prompts, settings), while appreciators and hirers discover and connect with talent.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **Framework**: Next.js 16 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Backend**: Supabase (Auth + PostgreSQL + File storage)
- **Hosting**: Vercel

### Directory Structure

```
src/
├── app/           # Next.js App Router (pages, layouts, API routes)
├── components/    # React components (to be created)
├── lib/           # Utilities & helpers (to be created)
└── types/         # TypeScript types (to be created)
```

### Path Alias

`@/*` maps to `./src/*` — use `@/components/...` style imports.

## Key Design Decisions

- **Video storage**: URL-based (links to YouTube, Vimeo, etc.) — no native uploads for MVP
- **Contact flow**: Simple direct messaging between users
- **Video metadata**: Per-video creation details including AI model, editing tools, prompts, technical specs

## Documentation

Project documentation lives in `docs/`:

- `PROJECT.md` - Full project vision and architecture
- `BRAND.md` - Brand guidelines template
- `ICP.md` - Ideal customer profile
- `DISTRIBUTION.md` - Distribution strategy
