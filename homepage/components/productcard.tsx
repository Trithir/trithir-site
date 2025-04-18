"use client";

import { useState } from "react";
import { Product } from "../types";

interface Props {
  product: Product;
  onClick?: () => void;
}

export default function ProductCard({ product }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const openOverlay = () => {
    setExpanded(true);
    setImageIndex(0);
  };

  const closeOverlay = () => setExpanded(false);

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <>
      <div
        className={`bg-white/5 border border-white/[.1] rounded-xl p-4 shadow-md hover:shadow-lg transition cursor-pointer`}
        onClick={openOverlay}
      >
        <div
          className="aspect-square bg-black/20 rounded mb-2"
          style={{
            backgroundImage: `url(${product.images[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
        <p
          className="text-sm text-white/70 mb-2 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // prevent modal from opening
            setShowFullDescription(!showFullDescription);
          }}
        >
          {showFullDescription
            ? product.description
            : `${product.description.slice(0, 100)}...`}
        </p>
        <p className="font-semibold text-white mb-2">{product.price}</p>
        {product.link && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(product.link, "_blank");
            }}
            className="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded"
          >
            Buy on Goimagine
          </button>
        )}
      </div>

      {expanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeOverlay}
        >
          <div
            className="relative max-w-screen-md w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white mb-4 text-center">{product.description}</p>

            {/* Image Display */}
            <img
              src={product.images[imageIndex]}
              alt={`${product.title} image`}
              className="w-full h-auto rounded-lg"
            />

            {/* Navigation Arrows */}
            <button
              onClick={showPrevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 px-6 py-3 text-3xl text-white"
            >
              ‹
            </button>
            <button
              onClick={showNextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 px-6 py-3 text-3xl text-white"
            >
              ›
            </button>

            {/* Image Counter */}
            <div className="absolute top--5 left-1/2 transform -translate-x-1/2 text-white font-semibold text-xl">
              {imageIndex + 1} / {product.images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
