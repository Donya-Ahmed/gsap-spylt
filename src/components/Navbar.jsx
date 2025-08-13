import { AlignJustify, X } from "lucide-react";
import React, { useState } from "react";

export default function Navbar({ model }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav-section fixed top-0 left-0 z-50 md:p-9 p-3 flex justify-between items-center w-full ">
        <img
          src="/images/nav-logo.svg"
          alt="nav-logo"
          className="md:w-24 w-20"
        />
        <button  className="hidden lg:block" onClick={() => setOpen(!open)}>
          {open ? <X size={32} /> : <AlignJustify size={32} />}
        </button>
        <button className="nav-button">Find in stores</button>
      </nav>
      {model}
    </>
  );
}
