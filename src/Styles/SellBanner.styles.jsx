import styled from "styled-components"
import Sell from "../Assets/sell.png"
import Colors from "../Utils/Colors"
import { StyledButtons } from "./Buttons.styles"
export const SellBannerConatiner = styled.div`

`


export const SellBannerImage = styled.div`
      width: 100%;
  height: 600px;
  background-size: fill;
    background-image: url(${Sell}) ;
    background-position: left center;
  // background-repeat: no-repeat;
  @media (max-width: 1024px){
    height: 400px;

}

`
export const SellOverlay = styled.div`
  width: 100%;
  height: 600px;
 background-color: ${Colors.purple};
 // opacity: 0.6;
  display: flex;
  background: linear-gradient(0deg, rgba(255, 0, 104, 0.5), rgba(255, 0, 104, 0.5));
  justify-content: center;
  @media (max-width: 1024px){
    height: 400px;


}

`


export const SellTextWrapper = styled.div`
    text-align: center;
    margin: 15px;
    @media (max-width: 1024px){
        margin-top: 9%;



}
`

export const SellTitle = styled.h3`
    font-size: 3rem;
    color: white;
    letter-spacing:0.05em;
    font-weight: 700;
    font-style: bold;
`



export const SellSubTitle = styled.p`
    font-size: 1.2rem;
    color: white;
    font-weight: 300;
    margin-top: 15px;
    
   
`

export const SellButton = styled(StyledButtons)`
width: 30%;
color: white;
margin-top: 15px


`

export const SellerDashboardContainer = styled.div`
   
`

export const SellerDashboardImage = styled.img`
  position: absolute;
  width:  50%;
  top: 400px;
  left: 350px;
  @media (max-width: 1024px){

    display: none;

  }
`

export const SellerDashboardImageMobile = styled.img`
display: none;
@media (max-width: 1024px){

display: block;
position: absolute;
    right: 0;
    top: 400px;
}
`