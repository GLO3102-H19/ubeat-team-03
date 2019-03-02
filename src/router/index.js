import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/Album';
import Artist from '@/components/Artist';
import Playlists from '../components/Playlists';
import PlaylistsUser from '../components/PlaylistsUser';
import PlaylistInfo from '../components/PlaylistInfo';

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
      path: '/playlistsuser',
      name: 'PlaylistsUser',
      component: PlaylistsUser,
      props: true
    }, {
      path: '/playlistsinfo',
      name: 'PlaylistsInfo',
      component: PlaylistInfo,
      props: true
    }
  ],
});
