import {EditableSpan} from '../../../common/EditableSpan/EditableSpan';
import * as React from 'react';
import {KeyboardEvent} from 'react';
import {StyledTableCell, StyledTableRow} from '../DailyTable';
import {DailyTableRow} from '../../../api/api';

interface Props {
    rowData: DailyTableRow
    onChangeData: (cellName: string) => (value: string) => void
}

export const EditableTableRow: React.FC<Props> = ({rowData, onChangeData}) => {
    // @ts-ignore
    const total: number =   rowData.cash + rowData.bort - rowData.gas - rowData.fuel - rowData.washing - rowData.avans - rowData.spendings

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTableCellElement>) => {
        if (e.key === 'Enter') {

        }
        if (e.key === 'ArrowRight') {

        }
        console.log(e.key)
    }


    const createCell = (cellName: string, value: any, align?: "center" | "inherit" | "left" | "right" | "justify") => {
        return <StyledTableCell align={align || 'center'} onKeyDown={onKeyPressHandler}>
            <EditableSpan value={value} onChange={onChangeData(cellName)}/>
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
        {createCell('total', total)}
    </StyledTableRow>
}