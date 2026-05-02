"use client";

import { motion } from "framer-motion";
import { useLang } from "@/components/LangContext";

export default function Footer() {
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <footer className="relative z-[1] text-center px-6 py-10 border-t border-white/[0.08] text-[#94a3b8] text-sm">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {isEn ? (
          <>
            Designed & Built with{" "}
            <span className="gradient-text-primary font-semibold">passion</span>{" "}
            by Muhammad Imam Nurokhi &copy; 2026
          </>
        ) : (
          <>
            Dirancang & Dibangun dengan{" "}
            <span className="gradient-text-primary font-semibold">passion</span>{" "}
            oleh Muhammad Imam Nurokhi &copy; 2026
          </>
        )}
      </motion.p>
    </footer>
  );
}
