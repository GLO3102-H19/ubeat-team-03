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
          <b-button class="signup-button" href="#" variant="primary">Sign Up</b-button>
          <p></p>
          <b-button class="login-button" href="#" variant="primary">Log In</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-card class="text-center">&copy; Ubeats 2019</b-card>
  </div>
</template>
<style>
.row-1 {
    font-size: large;
    font-weight: bold;
    color: red;
  background-color: black;
  height: 500px;
}
.row-2 {
    font-size: large;
    font-weight: bold;
  background-color: red;
  height: 500px;
}
.left-content {
    height: 175px;
}
.right-content {
    height: 150px;
}
.signup-button {
    width: 50%;
}
.login-button {
    width: 50%;
}
@media (max-width: 600px) {
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
</style>