# 🌟 InAmigos Foundation

<p align="center">
  <img src="public\images\youth_planting.png" alt="InAmigos Foundation Banner" width="100%" style="border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1);" referrerPolicy="no-referrer" />
</p>

<p align="center">
  <strong>Inspiring Hope, Empowering Lives</strong>🌟<br>
  A modern, high-performance, and responsive NGO ecosystem platform built with vanilla web technologies.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Language-TypeScript-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Styling-Tailwind%20CSS-v4--8B5CF6?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
</p>

---

## 📖 Mission Overview

The **InAmigos Foundation** is a dedicated non-governmental organization (NGO) driven by a relentless passion to foster sustainable social equity. This platform serves as a central beacon for grassroot assistance programs, bringing together field volunteers, global donors, and trackable community works. Our visual identity utilizes deep dark slate canvases paired with high-contrast, warm orange guides—illustrating that even in dark vulnerabilities, warm collective action can inspire great hope.

---

## ✨ Primary Interactive Dimensions

The webpage is engineered from the ground up as a fully responsive, semantic Single-Page Application (SPA) utilizing modular JavaScript/TypeScript event patterns, advanced micro-behaviors, and full state validation:

### 1. Dynamic Scroll-Coordinate Navigation Header
*   **Context-Aware Transparency:** The navbar resides in an ambient transparent state over the primary Hero sector and transforms dynamically into a glassmorphic blurred dark background upon passing a scroll threshold of `50px`.
*   **Isomorphic Active Section Tracking:** Integrates high-performance intersection logic highlighting navigation tabs as the user scrolls through the respective sections (`Home`, `About`, `Projects`, `Impact`, `Gallery`, `Onboard`).

### 2. Multi-Functional Core Tabbed Portals
*   **Tabbed Institutional Core Values:** Smoothly switches between *Our Sacred Mission* and *Our Grand Vision* panels using active class transition states.
*   **Governance Matrix:** Showcases four primary non-negotiable vectors (Compassion, Transparency, Innovation, and Collaboration) inside custom hover-active elements.

### 3. Trackable Project Portfolio Engine
*   **Dynamic Tag Filters:** Live Category filtering across *All Works*, *Education*, *Welfare*, *Youth Support*, and *Awareness Drives*.
*   **Milestone Progress Indicators:** Dynamically calculates current raised vs target parameters on real-time HTML progress bars.
*   **Fluid Story Drawer:** Embeds expandable sliding drawers allowing users to deep-dive into full narrative logs directly on the card without shifting layouts.
*   **Integrated Project Index Search:** Allows typing in real-time queries to matches titles, short summaries, or inside descriptive texts seamlessly.

### 4. Interactive Strategic Contribution Calculator
*   **Reactive Slide Calculator:** An interactive range slider tracking contributions between ₹1,000 and ₹25,000+.
*   **Isomorphic Package Allocations:** Instantly maps budget levels to corresponding direct allocations:
    *   **₹1,000:** Sponsor study supplies for 2 primary school scholars.
    *   **₹2,500:** Supports smart digital tutor device licenses.
    *   **₹5,000:** Funds community emergency medical diagnostic packages.
    *   **₹10,000:** Sponsors intensive 30-day corporate preparedness skill bootcamps.
    *   **₹25,000+:** High-tech digital smart classroom configurations.
*   *Direct Sandbox Coupling:* Clicking "Proceed to lock this impact" smoothly scrolls to the contribution form, auto-selects the custom option, and pre-populates your calculation value.

### 5. Media Activity Lightbox Carousel
*   **Grid Filtering:** Organizes field-drive photos under specialized visual categories.
*   **Modal Viewer:** Opens high-resolution photographs nested alongside deep description tags, active geographical positions, and event calendar dates.
*   **Carousel Navigation:** Embedded back/forward controls, escape key close bindings, and layout indices.

### 6. Dynamic Safe Onboarding Portals
*   **Field Volunteer Registration:** Requires strict criteria checks (including structural email validation and local mobile numeric checks). Dynamically transforms into an exquisite confirmation plate indicating the coordinator WhatsApp onboarding pipelines.
*   **Secured Gateway Support Simulation:** 
    *   Interactive preset amount selectors coupled with custom-value inputs.
    *   Validation filters preventing blank fields or amounts under ₹100.
    *   Interactive subscription switches (*Sustain Once* vs *Monthly Support*).
    *   Dispatches an audit receipt styled with mock authorization stamps, transaction identity sequences (`TXN-xxxxxx-IN`), and current localized calendar stamps.

---

## 🛠️ Technology Setup

The platform operates on a modernized client build environment optimized for sandboxed iFrame preview workflows:

```
  ├── index.html                  # Core Layout Structure (Semantic HTML Layout)
  ├── package.json                # Project Manifest & Dependency Catalog
  ├── tsconfig.json               # Type Enforcement Context
  ├── vite.config.ts              # Vite Bundler configurations with Tailwind integration
  ├── src/
  │   ├── main.ts                 # Central Javascript/TypeScript Interactive Controller
  │   ├── data.ts                 # Hardened Static Portfolios & FAQs Structure
  │   ├── types.ts                # TypeScript Strict Interfaces and Declarations
  │   ├── index.css               # Global CSS styles featuring @theme configs
  │   └── assets/
  │       └── images/             # Generated creative content & illustrations
```

### Main Scripts

Run these tasks from your workspace terminal during integration routines:

*   **Launch Dev Server:** `npm run dev`
*   **Compile Production Assets:** `npm run build`
*   **Static Assets Preview:** `npm run preview`
*   **Workspace Linting Check:** `npm run lint`

---

## 🔒 Security & Optimization Best Practices

1.  **Strict Client Validations:** Every form entry is validated before state submission, protecting application streams from broken inputs.
2.  **Referrer Privacy Safeguards:** All `<img>` tags utilize `referrerPolicy="no-referrer"` protocols, protecting image fetching under restricted sandbox networks.
3.  **Performant Animation:** Scroll transitions and active elements are styled using native accelerated GPU styles inside Tailwind's transition libraries, preserving batteries across ancient smartphones.
4.  **Modular Logic Separation:** High volume data sets are maintained in a clean `data.ts` dictionary separate from interactive handlers in `main.ts`, facilitating ease of review.

---

<p align="center">
  Let's cooperate and lift humanity as true Amigos! ❤️
</p>
