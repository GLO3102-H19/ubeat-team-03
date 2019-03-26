<template>
  <div class="mainDiv">
    <AlbumInfo v-bind:albumId="albumId" v-bind:id="id"></AlbumInfo>

    <AlbumTracks v-bind:email="email" v-bind:id="id" v-bind:albumId="albumId" v-bind:search="search"></AlbumTracks>

    <Player v-bind:source="playingSong.url"/>
  </div>
</template>

<script>
  import { store } from '@/store/Store';
  import Player from '../Player';
  import AlbumInfo from './AlbumInfo';
  import AlbumTracks from './AlbumTracks';

  export default {
    components: { AlbumInfo, AlbumTracks, Player },
    props: ['email', 'id'],
    data: () => ({
      albumId: store.state.albumState,
      artistId: store.state.artistState,
      errors: [],
      playingSong: { url: '', paused: false },
      search: false
    }),
  };
</script>

<style>
</style>
