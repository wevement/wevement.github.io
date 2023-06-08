"use client";

import "@/app/css/mainPage.css";
import Deco from "@/app/modules/contentdecoration";

import { useSpring, animated, easings } from "@react-spring/web";
import { useState, useEffect } from "react";
import { useGesture } from "@use-gesture/react";
import { useRef } from "react";

export default function Home() {
  // js

  const [spring, setSpring] = useSpring(() => ({
    transform: "perspective(500px) rotateX(-5deg) rotateY(-20deg)",
    filter: "drop-shadow(10px 0px 0px rgba(0, 0, 0, 0.5))",
  }));

  const bind = useGesture({
    onMove: ({ xy }) => {
      const [mx, my] = xy;
      const { width, height, top, left } =
        document.getElementById("logo")?.getBoundingClientRect() || {};

      const x = mx - (left || 0) - (width || 0) / 2;
      const y = my - (top || 0) - (height || 0) / 2;

      const angleX = -(y / (height || 1)) * 10;
      const angleY = (x / (width || 1)) * 40;

      setSpring({
        transform: `perspective(500px) rotateX(${angleX}deg) rotateY(${angleY}deg)`,
        filter: `drop-shadow(${-x * 0.03}px ${
          -y * 0.03
        }px 0px rgba(0, 0, 0, 0.5))`,
      });
    },
    onHover: ({ hovering }) => {
      if (!hovering) {
        setSpring({
          transform: "perspective(500px) rotateX(-5deg) rotateY(-20deg)",
          filter: "drop-shadow(10px 0px 0px rgba(0, 0, 0, 0.5))",
        });
      }
    },
  });

  const logofade = useSpring({
    from: { opacity: 0, transform: "translateX(-80px) " },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000, easing: easings.easeOutCirc },
    delay: 500,
  });

  const textfade = useSpring({
    from: { opacity: 0, transform: "translateX(80px) " },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000, easing: easings.easeOutCirc },
    delay: 500,
  });

  const textfade2 = useSpring({
    from: { opacity: 0, transform: "translateX(80px) " },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, easing: easings.easeOutCirc },
    delay: 700,
  });

  // web
  return (
    <animated.div>
      <div className="content">
        <div className="main_intro">
          <animated.div className="main_intro_text">
            <animated.h1 className="intro_h1" style={textfade}>
              무언가 텍스트
            </animated.h1>
            <animated.h2 className="intro_h2" style={textfade2}>
              위브먼트
            </animated.h2>
          </animated.div>
          <animated.div id="logo" {...bind()} style={logofade}>
            <animated.img
              className="content_logo_black"
              src="/wevement_logo_variation/wevement_logo_simbol_only.png"
              alt="contentlogoblack"
              style={spring}
              height={400}
            />
          </animated.div>
          <Deco />
        </div>
        <div className="intro_separater"></div>
        <div className="main_info">
          <div className="info_content_box">
            <div className="info_content_box_text">
              <h1 className="info_content_h1">대충 무슨 어떠한 주제</h1>
              <div className="info_content_text_separater"></div>
              <p className="info_content_p">
                대충 이 주제에 대한 설명 대충 이 주제에 대한 설명 <br />
                대충 이 주제에 대한 설명 대충 이 주제에 대한 설명{" "}
              </p>
            </div>
            <div className="info_content_box_image">
              대충 이미지
              <animated.img className="info_content_box_image_example" />
            </div>
          </div>
          <div className="info_content_box">
            <div className="info_content_box_image">
              대충 이미지
              <animated.img className="info_content_box_image_example" />
            </div>
            <div className="info_content_box_text">
              <h1 className="info_content_h1">대충 무슨 어떠한 주제</h1>
              <div className="info_content_text_separater"></div>
              <p className="info_content_p">
                대충 이 주제에 대한 설명 대충 이 주제에 대한 설명 <br />
                대충 이 주제에 대한 설명 대충 이 주제에 대한 설명{" "}
              </p>
            </div>
          </div>
          <div className="info_content_box">
            <div className="info_content_box_text">
              <h1 className="info_content_h1">대충 무슨 어떠한 주제</h1>
              <div className="info_content_text_separater"></div>
              <p className="info_content_p">
                대충 이 주제에 대한 설명 대충 이 주제에 대한 설명 <br />
                대충 이 주제에 대한 설명 대충 이 주제에 대한 설명{" "}
              </p>
            </div>
            <div className="info_content_box_image">
              대충 이미지
              <animated.img className="info_content_box_image_example" />
            </div>
          </div>
        </div>
        <div className="info_separater"></div>
        <div className="main_something"></div>
      </div>
    </animated.div>
  );
}
