import React from "react";

export default function Hero() {
  return (
    <section className="hero-container">
      <img
        src="images/static-img.png"
        alt="hero-img"
        className="object-auto scale-100 md:scale-150 absolute bottom-0 left-1/2 -translate-x-1/2"
      />

      <div className="hero-content">
        <div className="overflow-hidden">
          <h1 className="hero-title">Freaking Delicious</h1>
        </div>
        <div
        //   style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%,50% 100%)" }}
          className="hero-text-scroll"
        >
          <div className="hero-subtitle">
            <h1>Protein + Caffeine</h1>
          </div>
          
        </div>
        <h2>Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.</h2>
          <div className="hero-button">
          <p>Chug a Spylt</p>
          </div>
      </div>
    </section>
  );
}
