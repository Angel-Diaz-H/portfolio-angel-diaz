import { SparklesCore } from "../ui/sparkles";

export const Sparkles = () => {
  return (
    <div>
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          speed={1}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#34b900"
        />
      </div>
    </div>
  );
};
