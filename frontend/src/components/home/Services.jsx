// src/components/home/Services.jsx
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ServicesData } from "../data/ServicesData";

export default function Services() {
  // choose services to rotate: featured first, else all
  const pool = useMemo(() => {
    const f = ServicesData.filter((s) => s.featured);
    return f.length ? f : ServicesData;
  }, []);

  const [idx, setIdx] = useState(0);
  const n = pool.length;

  const next = () => setIdx((i) => (i + 1) % n);
  const prev = () => setIdx((i) => (i - 1 + n) % n);

  // keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [n]);

  const a = pool[idx];
  const b = pool[(idx + 1) % n];

  return (
    <section id="services" className="relative isolate py-20">
 

      <div className="mx-auto max-w-screen-2xl px-4">
        {/* Heading */}
        <header className="flex flex-col flex-wrap">
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Choose the right care for you
          </h2>
          <p className="mt-3 text-neutral-700">
            A quick peek at our most-booked treatments. Tap next to browse.
          </p>
        </header>

        {/* Cards row */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ServiceCard primary data={a} />
          <div className="hidden md:block">
            <ServiceCard data={b} />
          </div>
        </div>

        {/* Controls + View all */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-neutral-800 hover:bg-white transition"
            aria-label="Previous service"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={next}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary text-secondary hover:bg-primary-hover transition"
            aria-label="Next service"
          >
            <ArrowRight size={18} />
          </button>

          <Link
            to="/services"
            className="ml-4 inline-flex items-center rounded-full border border-neutral-200 bg-white/80 px-5 py-2.5 text-neutral-900 hover:bg-primary-hover transition"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ data, primary = false }) {
  const { title, desc, features = [], icon: Icon, category } = data || {};

  return (
    <article
      className={[
        "relative rounded-3xl p-6 md:p-7 backdrop-blur-xl",
        "border shadow-xl",
        primary
          ? "bg-white/85 border-white/80 ring-1 ring-primary/25"
          : "bg-white/70 border-white/70",
      ].join(" ")}
    >
      {/* subtle gradient ring/glow */}
      <div
        className="pointer-events-none absolute -inset-px -z-10 rounded-3xl opacity-70"
        style={{
          background: primary
            ? "linear-gradient(140deg, rgba(255,255,255,0.35), rgba(255,101,195,0.20))"
            : "linear-gradient(140deg, rgba(255,255,255,0.25), rgba(255,101,195,0.12))",
          mask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          WebkitMask:
            "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
        }}
      />

      {/* icon + category pill */}
      <div className="mb-5 flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
          {Icon ? <Icon size={22} /> : null}
        </div>
        {category ? (
          <span className="rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700">
            {category}
          </span>
        ) : null}
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
        {title}
      </h3>
      <p className="mt-2 text-neutral-700">{desc}</p>

      <ul className="mt-5 space-y-2 text-neutral-800">
        {features.slice(0, 5).map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-sm">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          to="/contact"
          className={[
            "inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition",
            primary
              ? "bg-primary text-secondary hover:bg-primary-hover"
              : "bg-white text-primary border border-neutral-200 hover:bg-primary hover:text-secondary",
          ].join(" ")}
        >
          Book this service
        </Link>
      </div>
    </article>
  );
}
