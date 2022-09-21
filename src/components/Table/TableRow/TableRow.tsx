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

    const onChangeHandler = (value: any) => {
        dispatch(dailyTableSlice.actions.updateRow({data: value, rowId: rowData.rowId}))
    }

    const createCell = (value: any, align?: "center" | "inherit" | "left" | "right" | "justify") => {
        return <StyledTableCell align={align || 'center'} onKeyDown={onKeyPressHandler}>
            <EditableSpan value={value} onChange={() => onChangeHandler(value)}/>
        </StyledTableCell>
    }

    return <StyledTableRow>
        {createCell(rowData.autoNumber)}
        {createCell(rowData.name)}
        {createCell(rowData.cash)}
        {createCell(rowData.bort)}
        {createCell(rowData.washing)}
        {createCell(rowData.gas)}
        {createCell(rowData.fuel)}
        {createCell(rowData.spendings)}
        {createCell(rowData.avans)}
        {createCell(rowData.total)}
    </StyledTableRow>
}