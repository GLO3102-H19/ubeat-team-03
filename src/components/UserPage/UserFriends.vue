<template>
  <b-col sm="5" id="friendsList">
    <h2 id="title">Friends</h2>
    <table class="songAlbumTable">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Unfollow</th>
      </tr>
      <tr v-for="track in trackList" >
        <td class="tableCenter" v-on:click="Play(track)">
          <div class="trackNumber">{{track.trackNumber}}</div>
          <div class="playButton">
            <i v-bind:class="track.icon"></i>
          </div>
        </td>
        <td v-on:click="Play(track)">{{track.trackName}}</td>
        <td class="tableCenter" v-on:click="Play(track)">{{track.trackTime}}</td>
      </tr>
    </table>
  </b-col>
</template>

<script>
  export default {
    name: 'UserFriends',
    data: () => ({
      friends: [],
    }),
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
