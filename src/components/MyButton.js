import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { AppContext } from "../App";

const useStyle = makeStyles((theme) => ({
  btn: {
    color: "#fff !important",
    textTransform: "none !important",
    fontWeight: "700 !important",
    paddingBlock: "0.8rem !important",
    borderRadius: "0.6rem !important",
    boxShadow: (props) => props.elevate,
  },
}));

const MyButton = ({ label, icon, shadow, btnFunction }) => {
  const props = {
    elevate: `${!shadow ? "0 1rem 2rem #ffe6cc !important" : "0"}`,
  };

  const classes = useStyle(props);
  const {
    setEmptyCart,
    productDetails,
    setProductDetails,
    initialVal,
    setInitialVal,
  } = useContext(AppContext);

  const handleAddToCart = () => {
    setProductDetails({
      ...productDetails,
      quantity: initialVal,
    });

    setEmptyCart(false);
    setInitialVal(0);
  };

  const btnCustomActions = () => {
    if (btnFunction === "addItem" && initialVal > 0) {
      setEmptyCart(false);
      handleAddToCart();
    }

    if (btnFunction === "checkout") {
      setEmptyCart(true);
    }
  };

  return (
    <Button
      onClick={btnCustomActions}
      className={classes.btn}
      variant="contained"
      fullWidth
      startIcon={icon}
      disableElevation={shadow}
    >
      {label}
    </Button>
  );
};

export default MyButton;
