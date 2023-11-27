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
    
    const partner = [
        {
            label: "Nombre",
            type: "text",
            name: "nombre"
        },
        {
            label: "Apellido",
            type: "text",
            name: "apellido"
        },
        {
            label: "E-mail",
            type: "email",
            name: "email"
        },
        {
            label: "Teléfono",
            type: "phone",
            name: "telefono"
        },
        {
            label: "LinkedIn",
            type: "text",
            name: "linkedin"
        },
        {
            label: "Empresa",
            type: "text",
            name: "empresa"
        },
        {
            label: "Cargo",
            type: "text",
            name: "cargo"
        },
        {
            label: "País de residencia",
            type: "text",
            name: "residencia"
        },
        {
            label: "Provincia",
            type: "text",
            name: "provincia"
        },
        {
            label: "Nacionalidad",
            type: "text",
            name: "nacionalidad"
        }
    ]

    return (
        <div className={styles.form_wrapper}>
            <div className={styles.form_menu}>
                <div
                    className={`${styles.form_selection} ${form === 'contact' ? styles.selected_form : ''}`}
                    onClick={() => {
                        setSlide(false);
                        handleClick('contact');
                    }}
                >
                    <p>Consultas</p>
                </div>
                <div
                    className={`${styles.form_selection} ${form === 'asociate' ? styles.selected_form : ''}`}
                    onClick={() => {
                        setSlide(true);
                        handleClick('asociate');
                    }}
                >
                    <p>Asóciate</p>
                </div>
            </div>

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
                <div
                    className={`${styles.form_container} ${slide ? styles.move_slide : ""}`}
                    id='partners-form'
                >
                    <form className={styles.form}>
                        {partner.map((input, index) => (
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
