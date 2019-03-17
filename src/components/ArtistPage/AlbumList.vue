<template>
  <b-container id="bottomDiv">
    <b-list-group>
      <b-list-group-item class="albumLine"  v-for="item in albumList" v-bind:key="item.collectionId" v-on:click="loadAlbumPage(item.collectionId)">
        <b-img
        class="albumImg"
        v-bind:src= item.artworkUrl100
        width="150"
        height="150"/>
        <ul class="list-unstyled albumInfos">
          <li><h4>{{ item.collectionName }}</h4></li>
          <li class="someInfos">{{ item.releaseDate.substring(0,4) }}</li>
        </ul>
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
  import router from '@/router/index';
  import * as api from '@/ArtistAPI';
  import { store } from '@/Store';

  export default {
    props: ['artistId'],
    data: () => ({
      albumTitle: '',
      collectionId: '',
      albumCoverLink: '',
      albumList: [],
      errors: []
    }),
    methods: {
      async updateAlbumList() {
        api.getAlbumList(this.artistId).then((res) => {
          res.sort(this.compareAlbums);
          this.albumList = res;
        });
      },
      compareAlbums(a, b) {
      // Use toUpperCase() to ignore character casing
        const genreA = a.releaseDate.substring(0, 4).toUpperCase();
        const genreB = b.releaseDate.substring(0, 4).toUpperCase();

        let comparison = 0;
        if (genreA < genreB) {
          comparison = 1;
        } else if (genreA > genreB) {
          comparison = -1;
        }
        return comparison;
      },
      loadAlbumPage(collectionId) {
        store.setAlbumState(collectionId);
        router.push('Album');
      }
    },
    created() {
      this.updateAlbumList();
    }
  };
</script>

<style scoped>
  #bottomDiv {
    margin-top: 30px;
    margin-bottom: 60px;
  }

  .albumLine {
    background-color: lightskyblue;
    display: flex;
  }
  .albumLine:hover{
    cursor: pointer;
    background-color: #b7e0ff;
  }

  .albumInfos {
    color: black;
  }

  .albumImg {
    margin-right: 30px;
  }

  .someInfos {
    font-size: 12px;
  }
  /* Small devices (Portrait phones, 576px and up) */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    #bottomDiv {
      margin-top: 10px;
    }

    .albumImg {
      margin-right: 10px;
      width: 100px;
      height: 100px;
    }

    .someInfos {
      font-size: 12px;
    }

    h4 {
      font-size: 16px;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    #bottomDiv {
      margin-top: 15px;
    }

    .albumImg {
      margin-right: 20px;
      width: 125px;
      height: 125px;
    }

    .someInfos {
      font-size: 14px;
    }

    h4 {
      font-size: 18px;
    }
  }
</style>
