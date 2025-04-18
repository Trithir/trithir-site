"use client";

import { useEffect, useRef, useState } from "react";
import { Product } from "../types";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProductOverlayProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductOverlay({
  product,
  onClose,
}: ProductOverlayProps) {
  const [index, setIndex] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!product) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    dialogRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Tab") trapFocus(e);
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      previouslyFocused.current?.focus();
    };
  }, [product, index]);

  useEffect(() => {
    setIndex(0);
  }, [product]);

  const nextImage = () => {
    if (!product) return;
    setIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    if (!product) return;
    setIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const trapFocus = (e: KeyboardEvent) => {
    const focusableEls = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const elements = focusableEls ? Array.from(focusableEls) : [];
    if (elements.length === 0) return;

    const first = elements[0];
    const last = elements[elements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-overlay-title"
      >
        <div
          ref={dialogRef}
          tabIndex={-1}
          className="relative w-full max-w-3xl aspect-video flex items-center justify-center outline-none"
        >
          {/* Image */}
          <Image
            src={product.images[index]}
            alt={product.title}
            fill
            className="object-contain rounded-lg"
            priority
          />

          {/* Arrows */}
          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-white text-4xl font-bold bg-black/40 hover:bg-black/60"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-white text-4xl font-bold bg-black/40 hover:bg-black/60"
          >
            ›
          </button>

          {/* Counter */}
          <div
            id="product-overlay-title"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded"
          >
            {index + 1} / {product.images.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
