<template>
  <b-col sm="5" class="friendsList">
    <h2 id="title">Following</h2>
    <table>
      <tr>
        <th>Profile</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr v-for="friend in friends" >
        <td>
          <div><i class="fas fa-address-book"></i></div>
        </td>
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

  export default {
    name: 'UserFriends',
    props: ['id'],
    data: () => ({
      friends: [],
    }),
    methods: {
      getUserFriends() {
        api.getUserFriends(this.id).then((res) => {
          console.log(res);
          const followingList = res;

          for (let i = 0; i < followingList.length; i += 1) {
            this.friends.push(followingList[i]);
          }
        });
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
  /* Small devices (Portrait phones, 768px and down) */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
  }
  /* Medium devices (tablets, 768px tp 1024px) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
</style>
