<template>
  <div class="alert alert-danger">
    <strong id="errorMessage">{{ message }}</strong>
  </div>
</template>

<script>
  // import { store } from '@/store/Store';

  export default {
    props: ['message'],
    name: 'NotifBox',
  };

</script>

<style scoped>

</style>
