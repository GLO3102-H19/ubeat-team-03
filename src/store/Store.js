// Fichier permettant le partage d'informations à travers les components
import Cookies from 'js-cookie';

export const store = {
  state: {
    redirect: '',
    artistState: '',
    albumState: '',
    searchTerm: '',
    typeSearch: '',
    userName: '',
    userEmail: '',
    userToken: '' || Cookies.get('token'),
    userIdConnected: '',
    userConnectedFriends: [],
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
  setUserConnectedFriends(newValue) {
    this.state.userConnectedFriends = newValue;
  },
  setUserIdToVisit(newValue) {
    this.state.userIdToVisit = newValue;
  },
  setServerError(newValue) {
    this.state.serverError = newValue;
  },
  setRedirect(newValue) {
    this.state.redirect = newValue;
  },
  logOut() {
    this.state.userIdConnected = '';
    this.state.userIdToVisit = '';
    this.state.userName = '';
    this.state.userEmail = '';
    this.state.userToken = '';
    Cookies.remove('token');
    Cookies.remove('userId');
  }
};

export const help = {};
