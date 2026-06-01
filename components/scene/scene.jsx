import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import Model from "./model"
import './scene.css'

export default function Scene ({ meshHidden, imagePath }) { // eslint-disable-line react/prop-types
    return (
        <Canvas
            style={{
                height: '100vh',
                width: '100%',
                background: 'transparent',
            }}
            className='canv'
            gl={{ alpha: true }}
        >
            <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]}/>
            {!meshHidden && <Model imagePath={imagePath} />}
        </Canvas>
    )
}
