import * as React from 'react';
import {useEffect} from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {EditableTableRow} from './EditableTableRow/EditableTableRow';
import {useDispatch, useSelector} from 'react-redux';
import {dailyTableSlice, EMPTY_DATA} from '../../bll/reducers/dailyTable-reducer';
import {getTable} from '../../bll/selectors/dailyTable-selector';

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

const tableCell = ['Номер авто', 'ФИО водителя', 'Наличные за смену', 'Борт', 'Мойка', 'Газ', 'Бензин', 'Другие расходы', 'Аванс', 'Итого']

export const DailyTable = () => {
    const data = useSelector(getTable)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(dailyTableSlice.actions.loadTableRequest(787))
    }, [dispatch])

    const onUpdateDataHandler = (rowId: number) => (cellName: string) => (value: string) => {
        dispatch(dailyTableSlice.actions.updateRow({data: {[cellName]: value}, rowId}))
    }

    const onAddDataHandler = (cellName: string) => (value: string) => {
        dispatch(dailyTableSlice.actions.addRow( {[cellName]: value}))
    }

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
                    {data.map((row) => {
                        return <EditableTableRow key={row.rowId} rowData={row} onChangeData={onUpdateDataHandler(row.rowId)}/>
                    })}
                    <EditableTableRow rowData={EMPTY_DATA} onChangeData={onAddDataHandler}/>
                </TableBody>
            </Table>
        </TableContainer>
    );
}