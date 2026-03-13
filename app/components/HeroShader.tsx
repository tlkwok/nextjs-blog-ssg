"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export function HeroShader() {
  return (
    <div className="hero-shader">
      <MeshGradient
        colors={["#0f0f23", "#1e1b4b", "#312e81", "#4c1d95", "#7c3aed"]}
        distortion={0.7}
        swirl={0.15}
        grainMixer={0.05}
        grainOverlay={0.08}
        speed={0.5}
        scale={1.2}
        style={{ width: "100%", height: "100%" }}
        fit="cover"
      />
    </div>
  );
}
