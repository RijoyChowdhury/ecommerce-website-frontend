import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Collapse, styled } from '@mui/material';
import { PiMagnifyingGlassMinusBold, PiMagnifyingGlassPlusBold } from 'react-icons/pi';
import { useState } from 'react';

function createData(name, calories, fat, carbs, protein, fibres) {
    return { name, calories, fat, carbs, protein, fibres };
}

const rows = [
    createData('546615454656421f43rf', '546615454656421f43rf', 'test3@test.com', 'Delivered', 510, '12/04/2025'),
    createData('546615454656421f43rf', '546615454656421f43rf', 'test3@test.com', 'Delivered', 249, '12/04/2025'),
    createData('546615454656421f43rf', '546615454656421f43rf', 'test3@test.com', 'Delivered', 1700, '12/04/2025'),
    createData('546615454656421f43rf', '546615454656421f43rf', 'test3@test.com', 'Delivered', 950, '12/04/2025'),
    createData('546615454656421f43rf', '546615454656421f43rf', 'test3@test.com', 'Delivered', 430, '12/04/2025'),

    // createData('546615454656421f43rf', '546615454656421f43rf', 'test3@test.com', 'Delivered', 510, '12/04/2025'),
    // createData('546615454656421f43rf', '546615454656421f43rf', 'test3@test.com', 'Delivered', 249, '12/04/2025'),
    // createData('546615454656421f43rf', '546615454656421f43rf', 'test3@test.com', 'Delivered', 1700, '12/04/2025'),
    // createData('546615454656421f43rf', '546615454656421f43rf', 'test3@test.com', 'Delivered', 950, '12/04/2025'),
    // createData('546615454656421f43rf', '546615454656421f43rf', 'test3@test.com', 'Delivered', 430, '12/04/2025'),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#ff5252',
        color: 'white',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const OrderInfo = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=''>
            <Table stickyHeader sx={{ height: '100%' }} aria-label="order_table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Order Id</StyledTableCell>
                        <StyledTableCell align="">Payment Id</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                        <StyledTableCell align="center">Total Amount</StyledTableCell>
                        <StyledTableCell align="center">Date</StyledTableCell>
                        <StyledTableCell align="center">View Details</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <>
                            <StyledTableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="">{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">{row.protein}</TableCell>
                                <TableCell align="center">{row.fibres}</TableCell>
                                <TableCell align="center">
                                    <div className='flex justify-center text-xl'>
                                        {!open && <PiMagnifyingGlassPlusBold className='cursor-pointer hover:text-primary' onClick={() => setOpen(!open)} />}
                                        {open && <PiMagnifyingGlassMinusBold className='cursor-pointer hover:text-primary' onClick={() => setOpen(!open)} />}
                                    </div>
                                </TableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <Box sx={{ margin: 1 }}>
                                            Rijoy eurdfhkdsnewo wefewnf ewfjno ewhfewjf ejh ewh n enfoefoenf ewhue nvjefef kefh vovhjnijvds
                                        </Box>
                                    </Collapse>
                                </TableCell>
                            </StyledTableRow>
                        </>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
};

export default OrderInfo;