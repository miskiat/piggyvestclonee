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
        <button>
          <img
            src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/apple_icon_32ccc572ff/apple_icon_32ccc572ff.svg"
            alt="download-apple"
            width="18"
            height="22"
          />
          Get on iphone
        </button>
        <button>
          <img
            src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/google_icon_9867fc9be6/google_icon_9867fc9be6.svg"
            alt="download-google"
            width="24"
            height="24"
          />
          Get on Andriod
        </button>
      </div>
      <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/header_Img_a2a9220bd6/header_Img_a2a9220bd6.png" />
    </div>
  );
};

export default Hero;
