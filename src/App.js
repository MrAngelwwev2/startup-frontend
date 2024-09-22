import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AcademicInfo from './pages/AcademicInfo';
import SignUp from './pages/SignUp';
import BasicInfo from './pages/BasicInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/basic-info" element={<BasicInfo />} />
        <Route path="/academic-info" element={<AcademicInfo />} />
      </Routes>
    </Router>
  );
}

export default App;