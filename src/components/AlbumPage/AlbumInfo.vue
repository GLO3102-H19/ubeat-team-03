<template>
  <b-container class="topDiv">
    <b-container class="albumDiv">
      <b-container class="albumCoverDiv">
        <img class="cover" v-bind:alt="title" v-bind:src="cover"/>
      </b-container>


      <b-container class="albumInfoDiv">
        <h1>{{title}}</h1>
        <h2 class="bandAlbumInfo">{{artist}}</h2>
        <h5 class="styleAlbumInfo">{{year}} - {{genre}}</h5>
        <h6 class="songsAlbumInfo">{{songCount}} songs, {{time}} minutes</h6>
        <b-container class="iTunesLink">
          <a v-bind:href="appleLink"
             target="_blank"
             style="display:inline-block;overflow:hidden;width:180px;height:40px;"></a>
        </b-container>
        <b-container class="addDeleteButtons">
          <b-dropdown id="ddown-dropright" size="sm" dropright text="Add in PlayList" >
            <!-- <b-dropdown-item href="#" class="dropdownMenu" v-on:click="selectedPlaylist(item)"></b-dropdown-item> -->
            <b-dropdown-item v-for="playlist in playlists" v-bind:key="playlist.id" class="dropdownMenu" v-on:click="addAlbumInPlaylist(trackList, playlist)">
              {{playlist.name}}
              <i v-if="albumInPlaylist(playlist)" class="fa fa-check" aria-hidden="true"></i>
            </b-dropdown-item>
          </b-dropdown>
        </b-container>
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
  import * as api from '@/services/AlbumAPI';
  import * as apiPlaylist from '@/services/PlaylistAPI';

  export default {
    props: ['artistId', 'albumId', 'id'],
    data: () => ({
      artist: '',
      title: '',
      cover: '',
      year: '',
      genre: '',
      songCount: '',
      time: '',
      appleLink: '',
      trackList: [],
      albumLength: '',
      playlists: [],
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
            console.log(response);
          });
      },
      getAlbumArtistName() {
        api.getArtist(this.albumId)
          .then((response) => {
            this.artist = response;
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
      getAlbumTracks() {
        api.getAlbumTracks(this.albumId)
          .then((response) => {
            this.trackList = response;
            this.albumLength = 0;
            for (let i = 0; i < response.length; i += 1) {
              this.albumLength += response[i].trackTimeMillis;
            }
          });
      },
      getPlaylists() {
        apiPlaylist.getPlaylists(this.id).then((res) => {
          this.playlists = res;
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
      },
      albumInPlaylist(playlist) {
        for (let i = 0; i < this.trackList.length; i += 1) {
          if (!(this.songInPlaylist(this.trackList[i], playlist))) {
            return false;
          }
        }
        this.$root.$emit('albumIsInPlaylist');
        return true;
      },
      songInPlaylist(track, playlist) {
        for (let i = 0; i < playlist.tracks.length; i += 1) {
          if (track.trackId === playlist.tracks[i].trackId) {
            return true;
          }
        }
        return false;
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
      this.getAlbumArtistName();
    }
  };
</script>

<style scoped>
  .topDiv {
    height: 300px;
    margin: 70px 40px;
  }
  .albumCoverDiv {
    max-width: 800px;
  }
  .albumDiv {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .albumInfoDiv {
    justify-content: flex-start;
    position: relative;
  }
  .bandAlbumInfo {
    margin-top: 15px;
  }
  .styleAlbumInfo {
    margin-top: 30px;
  }
  .iTunesLink {
    display: inline-block;
    position: absolute;
    bottom: 0;
    height: 40px;
    width: 180px;
    background: url(https://linkmaker.itunes.apple.com/en-us/lockup.svg?releaseDate=2017-06-16&kind=album&bubble=apple_music&style=mono-black)
    no-repeat;
    background-size: cover;
  }
  /* Small devices (Portrait phones, 576px and up) */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    .albumInfoDiv h1 {
      font-size: 35px;
    }
    .topDiv {
      margin: 70px 20px;
      display: block;
      position: relative;
      text-align: center;
      height: auto;
    }
    .albumDiv {
      display: block;
      left: 50%;
      margin: auto;
    }
    .albumInfoDiv {
      margin: 20px;
      height: 250px;
      position: relative;
    }
    .styleAlbumInfo{
      margin-top: 10px;
    }
    .iTunesLink {
      position: absolute;
      bottom: 0;
      margin-left: -90px;
    }
    .songAlbumTable td:nth-child(1) {
      width: 140px;
    }
  }
  /* Medium devices (tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .albumInfoDiv h1 {
      font-size: 35px;
    }
    .topDiv {
      margin: 70px 20px;
      display: block;
      position: relative;
      text-align: center;
      height: auto;
    }
    .albumDiv {
      display: block;
      left: 50%;
      margin: auto;
    }
    .albumInfoDiv {
      margin: 20px;
      height: 250px;
      position: relative;
    }
    .styleAlbumInfo{
      margin-top: 10px;
    }
    .iTunesLink {
      position: absolute;
      bottom: 0;
      margin-left: -90px;
    }
    .songAlbumTable td:nth-child(1) {
      width: 140px;
    }
  }
</style>
