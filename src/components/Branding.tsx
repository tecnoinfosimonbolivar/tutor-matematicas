import React from 'react';

interface EscudoProps {
  className?: string;
  size?: number;
}

export const EscudoInstitucional: React.FC<EscudoProps> = ({ className = '', size = 48 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center rounded-full bg-white shadow-sm overflow-hidden p-1 border border-blue-200 ${className}`}
      style={{ width: size, height: size }}
      title="Escudo Institución Educativa Técnica Simón Bolívar - Ibagué"
    >
      <img 
        src="/ESCUDO.png" // Apunta directamente a la carpeta public en producción
        alt="Escudo Institución Educativa Técnica Simón Bolívar" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

