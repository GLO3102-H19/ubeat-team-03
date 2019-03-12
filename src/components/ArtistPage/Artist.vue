<template>
  <div class="mainDiv">
    <Header></Header>

    <AlbumHeader></AlbumHeader>

    <AlbumList></AlbumList>

    <Player/>
  </div>
</template>

<script>
  import Player from '../Player';
  import Header from './ArtistHeader';
  import AlbumHeader from './AlbumHeader';
  import AlbumList from './AlbumList';

  export default {
    components: { Player, Header, AlbumHeader, AlbumList },
    data: () => ({
      // Nickelback par défaut
      artistId: '5280361'
    }),
  };
</script>

<style>
.mainDiv {
  margin: 10px;
}

.mainDiv {
  margin-top: 20px;
  padding: auto;
}
/* Small devices (Portrait phones, 576px and up) */
@media only screen and (min-width: 320px) and (max-width: 480px) {
  #artistPic {
    width: 300px;
    height: 260px;
  }

  #artistLabelNGenre {
    text-align: center;
  }

  #middleDiv {
    margin-top: 25px;
  }

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
  #artistPic {
    width: 350px;
    height: 305px;
  }

  #artistLabelNGenre {
    text-align: center;
  }

  #middleDiv {
    margin-top: 30px;
  }

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

/* Large devices (desktops, 992px and up) */
@media only screen and (min-device-width: 1281px) {
}
</style>
