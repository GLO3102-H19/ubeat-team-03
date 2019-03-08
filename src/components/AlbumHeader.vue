<template>
  <b-container id="middleDiv">
    <h4 class="albumSectionTitle">Albums</h4>
    <a
      href="https://geo.itunes.apple.com/us/artist/nickelback/5280361?mt=1&app=music&ls=1"
      style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/embed/v1/app-icon.svg?hex=000000) no-repeat;width:40px;height:40px;"
    ></a>
  </b-container>
</template>

<script>
  export default {
    name: 'AlbumList',
  };
</script>

<style scoped>
  #middleDiv {
    margin-top: 50px;
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: space-between;
  }

  .albumSectionTitle {
    color: black;
  }

</style>
