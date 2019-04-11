// Fichier contenant les communications avec l'API pour la page Home
import axios from 'axios';
import qs from 'qs';
import app from '@/App';

// Adresse URL de base pour accéder à un artiste
const baseURL = 'http://ubeat.herokuapp.com/';

const config1 = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

const config2 = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  }
};

// Implémentation de la méthode POST
// Permet d'ajouter un nouvel utilisateur
export const addUser = (name, email, password) => axios.post(`${baseURL}signup`, qs.stringify({ name, email, password }), config1)
  .then()
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to create user.`);
    throw error;
  });

// Implémentation de la méthode POST
// Permet de login un utilisateur
export const logUser = (email, password) => axios.post(`${baseURL}login`, qs.stringify({ email, password }), config2)
  .then()
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to log in. Please try a different username/password.`);
    throw error;
  });

// Implémentation de la méthode GET
// Permet de logout
export const logOut = () => axios.get(`${baseURL}logout`)
  .then()
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to log out. Please try again later.`);
    throw error;
  });
