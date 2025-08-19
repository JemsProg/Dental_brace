// src/components/about/ClinicMap.jsx
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaRegClock,
  FaPhoneAlt,
  FaCopy,
  FaCheck,
  FaLocationArrow,
} from "react-icons/fa";

const PHONE = "+639151777222";
const BRANCH = {
  name: "Manila – Mendiola/Recto",
  address: "G/F Mendiola Square, CM Recto, Brgy 390, Manila",
  hours: "Mon–Sun • 10:00 AM – 7:00 PM",
  mapLink: "https://maps.google.com/?q=Mendiola%20Square%20CM%20Recto%20Manila",
  embedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9752816268688!2d120.98783597510612!3d14.600483985885898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9f9b57fcd93%3A0x4f09537dc6229411!2sDentalbraces%20Dental%20Clinic!5e0!3m2!1sen!2sph!4v1755116041142!5m2!1sen!2sph",
  landmarks: ["Near CEU", "San Beda", "UE", "San Sebastian"],
};

export default function ClinicMap() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(`${BRANCH.name} — ${BRANCH.address}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* no-op */
    }
  };

  return (
    <section id="location" className="py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
        {/* Info + actions */}
        <div className="rounded-3xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur-xl transition hover:shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
            {BRANCH.name}
          </h2>

          <p className="mt-3 flex items-start gap-2 text-neutral-800">
            <FaMapMarkerAlt className="mt-0.5 text-primary" />
            <span>{BRANCH.address}</span>
          </p>
          <p className="mt-1 flex items-center gap-2 text-neutral-800">
            <FaRegClock className="text-primary" />
            <span>{BRANCH.hours}</span>
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {BRANCH.landmarks.map((t) => (
              <span
                key={t}
                className="rounded-full bg-primary/10 px-2.5 py-1 text-[12px] text-primary"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-secondary transition hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              <FaPhoneAlt /> Call {PHONE}
            </a>

            <a
              href={BRANCH.mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-secondary/80 px-5 py-3 text-primary transition hover:-translate-y-0.5 hover:bg-primary/10"
              title="Open in Google Maps"
            >
              <FaLocationArrow /> Directions
            </a>

            <button
              onClick={copyAddress}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 px-5 py-3 text-neutral-800 transition hover:-translate-y-0.5 hover:bg-white"
              title="Copy address"
              aria-live="polite"
            >
              {copied ? <FaCheck className="text-primary" /> : <FaCopy />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-3xl overflow-hidden border border-white/30 bg-white/70 shadow-xl transition hover:shadow-2xl">
          <iframe
            src={BRANCH.embedSrc}
            title="DentalBraces Mendiola Map"
            className="h-[420px] w-full md:h-[520px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
