import { Storage } from "aws-amplify";
async function uploadFile(path,file){
    let res;
    if(file){
        try{
             res= await Storage.put(
                 `${path}/${file.name}`,file,
                {
                    level:'private',
                    contentType:file.type,
                    progressCallback(progress) {
                        console.log(
                          `Uploaded: ${parseInt((progress.loaded / progress.total) * 100)}%`
                        );
                      },
                })
             
        }catch(e){
            console.error(e);
        }
        return res;
       

    }else{
        alert('Please select aleast one file.')
    }
    
}
export default uploadFile;