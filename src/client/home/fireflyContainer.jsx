import React from 'react'
import styled from 'styled-components'
import * as THREE from 'three'
import ff3 from './firefly3'

class FireflyContainer extends React.Component {
  constructor(props) {
    super(props)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentWillMount() {
    // Expose the global THREE object for use in debugging console
    window.THREE = THREE
    this.scene = new THREE.Scene()
  }

  componentDidMount() {
    let { clientWidth, clientHeight } = this.canvas
    let camera = new THREE.OrthographicCamera(clientWidth / -2, clientWidth / 2, clientHeight / 2, clientHeight / -2, -100, 100)
    let renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });

    renderer.shadowMap.enabled = true;
    renderer.setClearColor('#000000', 0.5)
    renderer.setSize(clientWidth, clientHeight);

    let viewport = {
      width: clientWidth,
      height: clientHeight
    }
    var aFireFly = new ff3(viewport)
    this.scene.add(aFireFly.render());

    var light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 0, 0);
    light.castShadow = true;
    this.scene.add(light);

    this.start()

    this.camera = camera
    this.renderer = renderer
  }

  componentWillUnmount() {
    this.stop()
  }

  start() {
    log.info('FF has started')
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    let { renderer, scene, camera } = this
    renderer.render(scene, camera)
  }

  render() {
    return (
      <ThreeJsCanvas innerRef={canvasElement => this.canvas = canvasElement} />
    )
  }
}

const ThreeJsCanvas = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`

export default FireflyContainer
