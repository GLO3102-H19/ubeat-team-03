<template>
  <b-col sm="7" id="infosDiv">
    <div id="infosHeader">
      <b-button id="followButton" class="my-2 my-sm-0">Follow</b-button>
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

  export default {
    data: () => ({
      name: '',
      email: ''
    }),
    methods: {
      getUserName(id) {
        api.getUserName(id).then((res) => {
          this.name = res;
        });
      },
      getUserEmail(id) {
        api.getUserEmail(id).then((res) => {
          this.email = res;
        });
      }
    },
    created() {
      this.getUserName(store.state.userId);
      this.getUserEmail(store.state.userId);
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
