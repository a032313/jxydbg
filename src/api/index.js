import axios from "axios"
const baseUrl="/api"
export const reqAddress=(geohash)=>{  return axios.get(`${baseUrl}/position/${geohash}`)}
export const reqFoodTypes=()=>{return axios.get(`${baseUrl}/index_category`)}
export const reqShopList=(latitude,longitude)=>{return axios.get(`${baseUrl}/shops/?latitude=${latitude}&longitude=${longitude}`)}
export const reqSearchShop=(geohash,keyword)=>{ return axios.get(`${baseUrl}/search_shops?keyword=${keyword}&geohash=${geohash}`)}
export const reqPwdLogin=(name,pwd,captcha)=>{ return axios.post(`${baseUrl}/login_pwd`,{name,pwd,captcha})}
export const reqSendCode=(phone)=>{return axios.get(`${baseUrl}/sendcode?phone=${phone}`)}
export const reqSmsLogin=(phone,code)=>{ return axios.post(`${baseUrl}/login_sms`,{phone,code})}
export const reqUserInfo=()=>{return axios.get(`${baseUrl}/userinfo`)}
export const reqLogout=()=>{return axios.get(`${baseUrl}/logout`)}
export const reqShopInfo=()=>{ return axios.get("/info")}
export const reqShopRatings=()=>{ return axios.get("/ratings")}
export const reqShopGoods=()=>{ return axios.get("/goods")}