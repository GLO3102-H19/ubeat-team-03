<template>
  <div class="mainDiv">
    <b-container fluid class="content">
      <b-row>
        <UserInfos v-bind:id="userId"></UserInfos>
        <UserFriends v-bind:id="userId"></UserFriends>
      </b-row>
      <b-row>
        <UserPlaylists v-bind:id="userId"></UserPlaylists>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import { store } from '@/store/Store';
  import UserPlaylists from './UserPlaylists';
  import UserInfos from './UserInfos';
  import UserFriends from './UserFriends';

  export default {
    components: { UserPlaylists, UserInfos, UserFriends },
    data: () => ({
      userId: store.state.userIdToVisit,
      playlists: [],
      friends: []
    }),
  };
</script>

<style scoped>
  .mainDiv {
    margin-top: 70px;
    padding: auto;
  }
</style>
