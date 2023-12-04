import styles from '@/app/components/layout/styles/partners.module.scss'
import Button from '@/app/ui/button';
import SectionTitle from "@/app/ui/sectionTitle";
import Link from 'next/link';

export default function Partners() {
    return(
        <section className={styles.partners_cont}>
            <SectionTitle title="Los asociados" color={true} />
            <div className={styles.partnersDetails_cont}>
                <p className={styles.partnersDetails}>
                    Somos una asociación que reúne a más de 1000 profesionales altamente cualificados del sector de Alimentos y Bebidas de España y Latinoamérica. Nuestros miembros están comprometidos con la especialización y profesionalización de un sector en crecimiento que aporta un valor significativo a la sociedad y a la economía.<br /><br />Creemos firmemente en el poder de la colaboración y el intercambio de conocimientos para impulsar la innovación y el progreso en nuestra industria. En AIDABE, estamos dedicados a promover la excelencia, la ética y el desarrollo profesional en el sector de Alimentos y Bebidas.
                </p>
            </div>
            <Link href="/contacto" style={{display: 'flex', justifyContent: 'center'}}>
                <Button text='¿quieres formar parte?' style='default' />
            </Link>
        </section>
    )
}