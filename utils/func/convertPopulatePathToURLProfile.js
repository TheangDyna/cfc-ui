import { getUrl } from "./upload";

const convertPopulatePathToURLProfile = async (data) => {
  if (!data || data.length === 0) {
    console.log("data empty");
  } else {
    let newArray = [];
    for (const item of data) {
      if (!item || Object.keys(item).length === 0) {
        console.log("data empty");
      } else {
        let newObj = item;
        if (Object.keys(newObj.createBy).length > 0) {
          if (Boolean(newObj.createBy.profile)) {
                const coverURL = await getUrl(newObj.createBy.profile);
                newObj.createBy.profileUrl = coverURL;
                if(newObj.answer){
                  for (const answerItem of newObj.answer){
                    if (!answerItem || Object.keys(answerItem).length === 0) {
                      console.log("data empty");
                    } else {
                      let newAnswerObj = answerItem;
                      if (Object.keys(newAnswerObj.userId).length > 0) {
                        if (Boolean(newAnswerObj.userId.profile)) {
                              const coverURL = await getUrl(newAnswerObj.userId.profile);
                              newAnswerObj.userId.profileUrl = coverURL;
                            } 
                      }
                    }
                  }
                }
                newArray.push(newObj);
              } else {
                console.log("Data isn't support!");
          }
        }
      }
    }
    return newArray;
  }
};
export default convertPopulatePathToURLProfile;
