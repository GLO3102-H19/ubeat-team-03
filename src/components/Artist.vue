<template>
    <div class="mainDiv">

      <b-container fluid class="headerDiv">
        <b-row>
          <b-col cols="1"></b-col>
          <b-col cols="3.5" ><b-img center src="https://cps-static.rovicorp.com/3/JPG_400/MI0003/458/MI0003458556.jpg?partner=allrovi.com" rounded="circle" width="400" height="350"/></b-col>
            <b-col cols="6"><ul class="list-unstyled">
              <li><h1>Nickelback</h1></li>
              <li>Rock</li>
            </ul></b-col>
          <b-col cols="1" class="itunesBtn"><b-button size="sm" onclick="window.location.href='https://itunes.apple.com/ca/artist/nickelback/5280361'"><font-awesome-icon :icon="[ 'fab','itunes']" size="3x"/></b-button></b-col>
        </b-row>
      </b-container>

      <b-container class="middleDiv">
        <h4 class="albumSectionTitle">Albums</h4>
      </b-container>

      <b-container class="bottomDiv">
        <b-list-group>
          <b-list-group-item class="albumLine"><b-img class="albumImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Feed_the_Machine_%28Nickelback%29.jpg/220px-Feed_the_Machine_%28Nickelback%29.jpg" width="150" height="150"/>
            <ul class="list-unstyled albumInfos">
            <li><h4>Feed the machine</h4></li>
            <li>2017</li></ul></b-list-group-item>
          <b-list-group-item class="albumLine"><b-img class="albumImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/No_Fixed_Address_Cover_-_Nickelback_Album.jpg/220px-No_Fixed_Address_Cover_-_Nickelback_Album.jpg" width="150" height="150"/>
            <ul class="list-unstyled albumInfos">
              <li><h4>No Fixed Address</h4></li>
              <li>2014</li></ul></b-list-group-item>
          <b-list-group-item class="albumLine"><b-img class="albumImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Nickelback_Here_and_Now_170x170-75.jpg/220px-Nickelback_Here_and_Now_170x170-75.jpg" width="150" height="150"/>
            <ul class="list-unstyled albumInfos">
              <li><h4>Here and Now</h4></li>
              <li>2011</li></ul></b-list-group-item>
          <b-list-group-item class="albumLine"><b-img class="albumImg" src="https://is3-ssl.mzstatic.com/image/thumb/Music/94/1e/fe/mzi.tprsucpv.jpg/268x0w.jpg" width="150" height="150"/>
            <ul class="list-unstyled albumInfos">
              <li><h4>Dark Horse</h4></li>
              <li>2008</li></ul></b-list-group-item>
          <b-list-group-item class="albumLine"><b-img class="albumImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/AllTheRightReasons.jpg/220px-AllTheRightReasons.jpg" width="150" height="150"/>
            <ul class="list-unstyled albumInfos">
              <li><h4>All the Right Reasons</h4></li>
              <li>2005</li></ul></b-list-group-item>
          <b-list-group-item class="albumLine"><b-img class="albumImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Nickelback_-_The_Long_Road.albumcover.jpg/220px-Nickelback_-_The_Long_Road.albumcover.jpg" width="150" height="150"/>
            <ul class="list-unstyled albumInfos">
              <li><h4>The Long Road</h4></li>
              <li>2003</li></ul></b-list-group-item>
          <b-list-group-item class="albumLine"><b-img class="albumImg" src="https://is3-ssl.mzstatic.com/image/thumb/Music/61/39/5d/mzi.exqcjkkz.jpg/268x0w.jpg" width="150" height="150"/>
            <ul class="list-unstyled albumInfos">
              <li><h4>Silver Side Up</h4></li>
              <li>2001</li></ul></b-list-group-item>
          <b-list-group-item class="albumLine"><b-img class="albumImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Nickelback_-_The_State_-_CD_cover.jpg/220px-Nickelback_-_The_State_-_CD_cover.jpg" width="150" height="150"/>
            <ul class="list-unstyled albumInfos">
              <li><h4>The State</h4></li>
              <li>1998</li></ul></b-list-group-item>
          <b-list-group-item class="albumLine"><b-img class="albumImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Curb-2002.jpg/220px-Curb-2002.jpg" width="150" height="150"/>
            <ul class="list-unstyled albumInfos">
              <li><h4>Curb</h4></li>
              <li>1996</li></ul></b-list-group-item>
        </b-list-group>
      </b-container>
    </div>
</template>

<style>

  .mainDiv{
    margin: auto;
    padding: auto;
  }

  .headerDiv{
    background-color: #ff7f1c;
    border-radius: 100px;
  }

  .middleDiv{
    margin-top: 80px;
  }

  .albumSectionTitle{
    color: white;
  }

  .bottomDiv{
    margin-top: 50px;
  }

  .albumLine{
    background-color: #2c2b2b;
    display: flex;
  }

  .albumImg{
    margin-right: 30px;
  }

  .albumInfos{
    color: white;
  }

  .itunesBtn{
    background-color: darkgray;
    border-color: white;
    padding: 2px;
    margin: 0;

    align-self: flex-end;
  }
</style>
