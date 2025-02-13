import React, { useState } from "react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // This will reset form after the submission
    setFormData({ name: "", email: "", phone: "", country: "" });
  };

  return (
    <section
      id="lead-form"
      className="bg-blue-600 text-white py-10 text-center"
    >
      <h2 className="text-3xl font-bold">Connect With Our Team</h2>
      <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-2 rounded mb-4 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-2 rounded mb-4 w-full"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="p-2 rounded mb-4 w-full"
        />
        <select
          name="country"
          required
          value={formData.country}
          onChange={handleChange}
          className="p-2 rounded mb-4 w-full text-gray-500"
        >
          <option value="">Select Country Preference</option>
          <option value="Russia">Russia</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Philippines">Philippines</option>
          <option value="Georgia">Georgia</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Egypt">Egypt</option>
        </select>
        <button
          type="submit"
          className="bg-white text-blue-600 py-2 px-4 rounded-full font-semibold"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default LeadForm;
