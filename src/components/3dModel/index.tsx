import { LDrawLoader } from 'three/addons/loaders/LDrawLoader.js';
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";


interface ThreeModelProps {
    scale: number;
    modelUrl: string;
}

export default function ThreeModel(props: ThreeModelProps) {
    const { scale, modelUrl } = props;

    const loader = new LDrawLoader();

    loader.load(
        `/testModel.ldr`
    )

    return <primitive object={model} scale={scale} />;
}