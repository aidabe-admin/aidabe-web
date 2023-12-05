"use client"

import styles from '@/app/components/layout/styles/board.module.scss';

import BoardLayout from '@/app/ui/BoardLayout';
import SectionTitle from '@/app/ui/sectionTitle';
import Button from '@/app/ui/button';
import Link from 'next/link';

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
    return(
        <section className={styles.board_wrapper}>
            <SectionTitle title='La asociación' />
            <div className={styles.boardDetails_cont}>
                <p className={styles.boardDetails}>
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