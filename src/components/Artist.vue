<template>
    <div class="mainDiv">

      <b-container fluid class="headerDiv">
        <b-row>
          <b-col cols="1"></b-col>
          <b-col cols="3.5" ><img class="image" src="https://cps-static.rovicorp.com/3/JPG_400/MI0003/458/MI0003458556.jpg?partner=allrovi.com" alt="Nickelback"></b-col>
            <b-col cols="6"><ul class="list-unstyled">
              <li><h3>Nickelback</h3></li>
              <li>Rock</li>
            </ul></b-col>
          <b-col cols="1" class="itunesBtn"><b-button size="sm" onclick="window.location.href='https://itunes.apple.com/ca/artist/nickelback/5280361'"><font-awesome-icon :icon="[ 'fab','itunes']" size="3x"/></b-button></b-col>
        </b-row>
      </b-container>

      <ul class="list-unstyled">

        <li><ul class="list-unstyled">
          <li><p>Feed the Machine</p></li>
          <li><p>No Fixed Address</p></li>
          <li><p>Here and Now</p></li>
          <li><p>Dark Horse</p></li>
          <li><p>All the Right Reasons</p></li>
          <li><p>The Long Road</p></li>
          <li><p>Silver Side Up</p></li>
          <li><p>The State</p></li>
          <li><p>Curb</p></li>
        </ul></li>

      </ul>

    </div>
</template>

<style>

  .mainDiv{
    margin: auto;
    padding: auto;
  }

  .headerDiv{
    background-color: #ff7f1c;
    border-bottom-width: 50px;
    border-bottom-color: blue;
  }

  .image{
    border-radius: 100px;
  }

  .itunesBtn{
    background-color: darkgray;
    border-color: white;
    padding: 2px;
    margin: 0;
  }
</style>
