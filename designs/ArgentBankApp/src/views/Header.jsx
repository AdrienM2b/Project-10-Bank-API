import React from 'react';
import '../styles/argentBank.scss';
import logoApp from '../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Header() {
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
      <div>
        <Link className='main-nav-item' to='/login'>
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </Link>
      </div>
    </nav>
  );
}
