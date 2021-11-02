import { Box } from "@mui/system";

//material styling
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import ProductPrice from "./ProductPrice";
import AddOptions from "./AddOptions";

import { AppContext } from "../App";
import { useContext } from "react";

const useStyle = makeStyles((theme) => ({
  box: {
    paddingTop: theme.spacing(2),
    paddingInline: theme.spacing(3),
    textAlign: "left",
  },
  name: {
    [theme.breakpoints.up("md")]: {
      fontSize: "2.7rem !important",
      lineHeight: "1.1 !important",
      marginBottom: "2rem !important",
    },
  },
  info: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem !important",
    },
  },
}));

const Product = () => {
  const classes = useStyle();

  // use context
  const { productDetails } = useContext(AppContext);

  return (
    <Box className={classes.box}>
      <Typography component="h3" variant="h6" color="primary" mb={1.5}>
        SNEAKER COMPANY
      </Typography>

      <Typography
        className={classes.name}
        component="h2"
        variant="h5"
        color="textPrimary"
        mb={1.5}
      >
        {productDetails.name}
      </Typography>

      <Typography
        className={classes.info}
        color="GrayText"
        variant="body1"
        mb={1.5}
      >
        {productDetails.productInfo}
      </Typography>

      <ProductPrice />
      <AddOptions />
    </Box>
  );
};

export default Product;
