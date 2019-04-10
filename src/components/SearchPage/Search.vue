<template>
  <div class="mainDiv">
    <b-container id="resultDiv">
      <AlbumResult v-if="searchType === 'Global' || searchType === 'Album'" v-bind:albumResult="albumList"></AlbumResult>
      <ArtistResult v-if="searchType === 'Global' || searchType === 'Artist'" v-bind:artistResult="artistList"></ArtistResult>
      <TrackResult v-if="searchType === 'Global' || searchType === 'Track'" v-bind:trackResult="trackList" v-bind:email="this.$attrs.email" v-bind:id="this.$attrs.id"></TrackResult>
      <UserResult v-if="searchType === 'Global' || searchType === 'User'" v-bind:userResult="userList"></UserResult>
    </b-container>
  </div>
</template>

<script>
  import { store } from '@/store/Store';
  import * as api from '@/services/SearchAPI';
  import AlbumResult from './AlbumResult';
  import ArtistResult from './ArtistResult';
  import TrackResult from './TrackResult';
  import UserResult from './UserResult';

  export default {
    name: 'Search',
    components: { TrackResult, ArtistResult, AlbumResult, UserResult },
    data: () => ({
      search: store.state.searchTerm,
      searchType: store.state.typeSearch,
      artistList: [],
      albumList: [],
      trackList: [],
      userList: [],
      posts: [],
      errors: []
    }),
    methods: {
      async getSearchGlobal() {
        api.getUsersSearchByName(this.search).then((res) => {
          for (let i = 0; i < res.length; i += 1) {
            if (Object.prototype.hasOwnProperty.call(res[i], 'id') &&
              Object.prototype.hasOwnProperty.call(res[i], 'name') &&
              Object.prototype.hasOwnProperty.call(res[i], 'email') &&
              Object.prototype.hasOwnProperty.call(res[i], 'following')) {
              this.userList.push(res[i]);
            }
          }
        });
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
      },
      async getSearchAlbum() {
        api.getAlbumsSearch(this.search).then((res) => {
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
      },
      async getSearchArtist() {
        api.getArtistsSearch(this.search).then((res) => {
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
      },
      async getSearchTracks() {
        api.getTracksSearch(this.search).then((res) => {
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
      },
      async getSearchUser() {
        api.getUsersSearchByName(this.search).then((res) => {
          for (let i = 0; i < res.length; i += 1) {
            if (Object.prototype.hasOwnProperty.call(res[i], 'id') &&
              Object.prototype.hasOwnProperty.call(res[i], 'name') &&
              Object.prototype.hasOwnProperty.call(res[i], 'email') &&
              Object.prototype.hasOwnProperty.call(res[i], 'following')) {
              this.userList.push(res[i]);
            }
          }
        });
      }
    },
    created() {
      if (this.searchType === 'Global') {
        this.getSearchGlobal();
      } else if (this.searchType === 'Album') {
        this.getSearchAlbum();
      } else if (this.searchType === 'Artist') {
        this.getSearchArtist();
      } else if (this.searchType === 'Track') {
        this.getSearchTracks();
      } else if (this.searchType === 'User') {
        this.getSearchUser();
      }
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
