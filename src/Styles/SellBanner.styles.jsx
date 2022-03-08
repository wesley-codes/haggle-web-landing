import styled from "styled-components"
import Sell from "../Assets/sell.png"
import Colors from "../Utils/Colors"
import { StyledButtons } from "./Buttons.styles"
export const SellBannerConatiner = styled.div`

`


export const SellBannerImage = styled.div`
      width: 100%;
  height: 600px;
  background-size: contain;
    background-image: url(${Sell}) ;
`
export const SellOverlay = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${Colors.purple};
  opacity: 0.6;
  display: flex;
  justify-content: center;

`


export const SellTextWrapper = styled.div`
    text-align: center;
`

export const SellTitle = styled.h3`
    font-size: 4rem;
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