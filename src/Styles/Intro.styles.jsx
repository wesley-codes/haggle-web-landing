
import styled from "styled-components"
import CircleHeader from "../components/CircleHeader/CircleHeader"
import { Circle } from "./CircleHeader.styles"


export const IntroSection = styled.section`
    background-color: #000;
  border: 1px solid #fff ;
 
  
    `
    export const IntroInnerContainer = styled.div`
    margin: 8%;
    border: 1px solid red;
    display: flex;
justify-content: space-between;
    @media (max-width: 1024px){
    display: none;
}

    `

export const IntrofirstImage = styled.img`
  position: relative;
  top: 0;
      left: 0;
      width: 250px;

`


export const IntroSecondImage = styled.img`
position: absolute;
left:225px;
top: 1230px;
width: 250px;


`

export const IntroThirdImage = styled.img`


position:absolute;
top: 890px;
left: 320px;
width: 250px;

`


export const IntroSecondContainer = styled.div`
color: white;
border: 1px solid red;
width:50%;


`


export const IntroCircle = styled(Circle)`
    color: white;
    display: flex;
justify-content: center;
align-items: center;
font-size:xx-large


`

export const FirstCircleContainer = styled.div`
margin: 2%;
`

export const VerticalLine = styled.div`
border-left: 2px solid green;
  height: 100px;
  margin-left: 25px    

`