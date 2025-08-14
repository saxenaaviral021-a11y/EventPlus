import React from 'react';
import { motion } from 'framer-motion';

const Signup = () => {
  return (
    <div
      className="relative pt-20 min-h-screen flex justify-center items-center px-4"
      style={{
        backgroundImage: `url('/op(3).jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Signup Card with slide-up animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative w-full max-w-md bg-white/80 p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <h2 className="text-3xl font-bold text-center text-[#103337] mb-6">Create Account</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-md border border-white bg-white/70 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md border border-white bg-white/70 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md border border-white bg-white/70 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#103337] text-white font-semibold rounded-md hover:bg-[#0000000f] transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
