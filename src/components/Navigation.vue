<template>
  <b-navbar id="navBar" v-if="loggedIn()" fixed="top" toggleable="md" type="dark" variant="primary">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#/User">UBEAT</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item v-on:click="goToPlaylist">Playlists</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input v-model="search" @keyup.enter="onEnter"
            size="sm"
            class="mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <b-form-select id="searchSelect" v-model="select.selected">
            <option v-for="(selectOption, indexOpt) in select.options"
            :key="indexOpt"
            :value="selectOption"
            >
              {{ selectOption }}
            </option>
          </b-form-select>
          <b-button size="sm" class="my-2 my-sm-0" v-on:click="loadSearchPage()"
            ><font-awesome-icon icon="search"/>
          </b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <em>Welcome {{connectedUser}}</em>
          </template>
          <b-dropdown-item v-on:click="goToProfile"
            ><font-awesome-icon icon="user"/> Profile</b-dropdown-item
          >
          <b-dropdown-item v-on:click="logOut"
          ><font-awesome-icon icon="sign-out-alt"/> Signout</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import router from '@/router/router';
  import { store } from '@/store/Store';
  import * as api from '@/services/HomeAPI';
  import Cookies from 'js-cookie';

  export default {
    props: ['name'],
    data: () => ({
      connectedUser: store.state.userName,
      search: '',
      select: {
        selected: 'Global',
        options: [
          'Global',
          'Album',
          'Artist',
          'Track',
          'User'
        ]
      }
    }),
    methods: {
      loggedIn() {
        return Cookies.get('token').length > 0;
      },
      loadSearchPage() {
        store.setSearchState(this.search);
        store.setSearchType(this.select.selected);
        store.setRedirect('Search');
        router.push('Redirect');
      },
      logOut() {
        api.logOut();
        store.logOut();
        document.getElementById('navBar').style.display = 'none';
        window.location.reload();
      },
      goToProfile() {
        store.setUserIdToVisit(store.state.userIdConnected);
        store.setRedirect('User');
        router.push('Redirect');
      },
      onEnter() {
        this.loadSearchPage();
      },
      goToPlaylist() {
        store.setRedirect('Playlist');
        router.push('Redirect');
      }
    }
  };
</script>

<style>
.navbar {
  font-family: Montserrat, sans-serif;
  font-size: 12px !important;
  letter-spacing: 1px;
  border-radius: 0;
  border-bottom: 4px solid #1d6aec;
  border-right: 1px solid #1d6aec;
}

.navbar li a,
.navbar .navbar-brand {
  color: #ffffff;
}

.navbar-nav li a:hover,
.navbar-nav li.active a {
  background-color: #007ff7;
}

.navbar-default .navbar-toggle {
  border-color: transparent;
  color: #007ff7;
}

#searchSelect {
  height: 31px;
  font-size: 0.875rem;
}

.dropdown-item {
  color: black !important;
}

.dropdown-item:hover {
  color: black !important;
  background-color: #f5f5f5 !important;
}

.bg-primary:hover {
  background-color: #0079f1 !important;
}

.btn-secondary {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background-color: lightgreen;
  border-color: lightgreen;
}

.btn-secondary:hover {
  background-color: #9bfc9b;
  border-color: #9bfc9b;
}
</style>
