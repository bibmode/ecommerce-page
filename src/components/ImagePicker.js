import { Box } from "@mui/system";

import { makeStyles } from "@mui/styles";

import styled from "styled-components";
import React, { useState } from "react";
import { orange } from "@mui/material/colors";

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
    "& .chosen": {
      opacity: 0.5,
      outline: `3px solid ${orange[900]}`,
    },
    "& .unchosen": {
      opacity: 1,
    },
  },
}));

const Option = styled.button`
  padding: 0;
  height: 5.5rem;
  border: none;
  outline: none;
  border-radius: 10%;
  background: center/cover no-repeat ${(props) => props.photo};
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  :focus {
    opacity: 0.5;
  }
`;

const ImagePicker = () => {
  const classes = useStyles();
  const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ];
  const [focusedState, setFocusedState] = useState([
    "chosen",
    "unchosen",
    "unchosen",
    "unchosen",
  ]);

  const [pickedIndex, setPickedIndex] = useState(0);

  const handleFocus = (pickNumber) => {
    //modify array
    let newPicks = ["unchosen", "unchosen", "unchosen", "unchosen"];
    newPicks[pickNumber] = "chosen";
    setFocusedState(newPicks);

    //change picture
    setPickedIndex(pickNumber);
  };

  return (
    <Box className={classes.picker}>
      <img
        className={classes.pickedPhoto}
        src={images[pickedIndex]}
        alt="product showcase"
      />
      <Box className={classes.options} mt={3}>
        {images.map((image, index) => (
          <Option
            className={`${focusedState[index]}`}
            key={index}
            onClick={() => handleFocus(index)}
            photo={`url("${image}")`}
          ></Option>
        ))}
      </Box>
    </Box>
  );
};

export default ImagePicker;
