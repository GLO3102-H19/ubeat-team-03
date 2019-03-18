<template>
  <div class="mainDiv">
    <Header v-bind:artistId="artistId"></Header>

    <AlbumHeader v-bind:artistId="artistId"></AlbumHeader>

    <AlbumList v-bind:artistId="artistId"></AlbumList>
  </div>
</template>

<script>
  import Player from '../Player';
  import Header from './ArtistHeader';
  import AlbumHeader from './AlbumHeader';
  import AlbumList from './AlbumList';

  export default {
    components: { Player, Header, AlbumHeader, AlbumList },
    data: () => ({
      // Nickelback par défaut
      artistId: '5280361'
    }),
  };
</script>

<style>
  .mainDiv {
    margin: 10px;
  }
  .mainDiv {
    margin-top: 20px;
    padding: auto;
  }
</style>
