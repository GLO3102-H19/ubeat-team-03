<template>
  <ul>
    <li>{{info.id}}</li>
    <li>{{info.name}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'PlaylistInfo',
    props: ['info'],
  };
</script>

<style scoped>

</style>
