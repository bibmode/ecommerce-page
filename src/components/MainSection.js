import { Container, Grid } from "@mui/material";
import ImageSlides from "./ImageSlides";
import Product from "./Product";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      paddingInline: "0 !important",
    },
  },
}));

const MainSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid container alignItems="center">
        <Grid item xs={12} sm={6}>
          <ImageSlides />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Product />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainSection;
