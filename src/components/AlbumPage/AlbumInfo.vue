<template>
  <div class="topDiv">
    <div class="albumDiv">
      <div class="albumCoverDiv">
        <img class="cover" v-bind:alt="title" v-bind:src="cover"/>
        <div class="middlePlayButton">
          <i class="fas fa-play-circle fa-5x"></i>
        </div>
      </div>
    </div>

    <div class="albumInfoDiv">
      <h1>{{title}}</h1>
      <h2 class="bandAlbumInfo">{{artist}}</h2>
      <h5 class="styleAlbumInfo">{{year}} - {{genre}}</h5>
      <h6 class="songsAlbumInfo">{{songCount}} songs, {{time}} minutes</h6>
      <div class="iTunesLink">
        <a v-bind:href="appleLink"
           target="_blank"
           style="display:inline-block;overflow:hidden;width:180px;height:40px;"></a>
      </div>
      <div class="addDeleteButtons">
        <b-dropdown id="ddown-dropright" size="sm" dropright text="Add in PlayList" >
          <b-dropdown-item href="#" class="dropdownMenu" v-on:click="selectedPlaylist(item)"> Create a new PlayList</b-dropdown-item>
          <b-dropdown-item v-for="playlist in playlists" class="dropdownMenu" v-on:click="addAlbumInPlaylist(trackList, playlist)">
            {{playlist.name}}
            <i v-if="songInPlaylist(track, playlist)" class="fa fa-check" aria-hidden="true"></i>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  import * as api from '@/AlbumAPI';
  import * as apiPlaylist from '@/PlaylistAPI';
  // import AlbumTracks from './AlbumTracks';

  export default {
    props: ['artistId', 'albumId'],
    data: () => ({
      artist: 'Nickelback',
      title: '',
      cover: '',
      year: '',
      genre: '',
      songCount: '',
      time: '',
      appleLink: '',
      trackList: [],
      albumLength: '',
    }),
    methods: {
      millisToMinutesAndSeconds(millis) {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      },
      getAlbumTitle() {
        api.getAlbumTitle(this.albumId)
          .then((response) => {
            this.title = response;
          });
      },
      getAlbumCover() {
        api.getAlbumCover(this.albumId)
          .then((response) => {
            this.cover = `${response.slice(0, -13)}300x300bb.jpg`;
          });
      },
      getAlbumYear() {
        api.getAlbumReleaseDate(this.albumId)
          .then((response) => {
            this.year = response.slice(0, 4);
          });
      },
      getAlbumGenre() {
        api.getAlbumGenre(this.albumId)
          .then((response) => {
            this.genre = response;
          });
      },
      getAlbumAppleLink() {
        api.getAlbumAppleLink(this.albumId)
          .then((response) => {
            this.appleLink = response;
          });
      },
      getAlbumSongCount() {
        api.getAlbumTracks(this.albumId)
          .then((response) => {
            this.songCount = response.length;
          });
      },
      getAlbumTime() {
        api.getAlbumTracks(this.albumId)
          .then((response) => {
            let albumTime = 0;
            for (let i = 0; i < response.length; i += 1) {
              albumTime += response[i].trackTimeMillis;
            }
            this.time = this.millisToMinutesAndSeconds(albumTime);
          });
      },
      /* Modif à partir d'ici */
      getAlbumTracks() {
        api.getAlbumTracks(this.albumId)
          .then((response) => {
            const tracks = response;
            this.albumLength = 0;
            for (let i = 0; i < tracks.length; i += 1) {
              this.albumLength += tracks[i].trackTimeMillis;
              this.trackList.push({
                trackNumber: tracks[i].trackNumber,
                trackName: tracks[i].trackName,
                trackTimeMillis: this.millisToMinutesAndSeconds(tracks[i].trackTimeMillis),
                preview: tracks[i].previewUrl,
                icon: 'far fa-play-circle fa-2x',
                trackId: tracks[i].trackId
              });
            }
          });
      },
      getPlaylists() {
        apiPlaylist.getPlaylists().then((res) => {
          this.posts = res;
          this.playlists = [];
          for (let i = 0; i < this.posts.length; i += 1) {
            if (Object.prototype.hasOwnProperty.call(this.posts[i], 'owner')) {
              if (this.posts[i].owner.id === this.id) {
                this.playlists.push(this.posts[i]);
              }
            }
          }
        });
      },
      addAlbumInPlaylist(trackList, playlist) {
        for (let i = 0; i < trackList.length; i += 1) {
          apiPlaylist.insertIntoPlaylist(trackList[i], playlist.id)
            .then((response) => {
              response.toString();
              this.playlists = [];
              this.getPlaylists();
            });
        }
      }
    },
    created() {
      this.getAlbumTitle();
      this.getAlbumCover();
      this.getAlbumYear();
      this.getAlbumGenre();
      this.getAlbumAppleLink();
      this.getAlbumSongCount();
      this.getAlbumTime();
      this.getAlbumTracks();
      this.getPlaylists();
    }
  };
</script>

<style scoped>

</style>
