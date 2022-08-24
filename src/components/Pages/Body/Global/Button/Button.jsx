import styles from './Button.css';

export default function Button({ text, width, height, onClick, marginTop }) {
    return (
        <button className={styles.Button} style={{ width, height, marginTop }} onClick={onClick}>
            {text}
        </button>
    );
}
