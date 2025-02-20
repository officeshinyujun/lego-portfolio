import styles from "./index.module.scss"
import {Canvas} from "@react-three/fiber";
import ThreeModel from "../../3dModel";

export default function MainPage() {

    return(
        <div className={styles.container}>
            <Canvas>
                <ambientLight/>
                <ThreeModel scale={0.1} modelUrl={"/testModel.ldr"}/>
            </Canvas>
        </div>
    )
}