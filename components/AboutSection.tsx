"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/components/LangContext";

function CountUp({ target, isInView }: { target: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const id = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(id);
  }, [isInView, target]);

  return <>{count}+</>;
}

const STATS = [
  { count: 11, en: "Years Experience", id: "Tahun Pengalaman" },
  { count: 50, en: "Projects Delivered", id: "Proyek Selesai" },
  { count: 4, en: "Companies", id: "Perusahaan" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <section
      id="about"
      className="relative z-[1] min-h-screen flex items-center justify-center px-6 py-12 md:py-24"
      style={{ background: "linear-gradient(180deg, transparent, rgba(99,102,241,0.03), transparent)" }}
      ref={ref}
    >
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {isEn ? "About Me" : "Tentang Saya"}
          </h2>

          {isEn ? (
            <>
              <p className="text-[#94a3b8] text-[1.05rem] leading-[1.8] mb-5">
                I am a seasoned Tech Lead and IT Business Analyst with over 11 years of experience
                leading cross-functional teams and delivering high-impact digital solutions in
                e-Commerce, Auditing, and ERP sectors. I specialize in full-stack development,
                system automation, and scalable architecture using Go, Node.js, and Python.
              </p>
              <p className="text-[#94a3b8] text-[1.05rem] leading-[1.8]">
                I have a proven track record in spearheading end-to-end development lifecycles,
                bridging business requirements with technical execution, and maintaining high
                standards of code quality and system integrity.
              </p>
            </>
          ) : (
            <>
              <p className="text-[#94a3b8] text-[1.05rem] leading-[1.8] mb-5">
                Saya adalah Tech Lead dan IT Business Analyst berpengalaman lebih dari 11 tahun dalam
                memimpin tim lintas fungsi serta menghadirkan solusi digital berskala besar di sektor
                e-Commerce, Audit, dan ERP. Spesialis dalam pengembangan full-stack, otomatisasi
                sistem, dan arsitektur skalabel menggunakan Go, Node.js, dan Python.
              </p>
              <p className="text-[#94a3b8] text-[1.05rem] leading-[1.8]">
                Memiliki rekam jejak sukses dalam memimpin siklus pengembangan end-to-end,
                menjembatani kebutuhan bisnis dengan eksekusi teknis, serta memastikan standar kode
                yang bersih dan integritas sistem yang tinggi.
              </p>
            </>
          )}

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.en}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5, borderColor: "rgba(99,102,241,0.3)" }}
                className="text-center px-4 py-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-[10px] transition-all duration-300"
              >
                <div
                  className="text-[2.2rem] font-bold gradient-text-primary"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  <CountUp target={stat.count} isInView={isInView} />
                </div>
                <div className="text-[0.8rem] text-[#94a3b8] mt-2 uppercase tracking-wider">
                  {isEn ? stat.en : stat.id}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
