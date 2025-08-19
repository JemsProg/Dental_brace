// src/components/home/Locations.jsx
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

/* Replace embedSrc/mapLink with your own if needed */
const BRANCHES = [
  {
    key: "manila",
    name: "Manila – Mendiola/Recto",
    address: "G/F Mendiola Square, CM Recto, Brgy 390, Manila",
    hours: "Mon–Sun • 10:00 AM – 7:00 PM",
    landmarks: ["Near CEU", "San Beda", "UE", "San Sebastian"],
    mapLink:
      "https://maps.google.com/?q=Mendiola%20Square%20CM%20Recto%20Manila",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9752816268688!2d120.98783597510612!3d14.600483985885898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9f9b57fcd93%3A0x4f09537dc6229411!2sDentalbraces%20Dental%20Clinic!5e0!3m2!1sen!2sph!4v1755116041142!5m2!1sen!2sph",
  },
];

export default function Locations() {
  const branch = BRANCHES[0];
  const [copied, setCopied] = useState(false);

  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const canSend = name.trim() && email.trim() && message.trim();

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(`${branch.name} — ${branch.address}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSend) return;
    // TODO: send to your backend/email service
    // fetch("/api/contact", {method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({name, email, message, branch: branch.key})})
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="contact" className="relative py-16">

      <div className="mx-auto max-w-screen-2xl px-4">
        {/* Heading */}
        <div className="flex items-start flex-wrap flex-col ">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Contact Us
          </h2>
          <p className="mt-2 text-neutral-700">
            Any questions or remarks? Write us a message—we’d love to help.
          </p>
        </div>

        {/* Form + Map */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Left: glass form card */}
          <div className="rounded-3xl border border-white/70 bg-white/85 p-6 md:p-8 shadow-xl backdrop-blur-xl">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-neutral-800">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter a valid email address"
                    className="mt-1 w-full rounded-full border border-neutral-200 bg-white px-4 py-2.5 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-800">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="mt-1 w-full rounded-full border border-neutral-200 bg-white px-4 py-2.5 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-800">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help?"
                  className="mt-1 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={!canSend}
                className="mt-2 w-full rounded-full bg-primary px-6 py-3 text-secondary hover:bg-primary-hover transition"
              >
                SUBMIT
              </button>

              {sent && (
                <p className="text-center text-sm text-primary mt-2">
                  Thanks! We’ve received your message and will get back shortly.
                </p>
              )}
            </form>

            {/* three info columns (icons + text) */}
            <div className="mt-8 flex flex-wrap items-start gap-10">
              <InfoItem
                icon={
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-secondary">
                    🦷
                  </div>
                }
                title="Clinic Hours"
                lines={[branch.hours]}
              />
              <InfoItem
                icon={
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-secondary">
                    <FaPhoneAlt />
                  </div>
                }
                title="Phone"
                lines={[PHONE]}
              />
              <InfoItem
                icon={
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-secondary">
                    <FaMapMarkerAlt />
                  </div>
                }
                title="Our Location"
                lines={[branch.address]}
              />
            </div>
          </div>

          {/* Right: live map + quick actions */}
          <div className="rounded-3xl overflow-hidden border border-white/30 bg-white/70 shadow-xl">
            <iframe
              src={branch.embedSrc}
              title={`${branch.name} map`}
              className="h-[520px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-wrap items-center gap-3 p-4">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-secondary hover:bg-primary-hover transition"
              >
                <FaPhoneAlt /> Call
              </a>
              <a
                href={branch.mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white px-3 py-2 text-primary hover:bg-primary/10 transition"
              >
                <FaLocationArrow /> Directions
              </a>
              <button
                onClick={copyAddress}
                className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-3 py-2 text-neutral-800 hover:bg-white transition"
              >
                {copied ? <FaCheck /> : <FaCopy />} {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        {/* landmarks pills */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-sm text-neutral-700">Landmarks:</span>
          {branch.landmarks.map((t) => (
            <span
              key={t}
              className="rounded-full bg-primary/10 px-2.5 py-1 text-[12px] text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, title, lines = [] }) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        {lines.map((l, i) => (
          <p key={i} className="text-sm text-neutral-700">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}
