import jsCookie from "js-cookie";
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
      const authorize = JSON.parse(token || "{}");
      const res = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "x-access-token": authorize.accessToken,
        },
        body: JSON.stringify(body),
      });
      data = await res.json();
    }
  } catch (error) {
    console.error(error);
  }
  return data;
};

export default postDataFunc;
