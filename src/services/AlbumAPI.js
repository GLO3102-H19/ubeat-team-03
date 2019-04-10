import axios from 'axios';
import { store } from '@/store/Store';

const baseURL = 'http://ubeat.herokuapp.com/unsecure/albums/';

// Changer les alerts pour quelque chose de mieux

export const getAlbumTitle = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].collectionName)
  .catch((error) => {
    store.setServerError(`${error.response.status} ${error.response.statusText}`);
    throw error;
  });

export const getArtist = albumId => axios.get(baseURL + albumId)
  .then(response => response.data.results[0].artistName)
  .catch((error) => {
    throw error;
  });

export const getAlbumCover = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].artworkUrl100)
  .catch((error) => {
    store.setServerError(`${error.response.status} ${error.response.statusText}`);
    throw error;
  });

export const getAlbumReleaseDate = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].releaseDate)
  .catch((error) => {
    store.setServerError(`${error.response.status} ${error.response.statusText}`);
    throw error;
  });

export const getAlbumGenre = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].primaryGenreName)
  .catch((error) => {
    store.setServerError(`${error.response.status} ${error.response.statusText}`);
    throw error;
  });

export const getAlbumAppleLink = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].collectionViewUrl)
  .catch((error) => {
    store.setServerError(`${error.response.status} ${error.response.statusText}`);
    throw error;
  });

export const getAlbumTracks = albumId => axios.get(`${baseURL + albumId}/tracks`)
  // .then(checkStatus)
  .then(response => response.data.results)
  .catch((error) => {
    store.setServerError(`${error.response.status} ${error.response.statusText}`);
    throw error;
  });
