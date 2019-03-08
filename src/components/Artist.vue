<template>
  <div class="mainDiv">
    <Header></Header>

    <AlbumHeader></AlbumHeader>

    <b-container id="bottomDiv">
      <b-list-group>
        <b-list-group-item class="albumLine"
          ><b-img
            class="albumImg"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Feed_the_Machine_%28Nickelback%29.jpg/220px-Feed_the_Machine_%28Nickelback%29.jpg"
            width="150"
            height="150"
          />
          <ul class="list-unstyled albumInfos">
            <li><h4>Feed the machine</h4></li>
            <li class="someInfos">2017</li>
          </ul></b-list-group-item
        >
        <b-list-group-item class="albumLine"
          ><b-img
            class="albumImg"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/No_Fixed_Address_Cover_-_Nickelback_Album.jpg/220px-No_Fixed_Address_Cover_-_Nickelback_Album.jpg"
            width="150"
            height="150"
          />
          <ul class="list-unstyled albumInfos">
            <li><h4>No Fixed Address</h4></li>
            <li class="someInfos">2014</li>
          </ul></b-list-group-item
        >
        <b-list-group-item class="albumLine"
          ><b-img
            class="albumImg"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Nickelback_Here_and_Now_170x170-75.jpg/220px-Nickelback_Here_and_Now_170x170-75.jpg"
            width="150"
            height="150"
          />
          <ul class="list-unstyled albumInfos">
            <li><h4>Here and Now</h4></li>
            <li class="someInfos">2011</li>
          </ul></b-list-group-item
        >
        <b-list-group-item class="albumLine"
          ><b-img
            class="albumImg"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music/94/1e/fe/mzi.tprsucpv.jpg/268x0w.jpg"
            width="150"
            height="150"
          />
          <ul class="list-unstyled albumInfos">
            <li><h4>Dark Horse</h4></li>
            <li class="someInfos">2008</li>
          </ul></b-list-group-item
        >
        <b-list-group-item class="albumLine"
          ><b-img
            class="albumImg"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/AllTheRightReasons.jpg/220px-AllTheRightReasons.jpg"
            width="150"
            height="150"
          />
          <ul class="list-unstyled albumInfos">
            <li><h4>All the Right Reasons</h4></li>
            <li class="someInfos">2005</li>
          </ul></b-list-group-item
        >
        <b-list-group-item class="albumLine"
          ><b-img
            class="albumImg"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Nickelback_-_The_Long_Road.albumcover.jpg/220px-Nickelback_-_The_Long_Road.albumcover.jpg"
            width="150"
            height="150"
          />
          <ul class="list-unstyled albumInfos">
            <li><h4>The Long Road</h4></li>
            <li class="someInfos">2003</li>
          </ul></b-list-group-item
        >
        <b-list-group-item class="albumLine"
          ><b-img
            class="albumImg"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music/61/39/5d/mzi.exqcjkkz.jpg/268x0w.jpg"
            width="150"
            height="150"
          />
          <ul class="list-unstyled albumInfos">
            <li><h4>Silver Side Up</h4></li>
            <li class="someInfos">2001</li>
          </ul></b-list-group-item
        >
        <b-list-group-item class="albumLine"
          ><b-img
            class="albumImg"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Nickelback_-_The_State_-_CD_cover.jpg/220px-Nickelback_-_The_State_-_CD_cover.jpg"
            width="150"
            height="150"
          />
          <ul class="list-unstyled albumInfos">
            <li><h4>The State</h4></li>
            <li class="someInfos">1998</li>
          </ul></b-list-group-item
        >
        <b-list-group-item class="albumLine"
          ><b-img
            class="albumImg"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Curb-2002.jpg/220px-Curb-2002.jpg"
            width="150"
            height="150"
          />
          <ul class="list-unstyled albumInfos">
            <li><h4>Curb</h4></li>
            <li class="someInfos">1996</li>
          </ul></b-list-group-item
        >
      </b-list-group>
    </b-container>
    <Player/>
  </div>
</template>

<script>
  import Player from './Player';
  import Header from './ArtistHeader';
  import AlbumHeader from './AlbumHeader';
  import AlbumItem from './AlbumItem';

  export default {
    components: { Player, Header, AlbumHeader, AlbumItem },
    props: ['email', 'id'],
    data: () => ({
      name: '',
      artistLinkUrl: '',
      artistId: '',
      primaryGenreName: '',
      primaryGenreId: '',
      errors: []
    }),
    methods: {
    },
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

#bottomDiv {
  margin-top: 30px;
  margin-bottom: 60px;
}

.albumLine {
  background-color: lightskyblue;
  display: flex;
}

.albumImg {
  margin-right: 30px;
}

.albumInfos {
  color: black;
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
