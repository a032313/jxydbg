<template>
  <div class="login_container">
      <a @click="$router.back()" class="back"><i class="iconfont icon-fanhui" ></i></a>
      <div class="hd"></div>
      <div class="method">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
         

      </div>
      <form class="form-inline" @submit.prevent="login">
        <div :class="{on:loginWay}">
           
    
    <div class="input-group">
      
      <input type="text"  :disabled="isShow" class="form-control"  placeholder="手机号" v-model="phone" maxlength="11">
      <div class="input-group-addon"  v-if="isShow===false" @click="getStatus" >获取验证码</div>
      <div v-else-if="isShow===true" class="daojishi">  {{daojishi>0?`已发送(${daojishi})S`:isShow=false }}</div>
    </div>
    <input type="password" class="form-control"  placeholder="验证码" v-model="yanzhengma">
    <p>温馨提示，未注册窑洞外卖账号的手机号，登录时将自动注册，且代表，已同意用户服务协议</p>

        </div>
          <div :class="{on:!loginWay}">
            
                        
                    <input maxlength="11" type="text" class="form-control" v-model="name" placeholder="手机/邮箱/用户名">
                
             
                 <div class="relative_ele">

                    <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd" class="form-control" >
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd" class="form-control" >
                <div class="form-control switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd" >
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  
                </div>
                 </div>
               
             
                  <div class="img_ele">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha" class="form-control">
                <img class="get_verification" src="http://localhost:4000/captcha" @click="getCaptcha" ref="getImg" >
                  </div>

             
            
  
        </div>
  
  <div class="foot_ad">
<button type="submit" class="btn btn-success" >登录</button><br>
  <label >关于我们</label>
  </div>
  
</form>

  </div>
  <AlertTip :alertText="alertText" v-show="showAlert" @closeTip="closeTip"/>
</template>

<script>
import {computed, defineComponent, ref} from "vue"
import {reqSendCode, reqSmsLogin,reqPwdLogin} from "../../api/index"

import AlertTip from "../../components/AlertTip/AlertTip.vue"

export default defineComponent({
        name:"Login",
        components:{
          AlertTip
        },
        
        setup(){
          let loginWay=ref(true);
          let showPwd=ref(false);
          let phone=ref("");
          let alertText=ref("")
          let isShow=ref(false)
          let daojishi=ref(2)
          let yanzhengma=ref("")
          let name=ref("")
          let pwd=ref("")
          let captcha=ref("")
          let showAlert=ref(false)
          function alert(status,text){

              showAlert.value=status
              alertText.value=text
          }
          function closeTip(){
                showAlert.value=false
              alertText.value=""

          }
          function getCaptcha(){
             
                this.$refs.getImg.src="http://localhost:4000/captcha?time="+Date.now()
          }
         async function login(){
          
            let result;
          if(loginWay.value){
            const{truephone,phone,yanzhengma} =this
         
            if(phone===""){
                  alert(true,"手机号输入为空")
            }
            else if(!truephone){
                  alert(true,"手机号输入错误")
            }
            
            else if(!/^\d{6}$/.test(yanzhengma)){
              alert(true,"验证码必须是6位数字")
            }
            else{
             
             result=await reqSmsLogin(phone,yanzhengma)
            
            }


          }else{

              const {name,pwd,captcha} =this
              if(name===""){
                alert(true,"请输入用户名")
              }
              else if(pwd===""){
                alert(true,"请输入密码")


              }
              else if(captcha===""){
                alert(true,"请输入验证码")
              }
              else{

                  result=await reqPwdLogin(name,pwd,captcha)
                  
              }

          }
         
         if(result!==undefined){
         
          if(result.data.code===0){
              this.$store.dispatch("getUserInfo",result.data.data)
              clearInterval(this.clearId)
              
             this.$router.replace("/profile")
             
              
          }
          else{
              alert(true,result.data.msg)
              if(result.data.msg==="验证码不正确"){
               this.getCaptcha()
              }
              

          }
         }
          }
         
         async  function getStatus(){
          
             if(truephone.value){

               isShow.value=true
             }
            
           daojishi.value=30
            this.clearId=setInterval(() => {
              daojishi.value--
              if(daojishi.value<=0){
                clearInterval(this.clearId)
              }
            }, 1000);
            let result=await reqSendCode(phone.value)
            
            if(result.data.code===1){
              if(daojishi.value){
                daojishi.value=0;
                clearInterval(this.clearId)
                this.clearId=undefined
              }
            }
           
            

          }
          
          const truephone=computed(()=>{
            
            
            return /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(phone.value)

          })
                
        
          return {
            loginWay,
            showPwd,
            phone,
            truephone,
            getStatus,
            isShow,
            daojishi,
            yanzhengma,
            name,
            pwd,
            captcha,
            login,
            alertText,
            showAlert,
            closeTip,
            getCaptcha
            
          }
        }

       
         
})
</script>

<style lang="less">
    .login_container{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-image: url("/images/order.jpg");  
         background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: 100% ;
      background-position:0% -25%;
       
        .hd{
          height:14.5%;
        }
        
        .back{
            align-self: flex-start;
            text-decoration: none;
            flex: 0 0 auto;
            margin-top: 20px;
            margin-left: 10px;



        .iconfont{
           font-size: 30px;
           color: #000000;
        }
        }
        .method{
          width: 100%;
          flex: 0;
          display: flex;
          margin-top: 20px;

          align-items: flex-end;
          justify-content: space-around;
          a{
            text-decoration: none;
             height:150%;
             color: #000000;
          }

          .on{
            color: #02a774;
            border-bottom:2px solid #02a774;
            font-weight: 700;
            
      
          }
        }
        .form-inline{
          width: 90%;
          flex: 3;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;

          >div{

            display: none;
          }
          .on{
          
            width: 100%;
              height: 100%;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              font-size: 12px;
              text-align: center;
              .input-group-addon{

                color:black;
                

              }
                .daojishi{

                  position: absolute;
                  z-index: 3  ;
                  top:30%;
                  right:3%;
                  font-size: 15px;
                }

              .relative_ele{
                position:relative;
              }
              .img_ele{

                position: relative;

                .get_verification{
                  
                  height:100%;
                 
                }
              }
             
              .on{
                
                    .switch_circle{

                        transform: translateX(19px);
                        
                        background-color:#02a774 !important;
                       
                    }

                    }
                  
              .switch_button{
                    width: 40px;
                    height: 20px;
                    
                    border-radius: 10px;
                    position: absolute;
                    right:1%;
                    top:20%;
                    border:1px solid rgb(148, 144, 144);
                    

                    .switch_circle{
                        width: 20px;
                        height: 20px;
                          border-radius: 50%;
                          background-color: rgb(136, 131, 131);
                        position: absolute;
                        top:-1px;
                        left: -1px;
                        transition: transform 0.3s
                        
                    }
              }
              .get_verification{

                  position: absolute;
              top:0%;
              right: 0%;

              }
            
          
          }


         
        .foot_ad{
          flex: 2;
          display: flex;
          flex-direction: column;
          
          width: 90%;
          
            label{
              text-align: center;
            }
        }
          
        }
      
    }
</style>