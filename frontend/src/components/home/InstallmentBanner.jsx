// src/components/home/InstallmentBanner.jsx
import { useMemo, useState } from "react";
import {
  FaCreditCard,
  FaCheckCircle,
  FaShieldAlt,
  FaPhoneAlt,
  FaInfoCircle,
} from "react-icons/fa";

const TERMS = [3, 6, 9, 12];
const PHONE = "+639151777222";
const SERVICE_OPTIONS = [
  "Braces",
  "Clear Aligners",
  "Crowns & Bridges",
  "Dentures",
  "Deep Clean & Checkup",
  "Root Canal",
  "Veneers",
  "Teeth Whitening",
  "Wisdom Tooth Removal",
];

export default function InstallmentBanner() {
  const [amount, setAmount] = useState(15000);
  const [months, setMonths] = useState(12);
  const [showHow, setShowHow] = useState(false);
  const [openQuote, setOpenQuote] = useState(false);

  // currency formatter (₱)
  const peso = useMemo(
    () =>
      new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
        maximumFractionDigits: 0,
      }),
    []
  );

  const safeAmount = Number.isFinite(amount) && amount > 0 ? amount : 0;
  const monthly = months > 0 ? Math.ceil(safeAmount / months) : 0;

  return (
    <section className="relative py-20">
    
      <div className="mx-auto max-w-screen-2xl px-4">
        {/* Glass wrapper */}
        <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-6 md:p-10 backdrop-blur-xl shadow-xl ring-1 ring-primary/20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-primary/5" />

          <div className="relative grid gap-10 md:grid-cols-2">
            {/* LEFT: messaging + benefits */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Flexible payments
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-neutral-900">
                Easy monthly plans — up to{" "}
                <span className="text-primary">12 months</span>
              </h3>
              <p className="mt-2 text-neutral-700">
                Get the care you need now and pay in simple monthly amounts.
                Quick screening, no hidden fees.
              </p>

              {/* benefits */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Benefit icon={<FaCheckCircle />} label="No hidden charges" />
                <Benefit icon={<FaShieldAlt />} label="Fast screening" />
                <Benefit icon={<FaCreditCard />} label="Use your bank card" />
              </div>

              {/* small FAQ toggle */}
              <button
                onClick={() => setShowHow((s) => !s)}
                className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <FaInfoCircle />{" "}
                {showHow ? "Hide details" : "How installments work"}
              </button>

              {showHow && (
                <ul className="mt-3 space-y-2 text-sm text-neutral-800">
                  <li>
                    1) We verify your ID and card at the clinic or via message.
                  </li>
                  <li>2) Choose a plan (3, 6, 9, or 12 months).</li>
                  <li>
                    3) Pay the first month; the rest are auto-billed monthly.
                  </li>
                </ul>
              )}

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => setOpenQuote(true)}
                  className="rounded-full bg-primary px-5 py-3 text-secondary hover:bg-primary-hover transition"
                >
                  Book free check & quote
                </button>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-primary hover:bg-primary/10 transition"
                >
                  <FaPhoneAlt /> Call {PHONE}
                </a>
              </div>
            </div>

            {/* RIGHT: mini calculator card */}
            <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-lg backdrop-blur-xl">
              <h4 className="text-lg font-semibold text-neutral-900">
                Sample monthly plan
              </h4>
              <p className="text-sm text-neutral-600">
                Guide only. Final amounts depend on your treatment plan and bank
                approval.
              </p>

              {/* amount input */}
              <label className="mt-4 block text-sm font-medium text-neutral-800">
                Estimated treatment cost
              </label>
              <div className="mt-1 flex items-center rounded-xl border border-neutral-200 bg-white">
                <span className="px-3 text-neutral-500">₱</span>
                <input
                  type="number"
                  min={0}
                  value={safeAmount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  className="w-full rounded-r-xl px-3 py-2 text-neutral-900 outline-none"
                  placeholder="15000"
                />
              </div>

              {/* term selector */}
              <label className="mt-4 block text-sm font-medium text-neutral-800">
                Choose months
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {TERMS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setMonths(t)}
                    className={[
                      "rounded-full px-3 py-1.5 text-sm transition",
                      months === t
                        ? "bg-primary text-secondary"
                        : "bg-primary/10 text-primary hover:bg-primary/15",
                    ].join(" ")}
                  >
                    {t} mo.
                  </button>
                ))}
              </div>

              {/* result */}
              <div
                className="mt-5 rounded-xl bg-accent/70 p-4 text-center"
                aria-live="polite"
              >
                <p className="text-sm text-neutral-700">Approximate monthly</p>
                <p className="mt-1 text-3xl font-bold text-primary">
                  {peso.format(monthly)}
                </p>
              </div>

              <div className="mt-3 text-xs text-neutral-600">
                * Plans vary by bank. Fees may apply for missed payments.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote modal */}
      {openQuote && (
        <QuoteModal
          onClose={() => setOpenQuote(false)}
          preset={{ amount: safeAmount, months }}
        />
      )}
    </section>
  );
}

function Benefit({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white/80 px-3 py-2">
      <span className="text-primary">{icon}</span>
      <span className="text-sm text-neutral-800">{label}</span>
    </div>
  );
}

/* ------ Quote Modal (simple lead form) ------ */
function QuoteModal({ onClose, preset }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [amount, setAmount] = useState(preset?.amount ?? 15000);
  const [months, setMonths] = useState(preset?.months ?? 12);
  const [notes, setNotes] = useState("");

  const canSend = name && mobile;

  const submit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      mobile,
      service,
      amount: Number(amount),
      months: Number(months),
      notes,
      ts: new Date().toISOString(),
      source: "quote-modal",
    };
    // TODO: send to your backend/email
    // await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });

    onClose();
    alert("Thanks! We’ll get back to you shortly with a quote.");
  };

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <form
        onSubmit={submit}
        className="relative w-full max-w-lg rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl"
      >
        <h3 className="text-2xl font-bold text-neutral-900">
          Book free check & quote
        </h3>
        <p className="mt-1 text-sm text-neutral-700">
          Leave your details and we’ll confirm a time.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-neutral-800">
              Full name
            </label>
            <input
              className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Juan Dela Cruz"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-800">
              Mobile number
            </label>
            <input
              className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="0917 123 4567"
              required
            />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-neutral-800">
              Service
            </label>
            <select
              className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-800">
              Months (optional)
            </label>
            <select
              className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
            >
              {[3, 6, 9, 12].map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-neutral-800">
              Est. amount (optional)
            </label>
            <div className="mt-1 flex items-center rounded-xl border border-neutral-200 bg-white">
              <span className="px-3 text-neutral-500">₱</span>
              <input
                type="number"
                min={0}
                className="w-full rounded-r-xl px-3 py-2 outline-none"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-800">
              Preferred date/time
            </label>
            <input
              type="datetime-local"
              className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none"
            />
          </div>
        </div>

        <label className="mt-3 block text-sm font-medium text-neutral-800">
          Notes (optional)
        </label>
        <textarea
          rows={3}
          className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none"
          placeholder="Any concerns or questions?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <div className="mt-5 flex gap-3">
          <button
            type="submit"
            disabled={!canSend}
            className="rounded-xl bg-primary px-5 py-2.5 text-secondary hover:bg-primary-hover disabled:opacity-60"
          >
            Send request
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-neutral-800 hover:bg-neutral-100"
          >
            Cancel
          </button>
        </div>

        <p className="pt-2 text-xs text-neutral-600">
          We’ll confirm your schedule by call or message. No commitments until
          you approve the plan.
        </p>
      </form>
    </div>
  );
}
