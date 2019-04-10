<template>
  <div class="mainDiv">
    <Notif v-bind:message="notifMessage" class="notifs"></Notif>

    <Header v-bind:artistId="artistId"></Header>

    <AlbumHeader v-bind:artistId="artistId"></AlbumHeader>

    <AlbumList v-bind:artistId="artistId"></AlbumList>
  </div>
</template>

<script>
  import { store } from '@/store/Store';
  import Player from '../Player';
  import Header from './ArtistHeader';
  import AlbumHeader from './AlbumHeader';
  import AlbumList from './AlbumList';
  import Notif from '../NotifBox';

  export default {
    components: { Player, Header, AlbumHeader, AlbumList, Notif },
    data: () => ({
      artistId: store.state.artistState
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
  .notifs{
    position: absolute;
    top: 70px;
    right: 0px;
  }
</style>
