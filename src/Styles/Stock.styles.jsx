import styled from "styled-components"


export const Stockcontainer = styled.div`
background-color: #E5E5E5;

`



export const StockInnerContainer = styled.div`


margin: 8%;
display: flex;
justify-content: center;
@media (max-width:1024px){
    flex-direction: column;
}
`



export const StockTitleText = styled.h2`
font-size: x-large;
width: 40%;
@media (max-width:1024px){
    width: 100%;
    text-align: center;
}

` 

export const StockTitleTextContainer = styled.div`
    display: flex;
    justify-content: center;

`



export const StockSubTitlesContainer = styled.div`
width: 50%;
display: flex;
justify-content: start;
@media (max-width:1024px){
   width: 100%
}
`

export const StockSubTitles = styled.p`
    width: 50%;
line-height: 23px;
letter-spacing: 0.03em;
@media (max-width:1024px){
    width: 100%
}


`