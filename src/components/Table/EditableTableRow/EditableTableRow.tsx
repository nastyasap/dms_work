import {EditableSpan} from '../../../common/EditableSpan/EditableSpan';
import * as React from 'react';
import {KeyboardEvent} from 'react';
import {StyledTableCell, StyledTableRow} from '../DailyTable';
import {DailyTableType} from '../../../api/api';
import {useDispatch} from 'react-redux';
import {dailyTableSlice} from '../../../bll/reducers/dailyTable-reducer';

interface Props {
    rowData: DailyTableType
}

export const EditableTableRow: React.FC<Props> = ({rowData}) => {
    const dispatch = useDispatch()

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTableCellElement>) => {
        if (e.key === 'Enter') {

        }
        if (e.key === 'ArrowRight') {

        }
        console.log(e.key)
    }

    const onChangeHandler = (cellName: string) => (value: string) => {
        dispatch(dailyTableSlice.actions.updateRow({data: {[cellName]: value}, rowId: rowData.rowId}))
    }

    const createCell = (cellName: string, value: any, align?: "center" | "inherit" | "left" | "right" | "justify") => {
        return <StyledTableCell align={align || 'center'} onKeyDown={onKeyPressHandler}>
            <EditableSpan value={value} onChange={onChangeHandler(cellName)}/>
        </StyledTableCell>
    }

    return <StyledTableRow>
        {createCell('autoNumber',rowData.autoNumber)}
        {createCell('name', rowData.name)}
        {createCell('cash', rowData.cash)}
        {createCell('bort', rowData.bort)}
        {createCell('washing', rowData.washing)}
        {createCell('gas', rowData.gas)}
        {createCell('fuel', rowData.fuel)}
        {createCell('spendings', rowData.spendings)}
        {createCell('avans', rowData.avans)}
        {createCell('total', rowData.total)}
    </StyledTableRow>
}