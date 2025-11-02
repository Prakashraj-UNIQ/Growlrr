"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  UserRound,
  Search,
  PhoneCall,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/config/navbar";

type HeaderMode = "full" | "compact" | "hidden";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<HeaderMode>("full");
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      if (tickingRef.current) return;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - lastYRef.current;

        lastYRef.current = y;

        const AT_TOP = y < 8;

        if (AT_TOP) {
          setMode("full");
        } else if (dy > 4) {
          // scrolling down
          setMode("hidden");
        } else if (dy < -4) {
          // scrolling up
          setMode("compact");
        }
        tickingRef.current = false;
      });
      tickingRef.current = true;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer if jumping to md+
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}, [open]);

  // Helpers for showing sections based on mode
  const showFull = mode === "full";
  const showCompact = mode === "compact";
  const hiddenClass =
  open || mode !== "hidden" ? "translate-y-0" : "-translate-y-full";

  return (
    <>
      {/* Header wrapper that slides out/in */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out transform-gpu will-change-transform ${hiddenClass}`}
      >
        {/* ===== FULL MODE: brand + desktop search + desktop actions + mobile row ===== */}
        {showFull && (
          <div className="bg-white  supports-[backdrop-filter]:bg-white border-b border-gray-200">
            <div className="mx-auto px-4 sm:px-6 lg:px-25">
              <div className="flex h-16 items-center justify-between gap-4">
                {/* Brand */}
                <Link href="/" className="flex items-center">
                  <h1 className="text-brandOrange text-2xl sm:text-3xl font-bold tracking-tight">
                    Grow<span className="text-brandBlue">lrr</span>
                  </h1>
                </Link>

                {/* Desktop search */}
                <div className="hidden md:flex items-center w-full max-w-xl border border-gray-300 rounded-full px-4 py-2 focus-within:border-brandBlue focus-within:shadow-sm transition">
                  <Search
                    className="text-gray-500 w-5 h-5"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    placeholder="Search for recipes..."
                    className="flex-1 bg-transparent outline-none px-2 capitalize text-gray-700 placeholder-gray-400"
                    aria-label="Search for recipes"
                  />
                </div>

                {/* Desktop actions */}
                <div className="hidden md:flex gap-3 items-center">
                  <button
                    className="cursor-pointer flex gap-2 py-2 px-2 rounded-full border border-brandBlue hover:bg-brandBlue/5 transition"
                    aria-label="Call"
                  >
                    <PhoneCall />
                  </button>
                  <button
                    className="cursor-pointer flex gap-2 py-2 px-2 rounded-full border border-brandBlue hover:bg-brandBlue/5 transition"
                    aria-label="Mail"
                  >
                    <Mail />
                  </button>
                  <Link
                    href="/login"
                    className="cursor-pointer flex gap-2 py-2 px-5 rounded-full border border-brandBlue hover:bg-brandBlue/5 transition"
                  >
                    <UserRound />
                    <span className="whitespace-nowrap">Account</span>
                  </Link>
                  <Link
                    href="/cart"
                    className="cursor-pointer flex gap-2 py-2 px-5 rounded-full border border-brandBlue bg-brandBlue text-white hover:bg-brandBlue/90 transition"
                  >
                    <ShoppingCart />
                    <span className="whitespace-nowrap">Rs. 0.00</span>
                  </Link>
                </div>

                {/* Mobile header: phone, mail, cart, hamburger */}
                <div className="flex md:hidden items-center gap-2">
                  <button
                    className="p-2 rounded-full border border-brandBlue hover:bg-brandBlue/5 transition"
                    aria-label="Call"
                  >
                    <PhoneCall className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 rounded-full border border-brandBlue hover:bg-brandBlue/5 transition"
                    aria-label="Mail"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                  <Link
                    href="/cart"
                    className="p-2 rounded-full border border-brandBlue hover:bg-brandBlue/5 transition"
                    aria-label="Cart"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </Link>
                  <button
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition"
                    aria-label="Open menu"
                    aria-controls="mobile-nav-panel"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                  >
                    {open ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile search always visible in FULL mode (under header) */}
            <div className="md:hidden border-t border-gray-200">
              <div className="mx-auto max-w-7xl px-4 py-3">
                <div className="flex items-center w-full border border-gray-300 rounded-full px-3 py-2 focus-within:border-brandBlue focus-within:shadow-sm transition">
                  <Search
                    className="text-gray-500 w-5 h-5"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    placeholder="Search for recipes..."
                    className="flex-1 bg-transparent outline-none px-2 text-gray-700 placeholder-gray-400"
                    aria-label="Search for recipes"
                  />
                </div>
              </div>
            </div>

            {/* Desktop nav row */}
            <nav className="hidden md:block">
              <ul className="mx-auto px-4 py-3  sm:px-6 lg:px-25 flex items-center gap-8 py-3 border-t border-gray-200">
                {navbarLinks.map((l) => {
                  const isActive = pathname === l.href;
                  return (
                    <li key={l.href}>
                      <Link
                        className={`hover:text-brandOrange transition ${
                          isActive ? "text-brandBlue font-bold" : "text-gray-600"
                        }`}
                        href={l.href}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}

        {/* ===== COMPACT MODE: (on scroll up) =====
             - Desktop: show ONLY nav links row
             - Mobile: show ONLY a slim bar with brand + hamburger (no cart/mail/phone, no search)
        */}
        {showCompact && (
          <div className="bg-white supports-[backdrop-filter]:bg-white border-b border-gray-200">
            {/* Mobile compact top: brand + hamburger */}
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 md:hidden">
              <div className="flex h-12 items-center justify-between">
                <Link href="/" className="flex items-center">
                  <span className="text-brandOrange text-xl font-bold tracking-tight">
                    Grow<span className="text-brandBlue">lrr</span>
                  </span>
                </Link>
                <div className="flex md:hidden items-center gap-2">
                  <button
                    className="p-2 rounded-full border border-brandBlue hover:bg-brandBlue/5 transition"
                    aria-label="Call"
                  >
                    <PhoneCall className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 rounded-full border border-brandBlue hover:bg-brandBlue/5 transition"
                    aria-label="Mail"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                  <Link
                    href="/cart"
                    className="p-2 rounded-full border border-brandBlue hover:bg-brandBlue/5 transition"
                    aria-label="Cart"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </Link>
                  <button
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition"
                    aria-label="Open menu"
                    aria-controls="mobile-nav-panel"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                  >
                    {open ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop: only nav links row */}
            <nav className="hidden md:block">
              <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 flex items-center gap-8 py-2">
                {navbarLinks.map((l) => {
                  const isActive = pathname === l.href;
                  return (
                    <li key={l.href}>
                      <Link
                        className={`hover:text-brandOrange transition ${
                          isActive ? "text-brandBlue font-bold" : "text-gray-600"
                        }`}
                        href={l.href}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* It make white space */}
      <div className="h-[130px] md:h-[112px]" />

      {/* ===== Mobile slide-down panel (available in both modes when hamburger is visible) ===== */}
      {/* border-b border-gray-200 */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden fixed left-0 right-0 top-16 z-40 bg-white  overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 space-y-3">
          {/* Links */}
          <nav>
            <ul className="grid gap-2 text-gray-700">
              {navbarLinks.map((l) => {
                const isActive = pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-2 hover:text-brandOrange transition ${
                        isActive ? "text-brandBlue font-bold" : "text-gray-600"
                      }`}
                      href={l.href}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="cursor-pointer inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full border border-brandBlue hover:bg-brandBlue/5 transition"
            >
              <UserRound className="w-5 h-5" />
              <span>Account</span>
            </Link>
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="cursor-pointer inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full border border-brandBlue bg-brandBlue text-white hover:bg-brandBlue/90 transition"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Rs. 0.00</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


