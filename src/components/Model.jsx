import React from "react";
import gsap from "gsap";

const COLORS = {
  brown: "#523122", // dark-brown (hovered/active)
  muted: "#8B6F56", // other buttons while one is hovered
};

export default function Model() {
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const buttons = gsap.utils.toArray(".nav-button");
      const images = gsap.utils.toArray(".nav-image");

      // 1) Initial state: all btns dark-brown, first image visible
      gsap.set(buttons, { color: COLORS.brown });
      gsap.set(images, {
        position: "absolute",
        inset: 0,
        opacity: 0,
        pointerEvents: "none",
      });
      if (images[0]) gsap.set(images[0], { opacity: 1 });

      // find image by key and show it, hide others
      const showImageByKey = (key) => {
        images.forEach((img) => {
          gsap.to(img, {
            opacity: img.dataset.key === key ? 1 : 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      };

      // color all buttons, preserving hovered
      const colorButtons = (hoveredBtn) => {
        buttons.forEach((btn) => {
          gsap.to(btn, {
            color: btn === hoveredBtn ? COLORS.brown : COLORS.muted,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      };

      // reset to initial (all brown + first image)
      const resetAll = () => {
        gsap.to(buttons, {
          color: COLORS.brown,
          duration: 0.2,
          ease: "power2.out",
        });
        if (images[0]) {
          images.forEach((img, i) => {
            const setOpacity = imgSetters.get(img.dataset.key);
            setOpacity(i === 0 ? 1 : 0);
          });
        }
      };

      // 2) Hover handlers
      buttons.forEach((btn) => {
        const key = btn.dataset.key; // e.g., "shop"
        btn.addEventListener("mouseenter", () => {
          colorButtons(btn);
          if (key) showImageByKey(key);
        });
      });

      // 3) When mouse leaves the whole titles area, reset
      const titles = document.querySelector(".titles");
      titles?.addEventListener("mouseleave", resetAll);

      // Cleanup listeners
      return () => {
        buttons.forEach((btn) => {
          btn.replaceWith(btn.cloneNode(true)); // quick remove all listeners
        });
        titles?.replaceWith(titles.cloneNode(true));
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="nav-model grid grid-cols-2 h-dvh w-screen"
    >
      <div className="col-span-1 flex justify-center">
        <div className="titles mt-16 flex flex-col relative z-50">
          {/* Map buttons to images via data-key */}
          <button className="nav-button title-btn" data-key="shop">
            SHOP
          </button>
          <button className="nav-button title-btn" data-key="find">
            FIND IN STORES
          </button>
          <button className="nav-button title-btn" data-key="about">
            ABOUT US
          </button>
          <button className="nav-button title-btn" data-key="tasty">
            TASTY TALKS
          </button>
          <button className="nav-button title-btn" data-key="programs">
            PROGRAMS
          </button>
          <button className="nav-button title-btn" data-key="contacts">
            CONTACTS
          </button>
        </div>
      </div>

      <div className="col-span-1 relative">
        {/* Make sure order matches: first one is initial */}
        <img
          className="nav-image w-full h-full object-cover"
          data-key="model"
          src="/images/model.webp"
          alt="nav-model"
        />
        <img
          className="nav-image w-full h-full object-cover"
          data-key="shop"
          src="/images/shop.png"
          alt="nav-shop"
        />
        <img
          className="nav-image w-full h-full object-cover"
          data-key="find"
          src="/images/find.png"
          alt="nav-find"
        />
        <img
          className="nav-image w-full h-full object-cover"
          data-key="about"
          src="/images/about.png"
          alt="nav-tasty"
        />
        <img
          className="nav-image w-full h-full object-cover"
          data-key="tasty"
          src="/images/tasty.png"
          alt="nav-tasty"
        />
        <img
          className="nav-image w-full h-full object-cover"
          data-key="programs"
          src="/images/programs.png"
          alt="nav-programs"
        />
        <img
          className="nav-image w-full h-full object-cover"
          data-key="contacts"
          src="/images/contacts.png"
          alt="nav-contacts"
        />
      </div>
    </section>
  );
}
