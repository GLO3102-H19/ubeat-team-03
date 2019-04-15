import Cookies from 'js-cookie';
import axios from 'axios';
import app from '@/App';

const baseURL = 'http://localhost:3000/albums/';

const config = {
  headers: {
    Authorization: Cookies.get('token')
  }
};

// Changer les alerts pour quelque chose de mieux

export const getAlbumTitle = albumId => axios.get(baseURL + albumId, config)
  // .then(checkStatus)
  .then(response => response.data.results[0].collectionName)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find album title.`);
    throw error;
  });

export const getArtist = albumId => axios.get(baseURL + albumId, config)
  .then(response => response.data.results[0].artistName)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find album artist.`);
    throw error;
  });

export const getAlbumCover = albumId => axios.get(baseURL + albumId, config)
  // .then(checkStatus)
  .then(response => response.data.results[0].artworkUrl100)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find album cover.`);
    throw error;
  });

export const getAlbumReleaseDate = albumId => axios.get(baseURL + albumId, config)
  // .then(checkStatus)
  .then(response => response.data.results[0].releaseDate)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find the album release date.`);
    throw error;
  });

export const getAlbumGenre = albumId => axios.get(baseURL + albumId, config)
  // .then(checkStatus)
  .then(response => response.data.results[0].primaryGenreName)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find album genre.`);
    throw error;
  });

export const getAlbumAppleLink = albumId => axios.get(baseURL + albumId, config)
  // .then(checkStatus)
  .then(response => response.data.results[0].collectionViewUrl)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find album link.`);
    throw error;
  });

export const getAlbumTracks = albumId => axios.get(`${baseURL + albumId}/tracks`, config)
  // .then(checkStatus)
  .then(response => response.data.results)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find album tracks.`);
    throw error;
  });
