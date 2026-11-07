# LIQUID / FORM // Creative Developer & AI/ML Portfolio

> **Digital Sculpture & Real-Time Architecture**  
> Personal portfolio, curriculum vitae, research archive, and real-time GPU laboratory of **Ankit Kumar Sahu** (NIST University).

---

## ✦ Creative Direction & Aesthetics

* **Visual Identity:** Dark futuristic aesthetic with an abstract liquid-metallic real-time center.
* **Palette:**
  * Background: `#08090B` (Near-black cosmic void)
  * Surface Elements: `#0C0E12` / `#11141A` / `#171B24`
  * Primary Accent: `#C7FF55` (Acid Lime)
  * Secondary Accent: `#00F0FF` (Electric Cyan)
  * Chrome Metallic: `#F1F5F9` & `#94A3B8`
* **Typography:**
  * **Space Grotesk** — Headings & editorial titles
  * **Inter** — Body prose, descriptions, and UI controls
  * **IBM Plex Mono** — Technical metadata, telemetry indexes, telemetry tags, and coordinates
* **Motion & Feel:** Sub-16ms Lenis inertial scrolling, custom magnetic cursor with touch-device fallback, GLSL-distorted liquid mesh, and delicate Web Audio synthesizer feedback.

---

## ✦ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, React Server Components) |
| **Runtime & Language** | [TypeScript](https://www.typescriptlang.org/) (Strict mode, ESNext) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) with custom design system variables |
| **3D & WebGL** | [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/) & ScrollTrigger |
| **Smooth Scrolling** | [Lenis](https://lenis.darkroom.engineering/) with reduced-motion support |
| **Audio Synthesis** | Web Audio API Oscillator synthesizer (zero audio asset latency) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## ✦ Application Architecture & Routes

```
src/
├── app/
│   ├── about/              # /about — Studio Practice, Education & Biography
│   │   ├── AboutView.tsx   # Interactive client layer
│   │   └── page.tsx        # Server component with SEO metadata
│   ├── contact/            # /contact — Direct Transmission & Inquiries
│   │   ├── ContactView.tsx # Interactive form & profile card
│   │   └── page.tsx        # Server component with SEO metadata
│   ├── experiments/        # /experiments — R&D Lab & Shader Prototypes
│   │   └── page.tsx        # Server component with experiments grid
│   ├── resume/             # /resume — Dedicated Curriculum Vitae Showcase
│   │   ├── ResumeView.tsx  # Interactive PDF embed, metadata & download
│   │   └── page.tsx        # Server component with SEO metadata
│   ├── work/               # /work — Portfolio Archive & Selected Deployments
│   │   ├── WorkView.tsx    # Interactive filtering & project cards
│   │   └── page.tsx        # Server component with SEO metadata
│   ├── globals.css         # Design system tokens, fonts & Lenis configuration
│   ├── icon.svg            # Dynamic SVG favicon & app icon
│   ├── layout.tsx          # Root layout, telemetry providers & global metadata
│   ├── not-found.tsx       # Custom futuristic 404 anomaly page
│   ├── page.tsx            # / — Homepage with 3D Hero, Featured Works & Philosophy
│   ├── robots.ts           # Dynamic robots.txt generation
│   └── sitemap.ts          # Dynamic sitemap.xml generation
├── components/
│   ├── canvas/             # WebGL 3D Scene, Distorted Mesh & Particle Field
│   ├── home/               # Hero, FeaturedWorksPreview, PhilosophyBanner
│   ├── layout/             # Navigation (desktop + mobile), MenuOverlay, Footer
│   └── ui/                 # Magnetic, Button, Badge, CustomCursor, NoiseOverlay
├── hooks/                  # useMediaQuery, useMousePosition
├── lib/                    # constants, sound synthesizer, utility helpers
└── types/                  # Project, Experiment, NavItem interfaces
```

---

## ✦ Personal Assets & Document Integration

* **Profile Portrait:** Located at `public/images/profile.png` (239 KB). Preserved as original high-resolution photography of Ankit Kumar Sahu with zero generative AI distortion. Used across Hero, About, Contact, and Open Graph previews.
* **Resume Document:** Located at `public/documents/my-resume.pdf` (184 KB). Full vector PDF rendered directly via embedded iframe viewer with download button and full tab view.

---

## ✦ Getting Started (Local Development)

### Prerequisites
* **Node.js** `>= 18.17.0` (Recommended: Node 20 LTS or Node 22+)
* **npm** `>= 9.0.0` (or `pnpm` / `yarn`)

### Installation & Run

```bash
# 1. Clone repository
git clone https://github.com/ankitkumarsahu454554-svg/portfolio_new.git
cd portfolio_new

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:3000
```

### Production Build & Verification

```bash
# Verify TypeScript strict typecheck
npx tsc --noEmit

# Compile production bundle
npm run build

# Preview production build locally
npm run start
```

---

## ✦ Deployment Guide (Vercel)

The application is engineered natively for [Vercel](https://vercel.com/) with zero custom server dependencies.

### Step 1: Push Codebase to GitHub
```bash
git init
git add .
git commit -m "feat: complete production-ready LIQUID / FORM portfolio"
git branch -M main
git remote add origin https://github.com/ankitkumarsahu454554-svg/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** → **"Project"**.
3. Select your GitHub repository.
4. Vercel will automatically detect **Next.js** framework preset.
5. **Build Settings:**
   * **Framework Preset:** `Next.js`
   * **Build Command:** `next build` (Default)
   * **Output Directory:** `.next` (Default)
   * **Install Command:** `npm install` (Default)
6. **Environment Variables:**
   * No mandatory environment variables are required. Leave blank unless you choose to add custom services (see `.env.example`).
7. Click **"Deploy"**.

### Step 3: Custom Domain (Optional)
1. Go to your Project Settings on Vercel → **Domains**.
2. Add your custom domain (e.g. `ankitkumarsahu.dev` or `liquidform.studio`).
3. Follow the DNS records instructions provided by Vercel.

---

## ✦ Performance & Accessibility

* **WebGL Fallbacks:** The 3D canvas wraps in a `WebGLErrorBoundary` with context loss recovery and an elegant CSS/SVG metallic graphic fallback for legacy or software-rendered browsers.
* **Respects Reduced Motion:** All animations, Framer Motion spring loops, and Lenis scrolling honor `(prefers-reduced-motion: reduce)`.
* **Touch Device Optimization:** Magnetic cursor automatically turns off on mobile and touch displays, switching to native responsive touch targets.
* **Strict SEO:** Full Open Graph, Twitter Cards, dynamic `sitemap.xml`, and `robots.txt` generated at build time.

---

## ✦ License & Curator

* **Curator:** **Ankit Kumar Sahu**
* **Institution:** NIST University (B-Tech CSE — Data Science)
* **Email:** [ankitkumarsahu488526@gmail.com](mailto:ankitkumarsahu488526@gmail.com)
* **Portfolio Archive:** [LIQUID / FORM](https://github.com/ankitkumarsahu454554-svg)

