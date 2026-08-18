import React from 'react';
// Importamos la imagen subiendo dos niveles (../../) para llegar a la raíz donde está tu ESCUDO.png
import escudoImg from '../../ESCUDO.png'; 

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
        src={escudoImg} // Usamos la variable de la imagen importada
        alt="Escudo Institución Educativa Técnica Simón Bolívar" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};
