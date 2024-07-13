import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import { LocalTable } from 'components/table';

const columns = [
    "Application Name",
    "Description",
    "Availability",
    "Adaption",
    "Architure link",
]
export function ApplicationsTable({ data = [] }) {
    return (
        <LocalTable columns={columns}>
            {data?.map((row, index) => (
                <TableRow
                    key={row.name || row?.appName || index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell width="300">{row.appName}</TableCell>
                    <TableCell width="350">{row.description}</TableCell>
                    <TableCell width="100">
                        <Chip label={row.availability} color="success" />
                    </TableCell>
                    <TableCell width="100">{row.adaption}</TableCell>
                    <TableCell width="100">
                        {row.link
                            ? <Link href={row.link} target="_blank" rel="noopener">Architecture Link</Link>
                            : '-'
                        }
                    </TableCell>
                </TableRow>
            ))}
        </LocalTable>
    );
}
