import { Storage } from "aws-amplify";

const getFileURL = async (key) => {
  const url = await Storage.get(key);
  return url;
};

export default getFileURL;
