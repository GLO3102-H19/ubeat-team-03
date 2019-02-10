<template>
  <div class="mainDiv">
    <div class="bottomDiv">
      <h1>Album</h1>
    </div>

    <div class="topDiv">
      <div class="albumDiv">
        <div class="albumCoverDiv">
          <img class="cover" alt="Feed The Machine" src="http://directory.oboxeditions.com/sites/prod_directory/files/event/nickelback-feed-the-machine-44-city-north-american-tour-24278.jpg">
          <div class="middlePlayButton">
            <i class="fas fa-play-circle fa-5x"></i>
          </div>
        </div>
      </div>

      <div class="albumInfoDiv">
        <h1> Feed The Machine (2017)</h1>
        <h2 class="bandAlbumInfo"> Nickelback </h2>
        <h5 class="styleAlbumInfo"> Rock </h5>
        <h6 class="songsAlbumInfo"> 11 songs, 43 minutes </h6>
        <a href="https://geo.itunes.apple.com/ca/album/feed-the-machine/1234838372?mt=1&app=music&ls=1" target="_blank"
           style="display:inline-block;position:absolute;bottom:5px;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/embed/v1/app-icon.svg?hex=000000) no-repeat;width:40px;height:40px;"></a>
      </div>
    </div>

    <div class="bottomDiv">
      <table class="songAlbumTable" style="width:75%">
        <tr>
          <th width="40">#</th>
          <th width="500">Title</th>
          <th width="65">Length</th>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">1</div>
            <div class="playButton"><i class="far fa-play-circle fa-2x"></i></div>
          </td>
          <td>Feed the Machine</td>
          <td class="tableCenter">5:02</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">2</div>
            <div class="playButton"><i class="far fa-play-circle fa-2x"></i></div>
          </td>
          <td>Coin for the Ferryman</td>
          <td class="tableCenter">4:50</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">3</div>
            <div class="playButton"><i class="far fa-play-circle fa-2x"></i></div>
          </td>
          <td>Song on Fire</td>
          <td class="tableCenter">3:50</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">4</div>
            <div class="playButton"><i class="far fa-play-circle fa-2x"></i></div>
          </td>
          <td>Must Be Nice</td>
          <td class="tableCenter">3:45</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">5</div>
            <div class="playButton"><i class="far fa-play-circle fa-2x"></i></div>
          </td>
          <td>After the Rain</td>
          <td class="tableCenter">3:35</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">6</div>
            <div class="playButton"><i class="far fa-play-circle fa-2x"></i></div>
          </td>
          <td>For the River</td>
          <td class="tableCenter">3:29</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">7</div>
            <div class="playButton"><i class="far fa-play-circle fa-2x"></i></div>
          </td>
          <td>Home</td>
          <td class="tableCenter">3:52</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">8</div>
            <div class="playButton"><i class="far fa-play-circle fa-2x"></i></div>
          </td>
          <td>The Betrayal (Act III)</td>
          <td class="tableCenter">4:21</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">9</div>
            <div class="playButton"><i class="far fa-play-circle fa-2x"></i></div>
          </td>
          <td>Silent Majority</td>
          <td class="tableCenter">3:52</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">10</div>
            <div class="playButton"><i class="far fa-play-circle fa-2x"></i></div>
          </td>
          <td>Every Time We're Together</td>
          <td class="tableCenter">3:53</td>
        </tr>
        <tr>
          <td class="tableCenter">
            <div class="songNumber">11</div>
            <div class="playButton"><i class="far fa-play-circle fa-2x"></i></div>
          </td>
          <td>The Betrayal (Act I)</td>
          <td class="tableCenter">2:42</td>
        </tr>
      </table>
    </div>
  </div>

</template>

<style>

  .topDiv {
    height: 300px;
    margin: 40px;
    display: flex;
  }

  .bottomDiv {
    margin-top: 20px;
    margin-left: 55px;
  }

  .albumDiv {
    align-content: space-between;
    margin-left: 15px;
  }

  .albumCoverDiv {
    position: relative;
  }

  .albumCoverDiv:hover .cover {
    opacity: 0.5;
  }

  .albumCoverDiv:hover .middlePlayButton {
    display: block;
  }

  .albumInfoDiv {
    justify-content: flex-start;
    margin-left: 30px;
    position: relative;
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
    margin-left: -40px;
    margin-top: -40px;
  }

  .playButton {
    display: none;
  }

  .songAlbumTable tr {
    border: 2px solid white;
    background: #e8e8e8;
    height: 60px;
  }

  .songAlbumTable th {
    border: none;
    background: white;
    text-align: center;
  }

  .songAlbumTable th:nth-child(2) {
    text-align: left;
  }

  .songAlbumTable tr:hover {
    background-color: whitesmoke;
  }

  .songAlbumTable tr:hover .playButton {
    display: block;
  }

  .songAlbumTable tr:hover .songNumber {
    display: none;
  }

  .tableCenter {
    text-align: center;
  }

</style>
