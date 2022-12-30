// style
import "../styles/globals.css";
import "../styles/ImageGrid.css";
import "../styles/Modal.css";
import "react-multi-carousel/lib/styles.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { parseCookies, destroyCookie } from "nookies";
import axios from "axios";
import convertPathToURLProfile from "../utils/func/convertPathToURLProfile";
import { AuthContextProvider } from "../context/authContext";
//layout
import Layout from "../components/templates/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Layout user={pageProps.user}>
            <Component {...pageProps} user={pageProps.user} />
          </Layout>
        </AuthContextProvider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const token = parseCookies(ctx)?.token_user;
  let authorize;

  try {
    authorize = JSON.parse(token);
  } catch (err) {
    destroyCookie(ctx, "token_user");
  }

  if (authorize) {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/getCurrentUser`,
        {
          headers: {
            "x-access-token": authorize,
          },
        }
      );

      let user = res.data.user;
      pageProps.user = await convertPathToURLProfile(user);
    } catch (err) {
      destroyCookie(ctx, "token_user");
    }
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, token: authorize };
};

export default MyApp;
