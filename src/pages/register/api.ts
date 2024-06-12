import {request} from "@/components/utile/request";
import type { RegisterUser } from "@/pages/register/type";
const BaseUrl = 'api/';
export const RegisterTo = (registerUser:RegisterUser)=>{
    return request({
        url: BaseUrl+'register',
        method: 'POST',
        data: registerUser
    });
};