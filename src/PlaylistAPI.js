// Fichier contenant les communications avec l'API pour la page Playlist
import axios from 'axios';

// Adresse URL de base pour accéder à un artiste
const baseURL = 'http://ubeat.herokuapp.com/unsecure/playlists';

// Implémentation de la méthode POST
// Permet de créer une nouvelle playlist
export const insertNewPlaylist = (playlistName, email) =>
  axios.post(baseURL, { name: playlistName, owner: email })
  .then(response => response.data)
  .catch((error) => {
    throw error;
  });

// Implémentation de la méthode POST (à modifier)
// Permet d'ajouter une chanson à une playlist
export const insertIntoPlaylist = (track, playlistId) =>
  axios.post(`${baseURL}/${playlistId}/tracks`, track)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    });

// Implémentation de la méthode GET
// Permet d'update la liste des playlists
export const getPlaylists = id => axios.get(baseURL)
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
    throw error;
  });

// Implémentation de la méthode PUT
// Permet de modifier la playlist à l'id demandé
export const putPlaylist = (playlistUser, email, key) =>
  axios.put(`${baseURL}/${key}`, { name: playlistUser, owner: email })
  .then(response => response.data)
  .catch((error) => {
    throw error;
  });

// Implémentation de la méthode DELETE
// Permet de supprimer la playlist à l'id demandé
export const deletePlaylist = key => axios.delete(`${baseURL}/${key}`)
  .then(response => response.data)
  .catch((error) => {
    throw error;
  });

// Implémentation de la méthode DELETE
// Permet de supprimer une chanson de la playlist à l'id demandé
export const removeSongFromPlaylist = (playlistId, trackId) =>
  axios.delete(`${baseURL}/${playlistId}/tracks/${trackId}`)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    });
