<template>
<div class="jishu">
        <transition name="jian_test">
      <div class="iconfont icon-jianshao" v-if="food.count" @click="updateCount(false)"></div>
      </transition>
  <div class="cart-count" v-if="food.count">{{food.count}}</div>
  <div class="iconfont icon-zengjia" @click="updateCount(true)"></div>
</div>

</template>

<script>
export default {
    data(){
        return{
            xx:666
        }
    },
    props:{
        food:Object
    },
    methods:{
        updateCount(bool){
           
            const food =this.food
              this.$store.dispatch("updateCount",{bool,food})
        }
    }

}
</script>

<style lang="less">
        .jishu{

            flex: 1;
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            height: 60px;
            .jian_test-enter-active,.jian_test-leave-active{
                transition: all 0.5s;
            }
            .jian_test-enter,.jian_test-leave-to{
                opacity: 0;
                transform: translateX(30px) rotate(180deg);
            }
            .iconfont{
                font-size: 20px;
                color:rgb(14, 236, 169)
            }
        }
</style>