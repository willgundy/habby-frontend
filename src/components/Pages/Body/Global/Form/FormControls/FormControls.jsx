import styles from './FormControls.css';
import { Children, cloneElement } from 'react';

function FormControl({ label, children }) {
    return (
        <label className={styles.FormControl}>
            <Label text={label} className={styles.Label} />
            {children}
        </label>
    );
}

function Label({ text }) {
    return <span className="label-text">{text}</span>;
}

export function CheckboxControl({ label, text, ...rest }) {
    return (
        <div className={styles.FormControl}>
            <Label text={label} />
            <CheckboxOption text={text} {...rest} />
        </div>
    );
}

export function InputControl({ label, value, ...rest }) {
    return (
        <FormControl label={label}>
            <input defaultValue={value || ''} {...rest} />
        </FormControl>
    );
}

export function SelectControl({ label, children, value, ...rest }) {
    return (
        <FormControl label={label}>
            <select defaultValue={value || ''} {...rest}>{children}</select>
        </FormControl>
    );
}

export function TextAreaControl({ label, ...rest }) {
    return (
        <FormControl label={label}>
            <textarea {...rest}></textarea>
        </FormControl>
    );
}

export function OptionGroupControl({
    label,
    name,
    size = '100px',
    children,
}) {
    return (
        <div className={styles.FormControl}>
            <fieldset>
                <Label text={label} as="legend" />
                <div
                    className={styles.Options}
                    style={{
                        gridTemplateColumns: `repeat(
            auto-fill,
            minmax(${size}, 1fr)
          )`,
                    }}
                >
                    {Children.map(children, (child) =>
                        cloneElement(child, { name })
                    )}
                </div>
            </fieldset>
        </div>
    );
}

function Option({ text, type, ...rest }) {
    return (
        <label className={styles.CheckboxLabel}>
            <input type={type} {...rest} />
            {text}
        </label>
    );
}

export function CheckboxOption(props) {
    return <Option type="checkbox" className={styles.CheckboxOption} {...props} />;
}

export function RadioOption(props) {
    return <Option type="radio" className={styles.RadioOption} {...props} />;
}
