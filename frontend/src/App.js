import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MonitoringPage from './components/MonitoringPage';
import BandRegisterPage from './components/BandRegisterPage';
import MobilRegisterPage from './components/MobilRegisterPage';
import UserRegisterPage from './components/UserRegisterPage';
import MainPage from './components/MainPage';
import Register from './components/Register';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/monitoringpage" element={<MonitoringPage />} />
        <Route path="/bandregisterpage" element={<BandRegisterPage />} />
        <Route path="/mobilregisterpage" element={<MobilRegisterPage />} />
        <Route path="/userregisterpage" element={<UserRegisterPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
