<template>
  <div id="app">
    <p>
      <router-link to="/">Home首页</router-link>
      <router-link to="/about">About页面</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less">
</style>
