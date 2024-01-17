import React from 'react';
import Header from '../views/Header';
import Footer from '../views/Footer';
import SignInForm from './SignInForm';

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className='main bg-dark'>
        <SignInForm />
      </main>
      <Footer />
    </>
  );
}
