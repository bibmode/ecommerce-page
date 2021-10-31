import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import NavBar from "./components/NavBar";
import ImageSlides from "./components/ImageSlides";
import Product from "./components/Product";

const appTheme = createTheme({
  palette: {
    primary: {
      main: orange[700],
    },
  },
  typography: {
    fontFamily: ["Kumbh Sans", "sans-serif"].join(","),
    h5: {
      fontWeight: 700,
      fontSize: "1.8rem",
      lineHeight: "2.2rem",
    },
    h6: {
      fontWeight: 700,
      fontSize: "0.8rem",
      letterSpacing: "0.1em",
    },
    body1: {
      fontWeight: 500,
      fontSize: "0.9rem",
      lineHeight: "1.5rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
        <NavBar />
        <ImageSlides />
        <Product />
      </div>
    </ThemeProvider>
  );
}

export default App;
