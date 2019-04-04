<template>
  <div>
    <b-container fluid class="bv-example-row text-center">
      <b-row align-h="center">
        <b-col class="row-1">
          <p class="left-content"></p>
          <p>Follow your artists</p>
          <p>Listen to anything you like</p>
          <p>Discover new artists</p>
        </b-col>
        <b-col class="row-2">
          <p class="right-content"></p>
          <Login v-if="login" id="logInBox"></Login>
          <SignUp v-if="signup" id="signUpBox"></SignUp>
          <p>Hear what the world's listening</p>
          <b-button class="login-button" variant="primary" v-on:click="logingIn">
            Log In
          </b-button>
          <b-button class="signup-button" variant="primary" v-on:click="signingIn">
            Sign Up
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-card class="footer text-center">&copy; Ubeat 2019</b-card>
  </div>
</template>
<script>
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
  };
</script>
<style>
.row-1 {
  font-size: large;
  font-weight: bold;
  color: lightcyan;
  background-color: lightskyblue;
  height: 100vh;
}
.row-2 {
  font-size: large;
  font-weight: bold;
  background-color: lightgreen;
  height: 100vh;;
}
.left-content {
  height: 35%;
}
.right-content {
  height: 33%;
}
.login-button {
  width: 50%;
  margin: 5px 0 5px 0;
}
#logInBox{
  position: absolute;
  left: 100px;
  right: 100px;
  font-size: medium;
  text-align: start;

  border-radius: 15px;
  padding: 10px 20px 10px 20px;
  background-color: white;
}
.signup-button {
  width: 50%;
  margin: 5px 0 5px 0;
}
#signUpBox{
  position: absolute;
  left: 100px;
  right: 100px;
  bottom: 170px;
  font-size: medium;
  text-align: start;

  border-radius: 15px;
  padding: 10px 20px 10px 20px;
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
  background-color: #2e70ff;
}

/* Small devices (Portrait phones, 576px and up) */
@media only screen and (min-width: 320px) and (max-width: 568px) {
  .footer {
    position: relative;
  }

  .row-1 {
    display: none;
  }
  .signup-button {
    width: 70%;
  }

  .login-button {
    width: 70%;
  }
  #logInBox{
    left: 25px;
    right: 25px;
  }
  #signUpBox{
    left: 25px;
    right: 25px;
    bottom: 50px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .footer {
    position: relative;
  }

  .row-1 {
    display: none;
  }
  .signup-button {
    width: 70%;
  }

  .login-button {
    width: 70%;
  }
  #logInBox{
    left: 75px;
    right: 75px;
  }
  #signUpBox{
    left: 75px;
    right: 75px;
    bottom: 260px;
  }
}

</style>
