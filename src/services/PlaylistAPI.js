// Fichier contenant les communications avec l'API pour la page Playlist
import axios from 'axios';
import app from '@/App';
import Cookies from 'js-cookie';

// Adresse URL de base pour accéder à un artiste
const baseURL = 'https://ubeat.herokuapp.com/playlists';

const config = {
  headers: {
    Authorization: Cookies.get('token')
  }
};

// Implémentation de la méthode POST
// Permet de créer une nouvelle playlist
export const insertNewPlaylist = (playlistName, email) =>
  axios.post(baseURL, { name: playlistName, owner: email }, config)
  .then(response => response.data)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to create a new playlist.`);
    throw error;
  });

// Implémentation de la méthode POST (à modifier)
// Permet d'ajouter une chanson à une playlist

export const insertIntoPlaylist = (track, playlistId) =>
  axios.post(`${baseURL}/${playlistId}/tracks`, track, config)
    .then(response => response.data)
    .catch((error) => {
      app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to add the song in the playlist. Please try again later.`);
      throw error;
    });

// Implémentation de la méthode GET
// Permet d'update la liste des playlists
export const getPlaylists = id => axios.get(baseURL, config)
  .then((response) => {
    const posts = response.data;
    const playlists = [];
    for (let i = 0; i < posts.length; i += 1) {
      if (Object.prototype.hasOwnProperty.call(posts[i], 'owner')) {
        if (posts[i].owner.id === id) {
          playlists.push(posts[i]);
        }
      }
    }
    return playlists;
  })
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to load the playlists.`);
    throw error;
  });

// Implémentation de la méthode PUT
// Permet de modifier la playlist à l'id demandé
export const putPlaylist = (id, playlistUser, email, trackList) =>
  axios.put(`${baseURL}/${id}`, { name: playlistUser, owner: email, tracks: trackList }, config)
  .then(response => response.data)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to modify the playlist. Please try again later.`);
    throw error;
  });

// Implémentation de la méthode DELETE
// Permet de supprimer la playlist à l'id demandé
export const deletePlaylist = key => axios.delete(`${baseURL}/${key}`, config)
  .then(response => response.data)
  .catch((error) => {
    app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to delete the playlist.`);
    throw error;
  });

// Implémentation de la méthode DELETE
// Permet de supprimer une chanson de la playlist à l'id demandé
export const removeSongFromPlaylist = (playlistId, trackId) =>
  axios.delete(`${baseURL}/${playlistId}/tracks/${trackId}`, config)
    .then(response => response.data)
    .catch((error) => {
      app.methods.showServerError(`${error.response.status} ${error.response.statusText}.
      Failed to remove the song from the playlist.`);
      throw error;
    });
