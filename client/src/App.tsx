import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SettingPage from './pages/SettingPage';
import ContactPage from './pages/ContactPage';
import { useEffect } from 'react';
import productApi from './api/productApi';

function App() {
  return (
    <div className="pl-5 flex">
      <Router >
        <Navbar />
          <div className="Main w-full">
            <AnimatePresence exitBeforeEnter>
              <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contact-us" element={<ContactPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/sign-up" element={<RegisterPage/>}/>
                <Route path="/setting" element={<SettingPage/>}/>
              </Routes>
            </AnimatePresence>
          </div>
      </Router>
    </div>
  )
}

export default App
