<template>
    <div class="footer_guide">
        <div class="guide_item" :class="{on:'/msite'===$route.path}" @click="goto('/msite')">
            <span class="item_icon">
                <i class="iconfont icon-pingtai"></i>
            </span>
            <span>外卖</span>
        </div>
       
        <div class="guide_item" :class="{on:'/search'===$route.path} " @click="goto('/search')">
            <span class="item_icon">
                <i class="iconfont icon-chayan"></i>
            </span>
            <span>搜索</span>
        </div>
        <div  class="guide_item" :class="{on:'/order'===$route.path}" @click="goto('/order')">
            <span class="item_icon">
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>订单</span>
        </div>
        <div  class="guide_item" :class="{on:'/profile'===$route.path}" @click="goto('/profile')">
            <span class="item_icon">
                <i class="iconfont icon-user"></i>
            </span>
            <span>个人中心</span>
        </div>
    
    </div>
</template>

<script>
import {defineComponent} from "vue"
export default defineComponent({
        name:"FooterGuide",
        setup(){
            function goto(path){
                this.$router.replace(path)
            }
            return {
                goto
            }
        }

})
</script>

<style lang="less">
    .footer_guide{
        width: 100%;
        position:fixed; 
        background-color: #ffffff;
         bottom: 0;
        display: flex;
        justify-content: space-around;
      
        .on{
            color:#d81e06;
        }
        .guide_item{
            width: 25%;
            height:40px;
            display:flex;
            flex-direction: column;
           align-items:center;
            
            .item_icon{
                
               .iconfont{
                   font-size:20px;

               }
            }
        }
    }
</style>