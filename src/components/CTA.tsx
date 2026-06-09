import React, { useState } from "react";
import { UserCheck, Heart, Send, CheckCircle2, Lock, RotateCcw, Receipt, Sparkles } from "lucide-react";
import { VolunteerInput, DonationInput } from "../types";

export default function CTA() {
  // Volunteer Form State
  const [vForm, setVForm] = useState<VolunteerInput>({
    name: "",
    email: "",
    phone: "",
    interest: "proj-vidya",
    experience: "no-exp",
    notes: "",
  });
  const [vErrors, setVErrors] = useState<Partial<Record<keyof VolunteerInput, string>>>({});
  const [isVSubmitting, setIsVSubmitting] = useState(false);
  const [vSuccessData, setVSuccessData] = useState<VolunteerInput | null>(null);

  // Donation Widget State
  const [dForm, setDForm] = useState<DonationInput>({
    amount: 5000,
    customAmount: "",
    interval: "once",
    impactArea: "proj-sahayata",
    fullName: "",
    email: "",
  });
  const [dErrors, setDErrors] = useState<Partial<Record<string, string>>>({});
  const [isDSubmitting, setIsDSubmitting] = useState(false);
  const [dSuccessReceipt, setDSuccessReceipt] = useState<{
    id: string;
    amount: string;
    interval: string;
    impact: string;
    donor: string;
    email: string;
  } | null>(null);

  // Interest Mapping labels for visual outputs
  const interestLabels: Record<string, string> = {
    "proj-vidya": "Project Vidya (Education Support)",
    "proj-sahayata": "Project Sahayata (Community Welfare)",
    "proj-yuva": "Project Yuva (Youth Empowerment)",
    "proj-jagrukta": "Project Jagrukta (Awareness Drives)",
  };

  // Volunteer Submission Handling
  const handleVSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Partial<Record<keyof VolunteerInput, string>> = {};
    
    if (!vForm.name.trim()) errors.name = "Full name is required";
    if (!vForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(vForm.email)) {
      errors.email = "Invalid email format";
    }
    if (!vForm.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[0-9]{10,14}$/.test(vForm.phone.replace(/[\s-]/g, ""))) {
      errors.phone = "Invalid phone number (must be 10-14 digits)";
    }

    if (Object.keys(errors).length > 0) {
      setVErrors(errors);
      return;
    }

    setVErrors({});
    setIsVSubmitting(true);

    // Simulate network server delay
    setTimeout(() => {
      setIsVSubmitting(false);
      setVSuccessData({ ...vForm });
    }, 1500);
  };

  // Donation Submission Handling
  const handleDSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    let donationAmount = 0;
    if (dForm.amount === "custom") {
      const parsed = parseFloat(dForm.customAmount);
      if (!dForm.customAmount || isNaN(parsed) || parsed < 100) {
        errors.amount = "Minimum donation value is ₹100";
      } else {
        donationAmount = parsed;
      }
    } else {
      donationAmount = dForm.amount;
    }

    if (!dForm.fullName.trim()) errors.fullName = "Donor name on card is required";
    if (!dForm.email.trim()) {
      errors.email = "Receipt correspondence email is required";
    } else if (!/\S+@\S+\.\S+/.test(dForm.email)) {
      errors.email = "Invalid email address";
    }

    if (Object.keys(errors).length > 0) {
      setDErrors(errors);
      return;
    }

    setDErrors({});
    setIsDSubmitting(true);

    setTimeout(() => {
      setIsDSubmitting(false);
      
      const transactionId = "TXN-" + Math.floor(100000 + Math.random() * 900000) + "-IN";
      setDSuccessReceipt({
        id: transactionId,
        amount: "₹" + donationAmount.toLocaleString(),
        interval: dForm.interval,
        impact: interestLabels[dForm.impactArea] || "General Welfare Fund",
        donor: dForm.fullName,
        email: dForm.email,
      });
    }, 1500);
  };

  return (
    <section id="cta" className="py-24 bg-slate-950 text-white scroll-mt-14 relative overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-0 left-1/4 w-[35vw] h-[35vw] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[35vw] h-[35vw] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Double Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: Volunteer form card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex-1 p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between text-left relative overflow-hidden shadow-xl">
              
              {/* Success Screen Overlay inside Card */}
              {vSuccessData ? (
                <div id="v-success-panel" className="absolute inset-0 bg-slate-900 z-10 p-8 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="font-sans text-[10px] tracking-widest text-orange-500 font-mono font-bold uppercase">
                      ONBOARDING REGISTERED
                    </span>
                    <h3 className="font-display font-black text-2xl text-white">
                      Welcome to the Amigos!
                    </h3>
                    <p className="font-sans text-slate-300 text-sm max-w-sm leading-relaxed font-light">
                      Thank you, <strong className="text-white">{vSuccessData.name}</strong>, for stepping forward. Your volunteer request has been received.
                    </p>
                  </div>

                  <div className="w-full bg-slate-950 p-5 rounded-xl border border-slate-800 text-left text-xs font-sans space-y-2">
                    <p className="text-slate-400">
                      <strong>Allocated Area:</strong> {interestLabels[vSuccessData.interest]}
                    </p>
                    <p className="text-slate-400">
                      <strong>Contact Coordinates:</strong> {vSuccessData.email} | {vSuccessData.phone}
                    </p>
                    <p className="text-slate-500 italic leading-normal">
                      Note: An executive volunteer coordinator will email you within 24 hours with instructions to join our regional WhatsApp community board.
                    </p>
                  </div>

                  <button
                    id="btn-v-reset"
                    onClick={() => setVSuccessData(null)}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold select-none transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Onboard Another Member</span>
                  </button>
                </div>
              ) : null}

              <div className="space-y-6">
                
                {/* Visual Header */}
                <div className="space-y-2">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full font-sans text-xs font-semibold">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Join Our Community</span>
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                    Become a Volunteer
                  </h3>
                  <p className="font-sans text-slate-400 text-xs sm:text-sm">
                    No membership dues, no strict conditions. Spend your spare weekends helping our mobile circles deliver welfare and classroom mentorship.
                  </p>
                </div>

                {/* Form fields */}
                <form id="volunteer-form" onSubmit={handleVSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div className="space-y-1.5 flex flex-col">
                      <label className="font-sans text-xs font-bold text-slate-350">Full Name</label>
                      <input
                        id="v-name"
                        type="text"
                        value={vForm.name}
                        onChange={(e) => setVForm({ ...vForm, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full bg-slate-950 border ${
                          vErrors.name ? "border-rose-500" : "border-slate-800"
                        } focus:border-orange-500 outline-none rounded-xl px-4 py-2.5 font-sans text-sm text-white placeholder-slate-600 transition-all`}
                      />
                      {vErrors.name && <span className="font-sans text-rose-500 text-[11px]">{vErrors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 flex flex-col">
                      <label className="font-sans text-xs font-bold text-slate-350">Email Address</label>
                      <input
                        id="v-email"
                        type="email"
                        value={vForm.email}
                        onChange={(e) => setVForm({ ...vForm, email: e.target.value })}
                        placeholder="e.g. rahul@example.com"
                        className={`w-full bg-slate-950 border ${
                          vErrors.email ? "border-rose-500" : "border-slate-800"
                        } focus:border-orange-500 outline-none rounded-xl px-4 py-2.5 font-sans text-sm text-white placeholder-slate-600 transition-all`}
                      />
                      {vErrors.email && <span className="font-sans text-rose-500 text-[11px]">{vErrors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Phone */}
                    <div className="space-y-1.5 flex flex-col">
                      <label className="font-sans text-xs font-bold text-slate-350">Phone Number</label>
                      <input
                        id="v-phone"
                        type="text"
                        value={vForm.phone}
                        onChange={(e) => setVForm({ ...vForm, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className={`w-full bg-slate-950 border ${
                          vErrors.phone ? "border-rose-500" : "border-slate-800"
                        } focus:border-orange-500 outline-none rounded-xl px-4 py-2.5 font-sans text-sm text-white placeholder-slate-600 transition-all`}
                      />
                      {vErrors.phone && <span className="font-sans text-rose-500 text-[11px]">{vErrors.phone}</span>}
                    </div>

                    {/* Sphere of action select */}
                    <div className="space-y-1.5 flex flex-col">
                      <label className="font-sans text-xs font-bold text-slate-350">Primary Interest Area</label>
                      <select
                        id="donation-impact-select"
                        value={vForm.interest}
                        onChange={(e) => setVForm({ ...vForm, interest: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500 outline-none rounded-xl px-4 py-2.5 font-sans text-sm text-slate-100 transition-all cursor-pointer"
                      >
                        <option value="proj-vidya">Project Vidya (Education)</option>
                        <option value="proj-sahayata">Project Sahayata (Welfare)</option>
                        <option value="proj-yuva">Project Yuva (Empowerment)</option>
                        <option value="proj-jagrukta">Project Jagrukta (Awareness)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    
                    {/* Prior experience select */}
                    <div className="space-y-1.5 flex flex-col">
                      <label className="font-sans text-xs font-bold text-slate-350">Prior Direct Experience?</label>
                      <select
                        id="v-experience"
                        value={vForm.experience}
                        onChange={(e) => setVForm({ ...vForm, experience: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500 outline-none rounded-xl px-4 py-2.5 font-sans text-sm text-slate-100 transition-all cursor-pointer"
                      >
                        <option value="no-exp">No prior experience (Warm welcome!)</option>
                        <option value="some-exp">Helped standard NGOs before</option>
                        <option value="pro-exp">Active community worker</option>
                      </select>
                    </div>

                    {/* Support motivation notes */}
                    <div className="space-y-1.5 flex flex-col">
                      <label className="font-sans text-xs font-bold text-slate-350">Your Motivation / Extra Skills (Optional)</label>
                      <textarea
                        id="v-notes"
                        rows={3}
                        value={vForm.notes}
                        onChange={(e) => setVForm({ ...vForm, notes: e.target.value })}
                        placeholder="Write a brief line on why you want to support or any special skills (e.g. photography, teaching, medicine)..."
                        className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500 outline-none rounded-xl px-4 py-2.5 font-sans text-sm text-white placeholder-slate-600 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission triggers */}
                  <button
                    id="v-submit-btn"
                    type="submit"
                    disabled={isVSubmitting}
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-sans font-bold text-sm lg:text-base rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/10 cursor-pointer disabled:opacity-50 transition-all select-none"
                  >
                    {isVSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                        <span>Validating credentials...</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-2">
                        <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        <span>Submit Volunteer Request</span>
                      </span>
                    )}
                  </button>
                </form>

              </div>

              {/* Secure guarantee text */}
              <p className="mt-6 text-[10px] sm:text-xs text-slate-500 text-center select-none font-mono">
                ✓ No membership constraints. All details preserved under statutory compliance rules.
              </p>
            </div>
          </div>

          {/* RIGHT: Mock donation support widget */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex-1 p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between text-left relative overflow-hidden shadow-xl">
              
              {/* Receipt screen overlay inside Donate card */}
              {dSuccessReceipt ? (
                <div id="d-success-overlay" className="absolute inset-0 bg-slate-900 z-10 p-8 flex flex-col items-center justify-center text-center space-y-5 animate-fade-in">
                  
                  {/* Decorative Sparkle elements */}
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Sparkles className="w-8 h-8 animate-pulse" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] tracking-widest text-emerald-400 font-mono font-bold uppercase">
                      SECURE MOCK TRANSACTION COMPLETED
                    </span>
                    <h3 className="font-display font-black text-2xl text-white">
                      Magnificent Action!
                    </h3>
                    <p className="font-sans text-slate-300 text-xs sm:text-sm max-w-sm font-light">
                      Your diagnostic support of <strong className="text-white">{dSuccessReceipt.amount}</strong> is processed. Below is your structured fiscal memo.
                    </p>
                  </div>

                  {/* Visual Receipt Plate */}
                  <div className="w-full bg-slate-950 p-6 rounded-2xl border border-slate-800 text-left font-sans text-xs space-y-3 shadow-inner max-w-sm relative overflow-hidden">
                    
                    {/* Mini card visual indicator */}
                    <div className="absolute top-4 right-4 text-emerald-400/20">
                      <Receipt className="w-12 h-12" />
                    </div>

                    <div className="border-b border-white/5 pb-2 flex justify-between font-mono text-slate-500">
                      <span>InAmigos Receipt</span>
                      <span>{dSuccessReceipt.id}</span>
                    </div>

                    <div className="space-y-1.5 pt-1 text-slate-400">
                      <p>
                        <strong>Donor Name:</strong> {dSuccessReceipt.donor}
                      </p>
                      <p>
                        <strong>Contribution:</strong> {dSuccessReceipt.amount} ({dSuccessReceipt.interval})
                      </p>
                      <p className="truncate">
                        <strong>Impact Target:</strong> {dSuccessReceipt.impact}
                      </p>
                      <p>
                        <strong>Receipt Copy Sent:</strong> {dSuccessReceipt.email}
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>✓ 80G Tax-Deductible</span>
                      <span>Secured Platform</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setDSuccessReceipt(null)}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold hover:text-white transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Back to Portal</span>
                    </button>
                    
                    <button
                      onClick={() => alert(`[Receipt Download Dialog]\nMock PDF downloaded for Transaction ${dSuccessReceipt.id}. A real PDF copy would generate on live servers.`)}
                      className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-emerald-50 font-sans font-bold text-xs rounded-lg shadow-md transition-colors cursor-pointer"
                    >
                      <span>Download Receipt</span>
                    </button>
                  </div>

                </div>
              ) : null}

              <div className="space-y-6">
                
                {/* Header */}
                <div className="space-y-2">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full font-sans text-xs font-semibold">
                    <Heart className="w-3.5 h-3.5 text-orange-400 fill-orange-450" />
                    <span>Support Our Mission</span>
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                    Direct Impact Portal
                  </h3>
                  <p className="font-sans text-slate-400 text-xs sm:text-sm">
                    Assist our ground teams securely. Choose a pre-evaluated donation tier below or enter a custom amount.
                  </p>
                </div>

                {/* Form Body */}
                <form id="donation-form" onSubmit={handleDSubmit} className="space-y-5">
                  
                  {/* Select Tiers */}
                  <div className="space-y-2">
                    <label className="font-sans text-xs font-bold text-slate-350">Select Amount</label>
                    <div id="donation-tiers" className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[1000, 2500, 5000, 10000].map((amt) => {
                        const isSelected = dForm.amount === amt;
                        return (
                          <button
                            key={amt}
                            id={`donate-option-${amt}`}
                            type="button"
                            onClick={() => setDForm({ ...dForm, amount: amt })}
                            className={`py-3 px-1 rounded-xl font-display font-extrabold text-sm sm:text-base border transition-all text-center cursor-pointer ${
                              isSelected
                                ? "bg-orange-500 border-orange-500 text-white shadow-md"
                                : "bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300"
                            }`}
                          >
                            ₹{amt.toLocaleString()}
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-1.5">
                      <button
                        id="donate-option-custom"
                        type="button"
                        onClick={() => setDForm({ ...dForm, amount: "custom" })}
                        className={`w-full py-2.5 rounded-xl text-xs font-sans font-semibold border transition-all text-center cursor-pointer ${
                          dForm.amount === "custom"
                            ? "bg-orange-500 border-orange-500 text-white"
                            : "bg-slate-950/40 border-slate-800 hover:border-slate-700 text-slate-400"
                        }`}
                      >
                        Enter custom support value
                      </button>
                    </div>
                  </div>

                  {/* Custom values panel */}
                  {dForm.amount === "custom" && (
                    <div id="custom-amt-input-block" className="space-y-2.5 animate-slide-down">
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display font-bold text-slate-400">
                          ₹
                        </span>
                        <input
                          id="donation-custom-amt"
                          type="number"
                          placeholder="Enter value (Minimum ₹100)"
                          value={dForm.customAmount}
                          onChange={(e) => setDForm({ ...dForm, customAmount: e.target.value })}
                          className={`w-full pl-8 pr-4 py-3 bg-slate-950 border ${
                            dErrors.amount ? "border-rose-500" : "border-slate-800"
                          } focus:border-orange-500 outline-none rounded-xl font-sans text-sm text-white placeholder-slate-700 transition-all`}
                        />
                      </div>
                      {dErrors.amount && <span className="font-sans text-rose-500 text-[11px] block text-left">{dErrors.amount}</span>}
                    </div>
                  )}

                  {/* Interval selects */}
                  <div className="grid grid-cols-3 gap-2 pb-1 border-b border-white/5 font-sans">
                    {[
                      { value: "once", label: "One-Time" },
                      { value: "monthly", label: "Monthly Block" },
                      { value: "annually", label: "Annual Care" },
                    ].map((opt) => {
                      const isSelected = dForm.interval === opt.value;
                      return (
                        <button
                          key={opt.value}
                          id={`interval-btn-${opt.value}`}
                          type="button"
                          onClick={() => setDForm({ ...dForm, interval: opt.value as any })}
                          className={`py-2 px-1 rounded-lg text-[10px] sm:text-xs font-semibold cursor-pointer border transition-all ${
                            isSelected
                              ? "bg-indigo-650/40 border-indigo-600 text-orange-400"
                              : "bg-transparent border-slate-800 hover:bg-slate-950/20 text-slate-400"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Donor identity metadata inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Donor Card name */}
                    <div className="space-y-1.5 flex flex-col">
                      <label className="font-sans text-xs font-bold text-slate-350">Donor Full Name</label>
                      <input
                        id="d-donor-name"
                        type="text"
                        value={dForm.fullName}
                        onChange={(e) => setDForm({ ...dForm, fullName: e.target.value })}
                        placeholder="e.g. Priyanjali Sen"
                        className={`w-full bg-slate-950 border ${
                          dErrors.fullName ? "border-rose-500" : "border-slate-800"
                        } focus:border-orange-500 outline-none rounded-xl px-4 py-2.5 font-sans text-sm text-white placeholder-slate-600 transition-all`}
                      />
                      {dErrors.fullName && <span className="font-sans text-rose-500 text-[11px]">{dErrors.fullName}</span>}
                    </div>

                    {/* Email for fiscal receipt */}
                    <div className="space-y-1.5 flex flex-col">
                      <label className="font-sans text-xs font-bold text-slate-350">Correspondence Email</label>
                      <input
                        id="d-email"
                        type="email"
                        value={dForm.email}
                        onChange={(e) => setDForm({ ...dForm, email: e.target.value })}
                        placeholder="e.g. priya@example.com"
                        className={`w-full bg-slate-950 border ${
                          dErrors.email ? "border-rose-500" : "border-slate-800"
                        } focus:border-orange-500 outline-none rounded-xl px-4 py-2.5 font-sans text-sm text-white placeholder-slate-600 transition-all`}
                      />
                      {dErrors.email && <span className="font-sans text-rose-500 text-[11px]">{dErrors.email}</span>}
                    </div>
                  </div>

                  {/* Secure Check out triggers */}
                  <button
                    id="donate-submit-btn"
                    type="submit"
                    disabled={isDSubmitting}
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 font-sans font-bold text-sm lg:text-base rounded-xl flex items-center justify-center space-x-2.5 shadow-lg shadow-orange-500/10 cursor-pointer disabled:opacity-50 transition-all select-none"
                  >
                    {isDSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                        <span>Connecting to security portal...</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-2">
                        <Lock className="w-5 h-5 text-white/80" />
                        <span>Securely Support InAmigos</span>
                      </span>
                    )}
                  </button>
                </form>

              </div>

              {/* Secure guarantee footnotes icon */}
              <p className="mt-6 text-[10px] sm:text-xs text-slate-500 text-center select-none font-mono">
                ✓ 80G Certified. Built-in 256-bit secure mock SSL gateway protection.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
