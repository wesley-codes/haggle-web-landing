import React from "react";
import {
  SellBannerConatiner,
  SellButton,
  SellBannerImage,
  SellOverlay,
  SellSubTitle,
  SellTextWrapper,
  SellTitle,
  SellerDashboardImage,
  SellerDashboardContainer,
  SellerDashboardImageMobile,
} from "../../Styles/SellBanner.styles";
import sell from "../../Assets/sell.png";
import merchdash from "../../Assets/merchdash.png";
import Colors from "../../Utils/Colors";
import mobile from "../../Assets/mobile.png"
const SellBanner = () => {
  return (
    <SellBannerConatiner>
      <SellBannerImage>
              <SellOverlay>
              <SellerDashboardImage src={merchdash} />
                  <SellerDashboardImageMobile src={mobile }/>
          <SellTextWrapper>
            <SellTitle>
              Increase your chances 
              of selling more.
            </SellTitle>

            <SellSubTitle>
              Copy Make more sales by offering your customers several reasons{" "}
           to make that purchase
            </SellSubTitle>

            <SellButton padding={10} radius={5} bgColor="rgb(0,0,0)">
              Start Selling
            </SellButton>
          </SellTextWrapper>

        </SellOverlay>
      </SellBannerImage>
    </SellBannerConatiner>
  );
};

export default SellBanner;
