import { fireStorage } from "../../services/firebase";
const { v4: uuidv4 } = require("uuid");

const upload = async (path, file) => {
  let key;
  const storageRef = await fireStorage.ref(`${path}/`);
  let fileName = uuidv4();
  const fileRef = await storageRef.child(fileName);
  try {
    await fileRef.put(file);
    key = path + fileName;
  } catch (error) {
    console.log(error);
  }
  console.log(key);
  return key;
};

const uploadUpdate  = async (path, file) => {
  let key;
  const storageRef = await fireStorage.ref();
  const fileRef = await storageRef.child(path);
  try {
    await fileRef.put(file);
    key = path;
  } catch (error) {
    console.log(error);
  }
  console.log(key);
  return key;
};

const uploadProfile = async (path, file) => {
  let key = "";
  const storageRef = await fireStorage.ref();
  const fileRef = await storageRef.child(path);
  try {
    await fileRef.put(file);
    key = await path;
    return key;
  } catch (error) {
    console.error(error);
  }
  return key;
};

const uploads = async (path, files) => {
  let keys = [];
  const storageRef = await fireStorage.ref(`${path}/`);
  try {
    for (const file of files) {
      let fileName = uuidv4();
      const fileRef = await storageRef.child(fileName);
      await fileRef.put(file);
      keys.push(path + fileName);
    }
  } catch (error) {
    console.log(error);
  }
  return keys;
};

const getUrl = async (key) => {
  let url;
  const storageRef = fireStorage.ref();
  const fileRef = storageRef.child(key);
  try {
    url = await fileRef.getDownloadURL();
  } catch (error) {
    console.error(error);
  }

  return url;
};

const getUrls = async (keys) => {
  let urls = [];
  try {
    for (const key of keys) {
      const storageRef = fireStorage.ref();
      const fileRef = storageRef.child(key);
      const fileUrl = await fileRef.getDownloadURL();
      urls.push(fileUrl);
    }
  } catch (error) {
    console.error(error);
  }
  return urls;
};

export { uploadProfile, upload, uploadUpdate, uploads, getUrl, getUrls };
