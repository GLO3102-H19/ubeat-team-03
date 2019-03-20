// Fichier permettant de partager l'id de l'album à afficher sur la page Album
// Permet la communication et la modification de l'id par AlbumList(Artist) et Album
export const store = {
  state: {
    albumState: '1234838372'
  },
  setAlbumState(newValue) {
    this.state.albumState = newValue;
  },
};

export const help = {};
