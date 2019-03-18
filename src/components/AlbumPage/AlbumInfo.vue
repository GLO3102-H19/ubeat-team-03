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
      <div class="playlistsDropDown">
        <b-dropdown id="ddown-dropright" size="sm" dropright text="Add in PlayList" >
          <b-dropdown-item v-for="playlist in playlists" v-bind:key="playlist.id" class="dropdownMenu" v-on:click="addAlbumInPlaylist(trackList, playlist)">
            {{playlist.name}}
          </b-dropdown-item>
        </b-dropdown>
      </div>
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
  import * as apiPlaylist from '@/PlaylistAPI';
  import AlbumTracks from './AlbumTracks';

  export default {
    props: ['artistId', 'albumId', 'id'],
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
                trackTimeMillis: tracks[i].trackTimeMillis,
                trackTime: this.millisToMinutesAndSeconds(tracks[i].trackTimeMillis),
                previewUrl: tracks[i].previewUrl,
                icon: 'far fa-play-circle fa-2x',
                wrapperType: tracks[i].wrapperType,
                kind: tracks[i].kind,
                artistId: tracks[i].artistId,
                collectionId: tracks[i].collectionId,
                trackId: tracks[i].trackId,
                artistName: tracks[i].artistName,
                collectionName: tracks[i].collectionName,
                collectionCensoredName: tracks[i].collectionCensoredName,
                trackCensoredName: tracks[i].trackCensoredName,
                artistViewUrl: tracks[i].artistViewUrl,
                collectionViewUrl: tracks[i].collectionViewUrl,
                trackViewUrl: tracks[i].trackViewUrl,
                artworkUrl30: tracks[i].artworkUrl30,
                artworkUrl60: tracks[i].artworkUrl60,
                artworkUrl100: tracks[i].artworkUrl100,
                collectionPrice: tracks[i].collectionPrice,
                releaseDate: tracks[i].releaseDate,
                collectionExplicitness: tracks[i].collectionExplicitness,
                trackExplicitness: tracks[i].trackPrice,
                discCount: tracks[i].discCount,
                discNumber: tracks[i].discNumber,
                trackCount: tracks[i].trackCount,
                country: tracks[i].country,
                currency: tracks[i].currency,
                primaryGenreName: tracks[i].primaryGenreName,
                contentAdvisoryRating: tracks[i].contentAdvisoryRating,
                isStreamable: tracks[i].isStreamable
              });
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
      albumInPlaylist(albumId, playlist) {
        const songList = this.getAlbumTracks();
        for (let i = 0; i < songList.length; i += 1) {
          if (!AlbumTracks.songInPlaylist(songList[i], playlist)) {
            return false;
          }
        }
        return true;
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
  .topDiv {
    height: 300px;
    margin: 70px 40px;
    display: flex;
  }
  .albumDiv {
    align-content: space-between;
  }
  .albumCoverDiv {
    position: relative;
    cursor: pointer;
  }
  .albumCoverDiv:hover .cover {
    opacity: 0.5;
  }
  .albumCoverDiv:hover .middlePlayButton {
    display: block;
  }
  .middlePlayButton {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -40px;
  }
  .albumInfoDiv {
    justify-content: flex-start;
    margin-left: 30px;
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
