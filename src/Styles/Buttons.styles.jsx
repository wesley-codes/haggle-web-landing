import styled from "styled-components";

export const StyledButtons = styled.button`
 background-color: ${({ bgColor }) => bgColor};
padding: ${({padding})=> padding}px;
 border-radius: ${({radius})=> radius}px


`
