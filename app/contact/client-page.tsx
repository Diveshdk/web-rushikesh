"use client";

import { motion } from "motion/react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { useState } from "react";

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="h-[1px] w-8 md:w-16 bg-brand-border" />
      <span className="text-brand-green text-[10px] uppercase tracking-[0.3em] font-bold">
        {text}
      </span>
      <div className="h-[1px] flex-1 bg-brand-border/30" />
    </div>
  );
}

export default function ClientContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-24 relative bg-brand-background">
      {/* Background pattern */}
      <GridPattern
        squares={[
          [4, 4], [5, 1], [8, 2], [5, 3], [5, 5],
          [10, 10], [12, 15], [15, 10], [10, 15],
          [15, 10], [10, 15], [15, 10],
        ]}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white_80%,transparent)]",
          "fixed inset-0 z-0 w-screen h-screen opacity-50 pointer-events-none"
        )}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="flex justify-center items-center gap-4 mb-4 md:mb-6">
              <div className="h-[1px] w-8 md:w-16 bg-brand-border" />
              <span className="text-brand-green text-[10px] uppercase tracking-[0.3em] font-bold">
                Get In Touch
              </span>
              <div className="h-[1px] w-8 md:w-16 bg-brand-border" />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-[90px] font-display font-medium tracking-tighter leading-[0.9] mb-6">
              LET'S <br className="md:hidden" />
              <span className="text-brand-green italic serif uppercase"> CONNECT</span>
            </h1>

            <p className="text-xs md:text-sm font-light text-brand-text/50 leading-relaxed max-w-2xl mb-10">
              Whether you have a new project in mind, an inquiry about our services, or just want to say hello, we'd love to hear from you.
            </p>

            {/* Decorative divider */}
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-brand-green" />
              <div className="h-[1px] w-24 bg-brand-border" />
              <div className="w-1 h-1 rounded-full bg-brand-green/40" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div>
              <SectionLabel text="Contact Info" />
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tighter leading-[1.05] mb-8">
                Reach out to our <span className="text-brand-green italic">studio</span>.
              </h2>
            </div>

            <div className="space-y-8">
              <div className="group flex gap-6 items-start border-b border-brand-border/30 pb-6 hover:border-brand-green/30 transition-colors duration-500">
                <span className="text-brand-green/30 font-display text-2xl font-medium tracking-tighter group-hover:text-brand-green/60 transition-colors duration-500 flex-shrink-0 pt-0.5">
                  01
                </span>
                <div>
                  <h3 className="text-brand-text font-display font-medium tracking-tight text-lg mb-1 group-hover:text-brand-green transition-colors duration-500">
                    Location
                  </h3>
                  <p className="text-brand-text/50 text-sm leading-relaxed font-light mb-4">
                    Rushikesh Sutar & Associates<br />
                    Oracle Business Park, Thane West<br />
                    Mumbai, Maharashtra
                  </p>
                  <a
                    href="#"
                    className="text-brand-green text-[10px] uppercase tracking-[0.2em] font-bold hover:text-brand-text transition-colors duration-300 flex items-center gap-2"
                  >
                    View on Maps <span>→</span>
                  </a>
                </div>
              </div>

              <div className="group flex gap-6 items-start border-b border-brand-border/30 pb-6 hover:border-brand-green/30 transition-colors duration-500">
                <span className="text-brand-green/30 font-display text-2xl font-medium tracking-tighter group-hover:text-brand-green/60 transition-colors duration-500 flex-shrink-0 pt-0.5">
                  02
                </span>
                <div>
                  <h3 className="text-brand-text font-display font-medium tracking-tight text-lg mb-1 group-hover:text-brand-green transition-colors duration-500">
                    Email
                  </h3>
                  <a href="mailto:info@rushikeshsutar.com" className="text-brand-text/50 text-sm leading-relaxed font-light hover:text-brand-green transition-colors duration-300">
                    info@rushikeshsutar.com
                  </a>
                </div>
              </div>

              <div className="group flex gap-6 items-start border-b border-brand-border/30 pb-6 hover:border-brand-green/30 transition-colors duration-500">
                <span className="text-brand-green/30 font-display text-2xl font-medium tracking-tighter group-hover:text-brand-green/60 transition-colors duration-500 flex-shrink-0 pt-0.5">
                  03
                </span>
                <div>
                  <h3 className="text-brand-text font-display font-medium tracking-tight text-lg mb-1 group-hover:text-brand-green transition-colors duration-500">
                    Phone
                  </h3>
                  <a href="tel:+919876543210" className="text-brand-text/50 text-sm leading-relaxed font-light hover:text-brand-green transition-colors duration-300">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-brand-border/5 border border-brand-border/30 p-8 md:p-12 rounded-3xl"
          >
            <SectionLabel text="Send a Message" />
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full border-2 border-brand-green flex items-center justify-center mb-6">
                  <span className="text-brand-green text-2xl">✓</span>
                </div>
                <h3 className="text-2xl font-display font-medium mb-4">Message Sent</h3>
                <p className="text-brand-text/50 text-sm font-light mb-8">
                  Thank you for reaching out. We will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-brand-green text-[10px] uppercase tracking-[0.2em] font-bold hover:text-brand-text transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-brand-text/50 font-bold">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-brand-border/50 pb-3 text-sm focus:outline-none focus:border-brand-green transition-colors duration-300 placeholder:text-brand-text/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-brand-text/50 font-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-brand-border/50 pb-3 text-sm focus:outline-none focus:border-brand-green transition-colors duration-300 placeholder:text-brand-text/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] text-brand-text/50 font-bold">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-brand-border/50 pb-3 text-sm focus:outline-none focus:border-brand-green transition-colors duration-300 placeholder:text-brand-text/20"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.2em] text-brand-text/50 font-bold">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-brand-border/50 pb-3 text-sm focus:outline-none focus:border-brand-green transition-colors duration-300 placeholder:text-brand-text/20"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-brand-text/50 font-bold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-brand-border/50 pb-3 text-sm focus:outline-none focus:border-brand-green transition-colors duration-300 placeholder:text-brand-text/20 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full inline-flex justify-center items-center gap-3 border border-brand-green text-brand-green text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full transition-all duration-500 group mt-4",
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-brand-green hover:text-brand-background"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && (
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
