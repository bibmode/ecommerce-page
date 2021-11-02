import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

//material styling
import { makeStyles } from "@mui/styles";
import { grey, orange } from "@mui/material/colors";

import { AppContext } from "../App";
import { useContext } from "react";

const useStyle = makeStyles((theme) => ({
  box: {
    paddingTop: theme.spacing(1),
    textAlign: "left",
    marginBottom: "1.5rem !important",
    display: "grid",
    gridTemplateColumns: "min-content 1fr min-content",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "min-content 1fr",
    },
  },
  discount: {
    paddingInline: "0.5rem",
    backgroundColor: orange[50],
    borderRadius: "5px",
    fontSize: "0.9rem !important",
  },
  originalPrice: {
    textDecoration: "line-through !important",
    color: grey[500],
    [theme.breakpoints.up("md")]: {
      marginTop: "5px !important",
    },
  },
}));

const ProductPrice = () => {
  const classes = useStyle();

  // use context
  const { productDetails } = useContext(AppContext);

  const discountedPrice =
    productDetails.originalPrice * (productDetails.discount / 100);

  return (
    <Box className={classes.box} alignItems="center">
      <Typography mr={1.5} component="h4" variant="h5">
        ${discountedPrice.toFixed(2)}
      </Typography>
      <Typography
        mr="auto"
        className={classes.discount}
        color="primary"
        component="h4"
        variant="h6"
      >
        {productDetails.discount}%
      </Typography>
      <Typography className={classes.originalPrice} component="h4" variant="h6">
        ${productDetails.originalPrice.toFixed(2)}
      </Typography>
    </Box>
  );
};

export default ProductPrice;
