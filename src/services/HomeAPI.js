// Fichier contenant les communications avec l'API pour la page Artist
import axios from 'axios';
import qs from 'qs';

// Adresse URL de base pour accéder à un artiste
const baseURL = 'http://ubeat.herokuapp.com/';

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

// Implémentation de la méthode POST
// Permet d'ajouter un nouvel utilisateur
export const addUser = (name, email, password) => axios.post(`${baseURL}signup`, { body: qs.stringify({ name, email, password }) }, config)
  .then(response => console.log(response.data))
  .catch((error) => {
    throw error;
  });

// Implémentation de la méthode POST
// Permet de login un user
export const logUser = (email, password) => axios.post(`${baseURL}login`, { body: qs.stringify({ email, password }) }, config)
  .then(response => console.log(response.data))
  .catch((error) => {
    throw error;
  });
