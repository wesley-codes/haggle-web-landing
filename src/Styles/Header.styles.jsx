import styled from "styled-components";
import HaggleLogo from "../SVG/HaggleLogo";
import { NavLink } from "react-router-dom";
import Buttons from "../components/Buttons/Buttons";
import Colors from "../Utils/Colors";
import { StyledButtons } from "./Buttons.styles";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const NavLogo = styled.img`
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const InnerWrapper = styled.div`
  margin: 0, 5%, 0, 5%;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NavIConLogo = styled(HaggleLogo)`
  height: ${({ height }) => height}%;
  width: ${({ width }) => width}%;
`;

export const NavIconContainer = styled.div`
  width: 30%;
`;

export const NavItemsContainer = styled.div`
  width: 70%;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const NavInner = styled.div`
  width: 100%;
`;

export const NavLinkItem = styled(NavLink)`
  color: black;
  font-weight: 600;
  font-size: 1.3rem;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const NavWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 10%;
  align-items: stretch;

  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 50%;
    align-items: center;
  }
`;

export const NavButton = styled(StyledButtons)`
  color: ${Colors.white};
  font-size: 1rem;
  border: none;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
