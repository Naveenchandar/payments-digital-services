import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const LocalSelect = ({ selectedValue, handleSelectChange, label, options }) => {

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="month-select-label">{label}</InputLabel>
                <Select
                    labelId="month-select-label"
                    id="month-select"
                    value={selectedValue}
                    label="Month"
                    onChange={handleSelectChange}
                >
                    {options.map(item => {
                        return <MenuItem value={item.value} key={item.label}>{item.label}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}