// style
import '../styles/globals.css';
import '../styles/ImageGrid.css';
import '../styles/Modal.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';

//layout
import Layout from '../components/templates/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
export default MyApp;