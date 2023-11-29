"use client"

import styles from '@/app/(secciones)/contacto/contacto.module.scss';
import { useState } from "react"
import Button from '@/app/ui/button';

export default function ContactWrapper() {
    const [form, setForm] = useState<string>("contact");
    const [slide, setSlide] = useState(false)

    const handleClick = (newForm: string) => {
        setForm(newForm);
    };

    const contact = [
        {
            label: "Nombre completo",
            type: "text",
            name: "nombre"
        },
        {
            label: "E-mail",
            type: "email",
            name: "email"
        },
        {
            label: "Empresa",
            type: "text",
            name: "empresa"
        },
        {
            label: "Asunto",
            type: "text",
            name: "asunto"
        },
    ]

    return (
        <div className={styles.form_wrapper}>

            <div className={styles.form_slide}>
                <div
                    className={`${styles.form_container} ${slide ? styles.move_slide : ""}`}
                    id='contact-form'
                >
                    <form className={styles.form}>
                        {contact.map((input, index) => (
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
                            className={styles.form_textarea}
                                name="mensaje"
                                maxLength={400}
                                required
                            />
                        </label>
                        <button type="submit" className={styles.submit_form}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
