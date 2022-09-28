import {EditableSpan} from '../../../../common/EditableSpan/EditableSpan';
import * as React from 'react';
import {KeyboardEvent} from 'react';
import {DailyTableRow} from '../../../../api/api';
import {StyledTableCell, StyledTableRow} from '../StyledTable';

interface Props {
    rowData: DailyTableRow
    onChangeData: (cellName: string) => (value: string) => void
    rowIndex: number
}

export const EditableTableRow: React.FC<Props> = ({rowData, onChangeData, rowIndex}) => {
    const total: number = (rowData.cash || 0) + (rowData.bort || 0) - (rowData.gas || 0) - (rowData.fuel || 0) - (rowData.washing || 0) - (rowData.avans || 0) - (rowData.spendings || 0)

    const onKeyPressHandler = (cellIndex: number) => (e: KeyboardEvent<HTMLTableCellElement>) => {
        const focusSell = (arrowName: string, addRowIndex: number, addCellIndex: number) => {
            if (e.ctrlKey && e.key === arrowName) {
                const row = document.querySelector(`[data-rowIndex="${rowIndex + addRowIndex}"]`)
                if (row) {
                    const cell = row.querySelector(`[data-cellIndex="${cellIndex + addCellIndex}"] input`)
                    if (cell) {
                        (cell as HTMLInputElement).focus()
                    }
                }
            }
        }
        focusSell('ArrowRight', 0, 1)
        focusSell('ArrowLeft', 0, -1)
        focusSell('ArrowUp', -1, 0)
        focusSell('ArrowDown', 1, 0)
    }


    const createCell = (cellName: string, value: any, index: number, disabled?: boolean, align?: "center" | "inherit" | "left" | "right" | "justify") => {
        return <StyledTableCell data-cellIndex={index} align={align || 'center'}
                                onKeyDown={onKeyPressHandler(index)}>
            <EditableSpan value={value} onChange={onChangeData(cellName)} disabled={disabled}/>
        </StyledTableCell>
    }

    return <StyledTableRow data-rowIndex={rowIndex}>
        {
            [
                {name: 'autoNumber', data: rowData.autoNumber},
                {name: 'name', data: rowData.name},
                {name: 'cash', data: rowData.cash},
                {name: 'bort', data: rowData.bort},
                {name: 'washing', data: rowData.washing},
                {name: 'gas', data: rowData.gas},
                {name: 'fuel', data: rowData.fuel},
                {name: 'spendings', data: rowData.spendings},
                {name: 'avans', data: rowData.avans},
                {name: 'total', data: total, disabled: true},
            ].map((item, index) => createCell(item.name, item.data, index, item.disabled || false))
        }
    </StyledTableRow>
}