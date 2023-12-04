"use client"

import { useState } from 'react';

import styles from '@/app/(secciones)/actualidad/actualidad.module.scss';

import Image from 'next/image';
import Link from 'next/link';

const articles = [
    {
      title: 'La transparencia en la restauración: ¿Una moda o una necesidad?',
      image: '/post-1.jpg',
      text: 'Transparencia en la restauración: Más allá de las modas, un análisis reflexivo y realista.',
      link: '/transparencia-en-la-restauracion-moda-o-necesidad',
      alt: 'Lorem ipsum dolor sit amet.'
    },
    {
      title: 'Innovación gastronómica: Tendencias que marcan el rumbo en el 2023',
      image: '/post-2.jpg',
      text: 'Descubre las tendencias más destacadas en la innovación gastronómica que están revolucionando la industria de alimentos y bebidas en el presente año.',
      link: '/innovacion-gastronomica-tendencias-2023',
      alt: 'Plato innovador en mesa.'
    },
    {
      title: 'Desafíos regulatorios en la industria alimentaria: Una mirada integral',
      image: '/post-3.jpg',
      text: 'Exploramos los desafíos regulatorios que enfrenta la industria alimentaria hoy en día y cómo los directores de alimentos y bebidas pueden abordarlos de manera efectiva.',
      link: '/desafios-regulatorios-industria-alimentaria',
      alt: 'Etiquetas y regulaciones alimentarias.'
    },
    {
      title: 'Sostenibilidad en la cadena de suministro: El papel de AIDABE',
      image: '/post-4.jpg',
      text: 'Analizamos la importancia de la sostenibilidad en la cadena de suministro de alimentos y bebidas, y cómo la AIDABE está contribuyendo a impulsar prácticas más sostenibles en la industria.',
      link: '/sostenibilidad-cadena-suministro-aidabe',
      alt: 'Cadena de suministro sostenible.'
    },
    {
      title: 'La experiencia del cliente en la restauración: Claves para el éxito',
      image: '/post-5.jpg',
      text: 'Exploramos cómo la experiencia del cliente se ha convertido en un factor clave para el éxito en la industria de la restauración y cómo los directores de alimentos y bebidas pueden mejorarla.',
      link: '/experiencia-cliente-restauracion-claves',
      alt: 'Clientes disfrutando de una comida en un restaurante.'
    },
];

export default function Blog() {
    const itemsPerPage = 4;

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedArticles = articles.slice(startIndex, endIndex);
    const totalPages = Math.ceil(articles.length / itemsPerPage);

    const handlePageChange = (newPage: number) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        
        setCurrentPage(newPage);
    };

    return(
        <section className="main-wrapper blog-page">
            <header className={styles.section_header}>
                <h2 className={styles.section_title}>Actualidad</h2>
                <p className={styles.section_subtitle}>
                    Nuevos modelos de negocio, innovación, sostenibilidad y las tendencias del sector.
                </p>
            </header>
            <div className={styles.articles_layout}>
                {displayedArticles.map((article, index) => (
                    <Link className={styles.blogPost} key={index}  href={`/actualidad${article.link}`}>
                        <div className={styles.blogPost_imgContainer}>
                            <Image
                                alt={article.alt}
                                src={article.image}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className={styles.blogPost_mask}>
                            <p className={styles.blogPost_link}>leer más</p>
                        </div>
                        <div className={styles.blogPost_dataCont}>
                            <h4 className={styles.blogPost_title}>
                                {article.title}
                            </h4>
                            <p className={styles.blogPost_text}>{article.text}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <div
                    key={page}
                    className={`${styles.page} ${page === currentPage ? styles.selected_page : ''}`}
                    onClick={() => handlePageChange(page)}
                >
                    <p>{page}</p>
                </div>
                ))}
            </div>
        </section>
    )
}