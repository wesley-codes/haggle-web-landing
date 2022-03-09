import styled from "styled-components";
import PlayStore from "../SVG/PlayStore";
import AppleSVG from "../SVG/AppleSVG"
import Colors from "../Utils/Colors";
import { StyledButtons } from "./Buttons.styles";

export const BannerWrapper = styled.div`
  background-color: ${Colors.backgroungdBlack};
`;

export const InnerBannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5%;
  @media (max-width: 1024px){
    padding-top: 8%;
padding-bottom: 8%;
}

`;

export const BannerImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const BannerImage = styled.img`
  width: 100%;
@media (max-width: 1024px){
    display: none;
}

`;

export const BannerContainerTitle = styled.div`
  margin-left: 5%;
 
width: 100%;
  
  
  @media (max-width: 1024px){
    font-size: medium;
    text-align: center;

  }
`;

export const BannerTitle = styled.h3`
  color: ${Colors.white};
  font-size: xx-large;
  
  font-weight: 700;
  letter-spacing: 0.03em;

  @media (max-width: 1024px){
    font-size: x-large;
    width: 100%
  }
`;

export const BannerHalf = styled.span`

    color: #a53548;
 
`;

export const BannerSubtitle = styled.h4`
  color: ${Colors.white};
  font-weight: 400;
  font-size: x-large;
  margin-top: 3%;
  letter-spacing: 0.03em;
  @media (max-width: 1024px){
    font-size: medium;

  }
`;

export const BannerButtonContainer = styled.div`
display: flex;
margin-top: 15px;
@media(max-width:1024px){
 display: flex;
 justify-content: center;
}

`;

export const PlaystoreButton = styled(StyledButtons)`
  display: flex;
  align-items: center;
  border: 1px solid ${Colors.white};
  color: ${Colors.white};
  

  
`;

export const PlayStoreSVG = styled(PlayStore)`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

export const BannerInnerContainerButton = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 100%;
margin-left: 10px;
`;

export const GetItText = styled.p`
font-size: xx-small;
`;

export const PlayStoreText = styled.p`

`;

//======APPLE BUTTONS=====

export const BannerAppleButton= styled(StyledButtons)`
display: flex;
align-items: center;
color:${Colors.white};
  border: 1px solid ${Colors.white};
margin-left: 10%
`

export const BannerAppleSVG = styled(AppleSVG)`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
 

`;

export const AppleInnercontainer = styled.div`
`
export const DownloadText = styled.p``
export const AppleText = styled.p``





//=========SECOND BANNER

export const SecondBannercontainer = styled.div`


`

export const SecondBannerImage = styled.img`
width: 100%;
height: 300px;
display: none;
object-fit: cover;
@media (max-width: 1024px){
  display: block;
  }

`

//======SHOE bANNER


export const ShoeBannerContainer = styled.div`


`

export const ShoeBannerImage = styled.img`

`
