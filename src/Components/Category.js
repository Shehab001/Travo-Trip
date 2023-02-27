import { Box } from "@mui/material";
import React from "react";
import ReactCardSlider from "./Small/Slider";

const Category = () => {
  const sliderClick = (slider) => {
    alert("hello world");
  };

  const slides = [
    {
      id: 1,
      image: "https://picsum.photos/200/300",
      title: "This is a title",
      description: "This is a description",
      clickEvent: sliderClick,
    },
    {
      id: 2,
      image: "https://picsum.photos/600/500",
      title: "This is a second title",
      description: "This is a second description",
      clickEvent: sliderClick,
    },
    {
      id: 3,
      image: "https://picsum.photos/700/600",
      title: "This is a third title",
      description: "This is a third description",
      clickEvent: sliderClick,
    },
    {
      id: 4,
      image: "https://picsum.photos/500/400",
      title: "This is a fourth title",
      description: "This is a fourth description",
      clickEvent: sliderClick,
    },
    {
      id: 5,
      image: "https://picsum.photos/200/300",
      title: "This is a fifth title",
      description: "This is a fifth description",
      clickEvent: sliderClick,
    },
    {
      id: 6,
      image: "https://picsum.photos/800/700",
      title: "This is a sixth title",
      description: "This is a sixth description",
      clickEvent: sliderClick,
    },
    {
      id: 7,
      image: "https://picsum.photos/300/400",
      title: "This is a seventh title",
      description: "This is a seventh description",
      clickEvent: sliderClick,
    },
  ];

  return (
    <Box sx={{ px: "9.1%" }}>
      <ReactCardSlider keys={slides.id} slides={slides} />
    </Box>
  );
};

export default Category;
