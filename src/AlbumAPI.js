import axios from 'axios';

const baseURL = 'http://ubeat.herokuapp.com/unsecure/albums/';

export const getAlbumTitle = albumId => axios.get(baseURL + albumId)
  .then(response => response.data.results[0].collectionName)
  .catch((error) => {
    throw error;
  });

export const getAlbumCover = albumId => axios.get(baseURL + albumId)
  .then(response => response.data.results[0].artworkUrl100)
  .catch((error) => {
    throw error;
  });

export const getAlbumReleaseDate = albumId => axios.get(baseURL + albumId)
  .then(response => response.data.results[0].releaseDate)
  .catch((error) => {
    throw error;
  });

export const getAlbumGenre = albumId => axios.get(baseURL + albumId)
  .then(response => response.data.results[0].primaryGenreName)
  .catch((error) => {
    throw error;
  });

export const getAlbumAppleLink = albumId => axios.get(baseURL + albumId)
  .then(response => response.data.results[0].collectionViewUrl)
  .catch((error) => {
    throw error;
  });

export const getAlbumTracks = albumId => axios.get(`${baseURL + albumId}/tracks`)
  .then(response => response.data.results)
  .catch((error) => {
    throw error;
  });
