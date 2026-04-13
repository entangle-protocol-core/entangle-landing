'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Ultra-dense realistic starfield for the Milky Way effect
const totalParticles = 125000;

export function GalaxyClusters() {
  const groupRef = useRef<THREE.Group>(null);

  const { positions, colors, count } = useMemo(() => {
    const pos = new Float32Array(totalParticles * 3);
    const cols = new Float32Array(totalParticles * 3);

    let offset = 0;

    const addParticle = (x: number, y: number, z: number, c: THREE.Color, baseIntensity: number) => {
      if (offset >= totalParticles) return;

      // STRICT CENTER EXCLUSION ZONE
      // Prevents any stars from appearing right behind the red/blue spheres
      const distFromCenterSq = x * x + y * y;
      if (distFromCenterSq < 400 && z > -150) return; // Keep the core mostly empty

      // Add a random twinkling depth map effect on colors based on distance
      const depthFactor = Math.max(0.3, 1.0 - (Math.abs(z) - 50) / 300);
      const finalIntensity = baseIntensity * depthFactor;

      pos[offset * 3] = x;
      pos[offset * 3 + 1] = y;
      pos[offset * 3 + 2] = z;
      cols[offset * 3] = c.r * finalIntensity;
      cols[offset * 3 + 1] = c.g * finalIntensity;
      cols[offset * 3 + 2] = c.b * finalIntensity;
      offset++;
    };

    // Realistic astrophotography colors: brilliant white, icy blue, pale cyan, slight violet, deep blue
    const cWhite = new THREE.Color("#ffffff");
    const cIceBlue = new THREE.Color("#e0f0ff");
    const cCyan = new THREE.Color("#00d2ff");
    const cViolet = new THREE.Color("#d2c2ff");
    const cDeepBlue = new THREE.Color("#a3c4ff");

    const palette = [cWhite, cIceBlue, cWhite, cCyan, cViolet, cDeepBlue, cIceBlue];

    for (let i = 0; i < totalParticles; i++) {
      let x = 0, y = 0, z = 0;
      const rand = Math.random();

      // Band Angle: roughly 35 degrees diagonal
      const angle = Math.PI / 5.5;

      // 45% background filler stars uniformly distributed to stop the void from looking empty
      if (rand < 0.45) {
        x = (Math.random() - 0.5) * 1200;
        y = (Math.random() - 0.5) * 900;
        z = -100 - Math.random() * 300;
      } 
      // 40% Milky Way Band
      else if (rand < 0.85) {
        // Tapered band distribution
        const alongBand = (Math.random() - 0.5) * 1200; 
        
        // Triangular normal distribution for smooth dense center tapering off radially
        const spread = (Math.random() + Math.random() + Math.random() - 1.5) * 120;
        const widthTaper = 1.0 - Math.abs(alongBand) / 600; // taper the ends slightly
        const acrossBand = spread * Math.max(0.3, widthTaper);
        
        x = alongBand * Math.cos(angle) - acrossBand * Math.sin(angle);
        y = alongBand * Math.sin(angle) + acrossBand * Math.cos(angle);
        z = -120 - Math.random() * 150;
      } 
      // 15% Dense Nebula Clusters (heavy clumping along the band)
      else {
        // We pick from 35 pseudo-random cluster centers along the band
        const numClusters = 35;
        const clusterSeed = Math.floor(Math.random() * numClusters);
        
        // Deterministic pseudo-random generation based on cluster seed
        const alongBandOffset = Math.sin(clusterSeed * 11.1) * 450; 
        const acrossBandOffset = Math.sin(clusterSeed * 22.2) * 50;
        
        const cx = alongBandOffset * Math.cos(angle) - acrossBandOffset * Math.sin(angle);
        const cy = alongBandOffset * Math.sin(angle) + acrossBandOffset * Math.cos(angle);
        const cz = -120 - Math.abs(Math.sin(clusterSeed * 33.3) * 100);

        // Bell curve cluster spread
        const clusterSpread = (Math.random() + Math.random() + Math.random() - 1.5) * 45;
        // make clusters slightly stretched along the band
        const spreadX = clusterSpread * 1.5 * Math.cos(angle) - (Math.random() - 0.5) * 15 * Math.sin(angle);
        const spreadY = clusterSpread * 1.5 * Math.sin(angle) + (Math.random() - 0.5) * 15 * Math.cos(angle);
        
        x = cx + spreadX;
        y = cy + spreadY;
        z = cz + (Math.random() - 0.5) * 30;
      }

      const color = palette[Math.floor(Math.random() * palette.length)];
      
      // Variable stellar magnitude (brighter for select few stars)
      let baseIntensity = 0.2 + Math.random() * 0.6;
      if (Math.random() > 0.9) {
        baseIntensity = 0.8 + Math.random() * 0.7; // Bright star
      }
      if (Math.random() > 0.98) {
        baseIntensity = 1.5 + Math.random() * 1.0; // Dazzling star
      }

      addParticle(x, y, z, color, baseIntensity);
    }

    // Since we filtered some stars out at the center, we truncate the array
    const validPositions = new Float32Array(pos.buffer, 0, offset * 3);
    const validColors = new Float32Array(cols.buffer, 0, offset * 3);

    return { positions: validPositions, colors: validColors, count: offset };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
      const scroll = Math.min(1, scrollY / 2500);
      const t = state.clock.elapsedTime;

      // 1. Noticeable Majestically slow rotation (increased from 0.0003 for visibility)
      groupRef.current.rotation.z -= delta * 0.015; 
      
      // 2. Slow Orbit/Pivot (Simulates movement through space)
      groupRef.current.rotation.y = Math.sin(t * 0.08) * 0.06;
      groupRef.current.rotation.x = Math.cos(t * 0.08) * 0.06;

      // 3. Depth Parallax (Minor zoom effect on scroll)
      groupRef.current.position.z = -scroll * 60;
      
      // 4. Pointer Reaction (Subtle background parallax following mouse)
      const targetX = state.pointer.x * 4.0;
      const targetY = state.pointer.y * 4.0;
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * delta * 0.8;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * delta * 0.8;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" count={count} args={[colors, 3]} />
        </bufferGeometry>
        <PointMaterial
          vertexColors
          transparent
          size={0.6}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.85}
        />
      </points>
    </group>
  );
}
