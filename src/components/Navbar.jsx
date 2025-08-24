import AlignJustify from "lucide-react/dist/esm/icons/align-justify.js";
import X from "lucide-react/dist/esm/icons/x.js";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar({ model }) {
  const [open, setOpen] = useState(false);

  // refs for the two icons
  const menuRef = useRef(null);
  const closeRef = useRef(null);
  const tlRef = useRef(null);

  // build the icon toggle timeline once
  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // initial states
      gsap.set(menuRef.current, { autoAlpha: 1, rotate: 0, scale: 1, transformOrigin: "50% 50%" });
      gsap.set(closeRef.current, { autoAlpha: 0, rotate: -90, scale: 0.8, transformOrigin: "50% 50%" });

      // timeline: menu -> close
      const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out", duration: prefersReduced ? 0 : 0.35 } });

      tl.to(menuRef.current, { autoAlpha: 0, rotate: 90, scale: 0.8 }, 0)
        .to(closeRef.current, { autoAlpha: 1, rotate: 0, scale: 1 }, 0.05); // slight overlap for snappier feel

      tlRef.current = tl;
    });

    return () => ctx.revert();
  }, []);

  // play / reverse when `open` changes
  useEffect(() => {
    if (!tlRef.current) return;
    open ? tlRef.current.play() : tlRef.current.reverse();
  }, [open]);

  return (
    <>
      <nav className="nav-section fixed top-0 left-0 z-50 md:p-9 p-3 flex justify-between items-center w-full">
        <img src="/images/nav-logo.svg" alt="nav-logo" className="md:w-24 w-20" />

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="hidden lg:grid place-items-center rounded-4xl w-16 h-16 border border-white/15 bg-white/5 backdrop-blur transform-gpu abs-center"
        >
          {/* Stack both icons absolutely; animate them with GSAP */}
          <span
            ref={menuRef}
            className="absolute inset-0 grid place-items-center will-change-transform will-change-opacity pointer-events-none"
          >
            <AlignJustify size={32} />
          </span>
          <span
            ref={closeRef}
            className="absolute inset-0 grid place-items-center will-change-transform will-change-opacity pointer-events-none"
          >
            <X size={32} />
          </span>
        </button>

        <button className="nav-button">Find in stores</button>
      </nav>

      {model(open)}
    </>
  );
}
