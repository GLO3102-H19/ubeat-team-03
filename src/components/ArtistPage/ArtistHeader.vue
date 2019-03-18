<template>
  <b-container id="headerDiv">
    <ul class="list-unstyled" id="artistLabelNGenre">
      <li><p id="artistLabel">{{ artistName }}</p></li>
      <li id="artistGenre">{{ primaryGenreName }}</li>
    </ul>
  </b-container>
</template>

<script>
  import * as api from '@/ArtistAPI';

  export default {
    props: ['artistId'],
    data: () => ({
      artistName: '',
      primaryGenreName: '',
      errors: [],
    }),
    methods: {
      getArtistName() {
        api.getArtistName(this.artistId).then((res) => {
          this.artistName = res;
        });
      },
      getArtistGenre() {
        api.getArtistGenre(this.artistId).then((res) => {
          this.primaryGenreName = res;
        });
      }
    },
    created() {
      this.getArtistName();
      this.getArtistGenre();
    }
  };
</script>

<style scoped>
  #headerDiv {
    background-color: lightskyblue;
    margin: 70px auto;
    padding: 50px;
    border-radius: 100px;
    height : 250px;
    display: flex;
    justify-content: center;
  }
  #artistLabelNGenre{
    display: flex;
    flex-direction: column;
  }
  #artistLabel {
    font-size: 50px;
    font-family: Helvetica, sans-serif;
  }
  #artistGenre {
    font-size: 25px;
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
</style>
