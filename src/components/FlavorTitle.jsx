import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import React from "react";
import gsap from "gsap";

export default function FlavorTitle() {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-text-split", { type: "chars" });
    const secondMsgSplit = SplitText.create(".second-text-split", {
      type: "chars",
    });
    gsap.from(firstMsgSplit.chars, {
      yPercent: 200,
      ease: "power1.inOut",
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });
    gsap.to(".flavor-text-scroll", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(secondMsgSplit.chars, {
      yPercent: 200,
      ease: "power1.inOut",
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
      <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We have 6</h1>
      </div>

      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>delicious flavors</h1>
      </div>
    </div>
  );
}
