import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import { NEW_ROW_ID } from '../../bll/reducers/dailyTable-reducer';
import { useModals } from '../../components/Modals/ModalsProvider';

interface Props {
  rowId: string;
}

export const DeleteButton: React.FC<Props> = ({ rowId }) => {
  const { setDeleteTableRow } = useModals();

  return (
    <IconButton onClick={() => setDeleteTableRow(rowId)} aria-label="delete" disabled={rowId === NEW_ROW_ID}>
      <DeleteIcon />
    </IconButton>
  );
};
