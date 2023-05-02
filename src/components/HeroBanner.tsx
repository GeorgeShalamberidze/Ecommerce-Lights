import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IImage from "@/interfaces/Image";
import Image from "next/image";

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
    autoplaySpeed: 1500,
    adaptiveHeight: true,
    arrows: true,
  };

  return (
    <div className="overflow-hidden slider-wrapper-main">
      <Slider {...settings} className="w-full">
        {bannerImages.map((img: IImage) => {
          return (
            <div key={img.id}>
              <Image
                width={1920}
                height={1080}
                src={img.imgUrl}
                alt="banner"
                className="w-full h-auto"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroBanner;
