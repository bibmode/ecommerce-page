import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

//material styling
import { makeStyles } from "@mui/styles";
import { grey, orange } from "@mui/material/colors";

const useStyle = makeStyles((theme) => ({
  box: {
    paddingTop: theme.spacing(1),
    textAlign: "left",
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
  },
}));

const ProductPrice = () => {
  const classes = useStyle();

  return (
    <Box className={classes.box}>
      <Grid container alignItems="center">
        <Grid item mr={1.5}>
          <Typography component="h4" variant="h5">
            $125.00
          </Typography>
        </Grid>
        <Grid item mr="auto">
          <Typography
            className={classes.discount}
            color="primary"
            component="h4"
            variant="h6"
          >
            50%
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={classes.originalPrice}
            component="h4"
            variant="h6"
          >
            $250.00
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductPrice;
