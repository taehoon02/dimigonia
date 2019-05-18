<template>
  <div class="home">
    <div class="section">
      <p class="title">
        카메라로 정보를
        <br>알고싶은 상품을 찍어주세요!
      </p>
    </div>
    <div class="section content" @click="takePicture">
      <p class="description">
        눌러서 사진을
        <br>찍어보세요!
      </p>
    </div>
    <div class="section">
      <i class="icon fas fa-angle-double-up"></i>
    </div>
    <div class="section gallary" @click="getPicture">
      <p>갤러리</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    takePicture() {
      this.$router.push({
        name: "camera"
      });
    },

    getPicture() {
      alert("getPicture");
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}

.section {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.content {
  position: relative;
  width: 240px;
  height: 240px;
  margin: 3rem auto;
  padding: 1.3rem;

  &::before,
  &::after,
  & > :last-child:before,
  & > :last-child:after {
    position: absolute;
    width: 50px;
    height: 50px;
    border: solid rgba(255, 255, 255, 0.5);
    content: " ";
  }

  &::before {
    top: 10px;
    left: 10px;
    border-width: 8px 0 0 8px;
  }

  &::after {
    top: 10px;
    right: 10px;
    border-width: 8px 8px 0 0;
  }

  & > :last-child:before {
    bottom: 10px;
    right: 10px;
    border-width: 0 8px 8px 0;
  }

  & > :last-child:after {
    bottom: 10px;
    left: 10px;
    border-width: 0 0 8px 8px;
  }
}

.title {
  font-size: 25px;
  color: #fff;
  width: 80%;
  line-height: 1.5;
  margin: 0 auto;
  padding: 3rem 0;
}

.description {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  width: 50%;
  line-height: 1.5;
}

.icon {
  color: rgba(255, 255, 255, 0.3);
  font-size: 2rem;
}

.gallary {
  margin: 0 auto;
  margin-top: 1rem;
  width: 300px;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.6);
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
