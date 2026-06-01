/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import * as THREE from 'three';
import { fragment, vertex } from "./shader";
import { useFrame } from "@react-three/fiber";

export default function Model ({ imagePath }) { // eslint-disable-line react/prop-types
    const meshRef = useRef();
    const mouse = useRef({ x: 0, y: 0 });
    const transition = useRef(1);
    const loadedPath = useRef(null);

    const uniforms = useRef({
        uTexture: { value: null },
        uTexture2: { value: null },
        uTransition: { value: 1 },
        uTime: { value: 0 }
    });

    useEffect(() => {
        const loader = new THREE.TextureLoader();
        loader.load(imagePath, (tex) => {
            const imgAspect = tex.image.width / tex.image.height;
            const uvAspect = 1 / 1.4;

            if (imgAspect > uvAspect) {
                tex.repeat.x = uvAspect / imgAspect;
                tex.offset.x = (1 - tex.repeat.x) / 2;
            } else {
                tex.repeat.y = imgAspect / uvAspect;
                tex.offset.y = (1 - tex.repeat.y) / 2;
            }

            if (!uniforms.current.uTexture.value) {
                uniforms.current.uTexture.value = tex;
                uniforms.current.uTexture2.value = tex;
            } else if (loadedPath.current !== imagePath) {
                uniforms.current.uTexture2.value = tex;
                transition.current = 0;
            }
            loadedPath.current = imagePath;
        });
    }, [imagePath]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const random = 0.09 + Math.random() * 0.11;

    useFrame(() => {
        if (transition.current < 1) {
            transition.current += 0.02;
            uniforms.current.uTransition.value = Math.min(transition.current, 1);
            if (transition.current >= 1) {
                uniforms.current.uTexture.value = uniforms.current.uTexture2.value;
            }
        }

        const contentEl = document.querySelector('.content');
        const scrollY = contentEl ? contentEl.scrollTop : 0;
        const maxScroll = contentEl ? Math.max(contentEl.scrollHeight - contentEl.clientHeight, 1) : 1;
        const progress = scrollY / maxScroll;

        const targetX = Math.pow(progress, 0.4) * 3.5;

        if (meshRef.current) {
            meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
            meshRef.current.rotation.x = mouse.current.y * Math.PI / 10;
            meshRef.current.rotation.y = mouse.current.x * Math.PI / 10;
        }

        uniforms.current.uTime.value += random;
    });

    return (
        <mesh ref={meshRef} scale={[4, 3, 1]}>
            <planeGeometry args={[1, 1.4, 20, 20]}/>
            <shaderMaterial
                fragmentShader={fragment}
                vertexShader={vertex}
                wireframe={false}
                uniforms={uniforms.current}
            />
        </mesh>
    );
}
