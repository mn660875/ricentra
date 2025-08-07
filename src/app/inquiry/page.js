"use client";

import { useState } from "react";
import Navbar from "../_components/Navbar";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    quantity: "",
    riceType: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Add backend/email logic here
    alert("Your enquiry has been sent. Thank you!");
  };

  return (
    <>
    <Navbar/>
    
    <section className="w-full px-5 md:px-16 py-5"  id="enquiry">
    <h1 className="headings text-2xl md:text-4xl font-bold tracking-tight">
          Export Inquiry{" "}
        </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mt-5 mx-auto grid gap-6 bg-light p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          className="p-3 rounded border border-gray-300"
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
          className="p-3 rounded border border-gray-300"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          required
          onChange={handleChange}
          className="p-3 rounded border border-gray-300"
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity Required (e.g., 50 tons)"
          required
          onChange={handleChange}
          className="p-3 rounded border border-gray-300"
        />
        <input
          type="text"
          name="riceType"
          placeholder="Type of Rice (e.g., Basmati, IRRI-6)"
          required
          onChange={handleChange}
          className="p-3 rounded border border-gray-300"
        />
        <input
          type="text"
          name="contact"
          placeholder="Phone / WhatsApp"
          required
          onChange={handleChange}
          className="p-3 rounded border border-gray-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
          className="p-3 rounded border border-gray-300"
        />
        <textarea
          name="message"
          placeholder="Additional Message (Optional)"
          rows={4}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300"
        ></textarea>

        <button
          type="submit"
          className="btn bg-[#db20d5]  inline-block font-semibold py-3 rounded text-white cursor-pointer transition-all"
        >
          Submit Enquiry
        </button>
      </form>
    </section>
    </>
  );
}
