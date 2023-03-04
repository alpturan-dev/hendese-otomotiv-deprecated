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

    useEffect(() => {
        setFilterModel("Tüm Modeller")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <FormControl variant="filled" sx={{ minWidth: 230 }}>
                <InputLabel id="demo-simple-select-standard-label">Model</InputLabel>
                <Select
                    value={filterModel}
                    onChange={(event) => setFilterModel(event.target.value)}
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