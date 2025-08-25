import React from "react";
import { flavorlists } from "../constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export default function FlavorSlider() {
  const scrollRef = React.useRef(null);
  const isTablet = useMediaQuery({ query: "(max-width:768px)" });
  useGSAP(() => {
    const scrollMount = scrollRef.current.scrollWidth - window.innerWidth;
    if (!isTablet) {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollMount + 1500}px`,
          scrub: true,
          // markers: true,
          pin: true,
        },
      });
      t1.to(".flavor-section", {
        x: `-${scrollMount + 1500}px`,
        ease: "power1.inOut",
      });
    }

    const titleT1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });
    titleT1
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });
  return (
    <div ref={scrollRef} className="slider-wrapper">
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
