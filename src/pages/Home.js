import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  {
    title: "🎯 Easy Event Creation",
    description: "🎉 Plan and publish events in just a few clicks.",
  },
  {
    title: "📅 Smart Scheduling",
    description: "⏰ Auto-adjust schedules and notify attendees instantly.",
  },
  {
    title: "📊 Powerful Analytics",
    description: "📈 Track engagement, attendance, and feedback effortlessly.",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="min-h-screen flex flex-col justify-center items-center text-white px-4 relative"
        style={{
          backgroundImage: "url('/op.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Welcome to EventPulse
          </motion.h1>

          <motion.p
            className="text-white/90 mb-8 max-w-xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Discover, manage, and enjoy your events with ease. Sign up now to
            create your own events or RSVP to ones you love!
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/signup"
              className="px-6 py-2 bg-white text-[#4b1d6f] font-semibold rounded hover:bg-[#f1d6fa] transition duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-6 py-2 bg-white text-[#4b1d6f] font-semibold rounded hover:bg-[#f1d6fa] transition duration-300 hover:scale-105"
            >
              Login
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative py-20 px-6 md:px-16 bg-[#d54ea591]">
        <div className="relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#183c54]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose EventPulse?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg border border-white/20 
                           bg-white/10 backdrop-blur-md shadow-lg
                           transform transition-all duration-300 ease-out
                           hover:scale-110 hover:shadow-2xl hover:bg-white/20 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-[#183c54] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#183c54]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
