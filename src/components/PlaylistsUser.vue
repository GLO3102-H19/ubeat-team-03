<template>
  <li v-on:click="ChangeInfoPlaylist"><input v-model="playlistUser.name"><button v-on:click="Modif">Modif</button><button v-on:click="Delete">Delete</button></li>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'PlaylistsUser',
    props: ['playlistUser'],
    methods: {
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
