<template>
  <div class="camera-modal">
    <video ref="video" class="camera-stream"></video>
    <div class="camera-modal-container"></div>
    <button class="take-picture-button" @click="capture">
      <i class="fab fa-cuttlefish"></i>
    </button>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase.js";
export default {
  data() {
    return {
      mediaStream: null
    };
  },
  mounted() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(mediaStream => {
          this.mediaStream = mediaStream;
          this.$refs.video.srcObject = mediaStream;
          this.$refs.video.play();
        })
        .catch(error => console.error("getUserMedia() error:", error));
    } else if (navigator.getUserMedia) {
      // Standard
      navigator.getUserMedia({ video: true }, function(mediaStream) {
        this.mediaStream = mediaStream;
        this.$refs.video.srcObject = mediaStream;
        this.$refs.video.play();
      });
    } else if (navigator.webkitGetUserMedia) {
      // WebKit-prefixed
      navigator.webkitGetUserMedia({ video: true }, function(mediaStream) {
        this.mediaStream = mediaStream;
        this.$refs.video.srcObject = window.webkitURL.createObjectURL(
          mediaStream
        );
        this.$refs.video.play();
      });
    } else if (navigator.mozGetUserMedia) {
      // Mozilla-prefixed
      navigator.mozGetUserMedia({ video: true }, function(mediaStream) {
        this.mediaStream = mediaStream;
        this.$refs.video.srcObject = window.URL.createObjectURL(mediaStream);
        this.$refs.video.play();
      });
    }
  },
  methods: {
    capture() {
      const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
      const imageCapture = new window.ImageCapture(mediaStreamTrack);
      return imageCapture.takePhoto().then(blob => {
        firebase.storage
          .ref()
          .child(`images/picture`)
          .put(blob)
          .then(res => {
            res.ref.getDownloadURL().then(pictureUrl => {
              console.log("File available at", pictureUrl);
              this.$router.push({
                name: "picture",
                params: { pictureUrl }
              });
            });
          })
          .catch(err => {
            console.log(err);
          });
      });
    }
  },
  destroyed() {
    const tracks = this.mediaStream.getTracks();
    tracks.map(track => track.stop());
  }
};
</script>

<style scoped>
.camera-modal {
  width: 100%;
  height: 100%;
  top: 20;
  left: 0;
  position: absolute;
  background-color: white;
  z-index: 10;
}

.camera-stream {
  width: 100%;
  max-height: 100%;
  min-height: 400px;
}

.camera-modal-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  margin-bottom: 24px;
}

.take-picture-button {
  display: block;
  margin: auto;
  margin-top: 20px;
  background-color: #0043ca;
  border-radius: 100%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: #fff;
  font-size: 2rem;
}
</style>
