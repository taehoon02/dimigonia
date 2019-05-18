<template>
  <div class="nav">
    <div class="container">
      <i class="icon fas fa-chevron-left" @click="gotoHome"></i>
      <span class="title">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    gotoHome() {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>

<style scoped>
.nav {
  background-color: #fff;
}

.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  text-align: left;
  padding-left: 1rem;
  padding-top: 1.5rem;
}

.icon {
  color: #8f9bff;
  font-size: 1.5rem;
  padding-right: 1rem;
}

.title {
  color: #000;
  font-size: 1.5rem;
}
</style>
