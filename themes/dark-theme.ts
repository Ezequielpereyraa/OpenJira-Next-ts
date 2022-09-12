import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
 palette: {
  mode: 'dark',

 },
 components: {
  MuiAppBar: {
   defaultProps: {},
   styleOverrides: {
    root: {
     backgroundColor: '#4a18c',
    }
   }
  }
 }
})