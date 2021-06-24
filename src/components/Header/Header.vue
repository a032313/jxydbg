

<template >
    <div class="header">
        <slot name="v_left">

         
        </slot>
        <slot name="v_center">

         
        </slot>
        <slot name="v_right">

         
        </slot>
       
      </div>
      <div class="brother">

    </div>
    
</template>

<script>
import {defineComponent} from "vue"
export default defineComponent({
        name:"Header",
        setup(){
           
            return {
               
            }
        }

})
</script>

<style lang="less">
   
    .header{
      height: 8%;
      color:#ffffff;
      width: 100%;
      position:fixed;
      z-index: 999;
      display: flex;
      justify-content: space-around;
      align-items: center;
      
      background-color: #0aa344;
      
    }
    .brother{
      height:8%;
    }
</style>