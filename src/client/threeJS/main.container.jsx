import React, { Component } from 'react'
import styled from 'styled-components'
import * as THREE from 'three'

import ContentContainer from '../shared/styles/contentContainer'

class ThreeJsExperiment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.three = {}

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount () {
    let {clientWidth, clientHeight} = this.component
    // Expose the global THREE object for use in debugging console
    window.THREE = THREE
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 70, clientWidth / clientHeight, 0.01, 10 );
    let renderer = new THREE.WebGLRenderer( { canvas: this.canvas, antialias: true, alpha: true } ); 
    
    camera.position.z = 1

    let geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    let material = new THREE.MeshNormalMaterial();
 
    let cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
 
    renderer.setClearColor('#000000', 0)
    renderer.setSize( clientWidth, clientHeight );

    this.component.appendChild(renderer.domElement)

    this.start()

    this.three = {
      scene: scene,
      camera: camera,
      renderer: renderer,
      cube: cube,
      material: material
    }
  }

  componentWillUnmount() {
    this.stop()
    this.component.removeChild(this.three.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    let {cube} = this.three
    let {clientWidth, clientHeight} = this.component
    cube.rotation.x += 0.01
    cube.rotation.y += 0.005

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    let {renderer, scene, camera} = this.three
    renderer.render(scene, camera)
  }

  render() {
    return (
      <MainContentContainer innerRef={component => { this.component = component }} >
        <h2 style={{zIndex:1}}>ThreeJS Experiment</h2>
        <ThreeJsCanvas innerRef={canvasElement => this.canvas = canvasElement} />
      </MainContentContainer>
    )
  }
}

const MainContentContainer = ContentContainer.extend`
  text-align: center;
  align-items: center;
  justify-content: center;  
  position: relative;
`

const ThreeJsCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`

export default ThreeJsExperiment
