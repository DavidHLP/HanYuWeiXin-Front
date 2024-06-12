import {uploadFile} from "@/components/utile/request";

const BaseUrl = "images/";

export const uploadAvatar = async (filePath: string) => {
   return uploadFile({
    url: BaseUrl+"fileUpLoad",
    filePath,
    name: 'avatar', 
    formData: {
    }
   });
  };