import React, { useState } from "react";
import { GALLERY } from "../data";
import { GalleryItem } from "../types";
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, ZoomIn } from "lucide-react";

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Filter links
  const filters = [
    { value: "all", label: "All Events" },
    { value: "education", label: "Education" },
    { value: "welfare", label: "Welfare & Relief" },
    { value: "youth", label: "Youth Engagements" },
    { value: "drives", label: "Awareness Drives" },
  ];

  // Filters the list
  const filteredGallery = GALLERY.filter((item) => {
    return selectedFilter === "all" || item.category === selectedFilter;
  });

  const handleOpenLightbox = (item: GalleryItem) => {
    // We want the index relative to the FILTERED list so sliding is intuitive
    const indexInFiltered = filteredGallery.findIndex((f) => f.id === item.id);
    if (indexInFiltered !== -1) {
      setActiveLightboxIndex(indexInFiltered);
    }
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => {
        if (prev === null) return 0;
        return prev === 0 ? filteredGallery.length - 1 : prev - 1;
      });
    }
  };

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => {
        if (prev === null) return 0;
        return prev === filteredGallery.length - 1 ? 0 : prev + 1;
      });
    }
  };

  const currentLightboxItem =
    activeLightboxIndex !== null ? filteredGallery[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-white text-slate-900 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="font-sans text-xs tracking-widest text-orange-500 font-extrabold uppercase select-none">
            Moments on the Field
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Our Activity Gallery
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base font-light">
            An look inside our drives. Real images gathered during volunteer camps, learning setups, and direct distribution circles.
          </p>
        </div>

        {/* Filter Handles */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              id={`filter-btn-${f.value}`}
              onClick={() => {
                setSelectedFilter(f.value);
                setActiveLightboxIndex(null);
              }}
              className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-sans font-medium border transition-all cursor-pointer ${
                selectedFilter === f.value
                  ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/10"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => handleOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-sm border border-slate-100 cursor-pointer"
            >
              {/* Image element */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                
                {/* Micro zoom icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ZoomIn className="w-5 h-5" />
                </div>

                <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  
                  {/* Category Stamp */}
                  <span className="inline-block px-2 py-0.5 rounded-lg bg-orange-500 text-white text-[10px] font-mono tracking-wide uppercase font-bold select-none">
                    {item.category}
                  </span>

                  <h4 className="font-display font-extrabold text-white text-base leading-snug">
                    {item.title}
                  </h4>
                  
                  {/* Metadata labels */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-300 text-xs font-sans">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span className="truncate max-w-[120px]">{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery No-Items Case */}
        {filteredGallery.length === 0 && (
          <div className="py-16 text-center text-slate-400 font-sans">
            No events registered in this specific category yet. Check back soon!
          </div>
        )}

        {/* Lightbox Modal System */}
        {currentLightboxItem && (
          <div
            id="gallery-lightbox"
            className="fixed inset-0 bg-slate-950/98 z-50 flex flex-col items-center justify-center p-4"
            onClick={handleCloseLightbox}
          >
            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-20">
              <div className="text-left font-sans hidden sm:block">
                <span className="text-[10px] text-orange-400 tracking-widest font-mono uppercase font-bold">
                  {currentLightboxItem.category}
                </span>
                <p className="text-sm font-bold text-slate-200">{currentLightboxItem.title}</p>
              </div>
              
              <button
                id="lightbox-close-btn"
                onClick={handleCloseLightbox}
                className="p-2 bg-white/10 hover:bg-white/20 hover:text-orange-400 rounded-full transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Slider Controls */}
            <div className="relative w-full max-w-4xl max-h-[75vh] flex items-center justify-center">
              
              {/* Prev Button */}
              <button
                id="lightbox-prev-btn"
                onClick={handlePrevLightbox}
                className="absolute left-2 sm:-left-16 p-3 bg-white/5 hover:bg-orange-500 text-white rounded-full transition-all cursor-pointer z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image Viewport */}
              <div
                className="relative rounded-2xl overflow-hidden border border-white/5 max-h-[70vh] bg-black group select-none"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  className="max-w-full max-h-[70vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next Button */}
              <button
                id="lightbox-next-btn"
                onClick={handleNextLightbox}
                className="absolute right-2 sm:-right-16 p-3 bg-white/5 hover:bg-orange-500 text-white rounded-full transition-all cursor-pointer z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Meta Bar (Highly responsive layout) */}
            <div
              className="mt-6 text-center text-white space-y-2 max-w-lg font-sans z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display font-extrabold text-base sm:text-lg">
                {currentLightboxItem.title}
              </h3>
              
              <div className="flex items-center justify-center space-x-6 text-xs text-slate-400">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>{currentLightboxItem.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <span>{currentLightboxItem.date}</span>
                </div>
              </div>

              {/* Thumbnail Position Gauge */}
              <p className="text-[10px] text-slate-500 font-mono">
                Item { (activeLightboxIndex ?? 0) + 1 } of { filteredGallery.length }
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
