<template>
  <div class="mainDiv">
    <b-container id="resultDiv">
      <AlbumResult v-bind:albumResult="albumList"></AlbumResult>
      <ArtistResult v-bind:artistResult="artistList"></ArtistResult>
      <TrackResult v-bind:trackResult="trackList" v-bind:email="this.$attrs.email" v-bind:id="this.$attrs.id"></TrackResult>
    </b-container>
  </div>
</template>

<script>
  import { store } from '@/store/Store';
  import * as api from '@/services/SearchAPI';
  import AlbumResult from './AlbumResult';
  import ArtistResult from './ArtistResult';
  import TrackResult from './TrackResult';

  export default {
    name: 'Search',
    components: { TrackResult, ArtistResult, AlbumResult },
    data: () => ({
      search: store.state.searchTerm,
      artistList: [],
      albumList: [],
      trackList: [],
      userList: [],
      posts: [],
      errors: []
    }),
    methods: {
      async getSearchGlobal() {
        api.getGlobalSearch(this.search).then((res) => {
          for (let i = 0; i < res.results.length; i += 1) {
            if (Object.prototype.hasOwnProperty.call(res.results[i], 'wrapperType')) {
              if (res.results[i].wrapperType === 'track') {
                this.trackList.push(res.results[i]);
              } else if (res.results[i].wrapperType === 'collection') {
                this.albumList.push(res.results[i]);
              } else if (res.results[i].wrapperType === 'artist') {
                this.artistList.push(res.results[i]);
              }
            }
          }
        });
      }
    },
    created() {
      this.getSearchGlobal();
    }
  };
</script>

<style scoped>
  .mainDiv {
    margin-top: 60px;
  }
  #resultDiv {
    margin-top: 30px;
    margin-bottom: 60px;
  }
</style>
