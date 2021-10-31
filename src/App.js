import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import NavBar from "./components/NavBar";
import ImageSlides from "./components/ImageSlides";

const appTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
  typography: {
    fontFamily: ["Kumbh Sans", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
        <NavBar />
        <ImageSlides />
      </div>
    </ThemeProvider>
  );
}

export default App;
