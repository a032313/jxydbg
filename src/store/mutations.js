import * as types from "./mutations_types"

export default{


    [types.RECEIVE_ADDRESS] (state, payload) {
     
        state.address=payload

      
    },
    [types.RECEIVE_CATEGORYS] (state, payload) {
     
      state.categorys=payload
    },
  
    [types.RECEIVE_SHOPS] (state, payload) {
    
     state.shops=payload
    },
    [types.RECEIVE_USERINFO](state,payload){
    
      state.userinfo=payload
    },
    [types.UNSET_USERINFO](state){
    
      state.userinfo={}
    },
    [types.RECEIVE_GOODS] (state, payload) {
     
      state.goods=payload
    },
  
    [types.RECEIVE_RATINGS] (state, payload) {
    
     state.ratings=payload
    },
    [types.RECEIVE_INFO](state,payload){
    
      state.info=payload
    },
    [types.DECREMENT_COUNT](state,food){
      if(food.count){

        food.count--
        if(food.count===0){
          state.cartFoods.splice(state.cartFoods.indexOf(food),1)
        }
      }
      
    },
   
    [types.INCREMENT_COUNT](state,food){
      if(!food.count){
         food.count=1
         state.cartFoods.push(food)
      }else{
        food.count++
      }
      
     
    },
    [types.EMPTY_COUNT](state){
      state.cartFoods.forEach(food=>food.count=0);
      state.cartFoods=[]
    },
    [types.RECEIVE_SEARCH_SHOPS] (state, payload) {
    
      state.searchShops=payload
     },
   
   
}