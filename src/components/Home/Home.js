"use client";

import React from "react";
import Header from "./Header/Header";
import About from "./AboutMe/About";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Globe from "./Globe/Globe";
import Services from "./Services/Services";
import MyQuote from "./MyQuote/MyQuote";
import Projects from "./Projects/Projects";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";
import Footer from "antd/es/layout/layout";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Globe></Globe>
      <Services></Services>
      <MyQuote></MyQuote>
      <Projects></Projects>
      <Reviews></Reviews>
      <Contact></Contact>
      <Footer className="text-center font-extralight bg-gradient-to-r from-green-800 via-black via-50% to-emerald-500 p-3">
        <p className="font-bold text-center italic bg-clip-text text-transparent bg-gradient-to-tr from-emerald-500 to-neutral-500">
          MZ Official ©{new Date().getFullYear()} Created by MAZED MOHAMMED
        </p>
      </Footer>
    </div>
  );
}
