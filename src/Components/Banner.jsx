import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";

const Banner = () => {
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

  const [cards, setCards] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/latestCourses').then(res=> res.json()).then(data=>setCards(data));
  }, [setCards])

  console.log(cards)

  return (
    <div className="mx-3 pt-20 lg:pt-6">
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
