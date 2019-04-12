<template>
  <b-col sm="7" id="infosDiv">
    <div id="infosHeader">
      <b-button id="followButton" class="my-2 my-sm-0" v-if="!connectedUser && !followedUser" v-on:click="newFollow">Follow</b-button>
      <b-button id="unfollowButton" class="my-2 my-sm-0" v-if="!connectedUser && followedUser" v-on:click="unFollow">Unfollow</b-button>
      <h2 id="title">Profile</h2>
    </div>
    <div id="userInfos">
      <ul style="">
        <li><h6>Username : <span>{{name}}</span></h6></li>
        <li><h6>Email : <span>{{email}}</span></h6></li>
      </ul>
    </div>
  </b-col>
</template>

<script>
  import * as api from '@/services/UserAPI';
  import { store } from '@/store/Store';
  import friendsList from './UserFriends';

  export default {
    props: ['id'],
    data: () => ({
      name: '',
      email: '',
      connectedUser: '',
      followedUser: '',
      key: 0
    }),
    methods: {
      getUserName() {
        api.getUserName(this.id).then((res) => {
          this.name = res;
        });
      },
      getUserEmail() {
        api.getUserEmail(this.id).then((res) => {
          this.email = res;
        });
      },
      isItConnectedUser() {
        if (this.id === store.state.userIdConnected) {
          this.connectedUser = true;
        } else {
          this.connectedUser = false;
        }
      },
      isThisUserFollowed() {
        for (let i = 0; i < store.state.userConnectedFriends.length; i += 1) {
          if (this.id === store.state.userConnectedFriends[i].id) {
            this.followedUser = true;
          }
        }
      },
      newFollow() {
        api.newFollow(this.id).then();
        this.followedUser = true;
        friendsList.created();
      },
      unFollow() {
        api.unFollow(this.id).then();
        this.followedUser = false;
        friendsList.created();
      },
    },
    created() {
      this.getUserName();
      this.getUserEmail();
      this.isItConnectedUser();
      this.isThisUserFollowed();
    }
};
</script>

<style scoped>
  #infosHeader{
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    margin-bottom: 10px;
  }
  #followButton{
    color: black;
    position: absolute;
    left: 0;
  }
  #followButton:hover{
    background-color: aquamarine;
  }
  #unfollowButton{
    color: black;
    position: absolute;
    left: 0;
    background-color: red;
  }
  #unfollowButton:hover{
    background-color: #ffa3ac;
  }
  #title{
  }
  #userInfos{
     border-radius: 15px;
     border-width: 5px;
     border-style: solid;
     border-color: lightskyblue;
     padding: 10px 10px 10px 10px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }
  /* Small devices (Portrait phones, 768px and down) */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    #infosDiv{
      margin-bottom: 10px;
    }
  }
  /* Medium devices (tablets, 768px to 1024px) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
  }
</style>
