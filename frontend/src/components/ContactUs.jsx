// src/components/ContactUs.jsx
import React from "react";
import { Phone, Mail } from "lucide-react";

const ContactUs = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Map */}
        <div className="w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden shadow">
          <iframe
            title="Dental Braces Location"
            src="https://maps.google.com/maps?q=14.599377055535,120.99081059265&z=15&output=embed"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Contact details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
          <div className="flex items-center">
            <Phone className="w-6 h-6 text-pink-500 mr-4" />
            <a
              href="tel:0915.1.777.222"
              className="text-lg text-gray-800 hover:text-pink-500 transition"
            >
              0915.1.777.222
            </a>
          </div>

          <div className="flex items-center">
            <Mail className="w-6 h-6 text-pink-500 mr-4" />
            <a
              href="mailto:info@dentalbraces.com"
              className="text-lg text-gray-800 hover:text-pink-500 transition"
            >
              info@dentalbraces.com
            </a>
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-pink-500 mr-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99H7.898v-2.889h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.889h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
            </svg>
            <a
              href="https://www.facebook.com/DENTALBRACES19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-800 hover:text-pink-500 transition"
            >
              facebook.com/DENTALBRACES19
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
