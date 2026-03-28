"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Qasir POS Platform",
    subtitle: "Product Architecture & Full Stack",
    description:
      "Architected and led development of Indonesia's leading POS system serving 100K+ merchants. Designed microservices infrastructure with real-time sync capabilities.",
    tags: ["Architecture", "React", "Node.js", "PostgreSQL", "Docker"],
    color: "#00D4FF",
    size: "large",
    impact: "100K+ merchants served",
    details: {
      role: "IT Product Architect & Lead Developer",
      tech: ["React.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "RabbitMQ"],
      challenge:
        "Design a highly available POS system that works offline-first, syncs in real-time, and scales to 100K+ concurrent users.",
      solution:
        "Implemented microservices architecture with event-driven communication, offline-capable PWA frontend, and automated CI/CD pipelines.",
      outcome: "Reduced downtime by 99%, improved deployment frequency by 5x, onboarded 100K+ merchants.",
    },
  },
  {
    id: 2,
    title: "Odoo ERP Customization",
    subtitle: "ERP Implementation & Integration",
    description:
      "Custom Odoo ERP modules for manufacturing and distribution clients. Automated procurement, inventory, and accounting workflows.",
    tags: ["Odoo", "Python", "PostgreSQL", "XML-RPC"],
    color: "#FFD700",
    size: "medium",
    impact: "40% efficiency gain",
    details: {
      role: "Lead Odoo Developer",
      tech: ["Python", "Odoo 14/16", "PostgreSQL", "REST API", "QWeb"],
      challenge:
        "Manual business processes causing delays and data inconsistency across procurement, warehouse, and finance departments.",
      solution:
        "Developed custom Odoo modules automating approval workflows, integrated with external WMS, and built real-time reporting dashboards.",
      outcome: "40% reduction in manual data entry, 60% faster month-end closing, eliminated cross-department data silos.",
    },
  },
  {
    id: 3,
    title: "Enterprise QA Automation Framework",
    subtitle: "QA Strategy & Test Automation",
    description:
      "Built comprehensive automated testing framework for telecom enterprise software at PT. INTI, reducing critical production bugs by 75%.",
    tags: ["Selenium", "Cypress", "Python", "CI/CD", "Jest"],
    color: "#00D4FF",
    size: "medium",
    impact: "75% bug reduction",
    details: {
      role: "Lead QA Engineer",
      tech: ["Selenium", "Cypress", "Python", "Jest", "Jenkins", "GitLab CI"],
      challenge:
        "Manual testing was a bottleneck causing delayed releases and frequent production incidents for government-scale telecom projects.",
      solution:
        "Established automated testing pipelines with E2E, integration, and unit test coverage. Introduced BDD with Gherkin for business-readable test specs.",
      outcome: "75% reduction in critical bugs, 3x faster release cycle, 90% test coverage on core modules.",
    },
  },
  {
    id: 4,
    title: "Telkomsigma Web Platform",
    subtitle: "Full Stack Development",
    description:
      "Enterprise internal web platform for Telkomsigma with complex role-based access control, reporting dashboards, and third-party integrations.",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
    color: "#FFD700",
    size: "small",
    impact: "500+ internal users",
    details: {
      role: "Full Stack Developer",
      tech: ["React.js", "Node.js", "PostgreSQL", "Docker", "REST API"],
      challenge: "Legacy monolithic system causing performance bottlenecks and poor user experience for 500+ internal users.",
      solution:
        "Rebuilt with modern React frontend, Node.js APIs, optimized PostgreSQL queries, and containerized deployment.",
      outcome: "40% performance improvement, modern UX adoption increased productivity, zero deployment downtime.",
    },
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative max-w-2xl w-full glass rounded-3xl p-8 border border-white/10 overflow-y-auto max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <span
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
          >
            {project.subtitle}
          </span>
          <h3 className="text-2xl font-bold font-serif mt-3 mb-2">{project.title}</h3>
          <p className="text-white/60">{project.details.role}</p>
        </div>

        <div className="space-y-5">
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-2">Challenge</h4>
            <p className="text-white/70 text-sm leading-relaxed">{project.details.challenge}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-2">Solution</h4>
            <p className="text-white/70 text-sm leading-relaxed">{project.details.solution}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-2">Outcome</h4>
            <p className="text-white/70 text-sm leading-relaxed">{project.details.outcome}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.details.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-white/70 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00D4FF] text-sm font-medium tracking-widest uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Projects &{" "}
            <span className="gradient-text-gold italic">Case Studies</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            From ERP implementations to scalable SaaS platforms — real solutions, real impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setSelectedProject(project)}
              className={`glass rounded-2xl p-6 cursor-pointer border border-white/5 hover:border-[#00D4FF]/30 transition-all duration-300 group relative overflow-hidden ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at top right, ${project.color}08, transparent 60%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    {project.subtitle}
                  </span>
                  <span className="text-xs text-white/30 font-medium">{project.impact}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00D4FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md text-xs bg-white/5 text-white/40 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs text-white/30 group-hover:text-[#00D4FF] transition-colors">
                  <span>View Case Study</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
