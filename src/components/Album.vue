<template>
  <div>
    <h1>Album</h1>
    <div>GLO-3102 Album page</div>
    <b-card no-body class="footer text-center">
      <audio controls>
        <source src="#" type="audio/mp3">
        <source src="#" type="audio/ogg">
        <p>
          Your browser doesn't support HTML5 audio. Here is
          a
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
}
audio {
    width: 100%;
}
</style>