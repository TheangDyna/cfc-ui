import { getUrls, getUrl } from "./upload";

const convertPathToURLsNews = async (data) => {
  if (!data || data.length === 0) {
    console.log("data empty");
  } else {
    let newArray = [];
    for (const item of data) {
      let newObj = item;
      const coverURL = await getUrls(item.coverName);
      newObj.coverUrls = coverURL;
      if(newObj.comment){
        for (const commentItem of newObj.comment){
          if (!commentItem || Object.keys(commentItem).length === 0) {
            console.log("data empty");
          } else {
            let newCommentObj = commentItem;
            if (Object.keys(newCommentObj.userId).length > 0) {
              if (Boolean(newCommentObj.userId.profile)) {
                    const coverURL = await getUrl(newCommentObj.userId.profile);
                    newCommentObj.userId.profileUrl = coverURL;
                  } 
            }
          }
        }
      }
      newArray.push(newObj);
    }
    return newArray;
  }
};

export default convertPathToURLsNews;
