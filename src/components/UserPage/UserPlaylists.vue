<template>
  <b-col class="playlists">
    <h2 id="title">Playlists</h2>
    <table class="songAlbumTable">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>#Songs</th>
        <th>Length</th>
        <th>Owner</th>
        <th><font-awesome-icon icon="trash" /></th>
      </tr>
    </table>
  </b-col>
</template>

<script>
  export default {
    name: 'UserPlaylists'
  };
</script>

<style scoped>
  .playlists{
    background-color: lightskyblue;
    border-radius: 15px;
    padding: 10px 10px 10px 10px;
    margin-top: 30px;
  }
  #title{
    text-align: center;
  }
  .songAlbumTable th {
    border: none;
    background: white;
    text-align: center;
  }
  .songAlbumTable td {
    cursor: pointer;
  }
  .songAlbumTable td:nth-child(1) {
    width: 60px;
  }
  .songAlbumTable th:nth-child(2) {
    text-align: left;
    width: 1500px;
  }
  .songAlbumTable th:nth-child(3) {
    width: 80px;
  }
  .songAlbumTable tr {
    border: 2px solid white;
    background: #e8e8e8;
    height: 50px;
  }
  /* Small devices (Portrait phones, 768px and down) */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
  }
  /* Medium devices (tablets, 768px to 1024px) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
</style>
