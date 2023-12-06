"use client"

import styles from '@/app/(secciones)/asociados/asociados.module.scss';

import { useState } from 'react';
import Image from 'next/image';
import data from '@/data/countries.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '@/app/ui/sectionTitle';
import Intersected from '@/app/components/layout/Intersected';
import Button from '@/app/ui/button';

const partners = [
    {
      title: 'Socio Senior Certificado',
      image: '/post-1.jpg',
      alt: 'Lorem ipsum dolor sit amet.',
      text: 'Socios de más de 25 años, con una formación y/o una experiencia directiva destacable en gestión de la restauración, en cualquiera de las industrias donde ésta tiene lugar, que hayan pasado por un proceso de certificación de nuestra propia asociación y alcanzado esta categoría por méritos reconocidos por nuestro órgano de gobierno (años de pertenencia a la antigua AEDABE y a la actual AIDABE, participación destacada en actividades relacionadas con los fines de la asociación, trayectoria profesional, etc.)',
    },
    {
      title: 'Socio Senior',
      image: '/post-1.jpg',
      alt: 'Lorem ipsum dolor sit amet.',
      text: 'Mayores de 25 años con una formación y experiencia específica en gestión de la restauración, desde figuras de mandos intermedio a directivas, en alguna de las industrias donde ésta tiene lugar.',
    },
    {
      title: 'Socio Junior',
      image: '/post-1.jpg',
      alt: 'Lorem ipsum dolor sit amet.',
      text: 'Socios de entre 18 y 25 años, con una formación específica en gestión de la restauración, con o sin experiencia profesional.',
    },
    {
      title: 'Amigo de AIDABE',
      image: '/post-1.jpg',
      alt: 'Lorem ipsum dolor sit amet.',
      text: 'Profesionales de cualquier industria que compartan con nosotros nuestros fines y estén interesados en participar en la asociación.',
    },
];

const benefits = [{
    title: "01. contenido exclusivo",
    text: "Informes del sector, estudios de tendencias, artículos y entrevistas exclusivas.",
    img: "/candado.png",
    aspect_ratio: "75/98"
},{
    title: "02. eventos",
    text: "Descuento en eventos del sector, invitación a eventos promovidos por AIDABE.",
    img: "/calendario.png",
    aspect_ratio: "1"
},{
    title: "03. marcas líderes",
    text: "AIDABE llega a acuerdos exclusivos con marcas líderes de los que podrás beneficiarte tu y tu negocio por ser miembro de la asociación.",
    img: "/podio.png",
    aspect_ratio: "3/2"
},{
    title: "04. cursos y formaciones",
    text: "Obtendrás descuentos para realizar programas formativos que te ayudarán a impulsar tu carrera profesional.",
    img: "/grafico.png",
    aspect_ratio: "3/2"
}
]

const partner = [
    {
        label: "Nombre",
        type: "text",
        name: "nombre"
    },
    {
        label: "Apellido",
        type: "text",
        name: "apellido"
    },
    {
        label: "E-mail",
        type: "email",
        name: "email"
    },
    {
        label: "Teléfono",
        type: "phone",
        name: "telefono"
    },
    {
        label: "LinkedIn (enlace)",
        type: "text",
        name: "linkedin"
    },
    {
        label: "Empresa",
        type: "text",
        name: "empresa"
    },
    {
        label: "Cargo",
        type: "text",
        name: "cargo"
    },
    {
        label: "Nacionalidad",
        type: "text",
        name: "nacionalidad"
    }
]

export default function Members() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [selectedState, setSelectedState] = useState<string>('');

    const handleToggleDescription = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const countryId = event.target.value;
        setSelectedCountry(countryId);
        setSelectedState('');
      };
    
      const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const stateId = event.target.value;
        setSelectedState(stateId);
      };

    return(
        <section className="main-wrapper">
            <header className={styles.section_header}>
                <SectionTitle title='¿Quién compone AIDABE?' />
                <Intersected
                    className={styles.section_subtitle}
                    active={styles.active_subtitle}
                >
                    <p>
                        Somos una asociación que reúne a más de 1000 profesionales altamente cualificados del sector de Alimentos y Bebidas de España y Latinoamérica. Nuestros miembros están comprometidos con la especialización y profesionalización de un sector en crecimiento que aporta un valor significativo a la sociedad y a la economía. Creemos firmemente en el poder de la colaboración y el intercambio de conocimientos para impulsar la innovación y el progreso en nuestra industria. En AIDABE, estamos dedicados a promover la excelencia, la ética y el desarrollo profesional en el sector de Alimentos y Bebidas.
                    </p>
                </Intersected>
            </header>
            <Intersected className={styles.partners_types} active={styles.active_section} threshold={0.1}>
                <div className={styles.partners_description}>
                    <h3 className={styles.section_subtitle}>Tipos de socios</h3>
                    <p className={styles.section_text}>En AIDABE ubicamos a nuestros socios en 4 categorías: Senior Certificados, Senior, Junior y Amigos de AIDABE.</p>
                </div>
                <div className={styles.types}>
                    <div className={styles.types_layout}>
                        {partners.map((partner, index) => (
                            <div key={index} className={styles.type_cont}>
                                <div className={styles.title_container} onClick={() => handleToggleDescription(index)}>
                                    <h5 className={styles.type_title}>{partner.title}</h5>
                                    <div className={styles.partner_selector}>
                                        <div className={`${styles.icon_container} ${openIndex === index ? styles.bounce_icon : ''}`}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </div>
                                        <div className={`${styles.icon_container} ${openIndex === index ? styles.bounce_icon : ''}`}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.description_container} ${
openIndex === index ? styles.open_description_cont : ''}`}>
                                    <p className={styles.description}>{partner.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Intersected>
            <div className={styles.benefits}>
                <Intersected className={styles.benefits_description} active={styles.active_section} threshold={0.5}>
                    <h3 className={styles.section_subtitle}>Beneficios de asociado</h3>
                    <p className={styles.section_text}>Todos nuestros socios gozan de los siguientes beneficios:</p>
                </Intersected>
                <Intersected className={styles.benefits_layout}  active={styles.active_section} threshold={0.2}>
                    {benefits.map((benefit, index) => (
                        <div className={styles.benefit} key={index}>
                            <div className={styles.benefit_img}>
                                <div className={styles.benefit_background} />
                                <div className={styles.img} style={{aspectRatio: `${benefit.aspect_ratio}`}}>
                                    <Image src={benefit.img} fill alt={benefit.title} />
                                </div>
                            </div>
                            <div className={styles.benefit_text}>
                                <h5 className={styles.benefit_title}>{benefit.title}</h5>
                                <p className={styles.benefit_desc}>{benefit.text}</p>
                            </div>
                        </div>
                    ))}
                </Intersected>
            </div>
            <div className={styles.contact}>
                <Intersected className={styles.contact_action} active={styles.active_section} threshold={0.1}>
                    <h3 className={styles.section_subtitle}>¿Quieres formar parte?</h3>
                        <div
                        className={styles.form_container}
                        id='partners-form'
                    >
                        <form className={styles.form}>
                            {partner.map((input, index) => (
                                <label className={styles.form_label} key={index}>
                                    {input.label}
                                    <input
                                        type={input.type}
                                        name={input.name}
                                        className={styles.form_input}
                                    />
                                </label>
                            ))}
                            <label htmlFor="country" className={styles.form_label}>
                                País de residencia:
                                <select id="country" value={selectedCountry} onChange={handleCountryChange} className={styles.form_select}>
                                    <option value="">-</option>
                                    {data.map((country) => (
                                    <option key={country.country_id} value={country.country_id}>
                                        {country.country_name}
                                    </option>
                                    ))}
                                </select>
                            </label>

                            <label htmlFor="state" className={styles.form_label}>
                                Provincia/Estado:
                                <select id="state" value={selectedState} onChange={handleStateChange} disabled={!selectedCountry} className={styles.form_select}>
                                    <option value="">-</option>
                                    {selectedCountry &&
                                    data
                                        .find((country) => country.country_id === selectedCountry)
                                        ?.states.map((state) => (
                                        <option key={state.state_id} value={state.state_id}>
                                            {state.state_name}
                                        </option>
                                        ))}
                                </select>
                            </label>
                            <label className={styles.form_label}>
                                Mensaje
                                <textarea
                                className={styles.form_textarea}
                                    name="mensaje"
                                    maxLength={400}
                                    required
                                />
                            </label>
                            <div className={styles.submit_container}>
                                <Button text='enviar' type='submit' />
                            </div>
                        </form>
                    </div>
                </Intersected>
            </div>
        </section>
    )
}