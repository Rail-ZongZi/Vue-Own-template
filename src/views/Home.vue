<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p class="pash">这是一段对话</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
// @import '../assets/styles/realize/element-variables.scss';

.pash {
  font-size: 30px;
  // color: $--color-primary;
}
</style>
