import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import SparePartContext from '../context/SparePartContext';
import ModalContext from '../context/ModalContext';
export default function SelectVariants() {
    const { categories } = useContext(SparePartContext);
    const { newProductCategory, setNewProductCategory } = useContext(ModalContext);

    const handleChange = (event) => {
        setNewProductCategory(event.target.value);
    };

    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-standard-label">Kategori</InputLabel>
                <Select
                    value={newProductCategory}
                    onChange={handleChange}
                    color="secondary"
                >
                    {categories.map((category, key) => (
                        <MenuItem value={category} key={key}>{category}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}