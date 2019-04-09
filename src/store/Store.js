// Fichier permettant le partage d'informations à travers les components
import Cookies from 'js-cookie';

export const store = {
  state: {
    albumState: '1234838372',
    userName: '',
    userEmail: '',
    userToken: '' || Cookies.get('token'),
    userId: ''
  },
  setAlbumState(newValue) {
    this.state.albumState = newValue;
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
  setUserID(newValue) {
    this.state.userId = newValue;
  },
  logOut() {
    this.state.userId = '';
    this.state.userName = '';
    this.state.userEmail = '';
    this.state.userToken = '';
    Cookies.remove('token');
  }
};

export const help = {};
