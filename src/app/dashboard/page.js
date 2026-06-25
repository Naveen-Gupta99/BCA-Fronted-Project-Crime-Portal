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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.crimeType ||
      !formData.location ||
      !formData.description
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    setMessage("Complaint submitted successfully!");

    console.log(formData);

    setFormData({
      name: "",
      crimeType: "",
      location: "",
      description: "",
    });
  };

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white rounded-2xl p-8 shadow-xl mb-8">
          <h1 className="text-4xl font-bold">
            User Dashboard
          </h1>

          <p className="mt-3 text-blue-100">
            Welcome to the Online Crime Reporting Portal.
            Submit your complaint below.
          </p>
        </div>

        {/* Complaint Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Report a Crime
          </h2>

          {message && (
            <div className="mb-5 bg-green-100 border border-green-400 text-green-700 p-3 rounded-lg">
              {message}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Crime Type
              </label>

              <select
                name="crimeType"
                value={formData.crimeType}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="">
                  Select Crime Type
                </option>

                <option>Cyber Crime</option>
                <option>Fraud</option>
                <option>Harassment</option>
                <option>Theft</option>
                <option>Women Safety</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Incident Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter incident location"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Description
              </label>

              <textarea
                rows="6"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the incident in detail..."
                className="w-full border rounded-lg p-3"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Submit Complaint
            </button>
          </form>
        </div>

       

      </div>
    </main>
  );
}