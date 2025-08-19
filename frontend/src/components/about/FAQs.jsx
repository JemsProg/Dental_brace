// src/components/about/FAQs.jsx
import { useMemo, useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaSearch,
  FaPhoneAlt,
  FaFacebookMessenger,
  FaTimes,
} from "react-icons/fa";

const BASE_QAS = [
  {
    q: "Do I need an appointment?",
    a: "Walk-ins are welcome, but booking ahead ensures shorter waiting time.",
  },
  {
    q: "How much will it cost?",
    a: "We’ll give a clear price after a quick check. You can also ask for a written quote.",
  },
  {
    q: "Do you have monthly payment plans?",
    a: "Yes. Up to 12 months, 0% interest with partner banks (subject to approval).",
  },
  {
    q: "Are you open on weekends?",
    a: "Yes, we’re open daily from 10:00 AM to 7:00 PM.",
  },
  {
    q: "Does getting braces hurt?",
    a: "You might feel pressure for a day or two after adjustments. It’s manageable and fades quickly.",
  },
  {
    q: "How long do braces usually take?",
    a: "Most cases take 12–24 months, depending on your teeth and bite.",
  },
  {
    q: "How often should I get cleaning?",
    a: "Every 6 months for most people. We’ll suggest sooner if your gums need extra care.",
  },
  {
    q: "Is teeth whitening safe?",
    a: "Yes when done with dentist guidance. We protect your gums and choose the right strength for you.",
  },
  {
    q: "What should I bring on my first visit?",
    a: "Just yourself and any past dental X-rays if you have them. We’ll handle the rest.",
  },
  {
    q: "How do I reschedule?",
    a: "Send us a quick message or call at least a day before, and we’ll find a better time.",
  },
];

const PHONE = "+639151777222";
const MESSENGER = "https://m.me/DentalBraces19";

/* helpers for highlighting */
function escapeRegExp(s = "") {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Highlight({ text = "", query = "" }) {
  if (!query) return <>{text}</>;
  const re = new RegExp(`(${escapeRegExp(query)})`, "ig");
  const parts = text.split(re);
  return (
    <>
      {parts.map((p, i) =>
        p.toLowerCase() === query.toLowerCase() ? (
          <mark
            key={i}
            className="rounded bg-primary/20 px-0.5 text-neutral-900"
          >
            {p}
          </mark>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState(-1);
  const [query, setQuery] = useState("");

  const qas = useMemo(() => {
    if (!query.trim()) return BASE_QAS;
    const q = query.toLowerCase();
    return BASE_QAS.filter(
      (i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)
    );
  }, [query]);

  const toggle = (i) => setOpenIdx((cur) => (cur === i ? -1 : i));
  const expandAll = () => setOpenIdx(-2); // all open
  const collapseAll = () => setOpenIdx(-1);
  const isOpen = (i) => openIdx === -2 || openIdx === i;

  return (
    <section id="faqs" className="relative isolate py-16">
   
      <div className="mx-auto max-w-screen-2xl px-4">
        {/* Header */}
        <div className="flex flex-col ">
          <span className="inline-block text-center w-30 rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
            Quick answers
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            FAQs
          </h2>
          <p className="mt-2 text-neutral-700">
            Still unsure? Search below or message/call us and we’ll help right
            away.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs (e.g., braces, price, whitening)"
              className="w-full rounded-full border border-white/70 bg-white/85 pl-10 pr-10 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-500 shadow-sm backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label="Search FAQs"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-neutral-500 hover:bg-neutral-100"
                aria-label="Clear search"
              >
                <FaTimes size={12} />
              </button>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="rounded-full border border-primary/40 bg-white px-4 py-2 text-sm text-primary transition hover:bg-primary/10"
            >
              Expand all
            </button>
            <button
              onClick={collapseAll}
              className="rounded-full border border-white/60 bg-white/85 px-4 py-2 text-sm text-neutral-800 transition hover:bg-white"
            >
              Collapse all
            </button>
          </div>
        </div>

        {/* List — now scrollable */}
        <div className="mt-6">
          <div
            role="region"
            aria-label="Frequently asked questions list"
            className="
              space-y-3 overflow-y-auto pr-1
              max-h-[40vh] md:max-h-[45vh]
              scroll-smooth
            "
            style={{ scrollbarGutter: "stable both-edges" }}
          >
            {qas.length === 0 && (
              <div
                className="rounded-2xl border border-white/70 bg-white/85 p-5 text-center text-neutral-700 backdrop-blur-xl"
                aria-live="polite"
              >
                No results. Try different keywords (e.g., “price”, “braces”,
                “open”).
              </div>
            )}

            {qas.map((item, i) => {
              const open = isOpen(i);
              return (
                <div
                  key={item.q}
                  className={[
                    "rounded-2xl border p-4 shadow-lg backdrop-blur-xl transition",
                    open
                      ? "bg-primary/15 border-primary/30"
                      : "bg-white/85 border-white/70 hover:shadow-xl",
                  ].join(" ")}
                >
                  <button
                    className="w-full text-left"
                    onClick={() => toggle(i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-medium text-neutral-900">
                        <Highlight text={item.q} query={query} />
                      </span>
                      <span
                        className={[
                          "grid h-8 w-8 place-items-center rounded-full border transition",
                          open
                            ? "border-primary bg-primary text-secondary"
                            : "border-primary/30 bg-primary/10 text-primary",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        {open ? <FaMinus /> : <FaPlus />}
                      </span>
                    </div>
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    className={[
                      "grid transition-all duration-300 ease-out",
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-3 text-neutral-700">
                        <Highlight text={item.a} query={query} />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
