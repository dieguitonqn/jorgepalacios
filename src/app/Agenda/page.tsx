import CalendarCards from '@/app/Agenda/components/eventCard'
import React from 'react'

import { Event } from "@/types/event";


const events: Event[] = [
  {
    id: "1",
    date: new Date("2025-10-16"),
    title: "Tour Acústico 2025",
    location: "Neuquén",
    venue: "Cine Teatro Español",
    ticketLink: "https://example.com/tickets",
  },
  {
    id: "2",
    date: new Date("2025-10-23"),
    title: "Tour Acústico 2025",
    location: "General Roca",
    venue: "Teatro El Círculo",
    ticketLink: "https://example.com/tickets",
  },
  {
    id: "3",
    date: new Date("2025-10-30"),
    title: "Tour Acústico 2025",
    location: "Villa Regina",
    venue: "Teatro La Comedia",
    ticketLink: "https://example.com/tickets",
  },
  // Más eventos...
];
function page() {
  return (
    <div>
            <section className="py-16 bg-gray-950">
        <div className="container flex flex-col mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Novedades
          </h2>
          <CalendarCards events={events} />
          </div>
          </section>
    </div>
  )
}

export default page
