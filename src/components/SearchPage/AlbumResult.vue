<template>
<div id="albumResultContainer">
  <div id="albumResultTitle"><h2>Album</h2></div>
      <div class="album"  v-for="item in albumResult" v-bind:key="item.collectionId">
        <div class="albumAdd">
          <b-dropdown id="addToPlaylist" size="sm" dropright text="ADD" >
            <b-dropdown-item v-for="playlist in playlists" v-bind:key="playlist.id" class="dropdownMenu" v-on:click="addAlbumInPlaylist(item.collectionId, playlist)">
              {{playlist.name}}
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="albumHighlight" v-on:click="loadAlbumPage(item.collectionId, item.artistId)">
          <div class="albumImg">
          <b-img
            v-bind:src= item.artworkUrl100
            width="150"
            height="150"/>
          </div>
          <div class="albumTitle">
          <p>
            {{ item.collectionName }}
          </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import router from '@/router/router';
  import { store } from '@/store/Store';
  import * as apiPlaylist from '@/services/PlaylistAPI';
  import * as api from '@/services/AlbumAPI';

  export default {
    name: 'AlbumResult',
    props: ['albumResult'],
    data: () => ({
      search: '',
      playlists: [],
      trackList: [],
      idUser: store.state.userIdConnected,
    }),
    methods: {
      loadAlbumPage(collectionId, artistId) {
        store.setAlbumState(collectionId);
        store.setArtistState(artistId);
        router.push('Album');
      },
      getPlaylists() {
        apiPlaylist.getPlaylists(this.idUser).then((res) => {
          this.playlists = res;
        });
      },
      addAlbumInPlaylist(albumId, playlist) {
        this.getAlbumTracks(albumId);
        for (let i = 0; i < this.trackList.length; i += 1) {
          apiPlaylist.insertIntoPlaylist(this.trackList[i], playlist.id)
            .then((response) => {
              response.toString();
              this.playlists = [];
              this.trackList = [];
              this.getPlaylists();
            });
        }
      },
      getAlbumTracks(albumId) {
        api.getAlbumTracks(albumId)
          .then((response) => {
            this.trackList = response;
          });
      },
    },
    created() {
      this.getPlaylists();
    }
  };
</script>

<style scoped>
  #addToPlaylist{
    margin-left: 0px !important;
  }
  #albumResultContainer {
    background-color: lightskyblue;
    width:100%;
    float:left;
    margin-top: 30px;
    border-radius: 30px;
  }
  div.album {
    margin: 1% 0% 2% 2%;
    float:left;
  }

  .albumHighlight:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  .albumTitle {
    width: 150px;
    background-color: lightgreen;
    border: 1px solid black;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
  }

  #albumResultTitle{
    margin: 2% 0% 0% 2%;
    width:100%;
    float:left;
  }
  p{
    margin: 1px;
  }
</style>
