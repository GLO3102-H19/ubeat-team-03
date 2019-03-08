<template>
  <b-container fluid class="headerDiv">
    <b-row>
      <b-col md="6" id="artistPicCol"
      ><b-img
        center
        src="https://cps-static.rovicorp.com/3/JPG_400/MI0003/458/MI0003458556.jpg?partner=allrovi.com"
        id="artistPic"
        rounded="circle"
        width="400"
        height="350"
      /></b-col>
      <b-col md="5" id="artistLabelNGenre"
      ><ul class="list-unstyled">
        <li><p id="artistLabel">{{ artistName }}</p></li>
        <li id="artistGenre">{{ primaryGenreName }}</li>
      </ul></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
  // import * as api from '@/ArtistAPI'
  import axios from 'axios';

  export default {
    props: ['email', 'id'],
    data: () => ({
      artistName: '',
      artistLinkUrl: '',
      // Nickelback par défaut
      artistId: '5280361',
      primaryGenreName: '',
      primaryGenreId: '',
      errors: [],
      gets: [],
    }),
    methods: {
      async updateArtistHeader() {
        const baseUrl = 'http://ubeat.herokuapp.com/unsecure/artists/';
        axios.get(baseUrl + this.artistId)
          .then((response) => {
            this.artistName = response.data.results[0].artistName;
            this.primaryGenreName = response.data.results[0].primaryGenreName;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    created() {
      this.updateArtistHeader();
    }
  };
</script>

<style scoped>
  .headerDiv {
    background-color: lightskyblue;
    padding: 50px 10px 10px 10px;
    border-radius: 100px;
  }

  #artistLabelNGenre {
    padding: 10px 0 0 0;
  }

  #artistLabel {
    font-size: 50px;
    font-family: Helvetica, sans-serif;
  }

  #artistGenre {
    font-size: 25px;
    font-family: Helvetica, sans-serif;
  }

  #artistPicCol {
    padding: 10px 0 10px 0;
  }

</style>

try {
const response = await axios.get('http://ubeat.herokuapp.com/unsecure/artists/5280361');
const results = JSON.parse(response);
console.log(results);
} catch (e) {
this.errors.push(e);
}
