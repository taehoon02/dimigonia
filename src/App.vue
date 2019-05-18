<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/all.css";
import WebFont from "webfontloader";

export default {
  name: "app",

  created() {
    WebFont.load({
      custom: {
        families: ["KoPub Dotum"],
        urls: ["//cdn.jsdelivr.net/font-kopub/1.0/kopubdotum.css"]
      }
    });
  }
};
</script>

<style>
#app {
  font-family: "KoPub Dotum", sans-serif;
  color: #000;
  background-color: #0043ca;
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
