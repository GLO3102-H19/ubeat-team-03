<template>
    <div class="mainDiv">
      <ul class="list-inline">
        <li class="list-inline-item"><h3>Nickelback</h3></li>
        <li class="list-inline-item"><b-button size="sm" class="itunesBtn" onclick="window.location.href='https://www.apple.com/ca/itunes/link/'"><font-awesome-icon :icon="[ 'fab','itunes']" size="3x"/></b-button></li>
      </ul>
      <ul class="list-unstyled">
        <li><p>Genre : Rock/Pop</p></li>
        <li>Album :<ul>
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
    margin: 10px;
  }

  .itunesBtn{
    background-color: darkgray;
    border-color: white;
    padding: 2px;
    margin: 0;

  }
</style>
