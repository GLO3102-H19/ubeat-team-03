<template>
  <div class="mainDiv">
    <AlbumInfo v-bind:albumId="albumId"></AlbumInfo>

    <AlbumTracks v-bind:email="email" v-bind:id="id" v-bind:albumId="albumId"></AlbumTracks>

    <Player v-bind:source="playingSong.url"/>
  </div>
</template>

<script>

  import Player from '../Player';
  import AlbumInfo from './AlbumInfo';
  import AlbumTracks from './AlbumTracks';

  export default {
    components: { AlbumInfo, AlbumTracks, Player },
    props: ['email', 'id'],
    data: () => ({
      albumId: '1234838372',
      artistId: '5280361',
      errors: [],
      playingSong: { url: '', paused: false }
    }),
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
    margin-right: 40px;
    margin-bottom: 60px;
    display: flex;
    justify-content: flex-start;
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

  .songAlbumTable {
    width: 70%;
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

  .addAlbumSongTable {
    width: 30%;
  }

  .addAlbumSongTable th {
    border: none;
    background: white;
    text-align: center;
  }

  .addAlbumSongTable tr {
    border: 2px solid white;
    background: #e8e8e8;
    height: 60px;
  }

  .addAlbumSongTable td {
    cursor: pointer;
    margin-top: 10px;
    margin-left: 5px
  }

  .addSongIntoTracklist {
    display: flex;
    justify-content: space-around;
  }


  .selectPlayList {
    display: flex;
    justify-content: space-between;
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
