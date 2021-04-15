<template>
  <div id="app">
    <div class="app__container hero is-fullheight has-background-white">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  background-color: #eee;
  .app__container {
    max-width: 360px;
    margin: 0 auto;
  }
}
</style>
