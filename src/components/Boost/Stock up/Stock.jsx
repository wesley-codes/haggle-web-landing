import React from "react";
import {
  Stockcontainer,
  StockInnerContainer,
  StockSubTitles,
  StockSubTitlesContainer,
  StockTitleText,
  StockTitleTextContainer,
} from "../../../Styles/Stock.styles";

const Stock = () => {
  return (
    <Stockcontainer>
      <StockInnerContainer>
        <StockTitleTextContainer>
          <StockTitleText>
            Low stock ? In dire need of money to 
            stock up your Haggle 
            Store ?
          </StockTitleText>
        </StockTitleTextContainer>

        


              <StockSubTitlesContainer>
              <StockSubTitles>
          We know how hard it is to do business when you don’t have the funds to
          stock up on your inventory. Slow sales because you’re low on stock?
          We’ve got you! Just apply for a loan and spread the payment over up to
          6 months - you call the shots.
        </StockSubTitles>
              </StockSubTitlesContainer>
      </StockInnerContainer>
    </Stockcontainer>
  );
};

export default Stock;
