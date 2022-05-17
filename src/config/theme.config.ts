import {createTheme} from '@mui/material/styles'

// declare module '@mui/material/styles' {
//   interface Theme {}
// allow configuration using `createTheme`
//   interface ThemeOptions {
//     typography: {fontFamily: any}
//   }
// }

export const theme = createTheme({
  palette: {
    primary: {
      main: '#014a62',
    },
    secondary: {
      main: '#039be5',
    },
  },
  typography: {
    button: {
      textTransform: 'capitalize',
    },
  },
})
