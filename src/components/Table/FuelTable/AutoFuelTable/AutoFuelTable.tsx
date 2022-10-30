import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell, StyledTableRow } from '../../StyledTable';
import { LinearProgress, TableCell } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import * as React from 'react';

const TABLE_CELLS = ['Номер авто', 'Газ, р.', 'Бензин, р.', 'Введите к-во смен', 'Среднее за смену'];
const data = [
  { autoNumber: '4518', gas: '165', fuel: '40', count: '12', average: '3' },
  { autoNumber: '4518', gas: '165', fuel: '40', count: '12', average: '3' },
  { autoNumber: '4518', gas: '165', fuel: '40', count: '12', average: '3' },
];
export const AutoFuelTable: React.FC = () => {
  const isLoading = true;
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
          {isLoading && (
            <TableRow>
              <TableCell style={{ padding: '0', border: 'none' }} colSpan={10}>
                <LinearProgress />
              </TableCell>
            </TableRow>
          )}
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            return (
              <StyledTableRow key={index}>
                {[
                  { name: 'autoNumber', data: row.autoNumber },
                  { name: 'gas', data: row.gas },
                  { name: 'fuel', data: row.fuel },
                  { name: 'count', data: row.count },
                  { name: 'average', data: row.average },
                ].map((item, index) => {
                  return <StyledTableCell key={item.name}>{item.data}</StyledTableCell>;
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
