import React from "react";
import { StyledButtons } from "../../Styles/Buttons.styles";

const Buttons = ({ children, padding, bgColor, radius }) => {
  return (
    <StyledButtons padding={padding} bgColor={`${bgColor}`} radius={radius}>
      {children}
    </StyledButtons>
  );
};

export default Buttons;
