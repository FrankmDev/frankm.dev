import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import "./particlesBG.css";

export default function ParticlesBG() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      const { loadFull } = await import("tsparticles");
      await initParticlesEngine(async (engine) => {
        await loadFull(engine);
      });
      setInit(true);
    };

    initializeParticles();
  }, []);

  const particlesLoaded = (container) => {};

  const particlesOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#0a0a0a",
        },
        opacity: 1,
      },
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      detectRetina: true,
      fpsLimit: 60,
      interactivity: {
        detectsOn: "window",
        events: {
          resize: true,
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          enable: true,
          speed: {
            min: 0.1,
            max: 0.5,
          },
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: 200,
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.5,
          },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        size: {
          value: {
            min: 1,
            max: 2,
          },
        },
      },
      responsive: [],
      smooth: false,
      style: {},
      themes: [],
      zLayers: 100,
    }),
    [],
  );
  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
          style={{
            zIndex: 1,
          }}
        />
      )}
    </>
  );
}
