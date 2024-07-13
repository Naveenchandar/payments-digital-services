import * as React from 'react';
import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

export const LocalTable = ({ columns = [], children }) => {
    return (
        <TableContainer component={Paper} className='table-container'>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns?.map(item => {
                            return (
                                <TableCell key={item}>{item}</TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {children}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
}