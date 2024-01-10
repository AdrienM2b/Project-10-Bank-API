import React from 'react';
import './styles/argentBank.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import AuthRouter from './Auth/AuthRouter.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login/*' element={<AuthRouter />} />
      </Routes>
    </Router>
  );
}

export default App;
