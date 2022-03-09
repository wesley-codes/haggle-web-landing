import React from 'react'
import { BoostContainer, BoostTitle, BoostTitleContainer, Loan,Loans, Request } from '../../Styles/Boost.styles'
import RockectSVG from '../../SVG/RockectSVG'
import Intro from '../Intro/Intro'

const Boost = () => {
  return (
      <BoostContainer>

          <BoostTitleContainer>
          <BoostTitle>
                  Need to stock  up your <br /> Haggle Shop ?<br />
                  <Request> Request a</Request> <Loan>Boost</Loan> <Loans>Loan. </Loans> <RockectSVG width={20} height={20}/>
                 </BoostTitle>
          </BoostTitleContainer>
<Intro/>
          
      </BoostContainer>
  )
}

export default Boost