<template>
    <div class="pingjia-jie" >
        <div class="scroll-content">
        <div class="pingfen">
            <div class="pingfen-left">
                <h1>{{info.score}}</h1>
                <span>综合评分</span>
                <span>高于周边商家99%</span>
            </div>
            <div class="pingfen-center"></div>
            <div class="pingfen-right">
                <div class="one-line">
                    <i class=" iconfont icon-tubiaoguifan-16"></i>
                    <span>服务态度</span>
                    <span class="score">{{info.serviceScore}}</span>
                </div>
                 <div class="two-line">
                        <i class=" iconfont icon-tubiaoguifan-16"></i>
                    <span>商品评分</span>
                    <span class="score">{{info.foodScore}}</span>

                 </div>
                  <div class="three-line">
                      <span>送达时间</span>
                    <span>{{info.deliveryTime}}分钟内</span>
                  </div>

            </div>


        </div>
        <div class="center-e">

        </div>
        <div class="pingjia-bottom">
            <div class="pingjia-xx">
               <button type="button" :class="selectType===2?clickTrue:''" class="btn btn-default" @click="setSelectType(2)">全部 {{ratings.length}}</button>
               <button type="button" :class="selectType===0?clickTrue:''" class="btn btn-default"  @click="setSelectType(0)">满意 {{positiveSize}}</button>
                <button type="button" :class="selectType===1?clickTrue:''" class="btn btn-default"  @click="setSelectType(1)">不满意 {{ratings.length-positiveSize}}</button>


            </div>
            <div class="content-ping" @click="setIsShow">
                <i class="iconfont icon-queren" v-if="onlyShowText===true"></i>
                <i class="iconfont icon-queren" v-else-if="onlyShowText===false" style="color:#707070"></i>
                <span>只看有内容的评价</span>
            </div>

                <ul>

                    <li v-for="(item,index) in filterRatings" :key="index">
                        <div class="user-touxiang">
                            <img :src="item.avatar" alt="">
                        </div>
                        <div class="pingjia-content">
                            <div class="pj-time">
                                <span>{{item.username}}</span>
                                <h1>{{pingjiaTime(item.rateTime)}}</h1>
                            </div>
                            <div>
                                <i class="iconfont icon-tubiaoguifan-16"></i>
                            <span>30</span>
                            </div>
                            
                            <p>{{item.text}}</p>

                        </div>
                    </li>
                </ul>
          
           

         </div>
         </div>
    </div>
</template>

<script>
import {mapState,mapGetters} from "vuex"
import BScroll from "better-scroll"
import moment from "moment"
export default {
    name:"Ratings",
    data(){
        return {
            onlyShowText:true,
            selectType:2,
            clickTrue:"btn-primary",
           
        }
    },
    methods:{
        setSelectType(count){
            this.selectType=count
        },
        setIsShow(){
            this.onlyShowText=!this.onlyShowText
        },
          pingjiaTime(value){
           return moment(value).format("YYYY-MM-DD HH:mm:ss")

       }
    },

   mounted(){
       this.$store.dispatch("getShopRatings",()=>{
           this.$nextTick(()=>{
               new BScroll(".pingjia-jie",{
                   click:true,
                  
               })

           })
       })
   },
   computed:{
       ...mapState(["info","ratings"]),
       ...mapGetters(["positiveSize"]),
       filterRatings(){
            const{ratings,onlyShowText,selectType}=this
            return ratings.filter(rating=>{
                const{rateType,text}=rating
                return (selectType===2||selectType===rateType)&&(!onlyShowText||text.length>0)
            })
       },
   
   },

    

}
</script>

<style lang="less">

    .pingjia-jie{
        height: 63%;
       overflow: hidden;
       .scroll-content{
          
        
    .pingfen{
        display: flex;
        align-items: center;
        height: 80px;

        .pingfen-left{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            flex: 1;
            height: 100%;
            font-size: 10px;
            h1{
                color: rgb(243, 102, 20);
                font-size: 20px;
            }
      
        }
        .pingfen-center{
            
            width:1px;
            height:80%;
           
          
           
            background-color: rgb(119, 122, 124);
        }
        .pingfen-right{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:space-around;
            height: 100%;
            flex: 2;
            font-size: 10px;

            i{
                color: rgb(224, 186, 12);
            }
            .score{
                color: rgb(243, 102, 20);
            }
         
        }


    }
    .center-e{
        height: 30px;
        background-color: rgb(247, 243, 240);
    }
    .pingjia-bottom{
        


        .pingjia-xx{
            display: flex;
              justify-content:flex-start;
              height:20%;
              align-items: center;
            button{
               
                height:30px;
                margin-right: 20px;
               
              
            }
        }
        .content-ping{

            i{
                color:rgb(30, 182, 30)
            }
        }
        ul{
           
            li{
                height: 100px;
                display: flex;
                justify-content: space-around;
                .user-touxiang{
                   
                    
                 
                    flex: 1;
                   
                   img{
                       border-radius: 50%;
                       width: 30px;
                       height: 30px;
                       overflow: hidden;
                       margin-left: 10px;
                       margin-top: 10px;
                   }
                }
                .pingjia-content{
                    flex: 5;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                  
                    
                    .pj-time{
                        display: flex;
                        justify-content: space-between;
                    }

                }

            }
        }

    }
    }
    }
</style>