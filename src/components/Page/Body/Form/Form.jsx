import Button from '../Basic/Button/Button';
import Section from '../Basic/Section/Section';
import { CheckboxControl, 
    CheckboxOption, 
    InputControl, 
    OptionGroupControl, 
    RadioOption, 
    SelectControl, 
    TextAreaControl } 
    from './FormControls/FormControls.jsx';
import styles from './Form.css';

export default function Form() {
    return (
        <Section header="Sign Up" 
            subText="Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing."
            maxWidth={'800px'}>
            <form className={styles.Form}>
                <InputControl
                    label="email"
                    name="email"
                    placeholder="enter your email"
                    type="email"
                    required
                />

                <InputControl
                    label="password"
                    name="password"
                    placeholder="choose a password"
                    type="password"
                    required
                />

                <SelectControl label="type">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </SelectControl>

                <OptionGroupControl
                    label="Check all that apply"
                    size="125px"
                >
                    <CheckboxOption text="Monday" />
                    <CheckboxOption text="Tuesday" />
                    <CheckboxOption text="Thursday" />
                    <CheckboxOption text="Wednesday" />
                    <CheckboxOption text="Friday" />
                    <CheckboxOption text="Saturday" />
                    <CheckboxOption text="Sunday" />
                </OptionGroupControl>

                <OptionGroupControl
                    name="pet"
                    label="Favorite Pet"
                    size="125px"
                >
                    <RadioOption value={1} text="Dog" />
                    <RadioOption value={2} text="Cat" />
                    <RadioOption value={3} text="Alpaca" />
                    <RadioOption value={4} text="Llama" />
                </OptionGroupControl>

                <CheckboxControl label="Easy Mode?" text="Yes" />

                <TextAreaControl label="bio" placeholder="tell us about yourself" />

                <Button text="Submit" />
            </form>
        </Section>
    );
}
