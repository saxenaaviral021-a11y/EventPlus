// routes/eventRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  rsvpEvent
} = require("../controllers/eventController");

// Get all events
router.get("/", getAllEvents);

// Get single event
router.get("/:id", getEventById);

// Create event
router.post("/", createEvent);

// Update event
router.put("/:id", updateEvent);

// Delete event
router.delete("/:id", deleteEvent);

// RSVP route
router.post("/:id/rsvp", rsvpEvent);

module.exports = router;
