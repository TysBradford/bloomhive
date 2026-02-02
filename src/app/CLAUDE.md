# UI/UX Implementation Guidelines

Every screen, component, and interaction in MooHive must feel hand-crafted and premium. No generic patterns. No default styling. Every detail matters.

## Universal Principles

- **Generous whitespace** — let elements breathe; density is the enemy of premium feel
- **Subtle motion** — purposeful micro-interactions and transitions, never gratuitous animation
- **Typographic hierarchy** — use weight and size to create clear visual hierarchy, not colour variations
- **Rounded corners** — 8px for thumbnails and cards in feed contexts; consistent radius system throughout
- **Line lengths** — 60-75 characters max for readable body text
- **Mobile-first** — responsive by default, every layout must work beautifully on all screen sizes

## Design Direction

MooHive uses a unified light & refined aesthetic across both landing page and app. The UI frames creator work with elegance, never competing with it.

### Colour Palette

```
Background:   Linen (#FAF9F7) — warm off-white canvas
Text Primary: Charcoal (stone-900 #1C1917) — headings, primary text
Text Body:    Slate (stone-500 #78716C) — body copy, secondary text
Text Meta:    Ash (stone-400 #A8A29E) — metadata, tertiary text
Borders:      Frost (stone-200 #E7E5E4) — dividers, borders
Surfaces:     Pearl (stone-100 #F5F5F4) / Parchment (stone-50 #FAFAF9) — cards, backgrounds
Hover Accent: Ember (orange-600 #EA580C) — hover states, active elements (use sparingly)
Primary CTA:  Ink (stone-900 #1C1917) — primary buttons, important actions
Functional:   Success (#22C55E), Warning (#FACC15), Error (#EF4444)
```

### Design Principles

- **Creator content is the star** — the UI frames it, never competes with it
- **Light, refined aesthetic** — warm off-white backgrounds (Linen), not sterile white
- **Stone palette** — elegant, restrained neutrals that let video content provide the color
- **Orange (Ember) is reserved** for hover states and active elements; use sparingly
- **Primary CTAs use stone-900** — keeps focus on creator work, not UI elements
- **Minimal chrome** — the feed IS the experience
- **Video thumbnails at high resolution** — no compression artifacts, maintain original aspect ratios
- **Metadata is secondary** — AI model, tools, prompts are visible but never compete with the work itself

### Landing Page Structure

- **Hero with stacked cards** — headline, rotating text, CTA, and visual showcase of creator work
- **Discovery grid** — masonry layout previewing the platform feed experience
- **Value propositions** — brief, focused messaging (not walls of text)
- **Final CTA** — email capture with waitlist positioning
- Social proof through creator work, not testimonial quotes
- CTAs are action-oriented: "Join the community", "Get early access" — never "Submit" or "Sign up"

### Typography

- **Primary: Inter** — all UI text (400 Regular, 500 Medium, 600 Semibold)
- **Secondary: JetBrains Mono** — metadata, prompts, model names, technical details
- Use the monospace font for anything a creator typed or configured

### Type Scale

| Name    | Size    | Weight   | Usage                              |
| ------- | ------- | -------- | ---------------------------------- |
| Display | 48/56px | Semibold | Hero sections, major announcements |
| H1      | 36/40px | Semibold | Page titles                        |
| H2      | 24/32px | Semibold | Section headings                   |
| H3      | 18/24px | Medium   | Card titles, subsections           |
| Body    | 16/24px | Regular  | Primary content                    |
| Small   | 14/20px | Regular  | Secondary content, captions        |
| Micro   | 12/16px | Medium   | Labels, metadata, tags             |

### Icons

- **Lucide** icon library exclusively
- Outlined style, 1.5px stroke weight, rounded corners and caps
- 24px default, 20px and 16px for compact contexts
- Always pair with text labels where possible — don't rely on icons alone

### Component Quality

- Every component should have considered hover, focus, and active states
- Transitions should be smooth (150-200ms ease) — never jarring
- Loading states must be graceful — skeleton screens over spinners where possible
- Empty states should be warm and encouraging, never cold or blaming

## Copy Guidelines

- Use "creators" not "users"
- Use "your work" not "your content"
- Write in sentence case, not Title Case
- CTAs are action-oriented: "Add video" not "Submit"
- Error states are calm and solution-focused: "That video URL didn't work. Check the link and try again."
- Never use corporate jargon, never overpromise, never say "simple" or "easy"
