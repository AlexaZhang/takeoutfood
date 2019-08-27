<template>
  <div id="app">
    
    <router-view />
    <FooterGuide v-if='$route.meta.showFooter'></FooterGuide>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide';
export default {
mounted(){
    // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },
  components:{
    FooterGuide
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo'])
  }
}
</script>

<style lang="stylus">
#app{
width:100%;
height:100%;
background-color:#f5f5f5;

}
</style>
