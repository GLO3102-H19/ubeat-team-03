<template>
  <b-navbar toggleable="md" type="dark" variant="primary">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#/">UBEAT</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#/Album">Album</b-nav-item>
        <b-nav-item href="#/Artist">Artist</b-nav-item>
        <b-nav-item href="#/">Reading List</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"><font-awesome-icon icon="search"/></b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <em>Welcome user1</em>
          </template>
          <b-dropdown-item href="#/">Profile</b-dropdown-item>
          <b-dropdown-item href="#/">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<style>
</style>
