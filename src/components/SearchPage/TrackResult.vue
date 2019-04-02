<template>
  <div id="trackResultContainer">
    <div id="trackResultTitle"><h2>Track</h2></div>
  <AlbumTracks v-bind:email="email" v-bind:id="id" v-bind:search="search" v-bind:searchTrackList="trackResult"></AlbumTracks>
    <Player v-bind:source="playingSong.url"/>
  </div>
</template>

<script>
  import AlbumTracks from '../AlbumPage/AlbumTracks';
  import Player from '../Player';

  export default {
    components: { AlbumTracks, Player },
    props: ['email', 'id', 'trackResult'],
    name: 'TrackResult',
    data: () => ({
      search: true,
      playingSong: { url: '', paused: false },
    }),
  };
</script>

<style scoped>
  #trackResultContainer {
    background-color: lightskyblue;
    width:100%;
    float:left;
    margin-top: 30px;
    border-radius: 30px;
  }

  #trackResultTitle{
    margin: 2% 0% 0% 2%;
    /*margin-left: 10px;*/
    width:100%;
    float:left;
  }

  .bottomDiv {
    float: left !important;
  }
</style>
