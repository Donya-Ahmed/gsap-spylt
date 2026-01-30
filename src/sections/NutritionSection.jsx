import React, { useEffect } from "react";
import { nutrientLists } from "../constants/index";
import { useMediaQuery } from "react-responsive";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function NutritionSection() {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const [lists, setLists] = React.useState(nutrientLists);

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });
    t1
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%",
      },
    });

    t2.to(".nutrition-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      ease: "power1.inOut",
    });
  });

  useEffect(() => {
    if (isMobile) {
      setLists(nutrientLists.slice(0, 3));
    } else {
      setLists(nutrientLists);
    }
  }, [isMobile]);
  return (
    <section className="nutrition-section relative">
      <img
        src="/images/slider-dip.png"
        alt=""
        className="w-full object-cover"
      />
      <img src="/images/big-img.png" alt="big-image" className="big-img" />
      <div className="w-full flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">It still does</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
                <h2 className="text-milk-yellow">Body Good</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-md md:text-right text-balance font-paragraph">
              Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>
      </div>

      <div className="nutrition-box ">
        <div className="list-wrapper">
          {lists.map((nutrient, index) => (
            <div key={index} className="relative flex-1 col-center">
              <div>
                <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                <p className="font-paragraph text-sm mt-2">up to</p>
                <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                  {nutrient.amount}
                </p>
              </div>

              {index !== lists.length - 1 && <div className="spacer-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
