<template>
  <b-container id="middleDiv">
    <h4 class="albumSectionTitle">Albums</h4>
    <a
      v-bind:href= artistLinkUrl
      style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/embed/v1/app-icon.svg?hex=000000) no-repeat;width:40px;height:40px;"
    ></a>
  </b-container>
</template>

<script>
  import * as api from '@/ArtistAPI';

  export default {
    // props: ['artistId'],
    data: () => ({
      artistLinkUrl: '',
      // Nickelback par défaut
      artistId: '5280361',
      errors: [],
    }),
    methods: {
      getArtistUrl() {
        api.getArtistUrl(this.artistId)
          .then((res) => {
            this.artistLinkUrl = res;
          });
      }
    },
    created() {
      this.getArtistUrl();
    }
  };
</script>

<style scoped>
  #middleDiv {
    margin-top: 50px;
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: space-between;
  }

  .albumSectionTitle {
    color: black;
  }

</style>
