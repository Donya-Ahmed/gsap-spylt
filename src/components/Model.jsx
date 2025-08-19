import React from "react";
import gsap from "gsap";

const COLORS = { brown: "#523122", muted: "#8B6F56" };

export default function Model({ open }) {
  const rootRef = React.useRef(null);
  const tlRef = React.useRef(null);

  // 1) Create the height timeline once and set initial state BEFORE paint
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // make sure we start collapsed before first paint
      gsap.set(rootRef.current, { height: "0dvh", overflow: "hidden" });

      // timeline only controls height (fast, GPU-friendly)
      const tl = gsap.timeline({ paused: true, defaults: { duration: 2, ease: "expo.inOut" }});
      tl.to(rootRef.current, { height: "100dvh" });

      // set initial position (no flash). If `open` is true, jump to end.
      tl.progress(open ? 1 : 0);
      tlRef.current = tl;
    }, rootRef);
    return () => ctx.revert();
    // NOTE: don't put `open` here — we only want to build once
  }, []);

  // 2) Respond to `open` changes by playing/reversing the single timeline
  React.useEffect(() => {
    if (!tlRef.current) return;
    open ? tlRef.current.play() : tlRef.current.reverse();
  }, [open]);

  // 3) Your buttons/images logic (unchanged). Keep it here or in another effect
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const buttons = gsap.utils.toArray(".nav-button");
      const images = gsap.utils.toArray(".nav-image");

      gsap.set(buttons, { color: COLORS.brown });
      gsap.set(images, { position: "absolute", inset: 0, opacity: 0, pointerEvents: "none" });
      if (images[0]) gsap.set(images[0], { opacity: 1 });

      const showImageByKey = (key) => {
        images.forEach((img) => {
          gsap.to(img, {
            opacity: img.dataset.key === key ? 1 : 0,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      };

      const colorButtons = (hovered) => {
        buttons.forEach((btn) => {
          gsap.to(btn, {
            color: btn === hovered ? COLORS.brown : COLORS.muted,
            duration: 0.2,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      };

      buttons.forEach((btn) => {
        const key = btn.dataset.key;
        const enter = () => { colorButtons(btn); if (key) showImageByKey(key); };
        btn.addEventListener("mouseenter", enter);
        btn.__enter = enter; // keep ref for cleanup
      });

      const titles = document.querySelector(".titles");
      const leave = () => {
        gsap.to(buttons, { color: COLORS.brown, duration: 0.2, ease: "power2.out", overwrite: "auto" });
        images.forEach((img, i) => {
          gsap.to(img, { opacity: i === 0 ? 1 : 0, duration: 0.5, ease: "power2.out", overwrite: "auto" });
        });
      };
      titles?.addEventListener("mouseleave", leave);
      titles && (titles.__leave = leave);

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="bg-milk nav-model grid grid-cols-2 w-screen overflow-hidden fixed   left-0 z-40"
      style={{ height: "0dvh" }}                          
    >
      <div className="col-span-1 flex justify-center">
        <div className="titles mt-16 flex flex-col relative z-50">
          <button className="nav-button title-btn" data-key="shop">SHOP</button>
          <button className="nav-button title-btn" data-key="find">FIND IN STORES</button>
          <button className="nav-button title-btn" data-key="about">ABOUT US</button>
          <button className="nav-button title-btn" data-key="tasty">TASTY TALKS</button>
          <button className="nav-button title-btn" data-key="programs">PROGRAMS</button>
          <button className="nav-button title-btn" data-key="contacts">CONTACTS</button>
        </div>
      </div>

      <div className="col-span-1 relative">
        <img className="nav-image w-full h-full object-cover" data-key="model" src="/images/model.webp" alt="nav-model" />
        <img className="nav-image w-full h-full object-cover" data-key="shop" src="/images/shop.png" alt="nav-shop" />
        <img className="nav-image w-full h-full object-cover" data-key="find" src="/images/find.png" alt="nav-find" />
        <img className="nav-image w-full h-full object-cover" data-key="about" src="/images/about.png" alt="nav-about" />
        <img className="nav-image w-full h-full object-cover" data-key="tasty" src="/images/tasty.png" alt="nav-tasty" />
        <img className="nav-image w-full h-full object-cover" data-key="programs" src="/images/programs.png" alt="nav-programs" />
        <img className="nav-image w-full h-full object-cover" data-key="contacts" src="/images/contacts.png" alt="nav-contacts" />
      </div>
    </section>
  );
}
