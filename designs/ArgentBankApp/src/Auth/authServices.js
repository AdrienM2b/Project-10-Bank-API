import axios from 'axios';

const login = (credentials) => {
  return axios.post('http://localhost:3001/api/v1/user/login', credentials);
};

export const authService = {
  login,
};

const getProfil = () => {
  const token = localStorage.getItem('token');
  return axios
    .post('http://localhost:3001/api/v1/user/profil', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Erreur lors de la connexion:', error);
    });
};

export const profil = { getProfil };
