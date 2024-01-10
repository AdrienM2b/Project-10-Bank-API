import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../views/LoginPage';

function AuthRouter() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path='sign-in' element={<LoginPage />} />
    </Routes>
  );
}

export default AuthRouter;
