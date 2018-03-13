import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const SunShafts = () =>
  <SunShaft>
    <Ray1 />
    <Ray2 />
    <Ray3 />
    <Ray4 />
    <Ray5 />
    <Ray6 />
  </SunShaft>

const SunShaft = styled.div`
  position: absolute;
	top:-90px;
	left:0;
	right:0;
	bottom:0;	
  width:70px;
  z-index: -1;

  @keyframes sway-small {
    0% { -webkit-transform: translateX(5px) translateY(-10px) rotate(0deg) perspective(10px) rotateX(3deg);}    
    50% {-webkit-transform: translateX(-5px) translateY(-10px) rotate(0deg) perspective(10px) rotateX(3deg);}
    100% { -webkit-transform: translateX(5px) translateY(-10px) rotate(0deg) perspective(10px) rotateX(3deg);}
  }

  @keyframes sway {
    0% { -webkit-transform: translateX(12px) translateY(-10px) rotate(0deg) perspective(10px) rotateX(3deg);}    
    50% {-webkit-transform: translateX(-12px) translateY(-10px) rotate(0deg) perspective(10px) rotateX(3deg);}
    100% { -webkit-transform: translateX(12px) translateY(-10px) rotate(0deg) perspective(10px) rotateX(3deg);}
  }
`
const Ray = styled.div`
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%); 
  margin-left: 10px;
  position: absolute;
  opacity: 0.3;
`
const Ray1 = Ray.extend`
  height: 170px;
  width: 30px;
  left: 5px;
  animation: sway-small 6s ease-in-out infinite;
`

const Ray2 = Ray.extend`
  height:160px;
  width: 20px;
  left: 20px;
  animation: sway 7s ease-in-out infinite;
`

const Ray3 = Ray.extend`
  height: 150px;
  width: 50px;
  left: 7px;
  animation: sway-small 14s ease-in-out infinite;
`

const Ray4 = Ray.extend`
  height: 165px;
  width: 14px;
  left: 0px;
  animation: sway 8s ease-in-out infinite;
`

const Ray5 = Ray.extend`
  height: 140px;
  width: 30px;
  left: 3px;
  animation: sway 5.5s ease-in-out infinite;
`

const Ray6 = Ray.extend`
  height: 155px;
  width: 25px;
  left: 15px;
  animation: sway 7s ease-in-out infinite;
`

export default SunShafts
