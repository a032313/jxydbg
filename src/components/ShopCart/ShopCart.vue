<template>
<div class="list-zhezhao" v-if="isShow"></div>
<div class="shopCar">
<transition name="shoplist-an">
<div class="shopList" v-if="isShow">
    <div class="listHeader">
        <h1>购物车</h1>
        <span @click="isClick=!isClick" style="color:blue">清空</span>
    </div>
 
    <div class="shopContent">
        <ul>
            <li v-for="(food,index) in cartFoods" :key="index" class="li_item">
                <span class="name">{{food.name}}</span>
                <div class="price"><span>￥{{food.price}}</span></div>
                <div class="control-wrapper">
                    <CartControl :food="food"/>
                </div>



            </li>
            
        </ul>
    </div>
</div>

</transition>
<AlertTip isShow="true" alertText="确定清空购物车？" @emitQ="empty" v-show="isClick" @closeTip="isClick=false"/>
<div class="shopCart">
    <div class="left_t" @click="toggleShow">
           <div class="tubiao" :class="{highlight:totalCount}">
               <i class="iconfont icon-gouwuchekong"></i>
               <div class="num" v-if="totalCount">{{totalCount}}</div>
           </div>
           <div class="shopCenter">
                <span >￥{{totalPrice}}</span>
                <span>另需配送费{{info.deliveryPrice}}元</span>
           </div>
           </div>
           <div class="shopRight" :class="payClass">
               <span >{{payText}}</span>
           </div>

</div>
</div>
  
</template>

<script>
import {mapGetters,mapState} from "vuex"
import AlertTip from "../AlertTip/AlertTip.vue"
import BScroll from "better-scroll"
import {mapActions} from "vuex"
import CartControl from "../../components/CartControl/CartControl.vue"
export default {
    data(){
        return {
            isShow:false,
            isClick:false
        }
    },
    methods:{
         ...mapActions(["delCount"]),
        toggleShow(){
            this.isShow=!this.isShow
             this.$nextTick(()=>{
               
                if(!this.scroll){
                 
                    
                    this.scroll=new BScroll(".shopContent",{
                 click:true

                 })
                }
                else{
                 this.scroll.refresh()


                }
            
          
           
        })
        },
        empty(){
            this.isClick=false
            this.delCount()
            
           

        },

    },
   
    components:{
        CartControl,
        AlertTip
    },
        computed:{
            ...mapState(["cartFoods","info"]),
            ...mapGetters(["totalCount","totalPrice"]) ,
          
            payClass(){
                const {totalPrice} =this
                const {minPrice} =this.info
                return totalPrice>=minPrice?"enough":"not-enough"
            },
            payText(){
                  const {totalPrice} =this
                const {minPrice} =this.info
                if(totalPrice===0){
                    return `￥${minPrice}元起送`
                }
                else if(totalPrice<minPrice){
                    return `还差${minPrice-totalPrice}元起送`
                    
                }else{
                    return "去结算"
                }


            }
        }
    


}
</script>
<style lang="less">
.list-zhezhao{
    background-color: rgba(0, 0, 0, 0.418);
    position: absolute;
    height: 100%;
    width: 100%;
    left:0;
    top:0;
    z-index: 1;
   
}
        .shopCar{
        position: fixed;
        bottom:0;
        width: 100%;
        height: 8%;
        z-index: 2;
     
         .shoplist-an-enter-active,.shoplist-an-leave-active{
                transition: all 1s;
            }
            .shoplist-an-enter,.shoplist-an-leave-to{
                opacity: 0;
                transform: translateX(30px) rotate(180deg);
            }

        .shopList{
          position: absolute;
            bottom: 50px;
            width: 100%;
            background-color: rgb(231, 224, 231);
           
          
           .listHeader{
               display: flex;
               justify-content: space-around;
                border-bottom: 1px solid rgb(168, 164, 164);

             
           }
           .shopContent{
              height: 180px;
               overflow: hidden;
            
              
              .li_item{
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                   font-size: 10px;
                  .name{
                      flex: 1;
                      position: relative;
                      left:10px;
                     
                  }
                  .price{
                      flex: 1;
                      text-align: center;
                  }
                  .control-wrapper{
                      display: flex;
                      flex: 1;
                      .jishu{
                          align-items: center;
                      }
                  }
              }
           }
            

        }
        .shopCart{
            color: white;
           height:100%;
            
            display: flex;
             position:absolute;
             width: 100%;
           bottom: 0;
           
            justify-content: space-around;
            align-items: center;
            
            background-color: rgba(22, 22, 22, 0.932);
            .left_t{
                display: flex;
                height: 100%;
                width:85%;
                justify-content: space-around;
                align-items: center;
                
            .tubiao{
                background-color: rgb(100, 97, 97);
                width: 50px;
                height: 100%;
                border-radius: 50%;
                position: relative;
                border-top: 3px solid rgba(22, 22, 22, 0.932);
                top:-5px;
                
                >.iconfont{
                    font-size: 30px;
                   position: absolute;
                   left:20%;
                   top:15%
                    


                }
                .num{
                    background-color: red;
                    border-radius: 50%;
                    width: 30%;
                    text-align: center;
                    position: relative;
                    right:-35px;
                    top:-5px;
                    font-size: 5px;
                }
            }
            .highlight{
                background-color: rgb(39, 175, 39);
            }
            .shopCenter{
                flex: 0.7;
                display: flex;
                flex-direction: column;
                font-size: 12px;
                >span{
                   margin-top: 5px;
                    
                }
                
            }
            }
            .shopRight{
                background-color: rgb(100, 97, 97);
                height: 100%;
                width:30%;
                
                justify-content: center;
                display: flex;
                align-items: center;
                font-size: 10px;

               

            }
             .enough{
                    background-color: rgb(39, 175, 39);
           
                }
        }
        }

</style>