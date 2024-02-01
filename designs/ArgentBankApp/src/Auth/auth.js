import {
  setCredentials,
  setToken,
  updateCredentials,
} from '../store/authSlice';
import { getProfil, login, updateProfil } from './authServices';

/**
 * Cette fonction gère la soumission du formulaire de connexion.
 * Elle met à jour les informations d'identification, se connecte, récupère le profil de l'utilisateur et navigue vers le profil de l'utilisateur.
 *
 * @param {Function} dispatch
 * @param {{email: string, password: string}} credentials - Les informations d'identification de l'utilisateur.
 * @param {Function} navigate
 * @returns {Promise}
 */

export const onSubmit = (dispatch, credentials, navigate) => {
  return dispatch(login(credentials))
    .then((response) => {
      const token = response.payload.body.token;
      dispatch(setToken(token));
    })
    .then(() => {
      return dispatch(getProfil()).then((response) => {
        const user = response.payload.body;
        dispatch(setCredentials(user));
        navigate('/profile');
      });
    })
    .catch((error) => {
      console.error('Erreur lors de la connexion:', error);
    });
};

/**
 * Cette fonction met à jour les informations de l'utilisateur.
 * Elle met à jour le profil de l'utilisateur.
 *
 * @param {Function} dispatch
 * @param {{firstName: string, lastName: string}} credentials - Les nouvelles informations d'identification de l'utilisateur.
 * @returns {Promise}
 */

export const updateUserInfos = (dispatch, userInfos) => {
  dispatch(updateCredentials(userInfos));
  // console.log(userInfos);
  return dispatch(updateProfil(userInfos))
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error('Erreur lors de la connexion:', error);
    });
};
