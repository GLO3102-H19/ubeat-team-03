<template>
  <li v-on:click="ChangeInfoPlaylist">
    <div class="form-group row">
      <div class="col-md-8">
    <b-form-input size="sm" type="text" v-model="playlist.name" />
    </div>
    <div id="modifButton">
    <b-button size="sm" variant="primary" v-on:click="putPlaylist">Modif</b-button>
    </div>
    <div >
    <b-button class="offset-1"  size="sm" variant="danger" v-on:click="deletePlaylist">Delete</b-button>
    </div>
    </div></li>
</template>

<script>
  import * as api from '@/services/PlaylistAPI';

  export default {
    name: 'PlaylistsUser',
    props: ['playlist'],
    methods: {
      putPlaylist() {
        api.putPlaylist(this.$vnode.key,
          this.playlist.name,
          this.playlist.owner.email,
          this.playlist.tracks)
          .then((res) => {
            this.$parent.posts = res;
          });
      },
      deletePlaylist() {
        api.deletePlaylist(this.$vnode.key)
          .then((res) => {
            let tempPlaylist;
            this.$parent.posts = res;

            for (let i = 0; i < this.$parent.playlists.length; i += 1) {
              tempPlaylist = this.$parent.playlists.pop();
              if (tempPlaylist.id !== this.$vnode.key) {
                this.$parent.playlists.push(tempPlaylist);
              }
            }
            this.$parent.getPlaylists();
          });
      },
      async ChangeInfoPlaylist() {
        this.$parent.playListInfo.id = this.$vnode.key;
        this.$parent.playListInfo.name = this.playlist.name;
        this.$parent.playListInfo.tracks = this.playlist.tracks;
      },
    }
  };
</script>

<style scoped>
  li:hover{
    cursor: pointer;
    background-color: #80c6ef;
  }
  /* Small devices (Portrait phones, 576px and up) */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    #modifButton{
      margin-left: 15px;
    }
  }
  /* Medium devices (tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
</style>
