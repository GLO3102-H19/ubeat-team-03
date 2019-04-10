<template>
<div id="albumResultContainer">
  <div id="albumResultTitle"><h2>Album</h2></div>
      <div class="album"  v-for="item in albumResult" v-bind:key="item.collectionId" v-on:click="loadAlbumPage(item.collectionId, item.artistId)">
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
</template>

<script>
  import router from '@/router/index';
  import { store } from '@/store/Store';

  export default {
    name: 'AlbumResult',
    props: ['albumResult'],
    data: () => ({
      search: ''
    }),
    methods: {
      loadAlbumPage(collectionId, artistId) {
        store.setAlbumState(collectionId);
        store.setArtistState(artistId);
        router.push('Album');
      }
    }
  };
</script>

<style scoped>
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

  div.album:hover {
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
