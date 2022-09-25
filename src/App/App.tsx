import React from 'react';
import './App.css';
import {DailyTable} from '../components/Table/DailyTable';
import {CalendarWithData} from '../components/Calendar/Calendar';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<CalendarWithData/>}/>
                <Route path={'/dailyTable:id'} element={<DailyTable/>}/>
            </Routes>
        </div>
    );
}

