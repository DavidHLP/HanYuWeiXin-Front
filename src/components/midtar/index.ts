import request from "@/components/utile/request"
import type {imageUrl} from "@/components/midtar/type"

const imageUrls:Array<imageUrl> = [
    {
        image:"http://114.132.222.183:5244/p/HLP/images/2024/05/27/66542c845bdf8.png",
        title:"今日热点"
    },
    {
        image:"http://114.132.222.183:5244/p/HLP/images/2024/05/27/66542c78e41b2.png",
        title:"学习职场"
    },
    {
        image:"http://114.132.222.183:5244/p/HLP/images/2024/05/27/66542c6d20349.png",
        title:"每日一练"
    },
    {
        image:"http://114.132.222.183:5244/p/HLP/images/2024/05/27/665429b6377ec.png",
        title:"其他功能"
    }
]

export function GetImageUrlAndTitile() {
//   return request({
//     url: "/banner",
//     method: "get"
//   })
return imageUrls;
}