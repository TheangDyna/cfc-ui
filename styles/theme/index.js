import { createTheme } from '@mui/material';
import typographyTheme from './Typography.theme';
import buttonTheme from './Button.theme';
import cardTheme from './Card.theme';
import dividerTheme from './Divider.theme';
import iconButtonTheme from './IconButton.theme';
import avatarTheme from './Avatar.theme';
import inputTheme from './Input.theme';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffa31a',
      main: '#FF9900',
      dark: '#e68a00',
      contrastText: '#3D3C42',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  components: {
    MuiButton: buttonTheme,
    MuiTypography: typographyTheme,
    MuiCard: cardTheme,
    MuiDivider: dividerTheme,
    MuiIconButton: iconButtonTheme,
    MuiAvatar: avatarTheme,
    MuiInput: inputTheme,
  }
})
export default theme;