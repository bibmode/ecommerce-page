import { Button, Grid, Typography } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { indigo } from "@mui/material/colors";

const useStyle = makeStyles((theme) => ({
  addBtn: {
    color: "#fff !important",
    textTransform: "none !important",
    fontWeight: "700 !important",
    paddingBlock: "0.8rem !important",
    borderRadius: "0.6rem !important",
    boxShadow: "0 1rem 2rem #ffe6cc !important",
  },
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
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (operation) => {
    operation
      ? setQuantity(quantity + 1)
      : setQuantity(quantity === 0 ? quantity : quantity - 1);
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
        <h3>{quantity}</h3>
        <Button
          className={classes.quantityBtn}
          onClick={() => handleQuantity(true)}
        >
          +
        </Button>
      </Grid>
      <Grid item xs={12} mb={7}>
        <Button
          className={classes.addBtn}
          variant="contained"
          fullWidth
          startIcon={<ShoppingCartOutlinedIcon />}
        >
          Add to cart
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddOptions;
