"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PathSelectorProps {
  onSelect: (path: "artifacts" | "projects") => void;
  selectedPath: "artifacts" | "projects" | null;
}

export default function PathSelector({
  onSelect,
  selectedPath,
}: PathSelectorProps) {
  const [showPuff, setShowPuff] = useState(false);

  const handleSelect = (path: "artifacts" | "projects") => {
    setShowPuff(true);
    setTimeout(() => {
      onSelect(path);
      setShowPuff(false);
      setTimeout(() => {
        document
          .getElementById(`${path}-section`)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }, 800);
  };

  return (
    <div className="relative min-h-[20vh] flex flex-col items-center justify-center py-2">
      {/* Buttons */}
      <div className="z-10 flex flex-col sm:flex-row gap-6">
        <button
          onClick={() => handleSelect("artifacts")}
          className={`px-6 py-3 text-lg rounded-full transition-all shadow-md
            ${
              selectedPath === "artifacts"
                ? "bg-purple-800 text-white ring-2 ring-purple-400"
                : "bg-purple-700 text-white hover:bg-purple-800"
            }`}
        >
          Artifacts for Sale
        </button>
        <button
          onClick={() => handleSelect("projects")}
          className={`px-6 py-3 text-lg rounded-full transition-all shadow-md
            ${
              selectedPath === "projects"
                ? "bg-orange-700 text-white ring-2 ring-orange-400"
                : "bg-orange-600 text-white hover:bg-orange-700"
            }`}
        >
          Enchanted Relics
        </button>
      </div>

      {/* Puff animation */}
      <AnimatePresence>
        {showPuff && (
          <motion.div
            key="puff"
            initial={{ opacity: 0, scale: 1, y: 150 }}
            animate={{ opacity: 1, scale: 3, y: -150 }}
            exit={{ opacity: 0, scale: 1.5, y: 100 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              opacity: { duration: 0.4 },
            }}
            className="fixed bottom-0 left-1/2 -translate-x-7/10 z-40 pointer-events-none w-full flex justify-center"
          >
            <Image
              src="/mistyfog.png"
              alt="Magic puff"
              width={1920}
              height={700}
              priority
              className="w-full max-w-screen"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
