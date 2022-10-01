import * as React from 'react';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { StyledTableCell } from './StyledTable';
import { EditableTableRow } from './EditableTableRow/EditableTableRow';
import { getDailyTableData } from '../../../bll/selectors/dailyTable-selector';
import { dailyTableSlice, NEW_ROW_ID } from '../../../bll/reducers/dailyTable-reducer';

const TABLE_CELLS = [
  'Номер авто',
  'ФИО водителя',
  'Наличные за смену',
  'Борт',
  'Мойка',
  'Газ',
  'Бензин',
  'Другие расходы',
  'Аванс',
  'Итого',
];

interface Props {
  date: string;
  isMorning: number;
}

export const DailyTable: React.FC<Props> = ({ date, isMorning }) => {
  const data = useSelector(getDailyTableData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dailyTableSlice.actions.loadTableRequest({ date, isMorning }));
  }, [dispatch, date, isMorning]);

  const onUpdateDataHandler = (rowId: string) => (cellName: string) => (value: string | null) => {
    rowId !== NEW_ROW_ID
      ? dispatch(dailyTableSlice.actions.updateRow({ data: { [cellName]: value }, rowId }))
      : dispatch(dailyTableSlice.actions.addRow({ [cellName]: value }));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {TABLE_CELLS.map((cell, index) => (
              <StyledTableCell align="center" key={index}>
                {cell}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            return (
              <EditableTableRow
                rowIndex={index}
                key={row._id}
                rowData={row}
                onChangeData={onUpdateDataHandler(row._id)}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};