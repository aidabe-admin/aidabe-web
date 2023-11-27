"use client"

import { useState } from 'react';

import styles from '@/app/(secciones)/actualidad/actualidad.module.scss';

import Image from 'next/image';
import Link from 'next/link';

interface Article {
    title: string;
    image: string;
    text: string;
    link: string;
    alt: string;
}

interface ArticleDetail {
    articles: Article[];
}

const articles = [
    {
      title: 'La transparencia en la restauración: ¿Una moda o una necesidad?',
      image: '/post-1.jpg',
      text: 'Transparencia en la restauración: Más allá de las modas, un análisis reflexivo y realista.',
      link: '/titulo-1',
      alt: 'Lorem ipsum dolor sit amet.'
    },
    {
      title: 'Título 2',
      image: '/post-2.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
      link: '/titulo-2',
      alt: 'Lorem ipsum dolor sit amet.'
    },
    {
      title: 'Título 3',
      image: '/post-3.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
      link: '/titulo-3',
      alt: 'Lorem ipsum dolor sit amet.'
    },
  ];


export default function Blog() {
    const itemsPerPage = 2;

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedArticles = articles.slice(startIndex, endIndex);
    const totalPages = Math.ceil(articles.length / itemsPerPage);

    const handlePageChange = (newPage: number) => {
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