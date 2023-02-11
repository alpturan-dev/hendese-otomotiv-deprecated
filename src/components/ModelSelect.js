import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import SparePartContext from '../context/SparePartContext';
import ModalContext from '../context/ModalContext';
export default function SelectVariants() {
    const { models } = useContext(SparePartContext);
    const { newProductModel, setNewProductModel } = useContext(ModalContext);

    const handleChange = (event) => {
        setNewProductModel(event.target.value);
    };

    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 230 }}>
                <InputLabel id="demo-simple-select-standard-label">Model</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={newProductModel}
                    onChange={handleChange}
                    label="Kategori"
                    color="secondary"
                >
                    {models.map((model, key) => (
                        <MenuItem value={model} key={key}>{model}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}