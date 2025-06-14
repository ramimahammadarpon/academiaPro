import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";

const Banner = ({cards}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="mx-3">
      <div className="slider-container">
        <Slider {...settings}>
          {
            cards.map((card, index)=> <SliderCard card={card} key={index}></SliderCard>)
          }
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
