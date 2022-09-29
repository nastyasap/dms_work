import React, {useState} from 'react';
import Calendar from 'react-calendar';
import s from './Calendar.module.scss'
import 'react-calendar/dist/Calendar.css'
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';

export const CalendarWithData = () => {
    const navigate = useNavigate()
    const [value, onChange] = useState(new Date());
    const date = value.getFullYear() + '-' + ((+value.getMonth() + 1) < 10 ? '0' + (+value.getMonth() + 1) : (+value.getMonth() + 1)) + '-' + value.getDate()

    return (
        <div className={s.container}>
            <Calendar  onChange={onChange} value={value} calendarType={'ISO 8601'}/>
                <div>
                    <Button variant={'contained'} onClick={() => navigate(`/dailyTable/${date}/1`)}>Утро</Button>
                    <Button variant={'contained'} onClick={() => navigate(`/dailyTable/${date}/0`)}>Вечер</Button>
                </div>

        </div>
    );
}