"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/components/LangContext";

interface Project {
  initials: string;
  gradient: string;
  tags: string[];
  title: string;
  desc: { en: string; id: string };
  link?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    initials: "RE",
    gradient: "linear-gradient(135deg, #1e1b4b, #312e81)",
    tags: ["Next.js", "Node.js", "E-Commerce"],
    title: "BeliRoyalEnfield.com",
    desc: {
      en: "A premium motorcycle e-commerce and dealership platform for Royal Enfield in Indonesia. Features product catalog, dealer locator, financing simulation, and online booking system for test rides and purchases.",
      id: "Platform e-commerce dan dealer premium untuk Royal Enfield di Indonesia. Dilengkapi katalog produk, pencarian dealer, simulasi pembiayaan, dan sistem pemesanan online untuk test ride dan pembelian.",
    },
    link: "https://beliroyalenfield.com",
  },
  {
    initials: "PLN",
    gradient: "linear-gradient(135deg, #052e16, #14532d)",
    tags: ["React", "Spring Boot", "Enterprise"],
    title: "PLN Energi Gas",
    desc: {
      en: "Corporate website and business portal for PT PLN Energi Gas, a state-owned gas infrastructure company. Showcases business lines including pipeline distribution, LNG/CNG transportation, fuel retail, and petroleum refining services.",
      id: "Website korporat dan portal bisnis untuk PT PLN Energi Gas, perusahaan infrastruktur gas BUMN. Menampilkan lini bisnis termasuk distribusi pipa, transportasi LNG/CNG, retail bahan bakar, dan layanan pengolahan minyak bumi.",
    },
    link: "https://plnenergigas.co.id",
  },
  {
    initials: "NI",
    gradient: "linear-gradient(135deg, #1c1917, #292524)",
    tags: ["Web Development", "CMS", "Corporate"],
    title: "Netincom.id",
    desc: {
      en: "Integrated creative communication consultant platform for PT Net Integra Komunikasi. Specializes in corporate reporting (Annual Reports, Sustainability Reports, Company Profiles), creative design development, multimedia production, and IT development services. The platform serves major corporate clients across Indonesia with tailored communication solutions.",
      id: "Platform konsultan komunikasi kreatif terintegrasi untuk PT Net Integra Komunikasi. Spesialis dalam pelaporan korporat (Laporan Tahunan, Sustainability Report, Company Profile), pengembangan desain kreatif, produksi multimedia, dan layanan pengembangan IT. Platform ini melayani klien korporat besar di seluruh Indonesia dengan solusi komunikasi yang disesuaikan.",
    },
    link: "https://netincom.id",
    featured: true,
  },
  {
    initials: "CP",
    gradient: "linear-gradient(135deg, #0c4a6e, #075985)",
    tags: ["Market Intelligence", "E-Commerce", "Web Crawling"],
    title: "Compas.co.id",
    desc: {
      en: "A market insight platform for automated price tracking and e-commerce intelligence. Built to handle high-traffic loads with optimized SEO visibility. Provides real-time competitive pricing data and market trend analysis for online retailers.",
      id: "Platform intelijen pasar untuk pelacakan harga otomatis dan analisis data e-commerce. Dibangun untuk menangani trafik tinggi dengan visibilitas SEO yang dioptimalkan. Menyediakan data harga kompetitif real-time dan analisis tren pasar untuk retailer online.",
    },
    link: "https://compas.co.id",
  },
  {
    initials: "AQ",
    gradient: "linear-gradient(135deg, #1e1b4b, #2e1065)",
    tags: ["ERPNext", "Frappe", "Audit"],
    title: "Audit-Q",
    desc: {
      en: "A centralized audit management system for ISO, ISCC, LVV, and LATIK certifications. Features personnel competency tracking, audit cycle monitoring, and automated QR-validated certificate issuance.",
      id: "Sistem manajemen audit terpusat untuk sertifikasi ISO, ISCC, LVV, dan LATIK. Fitur mencakup pelacakan kompetensi personel, monitoring siklus audit, dan otomatisasi penerbitan sertifikat tervalidasi QR Code.",
    },
  },
  {
    initials: "NE",
    gradient: "linear-gradient(135deg, #14532d, #166534)",
    tags: ["ERPNext v16", "Frappe HRMS", "ERP"],
    title: "NexERP",
    desc: {
      en: "An enterprise ERP platform built on ERPNext v16, featuring Frappe HRMS v16.5 for comprehensive HR and Payroll automation. Streamlines business processes across departments.",
      id: "Platform ERP perusahaan berbasis ERPNext v16, mengintegrasikan modul Frappe HRMS v16.5 untuk otomatisasi SDM dan penggajian yang komprehensif. Merampingkan proses bisnis lintas departemen.",
    },
  },
  {
    initials: "OA",
    gradient: "linear-gradient(135deg, #1e3a5f, #1e40af)",
    tags: ["React", "Spring Boot", "Data"],
    title: "OneAlpha & OneDataHub",
    desc: {
      en: "A personnel data ecosystem built with React and Spring Boot for real-time qualification reconciliation and staff management across enterprise operations.",
      id: "Ekosistem pusat data personel yang dibangun dengan React dan Spring Boot untuk rekonsiliasi kualifikasi real-time dan manajemen staf lintas operasional enterprise.",
    },
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <section
      id="projects"
      className="relative z-[1] min-h-screen flex items-center justify-center px-6 py-12 md:py-24"
      style={{ background: "linear-gradient(180deg, transparent, rgba(251,146,60,0.02), transparent)" }}
      ref={ref}
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {isEn ? "Featured Projects" : "Proyek Unggulan"}
          </h2>
          <p className="text-[#94a3b8] text-lg">
            {isEn
              ? "A selection of recent work that showcases my expertise"
              : "Pilihan karya terbaru yang menampilkan keahlian saya"}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.01 }}
              className={`flex flex-col rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.08] backdrop-blur-[10px] transition-all duration-300 hover:border-[rgba(99,102,241,0.3)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)] ${
                project.featured ? "lg:col-span-2 lg:flex-row" : ""
              }`}
            >
              {/* Image placeholder */}
              <div
                className={`relative flex items-center justify-center overflow-hidden ${
                  project.featured ? "lg:w-[45%] min-h-[220px]" : "h-[180px] sm:h-[200px]"
                }`}
                style={{ background: project.gradient }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(8,8,15,0.9), transparent)",
                  }}
                />
                <span
                  className="relative z-10 text-white/10 font-bold"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "clamp(2rem,5vw,3rem)",
                  }}
                >
                  {project.initials}
                </span>
              </div>

              {/* Info */}
              <div
                className={`flex flex-col justify-center p-7 ${project.featured ? "lg:w-[55%]" : ""}`}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
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

                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-[1.6] mb-5">
                  {isEn ? project.desc.en : project.desc.id}
                </p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#818cf8] font-semibold text-sm hover:gap-4 transition-all duration-300"
                  >
                    {isEn ? "Visit Website" : "Kunjungi Website"}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-[#94a3b8] text-sm">
                    {isEn ? "Internal Project" : "Proyek Internal"}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
