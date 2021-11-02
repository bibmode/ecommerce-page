import { Box } from "@mui/system";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  picker: {
    display: "block",
    paddingInline: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
  pickedPhoto: {
    width: "100%",
    borderRadius: 15,
  },
}));

const ImagePicker = () => {
  const classes = useStyles();
  const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ];

  return (
    <Box className={classes.picker}>
      <img
        className={classes.pickedPhoto}
        src={images[0]}
        alt="product showcase"
      />
    </Box>
  );
};

export default ImagePicker;
