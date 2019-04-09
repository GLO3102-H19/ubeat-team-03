<template>
  <div>
    <span id="closePopUp" v-on:click="$parent.defaultMode">&times;</span>
    <b-form @submit="onSubmit">
      <b-form-group id="test"
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

      <b-button type="submit" class="submitButton" variant="primary">Log In</b-button>
      <b-button type="reset" v-on:click="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import * as api from '@/services/HomeAPI';
  import router from '@/router/router';
  import { store } from '@/store/Store';
  import Cookies from 'js-cookie';

  export default {
    data: () => ({
      email: '',
      password: ''
    }),
    methods: {
      async onSubmit(evt) {
        evt.preventDefault();
        api.logUser(this.email, this.password).then((res) => {
          store.setUserName(res.data.name);
          store.setUserEmail(res.data.email);
          store.setUserID(res.data.id);
          store.setUserToken(res.data.token);

          const date = new Date();
          const minutes = 60;
          date.setTime(date.getTime() + (minutes * 60 * 1000));
          Cookies.set('token', res.data.token, { expires: date });
        });
        this.reset();
        router.push('User');
      },
      reset() {
        this.email = '';
        this.password = '';
      }
    },
  };
</script>
<style scoped>
  #test{
    font-size: medium;
  }
  .submitButton{
    text-align: center;
  }
</style>
