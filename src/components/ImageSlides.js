import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// styled components
import styled from "styled-components";

const ProductImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`;

const ImageSlides = () => {
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
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
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
