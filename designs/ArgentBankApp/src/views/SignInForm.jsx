import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { onSubmit } from '../Auth/auth';

export default function SignInForm() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  /**
   * Cette fonction gère la soumission du formulaire de connexion.
   * Elle dispatche une action de connexion avec les informations d'identification de l'utilisateur,
   * puis, une fois la connexion réussie, elle dispatche une action pour obtenir le profil de l'utilisateur
   * et navigue vers la page de profil de l'utilisateur.
   *
   * @param {Function} dispatch
   * @param {{email: string, password: string}} credentials - Les informations d'identification de l'utilisateur.
   * @param {Function} navigate
   * @returns {Promise}
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    const credentials = { email: userEmail, password: userPassword };
    onSubmit(dispatch, credentials, navigate);
  };

  return (
    <section className='sign-in-content'>
      <FontAwesomeIcon icon={faCircleUser} />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-wrapper'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' name='email' />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' />
        </div>
        <div className='input-remember'>
          <input type='checkbox' id='remember-me' />
          <label htmlFor='remember-me'>Remember me</label>
        </div>
        <button type='submit' className='sign-in-button'>
          Sign In
        </button>
      </form>
    </section>
  );
}
