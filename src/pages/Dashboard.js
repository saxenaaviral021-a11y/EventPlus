import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const upcomingEvents = [
  {
    id: 1,
    title: "ET Soonicorns Summit 2025",
    date: "August 22, 2025",
    location: "Bengaluru",
    description:
      "AI infrastructure, security, and ethics discussions with leading innovators.",
  },
  {
    id: 2,
    title: "3rd Information Technology Conference 2025",
    date: "August 23, 2025",
    location: "New Delhi",
    description:
      "Insights into AI, cloud computing, cybersecurity, IoT, and digital transformation.",
  },
  {
    id: 3,
    title: "TECHSPO Delhi NCR 2025",
    date: "September 24–25, 2025",
    location: "Westin Gurgaon, Delhi NCR",
    description:
      "Showcases of the latest innovations in Internet, mobile, AdTech, MarTech, and SaaS solutions.",
  },
  {
    id: 4,
    title: "Bengaluru Tech Summit 2025",
    date: "November 18–20, 2025",
    location: "BIEC, Bengaluru",
    description:
      "A large-scale, business-focused global platform for IT, innovation, IoT, and digital transformation.",
  },
  {
    id: 5,
    title: "Inspire India 2025",
    date: "December 5–7, 2025",
    location: "Pragati Maidan, New Delhi",
    description:
      "A startup-tech summit with global startups, investor panels, and innovation showcases.",
  },
];

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: "", description: "" });

  // Fetch events from backend
  const fetchEvents = () => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    }).then(() => {
      setNewEvent({ title: "", description: "" });
      fetchEvents();
    });
  };

  const handleEdit = (id) => {
    setEditingEvent(events.find((e) => e.id === id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/events/${editingEvent.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingEvent),
    }).then(() => {
      setEditingEvent(null);
      fetchEvents();
    });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/events/${id}`, { method: "DELETE" }).then(
      () => fetchEvents()
    );
  };

  // Animation variants
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

  return (
    <div
      className="min-h-screen px-4 py-10 text-white relative"
      style={{
        backgroundImage: `url('/op(4).jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8">Dashboard</h1>

        {/* Add / Edit Event Form */}
        <div className="max-w-3xl mx-auto bg-black/30 p-6 rounded-lg mb-8 hover:border-yellow-300 border border-transparent transition-all duration-300">
          <form
            onSubmit={editingEvent ? handleUpdate : handleAdd}
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              placeholder="Event Title"
              value={editingEvent ? editingEvent.title : newEvent.title}
              onChange={(e) =>
                editingEvent
                  ? setEditingEvent({ ...editingEvent, title: e.target.value })
                  : setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="p-2 rounded bg-black/30 text-white border border-transparent placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300 hover:border-yellow-300 transition-all duration-300"
              required
            />
            <textarea
              placeholder="Event Description"
              value={editingEvent ? editingEvent.description : newEvent.description}
              onChange={(e) =>
                editingEvent
                  ? setEditingEvent({ ...editingEvent, description: e.target.value })
                  : setNewEvent({ ...newEvent, description: e.target.value })
              }
              className="p-2 rounded bg-black/30 text-white border border-transparent placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300 hover:border-yellow-300 transition-all duration-300"
              required
            ></textarea>
            <div className="flex gap-2">
              <button className="bg-black/30 px-4 py-2 rounded border border-transparent hover:border-yellow-300 transition-all duration-300">
                {editingEvent ? "Update Event" : "Add Event"}
              </button>
              {editingEvent && (
                <button
                  type="button"
                  onClick={() => setEditingEvent(null)}
                  className="bg-gray-500 px-4 py-2 rounded hover:border-yellow-300 border border-transparent transition-all duration-300"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Upcoming Tech Events Section */}
        <h2 className="text-2xl font-bold mb-4 text-center">
          Upcoming Tech Events in India
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-black/30 p-4 rounded-lg cursor-pointer border border-transparent hover:border-yellow-300 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm">{event.date} | {event.location}</p>
              <p className="mt-2 text-gray-300">{event.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Admin Events Section */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-center">Your Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-black/30 p-4 rounded-lg cursor-pointer border border-transparent hover:border-yellow-300 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="mt-2">{event.description}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleEdit(event.id)}
                  className="bg-black/30 px-3 py-1 rounded border border-transparent hover:border-yellow-300 transition-all duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="bg-black/30 px-3 py-1 rounded border border-transparent hover:border-yellow-300 transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
