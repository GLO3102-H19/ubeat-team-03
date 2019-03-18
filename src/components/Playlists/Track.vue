<template>
  <tr>
    <td class="tableCenter">
      <div class="songNumber"> {{tracks.trackNumber}} </div>
      <div class="playButton" v-on:click="Play">
        <i class="far fa-play-circle fa-2x"></i>
      </div>
    </td>
    <td>{{tracks.trackName}}</td>
    <td id="songAlbum">{{tracks.collectionName}}</td>
    <td id="songArtist">{{tracks.artistName}}</td>
    <td class="tableCenter" id="songLength">{{trackLength}}</td>
    <td><b-button class="offset-1"  size="sm" variant="danger" v-on:click="removeSong">Delete</b-button></td>
  </tr>
</template>

<script>
  import * as api from '@/PlaylistAPI';
  import Player from '../Player';

  export default {
    components: { Player },
    name: 'Track',
    props: ['tracks', 'songNumber'],
    computed: {
      trackLength() {
        const time = this.tracks.trackTimeMillis;
        const ms = time % 1000;
        const timeTemp = (time - ms) / 1000;
        const secs = timeTemp % 60;
        const timeTemp2 = (timeTemp - secs) / 60;
        const mins = timeTemp2 % 60;

        return `${mins}:${secs}`;
      }
    },
    methods: {
      async Play() {
        this.$parent.$data.srcTest = this.tracks.previewUrl;
        document.getElementById('playerMP3').load();
        document.getElementById('playerMP3').play();
      },
      deleteSong() {
        api.removeSongFromPlaylist(this.$parent.$vnode.key, this.tracks.trackId)
          .then((res) => {
            this.$parent.posts = res;
          });
      },
      removeSong() {
        this.deleteSong();
        this.$emit('removeSong', this.songNumber);
      }
    },
  };
</script>

<style scoped>
  .playButton {
    display: none;
  }

  audio {
    width: 100%;
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
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    .albumInfoDiv h1 {
      font-size: 35px;
    }

    .songAlbumTable td:nth-child(1) {
      width: 140px;
    }

    .playButton {
      display: none;
    }

    #songAlbum{
      display: none;
    }

    #songArtist{
      display: none;
    }

    #songLength{
      display: none;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .albumInfoDiv h1 {
      font-size: 35px;
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
