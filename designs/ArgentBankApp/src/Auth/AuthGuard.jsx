import React from 'react';
import { accountServices } from './account.services';
import { Navigate } from 'react-router-dom';

export default function AuthGuard({ children }) {
  if (!accountServices.isLogged()) {
    return <Navigate to='/profil' />;
  }
  return children;
}