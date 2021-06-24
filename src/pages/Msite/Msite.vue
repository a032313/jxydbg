<template >
    <div class="msite_container">
      <Header>
         <template v-slot:v_left>
        <span class="header_left" >
          <i class="iconfont icon-chayan"></i>
          </span>
    </template>
    <template v-slot:v_center>
        <span class="header_center">{{$store.getters.getAddress}}</span>
    </template>
    <template v-slot:v_right>
        <div class="header_right" @click="$router.replace('login')">登录 注册</div> 
    </template>
        



      </Header>
      <div class="center">
       
       <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="ul in ulList" :key="ul.id"> 
          <ul>
          <li v-for="item in $store.getters.getCategorys.slice(ul.q,ul.h)" :key="item.id" >
              <img :src="baseUrl+item.image_url" :alt="item.description">
              <span>{{item.title}}</span>

          </li>
        </ul>
        </div>
        
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
   
</div>
  
         
        
     

        
       
    
</div>
        
    
   

      <div class="downer">
        <div class="down_hr">
          <span><i class="iconfont icon-jiekoupeizhi"></i></span> <span>附近商家</span>
        </div>
        <div class="down_dn">
            <ul v-for="item in $store.state.shops" :key="item.id">
              <li @click="this.$router.push('/shop')">
                <img  :src="baseUrl2+item.image_path">
                <div class="dn_center">
                  <div class="oneLine">
                    <span>品牌</span>
                <span>{{item.name}}</span>
                </div>
                <div class="twoLine">
                  <i class="iconfont icon-tubiaoguifan-16"></i>
                  <span>3.6</span>
                  <span>月售355单</span>
                </div>
                <div class="threeLine">
                  <span>￥20起送</span>
                  <span>配送费￥5</span>

                </div>
                


                </div>
                <div class="dn_right">
                  <div class="right_one">
                    <span>保</span>
                  <span>准</span>
                  <span>票</span>
                  </div>
                  
                  <span>窑洞专送</span>
                </div>

              </li>
            </ul>
        </div>
      </div>
    </div>

</template>

<script>
  import { defineComponent, onMounted, reactive} from "vue";
  import Swiper from 'swiper';
  import "swiper/dist/css/swiper.min.css"
  import Header from "../../components/Header/Header.vue"
import { useStore } from "vuex";
  export default defineComponent({
    name:"Msite",
    components:{
      Header,
    
     
    },
    
    setup(){   
      
      const store=useStore()
      onMounted(()=>{
       
        
        store.dispatch("getAddress",{latitude:"40.10038",longitude:"116.36867"})
        store.dispatch("getFoodTypes")
        store.dispatch("getShops",{latitude:"40.10038",longitude:"116.36867"})
        
        
        return  new Swiper ('.swiper-container', {
    direction: 'horizontal', 
    loop: true, 
    pagination: {
      el: '.swiper-pagination',
    },
  })   
              
      })


      let baseUrl="https://fuss10.elemecdn.com/" 
      let baseUrl2="http://cangdu.org:8001/img/"
      let ulList=reactive([{id:0,q:0,h:12},{id:1,q:13,h:25},{id:2,q:26,h:38}])
        
      return {
        ulList,
        baseUrl,
        baseUrl2
        
      
        
      }
    }
  })
</script>

<style lang="less">
  .msite_container{
     height: 100%;
    .header_left{

              i{
                font-size: 40px;
              }
      }

      .header_center{
        font-size: 15px;
      }
      .header_right{


      }
    .center{
      height: 40%;
      overflow: hidden;
      .swiper-pagination-bullets{

        position: relative;
        top:1px
      }
     
      ul{
        
        
        display: flex;
       flex-flow: row wrap;
        justify-content: space-around;
        li{
          
          display: flex;
          
          flex-direction: column;
          align-items: center;
          margin:5px 10px;

        img{
           width:55px;
        height: 55px;
      }
        }
        }
       
    }
    .downer{
      height: 50%;
      .down_hr{
        margin-top:5px;
      }
      .down_dn{
        
        ul{
          width: 100%;
          display: inline-block;
          margin-top:5px;
          li{
            width: 100%;
            margin:5px auto;
            display: flex;
            justify-content: space-around;
            
              img{
          width:60px;
          height: 60px;
          position: relative;
          left:3%;
        }
        
        .dn_center{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            position: relative;
            left:3%;
            flex: 1;
            
          
          .oneLine{
              position: relative;
              left:3%;
              :first-child{

                background-color: rgb(233, 192, 8);
                font-family: Georgia, 'Times New Roman', Times, serif;

              }
              :last-child{
                font-size: 15px;
                font:bold 2px;
                position: relative;
                left:1%
              }

          }
          .twoLine{
              display: flex;
              justify-content: space-around;
              font-size: 12px;
              
            
              span:first-of-type{
                color: rgb(255, 17, 0);
                flex: 1;
                text-align: center;
              }
              span:last-of-type{

                flex: 3;
                text-align: center;
              }
              
              .iconfont{
                color: rgb(255, 174, 0);
                flex:2 ;
                position: relative;
                left:3%
              }


          }
          .threeLine{
            display: flex;
            justify-content: space-around;
            
            font-size: 12px;

          }
        }

        .dn_right{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            position: relative;
            right: 3%;
            .right_one{
              display: flex;
              justify-content: space-around;

              span{
                border:1px solid rgb(131, 127, 127);
                color: rgb(124, 124, 124);
                font-size: 9px;
              }
            }
            span{
              color:rgb(11, 197, 151);
              border:1px solid rgb(16, 231, 149);
              font-size: 9px;
            }

        }
          }
        
        }
        
      }
    }
  }
</style>