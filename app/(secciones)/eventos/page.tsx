"use client";

import { useState } from 'react';
import Link from 'next/link';
import DatePicker from '@/app/ui/datePicker';

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Evento 1',
      description: 'Reseña evento 1',
      date: new Date('2024-01-15'),
    },
    {
      id: 2,
      title: 'Evento 2',
      description: 'Reseña evento 2',
      date: new Date('2024-02-28'),
    },
    {
      id: 3,
      title: 'Evento 3',
      description: 'Reseña evento 3',
      date: new Date('2024-03-10'),
    },
    {
      id: 4,
      title: 'Evento 4',
      description: 'Reseña evento 4',
      date: new Date('2024-03-22'),
    },
    {
      id: 5,
      title: 'Evento 5',
      description: 'Reseña evento 4',
      date: new Date('2023-01-22'),
    },
  ];

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const currentDate = new Date();
  const sortedEvents = [...events].sort((a, b) => {
    const dateDifferenceA = Math.abs(a.date.getTime() - currentDate.getTime());
    const dateDifferenceB = Math.abs(b.date.getTime() - currentDate.getTime());

    return dateDifferenceA - dateDifferenceB;
  });
  const filteredAndSortedEvents = sortedEvents.filter((event) => event.date >= currentDate);

  const handleDateSelect = (date: Date | null) => {
    setSelectedDate(date);
  };

  const clearFilter = () => {
    setSelectedDate(null);
  };

  const filteredEvents = selectedDate
    ? events.filter((event) => {
        const eventDate = event.date.setHours(0, 0, 0, 0);
        const selectedDateValue = selectedDate.setHours(0, 0, 0, 0);
        return eventDate === selectedDateValue;
      })
    : events;

  const subtitle = selectedDate
    ? `Eventos del ${selectedDate.toLocaleDateString('es-ES')}`
    : 'Todos los eventos';

  return (
    <section className="events-wrapper">
      <h2 className="section-title">Eventos</h2>
      <p className='section-text'>
        Como líderes del sector F&B organizamos eventos propios y participamos en eventos de otros actores para debatir, compartir perspectivas y horizontes y contribuir a su posicionamiento y crecimiento económico. Aquí puedes consultar los próximos eventos en los que estaremos presentes
      </p>
      <div className="events">
        <div className="events-slider">
        <div
          className="event-slide"
          id="events-calendar"
        >
          <DatePicker onDateSelect={handleDateSelect} />
        </div>
        <div
          className="event-slide"
          id="events-list-container"
        >
          <h3 className='section-subtitle'>{subtitle}</h3>
          {selectedDate && (
            <button onClick={clearFilter} className='clear-filter-btn'>Limpiar filtro</button>
          )}
          {filteredEvents.length === 0 ? (
            <p className='no-events-error'>No hay eventos para el día seleccionado.</p>
          ) : (
            <ul className="events-list">
              {filteredAndSortedEvents.map((event) => (
                <li className="event-container" key={event.id}>
                  <div className="event">
                    <div className="event-name-container">
                      <h5 className="event-name">{event.title}</h5>
                      <p className='event-date'>{event.date.getDate()}.{event.date.getMonth() + 1}.{event.date.getFullYear()}</p>
                      <p className="event-desc">{event.description}</p>
                    </div>
                    <Link href="/" className="event-link"><p className='link-text'>Ver más</p></Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
