import * as types from "../api"
import * as types2 from "./mutations_types"
export default{

    async getAddress({commit},state){
        
        const geohash=state.latitude+","+state.longitude
       
        let result=await types.reqAddress(geohash)
        
        if(result.data.code===0){
            const {data}=result.data
          
            commit(types2.RECEIVE_ADDRESS,data)

        }
        else{
            console.log("失败")
        }
    },
    async getFoodTypes({commit}){

        let result=await types.reqFoodTypes()
        
        if(result.data.code===0){
            const {data}=result.data
            
            commit(types2.RECEIVE_CATEGORYS,data)

        }
        else{
            console.log("失败")
        }
        
    },
    async getShops({commit},state){
        const {latitude,longitude} =state
       
        let result=await types.reqShopList(latitude,longitude)
       
        if(result.data.code===0){
            const {data}=result.data
        
            commit(types2.RECEIVE_SHOPS,data)

        }
        else{
            console.log("失败")
        }
        
    },
    getUserInfo({commit},state){

            commit(types2.RECEIVE_USERINFO,state)

    },
    async getHuiHua({commit}){

        const result=await types.reqUserInfo()
               
        if(result.data.code===0){
                   
            const userInfo=result.data.data;
           
            commit(types2.RECEIVE_USERINFO,userInfo)
        }
      

    },
    async userLogout({commit}){
        
            const result=await types.reqLogout()
            if(result.data.code===0){
                
                commit(types2.UNSET_USERINFO)
            }
    },
    async getShopInfo({commit}){

        const result=await types.reqShopInfo()

        if(result.data.code===0){
            const ShopInfo=result.data.data;
            
            commit(types2.RECEIVE_INFO,ShopInfo)
        }
},
async getShopRatings({commit},callBack){
        
    const result=await types.reqShopRatings()
    if(result.data.code===0){
        const ShopRatings=result.data.data;
        commit(types2.RECEIVE_RATINGS,ShopRatings)
        callBack&& callBack()
    }
},
async getShopGoods({commit},callBack){
       
    const result=await types.reqShopGoods()
    if(result.data.code===0){

         const shopGoods=result.data.data;
        commit(types2.RECEIVE_GOODS,shopGoods)
        callBack&& callBack()
    }
},
  updateCount({commit},{bool,food}){
        if(bool===false){
            
            commit(types2.DECREMENT_COUNT,food)
        }
        else{
           
            commit(types2.INCREMENT_COUNT,food)
        }


  },
  delCount({commit}){
      commit(types2.EMPTY_COUNT)
  },
  async searchShops({commit,state},keyword){
      const geohash=state.latitude+","+state.longitude
       
    const result=await types.reqSearchShop(geohash,keyword)
    if(result.data.code===0){
        const searchShops=result.data.data
        
        commit(types2.RECEIVE_SEARCH_SHOPS,searchShops)
    }
},
   

}