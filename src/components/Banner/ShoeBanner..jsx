

import React from 'react'
import { ShoeBannerContainer ,ShoeBannerImage} from '../../Styles/Banner.styles'
import Shoes from "../../Assets/shoes.png"
const ShoeBanner = () => {
  return (
      <ShoeBannerContainer>
          
          <ShoeBannerImage src={Shoes}/>
   </ShoeBannerContainer>
  )
}

export default ShoeBanner