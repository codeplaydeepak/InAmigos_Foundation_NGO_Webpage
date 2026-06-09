import React, { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section for active tab styling
      const sections = ["hero", "about", "projects", "impact", "gallery", "cta"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "impact", label: "Impact" },
    { id: "gallery", label: "Gallery" },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => handleScrollTo("hero")}
            className="flex items-center group cursor-pointer h-11"
          >
            <img
              src="/images/logo_star.svg"
              alt="InAmigos Foundation Logo"
              className="h-full w-auto object-contain group-hover:scale-105 transition-transform origin-left"
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`lnk-${link.id}`}
                onClick={() => handleScrollTo(link.id)}
                className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? "text-orange-400 bg-white/5"
                    : "text-slate-200 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              id="nav-cta"
              onClick={() => handleScrollTo("cta")}
              className="ml-4 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 font-sans font-semibold text-white rounded-lg text-sm shadow-md shadow-orange-500/10 hover:shadow-orange-500/30 transition-all duration-250 cursor-pointer"
            >
              Volunteer Now
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        id="mobile-drawer-overlay"
        className={`fixed inset-0 top-[60px] bg-slate-950/95 backdrop-blur-lg z-40 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`lnk-mob-${link.id}`}
              onClick={() => handleScrollTo(link.id)}
              className={`w-full text-left py-3 px-4 rounded-xl font-sans text-base font-semibold border-l-4 transition-all ${
                activeSection === link.id
                  ? "bg-white/5 border-orange-500 text-orange-400"
                  : "border-transparent text-slate-200 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            id="mob-nav-cta"
            onClick={() => handleScrollTo("cta")}
            className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 font-sans font-extrabold text-white rounded-xl shadow-lg shadow-orange-500/20 text-center transition-all cursor-pointer"
          >
            Volunteer / Donor Portal
          </button>
        </div>
      </div>
    </nav>
  );
}
