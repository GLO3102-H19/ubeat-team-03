import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Album from '../components/AlbumPage/Album';
import Artist from '../components/ArtistPage/Artist';
import Playlists from '../components/Playlists/Playlists';
import User from '../components/UserPage/User';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    }, {
      path: '/artist',
      name: 'Artist',
      component: Artist,
      props: true
    }, {
      path: '/album',
      name: 'Album',
      component: Album,
      props: true
    }, {
      path: '/playlists',
      name: 'Playlists',
      component: Playlists,
      props: true
    }, {
      path: '/user',
      name: 'User',
      component: User,
      props: true
    }
  ],
});
