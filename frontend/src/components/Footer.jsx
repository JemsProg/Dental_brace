// src/components/Footer.jsx
import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f470bd] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About & Branding */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Dental Braces</h3>
          <p className="text-gray-100 leading-relaxed">
            At Dental Braces, our mission is to bring out your best smile with
            expert care and the latest orthodontic technology, all in a warm,
            welcoming environment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Reviews", "Contact"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>

          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-gray-100 mt-1 mr-3" />
            <p>G/F B1-1A Mendiola Square, CM Recto, Manila, Philippines</p>
          </div>

          <div className="flex items-center">
            <Phone className="w-5 h-5 text-gray-100 mr-3" />
            <a href="tel:09151777222" className="hover:underline">
              0915.1.777.222
            </a>
          </div>

          <div className="flex items-center">
            <Mail className="w-5 h-5 text-gray-100 mr-3" />
            <a href="mailto:info@dentalbraces.com" className="hover:underline">
              info@dentalbraces.com
            </a>
          </div>

          <div className="flex items-center">
            <Clock className="w-5 h-5 text-gray-100 mr-3" />
            <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/DENTALBRACES19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 mt-12" />

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-100">
        &copy; {new Date().getFullYear()} Dental Braces. All rights reserved.
      </div>
    </footer>
  );
}
