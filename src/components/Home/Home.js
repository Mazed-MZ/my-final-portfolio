"use client"

import React from 'react';
import Header from './Header/Header';
import About from './AboutMe/About';
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Globe from "./Globe/Globe";
import Services from "./Services/Services";
import MyQuote from "./MyQuote/MyQuote";
import Projects from "./Projects/Projects";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";

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
    </div>
  )
}
