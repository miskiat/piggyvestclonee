import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="motto">The Better Way to Save & Invest.</div>
        <div className="goals">
          PiggyVest helps over 4 million customers achieve their financial goals
          by helping them save and invest with ease.
        </div>
        <button className="account">Create free account</button>
        <div className="download-buttons">
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
      </div>
      <div className="girly-container">
        <div className="girly">
          <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/header_Img_a2a9220bd6/header_Img_a2a9220bd6.png" />
          <img
            className="investify"
            src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/card2_7a8c09a44c/card2_7a8c09a44c.png"
          />
          <img
            className="myrent"
            src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/card1_565f256c81/card1_565f256c81.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
