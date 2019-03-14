<template>
  <div class="mainDiv">
    <b-container fluid class="header">
      <b-row>
        <h2>Playlists</h2>
      </b-row>
    </b-container>
    <b-container fluid class="content">
      <b-row>
        <b-col sm="5">
          <div class="playlistsDiv">
            <input v-model="playlistsName" />
            <button v-on:click="insertNewPlaylist">Add</button>
            <ul>
              <PlaylistsUser
                v-for="item in playlists"
                v-bind:playlistUser="item"
                v-bind:key="item.id"
              >
              </PlaylistsUser>
            </ul>
          </div>
        </b-col>
        <b-col sm="2"> </b-col>
        <b-col sm="5">
          <div class="playlistDetailsDiv">
            <PlaylistInfo
              v-bind:info="playListInfo"
              v-bind:key="playListInfo.id">
            </PlaylistInfo>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import * as api from '@/PlaylistAPI';
  import PlaylistsUser from './PlaylistsUser';
  import PlaylistInfo from './PlaylistInfo';

  export default {
    components: { PlaylistInfo, PlaylistsUser },
    props: ['email', 'id'],
    data: () => ({
      playlistsName: '',
      playListInfo: {
        name: '',
        id: '0',
        tracks: [],
        owner: {
          email: '',
          id: ''
        }
      },
      playlists: [],
      posts: [],
      errors: []
    }),
    name: 'Playlists',
    methods: {
      /**
      async Insert() {
        try {
          const response = await axios.post(
            'http://ubeat.herokuapp.com/unsecure/playlists',
            { name: this.playlistsName, owner: this.email }
          );
          this.posts = response.data;
          this.playlists.push(this.posts);
        } catch (e) {
          this.errors.push(e);
        }
      },
       */
      insertNewPlaylist() {
        api.insertNewPlaylist(this.playlistsName, this.email).then((res) => {
          this.posts = res;
          this.playlists.push(this.posts);
        });
      }, /**
           async Update() {
        try {
          const response = await axios.get(
            'http://ubeat.herokuapp.com/unsecure/playlists'
          );
          this.posts = response.data;
          this.playlists = [];

          for (let i = 0; i < this.posts.length; i += 1) {
            if (Object.prototype.hasOwnProperty.call(this.posts[i], 'owner')) {
              if (this.posts[i].owner.id === this.id) {
                this.playlists.push(this.posts[i]);
              }
            }
          }
        } catch (e) {
          this.errors.push(e);
        }
      }
       */
      getPlaylists() {
        api.getPlaylists().then((res) => {
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
      }
    },
    created() {
      this.getPlaylists();
    }
  };
</script>

<style scoped>
  .mainDiv {
    margin-top: 60px;
    padding: auto;
  }

  .header {
    padding: 10px 10px 10px 10px;
  }

  .playlistsDiv {
    padding: 10px 10px 10px 10px;
    background-color: lightskyblue;
    border-radius: 15px;
  }

  .playlistDetailsDiv {
    padding: 10px 10px 10px 10px;
    background-color: lightskyblue;
    border-radius: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }

  /* Small devices (Portrait phones, 576px and up) */
  @media only screen and (min-width: 320px) and (max-width: 480px) {
  }

  /* Medium devices (tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }

  /* Large devices (desktops, 992px and up) */
  @media only screen and (min-device-width: 1281px) {
  }
</style>
