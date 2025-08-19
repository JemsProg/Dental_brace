// src/data/services.js
import { FaTooth, FaTeethOpen, FaSmile, FaTeeth } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";

export const ServicesData = [
  // Teeth Straightening
  {
    title: "Braces for Straighter Teeth",
    category: "Teeth Straightening",
    icon: FaTeethOpen,
    desc: "Gently moves teeth into the right place for a better smile and bite.",
    features: [
      "Free check & price quote",
      "Monthly adjustments",
      "0% bank plans",
    ],
    featured: true,
  },
  {
    title: "Clear Aligners (Nearly Invisible)",
    category: "Teeth Straightening",
    icon: FaTeethOpen,
    desc: "Removable, clear trays that align teeth with comfort and discretion.",
    features: ["Easy to remove", "Digital checks", "Fewer clinic visits"],
  },
  {
    title: "Retainers (Keep Your Smile Straight)",
    category: "Teeth Straightening",
    icon: FaTeethOpen,
    desc: "Holds teeth in their new position after braces or aligners.",
    features: ["Custom-fit", "Clear or wire options", "Quick fitting"],
  },

  // Fix Damaged Teeth
  {
    title: "Crowns & Bridges",
    category: "Fix Damaged Teeth",
    icon: FaTooth,
    desc: "Covers broken teeth and fills gaps with fixed teeth that look natural.",
    features: ["Shade matched", "Chew comfortably", "2–3 short visits"],
    featured: true,
  },
  {
    title: "Tooth-Colored Fillings",
    category: "Fix Damaged Teeth",
    icon: FaTooth,
    desc: "Seals cavities using natural-looking composite fillings.",
    features: ["Shade-matched", "Preserves tooth", "Same-day fix"],
  },
  {
    title: "Root Canal (Save the Tooth)",
    category: "Fix Damaged Teeth",
    icon: FaTooth,
    desc: "Removes infection and pain while keeping your tooth.",
    features: ["Pain relief focused", "X-ray guided", "Crown if needed"],
  },

  // Replace Missing Teeth
  {
    title: "Dentures (Removable Teeth)",
    category: "Replace Missing Teeth",
    icon: FaSmile,
    desc: "Natural-looking teeth you can remove and clean easily.",
    features: ["Partial or full", "Trial fitting", "Lightweight options"],
    featured: true,
  },
  {
    title: "Dental Implants (Partner Specialist)",
    category: "Replace Missing Teeth",
    icon: FaTooth,
    desc: "Fixed, natural-feeling replacement (specialist referral).",
    features: ["Long-term solution", "Looks & feels real", "Single/multiple"],
  },

  // Keep Teeth Healthy
  {
    title: "Deep Clean & Checkup",
    category: "Keep Teeth Healthy",
    icon: GiToothbrush,
    desc: "Removes plaque & stains, plus a full mouth check.",
    features: ["Gentle polish", "Cavity & gum check", "Fluoride option"],
    featured: true,
  },
  {
    title: "Gum Treatment (Deep Scaling)",
    category: "Keep Teeth Healthy",
    icon: GiToothbrush,
    desc: "Deep cleaning under the gumline to treat gum disease.",
    features: ["Stops bleeding gums", "Pain-managed", "Follow-up care"],
  },
  {
    title: "Wisdom Tooth Removal",
    category: "Keep Teeth Healthy",
    icon: FaTooth,
    desc: "Removes problem wisdom teeth to prevent pain and crowding.",
    features: ["X-ray assessment", "Local anesthesia", "Aftercare guide"],
  },

  // Smile Makeover
  {
    title: "Veneers (Quick Smile Upgrade)",
    category: "Smile Makeover",
    icon: FaTeeth,
    desc: "Thin covers to fix chips, stains, or small gaps.",
    features: ["Preview your smile", "Fast results", "Stain-resistant"],
    featured: true,
  },
  {
    title: "Teeth Whitening (Pro Clinic)",
    category: "Smile Makeover",
    icon: FaSmile,
    desc: "Brighten your smile safely with in-clinic whitening.",
    features: ["1-visit results", "Safe for enamel", "Take-home kit"],
  },
  {
    title: "Cosmetic Bonding",
    category: "Smile Makeover",
    icon: FaTeeth,
    desc: "Builds up chipped or uneven edges for symmetry.",
    features: ["One-visit", "Shade-matched", "Budget-friendly"],
  },

  // Kids & Family
  {
    title: "Kids’ Checkups & Sealants",
    category: "Kids & Family",
    icon: FaSmile,
    desc: "Gentle visits to keep kids’ teeth healthy and cavity-free.",
    features: ["Fluoride & sealants", "Kid-friendly", "Parent tips"],
  },
];
