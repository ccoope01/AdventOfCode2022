<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Dashboard,
  },
};
</script>

<style>
@import "./assets/styles/global.css";
</style>
