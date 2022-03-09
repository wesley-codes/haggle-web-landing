

import React from 'react'
import Logo from "../../Assets/logo.png"
import {InnerNav, LogoContainer, Nav, NavButton, NavEmojiContainer, NavIConLogo, NavLinkContainer, NavLinks, NavLogo } from "../../Styles/Header.styles"
import CartSVG from '../../SVG/CartSVG'
import HeartSVG from '../../SVG/HeartSVG'
const Header = () => {
  return (
    <Nav>
      <InnerNav>

        
        <LogoContainer>
          <NavLogo src={ Logo }/>
</LogoContainer>

        <NavLinkContainer>
          <NavLinks to="/">
            BUY
          </NavLinks>
          <NavLinks to="/sell">
            SELL
          </NavLinks>
          <NavLinks to="/">
            MARKETPLACE
</NavLinks>
        </NavLinkContainer>

        


        <NavEmojiContainer>
          <HeartSVG width={41} height={20} />
          <CartSVG width={41} height={20} />
          <NavButton bgColor="#000" radius={5} padding={8}>
            SIGNUP/LOGIN
          </NavButton>
        </NavEmojiContainer>
      </InnerNav>
   </Nav>
  )
}

export default Header