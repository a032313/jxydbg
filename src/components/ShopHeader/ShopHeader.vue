<template>
  <div class="shop-header">
    <nav class="shop-nav" :style="{backgroundImage: `url(${info.bgImg})`}">
      <a class="back" @click="$router.replace('/')">
        <i class="iconfont icon-fanhui" style="font-size:25px;color:black;position:relative;top:20%;left:5%"></i>
      </a>
    </nav>
    <div class="shop-content" @click="toggleShopShow">
      <img class="content-image" :src="info.avatar">
      <div class="header-content">
        <h2 class="content-title">
          <span class="content-tag">
            <span class="mini-tag">品牌</span>
          </span>
          <span class="content-name">{{info.name}}</span>
          <i class="iconfont icon-jinrujiantouxiao"></i>
        </h2>
        <div class="shop-message">
          <span class="shop-message-detail">{{info.score}}</span>
          <span class="shop-message-detail">月售{{info.sellCount}}单</span>
          <span class="shop-message-detail">
            {{info.description}}
            <span>约{{info.deliveryTime}}分钟</span>
          </span>
          <span class="shop-message-detail">距离{{info.distance}}</span>
        </div>
      </div>
    </div>

    <div class="shop-header-discounts" v-if="info.supports" @click="toggleSupportShow">
      <div class="discounts-left">
        <div class="activity" :class="supportClasses[info.supports[0].type]">
          <span class="content-tag">
            <span class="mini-tag">{{info.supports[0].name}}</span>
          </span>
          <span class="activity-content ellipsis">{{info.supports[0].content}}</span>
        </div>
      </div>
      <div class="discounts-right">
        {{info.supports.length}}个优惠
        <i class="iconfont icon-jiantouxia"></i>
      </div>
    </div>
  <div class="dialog" v-if="shopShow">
    <transition name="fade">
      <div class="shop-brief-modal" v-show="shopShow">
        <div class="brief-modal-content">
          <h2 class="content-title">
          <span class="content-tag">
            <span class="mini-tag">品牌</span>
          </span>
            <span class="content-name">{{info.name}}</span>
          </h2>
          <ul class="brief-modal-msg">
            <li>
              <h3>{{info.score}}</h3>
              <p>评分</p>
            </li>
            <li>
              <h3>{{info.sellCount}}单</h3>
              <p>月售</p>
            </li>
            <li>
              <h3>{{info.description}}</h3>
              <p>约{{info.deliveryTime}}分钟</p>
            </li>
            <li>
              <h3>{{info.deliveryPrice}}元</h3>
              <p>配送费用</p>
            </li>
            <li>
              <h3>{{info.distance}}</h3>
              <p>距离</p>
            </li>
          </ul>
          <h3 class="brief-modal-title">
            <span>公告</span>
          </h3>
          <div class="brief-modal-notice">
            {{info.bulletin}}
          </div>
          <div class="mask-footer" @click="toggleShopShow">
            <span class="iconfont icon-guanbi" ></span>
          </div>
        </div>

      </div>
    </transition>
    </div>
    <div class="dialog" v-if="supportShow">
    <transition name="fade">
      <div class="activity-sheet" v-show="supportShow">
        <i class="iconfont icon-guanbi" @click="toggleSupportShow"></i>
        <div class="activity-sheet-content">
          <h2 class="activity-sheet-title">优惠活动</h2>
          <ul class="list">
            <li class="activity-item" v-for="(support, index) in info.supports"
                :key="index" :class="supportClasses[support.type]">
            <span class="content-tag">
                <span class="mini-tag">{{support.name}}</span>
              </span>
              <span class="activity-content">{{support.content}}</span>
            </li>
          </ul>
          <div class="activity-sheet-close" @click="toggleSupportShow">
            <span class="iconfont icon-close"></span>
          </div>
        </div>
        <div class="activity-sheet-cover"></div>
      </div>
    </transition>
    </div>
  </div>
</template>


<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        supportClasses: ['activity-green', 'activity-red', 'activity-orange'],
        shopShow: false,
        supportShow: false
      }
    },
    computed: {
      ...mapState(['info'])
    },

    methods: {
      toggleShopShow () {
        this.shopShow = !this.shopShow
      },

      toggleSupportShow () {
        this.supportShow = !this.supportShow
      }
    }
  }
</script>

<style lang="less">

.shop-header{
    height: 30%;


        .shop-nav{
            height: 40%;
            background-position: center;

        }
        .shop-content{
            height:50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            
          
            .content-image{
                position:absolute;
                top:5%;
                left:40%;

                height:80px;
                width: 80px;
            }
            .header-content{
               z-index: 1;
                    .content-title{
                        display: flex;
                        justify-content: space-around;
                        .content-tag{
                            background-color: yellow;
                            transform: translateX(100%);
                          

                        }
                        .content-name{
                            font-size: 20px;
                           font-weight: 1000;
                        }
                        .iconfont{
                            transform: translateX(-200%);
                        }
                       
                    }
                    .shop-message{
                       transform: translateY(100%);
                        font-size: 10px;
                        display: flex;
                        justify-content: space-around;
                        span{
                            flex: 1 0 auto;
                            text-align: center;
                        }
                    }

            }
                    
        }
        .shop-header-discounts{
                        align-items: center;
                        display: flex;
                        font-size: 10px;
                        justify-content: space-around;
                        border: 1px solid rgb(235, 229, 229);
                    }
              .dialog{

                position: fixed;
                background-color: rgba(116, 112, 112, 0.8);
                z-index: 999;
                top:0;
                left:0;
                width: 100%;
                height: 100%;

              
                  .fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter,.fade-leave-to{
    opacity: 0;
}

  

           
  

                    
                    .shop-brief-modal{
                       position: absolute;
                       border-radius: 10%;
                       background-color: rgb(255, 254, 254);
                            height: 30%;
                            width: 80%;
                            left:10%;
                            top: 30%;

                        .brief-modal-content{
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;


                           .content-title{
                        display: flex;
                        justify-content: space-around;
                        margin-top: 10px;
                        .content-tag{
                            background-color: yellow;
                            transform: translateX(100%);
                          

                        }
                        .content-name{
                            font-size: 18px;
                           font-weight: 1000;
                        }

                       
                    }
                    .brief-modal-msg{
                        margin-top:20px;
                        display: flex;
                        justify-content: space-around;
                        li{
                            text-align: center;
                            h3{
                                font-weight: bold;
                            }
                            p{
                            color: rgb(155, 151, 155);
                            font-size: 10px;
                            padding-top: 10px;
                            }
                        }
                    }
                    .brief-modal-title{
                        padding-top: 10px;
                        text-align: center;

                    }
                    .brief-modal-notice{
                        text-align: center;
                        
                            font-size: 12px;
                        
                    }
                    .mask-footer{
                                text-align: center;
                               
                            .iconfont{
                                font-size: 30px;
                                position: relative;
                                top:150%
                                
                            }

                    }
                       
                        }
                    }
                    .activity-sheet{
                      font-size: 12px;
                      position: absolute;
                      bottom: 0;
                      width: 100%;
                      height: 30%;
                      background-color: #ffffff;
                      .iconfont{

                        position: absolute;
                        right:5%;
                        font-size: 20px;
                      }
                            .activity-sheet-content{
                              height: 100%;
                              display: flex;
                              flex-direction: column;
                              text-align: center;
                              .activity-sheet-title{
                                font-weight:1000;
                                font-size: 20px;
                              }
                              .list{
                                  height: 100%;
                                  display: flex;
                                  flex-direction: column;
                                  justify-content: space-around ;
                                .activity-item{
                                  
                               
                                }
                              }
                            }
                    }
              }



}

</style>