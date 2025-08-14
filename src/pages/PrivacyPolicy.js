import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white/10 backdrop-blur-md text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-yellow-300">🔒 Privacy Policy</h1>

        <p className="mb-4">
          Welcome to <strong>EventPulse</strong> 🎉! Your privacy is extremely important to us.
          This Privacy Policy explains how we collect, use, and protect your personal information
          when you use our platform. By using EventPulse, you agree to the practices outlined here.
        </p>

        <h2 className="text-2xl font-semibold mb-2">📌 1. Information We Collect</h2>
        <p className="mb-4">
          We may collect details like your name, email address, event preferences, and usage activity
          on our platform. This helps us tailor the experience for you and provide relevant updates.
        </p>

        <h2 className="text-2xl font-semibold mb-2">📌 2. How We Use Your Information</h2>
        <p className="mb-4">
          Your data is used for enhancing your event experience, sending event reminders 📅, enabling
          smooth ticket bookings 🎟️, and improving our service. We never sell your personal data.
        </p>

        <h2 className="text-2xl font-semibold mb-2">📌 3. Data Protection</h2>
        <p className="mb-4">
          We use strong encryption 🔐, secure servers, and strict access controls to ensure your
          information stays safe.
        </p>

        <h2 className="text-2xl font-semibold mb-2">📌 4. Cookies Policy</h2>
        <p className="mb-4">
          EventPulse uses cookies 🍪 to enhance user experience and remember your preferences.
        </p>

        <h2 className="text-2xl font-semibold mb-2">📌 5. Contact Us</h2>
        <p className="mb-8">
          If you have any privacy-related concerns, feel free to email us at 📧
          <strong> support@eventpulse.com</strong>.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-semibold transition"
        >
          ✅ I Understand
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
