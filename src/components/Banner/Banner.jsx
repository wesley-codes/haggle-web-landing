import React from "react";
import {
  BannerImageContainer,
  BannerImage,
  BannerContainerTitle,
  BannerTitle,
  BannerWrapper,
  InnerBannerWrapper,
  BannerHalf,
  BannerSubtitle,
  BannerButtonContainer,
  PlaystoreButton,
  PlayStoreSVG,
  BannerInnerContainerButton,
  PlayStoreText,
  GetItText,
  BannerAppleButton,
  BannerAppleSVG,
  AppleInnercontainer,
  DownloadText,
} from "../../Styles/Banner.styles";
import BannerCurve from "../../Assets/BannerCurves.png";
const Banner = () => {
  return (
    <BannerWrapper>
      <InnerBannerWrapper>
        <BannerContainerTitle>
          <BannerTitle>
            Buy from businesses  <br/> on social media and <br/>{" "}
            <BannerHalf> spread the payment</BannerHalf>{" "}
          </BannerTitle>

          <BannerSubtitle>shop on your terms, pay later</BannerSubtitle>

          <BannerButtonContainer>
            <PlaystoreButton bgColor="#000" padding={3} radius={5}>
              <PlayStoreSVG width={20} height={20} />

              <BannerInnerContainerButton>
                <GetItText>GET IT ON</GetItText>
                <PlayStoreText>Google Play</PlayStoreText>
              </BannerInnerContainerButton>
            </PlaystoreButton>

            <BannerAppleButton bgColor="Transparent" padding={3} radius={5}>
              <BannerAppleSVG width={20} height={20} />
              <BannerInnerContainerButton>
                <GetItText>Download on the</GetItText>
                <PlayStoreText>App Store</PlayStoreText>
              </BannerInnerContainerButton>

              {/* 
                          <AppleInnercontainer>
                              <DownloadText>Download on the</DownloadText>
                  </AppleInnercontainer> */}
            </BannerAppleButton>
          </BannerButtonContainer>
        </BannerContainerTitle>
        <BannerImageContainer>
          <BannerImage src={BannerCurve} />
        </BannerImageContainer>
      </InnerBannerWrapper>
    </BannerWrapper>
  );
};

export default Banner;
