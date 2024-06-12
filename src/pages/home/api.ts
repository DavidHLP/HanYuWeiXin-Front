import {request} from "@/components/utile/request";

const BaseUrl = 'images/';

export const GetImageUrlAndTitle = (parentId:number) => {
  return request({
    url: BaseUrl+"list?parentId=" + parentId,
    method: 'GET'
  });
};
