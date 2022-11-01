import { Box, Modal } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { dailyTableSlice, NEW_ROW_ID } from '../../../bll/reducers/dailyTable-reducer';
import Button from '@mui/material/Button';
import { buttonBox, buttonStyle, modalWrapper, title } from './DeleteButton.style';

interface Props {
  rowId: string;
  onClose: () => void;
}

export const DeleteButtonModal: React.FC<Props> = ({ rowId, onClose }) => {
  const dispatch = useDispatch();
  const onDeleteHandler = (rowId: string) => {
    if (rowId !== NEW_ROW_ID) {
      rowId && dispatch(dailyTableSlice.actions.deleteRow(rowId));
      onClose();
    }
  };
  return (
    <Modal
      open={rowId !== null}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalWrapper}>
        <Box sx={title}>Вы уверены, что хотите удалить эту строку?</Box>
        <Box sx={buttonBox}>
          <Button variant={'contained'} sx={buttonStyle} onClick={() => onDeleteHandler(rowId)}>
            Да
          </Button>
          <Button variant={'contained'} sx={buttonStyle} onClick={onClose}>
            Нет
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
