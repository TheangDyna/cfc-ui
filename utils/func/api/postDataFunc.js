import jsCookie from "js-cookie";
import { errorToast, successToast } from "../createToast";

/**
 *
 * @param {*} url : String
 * @param {*} body : Object
 * @returns
 */

const postDataFunc = async (url, body) => {
  const token = jsCookie.get("token_user");
  let data = {};
  try {
    if (token) {
      const authorize = JSON.parse(token);
      const res = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "x-access-token": authorize,
        },
        body: JSON.stringify(body),
      });
      data = await res.json();
      if (data.message === "Success") {
        successToast("Success");
      } else {
        errorToast("Error");
      }
    }
  } catch (error) {
    errorToast();
  }
  return data;
};

export default postDataFunc;
