import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user/';

/**
 * Cette fonction se connecte à l'API et renvoie le token de l'utilisateur.
 *
 * @param {{email: string, password: string}} credentials - Les informations d'identification de l'utilisateur.
 * @returns {Promise<{body: {token: string}}>}
 */

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axios.post(API_URL + 'login', credentials);
  return response.data;
});

/**
 * Cette fonction récupère le profil de l'utilisateur à partir de l'API.
 *
 * @returns {Promise<{body: Object}>} Une promesse qui se résout en un objet contenant les informations du profil de l'utilisateur.
 */

export const getProfil = createAsyncThunk(
  'profil/getProfil',
  async (_, { getState }) => {
    const token = getState().auth.token;
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(API_URL + 'profile', {}, config);
    return response.data;
  }
);

/**
 * Cette fonction met à jour le profil de l'utilisateur sur l'API.
 *
 * @returns {Promise<{body: {id: string, email: string}}>} Une promesse qui se résout en un objet contenant les informations mises à jour du profil de l'utilisateur.
 */

export const updateProfil = createAsyncThunk(
  'profil/updateProfil',
  async (_, { getState }) => {
    const token = getState().auth.token;
    const profilData = {
      firstName: getState().auth.user.firstName,
      lastName: getState().auth.user.lastName,
    };
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.put(API_URL + 'profile', profilData, config);
    return response.data;
  }
);
