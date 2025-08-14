import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user)); // save login
      navigate("/dashboard"); // redirect
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  return (
    <div
      className="relative pt-20 min-h-screen flex justify-center items-center px-4"
      style={{
        backgroundImage: `url('/op(5).jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-md bg-white/80 p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <h2 className="text-3xl font-bold text-center text-[#000000b3] mb-6">
          Welcome Back
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-white bg-white/70 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-white bg-white/70 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#000000b3] text-white font-semibold rounded-md hover:bg-[#0000000f] transition duration-300"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
