<template>
  <div id="app">
    <nav-menu v-bind:name="userName"></nav-menu>
    <NotifBox class="notif" v-bind:message="serverError"></NotifBox>
    <router-view v-bind:email="userEmail" v-bind:id="userId" v-bind:password="userpassword"></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import { store } from '@/store/Store';
import NotifBox from './components/NotifBox';

export default {
  name: 'app',
  components: {
    NotifBox,
    'nav-menu': Navigation
  },
  data: () => ({
    userId: store.state.userId,
    userName: store.state.userName,
    userEmail: store.state.userEmail,
    userpassword: '',
    serverError: ''
  }),
  mounted() {
    this.serverError = store.state.serverError;
  },
  updated() {
    this.serverError = store.state.serverError;
  }
};
</script>

<style>

  .notif {
    position: absolute;
    top: 70px;
    right: 0;
  }
</style>
