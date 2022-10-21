import React from 'react';
import './App.css';
import { CalendarWithData } from '../pages/MainPage/Calendar/Calendar';
import { Route, Routes } from 'react-router-dom';
import { AppNavBar } from '../components/AppBar/AppNavBar';
import { Container } from '@mui/material';
import { DailyPageContainer } from '../pages/DailyPage/DailyPageContainer';
import { FuelControl } from '../pages/FuelControlPage/FuelControl';

export const App = () => {
  return (
    <div className="App">
      <AppNavBar />
      <Container maxWidth="xl">
        <Routes>
          <Route path={'/'} element={<CalendarWithData />} />
          <Route path={'/fuel'} element={<FuelControl />} />
          <Route path={'/dailyTable/:date/:isMorning'} element={<DailyPageContainer />} />
        </Routes>
      </Container>
    </div>
  );
};
