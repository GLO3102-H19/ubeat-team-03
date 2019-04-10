// Fichier permettant le partage d'informations à travers les components
import Cookies from 'js-cookie';

export const store = {
  state: {
    artistState: '',
    albumState: '',
    searchTerm: '',
    typeSearch: '',
    userName: '',
    userEmail: '',
    userToken: '' || Cookies.get('token'),
    userIdConnected: '',
    userIdToVisit: '',
    serverError: ''
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
  },
  setUserName(newValue) {
    this.state.userName = newValue;
  },
  setUserEmail(newValue) {
    this.state.userEmail = newValue;
  },
  setUserToken(newValue) {
    this.state.userToken = newValue;
  },
  setUserIdConnected(newValue) {
    this.state.userIdConnected = newValue;
  },
  setUserIdToVisit(newValue) {
    this.state.userIdToVisit = newValue;
  },
  setServerError(newValue) {
    this.state.serverError = newValue;
  },
  logOut() {
    this.state.userIdConnected = '';
    this.state.userIdToVisit = '';
    this.state.userName = '';
    this.state.userEmail = '';
    this.state.userToken = '';
    Cookies.remove('token');
  }
};

export const help = {};
