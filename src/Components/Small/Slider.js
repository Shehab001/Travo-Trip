import React, { useEffect, useState } from "react";
import "../CSS/Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const ReactCardSlider = (props) => {
  //console.log(props.slides);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />

      <div id="slider">
        {props.slides.map((slide, index) => {
          //console.log(slide.object, index);
          return (
            <Link to={`/singleservice/${slide._id}`}>
              <div className="slider-card" key={index}>
                <div
                  className="slider-card-image"
                  style={{
                    backgroundImage: `url(${slide.img})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="description-controller">
                  <p className="slider-card-title"> {slide.name}</p>

                  <p className="slider-card-description">{slide.title}</p>
                  <p className="slider-card-description">
                    Attended : {slide.total_taken}
                  </p>
                  <div className="info">
                    <p className="slider-card-info">
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={slide.rating}
                          precision={0.5}
                          readOnly
                        />
                      </Stack>
                    </p>
                    <p className="slider-card-money">
                      <span>৳</span> {slide.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};
export default ReactCardSlider;
