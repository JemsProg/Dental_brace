// src/components/about/WhyChooseUs.jsx
import {
  FaSmile,
  FaTooth,
  FaCreditCard,
  FaHandHoldingHeart,
  FaTag,
  FaRegClock,
} from "react-icons/fa";

const FEATURES = [
  {
    icon: <FaHandHoldingHeart />,
    title: "Gentle & friendly",
    text: "We explain in simple words and work at your pace.",
  },
  {
    icon: <FaTooth />,
    title: "Quality work",
    text: "Great-looking, comfortable results for daily life.",
  },
  {
    icon: <FaCreditCard />,
    title: "Easy monthly plans",
    text: "Up to 12 months, 0% interest with partner banks.",
  },
  {
    icon: <FaSmile />,
    title: "Happy patients",
    text: "Many returning families in the Mendiola area.",
  },
  {
    icon: <FaTag />,
    title: "Clear pricing",
    text: "Know the cost before you start—no surprises.",
  },
  {
    icon: <FaRegClock />,
    title: "Open daily",
    text: "10:00 AM – 7:00 PM, seven days a week.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative isolate py-16">
  
      <div className="mx-auto max-w-screen-2xl px-4">
        {/* Header */}
        <header className="flex flex-col items-start gap-2 mb-8">
          <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
            Trusted by local families
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            Why patients choose us
          </h2>
          <p className="mt-2 text-neutral-700">
            Friendly care, clear advice, and results you can feel every day.
          </p>
        </header>

        {/* Cards */}
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {FEATURES.map((f) => (
            <li key={f.title}>
              <article
                tabIndex={0}
                className="
                  group relative rounded-3xl p-[1.5px]
                  bg-gradient-to-br from-primary/30 via-white/30 to-primary/15
                  shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)]
                  transition-transform hover:-translate-y-1 focus:-translate-y-1 focus:outline-none
                "
              >
                <div
                  className="
                    rounded-3xl border border-white/70 bg-white/85 p-6
                    backdrop-blur-xl ring-1 ring-primary/10
                    transition-colors group-hover:bg-white/90 group-focus:bg-white/90
                  "
                >
                  {/* Icon chip */}
                  <div
                    className="
                      mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl
                      bg-primary/12 text-primary text-2xl
                      ring-1 ring-primary/20
                    "
                    aria-hidden="true"
                  >
                    {f.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-neutral-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {f.text}
                  </p>

                  {/* subtle underline on hover */}
                  <span className="mt-5 block h-px w-0 bg-primary/40 transition-all group-hover:w-24" />
                </div>

                {/* soft outer glow */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40 group-focus:opacity-40 bg-primary/20"
                />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
