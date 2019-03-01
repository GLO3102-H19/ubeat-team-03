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
            <button v-on:click="Insert">Add</button>
            <ul>
              <PlaylistsUser
                v-for="item in playlists"
                v-bind:todo="item"
                v-bind:key="item.id"
                >
              </PlaylistsUser>
            </ul>
          </div>
        </b-col>
        <b-col sm="2"> </b-col>
        <b-col sm="5">
          <div class="playlistDetailsDiv"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import PlaylistsUser from './PlaylistsUser';

export default {
  components: { PlaylistsUser },
  props: ['email', 'id'],
  data: () => ({
    playlistsName: '',
    playlists: [],
    posts: [],
    errors: []
  }),
  name: 'Playlists',
  methods: {
    async Insert() {
      try {
        const response = await axios.post(
          'http://ubeat.herokuapp.com/unsecure/playlists',
          { name: this.playlistsName, owner: this.app.data().userEmail }
        );
        this.posts = response.data;
        this.playlists.push(this.posts);
      } catch (e) {
        this.errors.push(e);
      }
    }
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
}

.playlistDetailsDiv {
  padding: 10px 10px 10px 10px;
  background-color: lightskyblue;
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
