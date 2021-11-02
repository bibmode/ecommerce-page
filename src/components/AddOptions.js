import { Button, Grid } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import MyButton from "./MyButton";
import { AppContext } from "../App";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "100% !important",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "0 !important",
    },
  },
  quantityBtn: {
    fontWeight: "700 !important",
    fontSize: "1.8rem !important",
    padding: "0 !important",
  },
  quantityContainer: {
    backgroundColor: "hsl(223, 64%, 98%)",
    borderRadius: 10,
    marginBottom: "1rem !important",
    paddingLeft: "0 !important",
    [theme.breakpoints.up("lg")]: {
      marginBottom: "0 !important",
    },
  },
  numberDisplay: {
    marginBlock: "0.5rem !important",
  },
}));

const AddOptions = () => {
  const classes = useStyle();
  // use context
  const { initialVal, setInitialVal } = useContext(AppContext);

  const handleQuantity = (operation) => {
    operation
      ? setInitialVal(initialVal + 1)
      : setInitialVal(initialVal > 0 ? initialVal - 1 : 0);
  };

  return (
    <Grid
      className={classes.container}
      container
      alignItems="flex-start"
      columnSpacing={{ lg: 2 }}
    >
      <Grid
        className={classes.quantityContainer}
        item
        xs={12}
        lg={4}
        alignItems="center"
        display="flex"
        justifyContent="space-between"
      >
        <Button
          className={classes.quantityBtn}
          onClick={() => handleQuantity(false)}
        >
          -
        </Button>
        <h3 className={classes.numberDisplay}>{initialVal}</h3>
        <Button
          className={classes.quantityBtn}
          onClick={() => handleQuantity(true)}
        >
          +
        </Button>
      </Grid>
      <Grid item xs={12} lg={8} mb={{ xs: 7, md: 0 }}>
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
