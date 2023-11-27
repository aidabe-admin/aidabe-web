import styles from '@/app/(secciones)/asociacion/asociacion.module.scss';

import Button from '@/app/ui/button';

export default function Board() {
    return(
        <section className="main-wrapper board-page">
            <header className={styles.section_header}>
                <h2 className={styles.section_title}>La asociación</h2>
            </header>
            <section className={styles.section}>
                <h3 className={styles.section_subtitle}>Sobre AIDABE</h3>
                <p className={styles.section_text}>
                    La Asociación Iberoamericana de Directoras y Directores de Alimentos y Bebidas Jefaturas Ejecutivas de Cocina, nace con el objetivo de promover la labor, establecer relaciones profesionales, y fomentar el intercambio de información, entre los perfiles directivos de la industria de Servicios de Alimentación y Bebidas / Food Service Industry.
                </p>
                <p className={styles.section_text}>
                    Entre sus actividades están la promoción de su figura, actividades y mejores prácticas; la representación de sus intereses ante empresas, instituciones y la sociedad; y la inversión en procesos de I+D+i vinculados a estas actividades, todo ello con criterios de sostenibilidad social, ambiental, y económica, son igualmente, parte de nuestra misión.
                </p>
            </section>
            <section className={`${styles.section} ${styles.proposito}`}>
                <h3 className={styles.section_subtitle}>Nuestro propósito</h3>
                <p className={styles.section_text}>
                    Propósito: Buscar el reconocimiento social, la mejora profesional y la defensa de los intereses del colectivo de profesionales al frente de una Dirección de Alimentos y Bebidas (AyB / F&B), así como de las Jefaturas Ejecutivas de Cocina en la Península Ibérica y Latinoamérica.
                </p>
                <a href="/codigo-etico.pdf" download={true}>
                    <Button id="codigo-etico-btn" style="default" text="Código ético" />
                </a>
            </section>
            <section className={styles.section}>
                <h3 className={styles.section_subtitle}>Nuestros objetivos</h3>
                <ul className={styles.section_list}>
                    <li className={styles.list_item}>
                        <div className={styles.aidabe_bullet}></div>
                        <p className={styles.list_text}>
                            Poner en conocimiento la relevancia empresarial, las competencias y la figura profesional de quienes están al frente de la dirección de Alimentos y Bebidas, así como de las jefaturas ejecutivas de cocina.
                        </p>
                    </li>
                    <li className={styles.list_item}>
                    <div className={styles.aidabe_bullet}></div>
                        <p className={styles.list_text}>
                            Posicionar el área de Alimentos y Bebidas (F&B) como una unidad de negocio estratégica en el sector hostelero, destacando su importancia en la rentabilidad y éxito de las empresas del sector.
                        </p>
                    </li>
                    <li className={styles.list_item}>
                    <div className={styles.aidabe_bullet}></div>
                        <p className={styles.list_text}>
                            Liderar las conversaciones sobre el horizonte del F&B, estableciendo un espacio de diálogo y colaboración con otros actores donde se puedan compartir ideas, experiencias y mejores prácticas.
                        </p>
                    </li>
                    <li className={styles.list_item}>
                    <div className={styles.aidabe_bullet}></div>
                        <p className={styles.list_text}>
                            Defender los intereses de nuestros asociados, trabajando para garantizar que sus necesidades y preocupaciones sean escuchadas y atendidas en el sector de la hostelería.
                        </p>
                    </li>
                </ul>
            </section>
        </section>
    )
}