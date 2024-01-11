import React from 'react';
import './styles/argentBank.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import LoginPage from './views/LoginPage.jsx';
import ProfileUser from './views/ProfileUser.jsx';
import AuthGuard from './Auth/AuthGuard.jsx';
import { AuthProvider } from './Auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login/' element={<LoginPage />} />
          <Route
            path='/profil'
            element={
              <AuthGuard>
                <ProfileUser />
              </AuthGuard>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
