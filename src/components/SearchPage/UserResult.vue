<template>
  <div id="userResultContainer">
    <div id="userResultTitle"><h2>User</h2></div>
    <div class="user"  v-for="item in userResult" v-bind:key="item.id" v-on:click="loadUserPage()">
      <div class="userImg">
        <b-img
          src="../static/user.png"
          width="150"
          height="150"/>
      </div>
      <div class="userTitle">
        <p>
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router/index';

  export default {
    name: 'UserResult',
    props: ['userResult'],
    data: () => ({
      search: ''
    }),
    methods: {
      loadUserPage() {
        router.push('User');
      }
    }
  };
</script>

<style scoped>
  #userResultContainer {
    background-color: lightskyblue;
    width:100%;
    float:left;
    margin-top: 30px;
    border-radius: 30px;
    margin-bottom: 60px;
  }
  div.user {
    margin: 1% 0% 2% 2%;
    width: 150px;
    float:left;
  }

  div.user:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  .userTitle {
    background-color: lightgreen;
    border: 1px solid black;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
  }

  #userResultTitle {
    margin: 2% 0% 0% 2%;
    width:100%;
    float:left;
  }

  p {
    margin: 1px;
  }

  .userImg {
    background-color: lightgray;
  }
</style>
