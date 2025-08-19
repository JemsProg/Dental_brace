import {
  FaSmile,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegClock,
  FaLocationArrow,
  FaCheckCircle,
} from "react-icons/fa";

const HERO =
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop";
const PHONE = "+639151777222";
const MAP_LINK =
  "https://maps.google.com/?q=Mendiola%20Square%20CM%20Recto%20Manila";

export default function AboutHero() {
  return (
    <section className="relative isolate min-h-[100svh] flex items-center pt-24 pb-16">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-20 px-4 md:grid-cols-2">
        {/* LEFT: glass content card */}
        <div className=" p-7 md:p-10 ">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-primary text-xs">
            <FaSmile /> About DentalBraces
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-neutral-900">
            Caring dentistry in{" "}
            <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Mendiola
            </span>
          </h1>

          <p className="mt-3 text-neutral-700">
            Friendly, gentle care with clear explanations — so you always know
            what to expect and what it costs.
          </p>

          {/* Info */}
          <div className="mt-5 grid gap-2 text-sm text-neutral-800">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-0.5 text-primary" />
              G/F Mendiola Square, CM Recto, Brgy 390, Manila
            </div>
            <div className="flex items-center gap-2">
              <FaRegClock className="text-primary" />
              Open daily • 10:00 AM – 7:00 PM
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <Stat pill="2k+" label="Happy smiles" />
            <Stat pill="0%" label="Installments" />
            <Stat pill="7 days" label="Open weekly" />
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-secondary hover:bg-primary-hover transition"
            >
              <FaPhoneAlt /> Call {PHONE}
            </a>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white px-5 py-3 text-primary hover:bg-primary/10 transition"
            >
              <FaLocationArrow /> Get directions
            </a>
          </div>
        </div>

        {/* RIGHT: large image with floating badges */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/60 shadow-2xl backdrop-blur-xl">
            <img
              src={HERO}
              alt="DentalBraces team with patient"
              className="h-[440px] md:h-[560px] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/10 to-transparent" />
          </div>

          {/* Floating chips */}
          <div className="absolute right-3 -top-6 flex flex-col items-end gap-3 md:right-6">
            <div className="rounded-full bg-primary px-4 py-2 text-secondary shadow-xl">
              0% Installments
            </div>
            <div className="rounded-full border border-white/50 bg-white/85 px-4 py-2 text-[12px] text-neutral-800 shadow-md backdrop-blur">
              <FaCheckCircle className="inline -mt-1 mr-1 text-primary" />
              New patients welcome today
            </div>
          </div>

          <div className="absolute -left-3 bottom-6 hidden md:flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 text-neutral-800 shadow-lg backdrop-blur">
            <FaSmile className="text-primary" />
            Gentle, friendly dental care
          </div>
        </div>
      </div>
    </section>
  );
}

/* — small pill stat — */
function Stat({ pill, label }) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-center shadow-sm backdrop-blur">
      <p className="text-lg font-semibold text-neutral-900">{pill}</p>
      <p className="text-xs text-neutral-700">{label}</p>
    </div>
  );
}
