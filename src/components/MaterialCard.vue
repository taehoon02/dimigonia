<template>
  <div class="card">
    <img class="image" :src="this.img">
  </div>
</template>

<script>
export default {
  props: ["img"],
  data() {
    return {
      picUrl: null
    };
  },
  mounted() {
    if (this.img !== "") {
      this.picUrl = this.img;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #eee;
  border-radius: 10px;
}

.image {
  width: 50px;
  height: 50px;
  padding: 2rem;
}
</style>
