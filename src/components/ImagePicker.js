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
  optionPhoto: {
    width: "100%",
    borderRadius: 8,
  },
  options: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: theme.spacing(3),
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
      <Box className={classes.options} mt={3}>
        {images.map((image, index) => (
          <img
            className={classes.optionPhoto}
            src={image}
            alt={`product demo ${index}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImagePicker;
