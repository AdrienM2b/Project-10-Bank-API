import React from 'react';
import '../styles/argentBank.scss';
import logoApp from '../assets/argentBankLogo.png';

export default function Header() {
  return (
    <header className='header'>
      <img className='logoApp' src={logoApp} alt='logo' />
      <div>
        <p>Sign In</p>
      </div>
    </header>
  );
}
