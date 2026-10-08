"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  Globe, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MessageCircle,
  ArrowRight,
  RotateCcw,
  Sparkles
} from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to send message. Please try again.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <main className="bg-background transition-colors duration-300">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brandBlue/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <span className="text-brandBlue font-bold tracking-[0.3em] uppercase text-xs">
              / Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
              Let us create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandBlue to-brandGreen">exceptional</span> together.
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Have a question, an idea, or just want to discuss your project? Drop us a message and our team will get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
              <p className="text-foreground/60 leading-relaxed">
                Whether you have an inquiry, need technical guidance, or want to explore collaboration opportunities, we are always open to conversation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <a href="mailto:zafarsolutions.pk@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center border border-foreground/10 group-hover:bg-brandBlue group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="font-bold text-foreground hover:text-brandBlue transition-colors">zafarsolutions.pk@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+923132804232" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center border border-foreground/10 group-hover:bg-brandGreen group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="font-bold text-foreground hover:text-brandGreen transition-colors">+92 313 2804232</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Map Placeholder / Container */}
            <div className="space-y-4">
               <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                 <MapPin size={20} className="text-brandBlue" /> Our Location
               </h3>
               <div className="w-full h-[320px] sm:h-[350px] rounded-3xl overflow-hidden border border-foreground/10 bg-foreground/5 relative group">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d66.87538354676115!3d25.017189920556206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }} 
                    allowFullScreen 
                    loading="lazy"
                    className="dark:opacity-80 transition-opacity"
                    title="office location"
                  ></iframe>
                  <div className="absolute inset-0 pointer-events-none border border-foreground/5 group-hover:border-brandBlue/20 transition-all rounded-3xl" />
               </div>
               <p className="text-foreground/50 text-sm italic">Karachi, Sindh, Pakistan</p>
            </div>
          </motion.div>

          {/* Right Side: Form / Success Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-5 sm:p-8 md:p-10 rounded-[28px] sm:rounded-[36px] bg-foreground/[0.03] border border-foreground/10 shadow-2xl relative overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-brandBlue/10 blur-[70px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-brandGreen/10 blur-[70px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* PREMIUM SUCCESS STATE */
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.96, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="py-4 space-y-6 text-center"
                  >
                    {/* Glowing Checkmark */}
                    <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brandGreen/30 to-brandBlue/30 blur-xl animate-pulse" />
                      <div className="relative w-16 h-16 rounded-full bg-brandGreen/15 border border-brandGreen/40 flex items-center justify-center text-brandGreen shadow-lg shadow-brandGreen/10">
                        <CheckCircle2 size={34} strokeWidth={2.4} />
                      </div>
                    </div>

                    {/* Headline & Description */}
                    <div className="space-y-2.5 max-w-sm mx-auto">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brandGreen px-3 py-1 rounded-full bg-brandGreen/10 border border-brandGreen/25 inline-flex items-center gap-1.5">
                        <Sparkles size={11} /> Message Sent Successfully
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                        Thank You, {formData.firstName || "There"}!
                      </h3>
                      <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                        We have received your message and sent a notification to our team. We will get back to you at{" "}
                        <span className="font-semibold text-foreground underline decoration-brandBlue/40 underline-offset-2">
                          {formData.email}
                        </span>{" "}
                        within 24 hours.
                      </p>
                    </div>

                    {/* WhatsApp Quick Connect Banner */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-foreground/[0.03] border border-foreground/10 text-left max-w-md mx-auto space-y-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/20">
                          <MessageCircle size={22} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-foreground">Want an instant response?</h4>
                          <p className="text-foreground/50 text-[11px] truncate">
                            Chat directly with Zafar on WhatsApp
                          </p>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/923132804232?text=${encodeURIComponent(
                          `Hi Zafar! I just sent an inquiry on your portfolio website (Email: ${formData.email}). Looking forward to connecting!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/25 cursor-pointer active:scale-[0.99]"
                      >
                        <MessageCircle size={16} /> Chat on WhatsApp Now
                        <ArrowRight size={14} />
                      </a>
                    </div>

                    {/* Send Another Message Option */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="text-xs text-foreground/50 hover:text-foreground font-semibold inline-flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-foreground/5 transition-all cursor-pointer"
                      >
                        <RotateCcw size={13} /> Send another message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* NORMAL FORM VIEW */
                  <div>
                    <div className="space-y-2 mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">Send a Message</h3>
                      <p className="text-foreground/50 text-xs sm:text-sm">
                        Fill in your details below and we will get back to you within 24 hours.
                      </p>
                    </div>

                    <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                      {/* Error Alert */}
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs flex items-center gap-3"
                        >
                          <AlertCircle size={16} className="shrink-0" />
                          <span>{errorMessage || "Failed to submit message. Please try again."}</span>
                        </motion.div>
                      )}

                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/60 mb-1.5">
                            First Name <span className="text-brandBlue">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. John"
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData((prev) => ({ ...prev, firstName: e.target.value }))
                            }
                            className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue transition-all text-xs sm:text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/60 mb-1.5">
                            Last Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Doe"
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData((prev) => ({ ...prev, lastName: e.target.value }))
                            }
                            className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue transition-all text-xs sm:text-sm"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/60 mb-1.5">
                            Email Address <span className="text-brandBlue">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData((prev) => ({ ...prev, email: e.target.value }))
                            }
                            className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue transition-all text-xs sm:text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/60 mb-1.5">
                            Phone Number <span className="text-foreground/30 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="tel"
                            placeholder="+92 300 1234567"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData((prev) => ({ ...prev, phone: e.target.value }))
                            }
                            className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue transition-all text-xs sm:text-sm"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/60 mb-1.5">
                          Subject / Topic <span className="text-foreground/30 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Project inquiry, Consulting, Partnership..."
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, subject: e.target.value }))
                          }
                          className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue transition-all text-xs sm:text-sm"
                        />
                      </div>

                      {/* Message Area */}
                      <div>
                        <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground/60 mb-1.5">
                          Your Message <span className="text-brandBlue">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell us about your project, goals, or questions..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, message: e.target.value }))
                          }
                          className="w-full bg-background border border-foreground/10 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brandBlue transition-all text-xs sm:text-sm resize-none"
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <Magnetic>
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="premium-button w-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          <span className="premium-button-content">
                            {status === "loading" ? (
                              <>
                                <Loader2 size={16} className="animate-spin" /> Sending Message...
                              </>
                            ) : (
                              <>
                                Send Message <Send size={16} />
                              </>
                            )}
                          </span>
                        </button>
                      </Magnetic>

                      <div className="flex items-center justify-center gap-2 text-foreground/40 text-[10px] sm:text-[11px]">
                        <Clock size={12} /> We respect your privacy and respond within 24 hours.
                      </div>
                    </form>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Extra Section 1: Support Channels */}
      <section className="py-16 md:py-20 bg-foreground/[0.02] border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">More Ways to Connect</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: "Technical Support", icon: MessageSquare, desc: "Need help with a project?", link: "zafarsolutions.pk@gmail.com" },
                { title: "Business Hours", icon: Clock, desc: "Mon - Sat: 9AM - 8PM", link: "Karachi, Pakistan" },
                { title: "Global Presence", icon: Globe, desc: "Work with us from anywhere.", link: "Remote / Worldwide" }
              ].map((item, i) => (
                <div key={i} className="p-6 sm:p-8 rounded-3xl bg-background border border-foreground/5 text-center space-y-4 hover:shadow-2xl transition-all group">
                   <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-foreground/5 flex items-center justify-center mx-auto text-foreground group-hover:bg-brandBlue group-hover:text-white transition-all">
                      <item.icon size={26} />
                   </div>
                   <h4 className="font-bold text-base sm:text-lg text-foreground">{item.title}</h4>
                   <p className="text-foreground/50 text-xs sm:text-sm">{item.desc}</p>
                   <p className="text-brandBlue font-medium text-xs sm:text-sm">{item.link}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Extra Section 2: FAQ Brief */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
           <div className="text-center mb-12 sm:mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-black text-foreground">Frequently Asked Questions</h2>
              <p className="text-foreground/50 text-xs sm:text-sm">Everything you need to know about our process.</p>
           </div>

           <div className="space-y-4 sm:space-y-6">
              {[
                { q: "How long does a typical project take?", a: "Most projects range from 4 to 12 weeks depending on complexity." },
                { q: "Do you provide post-launch support?", a: "Yes, we offer monthly maintenance and scaling support for all our clients." },
                { q: "What technologies do you specialize in?", a: "We excel in Laravel, MERN Stack, Next.js, and Mobile App Development." }
              ].map((faq, i) => (
                <div key={i} className="p-5 sm:p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-colors">
                   <h5 className="font-bold text-foreground mb-2 text-sm sm:text-base">/ {faq.q}</h5>
                   <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}
