import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";

const topBrandList = [
  {
    id: 1,
    time: "23 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp",
    title: "McDonald's",
  },
  {
    id: 2,
    time: "33 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
    title: "Burger King",
  },
  {
    id: 3,
    time: "32 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
    title: "Domino's Pizza",
  },
  {
    id: 4,
    time: "39 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
    title: "KFC",
  },
  {
    id: 5,
    time: "20 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/80faa986bf6dfc9b441250c6712f02e51702136945.png?output-format=webp",
    title: "Veer Ji Malai Chaap Wale",
  },
  {
    id: 6,
    time: "13 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
    title: "Haldiram's",
  },
  {
    id: 7,
    time: "43 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
    title: "Subway",
  },
  {
    id: 8,
    time: "28 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/dc25345966698c3077d648ecf3c5b3d1_1643349164.png?output-format=webp",
    title: "BOX8 - Desi Meals",
  },
  {
    id: 9,
    time: "33 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp",
    title: "Pizza Hut",
  },
  {
    id: 10,
    time: "50 mins",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/26155927d30d8e56d537b65d6a5b9969_1617944079.png?output-format=webp",
    title: "The Burger Club",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title"> Top brands for you </div>
      <Slider {...settings}>
        {topBrandList.map((brand)=>{
            return(
                <div className="top-brands-cover">
                    <img src={brand.cover} className="top-brands-image" alt={brand.title} />
                    <div className="top-brands-title">{brand.title}</div>
                </div>
            )
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
