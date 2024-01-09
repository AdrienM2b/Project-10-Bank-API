import React from 'react';
import '../styles/argentBank.scss';
import logoApp from '../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <nav className='main-nav'>
      <a className='main-nav-logo' href='./index.html'>
        <img
          className='main-nav-logo-image'
          src={logoApp}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </a>
      <div>
        <a className='main-nav-item' href='./sign-in.html'>
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </a>
      </div>
    </nav>
  );
}
