import styles from '@/app/(secciones)/asociacion/asociacion.module.scss';

export default function Board() {
    return(
        <section className="main-wrapper board-page">
            <header className={styles.section_header}>
                <h2 className={styles.section_title}>La asociación</h2>
                <p className={styles.section_subtitle}>
                    Informate respecto a las últimas noticias, avisos y eventos.
                </p>
            </header>
        </section>
    )
}