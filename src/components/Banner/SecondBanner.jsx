
import React from 'react'
import { SecondBannercontainer, SecondBannerImage } from '../../Styles/Banner.styles'
import ClothStore from "../../Assets/ClothStore.png"
const SecondBanner = () => {
  return (
      <SecondBannercontainer>
          
          <SecondBannerImage src={ ClothStore}/>

</SecondBannercontainer>
    )
}

export default SecondBanner