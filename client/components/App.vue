<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
@import '../style/_vars.scss';
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
  background-color: $page-bg;
}
</style>
