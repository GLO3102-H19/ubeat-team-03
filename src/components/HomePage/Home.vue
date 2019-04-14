<template>
  <div>
    <b-container fluid class="bv-example-row text-center">
      <b-row align-h="center">
        <b-col class="row-1">
          <p class="left-content"></p>
        </b-col>
        <b-col class="row-2">
          <p class="right-content"></p>
          <Login v-if="login" id="logInBox"></Login>
          <SignUp v-if="signup" id="signUpBox"></SignUp>
          <div v-if="!login && !signup" id="text">
            <p>Discover new artists</p>
            <p>Create playlists</p>
            <p id="share">Share them with the world</p>
            <b-button class="login-button" variant="primary" v-on:click="logingIn">
              Log In
            </b-button>
            <b-button class="signup-button" variant="primary" v-on:click="signingIn">
              Sign Up
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-card class="footer text-center">&copy; Ubeat 2019</b-card>
  </div>
</template>
<script>
  import { store } from '@/store/Store';
  import router from '@/router/router';
  import Cookies from 'js-cookie';
  import Login from './LogIn';
  import SignUp from './SignUp';

  export default {
    components: { Login, SignUp },
    data: () => ({
      login: false,
      signup: false
    }),
    methods: {
      logingIn() {
        this.login = true;
        this.signup = false;
      },
      signingIn() {
        this.signup = true;
        this.login = false;
      },
      defaultMode() {
        this.login = false;
        this.signup = false;
      }
    },
    created() {
      if (Cookies.get('token').length > 0) {
        store.setRedirect('User');
        router.push('Redirect');
      }
    }
  };
</script>

<style>
  .card-body {
    font-size: large;
    background-color: white;
    border-color: red;
  }
  #share {
    color:black;
  }
  .row-1 {
    background-color: white;
    height: 100vh;
    background-image: url("/static/homeImg.jpg");
    background-size: cover;
    background-position-y: 100%;
  }
  .row-2 {
    font-size: large;
    font-weight: bold;
    height: 100vh;
    color: #2e70ff;
  }
  .right-content {
    height: 25%;
  }
  .login-button {
    width: 50%;
    margin: 5px 0 5px 0;
  }

  .signup-button {
    width: 50%;
    margin: 5px 0 5px 0;
  }

  #logInBox{
    position: absolute;
    left: 100px;
    right: 100px;
    font-size: medium;
    text-align: start;
    top: 25vh;
    padding: 20px;
    background-color: white;
  }

  #signUpBox{
    position: absolute;
    left: 100px;
    right: 100px;
    font-size: medium;
    text-align: start;
    top: 20vh;
    padding: 20px;
    background-color: white;
  }

  #closePopUp{
    font-size: 1.5em;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 0;
  }

  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

  /* Medium and small devices (Portrait phones, tablets, 320px and up) */
  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    .footer {
      position: relative;
    }

    .row-1 {
      display: none;
    }

    .row-2 {
      font-size: large;
      font-weight: bold;
      color: white;
      text-shadow: #2e70ff 1px 1px;
      background-image: url("/static/homeImg.jpg");
      background-size: cover;
      background-position-y: 100%;
    }

    #share {
      color:white;
    }

    #text {
      background-color: rgba(0, 0, 0, 0.3);
      margin: 0;
      padding: 30px;
      border-radius: 15px;
    }

    .signup-button {
      width: 70%;
    }

    .login-button {
      width: 70%;
    }

    .btn-primary {
      background-color: white;
      border: none;
      color: black;
    }

    #logInBox{
      left: 25px;
      right: 25px;
      top: 25vh;
      color: black;
      padding: 35px;
      text-shadow: none;
    }

    #signUpBox{
      left: 25px;
      right: 25px;
      top: 25vh;
      color: black;
      padding: 35px;
      text-shadow: none;
    }
  }

</style>

