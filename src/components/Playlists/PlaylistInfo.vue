<template>
  <b-container fluid class="playlistInfo">
    <h2>{{info.name}}</h2>
    <ul>
      <li>Total Length : {{totalLength}}</li>
      <li>Songs : {{info.tracks.length}}</li>
    </ul>
    <table class="songAlbumTable">
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Album</th>
        <th>Artist</th>
        <th>Length</th>
      </tr>
      <Track
        v-for="item in trackList"
        v-bind:tracks="item"
        v-bind:key="item.id"
      >
      </Track>
    </table>
    <Player v-bind:source="srcTest"/>
    </b-container>
</template>

<script>
  import Track from './Track';
  import Player from '../Player';

  export default {
    components: { Track, Player },
    name: 'PlaylistInfo',
    props: ['info', 'srcTrack'],
    data: () => ({
      srcTest: '#'
    }),
    computed: {
      totalLength() {
        let total = 0;
        for (let i = 0; i < this.info.tracks.length; i += 1) {
          total += this.info.tracks[i].trackTimeMillis;
        }
        return this.msToTime(total);
      },
      trackList() {
        return this.info.tracks;
      }
    },
    methods: {
      msToTime(time) {
        const ms = time % 1000;
        const timeTemp = (time - ms) / 1000;
        const secs = timeTemp % 60;
        const timeTemp2 = (timeTemp - secs) / 60;
        const mins = timeTemp2 % 60;
        const hrs = (timeTemp2 - mins) / 60;

        return `${hrs}:${mins}:${secs}.${ms}`;
      }
    }
  };
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
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

    .songAlbumTable tr:hover .songNumber {
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
