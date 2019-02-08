<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'app',
  components: {
    'nav-menu': Navigation
  },
  metaInfo: {
    title: '',
    titleTemplate: '%s | Ubeat',
    meta: [
      { name: 'viewport', content: 'width=device-width' }
    ]
  }
};
</script>

<style>
</style>
