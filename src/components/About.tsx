import React, { useState } from "react";
import { ABOUT_CONTENT } from "../data";
import { Heart, Target, Eye, Compass, ShieldCheck, Sparkles, Users } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("mission");

  // Map values to Lucide icons
  const iconMap: Record<string, React.ReactNode> = {
    Compassion: <Heart className="w-6 h-6 text-orange-500 fill-orange-500/10" />,
    Transparency: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
    Innovation: <Sparkles className="w-6 h-6 text-amber-500" />,
    Collaboration: <Users className="w-6 h-6 text-cyan-400" />,
  };

  return (
    <section id="about" className="py-24 bg-white text-slate-900 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid: Who We Are & Mission Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Who We Are Left Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="font-sans text-xs tracking-widest text-orange-500 font-extrabold uppercase select-none">
                {ABOUT_CONTENT.introTitle}
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Standing Strong for Social Change
              </h2>
            </div>
            
            <p className="font-sans text-slate-700 text-base sm:text-lg leading-relaxed font-light">
              {ABOUT_CONTENT.introParagraph1}
            </p>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              {ABOUT_CONTENT.introParagraph2}
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-orange-600" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-slate-900 text-sm">Our Primary Motive</h4>
                <p className="font-sans text-slate-600 text-xs sm:text-sm">
                  To replace vulnerability with confidence by equipping grassroot families with immediate care and skill literacy.
                </p>
              </div>
            </div>
          </div>

          {/* Tabbed Vision / Mission Right Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Visual Tab Handles */}
            <div className="flex border-b border-slate-200">
              <button
                id="tab-btn-mission"
                onClick={() => setActiveTab("mission")}
                className={`flex-1 py-4 font-display font-extrabold text-base border-b-2 transition-all ${
                  activeTab === "mission"
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                Our Sacred Mission
              </button>
              <button
                id="tab-btn-vision"
                onClick={() => setActiveTab("vision")}
                className={`flex-1 py-4 font-display font-extrabold text-base border-b-2 transition-all ${
                  activeTab === "vision"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                Our Grand Vision
              </button>
            </div>

            {/* Tab Content Cards */}
            <div className="min-h-[220px] transition-all duration-300">
              {activeTab === "mission" ? (
                <div id="mission-card" className="p-8 rounded-2xl bg-orange-50/50 border border-orange-100 text-left space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-black text-xl text-slate-900">{ABOUT_CONTENT.mission.title}</h3>
                  <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed">
                    {ABOUT_CONTENT.mission.description}
                  </p>
                </div>
              ) : (
                <div id="vision-card" className="p-8 rounded-2xl bg-indigo-50/50 border border-indigo-100 text-left space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-black text-xl text-slate-900">{ABOUT_CONTENT.vision.title}</h3>
                  <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed">
                    {ABOUT_CONTENT.vision.description}
                  </p>
                </div>
              )}
            </div>

            {/* Quick action pointer */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl text-left flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-xl pointer-events-none" />
              <div className="space-y-1">
                <p className="font-display font-bold text-sm">Become an active part of this goal.</p>
                <p className="font-sans text-slate-400 text-xs">Help us sustain these parameters daily.</p>
              </div>
              <button
                id="about-cta-btn"
                onClick={() => {
                  const el = document.getElementById("cta");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 font-sans font-semibold text-xs rounded-lg transition-all cursor-pointer"
              >
                Join Today
              </button>
            </div>

          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
            <span className="font-sans text-xs tracking-widest text-orange-500 font-extrabold uppercase select-none">
              Governance Standard
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Our Non-Negotiable Core Values
            </h3>
          </div>

          <div id="values-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_CONTENT.coreValues.map((val, idx) => (
              <div
                key={val.title}
                id={`val-card-${idx}`}
                className="p-6 rounded-2xl border border-slate-100 hover:border-slate-200 bg-white hover:bg-slate-50/50 shadow-sm hover:shadow-md transition-all text-left flex flex-col space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
                  {iconMap[val.title] || <Heart className="w-6 h-6" />}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h4 className="font-display font-bold text-slate-900 text-base">{val.title}</h4>
                  <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
