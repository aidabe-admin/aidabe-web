"use client";

import { useState } from 'react';

export default function Events() {
  const [isCalendarSelected, setCalendarSelected] = useState(false);
  const [selected, setSelected] = useState(true);

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
  ];

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <section className="events-wrapper">
      <h2 className="section-title">Eventos</h2>
      <p className='section-text'>
        Como líderes del sector F&B organizamos eventos propios y participamos en eventos de otros actores para debatir, compartir perspectivas y horizontes y contribuir a su posicionamiento y crecimiento económico. Aquí puedes consultar los próximos eventos en los que estaremos presentes
      </p>
      <div className="events-selector">
        <div
          className={`event-selector ${selected ? 'selected-event-sec' : ''}`}
          id="select-list"
          onClick={toggleSelected}
        >
          <p>Lista de eventos</p>
        </div>
        <div
          className={`event-selector ${selected ? '' : 'selected-event-sec'}`}
          id="select-calendar"
          onClick={toggleSelected}
        >
          <p>Calendario</p>
        </div>
      </div>
      <div className="events">
        <h3 className="section-subtitle">Próximos eventos</h3>
        <div className="events-slider">
          <div
            style={{ transform: selected ? 'translateX(0)' : 'translateX(-100%)' }}
            className="event-slide"
            id="events-list-container"
          >
            <ul className="events-list">
              {events.map((event) => (
                <li className="event-container" key={event.id}>
                  <div className="event">
                    <div className="event-date">
                      <p className="event-number">{event.date.getDate()}</p>
                      <p className="event-day">{event.date.toLocaleDateString('es-ES', { month: 'short' }).toUpperCase()}</p>
                    </div>
                    <div className="event-name-container">
                      <h5 className="event-name">{event.title}</h5>
                      <p className="event-desc">{event.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{ transform: selected ? 'translateX(0%)' : 'translateX(-100%)', display: 'grid', placeContent: 'center'}}
            className="event-slide"
            id="events-calendar"
          >
            <p style={{color: "#fff"}}>Calendario</p>
          </div>
        </div>
      </div>
    </section>
  );
}
