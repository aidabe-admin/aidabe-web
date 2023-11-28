// EventListPage.tsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Event {
  id: number;
  title: string;
  date: Date;
}

const eventsData: Event[] = [
  { id: 1, title: 'Evento 1', date: new Date('2023-11-27') },
  { id: 2, title: 'Evento 2', date: new Date('2023-11-28') },
  { id: 3, title: 'Evento 3', date: new Date('2023-11-29') },
  // Agrega más eventos según sea necesario
];

const EventListPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const filteredEvents = selectedDate
    ? eventsData.filter((event) => isSameDay(event.date, selectedDate))
    : eventsData;

  return (
    <div>
      <h1>Lista de Eventos</h1>
      
      <div>
        <label>Seleccione una fecha:</label>
        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
      </div>

      <ul>
        {filteredEvents.map((event) => (
          <li key={event.id}>
            <strong>{event.title}</strong> - {formatDate(event.date)}
          </li>
        ))}
      </ul>
    </div>
  );
};

const isSameDay = (dateA: Date, dateB: Date) =>
  dateA.getDate() === dateB.getDate() &&
  dateA.getMonth() === dateB.getMonth() &&
  dateA.getFullYear() === dateB.getFullYear();

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };
  

export default EventListPage;
