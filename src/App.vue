<template>
  <div id="app">
    <div id="container"></div>
    <nav-menu v-bind:name="userName"></nav-menu>
    <router-view v-bind:email="userEmail" v-bind:id="userId" v-bind:password="userpassword"></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Cookies from 'js-cookie';
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
      serverError: '',
    }),
    methods: {
      showServerError(errorMessage) {
        const ComponentClass = Vue.extend(NotifBox);
        const instance = new ComponentClass({
          propsData: { message: errorMessage }
        });
        instance.$mount();
        document.getElementById('container').appendChild(instance.$el);
      }
    },
    created() {
      store.setUserIdToVisit(Cookies.get('userId'));
    },
};
</script>

<style>

</style>
