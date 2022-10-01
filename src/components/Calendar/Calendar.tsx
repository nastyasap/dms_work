import React, {useState} from 'react';
import Calendar from 'react-calendar';
import s from './Calendar.module.scss'
import 'react-calendar/dist/Calendar.css'
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import moment from 'moment';

export const CalendarWithData = () => {
    const navigate = useNavigate()
    const [value, onChange] = useState(new Date());
    const date = moment(value).format('YYYY-MM-DD')

    return (
        <div className={s.container}>
            <Calendar className={s.reactCalendar} onChange={onChange} value={value} calendarType={'ISO 8601'}/>
            <div className={s.buttonsWrapper}>
                <Button sx={{color: 'white'}} variant={'contained'} onClick={() => navigate(`/dailyTable/${date}/1`)}>Утро</Button>
                <Button sx={{color: 'white'}} variant={'contained'} onClick={() => navigate(`/dailyTable/${date}/0`)}>Вечер</Button>
            </div>
        </div>
    );
}