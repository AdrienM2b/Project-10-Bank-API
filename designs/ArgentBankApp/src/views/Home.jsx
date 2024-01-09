import React from 'react';
import Header from './Header';
import imageBanner from '../assets/bank-tree.jpeg';
import '../styles/argentBank.scss';

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <div
        className='banner'
        style={{
          backgroundImage: `url(${imageBanner})`,
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        <span className='slogan-container'>
          <p>
            No fees. <br /> No minimum deposit. <br />
            High interest rates. <br />
            Open a savings account with Argent Bank today!
          </p>
        </span>
      </div>
    </div>
  );
}
