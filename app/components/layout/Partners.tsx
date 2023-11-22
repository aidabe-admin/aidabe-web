import styles from '@/app/components/layout/styles/partners.module.scss'
import Button from '@/app/ui/button';
import SectionTitle from "@/app/ui/sectionTitle";

export default function Partners() {
    return(
        <section className={styles.partners_cont}>
            <SectionTitle title="Los asociados" color={true} />
            <div className={styles.partnersDetails_cont}>
                <p className={styles.partnersDetails}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
            </div>
            <div className={styles.partners_cta}>
                <h4 className={styles.partners_subtitle}>¿Quieres formar parte?</h4>
                <Button text='contáctanos' style='default' />
            </div>
        </section>
    )
}