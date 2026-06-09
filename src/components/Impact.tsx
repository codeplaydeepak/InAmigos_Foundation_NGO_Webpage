import React, { useState, useEffect } from "react";
import { STATS } from "../data";
import { Users, GraduationCap, Heart, Award, ArrowRight, Coins } from "lucide-react";

// Robust, safe internal counter component that handles mounting ticks smoothly
function CenteredCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let active = true;
    const duration = 1500; // milliseconds
    const frameRate = 1000 / 60; // 60 fps
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const tick = () => {
      if (!active) return;
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.round(easeProgress * target);

      if (frame < totalFrames) {
        setCount(currentVal);
        requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(tick);
    return () => {
      active = false;
    };
  }, [target]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <span className="font-display font-black text-4xl sm:text-5xl text-white">
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const [donationValue, setDonationValue] = useState<number>(5000);

  const getImpactDetails = (val: number) => {
    if (val < 2000) {
      return {
        amount: "₹1,000",
        tagline: "Sponsor Direct Study Supplies",
        description: "Equips 2 primary school scholars with complete learning kits including notebooks, drawing blocks, pencils, rulers, and geometry supplies.",
        icon: <GraduationCap className="w-8 h-8 text-orange-500" />,
      };
    } else if (val < 4000) {
      return {
        amount: "₹2,500",
        tagline: "Sustained Smart Tutors",
        description: "Provides local slum learning networks with 1 premium digital tablet license and funds 2 structural weekend group tutoring sessions.",
        icon: <Users className="w-8 h-8 text-amber-400" />,
      };
    } else if (val < 8000) {
      return {
        amount: "₹5,000",
        tagline: "Community Medical Aid Kits",
        description: "Procures professional health diagnostic sets, multi-vitamin syrup bundles, and feminine sanitary pads for 12 village elder families.",
        icon: <Heart className="w-8 h-8 text-rose-500 fill-rose-500/10" />,
      };
    } else if (val < 18000) {
      return {
        amount: "₹10,000",
        tagline: "Vocational Skill Bootcamps",
        description: "Sponsors 1 young local apprentice through a 30-day intensive software literacy, business English, and digital workspace preparation series.",
        icon: <Award className="w-8 h-8 text-cyan-400" />,
      };
    } else {
      return {
        amount: "₹25,000+",
        tagline: "Classroom Digital Transformation",
        description: "Fully establishes 1 complete rural community smart-board setup with dynamic audio projection capabilities, opening world lessons to hundreds.",
        icon: <Coins className="w-8 h-8 text-emerald-400 animate-bounce" />,
      };
    }
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-6 h-6 text-orange-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-orange-400" />;
      case "Heart":
        return <Heart className="w-6 h-6 text-orange-400 fill-orange-400/15" />;
      case "Award":
        return <Award className="w-6 h-6 text-orange-400" />;
      default:
        return <Users className="w-6 h-6 text-orange-400" />;
    }
  };

  const currentImpact = getImpactDetails(donationValue);

  const handleApplyDonationValue = () => {
    const ctaSection = document.getElementById("cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
      
      // Auto-populate the mock donation widget field
      setTimeout(() => {
        const amtInput = document.getElementById("donation-custom-amt") as HTMLInputElement;
        const donateOptionCustom = document.getElementById("donate-option-custom") as HTMLButtonElement;
        
        if (donateOptionCustom) {
          donateOptionCustom.click();
        }

        if (amtInput) {
          // Extracts pure number
          const numericPart = donationValue.toString();
          amtInput.value = numericPart;
          amtInput.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }, 800);
    }
  };

  return (
    <section id="impact" className="py-24 bg-slate-900 text-white scroll-mt-14 relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[30vh] h-[30vh] bg-orange-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Stats Grid section */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-16">
          <span className="font-sans text-xs tracking-widest text-orange-400 font-extrabold uppercase select-none">
            Empirical Results
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Our Shared Social Impact
          </h2>
          <p className="font-sans text-slate-400 text-sm sm:text-base font-light">
            Every statistic on this panel correlates to a real face, a warm plate, or an opened opportunity. See how we move.
          </p>
        </div>

        {/* Counters panel */}
        <div id="stats-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              id={stat.id}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col items-center text-center space-y-3 shadow-lg hover:shadow-black/30 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                {getIconComponent(stat.iconName)}
              </div>
              
              <div className="space-y-1 flex-1">
                <div className="leading-tight">
                  <CenteredCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <h4 className="font-display font-bold text-slate-200 text-sm sm:text-base">{stat.label}</h4>
                <p className="font-sans text-slate-400 text-[11px] sm:text-xs leading-relaxed font-light">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Calculator Segment */}
        <div id="calculator-box" className="mt-20 pt-16 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: interactive elements */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-2.5">
                <span className="font-sans text-xs tracking-widest text-orange-400 font-extrabold uppercase select-none">
                  Interactive Projection
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                  Simulate Your Impact
                </h3>
                <p className="font-sans text-slate-400 text-sm sm:text-base">
                  Choose a support value below. Our mathematical index maps how much directly reaches materials to sustain lives.
                </p>
              </div>

              {/* Range block */}
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center text-sm font-sans font-mono text-slate-300">
                  <span>Minimum Block</span>
                  <span className="font-bold text-orange-400">Selected: ₹{donationValue.toLocaleString()}</span>
                  <span>Transform Limit</span>
                </div>

                <div className="relative">
                  <input
                    id="impact-slider"
                    type="range"
                    min="1000"
                    max="25000"
                    step="500"
                    value={donationValue}
                    onChange={(e) => setDonationValue(Number(e.target.value))}
                    className="w-full h-2.5 rounded-full bg-white/10 outline-none appearance-none cursor-pointer accent-orange-500"
                  />
                  
                  {/* Slider marker reference lines */}
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-1">
                    <span>₹1K</span>
                    <span>₹5K</span>
                    <span>₹10K</span>
                    <span>₹18K</span>
                    <span>₹25K+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: visual outcome block */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden backdrop-blur-sm text-left flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-xl pointer-events-none" />
                
                {/* Large responsive icon */}
                <div className="w-16 h-16 rounded-2xl bg-slate-950 flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                  {currentImpact.icon}
                </div>

                {/* Outcome texts */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-display font-black text-2xl text-orange-400">{currentImpact.amount}</span>
                    <span className="font-sans text-xs text-slate-400 uppercase tracking-wider font-mono">allocations</span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-white">
                    {currentImpact.tagline}
                  </h4>
                  <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {currentImpact.description}
                  </p>

                  <button
                    id="btn-apply-impact-calc"
                    onClick={handleApplyDonationValue}
                    className="inline-flex items-center space-x-1 pl-0 pr-4 py-2 font-sans font-bold text-xs text-orange-400 hover:text-orange-300 transition-colors cursor-pointer group"
                  >
                    <span>Proceed to lock this impact</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
