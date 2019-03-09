<template>
  <div class="mainDiv">
    <div class="topDiv">
      <div class="albumDiv">
        <div class="albumCoverDiv">
          <img class="cover" v-bind:alt="name" v-bind:src="cover"/>
          <div class="middlePlayButton">
            <i class="fas fa-play-circle fa-5x"></i>
          </div>
        </div>
      </div>

      <div class="albumInfoDiv">
        <h1>{{name}}</h1>
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

    <div class="bottomDiv">
      <table class="songAlbumTable">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Length</th>
        </tr>
        <tr v-for="track in trackList" >
          <td class="tableCenter" v-on:click="Play(track)">
            <div class="trackNumber">{{track.trackNumber}}</div>
            <div class="playButton">
              <i v-bind:class="track.icon"></i>
            </div>
          </td>
          <td v-on:click="Play(track)">{{track.trackName}}</td>
          <td class="tableCenter" v-on:click="Play(track)">{{track.trackTimeMillis}}</td>
        </tr>
      </table>
    </div>
    <Player v-bind:source="playingSong.url"/>
  </div>
</template>

<script>
  import axios from 'axios';
  import Player from './Player';
  import Track from './Track';

  function millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  export default {
    name: 'album',
    data() {
      return {
        name: 'Feed the Machine',
        artist: 'Nickelback',
        cover: '',
        year: '',
        genre: '',
        songCount: '',
        time: '',
        appleLink: '',
        trackList: [],
        errors: [],
        playingSong: { url: '', paused: false }
      };
    },

    components: { Player, Track },

    methods: {
      async loadTracks() {
        try {
          const response = await axios.get(
            'http://ubeat.herokuapp.com/unsecure/albums/1234838372/tracks'
          );
          const tracks = response.data.results;
          const coverImg = Object.getOwnPropertyDescriptor(tracks[0], 'artworkUrl100').value;
          this.cover = `${coverImg.slice(0, -13)}300x300bb.jpg`;
          this.year = Object.getOwnPropertyDescriptor(tracks[1], 'releaseDate').value.slice(0, 4);
          this.genre = Object.getOwnPropertyDescriptor(tracks[1], 'primaryGenreName').value;
          this.songCount = tracks.length;
          this.appleLink = Object.getOwnPropertyDescriptor(tracks[0], 'collectionViewUrl').value;
          this.trackList = [];
          let albumLength = 0;
          for (let i = 0; i < tracks.length; i += 1) {
            albumLength += Object.getOwnPropertyDescriptor(tracks[i], 'trackTimeMillis').value;
            this.trackList.push({
              trackNumber: Object.getOwnPropertyDescriptor(tracks[i], 'trackNumber').value,
              trackName: Object.getOwnPropertyDescriptor(tracks[i], 'trackName').value,
              trackTimeMillis: millisToMinutesAndSeconds(Object.getOwnPropertyDescriptor(tracks[i], 'trackTimeMillis').value),
              preview: Object.getOwnPropertyDescriptor(tracks[i], 'previewUrl').value,
              icon: 'far fa-play-circle fa-2x'
            });
          }
          this.time = millisToMinutesAndSeconds(albumLength).slice(0, -3);
        } catch (e) {
          this.errors.push(e);
        }
      },
      Play(track) {
        const player = document.getElementById('playerMP3');
        if (this.playingSong.url === track.preview) {
          if (this.playingSong.paused === false) {
            player.pause();
            track.icon = 'far fa-play-circle fa-2x'; // eslint-disable-line no-param-reassign
            this.playingSong.paused = true;
          } else {
            player.play();
            track.icon = 'far fa-pause-circle fa-2x'; // eslint-disable-line no-param-reassign
            this.playingSong.paused = false;
          }
        } else {
          for (let i = 0; i < this.trackList.length; i += 1) {
            this.trackList[i].icon = 'far fa-play-circle fa-2x';
          }
          this.playingSong.url = track.preview;
          track.icon = 'far fa-pause-circle fa-2x'; // eslint-disable-line no-param-reassign
          player.load();
          player.play();
          this.playingSong.paused = false;
        }
      }
    },
    created() {
      this.loadTracks();
    }
  };
</script>

<style>
  .topDiv {
    height: 300px;
    margin: 70px 40px;
    display: flex;
  }

  .bottomDiv {
    margin-top: 20px;
    margin-left: 40px;
    margin-bottom: 60px;
  }

  .albumDiv {
    align-content: space-between;
  }

  .albumCoverDiv {
    position: relative;
    cursor: pointer;
  }

  .albumInfoDiv {
    justify-content: flex-start;
    margin-left: 30px;
    position: relative;
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

  .bandAlbumInfo {
    margin-top: 15px;
  }

  .styleAlbumInfo {
    margin-top: 30px;
  }

  .middlePlayButton {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -40px;
  }

  .playButton {
    display: none;
  }

  .songAlbumTable th {
    border: none;
    background: white;
    text-align: center;
  }

  .songAlbumTable td {
    cursor: pointer;
  }

  .songAlbumTable td:nth-child(1) {
    width: 60px;
  }

  .songAlbumTable th:nth-child(2) {
    text-align: left;
    width: 800px;
  }

  .songAlbumTable th:nth-child(3) {
    width: 80px;
  }

  .songAlbumTable tr {
    border: 2px solid white;
    background: #e8e8e8;
    height: 60px;
  }

  .tableCenter {
    text-align: center;
  }

  /* Small devices (Portrait phones, 576px and up) */
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .albumInfoDiv h1 {
      font-size: 35px;
    }

    .songAlbumTable {
      margin: auto;
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

    .iTunesLink {
      position: absolute;
      bottom: 0;
      margin-left: -90px;
    }

    .bottomDiv {
      margin: 20px;
      margin-bottom: 60px;
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

    .songAlbumTable {
      margin: auto;
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

    .iTunesLink {
      position: absolute;
      bottom: 0;
      margin-left: -90px;
    }

    .bottomDiv {
      margin: 20px;
      margin-bottom: 60px;
    }

    .songAlbumTable td:nth-child(1) {
      width: 140px;
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media only screen and (min-device-width: 1281px) {
    .songAlbumTable tr:hover {
      background-color: whitesmoke;
    }

    .songAlbumTable tr:hover .playButton {
      display: block;
    }

    .songAlbumTable tr:hover .trackNumber {
      display: none;
    }

    .albumCoverDiv:hover .cover {
      opacity: 0.5;
    }

    .albumCoverDiv:hover .middlePlayButton {
      display: block;
    }
  }
</style>
