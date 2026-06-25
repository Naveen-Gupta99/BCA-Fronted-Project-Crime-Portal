"use client";

import { useState } from "react";

export default function Dashboard() {
  const [formData, setFormData] = useState({
    name: "",
    crimeType: "",
    location: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (
      !formData.name ||
      !formData.crimeType ||
      !formData.location ||
      !formData.description
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/complaints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || "Complaint submitted successfully!");

        setFormData({
          name: "",
          crimeType: "",
          location: "",
          description: "",
        });
      } else {
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      setMessage("Server error");
    }
  };

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto">

        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white rounded-2xl p-8 shadow-xl mb-8">
          <h1 className="text-4xl font-bold">User Dashboard</h1>
          <p className="mt-3 text-blue-100">
            Welcome to the Online Crime Reporting Portal.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Report a Crime
          </h2>

          {message && (
            <div className="mb-5 bg-green-100 border border-green-400 text-green-700 p-3 rounded-lg">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
            />

            <select
              name="crimeType"
              value={formData.crimeType}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              <option value="">Select Crime Type</option>
              <option>Cyber Crime</option>
              <option>Fraud</option>
              <option>Harassment</option>
              <option>Theft</option>
              <option>Women Safety</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg"
            >
              Submit Complaint
            </button>

          </form>

        </div>
      </div>
    </main>
  );
}