import {EditableSpan} from '../../../common/EditableSpan/EditableSpan';
import * as React from 'react';
import {KeyboardEvent} from 'react';
import {StyledTableCell, StyledTableRow} from '../DailyTable';
import {DailyTableType} from '../../../api/api';

interface Props {
    rowData: DailyTableType
}

export const EditableTableRow: React.FC<Props> = ({rowData}) => {

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTableCellElement>) => {
        if (e.key === 'Enter') {

        }
        if (e.key === 'ArrowRight') {

        }
        console.log(e.key)
    }

    const createCell = (value: any, align?: "center" | "inherit" | "left" | "right" | "justify") => {
        return <StyledTableCell align={align || 'center'} onKeyDown={onKeyPressHandler}>
            <EditableSpan value={value} onChange={() => {
            }}/>
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