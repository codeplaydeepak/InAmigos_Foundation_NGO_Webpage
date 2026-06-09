import React from "react";
import { HERO_CONTENT } from "../data";
import { ArrowRight, Flame, Heart } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 bg-slate-950 overflow-hidden"
    >
      {/* Background blobs for tech-ambient texture */}
      <div className="absolute top-1/4 left-[10%] w-[30vw] h-[30vw] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[35vw] h-[35vw] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Special micro-badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center space-x-1.5 py-1 px-4 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-sans text-xs tracking-wide font-medium shadow-sm shadow-black"
            >
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 animate-pulse" />
              <span>Let's collaborate as true Amigos</span>
            </div>

            {/* NGO Name & Display Title */}
            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                {HERO_CONTENT.organizationName}
              </h1>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-orange-500 tracking-tight">
                {HERO_CONTENT.tagline}
              </h2>
            </div>

            {/* Mission Statement */}
            <p className="font-sans text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
              {HERO_CONTENT.missionStatement}
            </p>

            {/* Dynamic Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                id="btn-join-us"
                onClick={() => handleScrollTo("cta")}
                className="group relative inline-flex items-center justify-center space-x-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 font-sans font-bold text-white rounded-xl shadow-lg shadow-orange-500/25 transition-all text-base cursor-pointer"
              >
                <span>Support Our Mission</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="btn-explore-projects"
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-100 font-sans font-semibold rounded-xl border border-slate-800 hover:border-slate-700 transition-all text-base cursor-pointer"
              >
                <span>Explore Projects</span>
              </button>
            </div>

            {/* Live active indicator to replace generic AI slop */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5 w-full max-w-xl text-left">
              <div>
                <p className="font-display font-extrabold text-lg text-white">100%</p>
                <p className="font-sans text-xs text-slate-400">Direct Impact Alloc</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-lg text-white font-mono">80G</p>
                <p className="font-sans text-xs text-slate-400">Tax Exemptions</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-lg text-white">Transparent</p>
                <p className="font-sans text-xs text-slate-400">Audited Quarters</p>
              </div>
            </div>

          </div>

          {/* Hero Right Content: Visual Image Stack */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Visual background frame styling */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-500 to-indigo-600 rounded-2xl blur-lg opacity-40 animate-pulse-slow pointer-events-none" />
            
            {/* Real responsive container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[480px] w-full bg-slate-900 group">
              <img
                src={HERO_CONTENT.imageHero}
                alt="Children of InAmigos Foundation smiling together"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Image Inner overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              {/* Bottom glassmorphic overlay widget */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/10 flex items-center space-x-3.5 shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="text-left font-sans">
                  <p className="text-xs text-slate-300 font-light font-mono select-none">JOINING HANDS</p>
                  <p className="text-sm text-white font-bold select-none">
                    Over 25,000 lives touched this season
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
