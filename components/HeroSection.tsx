"use client";

import { motion } from "framer-motion";
import { useLang } from "@/components/LangContext";

function FloatingShape({
  size,
  color,
  style,
  delay,
}: {
  size: number;
  color: string;
  style: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none z-0"
      style={{
        width: size,
        height: size,
        background: color,
        filter: "blur(80px)",
        opacity: 0.12,
        ...style,
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
      }}
      transition={{
        duration: 8 + delay * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export default function HeroSection() {
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center z-[1]"
    >
      {/* Floating shapes */}
      <FloatingShape size={400} color="#6366f1" style={{ top: "10%", left: "-10%" }} delay={0} />
      <FloatingShape size={300} color="#f472b6" style={{ bottom: "20%", right: "-5%" }} delay={1} />
      <FloatingShape size={250} color="#fb923c" style={{ top: "50%", left: "50%" }} delay={2} />

      <div className="relative z-[2]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-[10px] text-[#94a3b8] text-sm"
        >
          <span
            className="w-2 h-2 rounded-full bg-green-400"
            style={{ animation: "pulse 2s infinite" }}
          />
          {isEn ? "Available for new opportunities" : "Tersedia untuk kesempatan baru"}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-[clamp(2.2rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-6"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Muhammad Imam
          <br />
          <span className="gradient-text">Nurokhi</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-[clamp(0.95rem,1.8vw,1.25rem)] text-[#94a3b8] max-w-[650px] mx-auto mb-8 leading-[1.7] font-light"
        >
          {isEn
            ? "Senior Software Developer, Full-Stack Engineer & Tech Lead with 11+ years of experience delivering high-impact digital solutions across e-Commerce, Auditing, and ERP sectors."
            : "Senior Software Developer, Full-Stack Engineer & Tech Lead dengan pengalaman lebih dari 11 tahun menghadirkan solusi digital berskala besar di sektor e-Commerce, Audit, dan ERP."}
        </motion.p>

        {/* Info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-10 text-[0.85rem] text-[#94a3b8]"
        >
          <span className="flex items-center gap-1">📍 South Jakarta, Indonesia</span>
          <span className="flex items-center gap-1">📞 +62 819-5331-9918</span>
          <span className="flex items-center gap-1">✉️ mimamnuro@gmail.com</span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #6366f1, #f472b6)",
              boxShadow: "0 10px 40px rgba(99,102,241,0.3)",
            }}
          >
            {isEn ? "View My Work" : "Lihat Proyek"}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#e2e8f0] bg-white/[0.03] border border-white/[0.08] backdrop-blur-[10px] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5"
          >
            {isEn ? "Get In Touch" : "Hubungi Saya"}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94a3b8] text-[0.8rem] uppercase tracking-widest"
        style={{ animation: "bounce 2s infinite" }}
      >
        <span>{isEn ? "Scroll" : "Gulir"}</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#818cf8] to-transparent" />
      </motion.div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes bounce {
          0%,20%,50%,80%,100%{transform:translateX(-50%) translateY(0)}
          40%{transform:translateX(-50%) translateY(-10px)}
          60%{transform:translateX(-50%) translateY(-5px)}
        }
      `}</style>
    </section>
  );
}
