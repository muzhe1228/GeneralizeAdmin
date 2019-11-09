<template>
  <div id="app">
    <router-view class="main"/>
  </div>
</template>

<style lang="stylus">
@import '~assets/stylus/comm.styl';
#app {
  height: 100%;
  width: 100%;
  .main {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
}
</style>
