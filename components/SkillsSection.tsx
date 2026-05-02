"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/components/LangContext";

const SKILLS = [
  {
    icon: "⚡",
    title: { en: "Backend Development", id: "Pengembangan Backend" },
    desc: {
      en: "Building robust, scalable server-side applications with modern frameworks and clean architecture.",
      id: "Membangun aplikasi server-side yang robust dan skalabel dengan framework modern dan arsitektur bersih.",
    },
    tags: ["Go (Gin/GORM)", "Node.js", "Python", "Java (Spring Boot)", "PHP (Laravel)"],
  },
  {
    icon: "🎨",
    title: { en: "Frontend Development", id: "Pengembangan Frontend" },
    desc: {
      en: "Creating responsive, performant, and accessible user interfaces with modern web technologies.",
      id: "Membuat antarmuka pengguna yang responsif, performan tinggi, dan aksesibel dengan teknologi web modern.",
    },
    tags: ["React", "Next.js", "TypeScript", "Ionic"],
  },
  {
    icon: "🗄️",
    title: { en: "Database & Infrastructure", id: "Database & Infrastruktur" },
    desc: {
      en: "Designing data architectures and deploying containerized infrastructure for enterprise scale.",
      id: "Merancang arsitektur data dan men-deploy infrastruktur terkontainer untuk skala enterprise.",
    },
    tags: ["PostgreSQL", "MySQL", "Elastic Search", "Docker", "Nginx", "Traefik"],
  },
  {
    icon: "🏢",
    title: { en: "ERP & Enterprise Systems", id: "ERP & Sistem Enterprise" },
    desc: {
      en: "Implementing and customizing enterprise resource planning solutions for business automation.",
      id: "Mengimplementasikan dan menyesuaikan solusi ERP untuk otomatisasi bisnis.",
    },
    tags: ["ERPNext", "Frappe Framework", "Odoo 18", "Prisma ORM"],
  },
  {
    icon: "🔍",
    title: { en: "Web Crawling & Automation", id: "Web Crawling & Otomatisasi" },
    desc: {
      en: "Building intelligent data extraction systems and automated workflows for business intelligence.",
      id: "Membangun sistem ekstraksi data cerdas dan alur kerja otomatis untuk intelijen bisnis.",
    },
    tags: ["Web Crawling", "REST API", "CI/CD", "SEO"],
  },
  {
    icon: "🚀",
    title: { en: "Leadership & Architecture", id: "Kepemimpinan & Arsitektur" },
    desc: {
      en: "Leading cross-functional teams and designing scalable system architectures.",
      id: "Memimpin tim lintas fungsi dan merancang arsitektur sistem yang skalabel.",
    },
    tags: ["Microservices", "Agile/Scrum", "System Design", "Network (Mikrotik)"],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <section
      id="skills"
      className="relative z-[1] min-h-screen flex items-center justify-center px-6 py-12 md:py-24"
      style={{ background: "linear-gradient(180deg, transparent, rgba(244,114,182,0.02), transparent)" }}
      ref={ref}
    >
      <div className="max-w-6xl w-full text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {isEn ? "Technical Skills" : "Keahlian Teknis"}
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            {isEn
              ? "A comprehensive toolkit for building next-generation digital experiences"
              : "Toolkit komprehensif untuk membangun pengalaman digital generasi berikutnya"}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.title.en}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -8, borderColor: "rgba(99,102,241,0.2)" }}
              className="relative group text-left rounded-3xl p-8 bg-white/[0.03] border border-white/[0.08] backdrop-blur-[10px] transition-all duration-300 overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "linear-gradient(90deg, #6366f1, #f472b6)" }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center text-xl mb-5"
                style={{ background: "linear-gradient(135deg, #6366f1, #f472b6)" }}
              >
                {skill.icon}
              </div>

              <h3
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {isEn ? skill.title.en : skill.title.id}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-[1.6] mb-5">
                {isEn ? skill.desc.en : skill.desc.id}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium text-[#818cf8]"
                    style={{
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
