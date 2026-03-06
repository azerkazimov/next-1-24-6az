"use client"
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer, GLTFLoader, OrbitControls, RenderPass, UnrealBloomPass } from "three-stdlib";

export default function Scooter() {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvas.current) return;

        const width = 600;
        const height = 600;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color("white");

        const camera = new THREE.PerspectiveCamera(15, width / height, 0.1, 1000);
        camera.position.set(5, 2, 5); // Angled view is better for 3D models

        const renderer = new THREE.WebGLRenderer({ 
            canvas: canvas.current,
            antialias: true // Smoother edges
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        // Important for GLTF textures
        renderer.outputColorSpace = THREE.SRGBColorSpace; 

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Postprocessing
        const renderPass = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 0.2, 0.3, 0.9);
        

        const composer = new EffectComposer(renderer);
        composer.addPass(renderPass);
        composer.addPass(bloomPass);

        // Load model
        const loader = new GLTFLoader();
        loader.load(
            "/model/e-scooter/scene.gltf", // Ensure this path is correct relative to your 'public' folder
            (gltf) => {
                const model = gltf.scene;
                
                // Center the model automatically
                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                model.position.sub(center); 

                scene.add(model);
            },
            undefined,
            (error) => console.error("Error loading model:", error)
        );

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            composer.render();
        };
        animate();

        return () => {
            renderer.dispose();
            composer.dispose();
        };
    }, []);

    return (
        <div className="w-[600px] h-[600px]">
            <canvas ref={canvas} />
        </div>
    );
}