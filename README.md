# MITS Gwalior — Student Portal Redesign

**PS 2 | Hackathon Submission**
*Reference: https://web.mitsgwalior.in*

---

## Project Structure

```
mits-portal/
├── index.html          → Main HTML (semantic, accessible)
├── css/
│   ├── style.css       → Core styles, layout, components
│   └── animations.css  → Scroll reveals, keyframes, micro-interactions
├── js/
│   └── main.js         → Navigation, tabs, form logic, scroll effects
└── README.md           → This file
```

---

## How to Run

Simply open `index.html` in any modern browser. No build step, no dependencies (fonts load from Google Fonts CDN).

For local dev server:
```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## Key Improvements Over Original Site

### 1. Navigation — Always Visible & Contextual
- **Fixed navbar** that scrolls with user — no need to return to top
- **Auto-highlights** the current section in the nav as you scroll
- **Responsive hamburger menu** for mobile with smooth open/close animation
- One-click **"Apply Now" CTA** always visible in the header

### 2. Hero Section — Impactful First Impression
- Clear institution branding with NAAC accreditation and key stats upfront
- Strong call-to-action directing students to academics and discovery
- **Animated background** (grid + floating orbs) that sets a premium tone without distracting

### 3. Academics / Schemes — Tabbed & Scannable
- **Tabbed interface** (UG / PG / Ph.D.) avoids information overload
- Each program card shows: name, description, duration, and scheme year at a glance
- Direct "View Syllabus" links — no hunting through PDF menus

### 4. Departments — Card Grid with Quick Info
- Each department shows faculty count, lab count, and key subjects
- Hover effects guide the eye — students know exactly what's clickable
- Replaces long nested dropdown menus with an instant visual overview

### 5. Announcements — Prioritised & Live
- **Live ticker** for at-a-glance updates
- Color-coded tags: Urgent / Event / Placement / Admission — students prioritize instantly
- Most recent date shown on every item; no guessing whether content is stale

### 6. Student Resources — Single Hub
- 8 most-needed resources surfaced on the homepage (previously buried 3-4 levels deep)
- Icon + title + description pattern — scannable in under 3 seconds
- Direct links: ERP Portal, Results, Library, Placements, Scholarships, Health Centre

### 7. Contact Section — Functional & Friendly
- Contact form with validation and user feedback (toast notification)
- All contact details visible without scrolling to a footer
- Categorized inquiry dropdown to route queries efficiently

### 8. Footer — Comprehensive & Organized
- Quick links to all major sections
- Organized into: About, Academics, Student Life — mirrors mental model of a student
- RTI and policy links included for transparency

---

## Technical Highlights

| Feature | Implementation |
|---|---|
| Responsive | CSS Grid + Flexbox, 3 breakpoints (480 / 768 / 1024px) |
| Animations | Pure CSS keyframes + JS IntersectionObserver |
| Scroll Reveal | IntersectionObserver API (no library) |
| Active Navigation | IntersectionObserver tracking sections |
| Tabs | Vanilla JS, accessible with keyboard |
| Scroll Progress | Dynamic width bar pinned to top |
| Typography | Playfair Display (headings) + DM Sans (body) + JetBrains Mono (labels) |
| Colour System | CSS custom properties (theming-ready) |
| Accessibility | Semantic HTML5, ARIA labels, keyboard navigation, focus states |
| Performance | Zero JS libraries, minimal external deps, CSS-only animations |

---

## Design Philosophy

**"Student-first information architecture"**

The original MITS site presents information from an institutional perspective — organized by department silos and administrative categories. This redesign reorganizes everything around **what a student actually needs**:

1. What programs are available and what do they cover? → Academics section
2. Which department should I contact? → Departments section  
3. Is there anything urgent I need to know? → Announcements (most prominent)
4. Where do I find the exam result / hostel form / library? → Resources hub
5. How do I contact someone? → Contact section

Every design decision — hover states, stagger animations, color-coded tags, the live ticker — exists to reduce cognitive load and help students find information faster.

---

*Built for MITS Gwalior Hackathon — PS 2*
