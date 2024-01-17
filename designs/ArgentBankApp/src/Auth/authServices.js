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

const login = (credentials) => {
  return axios.post(API_URL + 'login', credentials);
};

export const authService = {
  login,
};

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

const getProfil = async () => {
  const token = localStorage.getItem('token');
  console.log(token);
  const profilData = {
    email: 'tony@stark.com',
    password: 'password123',
  };
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(API_URL + 'profile', profilData, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
  }
};

export const profilServices = { getProfil };
