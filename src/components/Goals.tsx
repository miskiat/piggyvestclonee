import React from "react";

const Goals = () => {
  return (
    <div className="goals">
      <div className="security-badge">
        <img
          className="badge"
          src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/security_369a26d96e/security_369a26d96e.png"
          alt="security icon"
        />
        <div>
          <div className="security">Your Security is our priority</div>
          <div className="security-info">
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is comepletely protected from fraud.
          </div>
          <button className="learn">Learn more </button>
        </div>
      </div>
      <div>
        <div>4 ways to build your savings</div>
        <div>Earn 5%-15% when you save with any of these PiggyVest plans.</div>
        <button>Start Saving</button>
      </div>
    </div>
  );
};

export default Goals;
