import * as THREE from 'three'

class Firefly {
  constructor(viewport, startX, startY, maxVelocity = 25, maxTurningRate = 15) {
    this.viewport = viewport
    this.position = {
      x: startX || (Math.random() * viewport.width) - (viewport.width/2),
      y: startY || (Math.random() * viewport.height) - (viewport.height/2)
    }
    this.maxVelocity = maxVelocity;
    this.maxTurningRate = maxTurningRate;

    this.currentVelocity = 0
    this.currentVector = THREE.Vector2(Math.random(), Math.random())

    this.reactTo = this.reactTo.bind(this)
    this.render = this.render.bind(this)
  }

  reactTo(event) {

  }

  render() {
    // TODO: Figure out a glow effect that can be updated later.
    // Something to maybe look at: https://aerotwist.com/tutorials/creating-particles-with-three-js/
    var dotGeometry = new THREE.Geometry()
    dotGeometry.vertices.push(new THREE.Vector3(0, 0, 0))
    var ffBodyMaterial = new THREE.PointsMaterial({ size: 10, color: '#FF00FF', sizeAttenuation: false })
    var ffBody = new THREE.Points(dotGeometry, ffBodyMaterial)
    ffBody.position.setX(this.position.x)
    ffBody.position.setY(this.position.y)
    return ffBody
  }
}

export default Firefly
