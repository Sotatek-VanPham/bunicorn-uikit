import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="80" height="80" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="500" cy="500" r="500" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M433.402 107L330 318.375V724.672V886.574V893.315H495.672V893.031L495.832 893.201L649.005 803.51L661.117 741.437L588.906 628.468L473.429 602.147L542.289 391.157L669 473.422L578.351 245.623L457.697 334.072L433.402 107ZM594.671 700.525L563.159 652.691L515.325 684.203L546.837 732.037L594.671 700.525Z" fill="#0C2A54"/>
    <path d="M383.015 582.537L450.655 597.733L458.996 383.959L383.015 582.537Z" fill="#F47820"/>
    </svg>
    


  );
};

export default Icon;