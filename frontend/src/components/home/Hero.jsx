// src/components/home/Hero.jsx
import { useState } from "react";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaTooth,
  FaPercent,
  FaPhoneAlt,
} from "react-icons/fa";
import heroImg from "../../assets/hero_page.png";

// Single-location clinic
const CLINIC = {
  name: "DentalBraces Clinic — Mendiola",
  address: "G/F Mendiola Square, CM Recto, Brgy 390, Manila",
  map: "https://maps.google.com/?q=Mendiola%20Square%20CM%20Recto%20Manila",
  phone: "+63 912 345 6789", // change to your real number
};

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rX = (py - 0.5) * 8;
    const rY = (0.5 - px) * 8;
    setTilt({ x: rX, y: rY });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <section
      id="home"
      // Full-bleed, responsive, modern gradient + glass
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      {/* Background: soft vertical gradient + two glowing blobs (uses @theme colors) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* vertical blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-accent/40 to-secondary" />
        {/* left-top glow */}
        <div className="absolute -top-24 -left-28 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-3xl" />
        {/* right-bottom glow */}
        <div className="absolute -bottom-32 -right-24 h-[36rem] w-[36rem] rounded-full bg-accent/90 blur-3xl" />
      </div>

      {/* Content container: maximize but keep readable */}
      <div className="mx-auto w-full max-w-screen-2xl px-5 sm:px-8 md:px-10 pt-28 pb-20">
        <div className="grid items-center gap-10 md:gap-14 md:[grid-template-columns:1.15fr_1fr]">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
              <FaTooth /> Gentle, friendly dental care
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-neutral-900">
              Braces & general dentistry in{" "}
              <span className="text-primary">Mendiola, Manila</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-[75ch]">
              Braces, crowns & bridges, dentures, and gentle cleaning—delivered
              with care at affordable rates.
            </p>

            {/* Glass location card */}
            <div className="mt-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_12px_50px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/40">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <FaMapMarkerAlt />
                </span>
                <p className="font-medium text-neutral-800">
                  Visit us in Mendiola
                </p>
              </div>

              <div className="p-4 sm:p-5">
                <p className="text-sm sm:text-base text-neutral-700">
                  {CLINIC.name}
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  {CLINIC.address}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={`tel:${CLINIC.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-secondary hover:bg-primary-hover transition"
                    aria-label="Call the clinic"
                  >
                    <FaPhoneAlt /> Call Now
                  </a>
                  <a
                    href={CLINIC.map}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-primary ring-1 ring-primary/30 bg-secondary/70 backdrop-blur hover:ring-primary/50 transition"
                    aria-label="Open Google Maps for directions"
                  >
                    Directions <FaChevronRight />
                  </a>
                </div>
              </div>
            </div>

            {/* quick chips */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-primary inline-flex items-center gap-2">
                <FaTooth /> Braces & General Dentistry
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-primary inline-flex items-center gap-2">
                <FaPercent /> 0% installment (bank terms apply)
              </span>
            </div>
          </div>

          {/* RIGHT: bigger, responsive, tilting image with glass frame */}
          <div className="relative">
            <div
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              className="relative will-change-transform"
              style={{
                transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform 200ms ease",
              }}
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/45 backdrop-blur-xl shadow-2xl">
                <img
                  src={heroImg}
                  alt="Smiling patient at the dentist"
                  className="w-full h-[360px] sm:h-[420px] md:h-[520px] xl:h-[600px] object-cover"
                />
                {/* arc accent */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full border-[18px] border-primary/20" />
                {/* sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-secondary/20 to-primary/10 mix-blend-overlay" />
              </div>
            </div>

            {/* floating badges */}
            <div className="absolute -left-2 -bottom-6 hidden md:block">
              <div className="flex items-end gap-4">
                <div className="grid place-items-center h-28 w-28 rounded-full bg-white/90 border border-white/40 shadow-lg">
                  <FaTooth className="text-primary text-2xl" />
                  <p className="mt-1 text-[11px] text-center text-neutral-700 leading-tight">
                    Braces &<br /> general care
                  </p>
                </div>
                <div className="grid place-items-center h-32 w-32 rounded-full bg-primary text-secondary shadow-xl">
                  <p className="text-sm font-semibold leading-tight text-center">
                    0% Installments
                  </p>
                </div>
                <div className="grid place-items-center h-24 w-24 rounded-full bg-white/90 border border-white/40 shadow-lg">
                  <p className="text-[11px] text-center text-neutral-700 leading-tight">
                    Near
                    <br /> Mendiola
                  </p>
                </div>
              </div>
            </div>

            {/* small promo pill */}
            <div className="absolute -top-4 right-2 hidden md:flex">
              <span className="animate-pulse rounded-full bg-primary/15 text-primary text-xs font-medium px-4 py-2 ring-1 ring-primary/25 backdrop-blur">
                New patients welcome today
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* bottom fade to ground the hero */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-accent/90 to-transparent -z-10" />
    </section>
  );
}
