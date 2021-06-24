<template>
    <div class="shop-goods">
            <div class="left-menu">
                <ul >
                    <li v-for="(item,index) in $store.state.goods" :key="index" :class="{current:index===currentIndex}" @click="leftAction(index)">

                    <img :src="item.icon" alt="" v-if="item.icon">
                    <span>{{item.name}}</span>
                    </li>
                </ul>

            </div>
            <div class="right-foods">
              
                    <ul class="waiceng" ref="rightUI">
                        <li v-for="(item,index) in $store.state.goods" :key="index" class="food-li">
                            <h1>{{item.name}}</h1>
                            <ul class="neiceng">
                                <li v-for="(food,index) in item.foods" :key="index">
                                    <img v-lazy="food.image" alt="" @click="showFood(food)">
                                    <div class="list">
                                        <h1>{{food.name}}</h1>
                                        <span>{{food.description}}</span>
                                        <div>
                                            <span>月售{{food.sellCount}}</span>
                                            <span>好评率{{food.rating}}%</span>
                                        </div>
                                        <span>￥{{food.price}}</span>


                                    </div>
                                    <CartControl :food="food"/>
                                    
                                
                                </li>
                            </ul>
                            
                        </li>
                    </ul>
            </div>

    </div>
        <Food :food="food" ref="showFo"/>
        <ShopCart/>
</template>

<script>

import BScroll from "better-scroll"
import {mapState} from "vuex"
import ShopCart from "../../../components/ShopCart/ShopCart.vue"
import CartControl from "../../../components/CartControl/CartControl.vue"
import Food from "../../../components/Food/Food.vue"
export default {
    name:"Goods",
    data(){
        return {
            scrollY:0,
            tops:[],
            showy:false,
            food:{}

        }
    },
    components:{
        CartControl,
        Food,
        ShopCart
    },
    computed:{

        ...mapState(["goods"]),
        currentIndex(){
            const {scrollY,tops} =this
            const index=tops.findIndex((top,index)=>{
                return scrollY>=top&&scrollY<tops[index+1]

            })
           
            return index
        }
    },
    methods:{
        showFood(food){
            this.food=food
            this.$refs.showFo.toggleShow()

        },
     
        initScroll(){
             new BScroll(".left-menu",{
                 click:true
             })
                  
                
                this.scrollone=new BScroll(".right-foods",{
                     probeType:3,
                     click:true
                 })
                 this.scrollone.on("scroll",({y})=>{
                    this.scrollY=Math.abs(y)
                 })
                 this.scrollone.on("scrollEnd",({y})=>{
                    this.scrollY=Math.abs(y)
                 })
        },
        initTops(){
            const tops=[]
            let top=0
            tops.push(top)
            const lis=this.$refs.rightUI.getElementsByClassName("food-li")
            Array.prototype.slice.call(lis).forEach((li)=>{
                    top+=li.clientHeight
                    tops.push(top)
            })
            this.tops=tops

        },
        leftAction(index){
            const scrollY=this.tops[index]
            this.scrollY=scrollY
            // console.log(this)
            this.scrollone.scrollTo(0,-scrollY,300)

        }
            

    },
    mounted(){
        
        this.$store.dispatch("getShopGoods",()=>{
                
            this.$nextTick(()=>{
                this.initScroll()
                this.initTops()
            })
        })


    }

                
       
              
   

}
</script>

<style lang="less">
            .shop-goods{
                height: 63%;
                display: flex;


                .left-menu{
                    height: 100%;
                    flex: 1;
                    background-color: rgb(230, 230, 216);
                    overflow: hidden;

                    ul{
                        
                        display: flex;
                        flex-direction: column;

                        .current{
                            background-color: rgb(255, 255, 255);
                        }
                        li{
                            width: 100%;
                            display: flex;
                            height:50px;
                            font-size: 12px;
                           margin: 0 auto;
                            justify-content: center;
                            align-items: center;
                            img{
                                
                                height: 12px;
                              

                            }
                            span{
                               
                            }
                        }
                    }
                }
                .right-foods{
                    overflow: hidden;
                    flex: 4;
                        height:100%;
                        .waiceng{

                            li{
                              
                                
                                >h1{
                                   
                                    background-color:rgb(230,230,216);
                                    font-size: 15px;
                                    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                                    position: relative;
                                   display: flex;
                                   align-items: center;
                                   padding-left: 20px;
                                    height: 50px;
                                   

                                }
                                .neiceng{
                                    display: flex;
                                    flex-direction: column;
                                    li{
                                        height:100px;
                                        display: flex;
                                        align-items: center;
                                       margin-left: 20px;
                                        border-bottom: 1px solid rgb(228, 221, 221);
                                        img{
                                            width: 57px;
                                            height: 57px;
                                        }
                                        .list{
                                            width: 120px;
                                         margin-left: 20px;
                                         :not(:first-child){
                                             font-size: 12px;
                                         }
                                         
                                           
                                        }
                                    }
                                }
                            }
                        }
                        
                        
                }
            }
</style>