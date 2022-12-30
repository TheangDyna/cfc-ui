import { fireStorage } from "../../services/firebase";

const deletes = async (keys) => {
  let res = "Delete succes";
  try {
    const storageRef = fireStorage.ref();
    for (const key of keys) {
      const fileRef = storageRef.child(key);
      await fileRef.delete();
    }
  } catch (error) {
    console.error(error);
  }
  return res;
};

const deleteSingle = async (key) => {
  let res = "Delete succes";
  try {
    const storageRef = fireStorage.ref();
    const fileRef = storageRef.child(key);
    await fileRef.delete();
  } catch (error) {
    console.error(error);
  }
  return res;
};

export { deletes, deleteSingle };
