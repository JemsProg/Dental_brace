import React, { useState } from "react";
import Dental_logo from "../assets/dental_logo.png";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="flex items-center justify-between p-4 px-6 md:px-20">
        {/* Logo on the left */}
        <a href="#home" className="flex items-center">
          <img
            src={Dental_logo}
            alt="Dental Braces Logo"
            className="h-12 w-auto"
          />
          <span className="ml-3 text-2xl font-bold text-white">
            Dental Braces
          </span>
        </a>

        {/* Desktop nav */}
        <nav>
          <ul className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-blue-500 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {menuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col space-y-4 p-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-gray-600 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-blue-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
