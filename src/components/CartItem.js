import { Box } from "@mui/system";

//material styling
import { makeStyles } from "@mui/styles";
import { Grid, IconButton, Typography } from "@mui/material";

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

  return (
    <Box className={classes.box}>
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
            Autumn Limited Edition Sneakers
          </Typography>
          <Typography mr={1} color="GrayText">
            $125.00 x 3
          </Typography>
          <Typography fontWeight="700">$375.00</Typography>
        </Grid>
        <Grid className={classes.delete} item xs={2.5}>
          <IconButton className={classes.icon}>
            <img src="images/icon-delete.svg" alt="delete item" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartItem;
