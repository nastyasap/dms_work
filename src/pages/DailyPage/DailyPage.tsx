import cn from 'classnames';
import s from './DailyPage.module.scss';
import { DailyTable } from '../../components/Table/DailyTable/DailyTable';
import { Button } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import React from 'react';
import { Comment } from '../../components/Comment/Comment';

interface Props {
  isMorning: string | undefined;
  date: string | undefined;
  onArrowBackClick: () => void;
  onArrowForwardClick: () => void;
}

export const DailyPage: React.FC<Props> = ({ isMorning, date, onArrowBackClick, onArrowForwardClick }) => {
  const shownDate = new Date(date || '').toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <div className={s.container}>
      <span className={s.text}>{shownDate}</span>
      <span className={cn(s.text, s.bold)}>{isMorning === '1' ? 'Утренняя пересменка' : 'Вечерняя пересменка'}</span>
      <Comment />
      <div className={s.tableWrapper}>
        <DailyTable date={date || ''} isMorning={Number(isMorning)} />
      </div>
      <div className={s.arrowButtons}>
        <Button onClick={onArrowBackClick}>
          <ArrowBackRoundedIcon fontSize={'large'} />
        </Button>
        <Button onClick={onArrowForwardClick}>
          <ArrowForwardRoundedIcon fontSize={'large'} />
        </Button>
      </div>
    </div>
  );
};
