import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette: {
      mode: 'light',
      secondary: {
        main: '#19857b'
      },
      error: {
        main: red.A400
      }
    },
    components: {}
  })