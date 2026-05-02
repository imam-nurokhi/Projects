"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/components/LangContext";

export default function Loader() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const { lang } = useLang();

  useEffect(() => {
    setMounted(true);
    let prog = 0;
    const tick = () => {
      prog += Math.random() * 15;
      if (prog >= 100) {
        setProgress(100);
        setTimeout(() => setVisible(false), 500);
      } else {
        setProgress(prog);
        setTimeout(tick, 200);
      }
    };
    const id = setTimeout(tick, 200);
    return () => clearTimeout(id);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-8 bg-[#08080f]"
        >
          <p
            className="text-2xl font-semibold gradient-text-primary"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {lang === "en" ? "Loading Experience" : "Memuat Pengalaman"}
          </p>
          <div className="w-48 h-[3px] rounded-full overflow-hidden bg-white/10">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #6366f1, #f472b6)",
                width: `${progress}%`,
              }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
