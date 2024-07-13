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
                        <TableCell>Application</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Availability</TableCell>
                        <TableCell>Business Units</TableCell>
                        <TableCell>Regions</TableCell>
                        <TableCell>Architure link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className='app-name'>{row.appName}</TableCell>
                            <TableCell width="400" className="app-description">{row.description}</TableCell>
                            <TableCell width="10">
                                <Chip label={row?.availability || "-"} color="success" />
                            </TableCell>
                            <TableCell>{row?.businessUnits || "-"}</TableCell>
                            <TableCell className='app-region'>{row?.regions || "-"}</TableCell>
                            <TableCell className='app-link'>
                                {row?.link
                                    ? <Link href={row.link} target="_blank" rel="noopener">Architecture Link</Link>
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
