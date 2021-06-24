

<template >
  <div class="order_container" v-show="!$store.state.userinfo._id"> 
    <Header >
      <template v-slot:v_center>
        <span>订单列表</span>

      </template>
         
    </Header>
    <div class="container1">
       

           <span>登录后查看订单列表</span><br>
      <button type="button" class="btn btn-success" @click="$router.replace('/login')">立即登录</button>
     
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue"
import Header from "../../components/Header/Header.vue"
export default defineComponent({
        name:"Order",
        components:{
          Header
        },
        setup(){
           
            return {
               
            }
        }

})
</script>

<style lang="less">
   .order_container{
     height: 100%;
     .container1{
       height:85%;
       text-align: center;
      background-image: url("/images/order.jpg");
      background-size: 100% ;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position:0% 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
       
     }
     
   }
</style>