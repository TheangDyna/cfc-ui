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
        if (Object.keys(newObj.student).length > 0) {
          for (const studentItem of newObj.student) {
            if (!studentItem || Object.keys(studentItem).length === 0) {
              console.log("data empty");
            } else {
              let newStudentObj = studentItem;
                if (Boolean(newStudentObj.profile)) {
                  const coverURL = await getUrl(newStudentObj.profile);
                  newStudentObj.profileUrl = coverURL;
                }
            }
          }
          newArray.push(newObj);
        }
      }
    }
    return newArray;
  }
};
export default convertPopulatePathToURLProfile;
