<template>
  <div class="alert alert-danger">
    <strong id="errorMessage">{{ message }}</strong>
  </div>
</template>

<script>
  // import { store } from '@/store/Store';

  export default {
    props: ['message'],
    name: 'NotifBox'
  };

</script>

<style scoped>
  .alert {
    position: relative;
    display: inline-block;
    top: 70px;
  }
  .alert, #errorMessage {
    -moz-animation: cssAnimation 1s ease-in 7s forwards, cssNone 0s ease-in 8s forwards;
    /* Firefox */
    -webkit-animation: cssAnimation 1s ease-in 7s forwards, cssNone 0s ease-in 8s forwards;
    /* Safari and Chrome */
    -o-animation: cssAnimation 1s ease-in 7s forwards, cssNone 0s ease-in 8s forwards;
    /* Opera */
    animation: cssAnimation 1s ease-in 7s forwards, cssNone 0s ease-in 8s forwards;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  @keyframes cssAnimation {
    to {
      opacity: 0;
    }
  }
  @keyframes cssNone {
    to {
      width:0;
      height:0;
      margin:0;
      padding:0;
      display: none;
      overflow:hidden;
    }
  }
  @-webkit-keyframes cssAnimation {
    to {
      opacity: 0;
    }
  }
  @-webkit-keyframes cssNone {
    to {
      width:0;
      height:0;
      margin:0;
      padding:0;
      display: none;
      overflow:hidden;
    }
  }
</style>
