// import { customToast } from "./../../../components/atoms/toasts";

/**
 *
 * @param {*} url : String
 * @param {*} body : Object
 * @returns
 */
const unauthPostDataFunc = async (url, body) => {
  let data = {};
  try {
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(body),
    });
    data = await res.json();
    console.log(data);
    // customToast(data.statusCode, data.message);
  } catch (error) {
    console.error(error);
    // customToast(undefined, "Internal Server Error.");
  }
  return data;
};

export default unauthPostDataFunc;
