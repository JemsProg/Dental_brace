// src/components/Services.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  Smile,
  AlignJustify,
  Baby,
  Wrench,
  AlertCircle,
} from "lucide-react";

const SERVICES = [
  {
    title: "Preventive Dentistry",
    description:
      "Routine cleanings, exams, and fluoride treatments to stop decay before it starts.",
    icon: ShieldCheck,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Teeth whitening, veneers, and bonding to give you a brighter, more confident smile.",
    icon: Smile,
  },
  {
    title: "Orthodontics",
    description:
      "Traditional braces and clear aligners to straighten teeth and correct bite issues.",
    icon: AlignJustify,
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Gentle, kid-friendly care including sealants, exams, and growth monitoring.",
    icon: Baby,
  },
  {
    title: "Dental Implants",
    description:
      "Permanent, lifelike replacement teeth anchored securely into your jawbone.",
    icon: Wrench,
  },
  {
    title: "Emergency Care",
    description:
      "Same-day appointments for toothaches, knocks, and other urgent dental issues.",
    icon: AlertCircle,
  },
];

// card w-80 (20rem = 320px) + px-6 (1.5rem each side = 48px) = 368px
const CARD_WIDTH = 368;

const Services = () => {
  const [current, setCurrent] = useState(0);
  const count = SERVICES.length;
  const intervalRef = useRef(null);

  const prev = () => setCurrent((i) => (i - 1 + count) % count);
  const next = () => setCurrent((i) => (i + 1) % count);

  useEffect(() => {
    intervalRef.current = setInterval(next, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const offsetFor = (idx) => {
    const raw = (idx - current + count) % count;
    return raw > count / 2 ? raw - count : raw;
  };

  return (
    <section id="services" className="">
      <div className="max-w-full mx-auto px-6 lg:px-8">
        <div className="relative w-full h-96 overflow-hidden">
          {SERVICES.map(({ title, description, icon: Icon }, idx) => {
            const offset = offsetFor(idx) * CARD_WIDTH;
            const isActive = idx === current;

            return (
              <div
                key={idx}
                className="absolute top-1/2 left-1/2 transition-all duration-500 ease-in-out"
                style={{
                  transform: `translate(-50%, -50%) translateX(${offset}px) scale(${
                    isActive ? 1.5 : 1
                  })`,
                  zIndex: isActive ? 10 : 1,
                  filter: isActive ? "none" : "blur(3px)",
                }}
              >
                <div
                  className={`
                    w-80 p-6 bg-white bg-opacity-90 backdrop-blur-sm 
                    rounded-2xl shadow-lg flex flex-col items-start text-left
                    transition-transform hover:scale-105
                  `}
                >
                  <div className="bg-pink-50 rounded-full p-3 mb-4">
                    <Icon size={32} className="text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <a
                    href="#contact"
                    className="mt-auto text-pink-500 font-medium hover:underline"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            );
          })}

          <button
            onClick={() => {
              prev();
              clearInterval(intervalRef.current);
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 
                       bg-pink-800 text-white w-12 h-12 flex items-center justify-center 
                       rounded-full shadow-lg hover:bg-pink-700 transition z-20"
          >
            ‹
          </button>
          <button
            onClick={() => {
              next();
              clearInterval(intervalRef.current);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 
                       bg-pink-800 text-white w-12 h-12 flex items-center justify-center 
                       rounded-full shadow-lg hover:bg-pink-700 transition z-20"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
