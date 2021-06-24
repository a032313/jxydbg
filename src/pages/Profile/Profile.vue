

<template >
  <div class="profile_container"> 
    <Header >
      <template v-slot:v_center>
        <span>我的</span>

      </template>
         
    </Header>
    <div class="one">
      <div class="touxiang">
        <img src="/images/banner3.jpg" alt="">
      </div>
      <div class="one_center">
         <div  v-if="!$store.state.userinfo._id">
         <router-link to="/login" style="color:red">登录/注册</router-link><br><br>
     
      </div>
      <div v-else-if="$store.getters.getUserName">
          <p>{{'用户名:'+$store.getters.getUserName||'已登录'}}</p><br>
      
     
      </div>
       <div v-else-if="$store.getters.getPhone">
          <p>已登录</p><br>
      </div>
     
      <i class="iconfont icon-yinzhangrenzheng"></i> <span>{{$store.getters.getPhone||'暂无绑定手机号'}}</span>
      </div>
     


     
      <h1>></h1>

    </div>
    <div class="two">
      <div v-for="item in temp" :key="item.id">
        <span :style="{color:item.color}">{{item.oneValue}}{{item.danwei}}</span>
        <span>{{item.twoValue}}</span>
        
      </div>
      

    </div>
    <div class="three">
      <ul>
        <li v-for="item in items" :key="item.id">
          <i :class="item.class" :style="{color:item.color}"></i>
            {{item.name}}
        </li>
      </ul>


    </div>
    <button type="button" v-if="$store.state.userinfo._id" class="btn btn-danger " @click="logout(1)" ref="back_btn" >退出登录</button>
   <div class="modal fade" ref="modal_test">
  <div class="modal-dialog"  ref="modal_dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" @click="logout(4)"><span >&times;</span></button>
        <h4 class="modal-title">温馨提示</h4>
      </div>
      <div class="modal-body">
        <p>确定退出登录么？</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default"  @click="logout(2)">关闭</button>
        <button type="button" class="btn btn-primary" @click="logout(3)">确定</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

    
   </div>
</template>

<script>
import {defineComponent,reactive} from "vue"



import Header from "../../components/Header/Header.vue"
export default defineComponent({
        name:"Profile",
        components:{
          Header,
         
        },
        setup(){
           
           
            function logout(isClose) {
              if(isClose===1){
                   
        this.$refs.modal_test.style="display:block;opacity:1"
         this.$refs.modal_dialog.style="top:30%"

              }else if(isClose===2||isClose===4){
                 this.$refs.modal_test.style="display:none;opacity:0"
              }
              else if(isClose===3){
                   this.$refs.modal_test.style="display:none;opacity:0"
                  this.$store.dispatch("userLogout")
                  this.$refs.back_btn.style="display:none;opacity:0"
                  this.$router.replace("/profile")
              }
              
            
          
           
            
             

            

              
            }
         
            let temp=reactive([
              {
                id:1,
                oneValue:0.12,
                danwei:"元",
                color:"red",
                twoValue:"我的余额"
              },{
                 id:2,
                oneValue:0,
                danwei:"个",
                color:"green",
                twoValue:"我的优惠"
              },{
                 id:3,
                oneValue:0,
                danwei:"分",
                color:"blue",
                twoValue:"我的积分"
              }
            ])
            
           let items=reactive([
             {
               id:1,
               name:"我的订单",
               color:"red",
               class:"iconfont icon-dingdan",

             },{
               id:2,
               name:"积分商城",
               color:"orange",
               class:"iconfont icon-maijiagouwuche",

             },{
                id:3,
               name:"外卖会员卡",
               color:"yellow",
               class:"iconfont icon-shenfenrenzheng",
             },{
               id:4,
               name:"服务中心",
               color:"blue",
               class:"iconfont icon-wuliu",
             }
           ])
            return {
               temp,
               items,
               logout,
               
              
            }
        }

})
</script>

<style lang="less">
   .profile_container{
     height: 100%;
      .one{
          background-color: #0aa344;
          height:15%;
           display: flex;
           justify-content: space-around;
           align-items: center;
            color:#ffffff;
        .touxiang{
          border-radius: 50%;
          overflow: hidden;

          
          img{
          width: 80px;
          height: 80px;
          }
        }
       
      }
      .two{
        display: flex;
        height: 15%;
        justify-content:space-around;
        
        div{
          flex:1 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content:center;

          span{
              font-size: 20px;
              margin: 5px auto;
          }
        }

      }
      .three{
          height:40%;

          ul{
            
            display: flex;
            flex-direction: column;
         
            
            li{
              flex: 1 0 60px;
              display: flex;
              align-items: center;
              font-size: 15px;
              i{
                font-size: 35px;
              }
            }
          }
      }
      .btn-danger{
        width: 90%;
        position: relative;
        left:5%
      }
     
     
     
   }
</style>