<template>
  <b-col sm="5" class="friendsList">
    <h2 id="title">Following</h2>
    <table class="songAlbumTable">
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr v-for="friend in friends" >
        <td>
          <div>{{friend.name}}</div>
        </td>
        <td>
          <div>{{friend.email}}</div>
        </td>
      </tr>
    </table>
  </b-col>
</template>

<script>
  import * as api from '@/services/UserAPI';
  import { store } from '@/store/Store';

  export default {
    name: 'UserFriends',
    props: ['id'],
    data: () => ({
      friends: [],
    }),
    methods: {
      async getUserFriends() {
        await api.getUserFriends(this.id).then((res) => {
          const followingList = res;

          for (let i = 0; i < followingList.length; i += 1) {
            this.friends.push(followingList[i]);
          }
        });
        store.setUserConnectedFriends(this.friends);
      }
    },
    created() {
      this.getUserFriends();
    }
  };

</script>

<style scoped>
  .friendsList{
    background-color: lightskyblue;
    border-radius: 15px;
    padding: 10px 10px 10px 10px;
  }
  #title{
    text-align: center;
  }
  .songAlbumTable th {
    border: none;
    background: white;
    text-align: left;
  }
  .songAlbumTable td {
    cursor: pointer;
  }
  .songAlbumTable td:nth-child(1) {
    text-align: left;
    width: 1000px;
  }
  .songAlbumTable th:nth-child(2) {
    text-align: left;
    width: 1000px;
  }
  .songAlbumTable tr {
    border: 2px solid white;
    background: #e8e8e8;
    height: 50px;
  }
  /* Small devices (Portrait phones, 768px and down) */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
  }
  /* Medium devices (tablets, 768px tp 1024px) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
</style>
