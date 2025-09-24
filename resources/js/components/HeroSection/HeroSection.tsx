import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="grid gap-12 lg:grid-cols-2 lg:items-center px-6 lg:px-16 py-12 font-poppins">
      {/* Text Content */}
      <div>
        <h1 className="mb-4 text-4xl font-semibold leading-tight">
          Learn with Us
        </h1>
        <p className="mb-6 max-w-2xl text-gray-600">
          Unlock your potential with high-quality courses, expert instructors,
          and hands-on learning experiences. Join us today and start your
          journey.
        </p>
        <div className="flex gap-4">
          <a
            href="#courses"
            className="inline-block rounded-md bg-[#1e90ff] px-5 py-2 text-white hover:bg-blue-600 transition"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="inline-block rounded-md border border-gray-200 px-5 py-2 text-sm text-gray-700 hover:border-gray-400 transition"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex items-center justify-center">
        <img
          src="/images/education.png"
          alt="illustration"
          className="h-64 w-auto object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
