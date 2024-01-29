import React from 'react';
import './styles/argentBank.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import LoginPage from './views/LoginPage.jsx';
import ProfileUser from './views/ProfileUser.jsx';
import store from './store/store.js';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
