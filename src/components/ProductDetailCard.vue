<template>
  <div class="card2">
    <div class="section">
      <div class="guide"></div>
      <div class="content">
        <p class="title">발생한 온실가스의 양</p>
        <img class="progress" src="../assets/progress_example.png">
      </div>
      <div class="content">
        <p class="title">사용된 자원</p>
        <div class="flexbox">
          <material-card img="https://imgur.com/bXwkk9w"></material-card>
          <material-card img="https://imgur.com/aoXwBxB"></material-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialCard from "./MaterialCard";

export default {
  components: {
    MaterialCard
  }
};
</script>


<style scoped>
.section {
  width: 320px;
  height: 400px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  margin: 2rem;
}

.guide {
  content: "";
  width: 15%;
  margin: 0 auto;
  border-bottom: 2px solid #536dfe;
  padding-top: 1rem;
}

.progress {
  width: 90%;
  height: 40px;
  margin-left: 14px;
}

.flexbox {
  display: flex;
  margin: 1rem;
  justify-content: space-around;
}

.title {
  font-size: 1rem;
  margin-left: 1rem;
}
</style>
