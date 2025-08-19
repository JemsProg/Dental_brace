// src/components/Header.jsx
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { FaTooth } from "react-icons/fa";

const PHONE = "+639151777222";
const nav = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    // normal header (scrolls away). No sticky/fixed.
    <header className="relative z-50 border-b border-white/20 shadow-md">
      {/* Pink → deeper pink gradient + glass */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r
                   from-primary-hover/95 via-primary/95 to-primary/85
                   backdrop-blur-xl"
        aria-hidden="true"
      />

      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        {/* Icon logo */}
        <Link to="/" className="group flex items-center gap-3">
          <span
            className="relative grid h-9 w-9 place-items-center rounded-2xl
                           bg-gradient-to-br from-primary to-primary-hover
                           ring-1 ring-white/30 shadow-sm text-secondary"
          >
            <FaTooth className="h-5 w-5" />
            <span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <span className="text-lg md:text-xl font-extrabold tracking-tight text-secondary">
            Dental Braces
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => {
              const active =
                pathname === n.to ||
                (n.to !== "/" && pathname.startsWith(n.to));
              return (
                <li key={n.name}>
                  <Link
                    to={n.to}
                    className={`px-3 py-2 rounded-md transition inline-flex items-center ${
                      active
                        ? "text-secondary bg-white/20"
                        : "text-secondary/90 hover:text-secondary hover:bg-white/10"
                    }`}
                  >
                    {n.name}
                  </Link>
                </li>
              );
            })}
            <li className="pl-2">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-primary hover:bg-accent transition shadow-sm"
              >
                <Phone size={18} />
                <span className="hidden lg:inline">Book Now</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md p-2 text-secondary hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden border-t border-white/20 bg-gradient-to-b from-primary-hover/95 via-primary/95 to-primary/85 backdrop-blur-xl">
          <ul className="flex flex-col p-3">
            {nav.map((n) => {
              const active =
                pathname === n.to ||
                (n.to !== "/" && pathname.startsWith(n.to));
              return (
                <li key={n.name}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-3 transition ${
                      active
                        ? "text-secondary bg-white/20"
                        : "text-secondary/90 hover:text-secondary hover:bg-white/10"
                    }`}
                  >
                    {n.name}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <a
                href={`tel:${PHONE}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-3 text-primary hover:bg-accent transition"
              >
                <Phone size={18} /> Call {PHONE}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
