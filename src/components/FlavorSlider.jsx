import React from "react";
import { flavorlists } from "../constants/index";
export default function FlavorSlider() {
  return (
    <div className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor, index) => (
          <div
            key={index}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt="bg"
              className="absolute bottom-0"
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt="drink"
              className="drinks"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt="elements"
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
