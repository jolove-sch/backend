import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MonitoringPage from './components/MonitoringPage';
import RegisterPage from './components/RegisterPage';
import BandRegisterPage from './components/BandRegisterPage';
import MobilRegisterPage from './components/MobilRegisterPage';
import UserRegisterPage from './components/UserRegisterPage';
import MainPage from './components/MainPage';
import React from 'react';
// import CreateList from './components/CreateList';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/monitoringpage" element={<MonitoringPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/bandregisterpage" element={<BandRegisterPage />} />
        <Route path="/mobilregisterpage" element={<MobilRegisterPage />} />
        <Route path="/userregisterpage" element={<UserRegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
