
import { useEffect, useState } from "react";

export const HeatwaveAnimation = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Generate animated particles for heatwave effect
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient waves */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 via-red-200/30 to-yellow-200/30 animate-pulse"></div>
      
      {/* Heat particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-orange-400/60 rounded-full animate-bounce"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: '3s'
          }}
        />
      ))}
      
      {/* Rising heat waves */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-300/20 to-transparent animate-pulse"></div>
      
      {/* Floating heat distortion effect */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-radial from-orange-300/30 to-transparent rounded-full animate-ping"></div>
      <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-gradient-radial from-red-300/30 to-transparent rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
    </div>
  );
};
