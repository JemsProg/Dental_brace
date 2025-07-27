// src/pages/About.jsx
import React from "react";
import { ShieldCheck, Smile, AlignJustify, Heart } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Expert Care",
    text: "Our board-certified orthodontists use the latest 3D diagnostics and proven treatment techniques to straighten teeth efficiently and safely.",
  },
  {
    icon: Smile,
    title: "Patient Comfort",
    text: "Enjoy digital impressions, soothing office amenities, and gentle adjustment protocols designed to minimize discomfort and anxiety.",
  },
  {
    icon: AlignJustify,
    title: "Personalized Plans",
    text: "Every smile is unique. We craft individualized treatment plans—traditional braces or clear aligners—tailored to your goals and lifestyle.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    text: "Beyond the chair, we give back with school outreach, free screenings, and oral-health workshops to serve our neighbors.",
  },
];

const About = () => (
  <section id="about" className="py-20 ">
    <div className="max-w-4xl mx-auto px-6 md:px-0 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        About Dental Braces
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-12">
        Founded by a team of passionate orthodontic specialists, Dental Braces
        delivers state-of-the-art smile transformations in a warm, welcoming
        environment. From your first visit through ongoing maintenance, we
        prioritize comfort, transparency, and exceptional results. Whether you
        choose traditional braces or the latest clear aligner technology, our
        experts will guide you every step of the way—helping you achieve the
        confident, healthy smile you deserve.
      </p>
    </div>

    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 md:px-0 mb-12">
      {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
        <div
          key={title}
          className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg"
        >
          <Icon className="h-12 w-12 text-pink-500 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-center">{text}</p>
        </div>
      ))}
    </div>

    {/* Learn More button */}
    <div className="text-center">
      <a
        href="/about-us"
        className="inline-block bg-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow hover:bg-pink-600 transition"
      >
        Learn More About Us
      </a>
    </div>
  </section>
);

export default About;
