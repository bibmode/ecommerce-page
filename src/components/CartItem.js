import { Box } from "@mui/system";

//material styling
import { makeStyles } from "@mui/styles";
import { Grid, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../App";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
  },
  image: {
    width: "100%",
    borderRadius: 5,
  },
  info: {
    display: "flex",
    flexWrap: "wrap",
  },
  itemName: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  delete: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
  },
  icon: {
    marginRight: "-7px !important",
  },
}));

const CartItem = () => {
  const classes = useStyles();

  const { setEmptyCart, productDetails, setProductDetails } =
    useContext(AppContext);

  const discountedPrice =
    productDetails.originalPrice * (productDetails.discount / 100);

  const totalPrice = discountedPrice * productDetails.quantity;

  const handleDelete = () => {
    setProductDetails({ ...productDetails, quantity: 0 });
    setEmptyCart(true);
  };

  return (
    <Box className={classes.box} mb={3}>
      <Grid
        container
        alignItems="center"
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
      >
        <Grid item xs={2.5}>
          <img
            className={classes.image}
            src="images/image-product-1.jpg"
            alt="product thumbnail"
          />
        </Grid>
        <Grid className={classes.info} item xs={7}>
          <Typography className={classes.itemName} color="GrayText">
            {productDetails.name}
          </Typography>
          <Typography mr={1} color="GrayText">
            {`$${discountedPrice.toFixed(2)} x ${productDetails.quantity}`}
          </Typography>
          <Typography fontWeight="700">
            {`$${totalPrice.toFixed(2)}`}
          </Typography>
        </Grid>
        <Grid className={classes.delete} item xs={2.5}>
          <IconButton onClick={handleDelete} className={classes.icon}>
            <img src="images/icon-delete.svg" alt="delete item" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartItem;
