import React, { useState } from "react";
import { FAQS } from "../data";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin, Send, ChevronDown, ChevronUp, Heart, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");
  const [newsEmail, setNewsEmail] = useState("");
  const [isNewsSubmitting, setIsNewsSubmitting] = useState(false);
  const [newsSuccess, setNewsSuccess] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim() || !/\S+@\S+\.\S+/.test(newsEmail)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsNewsSubmitting(true);
    setTimeout(() => {
      setIsNewsSubmitting(false);
      setNewsSuccess(true);
      setNewsEmail("");
    }, 1200);
  };

  return (
    <footer id="footer" className="bg-slate-950 text-slate-300 border-t border-white/5 scroll-mt-14 relative z-10 transition-colors">
      
      {/* Upper FAQ section to prove high organization credibility */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* FAQ Left Title */}
          <div className="lg:col-span-5 text-left space-y-4">
            <div className="space-y-2">
              <span className="font-sans text-xs tracking-widest text-orange-400 font-extrabold uppercase select-none">
                Queries & Transparency
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                Frequently Asked Questions
              </h3>
            </div>
            <p className="font-sans text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              We operate on absolute transparency. Learn where operations run, find parameters regarding your donation allocations, and verify statutory details.
            </p>
            
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center space-x-3 text-left">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-mono text-xs font-bold font-display select-none">!</div>
              <p className="font-sans text-slate-400 text-[11px] sm:text-xs">
                Have specific queries regarding corporate partnerships, audit books, or campus events? Contact us directly.
              </p>
            </div>
          </div>

          {/* FAQ Right Accordion */}
          <div id="faq-accordion" className="lg:col-span-7 flex flex-col space-y-3.5">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-node-${faq.id}`}
                  className="rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all text-left overflow-hidden"
                >
                  <button
                    id={`faq-trigger-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 flex items-center justify-between text-left font-display font-bold text-sm sm:text-base text-white outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-orange-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div id={`faq-body-${faq.id}`} className="px-5 pb-5 pt-1 font-sans text-xs sm:text-sm text-slate-450 border-t border-white/5 bg-slate-950/20 leading-relaxed font-light animate-slide-down">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Main footer maps, metrics, newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Logo Brand information */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="flex items-center h-12">
              <img
                src="/images/logo_star.svg"
                alt="InAmigos Foundation Logo"
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="font-sans text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              A certified, statutory non-profit enterprise working on ground levels in India to deliver food allocations, learning tabs, and professional digital workshops to building next-generation creators.
            </p>

            {/* Social profiles */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.facebook.com/InAmigos/"
                target="_blank"
                rel="noreferrer"
                id="social-fb"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-400 transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/inamigos/?hl=en"
                target="_blank"
                rel="noreferrer"
                id="social-ig"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-400 transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/InamigosF?lang=en"
                target="_blank"
                rel="noreferrer"
                id="social-tw"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-400 transition-all cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/inamigos-foundation/"
                target="_blank"
                rel="noreferrer"
                id="social-ln"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-400 transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <LinkedInComponent className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links sitemap */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white select-none">
              Explore Sitemap
            </h4>
            <ul id="sitemap-list" className="space-y-2.5 font-sans text-xs sm:text-sm">
              {["Hero", "About", "Projects", "Impact", "Gallery", "CTA"].map((lnk) => (
                <li key={lnk}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(lnk.toLowerCase());
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {lnk === "CTA" ? "Volunteer Portal" : lnk === "Hero" ? "Home Back" : lnk}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Directory */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white select-none">
              Contact Directory
            </h4>
            <ul id="contact-list" className="space-y-3 font-sans text-xs sm:text-sm text-slate-400">
              
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span>
                  Headquarters: Plot 12, Sector-4, Dwarka, New Delhi - 110075, India
                </span>
              </li>
              
              <li className="flex items-center space-x-2.5">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="mailto:info@inamigos.org" className="hover:text-orange-400 transition-colors">
                  info@inamigos.org
                </a>
              </li>

              <li className="flex items-center space-x-2.5">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="tel:+911145672345" className="hover:text-orange-400 transition-colors">
                  +91-11-4567-2345
                </a>
              </li>

            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white select-none">
              Stay Engaged
            </h4>
            <p className="font-sans text-slate-400 text-xs leading-relaxed">
              Sign up with your email to receive monthly impact summaries and direct project invitation links.
            </p>

            {newsSuccess ? (
              <div id="newsletter-success" className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-start space-x-2.5 animate-fade-in text-xs">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-orange-500" />
                <div>
                  <p className="font-bold">Subscription Secured!</p>
                  <p className="text-slate-400 mt-0.5">We'll dispatch briefs on the 1st of each month.</p>
                </div>
              </div>
            ) : (
              <form id="newsletter-form" onSubmit={handleNewsSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-orange-500 outline-none rounded-xl pl-4 pr-10 py-2.5 text-xs text-white placeholder-slate-600 transition-all font-sans"
                  />
                  <button
                    id="newsletter-submit-btn"
                    type="submit"
                    disabled={isNewsSubmitting}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white cursor-pointer disabled:opacity-50 transition-colors"
                    aria-label="Subscribe"
                  >
                    {isNewsSubmitting ? (
                      <span className="w-4 h-4 border border-white/50 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Lower Attribution & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-slate-500 select-none">
          <p>© {new Date().getFullYear()} InAmigos Foundation. All statutory and civil rights reserved.</p>
          
          <div className="flex items-center space-x-1">
            <span>Formulating hope with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>as friends of society</span>
          </div>

          <div className="flex space-x-4">
            <a href="#about" className="hover:text-slate-350 transition-colors">Privacy Rules</a>
            <span className="text-white/10">•</span>
            <a href="#projects" className="hover:text-slate-350 transition-colors">Fiscal Audits</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

// Inline helper component for LinkedIn SVG icon to keep standard styling clean
function LinkedInComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
