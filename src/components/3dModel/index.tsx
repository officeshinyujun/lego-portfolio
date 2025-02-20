import styles from "./index.module.scss"
import {LDrawLoader} from "three/examples/jsm/loaders/LDrawLoader";
import {useLoader} from "@react-three/fiber";
import {useEffect} from "react";

interface ThreeModaProps {
    scale : number;
    modelUrl : string,
}

export default function ThreeModel(props: ThreeModaProps) {
    const {scale, modelUrl} = props;

    const model = useLoader(LDrawLoader, modelUrl)

    useEffect(() => {
        if (model){
            console.log('ldDraw is Loaded')
        }
    })

    return(
        <primitive object={model} scale = {scale}></primitive>
    )
}