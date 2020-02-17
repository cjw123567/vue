<template>
  <div>
    <app-header></app-header>
    <nav-bar></nav-bar>
    <app-main></app-main>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
import Navbar from "./AppNavbar/Navbar";
import AppMain from "./AppMain";

export default {
  components: {
    "app-header": AppHeader,
    "nav-bar": Navbar,
    "app-main": AppMain
  }
};
</script>

<style>
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #2d3a4b;
}
.navbar {
  position: absolute;
  top: 50px;
  left: 0px;
  bottom: 0px;
  background-color: #545c64;
  overflow-y: auto;
  width: 230px;
}
.main {
  position: absolute;
  top: 50px;
  left: 230px;
  bottom: 0px;
  right: 0px;
  padding: 10px;
  overflow: auto;
}
</style>