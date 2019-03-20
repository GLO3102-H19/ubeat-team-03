<template>
  <b-col sm="5" id="friendsList">
    <h2 id="title">Friends</h2>
  </b-col>
</template>

<script>
  export default {
    name: 'UserFriends'
  };
</script>

<style scoped>
  #friendsList{
    background-color: lightskyblue;
    border-radius: 15px;
    padding: 10px 10px 10px 10px;
  }
  #title{
    text-align: center;
  }
  /* Small devices (Portrait phones, 768px and down) */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
  }
  /* Medium devices (tablets, 768px tp 1024px) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
</style>
