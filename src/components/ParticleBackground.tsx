import { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    const particles = [];
    const particleContainer = document.querySelector('.particle-bg');
    
    if (!particleContainer) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 15;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particleContainer.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, duration * 1000);
    };

    const interval = setInterval(createParticle, 300);

    return () => {
      clearInterval(interval);
      // Clean up existing particles
      const existingParticles = particleContainer.querySelectorAll('.particle');
      existingParticles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return <div className="particle-bg" />;
};

export default ParticleBackground;