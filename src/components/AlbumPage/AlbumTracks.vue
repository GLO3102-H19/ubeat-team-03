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
            <!--
            <b-form-select v-model="selected" :options=" items in playlists">{{items.name}}</b-form-select>
              <options v-on:click="selectedPlaylist(item)" value="Create a new PlayList"></options>
              <options v-on:click="selectedPlaylist(item)" v-for="items in playlists">{{items.name}}</options>
            -->

            <!-- À arranger -->
            <b-dropdown id="ddown-dropleft" dropleft text="Select a PlayList" >
              <b-dropdown-item href="#" class="dropdownMenu" v-on:click="selectedPlaylist(item)"> Create a new PlayList</b-dropdown-item>
              <b-dropdown-item v-for="items in playlists" class="dropdownMenu" v-on:click="selectedPlaylist(items)">{{items.name}} </b-dropdown-item>
            </b-dropdown>

            <button type="button" class="btn btn-primary btn-sm" v-on:click="addInPlayList(track)">Add</button>
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
      id: '0',
      selectPlaylist: ''
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
      selectedPlaylist(item) {
        this.selectPlaylist = item.name;
        document.getElementById('ddown-dropleft').innerText = this.selectPlaylist;
      },
      /* Méthode à terminer */
      addSongInPlaylist(trackId, playlistId) {
        apiPlaylist.insertIntoPlaylist(trackId, playlistId)
          .then((response) => {
            response.toString();
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
    }
  };
</script>

<style scoped>

</style>
