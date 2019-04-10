<template>
  <div class="alert alert-danger">
    <strong>Error :</strong> {{ message }}
  </div>
</template>

<script>
  export default {
    props: ['message'],
    name: 'NotifBox',
  };
</script>

<style scoped>

</style>
