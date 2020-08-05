<template>
  <div id="app" class="page uk-background-primary">
    <div class="uk-padding-small uk-light">
      <h2 class="uk-text-center uk-logo" @click="$router.push('/')">KingQueen</h2>
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
