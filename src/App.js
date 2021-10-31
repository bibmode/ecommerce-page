import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import NavBar from "./components/NavBar";

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
      </div>
    </ThemeProvider>
  );
}

export default App;
