import * as React from 'react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dailyTableSlice } from '../../bll/reducers/dailyTable-reducer';
import { Box, TextField } from '@mui/material';
import { commentField, text } from './Comment.style';
import useDebounce from '../../common/functions/useDebounce';
import { getComment } from '../../bll/selectors/dailyTable-selector';

export const CommentField: React.FC = () => {
  const comment = useSelector(getComment);
  const [value, setValue] = useState(comment);
  const dispatch = useDispatch();
  const debouncedFieldValue = useDebounce(value, 1000);

  useEffect(() => {
    setValue(comment);
  }, [comment]);

  useEffect(() => {
    dispatch(dailyTableSlice.actions.addComment(debouncedFieldValue));
  }, [dispatch, debouncedFieldValue]);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <Box sx={commentField}>
      <TextField
        value={value}
        onChange={onChangeValue}
        id="outlined-multiline-static"
        maxRows={5}
        sx={text}
        multiline
      />
    </Box>
  );
};
