import { Html } from "@react-three/drei";

const Loading = () => {
  return (
    <Html>
      <div className="flex items-center justify-center">
        <div className="h-20 w-20 rounded-full border-2 border-opacity-20 border-blue-500 border-t-blue-500 animate-spin" />
      </div>
    </Html>
  );
};

export default Loading;
