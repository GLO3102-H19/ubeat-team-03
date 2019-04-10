// Fichier permettant de partager l'id de l'album à afficher sur la page Album
// Permet la communication et la modification de l'id par AlbumList(Artist) et Album
export const store = {
  state: {
    artistState: '',
    albumState: '',
    searchTerm: '',
    typeSearch: ''
  },
  setAlbumState(newValue) {
    this.state.albumState = newValue;
  },
  setArtistState(newValue) {
    this.state.artistState = newValue;
  },
  setSearchState(newValue) {
    this.state.searchTerm = newValue;
  },
  setSearchType(newValue) {
    this.state.typeSearch = newValue;
  }
};

export const help = {};
