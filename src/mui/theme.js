import { createTheme } from "@mui/material";

const theme = createTheme({

    palette: {
        primary: {
            main: "#B8001F"
        },
        secondary: {
            main: "#384B70"
        },
    },
    typography: {
        fontFamily: `"YekanBakh" , "Roboto" , "Arial"`,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontWeightHeavy: 800,
        fontWeightFat: 900,
    },
    direction: "rtl"
})

export default theme