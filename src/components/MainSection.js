import { Container, Grid } from "@mui/material";
import ImageSlides from "./ImageSlides";
import Product from "./Product";

import { makeStyles } from "@mui/styles";
import ImagePicker from "./ImagePicker";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingInline: "3rem !important",
    [theme.breakpoints.down("sm")]: {
      paddingInline: "0 !important",
    },
  },
}));

const MainSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid container alignItems="center" spacing={{ xs: 1, sm: 2, md: 10 }}>
        <Grid item xs={12} sm={6}>
          <ImageSlides className={classes.slides} />
          <ImagePicker className={classes.picker} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Product />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainSection;
