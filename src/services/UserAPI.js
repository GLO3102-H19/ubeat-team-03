// Fichier contenant les communications avec l'API pour la page User
import axios from 'axios';
// import { store } from '@/store/Store';
import Cookies from 'js-cookie';

// Adresse URL de base pour accéder à un artiste
const baseURL = 'http://ubeat.herokuapp.com/';

const config = {
  headers: {
    Authorization: Cookies.get('token')
  }
};


// Implémentation de la méthode GET
// Permet d'obtenir les informations de l'utilisateur
export const getUserName = userId => axios.get(`${baseURL}users/${userId}`, config)
  .then(response => response.data.name)
  .catch(error => error);

// Implémentation de la méthode GET
// Permet d'obtenir les informations de l'utilisateur
export const getUserEmail = userId => axios.get(`${baseURL}users/${userId}`, config)
  .then(response => response.data.email)
  .catch(error => error);

// Implémentation de la méthode GET
// Permet d'obtenir la liste des amis de l'utilisateur
export const getUserFriends = userId => axios.get(`${baseURL}users/${userId}`, config)
  .then(response => response.data.following)
  .catch(error => error);
