import React from "react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white/10 backdrop-blur-md text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-yellow-300">📜 Terms & Conditions</h1>

        <p className="mb-4">
          Welcome to <strong>EventPulse</strong> 🎉! These Terms & Conditions govern your use of our
          platform. By accessing or using EventPulse, you agree to follow these rules.
        </p>

        <h2 className="text-2xl font-semibold mb-2">📌 1. Account Responsibility</h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your account login credentials
          🔑 and for all activities that occur under your account.
        </p>

        <h2 className="text-2xl font-semibold mb-2">📌 2. Event Listings</h2>
        <p className="mb-4">
          EventPulse provides event listings for your convenience. We do not guarantee event
          availability, changes, or cancellations by organizers 🎭.
        </p>

        <h2 className="text-2xl font-semibold mb-2">📌 3. Payment & Refunds</h2>
        <p className="mb-4">
          All ticket sales 🎟️ are final unless stated otherwise. Refund policies depend on event
          organizers.
        </p>

        <h2 className="text-2xl font-semibold mb-2">📌 4. Prohibited Activities</h2>
        <p className="mb-4">
          You agree not to engage in activities that disrupt or misuse the platform 🚫, including
          hacking attempts, spamming, or fraudulent behavior.
        </p>

        <h2 className="text-2xl font-semibold mb-2">📌 5. Liability Disclaimer</h2>
        <p className="mb-4">
          EventPulse is not liable for any losses, damages, or personal injury occurring during
          events.
        </p>

        <h2 className="text-2xl font-semibold mb-2">📌 6. Changes to Terms</h2>
        <p className="mb-8">
          We may update these Terms from time to time. You will be notified of significant changes
          🔔.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-semibold transition"
        >
          ✅ I Accept
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
