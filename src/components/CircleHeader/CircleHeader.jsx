import React from "react";
import { Circle } from "../../Styles/CircleHeader.styles";

const CircleHeader = ({ children, radius, bgColor, width, height }) => {
  return (
    <Circle
      radius={radius}
      bgColor={`${bgColor}`}
      width={width}
      height={height}
    >
      {children}
    </Circle>
  );
};

export default CircleHeader;
