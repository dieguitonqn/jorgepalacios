// components/CalendarCards.tsx
import React from 'react';
import { Event } from '@/types/event';

interface CalendarCardsProps {
  events: Event[];
}

const CalendarCards: React.FC<CalendarCardsProps> = ({ events }) => {
  // Formatear fecha a "15 Oct" o similar
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
    });
  };

  return (
    <div className="text-center flex flex-wrap mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-4">
            <p className="text-3xl font-bold text-amber-700 dark:text-amber-600">
              {formatDate(event.date)}
            </p>
          </div>
          <h3 className="text-xl text-center font-semibold mb-2 dark:text-white">{event.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {event.venue}, <span className="font-medium">{event.location}</span>
          </p>
          {event.ticketLink && (
            <a
              href={event.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-700 bg-opacity-50 hover:bg-opacity-100 text-white px-4 py-2 rounded-md transition-colors"
            >
              Comprar entradas
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default CalendarCards;