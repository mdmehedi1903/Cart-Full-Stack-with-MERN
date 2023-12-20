import axios from "axios";
import { getToken, setEmail, setToken } from './../utility/TokenHelper';
const BASEURL = "http://localhost:5050/api/v1";
export async function ProductListRequest(){
    try{
        let res = await axios.get(BASEURL+`/product-list`);
        return res.data['data'];
    }catch(e){
        return []
    }
}



export async function UserLogin(postBdoy){
    try{
        let res = await axios.post(BASEURL+`/user-login`, postBdoy);
        setEmail(postBdoy['useremail'])
        return res.data['status'];
    }catch(e){
        return false;
    }
}


export async function VerifyLogin(postBdoy){
    try{
        let res = await axios.post(BASEURL+`/verify-login`, postBdoy);
        if(res.data['status']==="Success"){
            setToken(res.data['msg'])
            return res.data['status']; 
        }
        return res.data['status'];
    }catch(e){
        return false;
    }
}


let config = {
    headers: {
        token: getToken(),
    }
}
export async function CartListRequest() {
    let res = await axios.get(BASEURL+`/cart-list`, config);
    return res.data['data'];
}


export async function CreateCartRequest(productid) {
    let res = await axios.get(BASEURL+`/create-cart/${productid}`, config);
    return res.data['status'];
}


export async function RemoveCartRequest(productid) {
    let res = await axios.get(BASEURL+`/remove-cart/${productid}`, config);
    return res.data['status'];
}