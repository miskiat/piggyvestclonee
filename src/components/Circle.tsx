import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="dot undefined headerIcon"
    width={33}
    height={108}
    viewBox="0 0 35 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: "translate(0,0)",
      opacity: 1,
    }}
    {...props}
  >
    <circle cx={5} cy={5} r={5} fill="#2295F2" fillOpacity={0.28} />
    <circle cx={5} cy={30} r={5} fill="#2295F2" fillOpacity={0.28} />
    <circle cx={5} cy={55} r={5} fill="#2295F2" fillOpacity={0.28} />
    <circle cx={5} cy={80} r={5} fill="#2295F2" fillOpacity={0.28} />
    <circle cx={5} cy={105} r={5} fill="#2295F2" fillOpacity={0.28} />
    <circle cx={30} cy={5} r={5} fill="#2295F2" fillOpacity={0.28} />
    <circle cx={30} cy={30} r={5} fill="#2295F2" fillOpacity={0.28} />
    <circle cx={30} cy={55} r={5} fill="#2295F2" fillOpacity={0.28} />
    <circle cx={30} cy={80} r={5} fill="#2295F2" fillOpacity={0.28} />
    <circle cx={30} cy={105} r={5} fill="#2295F2" fillOpacity={0.28} />
  </svg>
);

export default SvgComponent;
