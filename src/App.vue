<template>
  <div id="app">
    <header-view></header-view>
    <footer-view></footer-view>
    <router-view/>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView.vue'
import FooterView from './components/FooterView.vue'
export default {
  components: {
    HeaderView,
    FooterView
  }
}
</script>
<style lang="scss">

  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }


</style>