import { errorToast, successToast } from "./createToast";

const copyFunc = (text) => {
  try {
    navigator.clipboard.writeText(text);
    successToast("Copied");
  } catch {
    errorToast();
  }
};

export default copyFunc;
