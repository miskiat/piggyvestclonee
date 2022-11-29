import React from "react";
import Plan from "./Plan";

const Goals = () => {
  const plans = [
    {
      image:
        "https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/piggy_df88262015/piggy_df88262015.png",
      title: "Automated Savings",
      description:
        "Build a dedicated savings faster on your terms automatically or manually.",
      tag: "Piggybank",
    },
    {
      image:
        "https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/safelock_4e737ba7d3/safelock_4e737ba7d3.png",
      title: "Fixed Savings",
      description:
        " Lock money away for a fixed duration with no acess to it until maturity. It's like having a custom fixed deposit.",
      tag: "Savelock",
    },
    {
      image:
        "https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/target_6c049f3410/target_6c049f3410.png",
      title: "Goal-oriented Savings",
      description:
        "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
      tag: "Target Savings",
    },
    {
      image:
        "https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/flex_d090f8bce2/flex_d090f8bce2.png",
      title: "Flexible Savings",
      description:
        "Save,transfer, withdraw,manage and organise your money for free at any time.",
      tag: "Flex Naira",
    },
  ];
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
      <div className="packages">
        <div className="growth">
          <h1>4 ways to build your savings</h1>
          <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
          <button className="saving">Start Saving</button>
        </div>
        <div className="plans">
          {plans.map((plan) => (
            <Plan
              image={plan.image}
              title={plan.title}
              description={plan.description}
              tag={plan.tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
