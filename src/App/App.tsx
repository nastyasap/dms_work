import React from 'react';
import './App.css';
import { CalendarWithData } from '../components/Calendar/Calendar';
import { Route, Routes } from 'react-router-dom';
import { AppNavBar } from '../components/AppBar/AppNavBar';
import { TableContainer } from '../components/Table/TableContainer';
import { Container } from '@mui/material';

export const App = () => {
  return (
    <div className="App">
      <AppNavBar />
      <Container maxWidth="xl">
        <Routes>
          <Route path={'/'} element={<CalendarWithData />} />
          <Route path={'/dailyTable/:date/:isMorning'} element={<TableContainer />} />
        </Routes>
      </Container>
    </div>
  );
};
