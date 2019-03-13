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
  }
</style>

<b-col md="6" id="artistPicCol"
><b-img
  center
  src="https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/91/5e/d1/915ed1aa-eec9-56ae-83e4-2606242c4cb0/source/512x512bb.jpg"
  id="artistPic"
  rounded="circle"
  width="400"
  height="350"
/></b-col>
#artistPicCol {
padding: 10px 0 10px 0;
}


