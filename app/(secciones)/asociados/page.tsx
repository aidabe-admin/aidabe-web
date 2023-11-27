"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/app/(secciones)/asociados/asociados.module.scss';
import Button from '@/app/ui/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
    text: "Informes del sector, estudios de tendencias, artículos y entrevistas exclusivas."
},{
    title: "02. eventos",
    text: "Descuento en eventos del sector, invitación a eventos promovidos por AIDABE."
},{
    title: "03. marcas líderes",
    text: "AIDABE llega a acuerdos exclusivos con marcas líderes de los que podrás beneficiarte tu y tu negocio por ser miembro de la asociación."
},{
    title: "04. cursos y formaciones",
    text: "Obtendrás descuentos para realizar programas formativos que te ayudarán a impulsar tu carrera profesional."
}
]

export default function Members() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggleDescription = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return(
        <section className="main-wrapper board-page">
            <header className={styles.section_header}>
                <h2 className={styles.section_title}>¿Quién compone AIDABE?</h2>
                <p className={styles.section_subtitle}>
                    Somos una asociación que reúne a más de 1000 profesionales altamente cualificados del sector de Alimentos y Bebidas de España y Latinoamérica. Nuestros miembros están comprometidos con la especialización y profesionalización de un sector en crecimiento que aporta un valor significativo a la sociedad y a la economía. Creemos firmemente en el poder de la colaboración y el intercambio de conocimientos para impulsar la innovación y el progreso en nuestra industria. En AIDABE, estamos dedicados a promover la excelencia, la ética y el desarrollo profesional en el sector de Alimentos y Bebidas.
                </p>
            </header>
            <div className={styles.partners_types}>
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
                                        <div className={`${styles.icon_container} ${openIndex === index ? styles.bounce_icon : ''}`}><FontAwesomeIcon icon={faPlus} /></div>
                                        <div className={`${styles.icon_container} ${openIndex === index ? styles.bounce_icon : ''}`}><FontAwesomeIcon icon={faMinus} /></div>
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
            </div>
            <div className={styles.benefits}>
                <div className={styles.benefits_description}>
                    <h3 className={styles.section_subtitle}>Beneficios de asociado</h3>
                    <p className={styles.section_text}>Todos nuestros socios gozan de los siguientes beneficios:</p>
                </div>
                <div className={styles.benefits_layout}>
                    {benefits.map((benefit, index) => (
                        <div className={styles.benefit} key={index}>
                            <div className={styles.benefit_img}>
                                <div className={styles.benefit_background} />
                                <div className={styles.img} />
                            </div>
                            <div className={styles.benefit_text}>
                                <h5 className={styles.benefit_title}>{benefit.title}</h5>
                                <p className={styles.benefit_desc}>{benefit.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.contact}>
                <div className={styles.contact_img}>
                    <Image src="/post-1.jpg" fill alt=''/>
                </div>
                <div className={styles.contact_action}>
                    <h3 className={styles.section_subtitle}>¿Quieres formar parte?</h3>
                    {/* <p>Asociate completando el siguiente formulario</p> */}
                    <Link href="/contacto">
                        <Button text="Envíanos tu solicitud" style="danger" />
                    </Link>
                </div>
            </div>
        </section>
    )
}