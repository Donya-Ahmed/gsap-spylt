import React from "react";

export default function Model() {
  return (
    <section className="nav-model grid grid-cols-2 h-dvh w-screen">
      <div class="col-span-1 flex justify-center">
        <div className="titles mt-16">
          <button className="nav-button title-btn">SHOP</button>
          <button className="nav-button title-btn">FIND IN STORES</button>
          <button className="nav-button title-btn">ABOUT US</button>
          <button className="nav-button title-btn">TASTY TALKS</button>
          <button className="nav-button title-btn">PROGRAMS</button>
          <button className="nav-button title-btn">CONTACTS</button>
        </div>
      </div>
      <div className="col-span-1">
        <img src="/images/model.webp" alt="nav-model" />
      </div>
    </section>
  );
}
