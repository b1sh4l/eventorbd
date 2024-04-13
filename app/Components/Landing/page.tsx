"use client";

import eventorbdLogo from "../../assets/eventorbdLogo.svg";
import eventorbdText from "../../assets/eventorbdText.svg";
import Image from "next/image";
import Link from "next/link";
import "./page.css";
import { useEffect, useRef } from "react";

function LandingPage(): JSX.Element {
  const burgerIconRef = useRef<HTMLDivElement>(null);
  const burgerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const burgerIcon = burgerIconRef.current;
    const burgerContent = burgerContentRef.current;

    const toggleBurgerMenu = () => {
      if (burgerIcon && burgerContent) {
        burgerIcon.classList.toggle('open');
        burgerContent.classList.toggle('show');
      }
    };

    if (burgerIcon && burgerContent) {
      burgerIcon.addEventListener('click', toggleBurgerMenu);
    }

    return () => {
      if (burgerIcon && burgerContent) {
        burgerIcon.removeEventListener('click', toggleBurgerMenu);
      }
    };
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="logo-navbar">
          <h2>Services</h2>
          <h2>Events</h2>
          <h2>Join as Partner</h2>
        </div>
        <div className="container">
          <div className="mainLogo">
            <Image
              className="logo"
              src={eventorbdLogo}
              alt="eventorbdLogo"
              width={50}
              height={50}
              layout="intrinsic"
            />
            <Image
              className="logoText"
              src={eventorbdText}
              alt="eventorbdText"
              width={140}
              height={49}
              layout="intrinsic"
            />
          </div>
          <div className="burger-menu">
            <div className="burger-icon" ref={burgerIconRef}>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </div>
            <div className="burger-content" ref={burgerContentRef}>
              <div className="authButtons">
                <Link href="/Components/Auth/SignIn" className="signinLink">
                  <button className="signinBtn">Sign In</button>
                </Link>
                <Link href="/Components/Auth/SignUp" className="signupLink">
                  <button className="signupBtn">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
