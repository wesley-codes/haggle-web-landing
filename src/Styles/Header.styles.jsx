import styled from "styled-components";
import HaggleLogo from "../SVG/HaggleLogo";
import { NavLink } from "react-router-dom";
import Buttons from "../components/Buttons/Buttons";
import Colors from "../Utils/Colors";
import { StyledButtons } from "./Buttons.styles";

export const NavIConLogo = styled(HaggleLogo)`
  height: ${({ height }) => height}%;
  width: ${({ width }) => width}%;
`;

export const Nav = styled.nav`
padding: 15px;





`;




export const NavLogo = styled.img`
width: 30%;
`

export const InnerNav = styled.nav`
margin: 0 8%;
display: flex;
align-items: center;

`;

export const LogoContainer = styled.nav`
width: 50%;
@media(max-width: 1024px) {
 width: 30%
}
`




export const NavLinkContainer = styled.nav`

width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
`;


export const NavEmojiContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
align-items: center;

@media(max-width: 1024px) {
  display : none
}
`



export const NavLinks = styled(NavLink)`
text-decoration: none;
color: black;
font-style: bold;
font-weight: 700;
font-size: 1.3rem;
`


export const NavButton = styled(StyledButtons)`
  
color: #fff;

`