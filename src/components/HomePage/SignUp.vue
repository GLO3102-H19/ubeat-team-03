<template>
  <div>
    <span id="closePopUp" v-on:click="$parent.defaultMode">&times;</span>
    <b-form @submit="onSubmit">
      <b-form-group
        label="Name:"
        label-for="firstNameInput"
      >
        <b-form-input
          type="text"
          id="nameInput"
          v-model="fullname"
          required
          placeholder="Enter name" />
      </b-form-group>

      <b-form-group
        label="Email address:"
        label-for="emailInput"
      >
        <b-form-input
          type="email"
          id="emailInput"
          v-model="email"
          required
          placeholder="Enter email" />
      </b-form-group>

      <b-form-group
        label="Password:"
        label-for="passwordInput"
      >
        <b-form-input
          type="password"
          id="passwordInput"
          v-model="password"
          required
          placeholder="Enter password" />
      </b-form-group>

      <b-button type="submit" class="submitButton" variant="primary">Sign Up</b-button>
      <b-button type="reset" v-on:click="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import * as api from '@/services/HomeAPI';
  import app from '@/App';
  // import router from '@/router/router';
  // import { store } from '@/store/Store';
  // import Cookies from 'js-cookie';
  // import login from './LogIn';

  export default {
    data: () => ({
      fullname: '',
      email: '',
      password: ''
    }),
    methods: {
      async onSubmit(evt) {
        evt.preventDefault();
        api.addUser(this.fullname, this.email, this.password).then(() => {
          app.methods.showServerError('Your account has been created, please logIn.');
        });
        this.reset();
      },
      reset() {
        this.fullname = '';
        this.email = '';
        this.password = '';
      }
    },
  };
</script>

<style scoped>
  .submitButton{
    text-align: center;
  }
</style>
