import React, { useState } from "react";
import { PROJECTS } from "../data";
import { BookOpen, HeartHandshake, Rocket, Megaphone, Search, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { Project } from "../types";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const categories = ["all", "education", "welfare", "youth support", "awareness"];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory =
      selectedCategory === "all" ||
      proj.category.toLowerCase().includes(selectedCategory.slice(0, 4));
    
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className="w-5 h-5" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5" />;
      case "Rocket":
        return <Rocket className="w-5 h-5" />;
      case "Megaphone":
        return <Megaphone className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const handleToggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (expandedProjectId === id) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(id);
    }
  };

  const handleSupportProject = (proj: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    const ctaSection = document.getElementById("cta");
    if (ctaSection) {
      // Smooth scroll to CTA section
      ctaSection.scrollIntoView({ behavior: "smooth" });
      
      // Auto fill or trigger impact area selectors in donation forms if present
      setTimeout(() => {
        const areaSelectInput = document.getElementById("donation-impact-select") as HTMLSelectElement;
        if (areaSelectInput) {
          areaSelectInput.value = proj.id;
          // Dispatch simulated change event to update state
          areaSelectInput.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }, 800);
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 text-slate-900 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left space-y-2">
            <span className="font-sans text-xs tracking-widest text-orange-500 font-extrabold uppercase select-none">
              Active Portfolios
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Our Ongoing Projects
            </h2>
            <p className="font-sans text-slate-500 text-sm sm:text-base max-w-xl font-light">
              We focus on targeted, measurable drives to create compound positive results. Track progress and assist directly.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="project-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ongoing works..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 focus:border-orange-500 outline-none rounded-xl font-sans text-sm text-slate-800 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Categorization Tabs */}
        <div className="flex overflow-x-auto gap-2 mb-10 pb-2 scrollbar-none snap-x snap-mandatory">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`cat-btn-${cat.replace(" ", "-")}`}
              onClick={() => {
                setSelectedCategory(cat);
                setExpandedProjectId(null);
              }}
              className={`px-5 py-2 rounded-xl text-sm font-sans font-medium transition-all shrink-0 cursor-pointer snap-start ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-md shadow-slate-950/10"
                  : "bg-white text-slate-600 hover:text-slate-950 border border-slate-200"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((proj) => {
              const isExpanded = expandedProjectId === proj.id;
              
              return (
                <div
                  key={proj.id}
                  id={`project-card-${proj.id}`}
                  onClick={(e) => handleToggleExpand(proj.id, e)}
                  className={`group bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col text-left cursor-pointer ${
                    isExpanded ? "ring-2 ring-orange-500/20" : ""
                  }`}
                >
                  {/* Card Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 shrink-0">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient mapping inside the photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                    
                    {/* Category Stamp */}
                    <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white font-sans text-xs font-semibold">
                      <span className="text-orange-400">{getIcon(proj.icon)}</span>
                      <span>{proj.category}</span>
                    </div>

                    {/* Impact metric badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-orange-500/90 backdrop-blur-sm px-4 py-2 border border-orange-400/20 rounded-xl text-white font-sans text-xs font-bold flex items-center justify-between">
                      <span>Impact Area</span>
                      <span className="bg-slate-950/20 px-2 py-0.5 rounded-lg text-[11px] font-mono">{proj.unit}</span>
                    </div>
                  </div>

                  {/* Card Info Body */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 group-hover:text-orange-600 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="font-sans text-slate-600 text-sm leading-relaxed">
                        {proj.shortDescription}
                      </p>
                    </div>

                    {/* Progress tracking block */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="flex justify-between items-center text-xs font-sans">
                        <span className="text-slate-400 font-mono">FINANCIAL GOAL REACHED</span>
                        <span className="font-bold text-orange-600 font-mono">{proj.progress}%</span>
                      </div>
                      
                      {/* Bar body */}
                      <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200/50">
                        <div
                          className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                          style={{ width: `${proj.progress}%` }}
                        />
                      </div>

                      <div className="flex justify-between items-center text-xs sm:text-sm font-sans pt-1">
                        <div>
                          <span className="text-slate-400">Raised: </span>
                          <span className="font-bold font-mono text-slate-800">{proj.raised}</span>
                        </div>
                        <div>
                          <span className="text-slate-400">Target: </span>
                          <span className="font-bold font-mono text-slate-700">{proj.target}</span>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Information and Actions */}
                    {isExpanded && (
                      <div id={`extended-info-${proj.id}`} className="pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 space-y-3 animate-slide-down">
                        <p className="leading-relaxed bg-slate-50 p-4 rounded-xl font-sans border border-slate-200/60">
                          {proj.description}
                        </p>
                      </div>
                    )}

                    {/* CTA Actions Bar */}
                    <div className="pt-2 flex items-center justify-between gap-4">
                      <button
                        id={`btn-expand-${proj.id}`}
                        onClick={(e) => handleToggleExpand(proj.id, e)}
                        className="font-sans text-xs font-bold text-slate-400 hover:text-slate-700 inline-flex items-center space-x-1.5 transition-colors py-1 cursor-pointer"
                      >
                        <span>{isExpanded ? "Collapse Details" : "Read Full Story"}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      <button
                        id={`support-proj-btn-${proj.id}`}
                        onClick={(e) => handleSupportProject(proj, e)}
                        className="inline-flex items-center space-x-1 py-2 px-5 bg-slate-900 hover:bg-slate-800 text-white font-sans font-semibold text-xs rounded-xl shadow-sm transition-all hover:translate-x-0.5 cursor-pointer"
                      >
                        <span>Direct Back</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div id="no-projects" className="py-20 text-center space-y-4 bg-white rounded-3xl border border-slate-200">
            <p className="font-sans text-slate-500 font-medium">No projects found matching current queries.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-orange-500 text-white rounded-xl text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
