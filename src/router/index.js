import { createRouter, createWebHistory } from "vue-router"
const Msite =()=>import( "../pages/Msite/Msite.vue") 
const Order = ()=>import("../pages/Order/Order.vue")  
const Profile =()=>import( "../pages/Profile/Profile.vue") 
const Search = ()=>import( "../pages/Search/Search.vue") 
const Login = ()=>import("../pages/Login/Login.vue")  
const Shop =()=>import("../pages/Shop/Shop.vue")  
const Info =()=>import("../pages/Shop/Info/Info.vue")  
const Goods =()=>import( "../pages/Shop/Goods/Goods.vue") 
const Ratings =()=>import("../pages/Shop/Ratings/Ratings.vue")   



export default createRouter({
   history:createWebHistory(),

    routes:[
        {
            path:"/msite",
            component:Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/order",
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/profile",
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/search",
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:"/login",
            component:Login
        },

        {
            path:"/",
            redirect:"/msite"
        },
        {
            path:"/shop",
            component:Shop,
            children:[
                {
                    path:"info",
                    component:Info,
                },
                {
                    path:"goods",
                    component:Goods
                },
                {
                    path:"ratings",
                    component:Ratings
                },
                {
                    path:"",
                    component:Goods
            }
            ]


        },

    ]
})