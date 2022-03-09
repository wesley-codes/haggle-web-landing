import React from "react";
import {
    FirstCircleContainer,
  IntroCircle,
  IntrofirstImage,
  IntroImageContainer,
  IntroInnerContainer,
  IntroSecondContainer,
  IntroSecondImage,
  IntroSection,
  IntroThirdImage,
  VerticalLine,
} from "../../Styles/Intro.styles";
import BuyerOrder from "../../Assets/BuyerOrder.png";
import PayInstallments from "../../Assets/PayInstallments.png";
import EmptyPage from "../../Assets/EmptyPage.png";
import Colors from "../../Utils/Colors";
const Intro = () => {
  return (
    <IntroSection>
      <IntroInnerContainer>

      <IntroSecondImage src={PayInstallments} />

        <IntrofirstImage src={BuyerOrder} />


        <IntroThirdImage src={EmptyPage} />

        <IntroSecondContainer>
          <IntroCircle
            bgColor={Colors.purple}
            width={80}
            height={80}
            radius={50}
          >
            1
          </IntroCircle>

<VerticalLine/>

<IntroCircle
            bgColor={Colors.lightDark}
            width={40}
            height={40}
            radius={50}
          >
            2
          </IntroCircle>
             

        </IntroSecondContainer>
      </IntroInnerContainer>
    </IntroSection>
  );
};

export default Intro;
