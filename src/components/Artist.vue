<template>
  <div class="mainDiv">
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
            <li><p id="artistLabel">Nickelback</p></li>
            <li id="artistGenre">Rock</li>
          </ul></b-col
        >
      </b-row>
    </b-container>

    <b-container id="middleDiv">
      <h4 class="albumSectionTitle">Albums</h4>
      <a
        href="https://geo.itunes.apple.com/us/artist/nickelback/5280361?mt=1&app=music&ls=1"
        style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/embed/v1/app-icon.svg?hex=000000) no-repeat;width:40px;height:40px;"
      ></a>
    </b-container>

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
    <b-card no-body class="footer text-center">
      <audio controls>
        <source src="#" type="audio/mp3" />
        <source src="#" type="audio/ogg" />
        <p>
          Your browser doesn't support HTML5 audio. Here is a
          <a href="#">link to the audio</a> instead.
        </p>
      </audio>
    </b-card>
  </div>
</template>

<style>
.mainDiv {
  margin: 10px;
}

.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
audio {
  width: 100%;
}
.mainDiv {
  margin-top: 20px;
  padding: auto;
}

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

#middleDiv {
  margin-top: 50px;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
}

.albumSectionTitle {
  color: black;
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

/*Tablet size*/
@media screen and (min-width: 579px) and (max-width: 767.5px) {
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

/*Phone size*/
@media screen and (max-width: 579px) {
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
</style>
