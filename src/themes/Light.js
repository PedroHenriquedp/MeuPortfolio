import { createTheme } from "@mui/material/styles";
import { pink, purple } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette:{
        primary:{
            light: purple[900],
            main: purple[800],
            dark: purple[900],
            light: purple[700],
            contrastText: '#ffffff' 
        },
        secondary:{
            light:'#ff7961',
            main: '#f50057',
            dark: pink[500],
            light: pink[400],
            contrastText: '#ffffff' 
        },
        background:{
            default: '#33302E',
            paper: '#33302E',
        },
    },
})