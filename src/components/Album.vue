<template>
  <div class="mainDiv">
    <div class="bottomDiv">
      <h1>Album</h1>
      <b-table :striped="striped"
               :hover="hover"
               :small="small"
               :items="items"
               :fields="fields"
               :bordered="bordered"
               style="width:90%">
      </b-table>
    </div>



    <div class="topDiv">
      <div class="albumDiv">
        <div class="albumCoverDiv">
          <img class="cover" alt="Feed The Machine" src="http://directory.oboxeditions.com/sites/prod_directory/files/event/nickelback-feed-the-machine-44-city-north-american-tour-24278.jpg">
          <div class="middlePlayButton">

          </div>
        </div>

      </div>

      <div class="albumInfoDiv">
        <h1> Feed The Machine (2017)</h1>
        <h2 class="bandAlbumInfo"> Nickelback </h2>
        <h5 class="styleAlbumInfo"> Rock </h5>
        <h6 class="songsAlbumInfo"> 11 songs </h6>
        <svg class="iTunesStoreButton" alt ="iTunes" src="/Get_it_on/SVG/US_UK_iTunes_Store_Get_Badge_RGB_012618.svg"></svg>
      </div>
    </div>

    <div class="bottomDiv">
      <table class="songAlbumTable" style="width:75%">
        <tr>
          <th width="30">#</th>
          <th>Title</th>
          <th>Artist</th>
          <th width="65">Length</th>
        </tr>
        <tr>
          <td class="tableCenter">1</td>
          <td>Feed the Machine</td>
          <td>Nickelback</td>
          <td class="tableCenter">5:02</td>
        </tr>
        <tr>
          <td class="tableCenter">2</td>
          <td>Coin for the Ferryman</td>
          <td>Nickelback</td>
          <td class="tableCenter">4:50</td>
        </tr>
        <tr>
          <td class="tableCenter">3</td>
          <td>Song on Fire</td>
          <td>Nickelback</td>
          <td class="tableCenter">3:50</td>
        </tr>
        <tr>
          <td class="tableCenter">4</td>
          <td>Must Be Nice</td>
          <td>Nickelback</td>
          <td class="tableCenter">3:45</td>
        </tr>
        <tr>
          <td class="tableCenter">5</td>
          <td>After the Rain</td>
          <td>Nickelback</td>
          <td class="tableCenter">3:35</td>
        </tr>
        <tr>
          <td class="tableCenter">6</td>
          <td>For the River</td>
          <td>Nickelback</td>
          <td class="tableCenter">3:29</td>
        </tr>
        <tr>
          <td class="tableCenter">7</td>
          <td>Home</td>
          <td>Nickelback</td>
          <td class="tableCenter">3:52</td>
        </tr>
        <tr>
          <td class="tableCenter">8</td>
          <td>The Betrayal (Act III)</td>
          <td>Nickelback</td>
          <td class="tableCenter">4:21</td>
        </tr>
        <tr>
          <td class="tableCenter">9</td>
          <td>Silent Majority</td>
          <td>Nickelback</td>
          <td class="tableCenter">3:52</td>
        </tr>
        <tr>
          <td class="tableCenter">10</td>
          <td>Every Time We're Together</td>
          <td>Nickelback</td>
          <td class="tableCenter">3:53</td>
        </tr>
        <tr>
          <td class="tableCenter">11</td>
          <td>The Betrayal (Act I)</td>
          <td>Nickelback</td>
          <td class="tableCenter">2:42</td>
        </tr>
      </table>
    </div>

  </div>

</template>

<script>

  export default {
    data() {
      return {
        fields: {
          Num: {
            label: '#'
          },
          Title: {
          },
          Artist: {
          },
          Length: {
          }
        },
        items: [
          { Num: 1, Title: 'Feed the Machine', Artist: 'Nickelback', Length: '5:02' },
          { Num: 2, Title: 'Coin for the Ferryman', Artist: 'Nickelback', Length: '4:50' },
          { Num: 3, Title: 'Song on Fire', Artist: 'Nickelback', Length: '3:50' },
          { Num: 4, Title: 'Must be Nice', Artist: 'Nickelback', Length: '3:45' },
          { Num: 5, Title: 'After the Rain', Artist: 'Nickelback', Length: '3:35' },
          { Num: 6, Title: 'For the River', Artist: 'Nickelback', Length: '3:29' },
          { Num: 7, Title: 'Home', Artist: 'Nickelback', Length: '3:52' },
          { Num: 8, Title: 'The Betrayal (Act III)', Artist: 'Nickelback', Length: '4:21' },
          { Num: 9, Title: 'Silent Majority', Artist: 'Nickelback', Length: '3:52' },
          { Num: 10, Title: "Every Time We're Together", Artist: 'Nickelback', Length: '3:53' },
          { Num: 11, Title: 'The Betrayal (Act I)', Artist: 'Nickelback', Length: '2:42' }
        ],
        striped: true,
        hover: true,
        small: true,
        bordered: true
      };
    }
  };

</script>


<style>

  th{
    width:30px;
  }

  .topDiv{
    margin-left: 40px;
    margin-top: 40px;
    display: flex;
  }

  .bottomDiv{
    margin-top: 20px;
    margin-left: 55px;
  }

  .albumDiv{
    align-content: space-between;
    margin-left: 15px;
  }

  .albumCoverDiv:hover .cover{
    opacity: 0.5;
  }

  .albumInfoDiv{
    justify-content: flex-start;
    margin-left: 15px;
  }

  .bandAlbumInfo{
    margin-top: 15px;
  }

  .styleAlbumInfo{
    margin-top: 30px;
  }

  .iTunesStoreButton{
    margin-top: 20px;
  }

  .tableCenter{
    text-align: center;
  }

  th{
    background-color: lightgray;
    text-align: center;
  }

  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }

  .songAlbumTable tr:hover{
    background-color: moccasin;
  }

</style>
