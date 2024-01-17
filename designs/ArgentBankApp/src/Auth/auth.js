import { setCredentials, setToken } from '../store/authSlice';
import { getProfil, login } from './authServices';

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
        dispatch(setCredentials(user));
        navigate('/profil');
      });
    })
    .catch((error) => {
      console.error('Erreur lors de la connexion:', error);
    });
};
