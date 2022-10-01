import * as React from 'react';
import { DailyTableRow } from '../../../../api/api';
import { StyledTableRow } from '../StyledTable';
import { TableCell } from './TableCell/TableCell';

interface Props {
  rowData: DailyTableRow;
  onChangeData: (cellName: string) => (value: string | null) => void;
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
  ).toString();

  return (
    <StyledTableRow data-rowindex={rowIndex}>
      {[
        { name: 'autoNumber', data: rowData.autoNumber },
        { name: 'name', data: rowData.name },
        { name: 'cash', data: rowData.cash },
        { name: 'bort', data: rowData.bort },
        { name: 'washing', data: rowData.washing },
        { name: 'gas', data: rowData.gas },
        { name: 'fuel', data: rowData.fuel },
        { name: 'spendings', data: rowData.spendings },
        { name: 'avans', data: rowData.avans },
        { name: 'total', data: total, disabled: true },
      ].map((item, index) => {
        return (
          <TableCell
            key={rowData._id + item.name}
            onChangeData={onChangeData}
            cellName={item.name}
            value={item.data}
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