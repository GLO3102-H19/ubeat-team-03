<template>
  <div id="mainDiv">
    <b-container fluid class="content">
      <b-row>
        <UserInfos></UserInfos>
        <UserFriends></UserFriends>
      </b-row>
      <b-row>
        <UserPlaylists></UserPlaylists>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  // import * as api from '@/services/PlaylistAPI';
  import UserPlaylists from './UserPlaylists';
  import UserInfos from './UserInfos';
  import UserFriends from './UserFriends';

  export default {
    components: { UserPlaylists, UserInfos, UserFriends },
    props: ['email', 'id', 'password'],
    data: () => ({
      playlists: [],
      friends: []
    }),
  };
</script>

<style scoped>
  #mainDiv {
    margin-top: 70px;
    padding: auto;
  }
</style>
