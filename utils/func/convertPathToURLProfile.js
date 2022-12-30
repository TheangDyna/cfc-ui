import { getUrl } from "./upload";

const convertPathToURLProfile = async (data) => {
  if (!data || Object.keys(data).length === 0) {
    console.log("data empty");
  } else {
    let newObj = data;
    if (Object.keys(newObj).length > 0) {
      if (Boolean(data.profile)) {
        const coverURL = await getUrl(data.profile);
        newObj.profileUrl = coverURL;
      } else {
        console.log("Data isn't support!");
      }
    }
    return newObj;
  }
};

export default convertPathToURLProfile;
