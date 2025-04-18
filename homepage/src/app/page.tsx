"use client";

import { useState } from "react";
import Image from "next/image";
import PathSelector from "../../components/pathselector";
import { useForm, ValidationError } from "@formspree/react";
import { products } from "../../lib/products";
import { Product } from "../../types";
import ProductCard from "../../components/productcard";
import ProductOverlay from "../../components/productoverlay";

export default function Home() {
  const [path, setPath] = useState<"artifacts" | "projects" | null>(null);
  const [state, handleSubmit] = useForm("xeoanqvy");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = products.filter((product) =>
    path === "artifacts"
      ? product.status === "for-sale"
      : product.status === "sold"
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans scroll-smooth">
      {/* Sticky Nav */}
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur border-b border-white/[.1] px-6 py-4 flex justify-between items-center"
      >
        <span className="text-lg font-bold text-orange-400">Trithir</span>
        <ul className="flex gap-6 text-sm sm:text-base" role="menubar">
          <li role="none">
            <a
              role="menuitem"
              href="#gallery"
              className="hover:text-purple-400"
            >
              Gallery
            </a>
          </li>
          {/* <li>
            <a href="#about" className="hover:text-purple-400">
              About
            </a>
          </li> */}
          <li role="none">
            <a
              role="menuitem"
              href="#contact"
              className="hover:text-purple-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        className="flex flex-col items-center text-center gap-4 py-8 px-4"
        aria-labelledby="hero-heading"
      >
        <Image
          src="/TrithirLogo.png"
          alt="Trithir logo"
          width={100}
          height={100}
        />
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl font-bold text-orange-400"
        >
          Welcome to Trithir&rsquo;s Workshop
        </h1>
        <p className="max-w-xl text-sm sm:text-base text-white/80">
          Purveyor of peculiar pieces and mystical makings. Browse the gallery
          of enchanted works and magical merchandise.
        </p>
      </section>

      {/* Path Selector */}
      <section
        className="py-6 px-4 bg-black/[.05]"
        id="gallery"
        aria-label="Gallery section"
      >
        <PathSelector onSelect={setPath} selectedPath={path} />
      </section>

      {/* Toggling Content (Artifacts for Sale or Enchanted Products) */}
      {path && (
        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8"
          aria-label={
            path === "artifacts"
              ? "Artifacts for sale"
              : "Completed enchanted projects"
          }
        >
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </section>
      )}

      {/* About Section */}
      <section
        className="p-8 sm:p-16 max-w-2xl mx-auto text-center"
        id="about"
        aria-labelledby="about-heading"
      >
        <h2
          id="about-heading"
          className="text-2xl font-semibold mb-4 text-purple-300"
        >
          About the Maker
        </h2>
        <p className="text-white/80">
          Trithir is a humble crafts-wizard conjuring up hand-turned pens,
          puzzle boxes, cloaks, and curious creations from wood and whimsy.
          Email him with enquiries Ericstevens10@gmail.com or simply use the
          form below.
        </p>
      </section>

      {/* Contact Section */}
      <section
        className="p-8 sm:p-16 max-w-xl mx-auto"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <h2
          id="contact-heading"
          className="text-2xl font-semibold mb-4 text-orange-300"
        >
          Send a Message
        </h2>

        {state.succeeded ? (
          <p
            className="text-green-400 font-medium text-center"
            role="status"
            aria-live="polite"
          >
            Thanks for your message!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            aria-describedby="form-description"
          >
            <span id="form-description" className="sr-only">
              Fill in your name, email, and message to contact Trithir.
            </span>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              className="bg-black/10 border border-white/[.1] rounded p-2"
              required
            />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="bg-black/10 border border-white/[.1] rounded p-2"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={5}
              className="bg-black/10 border border-white/[.1] rounded p-2"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
              aria-label="Submit contact form"
            >
              {state.submitting ? "Sending..." : "Cast Message"}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer
        className="py-6 text-center text-xs text-white/50"
        role="contentinfo"
      >
        &copy; {new Date().getFullYear()} Trithir&rsquo;s Workshop. All rights
        reserved.
      </footer>

      {selectedProduct && (
        <ProductOverlay
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
