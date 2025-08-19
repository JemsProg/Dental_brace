// src/components/services/ServicesFilterSection.jsx
import { useMemo, useState } from "react";
import CategoryChips from "./CategoryChips";
import { ServicesData } from "../data/ServicesData"; // adjust path

const CATEGORIES = [
  "Teeth Straightening",
  "Fix Damaged Teeth",
  "Replace Missing Teeth",
  "Keep Teeth Healthy",
  "Smile Makeover",
  "Emergency Care",
];

export default function ServicesFilterSection() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return ServicesData;
    return ServicesData.filter((s) => s.category === active);
  }, [active]);

  return (
    <section className="relative isolate py-12">
   

      <div className="mx-auto max-w-screen-2xl px-4">
        {/* Chips */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
            Explore services
          </h2>
          <p className="mt-1 text-neutral-700">
            Pick a category to see treatments that fit your needs.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <CategoryChips
            categories={CATEGORIES}
            active={active}
            onChange={setActive}
            includeAll
            allLabel="All"
          />
        </div>

        {/* Grid (no animation, just filter) */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <article
              key={s.title}
              className="
                rounded-3xl border border-white/70 bg-white/85 p-6
                shadow-xl backdrop-blur-xl ring-1 ring-primary/10
                transition hover:-translate-y-0.5
              "
            >
              <div className="mb-3 inline-flex items-center gap-2">
                {s.icon ? (
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/12 text-primary">
                    {typeof s.icon === "function" ? <s.icon /> : s.icon}
                  </span>
                ) : null}
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] text-primary">
                  {s.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {s.title}
              </h3>
              {s.desc && (
                <p className="mt-2 text-sm text-neutral-700">{s.desc}</p>
              )}
              {Array.isArray(s.features) && s.features.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                  {s.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
              <a
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-secondary hover:bg-primary-hover transition"
              >
                Book this service
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
