import jsCookie from "js-cookie";

const fetcher = async (url) => {
  const token = jsCookie.get("token_user");
  let data = {};
  if (token) {
    const authorize = JSON.parse(token || "{}");
    const res = await fetch(url, {
      headers: {
        "x-access-token": authorize.accessToken,
      },
    });
    data = res.json();
  }
  return data;
};

export default fetcher;
