import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import NavBar from "./components/NavBar";
import ImageSlides from "./components/ImageSlides";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { createContext, useRef, useState, useEffect, useCallback } from "react";

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

export const AppContext = createContext(null);

function App() {
  const [cart, setCart] = useState(false);
  const [initialVal, setInitialVal] = useState(0);
  const [emptyCart, setEmptyCart] = useState(true);
  const [productDetails, setProductDetails] = useState({
    originalPrice: 250,
    discount: 50,
    quantity: 0,
    name: "Fall Limited Edition Sneakers",
    productInfo:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  });

  const toggleCart = () => {
    setCart(!cart);
  };

  const cartRef = useRef(null);

  const handler = (e) => {
    if (cart && !cartRef.current?.contains(e.target)) {
      setCart(false);
    }
  };

  return (
    <ThemeProvider theme={appTheme}>
      <AppContext.Provider
        value={{
          emptyCart,
          setEmptyCart,
          toggleCart,
          productDetails,
          setProductDetails,
          setCart,
          cart,
          initialVal,
          setInitialVal,
        }}
      >
        <div className="App" onClick={handler}>
          {cart && (
            <div ref={cartRef}>
              <Cart />
            </div>
          )}
          <NavBar />
          <ImageSlides />
          <Product />
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
