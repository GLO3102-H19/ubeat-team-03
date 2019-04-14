<template>
</template>

<script>
  import router from '@/router/router';
  import { store } from '@/store/Store';

  export default {
    name: 'Redirect',
    beforeCreate() {
      if (store.state.redirect === 'Search') {
        router.push('Search');
      } else if (store.state.redirect === 'User') {
        router.push('User');
      } else if (store.state.redirect === 'Home') {
        router.push('/');
      } else if (store.state.redirect === 'Playlist') {
        router.push('Playlists');
      }
    },
  };
</script>

<style scoped>

</style>
