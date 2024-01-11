import React from 'react';
import '../styles/argentBank.scss';
import logoApp from '../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../Auth/AuthContext';

export default function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className='main-nav'>
      <Link className='main-nav-logo' to='/'>
        <img
          className='main-nav-logo-image'
          src={logoApp}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      {isAuthenticated ? (
        <Link to='/' name='signout' onClick={logout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          Sign Out
        </Link>
      ) : (
        <Link to='/login' name='signin'>
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </Link>
      )}
    </nav>
  );
}
