<template>
  <ShopHeader/>
    <div class="tab">
        <div class="tab_item">
            <router-link to="/shop/goods" :class="{on:kaiguan===1}" @click="kaiguan=1">点餐</router-link>
        </div>
        <div class="tab_item">
            <router-link to="/shop/ratings"  :class="{on:kaiguan===2}" @click="kaiguan=2">评价</router-link>
        </div>
        <div class="tab_item">
            <router-link to="/shop/info"  :class="{on:kaiguan===3}" @click="kaiguan=3">商家</router-link>
        </div>
    </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  
  </router-view>

  
</template>

<script>
import {useStore} from "vuex"
import ShopHeader from '../../components/ShopHeader/ShopHeader'
export default {
    components:{
        ShopHeader
    },
    mounted:()=>{
        let store=useStore()
       
        store.dispatch("getShopInfo")
    },
    data(){
        return {
            kaiguan:1

        }
    }

}
</script>

<style lang="less">
        .tab{
            height:4%;
            margin-top: 20px;
            display: flex;
            justify-content: space-around;
            
            
            .tab_item{
            


                .on{
                     border-bottom: 3px solid rgb(214, 75, 11);
                     padding-bottom: 10%;
                }

                a{
                    text-decoration: none;
                    color:rgb(3, 187, 211)
                }
               
            }

        }
</style>