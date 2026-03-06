"use client"

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Sphere() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;

        const width = 900
        const height = 900

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
        camera.position.z = 5;

        
        const renderer = new THREE.WebGLRenderer({ canvas: canvas  });
        renderer.setSize(width, height);
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight.position.set(2, 2, 2)
        scene.add(directionalLight);

        const geometry = new THREE.SphereGeometry( 1, 32, 32 )
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00} )
        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)

        const animate = ()=>{
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;

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