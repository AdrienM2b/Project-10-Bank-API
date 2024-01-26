import React from 'react';
import '../styles/argentBank.scss';
import logoApp from '../assets/argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logOut, selectisLogged, selectCurrentUser } from '../store/authSlice';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector(selectisLogged);
  const userInfos = useSelector(selectCurrentUser);
  const logout = () => {
    dispatch(logOut());
    navigate('/');
  };

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
      {isLogged ? (
        <div className='nav_container'>
          <Link to='/profil'>
            <div className='icon-user_container'>
              <FontAwesomeIcon icon={faCircleUser} />
              <p>{userInfos.firstName}</p>
            </div>
          </Link>
          <Link to='/' name='signout' onClick={logout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </Link>
        </div>
      ) : (
        <Link to='/login' name='signin'>
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </Link>
      )}
    </nav>
  );
}
