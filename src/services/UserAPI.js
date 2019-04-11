// Fichier contenant les communications avec l'API pour la page User
import axios from 'axios';
// import { store } from '@/store/Store';
import Cookies from 'js-cookie';
import app from '@/App';
import qs from 'qs';

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
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to load username.`);
    throw error;
  });

// Implémentation de la méthode GET
// Permet d'obtenir les informations de l'utilisateur
export const getUserEmail = userId => axios.get(`${baseURL}users/${userId}`, config)
  .then(response => response.data.email)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to load user's email.`);
    throw error;
  });

// Implémentation de la méthode GET
// Permet d'obtenir la liste des amis de l'utilisateur
export const getUserFriends = userId => axios.get(`${baseURL}users/${userId}`, config)
  .then(response => response.data.following)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to load friend list.`);
    throw error;
  });

// Implémentation de la méthode GET
// Permet d'update la liste des playlists
export const getUserPlaylists = userId => axios.get('http://ubeat.herokuapp.com/playlists', config)
  .then((response) => {
    const posts = response.data;
    const playlists = [];

    for (let i = 0; i < posts.length; i += 1) {
      if (Object.prototype.hasOwnProperty.call(posts[i], 'owner')) {
        if (posts[i].owner.id === userId) {
          playlists.push(posts[i]);
        }
      }
    }
    return playlists;
  })
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to load user's playlists.`);
    throw error;
  });

// Implémentation de la méthode POST
// Permet de follow un user
export const newFollow = userId => axios.post(`${baseURL}follow`, qs.stringify({ userId }), config)
  .then(response => response.data)
  .catch(error => error);

// Implémentation de la méthode DELETE
// Permet de unfollow un user
export const unFollow = userId => axios.delete(`${baseURL}users/${userId}`, config)
  .then(response => response.data)
  .catch(error => error);
