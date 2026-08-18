import React from 'react';
// IMPORTANTE: Importamos la imagen usando la ruta relativa correcta desde 'components/' hacia 'src/'
import escudoImg from '../ESCUDO.png'; 

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
        src={escudoImg} // Pasamos la variable que contiene la imagen procesada por Vite
        alt="Escudo Institución Educativa Técnica Simón Bolívar" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

