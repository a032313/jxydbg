

<template >
  <div class="search_container"> 
    <Header >
      <template v-slot:v_center>
        <span>搜索</span>

      </template>
         
    </Header>
    <div class="container">
      <input type="text" placeholder="请输入商家或美食名称" class="form-control " v-model="keyword">
      <button type="button" class="btn btn-success" @click="search">提交</button>
    </div>
    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <!--:to="'/shop?id='+item.id"-->
        <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li"
                     v-for="item in searchShops" :key="item.id" class="list_li">
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>

    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </div>
    
</template>

<script>
import { computed, defineComponent,ref,watch} from "vue"
import {useStore} from "vuex"
import Header from "../../components/Header/Header.vue"
export default defineComponent({
        name:"Search",
        components:{
          Header
        },
        setup(){
          let keyword=ref("")
          let imgBaseUrl=ref("http://cangdu.org:8001/img/")
          let noSearchShops=ref(false)
          
          function search(){
            const keyword=this.keyword.trim()
            if(keyword){
              this.$store.dispatch("searchShops",keyword)

            }


          }
          const store=useStore()
         const searchShops=computed(()=>{
           return store.state.searchShops

         })
         watch(searchShops,(newValue) => {
          
           if(!newValue.length){
             noSearchShops.value=true
           
           }
           else{
             noSearchShops.value=false
              
           }

    })


   

           

           
            return {
              keyword,
              search,
              searchShops,
              imgBaseUrl,
              noSearchShops
               
            }
        }

})
</script>

<style lang="less">
   .search_container{
     height: 100%;
     .container{
        display: flex;
          justify-content: space-between;
          margin-top: 5px;
       .form-control{
         width: 90%;
       }
     }
    
   }
</style>