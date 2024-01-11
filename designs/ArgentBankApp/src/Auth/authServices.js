import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user/';

const login = (credentials) => {
  return axios.post(API_URL + 'login', credentials);
};

export const authService = {
  login,
};

const getProfil = async () => {
  const token = localStorage.getItem('token');
  console.log(token);
  const profilData = {
    email: 'tony@stark.com',
    password: 'password123',
  };
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.post(API_URL + 'profil', profilData, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
  }
};

export const profilServices = { getProfil };
