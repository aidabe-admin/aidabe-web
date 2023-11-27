import styles from '@/app/(secciones)/contacto/contacto.module.scss';
import ContactWrapper from '@/app/components/layout/ContactWrapper';

export default function Contact() {
    return(
        <section className={`main-wrapper ${styles.contact_wrapper}`}>
            <header className={styles.section_header}>
                <h2 className={styles.section_title}>Contacto</h2>
            </header>
            <ContactWrapper />
        </section>
    )
}