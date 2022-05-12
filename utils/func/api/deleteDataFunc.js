import jsCookie from "js-cookie";

async function deleteDataFunc(url) {
  const token = jsCookie.get("token_user");
  let data = {};
  try {
    if (token) {
      const authorize = JSON.parse(token || "{}");
      const res = await fetch(url, {
        method: "delete",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "x-access-token": authorize.accessToken,
        },
      });
      data = await res.json();
    }
  } catch (error) {
    console.error(error)
  }
  return data;
}
export default deleteDataFunc;
