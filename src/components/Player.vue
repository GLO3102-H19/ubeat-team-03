<template>
  <b-card no-body class="footer text-center">
    <audio id="playerMP3" controls>
      <source :src="this.source" type="audio/mp3"/>
      <source :src="this.source" type="audio/ogg"/>
      <p>
        Your browser doesn't support HTML5 audio. Here is a
        <a href="#">link to the audio</a> instead.
      </p>
    </audio>
  </b-card>
</template>

<script>
  export default {
    name: 'Player',
    props: ['source']
  };
</script>

<style scoped>
  audio {
    width: 100%;
  }

  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
</style>
