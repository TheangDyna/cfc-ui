import jsCookie from "js-cookie";
import { errorToast, successToast } from "../createToast";

/**
 *
 * @param {*} url :string
 * @param {*} body :Object
 * @returns
 */
const updateDataFunc = async (url, body) => {
  const token = jsCookie.get("token_user");
  let data = {};
  try {
    if (token) {
      const authorize = JSON.parse(token);
      const res = await fetch(url, {
        method: "put",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "x-access-token": authorize,
        },
        body: JSON.stringify(body),
      });
      data = await res.json();
      if (data.message === "Success") {
        successToast("Updated");
      } else {
        errorToast("Error");
      }
    }
  } catch (error) {
    console.error(error);
    errorToast();
  }
  return data;
};

export default updateDataFunc;
