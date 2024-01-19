import {
  setCredentials,
  setNames,
  setToken,
  updateCredentials,
} from '../store/authSlice';
import { getProfil, login, updateProfil } from './authServices';

export const onSubmit = (dispatch, credentials, navigate) => {
  dispatch(setCredentials(credentials));
  return dispatch(login(credentials))
    .then((response) => {
      const token = response.payload.body.token;
      dispatch(setToken(token));
      login(credentials);
    })
    .then(() => {
      return dispatch(getProfil()).then((response) => {
        const user = response.payload.body;
        const { firstName, lastName } = user;
        dispatch(setNames({ firstName, lastName }));
        navigate('/profil');
      });
    })
    .catch((error) => {
      console.error('Erreur lors de la connexion:', error);
    });
};

export const updateUserInfos = (dispatch, credentials) => {
  dispatch(updateCredentials(credentials));
  console.log(credentials);
  return dispatch(updateProfil(credentials))
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error('Erreur lors de la connexion:', error);
    });
};
