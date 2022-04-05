import React from 'react'
import { SpinnerContainer, SpinnerLogo } from './style'

const Spinner = (props:any) => {
  return (
    <SpinnerContainer style={{...props.style}}>
      <SpinnerLogo style={{...props.styleLogo}}></SpinnerLogo>
    </SpinnerContainer>
  )
}

export default Spinner
