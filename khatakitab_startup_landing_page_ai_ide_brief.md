# AI IDE Build Brief — Premium Startup Landing Page

## 1. Objective

Build a polished, production-quality startup landing page for **Khatakitab**, a fictional small-business management SaaS. The site is a portfolio demo intended to impress potential freelance clients.

The visual direction is a clean, premium SaaS website: bright background, deep navy typography, blue-to-violet accents, generous whitespace, rounded UI, subtle borders and shadows, and realistic product mockups. It must feel intentionally designed—not like a generic template.

**Important:** Build a real, responsive, working website. Do not simply recreate a static screenshot. Implement the animations and interactions described below.

## 2. Product and audience

Khatakitab helps small businesses manage:
- Daily income and expenses
- Profit summaries
- Inventory and stock
- Simple business reports
- Offline-first workflows
- Data backup

Target audience: owners of small shops and service businesses, including grocery stores, clothing shops, tailors, salons, and similar businesses.

Primary message:
> Manage Your Business Finances, Inventory & More — All in One Place

Supporting copy:
> Khatakitab helps small businesses like yours track income, expenses, inventory and profits — simple, fast and offline first. Work on your phone, even without internet.

Primary CTA: **Get Started Free**
Secondary CTA: **Watch Demo**

Trust points: **Works Offline · Data Backup · No Credit Card Required**

Do not imply these are real customers or verified product claims. This is a fictional portfolio demo; keep testimonials and metrics clearly illustrative if included.

## 3. Required tech

Use the repository's existing stack and conventions if a project already exists. Do not overwrite working configuration without a good reason.

For a new project, prefer:
- React
- TypeScript
- Vite
- Tailwind CSS
- Motion for React (`motion`) for animations
- Lucide React for icons

Avoid unnecessary dependencies. Do not use paid APIs, paid assets, or services requiring API keys. Use CSS, SVG, and locally implemented mock UI wherever practical.

## 4. Visual system

### Colors
- Main text: deep navy, approximately `#14213D`
- Body text: muted slate, approximately `#52627D`
- Primary blue: approximately `#2563EB`
- Violet accent: approximately `#7357F6`
- Pale blue background: approximately `#F3F7FF`
- Main background: `#FFFFFF`
- Success accent: mint/green, approximately `#22C997`
- Borders: light cool gray, approximately `#E5EAF3`

Use gradients sparingly, mainly for the hero emphasis, small accent surfaces, and final CTA.

### Typography and layout
- Use a clean sans-serif such as Inter or a system-font fallback.
- Strong, compact hero heading with a clear hierarchy.
- Generous vertical spacing and a consistent max-width container.
- Rounded corners around 14–22px; restrained shadows and thin borders.
- Consistent spacing, alignment, and icon sizing.
- Avoid excessive glassmorphism, neon, giant gradients, and decorative effects that hurt readability.

## 5. Page structure

### A. Navigation
- Khatakitab logo mark and wordmark on the left.
- Links: Home, Features, Pricing, About.
- Login link and prominent “Get Started Free” CTA on the right.
- Sticky navigation with a subtle background/border after scrolling.
- Mobile navigation must work and be keyboard accessible.

### B. Hero
Desktop: two-column layout. Copy on the left; product showcase on the right.

Left side:
- Small pill: “Built for Small Businesses”
- Headline: “Manage Your Business Finances, Inventory & More — All in One Place”
- Emphasize “All in One Place” with a restrained blue-to-violet gradient.
- Supporting copy from Section 2.
- Primary “Get Started Free” button with arrow icon.
- Secondary “Watch Demo” button with play icon.
- Trust points beneath the buttons.

Right side:
- Create a convincing dashboard mockup with a desktop dashboard and overlapping phone mockup.
- Desktop dashboard should include sidebar navigation, income/expense/profit summary cards, a simple chart, and a small top-products table.
- Phone should include a daily summary and a few recent transactions.
- Use realistic but fictional values and data.
- Build the mockups in React/CSS/SVG rather than using a screenshot, if practical.
- Add subtle floating decorative elements only where they support depth.

### C. Features
Heading: “Powerful Features for Your Business”
Supporting text: “From daily transactions to detailed reports — Khatakitab gives you the tools to run your business better, faster and smarter.”

Show six features in a clean grid:
1. Income & Expense Tracking — Keep a clear record of daily income, expenses and overall profit.
2. Inventory Management — Track stock, get low-stock alerts and never run out of essentials.
3. Reports & Insights — View simple, clear reports to make better business decisions.
4. Offline First — Work without internet and sync when you're back online.
5. Secure Backup — Explain backup as a product capability without promising unsupported security guarantees.
6. Multi-Business Support — Manage multiple shops or business types from one app.

Each card should have a distinctive icon, concise copy, hover feedback, and a clear focus state.

### D. How it works
Use a lightly tinted background section with three numbered steps:
1. Choose Your Business Type — Select grocery, tailor, salon, clothes, and more, or add your own.
2. Add Your Details — Set up inventory, products and business settings.
3. Start Managing — Track sales, expenses, inventory and view reports in one place.

Include a tasteful illustration or custom CSS/SVG scene showing a shop owner using a tablet. Do not use a random unrelated stock image.

### E. Testimonials
Heading: “What Our Users Say”
Use three testimonial cards with illustrative placeholder copy and clearly fictional names/roles, or label the section “Sample testimonials” so it cannot be mistaken for real endorsements. Do not fabricate verifiable customer claims.

### F. Final CTA
Use a high-contrast deep navy-to-blue gradient banner.
Headline: “Ready to Take Control of Your Business?”
Supporting copy: “Explore a simpler way to manage your day-to-day business.”
Button: “Get Started Free”

### G. Footer
- Logo and brief product description
- Home, Features, Pricing, About
- Privacy, Terms, Contact
- Social icons only if their links are functional; otherwise omit them.
- Copyright line with current year generated in code.

## 6. The “wow factor” — animation requirements

Animations must feel premium and purposeful, not distracting. Use Motion for React if available.

1. **Hero entrance:** stagger the eyebrow, heading, copy, buttons, and trust points into view. Use a short fade and slight upward movement.
2. **Dashboard reveal:** animate the dashboard into view with a gentle scale/translate and layered depth. The phone mockup should enter with a slight delay.
3. **Ambient motion:** subtle floating movement on one or two decorative dashboard elements; keep it slow and low amplitude.
4. **Scroll reveals:** reveal feature cards and the “How it works” steps as they enter the viewport. Use viewport triggers and avoid replaying animations excessively.
5. **Metric count-up:** animate dashboard summary values once when the dashboard becomes visible. Respect reduced-motion preferences.
6. **Micro-interactions:** buttons have clear hover/pressed states; cards lift slightly on hover; navigation links have a subtle active/hover indicator.
7. **CTA response:** all CTAs must do something meaningful. For this demo, they may scroll to a relevant section, open a polished demo modal, or show a small “Demo only” notice. Do not leave dead links.
8. **Demo modal:** “Watch Demo” opens an accessible modal with a short product walkthrough made from the dashboard mockup and concise explanatory steps. Support Escape, close button, focus handling, and sensible mobile sizing.

### Motion guidelines
- Typical transitions: 180–350ms.
- Use easing that feels smooth and intentional.
- Avoid animating every element, long delays, excessive parallax, scroll hijacking, or continuous motion that distracts from the CTA.
- Respect `prefers-reduced-motion`; provide a reduced-motion experience.
- Keep scrolling native and smooth.
- Avoid layout shifts during animation.

## 7. Functional requirements

- All navigation links work.
- Mobile menu opens, closes, and supports keyboard interaction.
- CTA buttons have real behavior appropriate for a demo.
- “Watch Demo” opens and closes its modal accessibly.
- Any interactive dashboard tabs or controls work and visibly update the selected state/content.
- Use semantic HTML and accessible labels.
- Keyboard focus must be clearly visible.
- Maintain readable contrast.
- Images/icons must load reliably; provide local/CSS/SVG fallbacks.
- No console errors, broken imports, dead buttons, or horizontal overflow.
- No fake form submission. If a form is added, validate it and clearly state that this is a demo unless a backend exists.

## 8. Responsive behavior

Design and test at these viewport widths:
- 1440px desktop
- 1024px laptop/tablet landscape
- 768px tablet
- 390px mobile
- 320px narrow mobile

At desktop, preserve the split hero and layered product mockup. At tablet, reduce mockup scale and spacing. On mobile, stack hero content and mockups, simplify the dashboard so it remains legible, collapse feature cards to one column when necessary, and prevent clipping. Navigation must become a usable mobile menu.

## 9. Quality and performance

- Keep components modular and readable.
- Extract repeated buttons, cards, and section containers when useful.
- Use TypeScript types appropriately; avoid `any` unless justified.
- Optimize animation and avoid unnecessary rerenders.
- Use local assets or CSS/SVG when that is simpler and more reliable.
- Add meaningful page title and meta description.
- Ensure the landing page remains usable if animation support is unavailable.
- Do not add a backend, authentication, analytics, or database unless explicitly requested.

## 10. Suggested component structure

Adapt this structure to the existing project rather than forcing it:

```text
src/
  components/
    Navbar.tsx
    Button.tsx
    SectionHeading.tsx
    DashboardMockup.tsx
    PhoneMockup.tsx
    FeatureCard.tsx
    DemoModal.tsx
    Footer.tsx
  sections/
    HeroSection.tsx
    FeaturesSection.tsx
    HowItWorksSection.tsx
    TestimonialsSection.tsx
    FinalCtaSection.tsx
  App.tsx
  main.tsx
```

Keep styles organized according to the project's existing conventions.

## 11. Implementation workflow — follow in order

1. Inspect the repository, package manager, existing components, styles, and available dependencies.
2. Briefly report the current stack and implementation plan before making major changes.
3. Implement the complete page structure and responsive styling.
4. Build the dashboard and phone mockups.
5. Add animations and reduced-motion support.
6. Implement and verify navigation, CTA behavior, mobile menu, and demo modal.
7. Run the available lint, type-check, and build commands. Fix issues caused by the implementation.
8. Launch the site if the environment supports it and inspect at desktop and mobile sizes.
9. Check every section, overflow, spacing, typography, focus states, and console output.
10. Make a final refinement pass focused on visual polish and consistency.

Do not stop after generating a plan or scaffolding. Complete the implementation and report what was actually tested. If browser automation or a preview environment is unavailable, state that limitation honestly.

## 12. Acceptance checklist

- [ ] Looks premium and intentionally art-directed.
- [ ] Hero communicates the product and value proposition immediately.
- [ ] Dashboard and phone mockups look like a coherent real product.
- [ ] The page has a clear visual hierarchy and a strong primary CTA.
- [ ] Animations add delight without slowing or distracting users.
- [ ] Reduced-motion preference is respected.
- [ ] All sections are implemented.
- [ ] Navigation, mobile menu, CTAs, and demo modal work.
- [ ] Responsive at 1440, 1024, 768, 390, and 320px.
- [ ] No horizontal overflow or broken assets.
- [ ] No console errors, type errors, or build failures introduced.
- [ ] No paid services or API keys are required.
- [ ] Fictional testimonials and demo data are not represented as verified facts.

## Final instruction to the AI IDE

Treat this as a client-facing portfolio piece. Prioritize strong visual hierarchy, refined spacing, believable product UI, and a few memorable animations. Make deliberate design decisions instead of asking for approval on every detail. Inspect the existing code before editing, preserve useful conventions, implement the complete working result, and clearly disclose anything you could not test.
