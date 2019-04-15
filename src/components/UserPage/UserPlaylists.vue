<template>
  <b-col id="playlists" class="playlists">
    <h2 id="title">Playlists</h2>
    <table class="songAlbumTable">
      <tr>
        <th>Name</th>
        <th>Owner</th>
      </tr>
      <tr v-for="playlist in playlists" v-on:click="showPlaylist(playlist)" >
        <td>
          <div>{{playlist.name}}</div>
        </td>
        <td>
          <div>{{playlist.owner.name}}</div>
        </td>
      </tr>
    </table>
    <PlaylistInfo></PlaylistInfo>
  </b-col>
</template>

<script>
  import * as api from '@/services/UserAPI';
  import { store } from '@/store/Store';
  import router from '@/router/router';
  import Cookies from 'js-cookie';
  import PlaylistInfo from '../Playlists/PlaylistInfo';

  export default {
    components: { PlaylistInfo },
    props: [],
    name: 'UserPlaylists',
    data: () => ({
      playlists: [],
      id: store.state.userIdToVisit
    }),
    methods: {
      async getUserPlaylists() {
        await api.getUserPlaylists(this.id).then((res) => {
          const playlistsList = res;

          for (let i = 0; i < playlistsList.length; i += 1) {
            this.playlists.push(playlistsList[i]);
          }
        });
      }
    },
    created() {
      if (Cookies.get('token') === undefined) {
        store.setRedirect('Home');
        router.push('Redirect');
      } else {
        this.getUserPlaylists();
      }
    }
  };
</script>

<style scoped>
  .playlists{
    background-color: lightskyblue;
    border-radius: 15px;
    padding: 10px 10px 10px 10px;
    margin-top: 30px;
  }
  #title{
    text-align: center;
  }
  .songAlbumTable th {
    border: none;
    background: white;
    text-align: left;
  }
  .songAlbumTable td:nth-child(1) {
    text-align: left;
    width: 1000px;
  }
  .songAlbumTable th:nth-child(2) {
    text-align: left;
    width: 1000px;
  }
  .songAlbumTable tr {
    border: 2px solid white;
    background: #e8e8e8;
    height: 50px;
  }
  /* Small devices (Portrait phones, 768px and down) */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
  }
  /* Medium devices (tablets, 768px to 1024px) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
</style>
