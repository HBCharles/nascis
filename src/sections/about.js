import * as THREE from 'three'
import React, { useEffect } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { useSprings, a } from 'react-spring/three'
import ReactRotatingText from 'react-rotating-text'

const number = 30
const colors = ['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff']

const random = () => {
    const r = Math.random()
    return {
        position: [30 - Math.random() * 60, 30 - Math.random() * 60, 0],
        color: colors[Math.round(Math.random() * (colors.length - 1))],
        scale: [1 + r * 10, 1 + r * 10, 1],
        rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)]
    }
}

function Content() {
    const { viewport } = useThree()
    const aspect = viewport.width / 6
    const [springs, setSprings] = useSprings(number, i => ({ from: random(), ...random(), config: { mass: 20, tension: 500, friction: 200 } }))
    useEffect(() => void setInterval(() => setSprings(i => ({ ...random(), delay: i * 50 })), 4000))
    return springs.map(({ color, ...props }, index) => (
        <a.mesh key={index} {...props}>
            <planeBufferGeometry attach="geometry" args={[0.1 + Math.random() * aspect, 0.1 + Math.random() * aspect]} />
            <a.meshPhongMaterial attach="material" color={color} />
        </a.mesh>
    ))
}

const About = () => {
    return <div id="Home">
        <Canvas style={{ background: '#A2CCB6' }} camera={{ position: [0, 0, 30] }}>
          <ambientLight intensity={1} />
          <Content />
        </Canvas>
        <div className="content">
            <img alt="Nascis - Web agency" src='./nascis.png' style={{height: '125px', width: '125px'}}/>
            <div className="title">
              <h1>Nascis</h1>
              <h2>We <ReactRotatingText items={['build innovative products', 'design rich ideas', 'help you to create solutions']} pause ={4000} /></h2>
            </div>
        </div>
    </div>
};

export default About;
