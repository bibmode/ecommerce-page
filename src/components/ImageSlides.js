import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// styled components
import styled from "styled-components";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  slides: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
}));

const ProductImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`;

const ImageSlides = () => {
  const classes = useStyles();
  const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ];

  SwiperCore.use([Navigation]);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={true}
      className={classes.slides}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <ProductImage src={image} alt={`product ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlides;
