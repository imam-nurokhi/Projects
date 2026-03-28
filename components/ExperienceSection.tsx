"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    period: "2022 – Present",
    role: "IT Product Architect",
    company: "Qasir.id",
    type: "Full-time",
    location: "Jakarta, Indonesia",
    color: "#00D4FF",
    highlights: [
      "Architected scalable microservices infrastructure serving 100K+ merchants",
      "Led cross-functional product teams (Engineering, Design, QA) of 15+ members",
      "Defined technical roadmap and system integration strategies for POS ecosystem",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Designed RESTful APIs and event-driven architecture patterns",
    ],
  },
  {
    period: "2020 – 2022",
    role: "Lead QA Engineer",
    company: "PT. INTI (Industri Telekomunikasi Indonesia)",
    type: "Full-time",
    location: "Bandung, Indonesia",
    color: "#FFD700",
    highlights: [
      "Led QA team of 8 engineers for enterprise telecom software projects",
      "Established automated testing frameworks (Selenium, Cypress, JUnit)",
      "Reduced critical bugs in production by 75% through systematic QA processes",
      "Collaborated with development teams on TDD and BDD methodologies",
      "Managed test planning and quality standards for government-scale projects",
    ],
  },
  {
    period: "2019 – 2020",
    role: "Full Stack Developer",
    company: "PT. Sigma Cipta Caraka (Telkomsigma)",
    type: "Full-time",
    location: "South Tangerang, Indonesia",
    color: "#00D4FF",
    highlights: [
      "Developed enterprise web applications using React.js and Node.js",
      "Integrated third-party APIs and payment gateway systems",
      "Optimized database queries improving performance by 40%",
      "Contributed to Odoo ERP customization and module development",
    ],
  },
  {
    period: "2018 – 2019",
    role: "Odoo Developer",
    company: "PT. Solusi Dinamika Informatika",
    type: "Full-time",
    location: "Jakarta, Indonesia",
    color: "#FFD700",
    highlights: [
      "Customized Odoo ERP modules for manufacturing and distribution clients",
      "Developed Python-based business logic and automation workflows",
      "Integrated Odoo with external systems via XML-RPC and REST APIs",
      "Trained end-users and provided technical documentation",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      <div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FFD700] text-sm font-medium tracking-widest uppercase mb-4 block">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Experience &{" "}
            <span className="gradient-text-blue italic">Timeline</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A track record of leading teams, architecting systems, and delivering scalable solutions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-[#00D4FF] via-[#FFD700] to-[#00D4FF] -translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            style={{ height: "100%" }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                variants={cardVariants}
                className={`relative flex gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start`}
              >
                <div
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 top-6"
                  style={{
                    background: exp.color,
                    borderColor: exp.color,
                    boxShadow: `0 0 12px ${exp.color}80`,
                  }}
                />

                <div className="hidden md:block flex-1" />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 ml-16 md:ml-0 glass rounded-2xl p-6 border border-white/5 hover:border-[#00D4FF]/20 transition-all duration-300"
                >
                  <div className="flex flex-wrap gap-3 items-start justify-between mb-4">
                    <div>
                      <h3
                        className="text-xl font-bold"
                        style={{ color: exp.color }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-white/80 font-medium">{exp.company}</p>
                      <p className="text-white/40 text-sm mt-1">
                        {exp.location} · {exp.type}
                      </p>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium shrink-0"
                      style={{
                        background: `${exp.color}15`,
                        color: exp.color,
                        border: `1px solid ${exp.color}30`,
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
