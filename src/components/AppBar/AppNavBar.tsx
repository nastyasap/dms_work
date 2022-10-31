import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import s from './NavBar.module.scss';

const pages = [
  <Link to="/" className={s.link}>
    Ведомость по дням
  </Link>,
  <Link to="/" className={s.link}>
    Статистика по расходам
  </Link>,
  <Link to="/fuel" className={s.link}>
    Учет топлива
  </Link>,
];

export const AppNavBar = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: 3 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            DMS
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around' }}>
            {pages.map((page, index) => (
              <Button key={index} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
