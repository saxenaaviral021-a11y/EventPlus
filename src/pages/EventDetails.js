import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EventDetails = () => {
  const [events, setEvents] = useState([]);
  const [rsvpData, setRsvpData] = useState({ name: "", email: "" });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [ticketData, setTicketData] = useState(null);

  // Fetch all events
  const fetchEvents = () => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle RSVP submit
  const handleRSVP = (e) => {
    e.preventDefault();
    if (!selectedEvent) return;

    fetch(`http://localhost:5000/api/events/${selectedEvent.id}/rsvp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rsvpData),
    })
      .then((res) => res.json())
      .then((data) => {
        setTicketData({
          ...rsvpData,
          event: selectedEvent,
          ticketId: Math.floor(Math.random() * 1000000),
        });
        setRsvpData({ name: "", email: "" });
        setSelectedEvent(null);
      })
      .catch((err) => console.error(err));
  };

  // Animation Variants
  const cardVariants = {
    hidden: (side) => ({
      opacity: 0,
      x: side === "left" ? -100 : 100,
      scale: 0.8,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
    hover: {
      scale: 1.05,
      rotate: [0, 2, -2, 0],
      boxShadow: "0px 15px 25px rgba(0,0,0,0.3)",
      transition: { duration: 0.4 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white px-4 relative"
      style={{
        backgroundImage: `url('/op(2).jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.h1
        className="relative z-10 text-3xl md:text-4xl font-bold mb-10 text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Event Details
      </motion.h1>

      <div className="relative z-10 w-full max-w-3xl flex flex-col gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            custom={index % 2 === 0 ? "left" : "right"}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            className="bg-white/20 backdrop-blur-md border border-[#ceb1e9]/50 p-6 rounded-xl cursor-pointer transform-gpu"
          >
            <motion.h2
              className="text-xl font-semibold mb-2"
              variants={textVariants}
            >
              {event.title}
            </motion.h2>
            <motion.p className="text-sm mb-2" variants={textVariants}>
              {event.description}
            </motion.p>
            <motion.p className="text-sm mb-2" variants={textVariants}>
              Date: {event.date} | Location: {event.location} | Category:{" "}
              {event.category}
            </motion.p>

            {/* RSVP Button */}
            <button
              onClick={() => setSelectedEvent(event)}
              className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 mt-2"
            >
              RSVP
            </button>
          </motion.div>
        ))}

        {/* RSVP Form Modal */}
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-[#fff3] p-6 rounded-xl w-full max-w-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">
                RSVP for {selectedEvent.title}
              </h2>
              <form className="flex flex-col gap-3" onSubmit={handleRSVP}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-2 border rounded text-black"
                  value={rsvpData.name}
                  onChange={(e) =>
                    setRsvpData({ ...rsvpData, name: e.target.value })
                  }
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 border rounded text-black"
                  value={rsvpData.email}
                  onChange={(e) =>
                    setRsvpData({ ...rsvpData, email: e.target.value })
                  }
                  required
                />
                <div className="flex gap-2 mt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#183c54de] text-white rounded hover:bg-[#183c5436]"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                    onClick={() => setSelectedEvent(null)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Ticket Display */}
        {ticketData && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setTicketData(null)}
          >
            <motion.div
              className="bg-white text-black p-6 rounded-xl w-full max-w-md shadow-lg border-4 border-yellow-400"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">🎟 Your RSVP Ticket</h2>
              <p className="mb-2">
                <strong>Event:</strong> {ticketData.event.title}
              </p>
              <p className="mb-2">
                <strong>Name:</strong> {ticketData.name}
              </p>
              <p className="mb-2">
                <strong>Email:</strong> {ticketData.email}
              </p>
              <p className="mb-2">
                <strong>Date:</strong> {ticketData.event.date}
              </p>
              <p className="mb-4">
                <strong>Location:</strong> {ticketData.event.location}
              </p>
              <div className="text-center font-mono text-lg">
                Ticket ID: #{ticketData.ticketId}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
