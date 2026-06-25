"use client";

import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const [error, setError] = useState("");

  const num1 = 8;
  const num2 = 5;

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // Mobile Validation
    if (!/^\d{10}$/.test(mobile)) {
      setError("Mobile number must be exactly 10 digits.");
      return;
    }

    // Password Length
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Register Validation
    if (!isLogin) {
      if (fullName.trim().length < 3) {
        setError("Please enter a valid full name.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
    }

    // Captcha Validation
    if (Number(captchaAnswer) !== num1 + num2) {
      setError("Incorrect captcha answer.");
      return;
    }

    alert(isLogin ? "Login Successful!" : "Registration Successful!");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-6 text-center">
          <h1 className="text-3xl font-bold">
            {isLogin ? "Login" : "Register"}
          </h1>

          <p className="text-blue-100 mt-2">
            Online Crime Reporting Portal
          </p>
        </div>

        {/* Form */}
        <div className="p-8">

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {!isLogin && (
              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter Full Name"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            )}

            {/* Mobile */}
            <div>
              <label className="block mb-2 font-medium">
                Mobile Number
              </label>

              <input
                type="tel"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, ""))
                }
                maxLength={10}
                placeholder="Enter Mobile Number"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Confirm Password */}
            {!isLogin && (
              <div>
                <label className="block mb-2 font-medium">
                  Confirm Password
                </label>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  placeholder="Confirm Password"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            )}

            {/* Captcha */}
            <div>
              <label className="block mb-2 font-medium">
                Security Verification
              </label>

              <div className="bg-gray-100 text-center p-3 rounded-lg text-xl font-bold mb-3">
                {num1} + {num2} = ?
              </div>

              <input
                type="number"
                value={captchaAnswer}
                onChange={(e) =>
                  setCaptchaAnswer(e.target.value)
                }
                placeholder="Enter Answer"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
            >
              {isLogin ? "Login" : "Register"}
            </button>

          </form>

          {/* Toggle */}
          <div className="text-center mt-6">
            {isLogin ? (
              <>
                <span className="text-gray-600">
                  Dont have an account?
                </span>

                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(false);
                    setError("");
                  }}
                  className="ml-2 text-blue-700 font-semibold hover:underline"
                >
                  Register Here
                </button>
              </>
            ) : (
              <>
                <span className="text-gray-600">
                  Already have an account?
                </span>

                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(true);
                    setError("");
                  }}
                  className="ml-2 text-blue-700 font-semibold hover:underline"
                >
                  Login Here
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}