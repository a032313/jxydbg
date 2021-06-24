<template>
<div class="zhezhaoceng" v-if="isShow">
    <div class="xuanchuan">
            <i class="iconfont icon-xiazai6" @click="toggleShow"></i>
            <img v-lazy="food.image" alt="">
            <span>{{food.info}}</span>
            <h1>{{food.name}}</h1>
            <div class="x_center">
                <span>月售{{food.sellCount}}份</span>
                <span>好评率{{food.rating}}%</span>
            </div>
            <div class="x_footer">
                <span style="color:red">￥{{food.price}}</span>
                <CartControl :food="food" class="jisuanqi"/>
            </div>

    </div></div>
</template>

<script>
import CartControl from "../../components/CartControl/CartControl.vue"
export default {
    props:{

        food:Object,
        
    },
    data(){
        return {
            isShow:false
        }
    },
    components:{
        CartControl
        
    },
    methods:{
        toggleShow(){
                this.isShow=!this.isShow
        }
    }
   
    

}
</script>
<style lang="less">
.zhezhaoceng{
   
                position: fixed;
               background-color: rgba(8, 8, 8, 0.788);
              z-index: 1;
                top:0;
                left:0;
              width: 100%;
              height: 100%;

            .xuanchuan{
                position: absolute;
                width: 300px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                font-size: 10px;
                height: 300px;
                top:25%;
                background-color: rgb(255, 255, 255);
                border-radius: 20px;
                overflow: hidden;
                
                left:8%;
                >.iconfont{
                    position: absolute;
                    left:5%;
                    top:5%;
                    font-size: 20px;
                    color: rgb(255, 253, 253);
                }


                img{
                    width: 100% !important;
                    height: 80%  !important;
                }
                .x_center{

                }
                .x_footer{
                    .jisuanqi{
                        position:absolute;
                        top:75%;
                        left:75%;
                        width: 60px;

                    }
                }
            }
}
</style>