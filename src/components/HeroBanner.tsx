import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IImage from "@/interfaces/Image";

const HeroBanner = () => {
  const bannerImages: IImage[] = [
    { id: 0, imgUrl: "/assets/4x4_logic_fixture_booster_BIG.png" },
    { id: 1, imgUrl: "/assets/CORE85_Sale_BUG.png" },
    { id: 2, imgUrl: "/assets/Violit_Booster_Board_BIG.png" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    adaptiveHeight: true,
    arrows: true,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings} className="w-full">
        {bannerImages.map((img: IImage) => {
          return (
            <div key={img.id}>
              <img src={img.imgUrl} alt="banner" className="w-full h-auto" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroBanner;
