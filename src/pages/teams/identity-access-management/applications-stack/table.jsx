import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';

export function ApplicationsTable({ data = [] }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Application Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Availability</TableCell>
                        <TableCell>Adaption</TableCell>
                        <TableCell>Architure link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.appName}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>
                                <Chip label={row.availability} color="success" />
                            </TableCell>
                            <TableCell>{row.adaption}</TableCell>
                            <TableCell>
                                {row?.link === "Work In Progress" ? "Work In Progress" : row?.link 
                                    ?
                                    <Link href={row.link} target="_blank" rel="noopener">Architecture Link</Link>
                                    : '-'
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
