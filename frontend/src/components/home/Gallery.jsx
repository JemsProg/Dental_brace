// src/components/home/Gallery.jsx
import { useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaChevronDown,
} from "react-icons/fa";

// helper: Unsplash photo by id with size
const u = (id, w = 1200, h = 900) =>
  `https://source.unsplash.com/${id}/${w}x${h}`;

const CASES = [
  {
    id: "c1",
    title: "Gap closed, straighter smile",
    category: "Braces",
    before: u("Z5EMjgZt1Wo"),
    after: u("P8ernb_Ht-M"),
  },
  {
    id: "c2",
    title: "Whiter, brighter teeth",
    category: "Whitening",
    before: u("wcjymWiREd0"),
    after: u("PoKFqDwLRjw"),
  },
  {
    id: "c3",
    title: "Cracked tooth fixed",
    category: "Crowns",
    before: u("GzNdIc2KxwE"),
    after: u("k9HvkC7ABqU"),
  },
  {
    id: "c4",
    title: "Confident chewing again",
    category: "Dentures",
    before: u("5Ts8sGXxDDg"),
    after: u("G_vOwX_2v_8"),
  },
  {
    id: "c5",
    title: "Tidy alignment & smile",
    category: "Braces",
    before: u("mOuv1RuLZno"),
    after: u("4gKUn1-Skvk"),
  },
  {
    id: "c6",
    title: "Even shade, stain cover",
    category: "Veneers",
    before: u("fyUfVLbIap4"),
    after: u("0bNd0M7KRp4"),
  },
];

/* ---------- Reviews (tied to cases) ---------- */
const RATING = {
  average: 4.7,
  total: 1204,
  dist: { 5: 68, 4: 18, 3: 7, 2: 4, 1: 3 },
};

const REVIEWS = [
  {
    name: "Emily Selman",
    rating: 5,
    text: "They closed my front gap with braces. Gentle adjustments and super friendly staff!",
    avatar: "https://i.pravatar.cc/60?img=1",
    service: "Braces",
    caseId: "c1",
  },
  {
    name: "Hector Gibbons",
    rating: 4.5,
    text: "Clinic whitening made a huge difference in one visit. Clear aftercare, no sensitivity.",
    avatar: "https://i.pravatar.cc/60?img=12",
    service: "Teeth Whitening",
    caseId: "c2",
  },
  {
    name: "Mark Edwards",
    rating: 4,
    text: "Cracked molar fixed with a crown—natural look and comfortable bite again.",
    avatar: "https://i.pravatar.cc/60?img=33",
    service: "Crowns",
    caseId: "c3",
  },
];

export default function Gallery() {
  return (
    <section
      id="results"
      className="py-16 bg-gradient-to-b from-secondary to-accent/70"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4  p-6 md:p-8">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Summary (left) */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Customer Reviews
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <Stars value={RATING.average} />
                <span className="text-sm text-neutral-700">
                  Based on {RATING.total.toLocaleString()} reviews
                </span>
              </div>

              <div className="mt-5 space-y-2">
                {[5, 4, 3, 2, 1].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="w-4 text-xs text-neutral-700">{s}</span>
                    <div className="h-2 flex-1 rounded-full bg-neutral-200">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${RATING.dist[s] || 0}%` }}
                      />
                    </div>
                    <span className="w-10 text-right text-xs text-neutral-700">
                      {RATING.dist[s] || 0}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews list (right) */}
            <div className="md:col-span-2">
              <ul className="divide-y divide-neutral-200/70">
                {REVIEWS.map((r, i) => {
                  const c = CASES.find((x) => x.id === r.caseId);
                  return <ReviewRow key={i} review={r} caseData={c} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Per-review row with dropdown panel ---------- */
function ReviewRow({ review, caseData }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <img
          src={review.avatar}
          alt={review.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-neutral-900">
              {review.name}
            </p>
            <Stars value={review.rating} size={14} />
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] text-primary">
              {review.service}
            </span>
          </div>

          <p className="mt-2 text-neutral-700">{review.text}</p>

          {caseData && (
            <div className="mt-3">
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-900 hover:bg-primary/10 transition"
              >
                <FaChevronDown
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
                {open ? "Hide before & after" : "Show before & after"}
              </button>

              {/* Collapsible panel */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open ? "max-h-[520px] mt-3 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <Slider before={caseData.before} after={caseData.after} />
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

/* ---------- Components ---------- */
function Slider({ before, after }) {
  const [pct, setPct] = useState(50);
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-white/30 bg-white/70">
      <img
        src={after}
        alt="After"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pct}%` }}
      >
        <img src={before} alt="Before" className="h-full w-full object-cover" />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0"
        style={{ left: `calc(${pct}% - 1px)` }}
      >
        <div className="h-full w-0.5 bg-primary/70" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary p-2 text-secondary shadow-lg">
          <div className="h-2 w-2 rounded-full bg-secondary" />
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pct}
        onChange={(e) => setPct(parseInt(e.target.value))}
        aria-label="Compare before and after"
        className="absolute bottom-3 left-1/2 z-10 w-44 -translate-x-1/2 appearance-none bg-transparent"
      />
      <span className="absolute left-3 top-3 rounded-full bg-black/25 px-2 py-0.5 text-[10px] text-white">
        Before
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-black/25 px-2 py-0.5 text-[10px] text-white">
        After
      </span>
    </div>
  );
}

function Stars({ value = 0, size = 16 }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  return (
    <span className="inline-flex items-center gap-0.5 text-primary">
      {Array.from({ length: full }).map((_, i) => (
        <FaStar key={`f${i}`} size={size} />
      ))}
      {hasHalf && <FaStarHalfAlt size={size} />}
      {Array.from({ length: empty }).map((_, i) => (
        <FaRegStar key={`e${i}`} size={size} className="text-primary" />
      ))}
    </span>
  );
}
