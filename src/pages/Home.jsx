import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loading from "../components/Loading";
import { Island } from "../models/island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomePagePopupInfo from "../components/HomePagePopupInfo";
import sakuna from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const audioRef = useRef(new Audio(sakuna));

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    () => {
      audioRef.current.pause();
    };
  }, [isAudioPlaying]);

  const adjustSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustSizeForPlane = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustSize();
  const [planeScale, planePosition] = adjustSizeForPlane();

  return (
    <section className="h-screen w-full relative">
      <div className="absolute top-28 left-0 right-0 flex items-center justify-center z-10">
        {currentStage && <HomePagePopupInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`h-screen w-full bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ far: 1000, near: 0.1 }}
      >
        <Suspense fallback={<Loading />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Plane
            scale={planeScale}
            position={planePosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-4 left-4">
        <img
          src={isAudioPlaying ? soundon : soundoff}
          onClick={() => setIsAudioPlaying((prev) => !prev)}
          className="cursor-pointer h-10 w-10 object-contain"
          alt="Audio"
        />
      </div>
    </section>
  );
};

export default Home;
