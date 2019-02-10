<template>
  <div>
    <b-container fluid class="bv-example-row text-center">
      <b-row align-h="center">
        <b-col class="row-1">
          <p class="left-content"></p>
          <p>Follow your artists</p>
          <p>Hear everything you like</p>
          <p>Discover new artists</p>
        </b-col>
        <b-col class="row-2">
          <p class="right-content"></p>
          <p>Hear what the world's listening</p>
          <b-button class="signup-button" href="#" variant="primary"
            >Sign Up</b-button
          >
          <p></p>
          <b-button class="login-button" href="#" variant="primary"
            >Log In</b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <b-card class="footer text-center">&copy; Ubeat 2019</b-card>
  </div>
</template>
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
  height: 100vh;
}
.left-content {
  height: 35%;
}
.right-content {
  height: 33%;
}
.signup-button {
  width: 50%;
}
.login-button {
  width: 50%;
}
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

/* Small devices (Portrait phones, 576px and up) */
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .footer {
    position: relative;
  }

  .row-1 {
    display: none;
  }
  .signup-button {
    width: 100%;
  }

  .login-button {
    width: 100%;
  }
}

/* Medium devices (tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
}

/* Large devices (desktops, 992px and up) */
@media only screen and (min-device-width: 1281px) {
}
</style>
