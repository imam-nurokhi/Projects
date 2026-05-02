"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/components/LangContext";

const EXPERIENCES = [
  {
    date: "Dec 2025 – Present",
    role: { en: "Tech Lead", id: "Tech Lead" },
    company: "Nexora (Part of CBQA Global Group) — Jakarta",
    highlights: {
      en: [
        "Spearhead end-to-end development of internal and external enterprise platforms",
        "Direct technical strategy and mentor engineering teams",
        "Ensure system integrity, security, and product scalability",
        "Lead key projects: Audit-Q, NexERP, OneAlpha & OneDataHub, Odoo ERP",
      ],
      id: [
        "Memimpin pengembangan end-to-end platform enterprise internal dan eksternal",
        "Mengarahkan strategi teknis dan membimbing tim engineer",
        "Memastikan integritas sistem, keamanan data, dan skalabilitas produk",
        "Memimpin proyek kunci: Audit-Q, NexERP, OneAlpha & OneDataHub, Odoo ERP",
      ],
    },
  },
  {
    date: "Feb 2024 – Nov 2025",
    role: { en: "Senior IT Programmer", id: "Senior IT Programmer" },
    company: "CBQA Global — Jakarta",
    highlights: {
      en: [
        "Led debugging and feature development for mission-critical internal applications",
        "Engineered robust Spring Boot and PostgreSQL backends",
        "Integrated complex third-party APIs",
        "Delivered strategic progress reports to key stakeholders",
      ],
      id: [
        "Mengelola perbaikan sistem dan pengembangan fitur krusial aplikasi internal",
        "Mengembangkan arsitektur backend menggunakan Spring Boot dan PostgreSQL",
        "Mengintegrasikan API pihak ketiga yang kompleks",
        "Menyusun laporan progres strategis bagi para pemangku kepentingan",
      ],
    },
  },
  {
    date: "Nov 2022 – Feb 2024",
    role: { en: "Full-Stack Engineer", id: "Full-Stack Engineer" },
    company: "Privat Talenta Indonesia — Jakarta",
    highlights: {
      en: [
        "Architected and deployed core website systems and CMS from the ground up",
        "Developed hybrid mobile applications for Android and iOS using Ionic and TypeScript",
        "Enhanced platform reach and user engagement",
      ],
      id: [
        "Merancang dan mengimplementasikan sistem CMS dan situs web inti dari awal",
        "Membangun aplikasi mobile hybrid Android & iOS menggunakan Ionic dan TypeScript",
        "Meningkatkan jangkauan platform dan keterlibatan pengguna",
      ],
    },
  },
  {
    date: "Dec 2015 – Feb 2021",
    role: { en: "Product Dev Team Lead & Engineer", id: "Product Dev Team Lead & Engineer" },
    company: "Telunjuk.com — Indonesia",
    highlights: {
      en: [
        "Headed the “Compas” project — a market insight platform for automated price tracking",
        "Optimized performance for high-traffic load",
        "Improved SEO visibility for the core CMS platform",
        "Delivered e-commerce intelligence solutions",
      ],
      id: [
        "Memimpin proyek “Compas” — platform intelijen pasar untuk pelacakan harga otomatis",
        "Mengoptimalkan performa untuk trafik tinggi",
        "Meningkatkan visibilitas SEO untuk platform CMS inti",
        "Menghadirkan solusi intelijen e-commerce",
      ],
    },
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <section
      id="experience"
      className="relative z-[1] min-h-screen flex items-center justify-center px-6 py-24"
      style={{ background: "linear-gradient(180deg, transparent, rgba(244,114,182,0.02), transparent)" }}
      ref={ref}
    >
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {isEn ? "Work Experience" : "Pengalaman Kerja"}
          </h2>
          <p className="text-[#94a3b8] text-lg">
            {isEn
              ? "A journey through my professional career building enterprise solutions"
              : "Perjalanan karir profesional saya membangun solusi enterprise"}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(to bottom, #6366f1, #f472b6, transparent)" }}
          />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.date}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Dot */}
              <div
                className="absolute -left-[5px] top-2 w-3 h-3 rounded-full"
                style={{ background: "#6366f1", boxShadow: "0 0 20px rgba(99,102,241,0.5)" }}
              />

              <div className="text-[0.85rem] font-semibold text-[#f472b6] uppercase tracking-wider mb-1">
                {exp.date}
              </div>
              <h3
                className="text-[1.4rem] font-semibold mb-1"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {isEn ? exp.role.en : exp.role.id}
              </h3>
              <div className="text-[#818cf8] font-medium mb-4">{exp.company}</div>
              <ul className="space-y-2">
                {(isEn ? exp.highlights.en : exp.highlights.id).map((item) => (
                  <li
                    key={item}
                    className="relative pl-5 text-[#94a3b8] text-[0.95rem] leading-[1.7]"
                  >
                    <span className="absolute left-0 text-[#818cf8]">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
