import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/login/login.js';
import Home from './page/home/home.js';
import Navibar from './components/navibar/navibar.js';
import './index.css';
const App =() =>{
  return (
    <div>
    <Navibar />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
