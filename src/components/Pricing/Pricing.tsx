"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { 
  Check, 
  Zap, 
  Rocket, 
  Building2, 
  X, 
  Send, 
  Loader2, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  ArrowRight
} from "lucide-react";

const plans = [
  {
    name: "Hourly Support",
    price: "50",
    unit: "/hr",
    subtitle: "Flexible Ad-Hoc Engineering",
    Icon: Zap,
    features: [
      "Senior Full-Stack code & bug fixing",
      "Next.js, Laravel & Node API engineering",
      "Performance, security & SEO audits",
      "Detailed time logs & async video updates",
      "Direct Slack / WhatsApp sync"
    ],
    color: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.25)",
    gradient: "from-brandPurple/20 to-transparent",
    border: "border-brandPurple/50"
  },
  {
    name: "Project-Based",
    price: "1,800",
    unit: "/start",
    subtitle: "End-to-End Product Launch",
    popular: true,
    Icon: Rocket,
    features: [
      "Production-ready Web App / SaaS build",
      "Modern Next.js or Laravel architecture",
      "Premium custom UI/UX & fluid animations",
      "Role-based Admin portal & scalable DB",
      "30-days dedicated post-launch warranty"
    ],
    color: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.25)",
    gradient: "from-brandBlue/20 to-transparent",
    border: "border-brandBlue/50"
  },
  {
    name: "Monthly Retainer",
    price: "3,500",
    unit: "/mo",
    subtitle: "Dedicated Full-Stack Partner",
    Icon: Building2,
    features: [
      "Dedicated Senior Full-Stack dev (140+ hrs/mo)",
      "Sprint planning & engineering leadership",
      "Enterprise API, database & cloud scaling",
      "Continuous feature delivery & DevOps",
      "Top-priority Slack, Zoom & 24/7 SLA"
    ],
    color: "#4ade80",
    glowColor: "rgba(74, 222, 128, 0.25)",
    gradient: "from-brandGreen/20 to-transparent",
    border: "border-brandGreen/50"
  }
];

export default function Pricing() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1); // Default to Project-Based
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [modalError, setModalError] = useState("");

  const lenis = useLenis();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const selectedPlan = plans[selectedPlanIndex];

  // Robust scroll lock: stop Lenis smooth scroll and lock body/html overflow
  useEffect(() => {
    if (isModalOpen) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isModalOpen, lenis]);

  const handleOpenModal = (index: number) => {
    setSelectedPlanIndex(index);
    setIsModalOpen(true);
    setModalStatus("idle");
    setModalError("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalStatus("loading");
    setModalError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.name,
          email: formData.email,
          phone: formData.phone,
          selectedPlan: selectedPlan.name,
          subject: `Package Inquiry: ${selectedPlan.name} ($${selectedPlan.price}${selectedPlan.unit})`,
          message: formData.notes || `Client is interested in the ${selectedPlan.name} model ($${selectedPlan.price}${selectedPlan.unit}).`,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setModalStatus("success");
    } catch (err: unknown) {
      setModalStatus("error");
      setModalError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brandPurple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center justify-center w-full"
        >
          <span className="text-brandPurple font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
            / Engagement Models
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-4">
            Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#38bdf8]">Pricing</span>
          </h2>
          <p className="text-foreground/60 text-sm max-w-xl mx-auto mt-4">
            Click on any model to select and inquire with custom specifications or dedicated support.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brandPurple to-brandBlue mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const IconComponent = plan.Icon;
            const isSelected = selectedPlanIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedPlanIndex(index)}
                className={`group relative bg-background rounded-3xl p-8 shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? `${plan.border} ring-2 ring-offset-2 ring-offset-background`
                    : "border-foreground/10 hover:border-foreground/20 hover:scale-[1.01]"
                }`}
                style={{
                  boxShadow: isSelected ? `0 20px 40px -15px ${plan.glowColor}` : undefined
                }}
              >
                {/* Popular Pill */}
                {plan.popular && !isSelected && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brandPurple to-brandBlue text-white text-[9px] font-bold px-4 py-1 rounded-full uppercase tracking-widest z-20 shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Selected Pill */}
                {isSelected && (
                  <div 
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[9px] font-bold px-4 py-1 rounded-full uppercase tracking-widest z-20 shadow-md flex items-center gap-1.5"
                    style={{ backgroundColor: plan.color }}
                  >
                    <Check size={12} strokeWidth={3} /> Selected Model
                  </div>
                )}

                <div className={`absolute inset-0 bg-gradient-to-b ${plan.gradient} ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity rounded-3xl pointer-events-none`} />

                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div 
                        className="p-4 bg-foreground/5 w-fit rounded-2xl border border-foreground/10 transition-colors"
                        style={{ color: plan.color }}
                      >
                        <IconComponent size={28} />
                      </div>
                      
                      {/* Radio Selection Indicator */}
                      <div 
                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                          isSelected 
                            ? "border-transparent text-white" 
                            : "border-foreground/20 group-hover:border-foreground/40"
                        }`}
                        style={{ backgroundColor: isSelected ? plan.color : "transparent" }}
                      >
                        {isSelected && <Check size={14} strokeWidth={3} />}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                    <p className="text-xs text-foreground/50 mb-6">{plan.subtitle}</p>
                    
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-4xl font-black text-foreground">
                        ${plan.price}
                      </span>
                      <span className="text-foreground/40 text-sm">
                        {plan.unit}
                      </span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-foreground/70 text-sm">
                          <Check size={16} style={{ color: plan.color }} className="shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button: Opens Modal */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(index);
                      }}
                      className={`w-full py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isSelected
                          ? "text-white shadow-lg"
                          : "bg-foreground/5 text-foreground border border-foreground/10 hover:bg-foreground/10"
                      }`}
                      style={{
                        backgroundColor: isSelected ? plan.color : undefined
                      }}
                    >
                      <span>{isSelected ? `Get Started with ${plan.name}` : `Select & Inquire`}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* POPUP MODAL FOR PRICING MODEL INQUIRY */}
      <AnimatePresence>
        {isModalOpen && (
          <div 
            data-lenis-prevent="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              data-lenis-prevent="true"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative w-full max-w-lg bg-background border border-foreground/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl z-10 my-auto overflow-y-auto max-h-[88vh]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 mb-5 pr-8">
                <div 
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  style={{ backgroundColor: `${selectedPlan.color}15`, color: selectedPlan.color }}
                >
                  <Sparkles size={12} /> Selected Model
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-foreground flex flex-wrap items-baseline gap-2">
                    {selectedPlan.name} 
                    <span className="text-base sm:text-lg font-bold" style={{ color: selectedPlan.color }}>
                      (${selectedPlan.price}{selectedPlan.unit})
                    </span>
                  </h3>
                  <p className="text-[11px] sm:text-xs text-foreground/50 mt-0.5">
                    Direct inquiry for this model. Quick turnaround guaranteed.
                  </p>
                </div>

                {/* Quick Model Tabs inside modal */}
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  {plans.map((p, i) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => setSelectedPlanIndex(i)}
                      className={`py-1.5 px-1.5 rounded-lg text-[10px] sm:text-xs font-bold border transition-all truncate text-center cursor-pointer ${
                        selectedPlanIndex === i
                          ? "border-brandBlue bg-brandBlue/10 text-brandBlue ring-1 ring-brandBlue"
                          : "border-foreground/10 text-foreground/60 hover:bg-foreground/5"
                      }`}
                    >
                      {p.name.split(" ")[0]} (${p.price})
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal Body: Success or Form */}
              {modalStatus === "success" ? (
                <div className="p-5 sm:p-6 rounded-2xl bg-brandGreen/10 border border-brandGreen/20 text-center space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brandGreen/20 text-brandGreen flex items-center justify-center mx-auto">
                    <CheckCircle2 size={30} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    Thank you! We received your request for the <strong className="text-foreground">{selectedPlan.name}</strong> model. We will get back to you within 24 hours.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                    <a
                      href={`https://wa.me/923132804232?text=${encodeURIComponent(
                        `Hi Zafar! I just submitted an inquiry for the ${selectedPlan.name} model ($${selectedPlan.price}${selectedPlan.unit}). Looking forward to discussing!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brandGreen text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-md shadow-brandGreen/20"
                    >
                      <MessageCircle size={16} /> Chat on WhatsApp Now
                    </a>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-foreground/10 text-foreground font-bold text-xs uppercase tracking-wider hover:bg-foreground/15 transition-all cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-3 sm:space-y-3.5">
                  {modalStatus === "error" && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs">
                      {modalError || "Submission failed. Please try again or WhatsApp us directly."}
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/60 mb-1">
                      Your Name <span className="text-brandBlue">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-background border border-foreground/10 rounded-xl px-3.5 py-2.5 sm:py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/60 mb-1">
                        Email Address <span className="text-brandBlue">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-background border border-foreground/10 rounded-xl px-3.5 py-2.5 sm:py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue text-xs sm:text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/60 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-background border border-foreground/10 rounded-xl px-3.5 py-2.5 sm:py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue text-xs sm:text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/60 mb-1">
                      Project Notes / Questions <span className="text-foreground/30 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief notes about your timeline, features, or requirements..."
                      value={formData.notes}
                      onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                      className="w-full bg-background border border-foreground/10 rounded-xl px-3.5 py-2.5 sm:py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue text-xs sm:text-sm resize-none transition-all"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="submit"
                      disabled={modalStatus === "loading"}
                      className="w-full sm:flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brandPurple to-brandBlue hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-lg shadow-brandPurple/10"
                    >
                      {modalStatus === "loading" ? (
                        <>
                          <Loader2 size={15} className="animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          Confirm & Inquire <Send size={14} />
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/923132804232?text=${encodeURIComponent(
                        `Hi Zafar! I am interested in the ${selectedPlan.name} package ($${selectedPlan.price}${selectedPlan.unit}). Let's discuss!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-foreground bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle size={15} className="text-brandGreen" /> WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}