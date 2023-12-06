"use client";

import { useState, useRef } from 'react';
import useIntersectionObserver from '@/app/lib/Intersection';
import Link from 'next/link';

import DatePicker from '@/app/ui/datePicker';
import SectionTitle from '@/app/ui/sectionTitle';
import Intersected from '@/app/components/layout/Intersected';

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Aidabe en HIP',
      description: 'El principal evento de innovación para impulsar el sector horeca',
      date: new Date('2024-01-15'),
      link: "/eventos/aidabe-en-hip"
    },
    {
      id: 2,
      title: 'Evento 2',
      description: 'Reseña evento 2',
      date: new Date('2024-02-28'),
      link: "/eventos/evento-2"
    },
    {
      id: 3,
      title: 'Evento 3',
      description: 'Reseña evento 3',
      date: new Date('2024-03-10'),
      link: "/eventos/evento-3"
    },
    {
      id: 4,
      title: 'Evento 4',
      description: 'Reseña evento 4',
      date: new Date('2024-03-22'),
      link: "/eventos/evento-4"
    },
    {
      id: 5,
      title: 'Evento 5',
      description: 'Reseña evento 4',
      date: new Date('2023-01-22'),
      link: "/eventos/evento-5"
    },
  ];

  const targetRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(targetRef, { threshold: 1});
  const paragraph = isIntersecting ? "active-paragraph" : '';

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
      <SectionTitle title='Eventos' />
      <Intersected className='section-text' active='active-paragraph'>
        <p>
          Como líderes del sector F&B organizamos eventos propios y participamos en eventos de otros actores para debatir, compartir perspectivas y horizontes y contribuir a su posicionamiento y crecimiento económico. Aquí puedes consultar los próximos eventos en los que estaremos presentes
        </p>
      </Intersected>
      <div className="events">
        <div className="events-slider">
          <Intersected
            className="event-slide"
            active='intersected-slide'
            id="events-calendar"
            threshold={0.5}
          >
            <DatePicker onDateSelect={handleDateSelect} />
          </Intersected>
          <Intersected
            className="event-slide"
            active='intersected-slide'
            id="events-list-container"
            threshold={0.1}
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
                      <Link href={event.link} className="event-link"><p className='link-text'>Ver más</p></Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Intersected>
        </div>
      </div>
    </section>
  );
}
