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
      <div className="investment">
        <div className="growth">
          <h1>4 ways to build your savings</h1>
          <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
          <button className="saving">Start Saving</button>
        </div>
        <div className="plans">
          <div className="piggybank">
            <img
              src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/piggy_df88262015/piggy_df88262015.png"
              class="icon"
              width="50"
              height="50"
            ></img>
            <h2>Automated Savings</h2>
            <p className="build">
              Build a dedicated savings faster on your terms automatically or
              manually.
            </p>
            <div className="arrow">Piggybank</div>
          </div>
          <div className="piggybank">
            <img
              src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/safelock_4e737ba7d3/safelock_4e737ba7d3.png"
              class="icon"
              width="50"
              height="50"
            />
            <h2>Fixed Savings</h2>
            <p className="build">
              Lock money away for a fixed duration with no acess to it until
              maturity. It's like having a custom fixed deposit.
            </p>
            <div className="arrow">Savelock</div>
          </div>
          <div className="piggybank">
            <img
              src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/target_6c049f3410/target_6c049f3410.png"
              class="icon"
              width="50"
              height="50"
            />
            <h2>Goal-oriented Savings</h2>
            <p className="build">
              Reach all your savings goals faster. Save towards multiple goals
              on your own or with a group.
            </p>
            <div className="arrow">Target Savings</div>
          </div>
          <div className="piggybank">
            <img
              src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/flex_d090f8bce2/flex_d090f8bce2.png"
              class="icon"
              width="50"
              height="50"
            />
            <h2>Flexible Savings</h2>
            <p className="build">
              Save,transfer, withdraw,manage and organise your money for free at
              any time.
            </p>
            <div className="arrow">Flex Naira</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
