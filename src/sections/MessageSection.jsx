import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import React from "react";
import gsap from "gsap";

export default function MessageSection() {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", { type: "words" });
    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphMsgSplit = SplitText.create(".message-content p", {
      type: "words,lines",
      linesClass: "paragraph-line",
    });
    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.inOut",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "40% center",
        scrub: true,
        markers: false,
      },
    });
    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      ease: "power1.inOut",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
      },
    });
    const clipyText = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
        scrub: true,
        markers: false,
      },
    });
    clipyText.to(".msg-text-scroll", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "circ.out",
    });
    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
        end: "+=200",
        scrub: true,
        //  markers:true
      },
    });
    paragraphTl.from(paragraphMsgSplit.words, {
      yPercent: 100,
      rotate: 3,
      ease: "power1.inOut",
      stagger: 0.01,
    });
  });
  return (
    <section className="message-content">
      <div className="container mx-auto  py-28 relative flex-center">
        <div className="w-full h-full ">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and</h1>
            <div
              className="msg-text-scroll"
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">FUEL UP</h2>
              </div>
            </div>
            <h1 className="second-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>
          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p className="paragraph-message">
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
