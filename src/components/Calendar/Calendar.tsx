import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import s from './Calendar.module.scss'
import 'react-calendar/dist/Calendar.css'
import {DailyTable} from '../Table/DailyTable';
import {Link, useNavigate} from 'react-router-dom';
import {Navigate} from 'react-router-dom';

export const CalendarWithData = () => {
    const navigate = useNavigate()
    const [editMode, setEditMode] = useState(false)
    const [value, onChange] = useState(new Date());

    const onChangeHandler = () => {
        onChange(value)
        setEditMode(!editMode)

    }
    return (
        <div className={''}>
            <Calendar  onChange={onChangeHandler} value={value} calendarType={'ISO 8601'}/>
            {editMode &&
                <div>
                    <button onClick={() => navigate('/dailyTable')}>Утро</button>
                    <button>Вечер</button>
                </div>
            }
        </div>
    );
}