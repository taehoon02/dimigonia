<template>
  <div class="picture">
    <div class="container">
      <div class="section">
        <img class="image" :src="this.picUrl">
        <div class="button-group">
          <button @click="retakePicture">다시 찍기</button>
          <button @click="usePicture">사진 사용</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictureUrl: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      picUrl: null
    };
  },
  mounted() {
    if (this.pictureUrl !== "") {
      this.picUrl = this.pictureUrl;
    }
  },
  methods: {
    retakePicture() {
      this.$router.push({
        name: "camera"
      });
    },

    usePicture() {
      this.$router.push({
        name: "search"
      });
    }
  }
};
</script>

<style scoped>
.picture {
  background-color: #fff;
}

img {
  max-width: 100%;
  height: auto;
  width: auto;
}

.image {
  min-height: 100%;
}

.button-group {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem;
  color: #000;
  font-size: 22px;
  cursor: pointer;
}
</style>
