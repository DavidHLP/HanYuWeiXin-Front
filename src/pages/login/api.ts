import {request} from "@/components/utile/request";
import type { LoginUser } from "@/pages/login/type";
const BaseUrl = 'api/';
export const loginTo = (loginform:LoginUser)=>{
    return request({
        url: BaseUrl+'login'
            +"?username="+loginform.username
            +'&password='+loginform.password,
        method: 'GET',
    });
};