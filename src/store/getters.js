export default{
    getAddress(state){
        return state.address.address

    },
    getCategorys(state){

        return state.categorys
    },
    getPhone(state){
              
        if(state.userinfo!==undefined){
                
            return state.userinfo.phone

        }
        else{
            return "暂无绑定手机号"
        }
    },
    getUserName(state){
        if(state.userinfo!==undefined){
            return state.userinfo.name
        }
        else{
            return "登录/注册"
        }
                
    },
    totalCount(state){
        
            return state.cartFoods.reduce((preTotal,food)=>preTotal+food.count,0)
    },
    totalPrice(state){
     
        return state.cartFoods.reduce((preTotal,food)=>preTotal+food.count*food.price,0)
    },
    positiveSize(state){
        return state.ratings.reduce((preTotal,rating)=>preTotal+(rating.rateType===0?1:0),0)

    }
}