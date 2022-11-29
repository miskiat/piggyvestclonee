import React from "react";

const Plan = ({
  image,
  title,
  description,
  tag,
}: {
  image: string;
  title: string;
  description: string;
  tag: string;
}) => {
  return (
    <div className="piggybank">
      <img src={image} className="icon" width="50" height="50" />
      <h2>{title}</h2>
      <p className="build">{description}</p>
      <div className="arrow">{tag}</div>
    </div>
  );
};

export default Plan;
