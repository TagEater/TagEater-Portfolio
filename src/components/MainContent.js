import React, { useState } from "react";
import HeroSection from "./HeroSection";

function MainContent({ click }) {
  const [wide, setWide] = useState(false);

  const checkWide = () => {
    if(window.innerWidth > 425) setWide(true)
    else setWide(false);
  }

  window.addEventListener("resize", checkWide); 

  return (
    <main
      className={
        click && wide ? "main-container moved" : "main-container"
      }
    >
      <HeroSection />
    </main>
  );
}

export default MainContent;
