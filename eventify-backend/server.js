const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// -------------------- AUTH -------------------- //
let users = [];

// Signup
app.post("/api/auth/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Email already registered" });
  }
  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);
  res.status(201).json({ message: "Signup successful" });
});

// Login
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    user => user.email === email && user.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ message: "Login successful", user });
});

// -------------------- EVENTS -------------------- //
let events = [];
let nextId = 1;

app.get("/api/events", (req, res) => {
  res.json(events);
});

app.post("/api/events", (req, res) => {
  const event = { id: nextId++, rsvps: [], ...req.body };
  events.push(event);
  res.status(201).json(event);
});

app.put("/api/events/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = events.findIndex(e => e.id === id);
  if (index !== -1) {
    const updatedEvent = { id, ...req.body, rsvps: events[index].rsvps || [] };
    events[index] = updatedEvent;
    res.json(updatedEvent);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
});

app.delete("/api/events/:id", (req, res) => {
  const id = parseInt(req.params.id);
  events = events.filter(e => e.id !== id);
  res.json({ message: "Deleted successfully" });
});

app.post("/api/events/:id/rsvp", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const event = events.find(e => e.id === id);
  if (!event) return res.status(404).json({ message: "Event not found" });

  if (!event.rsvps) event.rsvps = [];
  event.rsvps.push({ name, email });

  res.status(201).json({ message: "RSVP successful", rsvps: event.rsvps });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
