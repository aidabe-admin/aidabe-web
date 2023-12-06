import styles from '@/app/ui/styles/button.module.scss'

export default function Button({ style, text, id, type="button" }: {
    style?: string,
    text: string,
    id?: string,
    type?: "button" | "submit" | "reset"
  }) {
    const buttonClassName = `button${style === 'positive' ? 'Positive' : style === 'danger' ? 'Danger' : style === 'Slate' ? 'slate' : 'Default'}`;

    return (
        <button
          className={`
            ${styles.buttonDefault}
            ${styles[buttonClassName]}
          `}
          id={id}
          type={type}
          >
              {text}
        </button>
    );
  }
  