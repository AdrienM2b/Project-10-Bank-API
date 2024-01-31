import React from 'react';
import './styles/argentBank.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import LoginPage from './views/LoginPage.jsx';
import store from './store/store.js';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import ProfileUser from './views/ProfileUser.jsx';

function ProtectedRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  const location = useLocation();

  if (!token) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <ProfileUser />
              </ProtectedRoute>
            }
          />{' '}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
