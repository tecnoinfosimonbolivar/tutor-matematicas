import React from 'react';

export const EscudoInstitucional: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center rounded-full bg-white shadow-sm overflow-hidden p-1 border border-blue-200 ${className}`}
      style={{ width: size, height: size }}
      title="Escudo Institución Educativa Técnica Simón Bolívar - Ibagué"
    >
      <img 
        src="./src/ESCUDO.png" 
        alt="Escudo Institucional" 
        className="w-full h-full object-contain"
        onError={(e) => {
          // Plan B por si el navegador móvil no encuentra la ruta relativa en producción
          (e.target as HTMLImageElement).src = 'src/ESCUDO.png';
        }}
      />
    </div>
  );
};

