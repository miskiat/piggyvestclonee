import React from "react";

const Review = () => {
  return (
    <div className="review">
      <h1 className="customers">4 Million + customers</h1>
      <p className="launch">
        Since launching in 2016, over 4,000,000 people have used PiggyVest to
        manage their money better, avoid over-spending and be more accountable.
      </p>
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
      <div className="newslink">
        <img src="https://www.piggyvest.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpiggyvestwebsite%2Fpiggywebsite2020%2Fbrand3_972c03908c%2Fbrand3_972c03908c.png&w=384&q=75" />
        <img src="https://www.piggyvest.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpiggyvestwebsite%2Fpiggywebsite2020%2Fbrand2_3fcc7de2d6%2Fbrand2_3fcc7de2d6.png&w=384&q=75" />
        <img src="piggyvest.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpiggyvestwebsite%2Fpiggywebsite2020%2Fbrand1_b2a9805fff%2Fbrand1_b2a9805fff.png&w=384&q=75" />
      </div>
    </div>
  );
};

export default Review;
