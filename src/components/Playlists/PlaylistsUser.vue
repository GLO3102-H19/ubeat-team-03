<template>
  <li v-on:click="ChangeInfoPlaylist"><input v-model="playlistUser.name"><b-button class="col-md-2 offset-md-1" size="sm" variant="primary" v-on:click="putPlaylist">Modif</b-button><b-button class="col-md-2 offset-md-1" size="sm" variant="danger" v-on:click="deletePlaylist">Delete</b-button></li>
</template>

<script>
  import * as api from '@/PlaylistAPI';

  export default {
    name: 'PlaylistsUser',
    props: ['playlistUser'],
    methods: {
      /**
      async Modif() {
        try {
          const ownerKey = this.$vnode.key;
          const response = await axios.put(`http://ubeat.herokuapp.com/unsecure/playlists/${ownerKey}`,
            { name: this.playlistUser.name, owner: this.playlistUser.owner.email });
          this.$parent.posts = response.data;
        } catch (e) {
          this.errors.push(e);
        }
      },
       */
      putPlaylist() {
        api.putPlaylist(this.playlistUser.name, this.playlistUser.owner.email, this.$vnode.key)
          .then((res) => {
            this.$parent.posts = res;
          });
      },
      /**
      async Delete() {
        try {
          const ownerKey = this.$vnode.key;
          const response = await axios.delete(`http://ubeat.herokuapp.com/unsecure/playlists/${ownerKey}`);
          let tempPlaylist;
          this.$parent.posts = response.data;

          for (let i = 0; i < this.$parent.playlists.length; i += 1) {
            tempPlaylist = this.$parent.playlists.pop();
            if (tempPlaylist.id !== ownerKey) {
              this.$parent.playlists.push(tempPlaylist);
            }
          }
        } catch (e) {
          this.errors.push(e);
        }
      },
       */
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
        this.$parent.playListInfo.name = this.playlistUser.name;
        this.$parent.playListInfo.tracks = this.playlistUser.tracks;
      },
    }
  };
</script>

<style scoped>

</style>
