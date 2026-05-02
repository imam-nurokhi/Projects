"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLang } from "@/components/LangContext";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});
type FormData = z.infer<typeof formSchema>;
type SubmitState = "idle" | "loading" | "success";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/imam-nurokhi",
    label: "GitHub",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/muhammad-imam-nurokhi",
    label: "LinkedIn",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "mailto:mimamnuro@gmail.com",
    label: "Email",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    href: "https://my-portfolio-snowy-nine-54.vercel.app/",
    label: "Portfolio",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
        <polyline points="13 2 13 9 20 9" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const { lang } = useLang();
  const isEn = lang === "en";

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (_data: FormData) => {
    setSubmitState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitState("success");
    reset();
    setTimeout(() => setSubmitState("idle"), 4000);
  };

  const inputClass =
    "w-full bg-white/[0.03] border border-white/[0.08] rounded-[14px] px-5 py-4 text-[#e2e8f0] placeholder-white/30 text-[0.95rem] outline-none transition-all duration-300 focus:border-[#6366f1] focus:bg-[rgba(99,102,241,0.05)] focus:shadow-[0_0_30px_rgba(99,102,241,0.1)]";

  return (
    <section
      id="contact"
      className="relative z-[1] min-h-screen flex items-center justify-center px-6 py-12 md:py-24"
      style={{ background: "linear-gradient(180deg, transparent, rgba(99,102,241,0.03), transparent)" }}
      ref={ref}
    >
      <div className="max-w-3xl w-full text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {isEn ? "Let's Build Together" : "Mari Bangun Bersama"}
          </h2>
          <p className="text-[#94a3b8] text-lg mb-12">
            {isEn
              ? "Have a project in mind? I'd love to hear about it."
              : "Punya proyek dalam pikiran? Saya ingin mendengarnya."}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          onSubmit={handleSubmit(onSubmit)}
          className="glass rounded-[32px] p-6 md:p-10 text-left space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                {isEn ? "Name" : "Nama"}
              </label>
              <input {...register("name")} className={inputClass} placeholder="John Doe" />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">Email</label>
              <input {...register("email")} type="email" className={inputClass} placeholder="john@example.com" />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#94a3b8] mb-2">
              {isEn ? "Subject" : "Subjek"}
            </label>
            <input {...register("subject")} className={inputClass} placeholder="Project Inquiry" />
            {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#94a3b8] mb-2">
              {isEn ? "Message" : "Pesan"}
            </label>
            <textarea
              {...register("message")}
              rows={5}
              className={`${inputClass} resize-vertical`}
              placeholder={isEn ? "Tell me about your project..." : "Ceritakan proyek Anda..."}
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
          </div>

          <motion.button
            type="submit"
            disabled={submitState !== "idle"}
            whileHover={submitState === "idle" ? { translateY: -2 } : {}}
            whileTap={submitState === "idle" ? { scale: 0.98 } : {}}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-[14px] text-base font-semibold text-white transition-all duration-300"
            style={
              submitState === "success"
                ? { background: "linear-gradient(135deg, #22c55e, #16a34a)" }
                : { background: "linear-gradient(135deg, #6366f1, #f472b6)", boxShadow: submitState === "idle" ? "0 0 0 0 rgba(99,102,241,0)" : undefined }
            }
          >
            <AnimatePresence mode="wait">
              {submitState === "idle" && (
                <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  {isEn ? "Send Message" : "Kirim Pesan"}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </motion.span>
              )}
              {submitState === "loading" && (
                <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {isEn ? "Sending..." : "Mengirim..."}
                </motion.span>
              )}
              {submitState === "success" && (
                <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {isEn ? "Message Sent!" : "Pesan Terkirim!"}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center gap-5 mt-10"
        >
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              title={s.label}
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-[#94a3b8] bg-white/[0.03] border border-white/[0.08] backdrop-blur-[10px] transition-all duration-300 hover:text-white hover:-translate-y-1.5"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #6366f1, #f472b6)";
                (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(99,102,241,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "";
                (e.currentTarget as HTMLElement).style.borderColor = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
