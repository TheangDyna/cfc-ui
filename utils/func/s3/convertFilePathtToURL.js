import { Storage } from "aws-amplify";
let isArray = function(a) {
    return (!!a) && (a.constructor === Array);
};
const convertFilePathToURL = async(data) => {
    let urls= [];
    if(!data || Object.keys(data).length===0){
        console.log('data empty')
    }
    if(isArray(data)){
        for(const item of data){
            if(Boolean(item.coverFileName)&&Boolean(item.fileName)){
                const coverURL= await Storage.get(item.coverFileName);
                const videoURL= await Storage.get(item.fileName);
                urls.push({...item,coverFileNamePath:item.coverFileName,fileNamePath:item.fileName,coverFileName:coverURL,fileName:videoURL});
            }else if(Boolean(item.coverFileName)){
                const coverURL= await Storage.get(item.coverFileName);
                urls.push({...item,coverFileName:coverURL,coverFileNamePath:item.coverFileName});
            }else if(Boolean(item.fileName)){
                const videoURL= await Storage.get(item.fileName);
                urls.push({...item,fileName:videoURL,fileNamePath:item.fileName});
            }else{
                // alert("Data isn't support!")
            }
        }
    }else{
        let newObj=data;
        if(Boolean(data.coverFileName)&&Boolean(data.fileName)){
            const coverURL= await Storage.get(data.coverFileName);
            const videoURL= await Storage.get(data.fileName);
            newObj.fileName= videoURL;
            newObj.coverFileName= coverURL;
            newObj.fileNamePath=data.fileName;
            newObj.coverFileName= data.coverFileName
        }else if(Boolean(data.coverFileName)){
            const coverURL= await Storage.get(item.coverFileName);
            
            newObj.coverFileName= coverURL;
            newObj.coverFileNamePath= item.coverFileName
        }else if(Boolean(data.fileName)){
            const videoURL= await Storage.get(item.fileName);
            newObj.fileName= videoURL;
            newObj.fileNamePath= item.fileName
           
        }else{
            // alert("Data isn't support!")
        }
        return newObj;
    }
    
    return urls;
}
 
export default convertFilePathToURL;