import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {EditableSpan} from '../../common/EditableSpan/EditableSpan';
import {EditableTableRow} from './TableRow/TableRow';

function createData(
    name: string,
    cash: number,
    gas: number,
    total: number,
    autoNumber?: number,
    bort?: number,
    washing?: number,
    fuel?: number,
    spendings?: number,
    avans?: number,
) {
    return {autoNumber, name, cash, bort, washing, gas, fuel, spendings, avans, total};
}

export const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const rows = [
    createData('Frozen yoghurt', 3456, 159, 6.0, 24, 4.0, 90, 40, 6, 5),
    createData('Ice cream sandwich', 1234, 237, 9.0, 37, 4.3, 237, 9.0, 37, 4.3),
    createData('Eclair', 2345, 262, 16.0, 24, 6.0, 237, 9.0, 37, 4.3),
];

const tableCell = ['Номер авто', 'ФИО водителя', 'Наличные за смену', 'Борт', 'Мойка', 'Газ', 'Бензин', 'Другие расходы', 'Аванс', 'Итого']

export const DailyTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {tableCell.map((cell, index) => (
                            <StyledTableCell align="center" key={index}>{cell}</StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="center">{row.autoNumber}</StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.cash}</StyledTableCell>
                            <StyledTableCell align="right">{row.bort}</StyledTableCell>
                            <StyledTableCell align="right">{row.washing}</StyledTableCell>
                            <StyledTableCell align="right">{row.gas}</StyledTableCell>
                            <StyledTableCell align="right">{row.fuel}</StyledTableCell>
                            <StyledTableCell align="right">{row.spendings}</StyledTableCell>
                            <StyledTableCell align="right">{row.avans}</StyledTableCell>
                            <StyledTableCell align="right">{row.total}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    <EditableTableRow/>
                </TableBody>
            </Table>
        </TableContainer>
    );
}