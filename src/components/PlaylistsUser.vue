<template>
  <li><input v-model="playlistUser.name"><button v-on:click="Modif">Modif</button><button v-on:click="Delete">Delete</button></li>
</template>

<script>

  export default {
    name: 'PlaylistsUser',
    props: ['playlistUser'],
    methods: {
      async Modif() {
        return true;
      },
      async Delete() {
        return true;
      }
    }
  };
</script>

<style scoped>

</style>
