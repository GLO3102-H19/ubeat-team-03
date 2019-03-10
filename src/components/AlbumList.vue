<template>
  <b-container id="bottomDiv">
    <b-list-group>
      <b-list-group-item class="albumLine"  v-for="item in albumList" v-bind:key="item.collectionId">
        <b-img
        class="albumImg"
        v-bind:src= item.artworkUrl100
        v-on:click=loadAlbumPage()
        width="150"
        height="150"/>
        <ul class="list-unstyled albumInfos">
          <li><h4>{{ item.collectionName }}</h4></li>
          <li class="someInfos">{{ item.releaseDate.substring(0,4) }}</li>
        </ul>
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
  import router from '@/router/index';
  // import * as api from '@/ArtistAPI'
  import axios from 'axios';
  import Album from './Album';

  export default {
    data: () => ({
      artistId: '5280361',
      albumTitle: '',
      albumCoverLink: '',
      albumList: [],
      errors: []
    }),
    methods: {
      async updateAlbumList() {
        const baseUrl = 'http://ubeat.herokuapp.com/unsecure/artists/';
        axios.get(`${baseUrl + this.artistId}/albums`)
          .then((response) => {
            this.albumList = response.data.results;
          })
          .catch((e) => {
            this.errors.push(`Unable to obtain the album list from this artist, ${e}`);
          });
      },
      loadAlbumPage(collectionId) {
        router.push('Album');
        Album.loadAlbumPage(collectionId);
      }
    },

    created() {
      this.updateAlbumList();
    }
  };
</script>

<style scoped>
  #bottomDiv {
    margin-top: 30px;
    margin-bottom: 60px;
  }

  .albumLine {
    background-color: lightskyblue;
    display: flex;
  }

  .albumInfos {
    color: black;
  }

  .albumImg {
    margin-right: 30px;
  }

  .someInfos {
    font-size: 12px;
  }

</style>
