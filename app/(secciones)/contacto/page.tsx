import styles from '@/app/(secciones)/contacto/contacto.module.scss';
import ContactWrapper from '@/app/components/layout/ContactWrapper';
import SectionTitle from '@/app/ui/sectionTitle';

export default function Contact() {
    return(
        <section className={`main-wrapper ${styles.contact_wrapper}`}>
            <header className={styles.section_header}>
                <SectionTitle title='Contacto' color={true} />
            </header>
            <ContactWrapper />
        </section>
    )
}