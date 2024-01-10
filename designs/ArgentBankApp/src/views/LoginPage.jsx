import React from 'react';
import Header from '../views/Header';
import Footer from '../views/Footer';
import SignInForm from '../Auth/SignInForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <FontAwesomeIcon icon={faCircleUser} />
          <h1>Sign In</h1>
          <SignInForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
