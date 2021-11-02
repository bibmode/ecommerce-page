import { Button, Grid } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
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
  const {
    productDetails,
    setProductDetails,
    setEmptyCart,
    initialVal,
    setInitialVal,
  } = useContext(AppContext);

  const handleQuantity = (operation) => {
    operation
      ? setInitialVal(initialVal + 1)
      : setInitialVal(initialVal !== 0 ? initialVal - 1 : 0);
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
        <h3>{initialVal}</h3>
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
