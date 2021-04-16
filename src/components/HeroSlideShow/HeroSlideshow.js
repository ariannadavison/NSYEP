import React from "react";
import { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import albany1 from "../../Images/port_of_albany_1.jpg";
import albany2 from "../../Images/port_of_albany_2.jpg";
import albany3 from "../../Images/port_of_albany_3.jpg";
import albany4 from "../../Images/port_of_albany_4.jpg";
import albany5 from "../../Images/port_of_albany_5.jpg";

import "./heroSlideshow.css";


const HeroSlideshow = () => {
  const items = [
    {
      src: albany1,
      altText: "Group of people in a warehouse",
      caption: "",
    },
    {
      src: albany2,
      altText: "Seven people in discussion",
      caption: "",
    },
    {
      src: albany3,
      altText: "Seven people in discussion",
      caption: "",
    },
    {
      src: albany4,
      altText: "Seven people in discussion",
      caption: "",
    },
    {
      src: albany5,
      altText: "Seven people in discussion",
      caption: "",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <div className="carousel-control-prev-container">
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
        </div>
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default HeroSlideshow;
