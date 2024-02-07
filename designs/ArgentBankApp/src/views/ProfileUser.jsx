import React, { useState } from 'react';
import Header from './Header';
import { selectCurrentUser } from '../store/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfos } from '../Auth/auth';

export default function ProfileUser() {
  const [editFormVisible, setEditFormVisible] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const currentUserFirstName = currentUser.firstName;
  const currentUserLastName = currentUser.lastName;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFirstName = e.target.firstName.value;
    const newLastName = e.target.lastName.value;
    const newUserInfos = {
      firstName: newFirstName ? newFirstName : currentUserFirstName,
      lastName: newLastName ? newLastName : currentUserLastName,
    };
    updateUserInfos(dispatch, newUserInfos);
    setEditFormVisible(!editFormVisible);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const inputFirstName = e.target.form.firstName;
    const inputLastName = e.target.form.lastName;
    inputFirstName.value = '';
    inputLastName.value = '';
  };

  return (
    <>
      <Header />
      <main className='main bg-dark'>
        <div className='header'>
          <h1>Welcome back</h1>
          <h1>
            {currentUserFirstName} {currentUserLastName} !
          </h1>
          <button
            className='edit-button'
            onClick={() => setEditFormVisible(!editFormVisible)}
          >
            Edit Name
          </button>
          {editFormVisible ? (
            <form
              onSubmit={handleSubmit}
              className='profil-user-form_container'
            >
              <div className='user-infos_container'>
                <button
                  id='close-button'
                  onClick={() => setEditFormVisible(false)}
                >
                  X
                </button>
                <input
                  type='text'
                  placeholder={currentUserFirstName}
                  name='firstName'
                />
                <input
                  type='text'
                  placeholder={currentUserLastName}
                  name='lastName'
                />
              </div>
              <div className='button_container'>
                <button type='submit' className='save-button'>
                  Save
                </button>
                <button className='cancel-button' onClick={handleDelete}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            ''
          )}
        </div>
        <h2 className='sr-only'>Accounts</h2>
        <section className='account'>
          <div className='account-content-wrapper'>
            <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
            <p className='account-amount'>$2,082.79</p>
            <p className='account-amount-description'>Available Balance</p>
          </div>
          <div className='account-content-wrapper cta'>
            <button className='transaction-button'>View transactions</button>
          </div>
        </section>
        <section className='account'>
          <div className='account-content-wrapper'>
            <h3 className='account-title'>Argent Bank Savings (x6712)</h3>
            <p className='account-amount'>$10,928.42</p>
            <p className='account-amount-description'>Available Balance</p>
          </div>
          <div className='account-content-wrapper cta'>
            <button className='transaction-button'>View transactions</button>
          </div>
        </section>
        <section className='account'>
          <div className='account-content-wrapper'>
            <h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
            <p className='account-amount'>$184.30</p>
            <p className='account-amount-description'>Current Balance</p>
          </div>
          <div className='account-content-wrapper cta'>
            <button className='transaction-button'>View transactions</button>
          </div>
        </section>
      </main>
    </>
  );
}
