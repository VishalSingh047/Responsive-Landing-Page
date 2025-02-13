import React from "react";

const countries = [
  "Russia",
  "Uzbekistan",
  "Kazakhstan",
  "Philippines",
  "Georgia",
  "Kyrgyzstan",
  "Egypt",
];

const Countries = () => {
  return (
    <section className="bg-gray-200 py-20 px-10 text-center">
      <h2 className="text-3xl font-bold">Top Countries to Study MBBS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-full shadow transition duration-300 transform hover:bg-blue-500 hover:text-white hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{country}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countries;
