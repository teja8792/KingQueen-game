<template>
  <div id="app" class="page uk-background-primary uk-light">
    <div class="uk-padding-small">
      <h2 class="uk-text-center uk-logo">KingQueen</h2>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {}
};
</script>

<style>
@import url("uikit/dist/css/uikit.min.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.page {
  height: 100vh;
  position: relative;
  overflow: hidden;
}
</style>
