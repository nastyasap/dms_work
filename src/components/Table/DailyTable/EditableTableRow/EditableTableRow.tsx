import * as React from 'react';
import { DailyTableRow } from '../../../../api/api';
import { StyledTableRow } from '../../StyledTable';
import { TableCell } from './TableCell/TableCell';
import { DeleteButton } from '../../../../common/DeleteButton/DeleteButton';
import Cell from '@mui/material/TableCell';

interface Props {
  rowData: DailyTableRow;
  onChangeData: (cellName: string) => (value: string) => void;
  rowIndex: number;
}

export const EditableTableRow: React.FC<Props> = ({ rowData, onChangeData, rowIndex }) => {
  const total: string = (
    Number(rowData.cash) +
    Number(rowData.bort) -
    Number(rowData.gas) -
    Number(rowData.fuel) -
    Number(rowData.washing) -
    Number(rowData.avans) -
    Number(rowData.spendings)
  )
    .toFixed(2)
    .toString();

  return (
    <StyledTableRow data-rowindex={rowIndex}>
      {[
        { name: 'autoNumber', placeHolder: '№ авто', data: rowData.autoNumber },
        { name: 'name', placeHolder: 'ФИО', data: rowData.name },
        { name: 'cash', placeHolder: 'наличка', data: rowData.cash },
        { name: 'bort', placeHolder: 'борт', data: rowData.bort },
        { name: 'washing', placeHolder: 'мойка', data: rowData.washing },
        { name: 'gas', placeHolder: 'газ', data: rowData.gas },
        { name: 'fuel', placeHolder: 'бензин', data: rowData.fuel },
        { name: 'spendings', placeHolder: 'расходы', data: rowData.spendings },
        { name: 'avans', placeHolder: 'аванс', data: rowData.avans },
        { name: 'total', placeHolder: 'всего', data: total, disabled: true },
        { name: 'removeRow', placeHolder: 'удалить', data: null },
      ].map((item, index) => {
        if (item.name === 'removeRow') {
          return (
            <Cell sx={{ padding: '0' }} key={item.name}>
              <DeleteButton rowId={rowData._id} />
            </Cell>
          );
        }
        return (
          <TableCell
            key={rowData._id + item.name}
            onChangeData={onChangeData}
            cellName={item.name}
            placeHolder={item.placeHolder}
            value={item.data || ''}
            cellIndex={index}
            rowIndex={rowIndex}
            rowId={rowData._id}
            disabled={item.disabled || false}
          />
        );
      })}
    </StyledTableRow>
  );
};
