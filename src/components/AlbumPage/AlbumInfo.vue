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
    </div>
  </div>
</template>

<script>
  import * as api from '@/AlbumAPI';

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
    },
    created() {
      this.getAlbumTitle();
      this.getAlbumCover();
      this.getAlbumYear();
      this.getAlbumGenre();
      this.getAlbumAppleLink();
      this.getAlbumSongCount();
      this.getAlbumTime();
    }
  };
</script>

<style scoped>

</style>
