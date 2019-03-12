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
  import * as api from '@/ArtistAPI';

  export default {
    // props: ['artistId'],
    data: () => ({
      artistName: '',
      // Nickelback par défaut
      artistId: '5280361',
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
