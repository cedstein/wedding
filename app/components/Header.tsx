"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const [infoOpen, setInfoOpen] = useState(false); // desktop dropdown under Info
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setInfoOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-lg font-semibold">
            Dennis & Linns stora dag
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Start
          </Link>
          <Link href="/lovestory" className="text-gray-700 hover:text-gray-900">
            Vår kärlekshistoria
          </Link>

          {/* Info with dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setInfoOpen((s) => !s)}
              aria-expanded={infoOpen}
              className="px-3 py-1 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              Info
            </button>

            {infoOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-sm z-50">
                <Link
                  href="/schedule"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Schema
                </Link>
                <Link
                  href="/vigsel"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Vigsel
                </Link>
                <Link
                  href="/dinner"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Middag
                </Link>
                <Link
                  href="/tal"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Tal
                </Link>
                <Link
                  href="/presents"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Gåvor
                </Link>
                <Link
                  href="/location"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Kartor
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Kontakta
                </Link>
                <Link
                  href="/hotel"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Boende
                </Link>
              </div>
            )}
          </div>

          <Link href="/rsvp" className="text-gray-700 hover:text-gray-900">
            OSA
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            className="p-2 rounded-md border border-gray-200"
          >
            <span className="sr-only">Öppna meny</span>
            {open ? "✕" : "☰"}
          </button>

          {open && (
            <div className="absolute right-4 top-16 w-56 bg-white border border-gray-200 rounded shadow-lg z-50">
              <Link
                href="/"
                className="block px-4 py-3 border-b border-gray-100"
              >
                Start
              </Link>
              <Link
                href="/lovestory"
                className="text-gray-700 hover:text-gray-900"
              >
                Vår kärlekshistoria
              </Link>
              <Link
                href="/info"
                className="block px-4 py-3 border-b border-gray-100"
              >
                Info
              </Link>
              <Link
                href="/rsvp"
                className="block px-4 py-3 border-b border-gray-100"
              >
                OSA
              </Link>

              {/* mobile submenu items (under the same menu) */}
              <Link
                href="/schedule"
                className="block px-4 py-3 border-b border-gray-100"
              >
                Schema
              </Link>
              <Link href="/location" className="block px-4 py-3">
                Plats
              </Link>
              <Link href="/hotel" className="block px-4 py-3">
                Boende
              </Link>
              <Link href="/contact" className="block px-4 py-3">
                Kontakta
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
