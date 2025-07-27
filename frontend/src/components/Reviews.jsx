// src/pages/Reviews.jsx
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// sample data
const REVIEWS = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    text: "Absolutely fantastic service! My smile has never looked better, and the team made me feel right at home.",
  },
  {
    id: 2,
    name: "Carlos Ramirez",
    avatar: "https://i.pravatar.cc/100?img=2",
    rating: 4,
    text: "Very professional and caring. The procedures were explained in detail, and I experienced minimal discomfort.",
  },
  {
    id: 3,
    name: "Emily Zhang",
    avatar: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    text: "They worked with my insurance, kept me on schedule, and the results speak for themselves. Highly recommended!",
  },
  {
    id: 4,
    name: "Michael O’Neil",
    avatar: "https://i.pravatar.cc/100?img=4",
    rating: 5,
    text: "State-of-the-art equipment, friendly atmosphere, and truly amazing results. My whole family goes here now.",
  },
  {
    id: 5,
    name: "Sana Patel",
    avatar: "https://i.pravatar.cc/100?img=5",
    rating: 4,
    text: "Great communication and very transparent pricing. I felt informed at every step of my treatment.",
  },
  {
    id: 6,
    name: "David Kim",
    avatar: "https://i.pravatar.cc/100?img=6",
    rating: 5,
    text: "The team is top-notch! From routine cleanings to cosmetic work, they do it all with care and precision.",
  },
];

// Framer Motion variants for container + items
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Reviews() {
  return (
    <section className="bg-[#f470bd] py-16 px-4">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Our Client Reviews</h1>
        <p className="mt-4 text-white">
          Don’t just take our word for it—see what our clients have to say.
        </p>
      </div>

      {/* Animated grid */}
      <motion.div
        className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {REVIEWS.map(({ id, name, avatar, rating, text }) => (
          <motion.div
            key={id}
            className="bg-white p-6 rounded-2xl shadow-md cursor-pointer"
            variants={item}
            whileHover={{
              scale: 1.03,
              rotateX: 2,
              rotateY: -2,
              boxShadow: "0px 20px 30px rgba(0,0,0,0.1)",
            }}
          >
            {/* Avatar & Name */}
            <div className="flex items-center mb-4">
              <img
                src={avatar}
                alt={name}
                className="w-12 h-12 rounded-full border-2 border-pink-500 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <div className="flex items-center mt-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                  {rating < 5 &&
                    Array.from({ length: 5 - rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gray-300" />
                    ))}
                </div>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 leading-relaxed">“{text}”</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
