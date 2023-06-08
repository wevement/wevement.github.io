"use client";

import "@/app/css/footer.css";

import Link from "next/link";
import { animated } from "@react-spring/web";

export default function Footer() {
  // js

  // web

  return (
    <div className="footer">
      <div className="footercontainer">
        <div className="footertop">
          <div>
            <h6 className="footertitle">
              <Link href="/notice" className="footertitlelink">
                Notice
              </Link>
            </h6>
          </div>
          <div>
            <h6 className="footertitle">
              <Link href="/info" className="footertitlelink">
                Information
              </Link>
            </h6>
            <ul className="footerlist">
              <li className="footerlistitem">
                <Link href="/info/about" className="footerlistlink">
                  About
                </Link>
              </li>
              <li className="footerlistitem">
                <Link href="/info/members" className="footerlistlink">
                  Members
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="footertitle">
              <Link href="/promotion" className="footertitlelink">
                Promotion
              </Link>
            </h6>
            <ul className="footerlist">
              <li className="footerlistitem">
                <Link href="/promotion/products" className="footerlistlink">
                  Products
                </Link>
              </li>
              <li className="footerlistitem">
                <Link href="/promotion/recruit" className="footerlistlink">
                  Recruit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="footerdivider" />
        <div className="footerbottom">
          <span className="copyright">
            &copy; 2023 wevement. All rights reserved.
          </span>
          <ul className="footerlist footerlistbottom">
            <li className="footerlistitem">
              <Link href="#" className="footerlistlink">
                이용약관
              </Link>
            </li>
            <li className="footerlistitem">
              <Link href="/" className="footerlistlink">
                개인정보처리방침
              </Link>
            </li>
            <li className="footerlistitem">
              <Link
                href="https://www.instagram.com/wevement_official"
                className="footerlistlink"
              >
                <animated.img src="/icons/instagram.png" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
