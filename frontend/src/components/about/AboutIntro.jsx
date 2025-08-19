// src/components/about/AboutIntro.jsx
import { useMemo } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTooth,
  FaShieldAlt,
  FaPercent,
  FaCheckCircle,
  FaBuilding,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const SOCIAL = {
  fbLikes: 24748,
  talking: 475,
  wereHere: 284,
  fbHandle: "DentalBraces19",
  igHandle: "@dentalbraces19",
};

const BRANCHES = [
  {
    name: "Main — Mendiola/Recto, Manila",
    address:
      "2138 G/F B1-1A Mendiola Square, CM Recto, Brgy. 390, Metro Manila",
    landmark: "Near CEU, San Beda, UE, San Sebastian College",
  },
  {
    name: "Binangonan, Rizal",
    address: "Manila East Road, Pag-asa (opposite UNIOIL), Binangonan, Rizal",
    landmark: "Along Manila East Road",
  },
];

const CONTACT = {
  phones: ["0915-177-7222", "0945-289-1777"],
  email: "dentalbraces19@gmail.com",
};

const SERVICES = [
  "Oral prophylaxis (teeth cleaning)",
  "Simple extractions (“bunot”)",
  "Restorations (“pasta”)",
  "Fluoride application",
  "Veneers",
  "Fixed bridges",
  "Braces",
  "Dentures",
];

const HMOS = [
  "Cocolife",
  "EastWest",
  "Valucare",
  "Maxicare",
  "Health Partners",
];

export default function AboutIntro() {
  // chips for value props
  const valueProps = useMemo(
    () => [
      { icon: <FaShieldAlt />, label: "Warranty on services" },
      { icon: <FaPercent />, label: "0% up to 12 months (BPI)" },
      { icon: <FaCheckCircle />, label: "High-quality, affordable care" },
      { icon: <FaCheckCircle />, label: "No price increase" },
    ],
    []
  );

  return (
    <section className="relative py-14">
 

      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {/* LEFT: story + services */}
          <article className="md:col-span-2 rp-6 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-primary text-xs">
              <FaTooth /> About our clinic
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-900">
              Who we are
            </h2>
            <p className="mt-2 text-neutral-700">
              <strong>DentalBraces</strong> is a patient-first clinic based in
              Mendiola/Recto, Manila (with a branch in Binangonan, Rizal). We
              keep things simple: clear options, fair pricing, and a calm,
              friendly visit—every time.
            </p>
            <p className="mt-2 text-neutral-700">
              We handle everyday care like cleaning, checks, fillings and
              extractions, plus smile upgrades such as braces, veneers, fixed
              bridges, and dentures. We explain everything in plain language,
              not dental jargon.
            </p>

            {/* value props */}
            <div className="mt-4 flex flex-wrap gap-2">
              {valueProps.map((v) => (
                <span
                  key={v.label}
                  className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary text-sm"
                >
                  {v.icon} {v.label}
                </span>
              ))}
            </div>

            {/* Services list */}
            <div className="mt-6 rounded-2xl border border-white/70 bg-white/80 p-4">
              <p className="text-sm font-semibold text-neutral-900">
                Services we offer
              </p>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 text-sm text-neutral-800"
                  >
                    <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* RIGHT: snapshot */}
          <aside className="space-y-4">
            {/* Social presence */}
            <div className="rounded-2xl border border-white/70 bg-white/85 p-5 shadow-md backdrop-blur-xl">
              <p className="text-xs uppercase tracking-wider text-neutral-600">
                Social presence
              </p>
              <div className="mt-2 flex items-center gap-3 text-neutral-900">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
                  <FaFacebook /> {SOCIAL.fbHandle}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
                  <FaInstagram /> {SOCIAL.igHandle}
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <Stat label="Likes" value={SOCIAL.fbLikes.toLocaleString()} />
                <Stat label="Talking" value={SOCIAL.talking.toLocaleString()} />
                <Stat
                  label="Were here"
                  value={SOCIAL.wereHere.toLocaleString()}
                />
              </div>
            </div>

            {/* Branches */}
            <div className="rounded-2xl border border-white/70 bg-white/85 p-5 shadow-md backdrop-blur-xl">
              <p className="text-xs uppercase tracking-wider text-neutral-600">
                Branches
              </p>
              <ul className="mt-2 space-y-3">
                {BRANCHES.map((b) => (
                  <li key={b.name} className="text-sm text-neutral-800">
                    <p className="font-semibold text-neutral-900 flex items-center gap-2">
                      <FaBuilding className="text-primary" /> {b.name}
                    </p>
                    <p className="mt-1 flex items-start gap-2">
                      <FaMapMarkerAlt className="mt-0.5 text-primary" />
                      <span>{b.address}</span>
                    </p>
                    <p className="mt-1 text-neutral-700">{b.landmark}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* At a glance */}
            <div className="rounded-2xl border border-white/70 bg-white/85 p-5 shadow-md backdrop-blur-xl">
              <p className="text-xs uppercase tracking-wider text-neutral-600">
                At a glance
              </p>
              <ul className="mt-2 space-y-2 text-sm text-neutral-800">
                <li className="flex items-center gap-2">
                  <FaPhoneAlt className="text-primary" />
                  {CONTACT.phones.join(" / ")}
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-primary" />
                  {CONTACT.email}
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-primary" />
                  HMOs: {HMOS.join(", ")}
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* small stat pill */
function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/80 px-3 py-2">
      <p className="text-base font-semibold text-neutral-900">{value}</p>
      <p className="text-[11px] text-neutral-700">{label}</p>
    </div>
  );
}
