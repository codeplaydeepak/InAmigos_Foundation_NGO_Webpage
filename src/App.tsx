/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Impact from "./components/Impact";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-orange-500 selection:text-white">
      {/* Dynamic Scrolled Header Navbar */}
      <Navbar />

      {/* Primary Display Hero Sector */}
      <Hero />

      {/* NGO Introduction & Tab Core Values */}
      <About />

      {/* Milestone Trackable Portfolios */}
      <Projects />

      {/* Animated Counter Statistics & Impact Estimator Slider */}
      <Impact />

      {/* Filterable Image Grid and Lightbox Carousel */}
      <Gallery />

      {/* Interactive Onboarding Form and Secure Donation simulated portal */}
      <CTA />

      {/* Translucid Footer with FAQS accordion & contact sitemaps */}
      <Footer />
    </div>
  );
}

