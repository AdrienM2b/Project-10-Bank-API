import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user/';

/**
 *
 * @param {
 * {
 * email: string,
 * password: string
 * }
 * } credentials
 * @returns {Promise<body{token: string}>}
 */

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axios.post(API_URL + 'login', credentials);
  return response.data;
});

/**
 * 
 * @param {
 * {
* email: string,
* password: string
* }
* } profilData
@param {
  * {
  * Accept: string,
  * Authorization: string
  * }
  * } config
 * @returns {Promise<body>}
 */

export const getProfil = createAsyncThunk(
  'profil/getProfil',
  async (_, { getState }) => {
    const token = getState().auth.token;
    const profilData = getState().auth.user;
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(API_URL + 'profile', profilData, config);
    return response.data;
  }
);
