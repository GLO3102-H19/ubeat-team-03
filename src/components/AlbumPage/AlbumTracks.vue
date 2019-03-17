<template>
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

    <table class="addAlbumSongTable">
      <tr>
        <th>Add in Playlist</th>
      </tr>
      <tr v-for="track in trackList">
        <td class="addSongIntoTracklist">
          <div class="selectPlayList">
            <b-dropdown id="ddown-dropleft" size="sm" dropleft text="Add in PlayList" >
              <b-dropdown-item v-for="playlist in playlists" v-bind:key="playlist.id" class="dropdownMenu" v-on:click="addSongInPlaylist(track, playlist)">
                {{playlist.name}}
                <i v-if="songInPlaylist(track, playlist)" class="fa fa-check" aria-hidden="true"></i>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import * as api from '@/AlbumAPI';
  import * as apiPlaylist from '@/PlaylistAPI';
  // import Playlists from '../Playlists/Playlists';

  export default {
    props: ['email', 'id', 'albumId'],
    data: () => ({
      trackList: [],
      albumLength: '',
      errors: [],
      playlists: [],
      posts: [],
    }),
    methods: {
      millisToMinutesAndSeconds(millis) {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      },
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
        apiPlaylist.getPlaylists(this.id).then((res) => {
          this.playlists = res;
        });
      },
      songInPlaylist(track, playlist) {
        debugger;
        for (let i = 0; i < playlist.tracks.length; i += 1) {
          if (track.trackId === playlist.tracks[i].trackId) {
            return true;
          }
        }
        return false;
      },
      addSongInPlaylist(track, playlist) {
        apiPlaylist.insertIntoPlaylist(track, playlist.id)
          .then((response) => {
            response.toString();
            this.playlists = [];
            this.getPlaylists();
          });
      },
      Play(track) {
        const player = document.getElementById('playerMP3');
        if (this.$parent.$data.playingSong.url === track.preview) {
          if (this.$parent.$data.playingSong.paused === false) {
            player.pause();
            track.icon = 'far fa-play-circle fa-2x'; // eslint-disable-line no-param-reassign
            this.$parent.$data.playingSong.paused = true;
          } else {
            player.play();
            track.icon = 'far fa-pause-circle fa-2x'; // eslint-disable-line no-param-reassign
            this.$parent.$data.playingSong.paused = false;
          }
        } else {
          for (let i = 0; i < this.trackList.length; i += 1) {
            this.trackList[i].icon = 'far fa-play-circle fa-2x';
          }
          this.$parent.$data.playingSong.url = track.preview;
          track.icon = 'far fa-pause-circle fa-2x'; // eslint-disable-line no-param-reassign
          player.load();
          player.play();
          this.$parent.$data.playingSong.paused = false;
        }
      }
    },
    created() {
      this.getAlbumTracks();
      this.getPlaylists();
    },
    mounted() {
      this.$root.$on('albumIsInPlaylist', () => {
        this.getPlaylists();
      });
    }
  };
</script>

<style scoped>
  .bottomDiv {
    margin: 20px 40px 60px;
    display: flex;
    justify-content: flex-start;
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

  .songAlbumTable tr:hover {
    background-color: whitesmoke;
  }

  .songAlbumTable tr:hover .playButton {
    display: block;
  }

  .songAlbumTable tr:hover .trackNumber {
    display: none;
  }

  .playButton {
    display: none;
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

  .tableCenter {
    text-align: center;
  }

  .selectPlayList {
    display: flex;
    justify-content: space-between;
  }

  /* Small devices (Portrait phones, 576px and up) */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    .albumInfoDiv h1 {
      font-size: 35px;
    }

    .songAlbumTable {
      margin: auto;
    }

    .bottomDiv {
      margin: 20px 20px 60px;
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

    .bottomDiv {
      margin: 20px;
      margin-bottom: 60px;
    }

    .songAlbumTable td:nth-child(1) {
      width: 140px;
    }
  }

</style>
