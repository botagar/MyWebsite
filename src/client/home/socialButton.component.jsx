import React from 'react'

const imgStyle = {
  maxWidth: '3vw',
  margin: '1vw 1vh'
}

const SocialMediaButton = ({ imgSrc, link, alt }) =>
  <a href={link} aria-label={alt} target='_blank'>
    <img src={imgSrc} style={imgStyle} />
  </a>

export default SocialMediaButton
