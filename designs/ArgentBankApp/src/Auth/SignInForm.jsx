import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountServices } from './account.services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { authService } from './authServices';
import { useAuth } from './AuthContext';

export default function SignInForm() {
  const { login } = useAuth();
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: 'tony@stark.com',
    password: 'password123',
  });

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    authService
      .login(credentials)
      .then((response) => {
        console.log(response.data);
        login(response.data.body.token);
        navigate('/profil');
      })
      .catch((error) => {
        console.error('Erreur lors de la connexion:', error);
      });
  };

  return (
    <section className='sign-in-content'>
      <FontAwesomeIcon icon={faCircleUser} />
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className='input-wrapper'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='email'
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div className='input-remember'>
          <input type='checkbox' id='remember-me' />
          <label htmlFor='remember-me'>Remember me</label>
        </div>
        <button className='sign-in-button'>Sign In</button>
      </form>
    </section>
  );
}
