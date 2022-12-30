import { getUrls } from "./upload";

const convertPathToURLs = async (data) => {
  if (!data || data.length === 0) {
    console.log("data empty");
  } else {
    let newArray = [];
    for (const item of data) {
      let newObj = item;
      const coverURL = await getUrls(item.coverName);
      newObj.coverUrls = coverURL;
      newArray.push(newObj);
    }
    return newArray;
  }
};

export default convertPathToURLs;
