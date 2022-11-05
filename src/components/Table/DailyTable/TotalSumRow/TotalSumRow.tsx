import * as React from 'react';
import { DailyTableRow } from '../../../../api/api';
import { StyledTableCell, StyledTableRow } from '../../StyledTable';

interface Props {
  tableData: DailyTableRow[];
}

export const TotalSumRow: React.FC<Props> = ({ tableData }) => {
  const countTotalProperty = (property: 'cash' | 'bort' | 'gas' | 'fuel' | 'washing' | 'spendings' | 'avans') => {
    return tableData.reduce((acc: number, item: DailyTableRow) => {
      acc += Number(item[property]);
      return acc;
    }, 0);
  };
  const totalCounts = [
    { name: 'totalCash', value: countTotalProperty('cash') },
    { name: 'totalBort', value: countTotalProperty('bort') },
    { name: 'totalWashing', value: countTotalProperty('washing') },
    { name: 'totalGas', value: countTotalProperty('gas') },
    { name: 'totalFuel', value: countTotalProperty('fuel') },
    { name: 'totalSpendings', value: countTotalProperty('spendings') },
    { name: 'totalAvans', value: countTotalProperty('avans') },
  ];
  const totalSum = totalCounts.reduce((acc: number, item: { name: string; value: number }) => {
    if (['totalCash', 'totalBort'].includes(item.name)) acc += item.value;
    else acc -= item.value;
    return +acc.toFixed(2);
  }, 0);
  return (
    <StyledTableRow>
      <StyledTableCell colSpan={2}>Всего</StyledTableCell>
      {totalCounts.map((cell) => {
        return <StyledTableCell key={cell.name}>{cell.value}</StyledTableCell>;
      })}
      <StyledTableCell colSpan={2}>{totalSum}</StyledTableCell>
    </StyledTableRow>
  );
};
