// Fichier contenant les communications avec l'API pour la page Artist
// import Cookies from 'js-cookie';
import axios from 'axios';
import app from '@/App';
import Cookies from 'js-cookie';

// Adresse URL de base pour accéder à un artiste
const baseURL = 'http://ubeat.herokuapp.com/artists/';
const albumsPath = '/albums';

const config = {
  headers: {
    Authorization: Cookies.get('token')
  }
};

// Implémentation de la méthode GET
// Permet d'obtenir le nom de l'artiste'
export const getArtistName = artistId => axios.get(baseURL + artistId, config)
    .then(response => response.data.results[0].artistName)
    .catch((error) => {
      app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to find artist's name.`);
      throw error;
    });

// Implémentation de la méthode GET
// Permet d'obtenir le genre de l'artiste'
export const getArtistGenre = artistId => axios.get(baseURL + artistId, config)
  .then(response => response.data.results[0].primaryGenreName)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to find artist's genre.`);
    throw error;
  });

// Implémentation de la méthode GET
// Permet d'obtenir le lien URL de l'artiste'
export const getArtistUrl = artistId => axios.get(baseURL + artistId, config)
  .then(response => response.data.results[0].artistLinkUrl)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to find artist's link.`);
    throw error;
  });

// Implémentation de la méthode GET
// Permet d'obtenir le lien URL de l'artiste'
export const getAlbumList = artistId => axios.get(baseURL + artistId + albumsPath, config)
  .then(response => response.data.results)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to find artist's album list.`);
    throw error;
  });
