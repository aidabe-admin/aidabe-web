"use client"

import { useState } from 'react';

export default function Events() {
    const [isCalendarSelected, setCalendarSelected] = useState(false);
    const [selected, setSelected] = useState(true);

    const toggleSelected = () => {
        setSelected(!selected);
    };

    return(
        <section className="events-wrapper">
            <h2 className="section-title">Eventos</h2>
            <p className='section-text'>
                Como líderes del sector F&B organizamos eventos propios y participamos en eventos de otros actores para debatir, compartir perspectivas y horizontes y contribuir a su posicionamiento y crecimiento económico.<br/><br/>Aquí puedes consultar los próximos eventos en los que estaremos presentes
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
                            <li className="event-container">
                                <div className="event">
                                    <div className="event-date">
                                        <p className="event-number">28</p>
                                        <p className="event-day">DIC</p>
                                    </div>
                                    <div className="event-name-container">
                                        <h5 className="event-name">Evento de prueba 1</h5>
                                        <p className="event-desc">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit dolor.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="event-container">
                                <div className="event">
                                    <div className="event-date">
                                        <p className="event-number">31</p>
                                        <p className="event-day">DIC</p>
                                    </div>
                                    <div className="event-name-container">
                                        <h5 className="event-name">Evento de prueba 2</h5>
                                        <p className="event-desc">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit dolor.
                                        </p>
                                    </div>
                                </div>
                            </li>
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
    )
}