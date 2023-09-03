"use client";

import "@/app/css/mainPage.css";
import Deco from "@/app/modules/contentdecoration";

import { useSpring, animated, easings, useInView } from "@react-spring/web";
import { useState, useEffect, use, CSSProperties } from "react";
import { useGesture } from "@use-gesture/react";

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
    from: { opacity: 0, transform: "translateX(80px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000, easing: easings.easeOutCirc },
    delay: 500,
  });

  const textfade2 = useSpring({
    from: { opacity: 0, transform: "translateX(80px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, easing: easings.easeOutCirc },
    delay: 700,
  });

  const [inViewRef1, inView1] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(200px)" },
      to: { opacity: 1, transform: "translateY(0)" },
      config: { duration: 800, easing: easings.easeOutCirc },
    }),
    { once: true }
  );
  const [inViewRef2, inView2] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(200px)" },
      to: { opacity: 1, transform: "translateY(0)" },
      config: { duration: 800, easing: easings.easeOutCirc },
    }),
    { once: true }
  );
  const [inViewRef3, inView3] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(200px)" },
      to: { opacity: 1, transform: "translateY(0)" },
      config: { duration: 800, easing: easings.easeOutCirc },
    }),
    { once: true }
  );

  const [doorfontSize, setdoorFontSize] = useState<number>(1000);

  useEffect(() => {
    const handleResize = () => {
      const parent = document.querySelector(".main_door");
      const parentheight = parent?.clientHeight || 0;

      setdoorFontSize(parentheight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const doorfontsize: CSSProperties = {
    fontSize: `${doorfontSize}px`,
  };

  const [infofontSize, setinfoFontSize] = useState<number>(1000);

  useEffect(() => {
    const handleResize = () => {
      const parent = document.querySelector(".main_info");
      const parentwidth = parent?.clientWidth || 0;

      setinfoFontSize(parentwidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const infofontsize: CSSProperties = {
    fontSize: `${infofontSize}px`,
  };

  // web
  return (
    <div>
      <div className="content">
        <div className="main_door">
          <animated.div className="main_door_text" style={doorfontsize}>
            <animated.h1 className="door_h1" style={textfade}>
              무언가 텍스트
            </animated.h1>
            <animated.h2 className="door_h2" style={textfade2}>
              위브먼트
            </animated.h2>
          </animated.div>
          <animated.div id="logo" {...bind()} style={logofade}>
            <animated.img
              className="content_logo_black"
              src="/wevement_logo_variation/wevement_logo_simbol_only.png"
              alt="contentlogoblack"
              style={spring}
              height={"80%"}
            />
          </animated.div>
          <Deco />
        </div>
        <div className="door_separater"></div>
        <div className="main_info">
          <animated.div
            className="info_content_box"
            style={inView1}
            ref={inViewRef1}
          >
            <div className="info_content_box_text" style={infofontsize}>
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
          </animated.div>
          <animated.div
            className="info_content_box"
            style={inView2}
            ref={inViewRef2}
          >
            <div className="info_content_box_image">
              대충 이미지
              <animated.img className="info_content_box_image_example" />
            </div>
            <div className="info_content_box_text" style={infofontsize}>
              <h1 className="info_content_h1">대충 무슨 어떠한 주제</h1>
              <div className="info_content_text_separater"></div>
              <p className="info_content_p">
                대충 이 주제에 대한 설명 대충 이 주제에 대한 설명 <br />
                대충 이 주제에 대한 설명 대충 이 주제에 대한 설명{" "}
              </p>
            </div>
          </animated.div>
          <animated.div
            className="info_content_box"
            style={inView3}
            ref={inViewRef3}
          >
            <div className="info_content_box_text" style={infofontsize}>
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
          </animated.div>
        </div>
        <div className="info_separater"></div>
        <div className="main_notice">
          <div>
            <h1>공지사항</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
