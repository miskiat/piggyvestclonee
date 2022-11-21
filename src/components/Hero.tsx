import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="motto">The Better Way to Save & Invest.</div>
      <div className="goals">
        PiggyVest helps over 4 million customers achieve their financial goals
        by helping them save and invest with ease.
      </div>
      <button className="account">Create free account</button>
      <div>
        <button className="download">
          <img
            src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/apple_icon_32ccc572ff/apple_icon_32ccc572ff.svg"
            alt="download-apple"
          />
          Get on iphone
        </button>
        <button className="download">
          <img
            src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/google_icon_9867fc9be6/google_icon_9867fc9be6.svg"
            alt="download-google"
          />
          Get on Andriod
        </button>
      </div>

      <div className="girly">
        <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/header_Img_a2a9220bd6/header_Img_a2a9220bd6.png" />
      </div>
    </div>
  );
};

export default Hero;
