"use client"

import { useState } from 'react';

import styles from '@/app/(secciones)/asociados/asociados.module.scss';

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
    text: "Informes de datos, estudios de tendencias, artículos exclusivos."
},{
    title: "02. eventos",
    text: "Descuento eventos del sector, invitación a eventos de AIDABE."
},{
    title: "03. descuentos y promociones con marcas líderes",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
},{
    title: "04. descuentos en cursos y formaciones",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}
]

export default function Board() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const handleToggleDescription = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? 0 : index));
    };

    return(
        <section className="main-wrapper board-page">
            <header className={styles.section_header}>
                <h2 className={styles.section_title}>Asociados</h2>
                <p className={styles.section_subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis tortor ut egestas tempus. Ut at posuere magna. Vivamus placerat erat sed magna varius tristique. Sed ante dolor, egestas id tempus in, lobortis eu diam. Morbi ut odio dictum felis lacinia suscipit sed in lorem. In bibendum nec ligula commodo pharetra. Maecenas finibus finibus pharetra.
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
        </section>
    )
}