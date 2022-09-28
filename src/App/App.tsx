import React from 'react';
import './App.css';
import {CalendarWithData} from '../components/Calendar/Calendar';
import {Route, Routes} from 'react-router-dom';
import {AppNavBar} from '../components/AppBar/AppNavBar';
import {TableContainer} from '../components/Table/TableContainer';

export const App = () => {
    return (
        <div className="App">
            <AppNavBar/>
            <Routes>
                <Route path={'/'} element={<CalendarWithData/>}/>
                <Route path={'/dailyTable:date:isMorning'} element={<TableContainer/>}/>
            </Routes>
        </div>
    );
}

