import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavIconContainer,
  NavIConLogo,
  NavLinkItem,
  NavItemsContainer,
  NavButton,
  NavWrapper,
  NavInner,
	NavLogo,
	InnerWrapper
} from "../../Styles/Header.styles";
import HaggleLogo from "../../SVG/HaggleLogo";
import Colors from "../../Utils/Colors";
import Buttons from "../Buttons/Buttons";
import Logo from "../../Assets/logo.png"
const Header = () => {
  return (
    <Nav>
		  <InnerWrapper>
		  <NavIconContainer>
			  <NavLogo src={ Logo}/>
</NavIconContainer>
      <NavInner>
        <NavItemsContainer>
          <NavLinkItem to="/">BUY</NavLinkItem>

          <NavLinkItem to="/sell">SELL</NavLinkItem>

          <NavWrapper>
            <NavLinkItem to="/marketplace">MARKETPLACE</NavLinkItem>

            <NavButton bgColor={Colors.orange} padding={5} radius={50}>
              Coming soon
            </NavButton>
          </NavWrapper>
        </NavItemsContainer>
      </NavInner>
	</InnerWrapper>
    </Nav>
  );
};

export default Header;
