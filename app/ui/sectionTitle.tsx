import styles from '@/app/ui/styles/sectionTitle.module.scss';

interface Title {
    title: string,
    color?: boolean
}

export default function SectionTitle({title, color} : Title) {
    return(
        <div className={styles.sectionTitle_cont}>
            <h2 className={`${styles.sectionTitle} ${color ? styles.sectionTitle_White : ""}`}>{title}</h2>
        </div>
    )
}