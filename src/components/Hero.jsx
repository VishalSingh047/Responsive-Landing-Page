import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20 text-center">
      <h1 className="text-4xl font-bold">Apply Now for MBBS Abroad</h1>
      <p className="mt-4">
        Start your journey towards a successful medical career.
      </p>
      <a
        href="#lead-form"
        className="mt-6 inline-block bg-white text-blue-600 py-2 px-4 rounded-full font-semibold"
      >
        Get Started
      </a>
    </section>
  );
};

export default Hero;
