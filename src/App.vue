<template>
  <div id="app">
    <nav-menu v-bind:name="userName"></nav-menu>
    <router-view v-bind:email="userEmail" v-bind:id="userId" v-bind:password="userpassword"></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import { store } from '@/store/Store';

export default {
  name: 'app',
  components: {
    'nav-menu': Navigation
  },
  data: () => ({
    userId: store.state.userId,
    userName: store.state.userName,
    userEmail: store.state.userEmail,
    userpassword: ''
  })
};
</script>

<style>
</style>
