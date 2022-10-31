import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { dailyTableSlice, NEW_ROW_ID } from '../../bll/reducers/dailyTable-reducer';

interface Props {
  rowId: string;
}

export const DeleteButton: React.FC<Props> = ({ rowId }) => {
  const dispatch = useDispatch();
  const onDeleteHandler = (rowId: string) => {
    if (rowId !== NEW_ROW_ID) dispatch(dailyTableSlice.actions.deleteRow(rowId));
  };
  return (
    <IconButton
      onClick={() => onDeleteHandler(rowId)}
      sx={{ marginTop: '7px' }}
      aria-label="delete"
      disabled={rowId === NEW_ROW_ID}
    >
      <DeleteIcon />
    </IconButton>
  );
};
