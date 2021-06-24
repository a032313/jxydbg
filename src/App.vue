<template>
<Fragment >
  <router-view >
      
  </router-view>
     <FooterGuide v-show="$route.meta.showFooter"/>
     </Fragment>
</template>

<script>
import {defineComponent, onMounted} from "vue"
import { useStore } from "vuex"



import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
 export default defineComponent({
     name:"App",
     components:{
         FooterGuide
     },

     setup(){
          const store=useStore()
          onMounted(()=>{
              store.dispatch("getHuiHua")
              
            

          })
         
         
         return {
              
              

         }
     }

 })
</script>

<style lang="less">
@import 'common/style/mixin';     
html,
  body,
  #app {
    height: 100%;
   
  }
</style>