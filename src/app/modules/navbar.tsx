"use client";

import "@/app/css/navbar.css";

import Link from "next/link";
import { useSpring, animated, easings } from "@react-spring/web";
import { useHover } from "@use-gesture/react";
import { useState } from "react";


export default function Navbar()
{
  // js

  const [isHovered, setIsHovered] = useState(false);
  const [menuToggled, setMenuToggled] = useState(false);
  const [isDesktop, setisDesktop] = useState(false);

  const hoverbind = useHover(({ hovering }) =>
  {
    if (hovering)
    {
      setIsHovered(true);
      console.log("hovering");
    } else
    {
      setIsHovered(false);
      console.log("not hovering");
    }
  });

  const hoverbox = useSpring({
    config: { duration: 100 },
    backgroundColor:
      isHovered || menuToggled ? " rgba(0,0,0,0.1)" : "rgba(0,0,0,0)",
  });

  const mobilemenufade = useSpring({
    config: { duration: 100 },
    opacity: !isDesktop ? (menuToggled ? 1 : 0) : 1,
    visibility: !isDesktop ? (menuToggled ? "visible" : "hidden") : "visible",
    immediate: !isDesktop,
  });

  const menufade = useSpring({
    config: { duration: 100 },
    opacity: isHovered || menuToggled ? 1 : 0,
    visibility: isHovered || menuToggled ? "visible" : "hidden",
  });

  const pagenavfade = useSpring({
    from: { opacity: 0, transform: "translateY(-80px) " },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500, easing: easings.easeOutCirc },
  });

  window.addEventListener("resize", () =>
  {
    if (window.innerWidth < 951)
    {
      setisDesktop(false);
    } else
    {
      setisDesktop(true);
      setMenuToggled(false);
    }
  });

  window.onload = () =>
  {
    if (window.innerWidth < 951)
    {
      setisDesktop(false);
    } else
    {
      setisDesktop(true);
      setMenuToggled(false);
    }
  };
  // web

  return (
    <animated.div id="navbarid" className="navbar" style={pagenavfade}>
      <animated.div className="menuhoverbox" style={hoverbox}></animated.div>
      <div className="navbarlogo">
        <Link
          href="/"
          className="logolink"
          onClick={(event) =>
          {
            event.preventDefault();
          }}
        >
          <animated.img
            className="logoblack"
            src="/wevement_logo_variation/wevement_logo_type_only.png"
            alt="logoblack"
            height={25}
          />
        </Link>
      </div>
      <div className="mobilemenu">
        <animated.img
          className="mobilemenuicon"
          src="/icons/menuicon.svg"
          alt="mobilemenuicon"
          onClick={() => setMenuToggled((menuToggled) => !menuToggled)}
          height={30}
          width={30}
        />
      </div>
      {/* @ts-expect-error */}
      <animated.ul className="navbarul" style={mobilemenufade}>
        <li className="navbarli" {...hoverbind()}>
          <Link
            className="navlink"
            href="/notice"
            onClick={(event) =>
            {
              event.preventDefault();
            }}
          >
            Notice
          </Link>
        </li>
        <li className="navbarli" {...hoverbind()}>
          <Link
            className="navlink"
            href="/info"
            onClick={(event) =>
            {
              event.preventDefault();
            }}
          >
            Information
          </Link>
          {/* @ts-expect-error */}
          <animated.div className="navbarhoverbox" style={menufade}>
            <ul className="hovboxul">
              <li className="hovboxli">
                <Link
                  className="hovlink"
                  href="/info/about"
                  onClick={(event) =>
                  {
                    event.preventDefault();
                  }}
                >
                  About
                </Link>
              </li>
              <li className="hovboxli">
                <Link
                  className="hovlink"
                  href="/info/members"
                  onClick={(event) =>
                  {
                    event.preventDefault();
                  }}
                >
                  Members
                </Link>
              </li>
            </ul>
          </animated.div>
        </li>
        <li className="navbarli" {...hoverbind()}>
          <Link
            className="navlink"
            href="/promotion"
            onClick={(event) =>
            {
              event.preventDefault();
            }}
          >
            Promotion
          </Link>
          {/* @ts-expect-error */}
          <animated.div className="navbarhoverbox" style={menufade}>
            <ul className="hovboxul">
              <li className="hovboxli">
                <Link
                  className="hovlink"
                  href="/promotion/products"
                  onClick={(event) =>
                  {
                    event.preventDefault();
                  }}
                >
                  Products
                </Link>
              </li>
              <li className="hovboxli">
                <Link
                  className="hovlink"
                  href="/promotion/recruit"
                  onClick={(event) =>
                  {
                    event.preventDefault();
                  }}
                >
                  Recruit
                </Link>
              </li>
            </ul>
          </animated.div>
        </li>
      </animated.ul>
    </animated.div>
  );
}
