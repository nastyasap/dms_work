import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import { Box } from '@mui/material';
import { commentWrapper } from './Comment.style';
import { CommentField } from './CommentField';

export const Comment: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={commentWrapper}>
      <Button onClick={() => setOpen(!open)} variant={'outlined'}>
        <MapsUgcIcon fontSize={'large'} />
      </Button>
      {open && <CommentField />}
    </Box>
  );
};
