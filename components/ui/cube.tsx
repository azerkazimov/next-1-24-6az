"use client"

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Cube() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;

        const width = 500
        const height = 500

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
        camera.position.z = 5;
    
        const renderer = new THREE.WebGLRenderer({ canvas: canvas  });
        renderer.setSize(width, height);

        const cube = new THREE.Mesh(new THREE.BoxGeometry( 2, 2, 2 ), new THREE.MeshBasicMaterial( { color: 0x00ff00 } ))
        scene.add(cube)

        const animate = ()=>{
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }
        animate()

        return ()=>{
            renderer.dispose();
        }
    }, [])


    return (
        <div className="w-full h-full">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    )
}