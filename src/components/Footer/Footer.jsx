import React from "react";
import {
  Footercontainer,
  FooterMoneyContainer,
  FooterMoneyImage,
  FooterTextContainer,
  FooterWrapper,
} from "../../Styles/Footer.styles";
import Money from "../../Assets/Money.png";
const Footer = () => {
  return (
    <Footercontainer>
      <FooterWrapper>
        <FooterTextContainer>
          <h3>Interested in being a Merchant on Haggle?</h3>

          <p>
            Sell more and earn more by being flexible with your pricing and
            having an online shop.
          </p>
        </FooterTextContainer>

        <FooterMoneyContainer>
          <FooterMoneyImage src={Money} />
        </FooterMoneyContainer>
      </FooterWrapper>
    </Footercontainer>
  );
};

export default Footer;
