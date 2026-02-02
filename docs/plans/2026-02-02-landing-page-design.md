# Landing Page Design

**Date:** 2026-02-02
**Status:** Approved
**Sprint:** Sprint 0 - Landing Page

## Design Direction

MooHive landing page uses a unified light & refined aesthetic. The UI frames creator work with elegance, never competing with it. This aligns with creative showcase platforms (Dribbble, Behance) rather than SaaS landing pages.

**Key Decision:** No value proposition section with feature callouts. The work speaks for itself.

## Page Structure

1. **Hero** - headline, rotating text, stacked cards, CTA button
2. **Category filter bar** - sticky, filters discovery grid
3. **Discovery grid** - masonry layout showcasing creator work
4. **Final CTA section** - email capture for waitlist
5. **Footer** - branding and navigation links

## Color Palette

```
Background:   Linen (#FAF9F7) — warm off-white canvas
Text Primary: Charcoal (stone-900 #1C1917) — headings, primary text
Text Body:    Slate (stone-500 #78716C) — body copy, secondary text
Text Meta:    Ash (stone-400 #A8A29E) — metadata, tertiary text
Borders:      Frost (stone-200 #E7E5E4) — dividers, borders
Surfaces:     Pearl (stone-100 #F5F5F4) / Parchment (stone-50 #FAFAF9) — cards, backgrounds
Hover Accent: Ember (orange-600 #EA580C) — hover states, active elements (use sparingly)
Primary CTA:  Ink (stone-900 #1C1917) — primary buttons, important actions
```

## Components

### 1. Hero Section (Already Built)

Current implementation is approved:
- Bold headline: "Where the world's best AI video creators gather"
- Supporting line with rotating text: "Discover, share, and learn with the [trailblazers/pioneers/artists/visionaries] shaping a new art form"
- Primary CTA: "Join the community" button (stone-900 background)
- Stacked cards with metallic borders and shimmer effects

### 2. Discovery Grid (Already Built)

Current masonry implementation is approved:
- Varying aspect ratios maintained
- Video metadata visible: title, creator name, AI model tag, duration
- Hover states with orange-600 color shift
- Responsive columns (1 on mobile, 3 on tablet, 4 on desktop)

### 3. Final CTA Section (New)

**Layout:**
- Centered content with generous padding (py-20 desktop, py-12 mobile)
- Background: Pearl (stone-100) to elevate from main background
- Max-width container

**Content:**
- Headline: "Join the community" (H2, stone-900, semibold)
- Supporting text: "Get early access when we launch" (stone-500)
- Email capture form (see below)

### 4. Email Waitlist Form (New)

**Fields:**
- Name input (required)
- Email input (required)
- Submit button: "Join the waitlist"

**Styling:**
- Two fields side-by-side on desktop, stacked on mobile
- Input fields: white background, stone-200 border, stone-900 text, rounded-lg
- Placeholders: "Your name" and "your@email.com"
- Focus state: orange-600 ring
- Error state: red-500 border with inline error text
- Submit button: stone-900 background, white text, rounded-full

**Behavior:**
- Client-side validation before submission
- Disable submit button during submission
- Success state: Replace form with "You're on the list! We'll be in touch soon." (stone-900 text)
- Error handling: Show inline errors for validation, network issues

### 5. Footer (New)

**Layout:**
- Two-column on desktop, stacked on mobile
- Background: Parchment (stone-50)
- Border-top: Frost (stone-200)
- Padding: py-8

**Content:**
- Left column: "MooHive" wordmark (font-semibold) + tagline "Where AI video creators thrive" (stone-500, small)
- Right column: Links for About, Terms, Privacy (stone-500, hover to stone-900)

## Database Schema

**Supabase Table: `waitlist`**

```sql
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text not null,
  source text not null,
  created_at timestamptz default now()
);

-- Add RLS policies
alter table waitlist enable row level security;

-- Allow inserts from anyone (public)
create policy "Allow public waitlist signups"
  on waitlist for insert
  to anon
  with check (true);
```

**Source tracking:**
- "landing_hero" - clicked CTA in hero section
- "landing_footer" - filled form in final CTA section

## Technical Requirements

### Meta Tags & Social Sharing

```html
<title>MooHive — Where AI video creators thrive</title>
<meta name="description" content="Discover, share, and connect with the pioneers shaping AI video. Browse portfolios, explore techniques, and join the community." />
<meta property="og:title" content="MooHive — Where AI video creators thrive" />
<meta property="og:description" content="Discover, share, and connect with the pioneers shaping AI video." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

**TODO:** Create OG image (1200x630px) with MooHive branding

### Accessibility (WCAG AA)

- All form inputs have proper labels (can be visually hidden)
- Keyboard navigation for all interactive elements
- Focus indicators visible (orange-600 ring)
- Color contrast ratios meet WCAG AA minimum:
  - stone-900 on Linen: ✓
  - stone-500 on Linen: ✓
  - stone-400 on Linen: needs verification
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`
- Form validation messages announced to screen readers

### Performance

- Lazy load discovery grid items below the fold
- Optimize gradient rendering (already lightweight)
- Minimize JavaScript bundle
- Progressive enhancement for form submission
- Target: < 2 second load time

## Implementation Notes

### Hero CTA Button

Currently the hero "Join the community" button doesn't do anything. Options:
1. Scroll to final CTA section (smooth scroll)
2. Open inline form in hero section
3. Track as "landing_hero" source if we add form there

**Decision needed:** Recommend smooth scroll to final CTA section for consistency.

### Form Component Location

Create reusable form component at `src/components/WaitlistForm.tsx` that accepts:
- `source` prop ("landing_hero" or "landing_footer")
- Optional success message customization
- Can be used in multiple locations if needed

### Email Service

Currently just storing in Supabase. Future consideration:
- Send confirmation email via Resend or similar
- Add to email marketing platform (ConvertKit, etc.)
- For MVP: just database storage is sufficient

## Out of Scope (Future)

- Email confirmation/verification
- Email marketing integration
- Analytics event tracking (though recommended)
- A/B testing different copy/CTAs
- Dark mode (landing page is light-only for now)

## Success Criteria

- [ ] Landing page matches approved design
- [ ] Email waitlist functional with name + email
- [ ] Form validation and error handling works
- [ ] Success state shows after submission
- [ ] Duplicate emails handled gracefully
- [ ] Mobile responsive
- [ ] Loads in under 2 seconds
- [ ] Meets WCAG AA accessibility standards
- [ ] OG tags and meta data configured

## References

- Sprint document: `/docs/sprints/SPRINT_0_LANDING_PAGE.md`
- Brand guidelines: `/docs/BRAND.md`
- UI guidelines: `/src/app/CLAUDE.md`
