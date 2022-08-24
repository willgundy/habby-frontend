import {  InputControl, SelectControl } from '../Form/FormControls/FormControls.jsx';
import Button from '../Basic/Button/Button';
import styles from './List.css';
import { useEffect, useState } from 'react';
import { useTypes } from '../../../../State/Hooks/pokedex.js';
import { useSearch } from '../../../../State/Hooks/url.js';

export default function SearchBar() {
    const { types } = useTypes();
    const { params, setParams } = useSearch();
    const [formData, setFormData] = useState({ pokemon: '', type: '' });
    const { pokemon, type } = params;
  
    useEffect(() => {
        setFormData({ pokemon, type });
    }, []);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setParams(formData);
    };
  
    const handleChange = ({ target: { name, value } }) => {
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.Filters}>
                <InputControl
                    name="pokemon"
                    placeholder="Search by Pokemon Name"
                    label="pokemon"
                    value={formData.pokemon}
                    onChange={handleChange}
                />
                <SelectControl
                    label="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}>
                    <option value="">All Types</option>
                    {types && types.map((type) => (
                        <option key={type.type} value={type.type}>{`${type.type} (${type.count})`}</option>
                    ))};
                </SelectControl>
            </div>
            <Button text={'Search Pokedex'}/>
        </form>
    );
}
