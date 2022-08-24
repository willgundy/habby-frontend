import styles from './Section.css';

export default function Section({ header, subText, width, maxWidth, height, children }) {
    return (
        <section className={styles.Section} style={{ width, maxWidth, height }}>
            {header && <h1>{header}</h1>}
            {subText && <h4>{subText}</h4>}
            {children}
        </section>
    );
}
