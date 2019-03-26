<template>
  <div id="artistResultContainer">
    <div id="artistResultTitle"><h2>Artist</h2></div>
    <div class="artist"  v-for="item in artistResult" v-bind:key="item.artistId" v-on:click="loadArtistPage(item.artistId)">
      <div class="artistImg">
        <b-img
          src="../static/artist.png"
          width="150"
          height="150"/>
      </div>
      <div class="artistTitle">
        <p>
          {{ item.artistName }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router/index';
  import { store } from '@/store/Store';

  export default {
    name: 'ArtistResult',
    props: ['artistResult'],
    data: () => ({
      search: ''
    }),
    methods: {
      loadArtistPage(artistId) {
        store.setArtistState(artistId);
        router.push('Artist');
      }
    }
  };
</script>

<style scoped>
  #artistResultContainer {
    background-color: lightskyblue;
    width:100%;
    float:left;
    margin-top: 30px;
  }
  div.artist {
    margin: 10px;
    width: 150px;
    height: 190px;
    float:left;
  }

  div.artist:hover{
    cursor: pointer;
    opacity: 0.5;
  }

  .artistTitle{
    width: 150px;
    height: 40px;
    background-color: lightgreen;
    border: 1px solid black;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  #artistResultTitle{
    margin-left: 10px;
    width:100%;
    float:left;
  }
  p{
    margin: 1px;
  }
</style>
