import styles from '@/app/ui/styles/form.module.scss'

export default function Form({className, inputList} : {
    className?: string,
    inputList: {
        label: string;
        type: string;
        name: string;
    }[]
}) {
    return(
        <form className={`${styles.form_container} ${className}`}>
            {inputList.map((input, index) => (
                <label className={styles.form_label} key={index}>
                    {input.label}
                    <input
                        type={input.type}
                        name={input.name}
                        className={styles.form_input}
                    />
                </label>
            ))}
            <label className={styles.form_label}>
                Mensaje
                <textarea
                    name="mensaje"
                    maxLength={400}
                    className={`${styles.form_input} ${styles.form_message}`}
                    />
            </label>
            <button type="submit" className={styles.submit_form}>Enviar</button>
        </form>
    )
}