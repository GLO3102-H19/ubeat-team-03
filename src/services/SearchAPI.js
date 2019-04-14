// import Cookies from 'js-cookie';
import axios from 'axios';
import app from '@/App';
import Cookies from 'js-cookie';

const baseURL = 'http://ubeat.herokuapp.com/search/';
const searchUserTermField = 'users';
const searchAlbumTermField = 'albums';
const searchArtistTermField = 'artists';
const searchTracksTermField = 'tracks';
const searchTermField = '?q=';
const limitField = '&limit=10';

const config = {
  headers: {
    Authorization: Cookies.get('token')
  }
};


// Implémentation de la méthode GET
// Permet de faire une recherche global (user,track,album,artist)
export const getGlobalSearch = searchTerm => axios
  .get(baseURL + searchTermField + encodeURIComponent(searchTerm) + limitField, config)
  .then(response => response.data)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Search request has failed. Please try again later.`);
    throw error;
  });

// Implémentation de la méthode GET
// Permet de faire une recherche seulement sur les utilisateurs avec nom complet
export const getUsersSearchByName = prenom => axios
  .get(baseURL + searchUserTermField + searchTermField + encodeURIComponent(`${prenom}`), config)
  .then(response => response.data)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Search request has failed. Please try again later.`);
    throw error;
  });

// Implémentation de la méthode GET
// Permet de faire une recherche seulement sur les albums
export const getAlbumsSearch = searchTerm => axios
  .get(baseURL + searchAlbumTermField + searchTermField + encodeURIComponent(`${searchTerm}`), config)
  .then(response => response.data)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Search request has failed. Please try again later.`);
    throw error;
  });

// Implémentation de la méthode GET
// Permet de faire une recherche seulement sur les tracks
export const getTracksSearch = searchTerm => axios
  .get(baseURL + searchTracksTermField + searchTermField + encodeURIComponent(`${searchTerm}`), config)
  .then(response => response.data)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Search request has failed. Please try again later.`);
    throw error;
  });

// Implémentation de la méthode GET
// Permet de faire une recherche seulement sur les artists
export const getArtistsSearch = searchTerm => axios
  .get(baseURL + searchArtistTermField + searchTermField + encodeURIComponent(`${searchTerm}`), config)
  .then(response => response.data)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Search request has failed. Please try again later.`);
    throw error;
  });
