# BASHOGROUP.COM — Site Spec

> Generated 2026-03-02. Sources: identity.md, brand.md, voice.md, Development Process Framework.

## Overview

Corporate website for **Basho Group**, a real estate development firm in West Palm Beach, FL. Replaces the current "Coming Soon" splash page. Single-page, content-first, no framework.

## Goals

- Establish credibility with city officials, JV partners, and brokers before March 31 cliff review
- Communicate the Basho dual identity: cultural intentionality + analytical rigor
- Showcase track record (WPB transformation, 1M+ SF, $500M+ developed)
- Present the active pipeline and founder credentials
- Provide clear contact pathway

## Scope

### In Scope
- Single HTML file with inline CSS and JS (no framework)
- Responsive design (mobile-first)
- Graphic-design-forward placeholders (no stock photography)
- All copy drafted from brand docs (subject to Gopal review)
- Deploy to existing Vercel project (bashogroup.com)
- Accessibility pass (WCAG 2.1 AA)
- SEO metadata, JSON-LD Organization schema

### Out of Scope
- Blog, news, or press section
- LP investor materials or detailed framework documentation
- CMS, admin panel, or dynamic content
- Contact form (email link only)
- Multi-page navigation
- Analytics (can add later)
- Real photography (swap-ready when available)

## Audience Priorities

| Priority | Audience | Need |
|----------|----------|------|
| 1 | City officials, planning boards | Credibility, community commitment, track record |
| 2 | JV partners, co-developers | Operational rigor, execution history, framework |
| 3 | Brokers, deal flow | Clear criteria, institutional presence, speed |
| 4 | Industry peers, network | Brand awareness, differentiation |

## Visual Direction

**Mood:** Monolithic. Precise. Institutional weight with cultural depth. A monograph, not a brochure.

**Anti-slop rules:**
- No Inter, Roboto, Arial, Space Grotesk
- No purple gradients on white
- No centered-everything layouts
- No stock photos — confident graphic design only
- No warm beige/gold (the old splash page palette is off-brand)
- No rounded corners > 4px — angular, decisive
- No generic card grids — asymmetric, editorial compositions

**Color Palette (from brand.md):**

| Role | Hex | CSS Variable |
|------|-----|-------------|
| Primary (The Monolith) | `#000000` | `--primary` |
| Secondary (Body text) | `#1A1A1A` | `--secondary` |
| Accent (Tertiary) | `#333333` | `--accent` |
| Void (Negative space) | `#FFFFFF` | `--void` |
| Light Background | `#F5F5F5` | `--light-bg` |
| Border | `#E0E0E0` | `--border` |

**Typography:**

| Element | Font | Weight | Transform | Tracking |
|---------|------|--------|-----------|----------|
| Display/Logo | Cabinet Grotesk | 800-900 | UPPERCASE | 0.05em |
| H1 | Cabinet Grotesk | 800 | UPPERCASE | 0.05em |
| H2 | Cabinet Grotesk | 700 | none | 0.03em |
| H3 | Cabinet Grotesk | 700 | none | 0.02em |
| Body | Cabinet Grotesk | 400 | none | normal |
| Label/Nav | Cabinet Grotesk | 500 | UPPERCASE | 0.15em |
| Caption | Cabinet Grotesk | 400 | none | 0.01em |

Font CDN: `https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&display=swap`

**Photography Placeholder Strategy:**
- Hero: Full-viewport black with large-scale Basho logo mark as graphic element, subtle grain texture
- Portfolio: Solid black blocks with project names in Cabinet Grotesk 800 uppercase — think Tadao Ando monograph
- Founder: Geometric placeholder with initials
- Texture: SVG noise grain overlay (`::after`, opacity 0.03, mix-blend-mode: overlay)
- When real photos arrive: swap placeholder `div` with `<img>`, trivial

---

## Page Structure & Copy

### Navigation (Fixed Top)
Links: Philosophy | Track Record | Portfolio | Founder | Method | Contact
- Logo (inline SVG) at left
- Nav links at right
- Transparent on hero, solid black on scroll
- Mobile: hamburger menu

---

### Section 1: Hero

Full viewport. Black background. Logo mark as large-scale graphic element (the diagonal-cut monolith from the SVG). Grain texture overlay.

**Copy:**
```
BASHO

Places of belonging.
Built with rigor.
```

Subtle scroll indicator at bottom (thin line, pulsing).

**Design notes:**
- The logo icon (monolith with incision) should appear as an oversized graphic element, not just a small nav logo
- "BASHO" in Cabinet Grotesk 900, massive scale
- Tagline in Cabinet Grotesk 400, generous letter-spacing
- No background image — pure graphic design, black + white + grain

---

### Section 2: Philosophy

White background. Two-column layout — left column wide for text, right column for pull quote.

**Label:** `OUR PHILOSOPHY`

**Heading:** `The most valuable building is the one the neighborhood would mourn if it disappeared.`

**Body:**
```
Basho Group creates places worth belonging to — built with analytical rigor and cultural intentionality.

In a world fragmenting into digital isolation, the only physical asset that holds enduring value is belonging. We don't build projects. We build antidotes to isolation.

Most real estate is developed by spreadsheets, not by experience. Land treated as a yield calculation rather than a canvas creates buildings profitable on paper but bankrupt in culture. We reject that.

Our work rests on two pillars: the soul of what we build and the rigor of how we build it. One without the other is incomplete.
```

**Pull quote (right column):**
```
"The more valuable an asset is to the community, the more valuable it is to the owners."
— Gopal Rajegowda
```

---

### Section 3: Track Record

Light gray background (`#F5F5F5`). Stats as large typographic elements.

**Label:** `TRACK RECORD`

**Heading:** `We transformed West Palm Beach.`

**Stats row:**
- `1M+` SF Developed
- `$500M+` Total Development Value
- `21` Years Institutional Experience

**Narrative:**
```
In 2011, West Palm Beach was still recovering. Gopal Rajegowda arrived at Related Companies and saw what others missed — a city waiting to be reimagined.

Over the following decade, he led the reimagination of CityPlace, developed the Hilton West Palm Beach, and delivered One Flagler — achieving $150/SF net, the highest Class A office rent in the Southeast.

The transformation wasn't accidental. It was the domino effect: each project catalyzing the next, each investment compounding community value. Today, West Palm Beach is one of the most desirable live-work-play destinations in the United States.

Basho carries that methodology forward.
```

**Named projects (horizontal list):**
Hilton West Palm Beach · CityPlace · 360 Rosemary · One Flagler · W South Beach · Cosmopolitan Resort & Casino

---

### Section 4: Portfolio

Black background. Project entries as typographic blocks — project name in large Cabinet Grotesk 800 uppercase, brief description below.

**Label:** `ACTIVE PIPELINE`

**Heading:** `What we're building.`

**Projects:**

**THE HIVE**
Mixed-use development in West Palm Beach. Honoring a historic Black cemetery from the early 1900s with a monumental art commission. Cultural anchor meets institutional returns — because those goals aren't in conflict.

**THE CHESTERFIELD**
Historic repositioning in the heart of Palm Beach. Restoring an icon while reimagining its relevance for a new generation.

**BEN'S**
Neighborhood-scale development rooted in the community it serves. Ground-plane activation that heals the street.

**JULIAN ABEL PARK**
Named for the Black architect who designed the historic church at One Flagler. Anchored by a monumental sculpture by Fred Eversley. Art as destination, not decoration.

---

### Section 5: Founder

White background. Asymmetric layout — geometric placeholder on left (dark gray square with "GR" initials), bio text on right.

**Label:** `FOUNDER`

**Heading:** `Gopal Rajegowda`

**Subtitle:** `Managing Partner`

**Bio:**
```
21 years as Partner and EVP at Related Companies, where he led the Southeast division and transformed West Palm Beach from a place people drove through to a place people chose to live.

Master's in Real Estate Development from Columbia University. B.A. in Mathematics from Cornell University.

Board positions: Economic Council of Palm Beach County, Chamber of Commerce, Cultural Council, Mayor's Taskforce for Racial and Ethnic Equality.

Gopal doesn't just build in communities — he's embedded in them. That's not a positioning statement. It's a 21-year track record.
```

---

### Section 6: The Method

Light gray background. Clean, structured layout.

**Label:** `THE METHOD`

**Heading:** `Kill first. Then build.`

**Intro:**
```
Our job is not to approve deals — it's to try to kill them. We look for structural flaws, hidden costs, and optimistic assumptions. What survives the filter is worth pursuing.
```

**The Basho Filter (6 questions):**

| # | Name | Question |
|---|------|----------|
| I | Relevance | If this building disappeared tomorrow, would the neighborhood mourn it? |
| II | Awe | Does this stop time? Is there a singular moment that takes the breath away? |
| III | Service | Does the environment anticipate the human need for welcome, care, and comfort? |
| IV | Ground Plane | Does the project heal the street? |
| V | Distinction | Are we copying the market, or correcting it? |
| VI | Landmark | Is the art a decoration, or a destination? |

**Framework note:**
```
Projects advance through a 10-phase development process with 6 decision gates — each a risk-pricing moment, not a formality. Capital is committed incrementally as assumptions are validated.

Speed to analysis. Transparency kills surprises. Written reports over recurring calls.
```

---

### Section 7: Contact

Black background. Minimal.

**Heading:** `Get in touch.`

**Content:**
```
gopal@bashogroup.com
West Palm Beach, Florida
```

No contact form. Email link only. Clean, direct.

---

### Section 8: Footer

Black background, slightly lighter than contact section (or same with a subtle top border).

**Content:**
- BASHO logo (small, inline SVG)
- `© 2026 Basho Group. All rights reserved.`
- Nav links: Philosophy · Track Record · Portfolio · Founder · Method · Contact
- `Maximum Insight. Minimum Noise.`

---

## Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | None (vanilla HTML/CSS/JS) | Proven pattern, zero maintenance, max performance |
| CSS | Inline `<style>` | Single file, no external loading |
| Font | Fontshare CDN (Cabinet Grotesk) | Free commercial license, brand-specified |
| Logo | Inline SVG | Crisp at all sizes, no HTTP request |
| JS | Inline `<script>`, IntersectionObserver | Scroll reveals + nav state. No libraries. |
| Navigation | Fixed top bar, scroll-to-section | 7 sections warrants nav |
| Mobile | Mobile-first responsive | Priority audiences may be on phones |
| Favicon | Data URI SVG | No extra HTTP request |
| Placeholders | CSS graphic design (no images) | Monochromatic brand makes this intentional |

## Animations

- **Hero:** Staggered fade-up for logo, tagline (0.4s delays)
- **Scroll reveals:** `translateY(32px)` → 0, `opacity: 0` → 1, threshold 0.12
- **Nav:** Background transition on scroll (transparent → black)
- **Stats:** Counter animation or simple fade-in (no odometer library)
- **All:** `prefers-reduced-motion: reduce` kills all animations
- **Compositor only:** `transform` and `opacity` only for animations — no `top`, `left`, `width`, `height`

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px–1024px (adjusted grid)
- Desktop: > 1024px (full layout)
- Max content width: 1200px
- Narrow content (text): 800px

## Post-Launch TODOs

- [ ] Gopal reviews all copy
- [ ] Replace photo placeholders when photography is available
- [ ] Add Google Analytics or Plausible
- [ ] Add og:image (1200x630 social share image)
- [ ] Consider adding LP materials section (late 2026)

## Open Questions

- Exact project descriptions for Chesterfield and Ben's (draft from available context, needs Gopal confirmation)
- Gopal headshot timing

## Delegated Decisions

- **Exact layout proportions:** Delegated to designer
- **Grain texture intensity:** Delegated (subtle, ~0.03 opacity)
- **Animation easing curves:** Delegated (use cubic-bezier for polish)
- **Mobile hamburger animation:** Delegated (simple, no elaborate burger-to-X)
