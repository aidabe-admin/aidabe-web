import styles from '@/app/(secciones)/contacto/contacto.module.scss';

export default function ContactSlider() {

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
    <>
      
    </>
  );
}