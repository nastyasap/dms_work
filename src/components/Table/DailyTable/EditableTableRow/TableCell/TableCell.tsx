import { StyledTableCell } from '../../StyledTable';
import { EditableSpan } from '../../../../../common/EditableSpan/EditableSpan';
import * as React from 'react';
import { KeyboardEvent } from 'react';

interface Props {
  cellName: string;
  rowId: string;
  cellIndex: number;
  rowIndex: number;
  disabled?: boolean;
  value: string | null;
  onChangeData: (cellName: string) => (value: string | null) => void;
}

export const TableCell: React.FC<Props> = ({ cellName, rowId, value, onChangeData, cellIndex, rowIndex, disabled }) => {
  const onKeyPressHandler = (cellIndex: number) => (e: KeyboardEvent<HTMLTableCellElement>) => {
    const focusSell = (arrowName: string, addRowIndex: number, addCellIndex: number) => {
      if (e.ctrlKey && e.key === arrowName) {
        const row = document.querySelector(`[data-rowindex="${rowIndex + addRowIndex}"]`);
        if (row) {
          const cell = row.querySelector(`[data-cellindex="${cellIndex + addCellIndex}"] input`);
          if (cell) {
            (cell as HTMLInputElement).focus();
          }
        }
      }
    };
    focusSell('ArrowRight', 0, 1);
    focusSell('ArrowLeft', 0, -1);
    focusSell('ArrowUp', -1, 0);
    focusSell('ArrowDown', 1, 0);
  };

  return (
    <StyledTableCell data-cellindex={cellIndex} align={'center'} onKeyDown={onKeyPressHandler(cellIndex)}>
      <EditableSpan
        rowId={rowId}
        placeholder={cellName}
        value={value}
        onChange={onChangeData(cellName)}
        disabled={disabled}
      />
    </StyledTableCell>
  );
};
