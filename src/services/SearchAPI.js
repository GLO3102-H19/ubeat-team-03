import axios from 'axios';

const baseURL = 'http://ubeat.herokuapp.com/unsecure/search/';
const searchUserTermField = 'users';
const searchAlbumTermField = 'albums';
const searchArtistTermField = 'artists';
const searchTracksTermField = 'tracks';
const searchTermField = '?q=';
const limitField = '&limit=10';

// Implémentation de la méthode GET
// Permet de faire une recherche global (user,track,album,artist)
export const getGlobalSearch = searchTerm => axios
  .get(baseURL + searchTermField + encodeURIComponent(searchTerm) + limitField)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  });

// Implémentation de la méthode GET
// Permet de faire une recherche seulement sur les utilisateurs avec nom complet
export const getUsersSearchByName = prenom => axios
  .get(baseURL + searchUserTermField + searchTermField + encodeURIComponent(`${prenom}`))
  .then(response => response.data)
  .catch((error) => {
    throw error;
  });

// Implémentation de la méthode GET
// Permet de faire une recherche seulement sur les albums
export const getAlbumsSearch = searchTerm => axios
  .get(baseURL + searchAlbumTermField + searchTermField + encodeURIComponent(`${searchTerm}`))
  .then(response => response.data)
  .catch((error) => {
    throw error;
  });

// Implémentation de la méthode GET
// Permet de faire une recherche seulement sur les tracks
export const getTracksSearch = searchTerm => axios
  .get(baseURL + searchTracksTermField + searchTermField + encodeURIComponent(`${searchTerm}`))
  .then(response => response.data)
  .catch((error) => {
    throw error;
  });

// Implémentation de la méthode GET
// Permet de faire une recherche seulement sur les artists
export const getArtistsSearch = searchTerm => axios
  .get(baseURL + searchArtistTermField + searchTermField + encodeURIComponent(`${searchTerm}`))
  .then(response => response.data)
  .catch((error) => {
    throw error;
  });
