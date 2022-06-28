import { createTheme } from "@mui/material";

const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background: grey;
          font-family: 'Source Sans Pro', sans-serif;
        }
      `,
    },
  },
});

export default DarkTheme;