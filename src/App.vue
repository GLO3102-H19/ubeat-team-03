<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view v-bind:email="userEmail" v-bind:id="userId"></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'app',
  components: {
    'nav-menu': Navigation
  },
  data: () => ({
    userId: '5c797c1fe3a71b00042adfc5',
    userEmail: 'team3sfscmaedhmk@mail.com'
  })
};
</script>

<style>
</style>
