// src/components/services/CategoryChips.jsx
import { memo } from "react";

export default memo(function CategoryChips({
  categories = [],
  active = "All",
  onChange = () => {},
  includeAll = true,
  allLabel = "All",
}) {
  const items = includeAll ? [allLabel, ...categories] : categories;

  return (
    <div className="w-full">
      <div
        className="
          inline-flex w-full flex-wrap items-center gap-2
          rounded-2xl border border-white/70 bg-white/80 p-2 shadow-sm
          backdrop-blur-xl ring-1 ring-primary/10
        "
        role="tablist"
        aria-label="Service categories"
      >
        {items.map((c) => {
          const selected = c === active;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onChange(c)}
              className={[
                "px-3.5 py-1.5 text-sm rounded-full transition focus:outline-none focus:ring-2 focus:ring-primary/40",
                selected
                  ? "bg-primary text-secondary"
                  : "bg-primary/10 text-primary hover:bg-primary/15",
              ].join(" ")}
            >
              {c}
            </button>
          );
        })}
      </div>
    </div>
  );
});
