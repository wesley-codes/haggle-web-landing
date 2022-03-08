import React from "react";
import {
  SellBannerConatiner,
  SellButton,
  SellBannerImage,
  SellOverlay,
  SellSubTitle,
  SellTextWrapper,
  SellTitle,
} from "../../Styles/SellBanner.styles";
import sell from "../../Assets/sell.png";
import Colors from "../../Utils/Colors";
const SellBanner = () => {
  return (
    <SellBannerConatiner>
      <SellBannerImage>
        <SellOverlay>
          <SellTextWrapper>
            <SellTitle>
              Increase your chances <br />
              of selling more.
            </SellTitle>

            <SellSubTitle>
              Copy Make more sales by offering your customers several reasons{" "}
              <br /> to make that purchase
            </SellSubTitle>

            <SellButton
              padding={10}
              radius={5}
              bgColor="rgb(0,0,0)"
            >
              Start Selling
            </SellButton>
           
          </SellTextWrapper>
        </SellOverlay>

        
      </SellBannerImage>
    </SellBannerConatiner>
  );
};

export default SellBanner;
