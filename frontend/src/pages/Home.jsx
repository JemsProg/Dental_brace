import React from "react";
import Bg_img from "../assets/bg_dental.svg";
import Hero_img from "../assets/hero_page.png";
import Services from "../components/Services";
import About from "../components/About";
import Reviews from "../components/Reviews";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      {/* Background waves */}
      <img
        src={Bg_img}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 ">
        {/* Left Text Panel */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Your Smile, Our Mission
          </h1>
          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            At Dental Brance, we believe that a healthy, confident smile can
            change everything. That’s why our team of experienced and
            compassionate dentists is committed to providing top-quality dental
            care tailored to your needs. Whether it’s a routine check-up or a
            complete smile makeover, we make your comfort, health, and happiness
            our top priority.
          </p>
          <button className="mt-6 bg-white text-pink-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>

        {/* Right Image Panel */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <img
            src={Hero_img}
            alt="Dentist at work"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Services Section (natural flow, no overlap) */}
      <section className="relative z-20 -mt-60 ">
        <Services />
        <About />
      </section>

      <Reviews />
      <ContactUs />
    </>
  );
};

export default Home;
