import jsCookie from "js-cookie";
import { errorToast, successToast } from "../createToast";
// import { customToast } from "./../../../components/atoms/toasts";
async function deleteDataFunc(url) {
  const token = jsCookie.get("token_user");
  let data = {};
  try {
    if (token) {
      const authorize = JSON.parse(token);
      const res = await fetch(url, {
        method: "delete",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "x-access-token": authorize,
        },
      });
      data = await res.json();
      if (data.message === "Success") {
        successToast("Deleted");
      } else {
        errorToast("Error");
      }
    }
  } catch (error) {
    errorToast();
  }
  return data;
}
export default deleteDataFunc;
