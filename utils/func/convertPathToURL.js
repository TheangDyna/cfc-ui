import { getUrl } from "./upload";

const convertPathToURL = async (data) => {
  if (!data || data.length === 0) {
    console.log("data empty");
  } else {
    let newArray = [];
    for (const item of data) {
      let newObj = item;
      const coverURL = await getUrl(item.coverName);
      newObj.coverUrl = coverURL;
      newArray.push(newObj);
    }
    return newArray;
  }
};

export default convertPathToURL;
