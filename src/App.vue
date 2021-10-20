<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>


<script>
import MainLayouts from './Layouts/MainLayouts'
export default {
  computed:{
    layout(){
      return MainLayouts
    }
  },
  components:{
    MainLayouts
  }
}
</script>

<style>
@import '../src/assets/css/app.css';
</style>