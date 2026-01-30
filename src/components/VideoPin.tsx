import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
export default function VideoPin() {
    useGSAP(()=>{
        const timeline=gsap.timeline({
            scrollTrigger:{
                trigger:".vd-pin-section",
                start:"-15% top",
                end:"200% top",
                scrub:1.5,
                pin:true,
            },
        })
        timeline.to(".video-box",{clipPath:"circle(100% at 50% 50%)",ease:"power1.inOut"})
    })

  return (
    <div className="vd-pin-section">
      <div className="size-full video-box" style={
        {
            clipPath:"circle(6% at 50% 50%);"
        }
      }>
        <video src="./videos/pin-video.mp4" playsInline autoPlay muted loop />
        <div className="abs-center md:scale-100 scale-20">
          <img src="/images/circle-text.svg" alt="" className="spin-circle" />
          <div className="play-btn">
            <img
              src="/images/play.svg"
              alt="play-btn"
              className="size-[3vw] ml-[.5vw]"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
