import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AcademicInfo from './pages/AcademicInfo';
import SignUp from './pages/SignUp';
import BasicInfo from './pages/BasicInfo';
import ProfileSelection from './pages/ProfileSelection';
import CompanyLogin from './pages/CompanyLogin';
import CompanySignup from './pages/CompanySignup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ProfileSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/basic-info" element={<BasicInfo />} />
        <Route path="/academic-info" element={<AcademicInfo />} />
        <Route path="/company-login" element={<CompanyLogin />} />
        <Route path="/company-signup" element={<CompanySignup />} />
      </Routes>
    </Router>
  );
}

export default App;