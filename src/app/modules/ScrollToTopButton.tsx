"use client";

import { useEffect, useState } from "react";
import { animated } from "@react-spring/web";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="scrollToTopButton"
      onClick={scrollToTop}
      style={{
        transform: showButton ? "translateX(0)" : "translateX(100px)",
        visibility: showButton ? "visible" : "hidden",
        opacity: showButton ? 1 : 0,
        position: "fixed",
        bottom: "40px",
        right: "40px",
        width: "60px",
        height: "60px",
        backgroundColor: "rgba(250,250,250,0.5)",
        color: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        border: "none",
        outline: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        cursor: "pointer",
        zIndex: 100,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <animated.img
        className="arrowup"
        src="/icons/arrow-up.png"
        alt="arrowup"
        width={30}
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translate(-50%)",
          opacity: "0.5",
        }}
      />
      <br />
      Top
    </button>
  );
};

export default ScrollToTopButton;
