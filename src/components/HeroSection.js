import React from "react";

function HeroSection() {
  return (
    <div className="HeroSection">
      <div className="HeroSection-info">
        <div className="HeroSection-info__image">
          <img
            src="../images/heroimg.jpg"
            width="256"
            height="256"
            alt="heroimg"
            srcSet=""
          />
        </div>
        <div className="HeroSection-info__description">
          Jan Staszak <br />
          Front - End Developer
        </div>
        <button className="HeroSection-info__cv">Check my cv</button>
        <div className="HeroSection-info__socials">
          <i
            className="fab fa-facebook-square icon"
            onClick={() => (window.location.href = "https://www.facebook.com/janartur.staszak/")}
          ></i>
          <i
            className="fab fa-github-square icon"
            onClick={() => (window.location.href = "https://github.com/TagEtaer")}
          ></i>
          <i
            className="fab fa-linkedin icon"
            onClick={() => (window.location.href = "https://www.linkedin.com/in/jan-staszak-729a3120a/")}
          ></i>
          <i
            className="fab fa-dev icon"
            onClick={() => (window.location.href = "https://dev.to/tageater")}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
