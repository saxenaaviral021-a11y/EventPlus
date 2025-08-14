// src/pages/HomePage.js
import React from 'react';
import EventCard from '../components/EventCard';

function HomePage() {
  // Sample event data
  const events = [
    {
      id: 1,
      title: 'React Workshop',
      date: '2025-08-10',
      location: 'Indore',
      description: 'A hands-on workshop on React fundamentals.',
    },
    {
      id: 2,
      title: 'AI Conference',
      date: '2025-08-15',
      location: 'Delhi',
      description: 'Explore the future of AI and ML.',
    },
  ];

  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default HomePage;
