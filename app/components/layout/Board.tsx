"use client"

import styles from '@/app/components/layout/styles/board.module.scss';

import Link from 'next/link';

import { useRef } from 'react';
import useIntersectionObserver from '@/app/lib/Intersection';
import BoardLayout from '@/app/ui/BoardLayout';
import SectionTitle from '@/app/ui/sectionTitle';
import Button from '@/app/ui/button';

interface Members {
    pic: string;
    name: string;
    bio: string;
    linkedin: string;
}

interface Board {
    board: Members[];
}

export default function Board({board} : Board) {
    const targetRef = useRef<HTMLDivElement>(null);
    const isIntersecting = useIntersectionObserver(targetRef, { threshold: 1});
    const animationClass = isIntersecting ? "active-paragraph" : '';

    return(
        <section className="main-board">
            <SectionTitle title='La asociación' />
            <div className="board-main-text-container">
                <p ref={targetRef} className={`board-main-text ${animationClass}`}>
                    La  Asociación Iberoamericana de Directoras y Directores de Alimentos y Bebidas Jefaturas Ejecutivas de Cocina, nace con el objetivo de promover la labor, establecer relaciones profesionales, y fomentar el intercambio de información, entre los perfiles directivos de la industria de Servicios de Alimentación y Bebidas / Food Service Industry.
                </p>
            </div>
            <BoardLayout board={board} />
            <Link href="/asociacion" className={styles.linkBtn}>
                <Button style='danger' text='Conocé más' />
            </Link>
        </section>
    )
}