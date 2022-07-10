import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateTripPage from './pages/CreateTripPage';
import TripDetailPage from './pages/TripDetailPage';
import TripListPage from './pages/TripsListPage';
import HomePage from './pages/HomePage';
import ApplicationPage from './pages/ApplicationPage';
import LoginPage from './pages/LoginPage';
import styled from 'styled-components';
import { CssBaseline } from '@mui/material';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inscricao" element={<ApplicationPage />} />
          <Route path="/viagens/criar" element={<CreateTripPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/viagens/detalhe" element={<TripDetailPage />} />
          <Route path="/viagens" element={<TripListPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
