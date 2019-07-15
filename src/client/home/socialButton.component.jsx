import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const SocialMediaButton = ({ imgSrc, link, alt }) =>
  <a href={link} aria-label={alt} target='_blank'>
    <StyledImg src={imgSrc} />
  </a>

const StyledImg = styled.img`
  ${breakpoint('mobile')`
    max-width: 10vw;
    margin: 2vw 2vh;
  `}

  ${breakpoint('tablet')`
    max-width: 3vw;
    margin: 1vw 1vh;
  `}
`

export default SocialMediaButton
