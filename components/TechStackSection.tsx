"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const expertiseCards = [
  {
    title: "System Architecture",
    description: "Designing scalable, resilient distributed systems with microservices patterns and cloud-native solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    color: "#00D4FF",
  },
  {
    title: "Full Stack Development",
    description: "End-to-end web development with React, Next.js, Node.js — from pixel-perfect UI to robust API design.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    color: "#00D4FF",
  },
  {
    title: "Odoo ERP Development",
    description: "Custom Odoo module development, implementation, and integration for enterprise resource planning solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    color: "#FFD700",
  },
  {
    title: "QA & Testing",
    description: "Comprehensive quality assurance strategies, test automation, and leading QA teams to ensure product excellence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "#FFD700",
  },
];

const techItems = [
  { name: "JavaScript", years: "5+", emoji: "JS", color: "#F7DF1E" },
  { name: "TypeScript", years: "3+", emoji: "TS", color: "#3178C6" },
  { name: "React", years: "4+", emoji: "⚛", color: "#61DAFB" },
  { name: "Next.js", years: "3+", emoji: "▲", color: "#FFFFFF" },
  { name: "Node.js", years: "4+", emoji: "🟢", color: "#339933" },
  { name: "Python", years: "3+", emoji: "🐍", color: "#3776AB" },
  { name: "Odoo", years: "3+", emoji: "O", color: "#714B67" },
  { name: "PostgreSQL", years: "4+", emoji: "🐘", color: "#336791" },
  { name: "Docker", years: "2+", emoji: "🐳", color: "#2496ED" },
  { name: "AWS", years: "2+", emoji: "☁", color: "#FF9900" },
  { name: "Git", years: "5+", emoji: "⑂", color: "#F05032" },
  { name: "Redis", years: "2+", emoji: "R", color: "#DC382D" },
  { name: "Tailwind", years: "3+", emoji: "🌊", color: "#06B6D4" },
  { name: "REST API", years: "5+", emoji: "⟳", color: "#00D4FF" },
  { name: "GraphQL", years: "2+", emoji: "◈", color: "#E535AB" },
  { name: "Linux", years: "4+", emoji: "🐧", color: "#FCC624" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00D4FF] text-sm font-medium tracking-widest uppercase mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Architecture &{" "}
            <span className="gradient-text-gold italic">Technology</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A unified approach to system design and implementation — where clean architecture meets scalable code.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {expertiseCards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-6 cursor-default group transition-all duration-300 hover:border-[#00D4FF]/30"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${card.color}15`,
                  color: card.color,
                  border: `1px solid ${card.color}30`,
                }}
              >
                {card.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-white group-hover:text-[#00D4FF] transition-colors">
                {card.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold font-serif text-white/80">
            Technology{" "}
            <span className="gradient-text-blue italic">Arsenal</span>
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4"
        >
          {techItems.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.2, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="relative group glass rounded-xl p-3 flex flex-col items-center gap-2 cursor-default"
            >
              <span
                className="text-2xl font-bold"
                style={{ color: tech.color }}
              >
                {tech.emoji}
              </span>
              <span className="text-xs text-white/50 text-center leading-tight">
                {tech.name}
              </span>

              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#111827] border border-[#00D4FF]/30 rounded-lg px-3 py-1.5 text-xs text-[#00D4FF] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                {tech.years} years
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-[#111827] border-r border-b border-[#00D4FF]/30 rotate-45 -translate-y-1/2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
