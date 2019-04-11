import axios from 'axios';
import app from '@/App';

const baseURL = 'http://ubeat.herokuapp.com/unsecure/albums/';

// Changer les alerts pour quelque chose de mieux

export const getAlbumTitle = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].collectionName)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find album title. Please try again later.`);
    throw error;
  });

export const getArtist = albumId => axios.get(baseURL + albumId)
  .then(response => response.data.results[0].artistName)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find album artist. Please try again later.`);
    throw error;
  });

export const getAlbumCover = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].artworkUrl100)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find album cover. Please try again later.`);
    throw error;
  });

export const getAlbumReleaseDate = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].releaseDate)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find the album release date. Please try again later.`);
    throw error;
  });

export const getAlbumGenre = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].primaryGenreName)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find album genre. Please try again later.`);
    throw error;
  });

export const getAlbumAppleLink = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].collectionViewUrl)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find album link. Please try again later.`);
    throw error;
  });

export const getAlbumTracks = albumId => axios.get(`${baseURL + albumId}/tracks`)
  // .then(checkStatus)
  .then(response => response.data.results)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
    Failed to find album tracks. Please try again later.`);
    throw error;
  });
