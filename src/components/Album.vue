<template>
  <div class="mainDiv">
    <div class="titleDiv">
      <h1>Album</h1>
    </div>

    <div class="topDiv">
      <div class="albumDiv">
        <div class="albumCoverDiv">
          <img
            class="cover"
            alt="Feed the Machine"
            src="http://directory.oboxeditions.com/sites/prod_directory/files/event/nickelback-feed-the-machine-44-city-north-american-tour-24278.jpg"
          />
          <div class="middlePlayButton">
            <i class="fas fa-play-circle fa-5x"></i>
          </div>
        </div>
      </div>

      <div class="albumInfoDiv">
        <h1>Feed the Machine</h1>
        <h2 class="bandAlbumInfo">Nickelback</h2>
        <h5 class="styleAlbumInfo">2017 - Rock</h5>
        <h6 class="songsAlbumInfo">11 songs, 43 minutes</h6>
        <div class="iTunesLink">
          <a
            href="https://geo.itunes.apple.com/ca/album/feed-the-machine/1234838372?mt=1&app=music&ls=1"
            target="_blank"
            style="display:inline-block;overflow:hidden;width:180px;height:40px;"
          ></a>
        </div>
      </div>
    </div>

    <div class="bottomDiv">
      <table class="songAlbumTable">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Length</th>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">1</div>
            <div class="playButton">
              <i class="far fa-play-circle fa-2x"></i>
            </div>
          </td>
          <td>Feed the Machine</td>
          <td class="tableCenter">5:02</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">2</div>
            <div class="playButton">
              <i class="far fa-play-circle fa-2x"></i>
            </div>
          </td>
          <td>Coin for the Ferryman</td>
          <td class="tableCenter">4:50</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">3</div>
            <div class="playButton">
              <i class="far fa-play-circle fa-2x"></i>
            </div>
          </td>
          <td>Song on Fire</td>
          <td class="tableCenter">3:50</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">4</div>
            <div class="playButton">
              <i class="far fa-play-circle fa-2x"></i>
            </div>
          </td>
          <td>Must Be Nice</td>
          <td class="tableCenter">3:45</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">5</div>
            <div class="playButton">
              <i class="far fa-play-circle fa-2x"></i>
            </div>
          </td>
          <td>After the Rain</td>
          <td class="tableCenter">3:35</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">6</div>
            <div class="playButton">
              <i class="far fa-play-circle fa-2x"></i>
            </div>
          </td>
          <td>For the River</td>
          <td class="tableCenter">3:29</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">7</div>
            <div class="playButton">
              <i class="far fa-play-circle fa-2x"></i>
            </div>
          </td>
          <td>Home</td>
          <td class="tableCenter">3:52</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">8</div>
            <div class="playButton">
              <i class="far fa-play-circle fa-2x"></i>
            </div>
          </td>
          <td>The Betrayal (Act III)</td>
          <td class="tableCenter">4:21</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">9</div>
            <div class="playButton">
              <i class="far fa-play-circle fa-2x"></i>
            </div>
          </td>
          <td>Silent Majority</td>
          <td class="tableCenter">3:52</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">10</div>
            <div class="playButton">
              <i class="far fa-play-circle fa-2x"></i>
            </div>
          </td>
          <td>Every Time We're Together</td>
          <td class="tableCenter">3:53</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">11</div>
            <div class="playButton">
              <i class="far fa-play-circle fa-2x"></i>
            </div>
          </td>
          <td>The Betrayal (Act I)</td>
          <td class="tableCenter">2:42</td>
        </tr>
      </table>
    </div>
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

.titleDiv {
  margin-top: 20px;
  margin-left: 40px;
}

.topDiv {
  height: 300px;
  margin: 20px 40px;
  display: flex;
}

.bottomDiv {
  margin-top: 20px;
  margin-left: 40px;
  margin-bottom: 60px;
}

.albumDiv {
  align-content: space-between;
}

.albumCoverDiv {
  position: relative;
  cursor: pointer;
}

.albumInfoDiv {
  justify-content: flex-start;
  margin-left: 30px;
  position: relative;
}

.iTunesLink {
  display: inline-block;
  position: absolute;
  bottom: 0;
  height: 40px;
  width: 180px;
  background: url(https://linkmaker.itunes.apple.com/en-us/lockup.svg?releaseDate=2017-06-16&kind=album&bubble=apple_music&style=mono-black)
    no-repeat;
  background-size: cover;
}

.bandAlbumInfo {
  margin-top: 15px;
}

.styleAlbumInfo {
  margin-top: 30px;
}

.middlePlayButton {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -40px;
}

.playButton {
  display: none;
}

.songAlbumTable th {
  border: none;
  background: white;
  text-align: center;
}

.songAlbumTable td {
  cursor: pointer;
}

.songAlbumTable td:nth-child(1) {
  width: 60px;
}

.songAlbumTable th:nth-child(2) {
  text-align: left;
  width: 800px;
}

.songAlbumTable th:nth-child(3) {
  width: 80px;
}

.songAlbumTable tr {
  border: 2px solid white;
  background: #e8e8e8;
  height: 60px;
}

.tableCenter {
  text-align: center;
}

/* Small devices (Portrait phones, 576px and up) */
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .titleDiv {
    margin: 20px;
    text-align: center;
  }

  .albumInfoDiv h1 {
    font-size: 35px;
  }

  .songAlbumTable {
    margin: auto;
  }

  .topDiv {
    margin: 20px;
    display: block;
    position: relative;
    text-align: center;
    height: auto;
  }

  .albumDiv {
    display: block;
    left: 50%;
    margin: auto;
  }

  .albumInfoDiv {
    margin: 20px;
    height: 250px;
    position: relative;
  }

  .iTunesLink {
    position: absolute;
    bottom: 0;
    margin-left: -90px;
  }

  .bottomDiv {
    margin: 20px;
    margin-bottom: 60px;
  }

  .songAlbumTable td:nth-child(1) {
    width: 140px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .titleDiv {
    margin: 20px;
    text-align: center;
  }

  .albumInfoDiv h1 {
    font-size: 35px;
  }

  .songAlbumTable {
    margin: auto;
  }

  .topDiv {
    margin: 20px;
    display: block;
    position: relative;
    text-align: center;
    height: auto;
  }

  .albumDiv {
    display: block;
    left: 50%;
    margin: auto;
  }

  .albumInfoDiv {
    margin: 20px;
    height: 250px;
    position: relative;
  }

  .iTunesLink {
    position: absolute;
    bottom: 0;
    margin-left: -90px;
  }

  .bottomDiv {
    margin: 20px;
    margin-bottom: 60px;
  }

  .songAlbumTable td:nth-child(1) {
    width: 140px;
  }
}

/* Large devices (desktops, 992px and up) */
@media only screen and (min-device-width: 1281px) {
  .songAlbumTable tr:hover {
    background-color: whitesmoke;
  }

  .songAlbumTable tr:hover .playButton {
    display: block;
  }

  .songAlbumTable tr:hover .songNumber {
    display: none;
  }

  .albumCoverDiv:hover .cover {
    opacity: 0.5;
  }

  .albumCoverDiv:hover .middlePlayButton {
    display: block;
  }
}
</style>
