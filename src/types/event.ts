export interface Event {
    id: string;
    date: Date; // o string en formato ISO (ej: "2024-10-15")
    title: string;
    location: string;
    venue: string;
    ticketLink?: string;
  }