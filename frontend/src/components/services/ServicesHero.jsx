// src/components/services/ServicesHero.jsx
import {
  FaTooth,
  FaCreditCard,
  FaCalendarCheck,
  FaArrowRight,
} from "react-icons/fa";

export default function ServicesHero() {
  return (
    <section
      id="services-hero"
      className="relative isolate flex items-center overflow-hidden pt-24 pb-16 md:pb-20"
    >
    
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        {/* LEFT: Copy */}
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
            <FaTooth /> Services & Pricing Guide
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-neutral-900">
            Clear options, gentle care,
            <br className="hidden sm:block" /> and a written quote after a quick
            check.
          </h1>

          {/* Mini benefits (optional) */}
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            <li className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-neutral-800 backdrop-blur">
              <FaCalendarCheck className="text-primary" /> Same-day consults
            </li>
            <li className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-neutral-800 backdrop-blur">
              <FaCreditCard className="text-primary" /> 0% installment options
            </li>
          </ul>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-secondary hover:bg-primary-hover transition"
            >
              Book a consult <FaArrowRight />
            </a>
            <a
              href="#installments"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white px-6 py-3 text-primary hover:bg-primary/10 transition"
              title="View installment plans"
            >
              Installment plans
            </a>
          </div>

          {/* Small note */}
          <p className="mt-3 text-sm text-neutral-700">
            Final fees confirmed after dentist check. 0% plans with partner
            banks.
          </p>
        </div>

        {/* RIGHT: Glass card with quick “what’s inside” */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-6 md:p-8 shadow-2xl backdrop-blur-xl ring-1 ring-primary/20">
            <p className="text-sm font-semibold text-neutral-900">
              What’s inside
            </p>
            <p className="mt-1 text-sm text-neutral-700">
              A simple breakdown of common treatments and what affects pricing.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
              {[
                "Braces",
                "Crowns & Bridges",
                "Dentures",
                "Cleaning",
                "Whitening",
                "Veneers",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/90 px-3 py-2 text-neutral-800"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t}
                </span>
              ))}
            </div>

            {/* Decorative ring */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-[14px] border-primary/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
