import axios from "axios";
import Cookies from "js-cookie";
import { setCookie } from "nookies";

const registerUser = async (
  firstName,
  lastName,
  email,
  password,
  setErrorMessage,
  setIsLoading
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
      {
        firstName,
        lastName,
        email,
        password,
      }
    );
    setToken(res.data.token);
  } catch (error) {
    setErrorMessage(error.response.data.message);
  }
  setIsLoading(false);
};

const loginUser = async (email, password, setErrorMessage, setIsLoading) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
      { email, password }
    );
    setToken(res.data.token);
  } catch (err) {
    setErrorMessage(err.response.data.message);
  }
  setIsLoading(false);
};

const setToken = (token) => {
  if (token) {
    setCookie(null, "token_user", token);
    Cookies.set("token_user", JSON.stringify(token));
  }
  if (typeof window !== "undefined") {
    history.back();
  }
};

const logoutUser = () => {
  Cookies.remove("token_user");
  window.location.href = "/";
};

export { registerUser, loginUser, logoutUser };
