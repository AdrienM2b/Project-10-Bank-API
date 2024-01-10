import React, { useState } from 'react';
import axios from 'axios';

export default function SignInForm() {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');

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
    axios
      .post('http://localhost:3001/api/v1/user/login', credentials)
      .then((response) => {
        console.log(response.data);
        // Traitez la réponse ici (par exemple, redirection ou mise à jour de l'état)
      })
      .catch((error) => {
        console.error('Erreur lors de la connexion:', error);
        // Gérez les erreurs ici
      });
  };

  return (
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
  );
}
