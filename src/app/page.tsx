"use client";

import "@/app/css/mainPage.css";
import Deco from "@/app/modules/contentdecoration";

import { useSpring, animated, easings, useInView } from "@react-spring/web";
import { useState, useEffect, use, CSSProperties } from "react";
import { useGesture } from "@use-gesture/react";

export default function Home()
{
  // js

  const [spring, setSpring] = useSpring(() => ({
    transform: "perspective(500px) rotateX(-5deg) rotateY(-20deg)",
    filter: "drop-shadow(10px 0px 0px rgba(0, 0, 0, 0.5))",
  }));

  const bind = useGesture({
    onMove: ({ xy }) =>
    {
      const [mx, my] = xy;
      const { width, height, top, left } =
        document.getElementById("logo")?.getBoundingClientRect() || {};

      const x = mx - (left || 0) - (width || 0) / 2;
      const y = my - (top || 0) - (height || 0) / 2;

      const angleX = -(y / (height || 1)) * 10;
      const angleY = (x / (width || 1)) * 40;

      setSpring({
        transform: `perspective(500px) rotateX(${angleX}deg) rotateY(${angleY}deg)`,
        filter: `drop-shadow(${-x * 0.03}px ${-y * 0.03
          }px 0px rgba(0, 0, 0, 0.5))`,
      });
    },
    onHover: ({ hovering }) =>
    {
      if (!hovering)
      {
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

  useEffect(() =>
  {
    const handleResize = () =>
    {
      const parent = document.querySelector(".main_door");
      const parentheight = parent?.clientHeight || 0;

      setdoorFontSize(parentheight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () =>
    {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const doorfontsize: CSSProperties = {
    fontSize: `${doorfontSize}px`,
  };

  const [infofontSize, setinfoFontSize] = useState<number>(1000);

  useEffect(() =>
  {
    const handleResize = () =>
    {
      const parent = document.querySelector(".main_info");
      const parentwidth = parent?.clientWidth || 0;

      setinfoFontSize(parentwidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () =>
    {
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
              Start of Change
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
              <h1 className="info_content_h1">Aily (AI Recycler)</h1>
              <div className="info_content_text_separater"></div>
              <p className="info_content_p">
                컴퓨터비전 AI를 활용한 자동 쓰레기분류장치 AIoT 앱/웹 <br />
                &lt;2023 한국전자전 KES 출품&gt;{" "}
              </p>
            </div>
            <div className="info_content_box_image">
              <animated.img src="images/AilyLogo.png" className="info_content_box_image_example" />
            </div>
          </animated.div>
          <animated.div
            className="info_content_box"
            style={inView2}
            ref={inViewRef2}
          >
            <div className="info_content_box_image">

              <animated.img src="images/SolvemateLogo.png" className="info_content_box_image_example" />
              {/* <a href='https://play.google.com/store/apps/details?id=com.wevement.solvemate&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img alt='다운로드하기 Google Play' style={{ width: `100%` }} src='https://play.google.com/intl/en_us/badges/static/images/badges/ko_badge_web_generic.png' />
              </a> */}
            </div>
            <div className="info_content_box_text" style={infofontsize}>
              <h1 className="info_content_h1">나만의 문제친구</h1>
              <div className="info_content_text_separater"></div>
              <p className="info_content_p">
                ChatGPT를 활용한 <br />
                교육 / 문제 솔루션{" "}
              </p>
            </div>
          </animated.div>
          <animated.div
            className="info_content_box"
            style={inView3}
            ref={inViewRef3}
          >
            <div className="info_content_box_text" style={infofontsize}>
              <h1 className="info_content_h1">CPR Kiosk</h1>
              <div className="info_content_text_separater"></div>
              <p className="info_content_p">
                교육용 CPR 키오스크 앱 개발 <br />
                [경상북도청 납품]{" "}
              </p>
            </div>
            <div className="info_content_box_image">
              <animated.img src="images/CPRKiosk.png" className="info_content_box_image_example2" />
            </div>
          </animated.div>
        </div>
        <div className="info_separater"></div>
        <div className="main_notice">
          <div>{/* <h1>공지사항</h1> */}</div>
        </div>
      </div>
    </div>
  );
}
