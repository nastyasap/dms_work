import React from 'react';
import './App.css';
import {DailyTable} from '../components/Table/DailyTable';
import {CalendarWithData} from '../components/Calendar/Calendar';
import { Routes, Route } from 'react-router-dom';
import {AppNavBar} from '../components/AppBar/AppNavBar';

export const App = () => {
    return (
        <div className="App">
            <AppNavBar/>
            <Routes>
                <Route path={'/'} element={<CalendarWithData/>}/>
                <Route path={'/dailyTable:date:isMorning'} element={<DailyTable/>}/>
            </Routes>
        </div>
    );
}

