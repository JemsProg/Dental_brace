// src/components/about/Safety.jsx
import { useState, useMemo } from "react";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaWind,
  FaCalendarCheck,
  FaDoorOpen,
  FaTooth,
  FaClipboardCheck,
  FaFileDownload,
} from "react-icons/fa";

const CHECKS = [
  "Fresh gloves & masks for each patient",
  "Tools cleaned and sterilized between visits",
  "Disinfected chairs and surfaces",
  "Hand hygiene before and after each treatment",
  "Disposable covers on high-touch surfaces",
  "New patient bib & suction tips every visit",
];

const EQUIPMENT = [
  { icon: <FaShieldAlt />, label: "Medical-grade disinfectants" },
  { icon: <FaWind />, label: "Air purifier with HEPA" },
  { icon: <FaShieldAlt />, label: "Autoclave sterilizer" },
  { icon: <FaShieldAlt />, label: "Disposable barriers & PPE" },
];

const STEPS = [
  {
    icon: <FaCalendarCheck />,
    title: "Before you arrive",
    text: "Optional booking; we prepare a clean room for you.",
  },
  {
    icon: <FaDoorOpen />,
    title: "When you enter",
    text: "Sanitize hands; our team wears fresh PPE.",
  },
  {
    icon: <FaTooth />,
    title: "During care",
    text: "Clean tools and sterile setup, explained in simple words.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "After your visit",
    text: "Chair & surfaces disinfected; tools go to sterilization.",
  },
];

export default function Safety() {
  const [open, setOpen] = useState(false);
  const updated = useMemo(
    () =>
      new Date().toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    []
  );

  return (
    <section id="safety" className="relative isolate py-16">


      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col">
          {/* LEFT: Safety & Hygiene + checklist */}
          <div className="lg:col-span-2 p-6 md:p-8 ">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
                  Safe care
                </span>
                <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-900">
                  Safety & Hygiene
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  Updated • {updated}
                </span>
                <button
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  aria-controls="safety-checklist"
                  className="rounded-full border border-primary/40 bg-white px-3 py-1.5 text-sm text-primary transition hover:bg-primary/10"
                >
                  {open ? "Hide checklist" : "View checklist"}
                </button>
              </div>
            </div>

            <p className="mt-3 text-neutral-700">
              Your safety comes first. We follow clear cleaning and
              sterilization steps for every visit so you can relax and focus on
              your smile.
            </p>

            {/* Animated checklist */}
            <div
              id="safety-checklist"
              className={[
                "grid transition-all duration-300 ease-out",
                open
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0",
              ].join(" ")}
            >
              <ul className="overflow-hidden grid grid-cols-1 gap-3 sm:grid-cols-2">
                {CHECKS.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 rounded-2xl border border-white/50 bg-white/80 p-3 text-primary shadow-sm transition hover:-translate-y-0.5"
                  >
                    <FaCheckCircle className="mt-0.5 shrink-0" />
                    <span className="text-neutral-800">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: equipment + steps */}
          <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 md:p-8 shadow-2xl backdrop-blur-xl ring-1 ring-primary/20">
            <h3 className="text-xl font-semibold text-neutral-900">
              What we use
            </h3>
            <p className="mt-2 text-sm text-neutral-700">
              Clean air, sterile tools, and protective covers for worry-free
              care.
            </p>
            <div className="flex flex-wrap justify-around mt-5 gap-5">
              {EQUIPMENT.map((e) => (
                <div
                  key={e.label}
                  className="flex w-80 items-center gap-3 rounded-2xl border border-white/60 bg-white/90 p-3 text-neutral-800 shadow-sm transition hover:-translate-y-0.5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    {e.icon}
                  </span>
                  <span className="font-medium">{e.label}</span>
                </div>
              ))}
            </div>

            {/* What to expect (timeline style) */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                What to expect
              </h4>
              <ol className="mt-3 space-y-3">
                {STEPS.map((s, i) => (
                  <li
                    key={s.title}
                    className="relative flex items-start gap-3 rounded-2xl bg-primary/5 p-3"
                  >
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      {s.icon}
                    </span>
                    <div>
                      <div className="font-medium text-neutral-900">
                        {i + 1}. {s.title}
                      </div>
                      <div className="text-sm text-neutral-700">{s.text}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
