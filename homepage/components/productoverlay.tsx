'use client'

import { useEffect, useRef, useState } from 'react'
import { Product } from '../types'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ProductOverlayProps {
  product: Product | null
  onClose: () => void
}

export default function ProductOverlay({ product, onClose }: ProductOverlayProps) {
  const [index, setIndex] = useState(0)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!product) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [product, index])

  useEffect(() => {
    setIndex(0)
  }, [product])

  const nextImage = () => {
    if (!product) return
    setIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    if (!product) return
    setIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose()
    }
  }

  if (!product) return null

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleOverlayClick}
      >
        <div className="relative w-full max-w-3xl aspect-video flex items-center justify-center">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-white text-4xl font-bold bg-black/40 hover:bg-black/60"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-white text-4xl font-bold bg-black/40 hover:bg-black/60"
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded">
            {index + 1} / {product.images.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
