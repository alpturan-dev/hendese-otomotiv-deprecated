import * as React from 'react';
import { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import SparePartContext from '../context/SparePartContext';

export default function SelectVariants() {
    const { categories, filterCategory, setFilterCategory } = useContext(SparePartContext);

    const handleChange = (event) => {
        setFilterCategory(event.target.value);
    };

    useEffect(() => {
        setFilterCategory("Tüm Kategoriler")
    }, [])

    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 230 }}>
                <InputLabel id="demo-simple-select-standard-label">Kategori</InputLabel>
                <Select
                    value={filterCategory}
                    onChange={handleChange}
                    color="secondary"
                >
                    <MenuItem value="Tüm Kategoriler">
                        Tüm Kategoriler
                    </MenuItem>
                    {categories.map((category, key) => (
                        <MenuItem value={category} key={key}>{category}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}