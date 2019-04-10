<template>
  <b-card no-body id="player" class="footer text center">
    <canvas id="analyser_render"></canvas>
    <audio id="playerMP3" crossorigin="anonymous" controls>
      <source :src='this.source' type="audio/mp3"/>
      <source :src='this.source' type="audio/ogg"/>
      <p>
        Your browser doesn't support HTML5 audio. Here is a
        <a href="#">link to the audio</a> instead.
      </p>
    </audio>
  </b-card>
</template>

<script>
  /* eslint-disable no-undef,no-console,max-len */

  export default {
    name: 'Player',
    props: ['source'],
    data: () => ({
      userAlreadyPressedPlay: false,
      audio: null,
      audioContext: null,
      analyser: null,
      canvas: null,
      canvasContext: null,
      mediaElementSource: null,
      fbcArray: null,
      bars: null,
      barPositionX: null,
      barWidth: null,
      barHeight: null
    }),
    methods: {
      initializeAudioContext() {
        this.audio = document.getElementById('playerMP3');
        this.audioContext = new window.AudioContext();
        this.analyser = this.audioContext.createAnalyser();
        this.canvas = document.getElementById('analyser_render');
        this.canvasContext = this.canvas.getContext('2d');
        this.mediaElementSource = this.audioContext.createMediaElementSource(this.audio);
        this.mediaElementSource.connect(this.analyser);
        this.analyser.connect(this.audioContext.destination);
        this.frameLooper();
      },
      frameLooper() {
        window.requestAnimationFrame(this.frameLooper);
        this.fbcArray = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteFrequencyData(this.fbcArray);
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvasContext.fillStyle = 'lightgreen';
        this.bars = 100;
        for (let i = 0; i < this.bars; i += 1) {
          this.barPositionX = i * 3;
          this.barWidth = 2;
          this.barHeight = -(this.fbcArray[i] / 2);
          this.canvasContext.fillRect(this.barPositionX, this.canvas.height, this.barWidth, this.barHeight);
        }
      },
      playButtonClicked() {
        if (!this.userAlreadyPressedPlay) {
          window.addEventListener('load', this.initializeAudioContext(), false);
          this.userAlreadyPressedPlay = true;
        }
      }
    },
    mounted() {
      this.audio = document.getElementById('playerMP3');
      this.audio.addEventListener('play', this.playButtonClicked, true);
    }
  };
</script>

<style scoped>

  #player {
    width:50%;
    position: fixed;
    left: 25%;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: transparent;
    border-color: transparent;
  }

  canvas {
    width: 100%;
    background: transparent;
    height: 60px;
  }

  audio {
    width: 100%;
    background-color: #F1F3F4;
  }

</style>
