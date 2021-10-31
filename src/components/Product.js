import { Box } from "@mui/system";

//material styling
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import ProductPrice from "./ProductPrice";
import AddOptions from "./AddOptions";

const useStyle = makeStyles((theme) => ({
  box: {
    paddingTop: theme.spacing(2),
    paddingInline: theme.spacing(3),
    textAlign: "left",
  },
}));

const Product = () => {
  const classes = useStyle();

  return (
    <Box className={classes.box}>
      <Typography component="h3" variant="h6" color="primary" mb={1.5}>
        SNEAKER COMPANY
      </Typography>

      <Typography component="h2" variant="h5" color="textPrimary" mb={1.5}>
        Fall Limited Edition Sneakers
      </Typography>

      <Typography color="GrayText" variant="body1" mb={1.5}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </Typography>

      <ProductPrice />
      <AddOptions />
    </Box>
  );
};

export default Product;
