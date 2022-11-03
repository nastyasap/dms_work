import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { DailyPage } from './DailyPage';
import { useEffect } from 'react';
import { dailyTableSlice } from '../../bll/reducers/dailyTable-reducer';
import { useDispatch } from 'react-redux';

export const DailyPageContainer = () => {
  const { date, isMorning } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dailyTableSlice.actions.loadTableRequest({ date: date || '', isMorning: Number(isMorning) }));
    return () => {
      dispatch(dailyTableSlice.actions.resetTable());
    };
  }, [dispatch, date, isMorning]);

  const onArrowBackClick = () => {
    const prevDay = moment(date).subtract(1, 'd').format('YYYY-MM-DD');
    if (isMorning === '0') {
      navigate(`/dailyTable/${date}/1`);
    } else navigate(`/dailyTable/${prevDay}/0`);
  };

  const onArrowForwardClick = () => {
    const nextDay = moment(date).add(1, 'd').format('YYYY-MM-DD');
    if (isMorning === '0') {
      navigate(`/dailyTable/${nextDay}/1`);
    } else navigate(`/dailyTable/${date}/0`);
  };

  return (
    <DailyPage
      isMorning={isMorning}
      date={date}
      onArrowBackClick={onArrowBackClick}
      onArrowForwardClick={onArrowForwardClick}
    />
  );
};
