import * as React from 'react';
import {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {EditableTableRow} from './EditableTableRow/EditableTableRow';
import {useDispatch, useSelector} from 'react-redux';
import {dailyTableSlice} from '../../bll/reducers/dailyTable-reducer';
import {getTable} from '../../bll/selectors/dailyTable-selector';
import {StyledTableCell} from './StyledTable';


const TABLE_CELLS = ['Номер авто', 'ФИО водителя', 'Наличные за смену', 'Борт', 'Мойка', 'Газ', 'Бензин', 'Другие расходы', 'Аванс', 'Итого']

export const DailyTable = () => {

    const data = useSelector(getTable)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(dailyTableSlice.actions.loadTableRequest(787))
    }, [dispatch])

    const onUpdateDataHandler = (rowId: number | null) => (cellName: string) => (value: string) => {
        rowId
            ? dispatch(dailyTableSlice.actions.updateRow({data: {[cellName]: value}, rowId}))
            : dispatch(dailyTableSlice.actions.addRow({[cellName]: value}))

    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {TABLE_CELLS.map((cell, index) => (
                            <StyledTableCell align="center" key={index}>{cell}</StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => {
                        return <EditableTableRow key={row.rowId} rowData={row}
                                                 onChangeData={onUpdateDataHandler(row.rowId)}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}