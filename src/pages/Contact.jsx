// src/pages/ContactPage.jsx
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate with an API or EmailJS here
    console.log("Form submitted:", form);
    alert("Thanks for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="p-10 max-w-xl mx-auto text-gray-800">
      <h1 className="text-4xl mx-auto text-center font-bold mb-6">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded h-62"
        ></textarea>
        <div className="items-center text-center ">
          <button
            type="submit"
            className="bg-gray-700 text-white px-12 py-3  hover:bg-black transition duration-200 cursor-pointer rounded-xl"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
