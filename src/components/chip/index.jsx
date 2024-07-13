import * as React from 'react';
import Chip from '@mui/material/Chip';

export function MuiChip({ label, variant }) {
    return (
        <>
            <Chip label={label} variant={variant || "outlined"} sx={{ mr: 1 }} />
        </>
    );
}