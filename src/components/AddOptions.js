import { Button, Grid } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import MyButton from "./MyButton";
import { AppContext } from "../App";

const useStyle = makeStyles((theme) => ({
  quantityBtn: {
    fontWeight: "700 !important",
    fontSize: "1.8rem !important",
  },
  quantityContainer: {
    backgroundColor: "hsl(223, 64%, 98%)",
    borderRadius: 10,
  },
}));

const AddOptions = () => {
  const classes = useStyle();
  // use context
  const { productDetails, setProductDetails, setEmptyCart } =
    useContext(AppContext);

  const handleQuantity = (operation) => {
    operation
      ? setProductDetails({
          ...productDetails,
          quantity: productDetails.quantity + 1,
        })
      : setProductDetails(
          productDetails.quantity !== 0
            ? {
                ...productDetails,
                quantity: productDetails.quantity - 1,
              }
            : {
                ...productDetails,
                quantity: 0,
              }
        );
  };

  return (
    <Grid container>
      <Grid
        className={classes.quantityContainer}
        item
        xs={12}
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        mb={2}
        mt={3}
      >
        <Button
          className={classes.quantityBtn}
          onClick={() => handleQuantity(false)}
        >
          -
        </Button>
        <h3>{productDetails.quantity}</h3>
        <Button
          className={classes.quantityBtn}
          onClick={() => handleQuantity(true)}
        >
          +
        </Button>
      </Grid>
      <Grid item xs={12} mb={7}>
        <MyButton
          btnFunction="addItem"
          shadow={false}
          label="Add to cart"
          icon={<ShoppingCartOutlinedIcon />}
        />
      </Grid>
    </Grid>
  );
};

export default AddOptions;
