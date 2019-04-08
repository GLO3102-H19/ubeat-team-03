import axios from 'axios';

const baseURL = 'http://ubeat.herokuapp.com/unsecure/albums/';

// Changer les alerts pour quelque chose de mieux

export const getAlbumTitle = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].collectionName)
  .catch((error) => {
    alert(`${error.response.status} ${error.response.statusText}`);
    throw error;
  });

export const getAlbumCover = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].artworkUrl100)
  .catch((error) => {
    alert(`${error.response.status} ${error.response.statusText}`);
    throw error;
  });

export const getAlbumReleaseDate = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].releaseDate)
  .catch((error) => {
    alert(`${error.response.status} ${error.response.statusText}`);
    throw error;
  });

export const getAlbumGenre = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].primaryGenreName)
  .catch((error) => {
    alert(`${error.response.status} ${error.response.statusText}`);
    throw error;
  });

export const getAlbumAppleLink = albumId => axios.get(baseURL + albumId)
  // .then(checkStatus)
  .then(response => response.data.results[0].collectionViewUrl)
  .catch((error) => {
    alert(`${error.response.status} ${error.response.statusText}`);
    throw error;
  });

export const getAlbumTracks = albumId => axios.get(`${baseURL + albumId}/tracks`)
  // .then(checkStatus)
  .then(response => response.data.results)
  .catch((error) => {
    alert(`${error.response.status} ${error.response.statusText}`);
    throw error;
  });
