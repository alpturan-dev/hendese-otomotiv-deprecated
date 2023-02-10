import * as React from 'react';
import { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import SparePartContext from '../context/SparePartContext';

export default function SelectVariants() {
    const { models, filterModel, setFilterModel } = useContext(SparePartContext);

    const handleChange = (event) => {
        setFilterModel(event.target.value);
    };

    useEffect(() => {
        setFilterModel("Tüm Modeller")
    }, [])
    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 230 }}>
                <InputLabel id="demo-simple-select-standard-label">Model</InputLabel>
                <Select
                    value={filterModel}
                    onChange={handleChange}
                    color="secondary"
                >
                    <MenuItem value="Tüm Modeller">
                        Tüm Modeller
                    </MenuItem>
                    {models.map((model, key) => (
                        <MenuItem value={model} key={key}>{model}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}