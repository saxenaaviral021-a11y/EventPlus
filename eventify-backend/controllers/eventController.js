// controllers/eventController.js

let events = [
  {
    id: "1",
    title: "Tech Conference 2025",
    description: "Learn about AI, Blockchain, and more!",
    date: "2025-09-15",
    location: "Mumbai",
    category: "Technology",
    rsvp: false,
    rsvps: []
  },
  {
    id: "2",
    title: "Food Fest",
    description: "Explore food from all over India",
    date: "2025-10-01",
    location: "Indore",
    category: "Food",
    rsvp: false,
    rsvps: []
  }
];

// Get all events
const getAllEvents = (req, res) => {
  res.json(events);
};

// Get a single event by ID
const getEventById = (req, res) => {
  const { id } = req.params;
  const event = events.find(e => e.id === id);
  if (!event) return res.status(404).json({ message: "Event not found" });
  res.json(event);
};

// Create a new event
const createEvent = (req, res) => {
  const { title, description, date, location, category } = req.body;
  const newEvent = {
    id: Date.now().toString(),
    title,
    description,
    date,
    location,
    category,
    rsvp: false,
    rsvps: []
  };
  events.push(newEvent);
  res.status(201).json(newEvent);
};

// Update an event
const updateEvent = (req, res) => {
  const { id } = req.params;
  const index = events.findIndex(e => e.id === id);
  if (index === -1) return res.status(404).json({ message: "Event not found" });

  events[index] = { ...events[index], ...req.body };
  res.json(events[index]);
};

// Delete an event
const deleteEvent = (req, res) => {
  const { id } = req.params;
  const index = events.findIndex(e => e.id === id);
  if (index === -1) return res.status(404).json({ message: "Event not found" });

  const deletedEvent = events.splice(index, 1);
  res.json(deletedEvent[0]);
};

// RSVP for an event
const rsvpEvent = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const event = events.find(e => e.id === id);
  if (!event) return res.status(404).json({ message: "Event not found" });

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  // Store RSVP details
  event.rsvps.push({ name, email, date: new Date().toISOString() });
  event.rsvp = true;

  res.json({ message: "RSVP successful", event });
};

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  rsvpEvent
};
