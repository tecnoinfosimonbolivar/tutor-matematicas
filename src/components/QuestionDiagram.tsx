import React, { useState } from 'react';
import { Question } from '../types';
import { ZoomIn, ZoomOut, RotateCcw, Grid, Eye, Maximize2, Sparkles, BookOpen, Layers } from 'lucide-react';

interface QuestionDiagramProps {
  question: Question;
  className?: string;
  inChatBubble?: boolean;
  onOpenCuaderno?: () => void;
}

export const QuestionDiagram: React.FC<QuestionDiagramProps> = ({
  question,
  className = '',
  inChatBubble = false,
  onOpenCuaderno
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // If question explicitly has diagramType: 'none', don't render
  if (question.diagramType === 'none') {
    return null;
  }

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  const toggleGrid = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowGrid(prev => !prev);
  };

  // Render diagram based on question metadata or specific question id/content
  const renderSvgContent = () => {
    const qId = question.id;
    const grade = question.grade;
    const qNum = question.questionNumber;
    const lowerStmt = (question.statement || '').toLowerCase();
    const lowerTitle = (question.title || '').toLowerCase();

    // ==========================================
    // 1. GRADE 3° QUESTIONS
    // ==========================================
    if (grade === 3) {
      if (qNum === 1 || qId === 301) {
        // Fila escolar: Mario, Gabriela, Leonardo, Felipe, Alejandra
        return (
          <svg viewBox="0 0 540 180" className="w-full h-auto max-h-56">
            <rect width="540" height="180" fill="#f8fafc" rx="8" />
            {/* Tablero / Profesora a la izquierda */}
            <rect x="20" y="25" width="60" height="100" fill="#0f766e" rx="4" stroke="#134e4a" strokeWidth="2" />
            <text x="50" y="75" fill="#f0fdfa" fontSize="11" fontWeight="bold" textAnchor="middle">TABLERO</text>
            
            {/* Profesora */}
            <circle cx="110" cy="65" r="16" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
            <rect x="98" y="83" width="24" height="42" fill="#d97706" rx="4" />
            <text x="110" y="140" fill="#78350f" fontSize="10" fontWeight="bold" textAnchor="middle">Profesora</text>

            {/* Estudiante 1: Mario (1.º) */}
            <g transform="translate(160, 45)">
              <circle cx="20" cy="20" r="14" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
              <rect x="10" y="36" width="20" height="38" fill="#2563eb" rx="3" />
              <text x="20" y="90" fill="#1e3a8a" fontSize="11" fontWeight="bold" textAnchor="middle">1.º Mario</text>
            </g>

            {/* Estudiante 2: Gabriela (2.ª - DESTACADA) */}
            <g transform="translate(235, 45)">
              <rect x="-4" y="-4" width="48" height="100" fill="#fef3c7" rx="8" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,3" />
              <circle cx="20" cy="20" r="14" fill="#ec4899" stroke="#be185d" strokeWidth="2" />
              <rect x="10" y="36" width="20" height="38" fill="#db2777" rx="3" />
              <text x="20" y="90" fill="#9d174d" fontSize="11" fontWeight="extrabold" textAnchor="middle">2.ª Gabriela</text>
              <text x="20" y="103" fill="#b45309" fontSize="9" fontWeight="bold" textAnchor="middle">(Posición ?)</text>
            </g>

            {/* Estudiante 3: Leonardo (3.º) */}
            <g transform="translate(310, 45)">
              <circle cx="20" cy="20" r="14" fill="#10b981" stroke="#047857" strokeWidth="1.5" />
              <rect x="10" y="36" width="20" height="38" fill="#059669" rx="3" />
              <text x="20" y="90" fill="#065f46" fontSize="11" fontWeight="bold" textAnchor="middle">3.º Leonardo</text>
            </g>

            {/* Estudiante 4: Felipe (4.º) */}
            <g transform="translate(385, 45)">
              <circle cx="20" cy="20" r="14" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="1.5" />
              <rect x="10" y="36" width="20" height="38" fill="#7c3aed" rx="3" />
              <text x="20" y="90" fill="#4c1d95" fontSize="11" fontWeight="bold" textAnchor="middle">4.º Felipe</text>
            </g>

            {/* Estudiante 5: Alejandra (5.ª) */}
            <g transform="translate(460, 45)">
              <circle cx="20" cy="20" r="14" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
              <rect x="10" y="36" width="20" height="38" fill="#ea580c" rx="3" />
              <text x="20" y="90" fill="#7c2d12" fontSize="11" fontWeight="bold" textAnchor="middle">5.ª Alejandra</text>
            </g>

            {/* Flecha de orden */}
            <path d="M 125 160 L 515 160" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrow)" />
            <text x="320" y="174" fill="#64748b" fontSize="10" textAnchor="middle">Dirección de la fila (de 1.º a 5.º)</text>
          </svg>
        );
      }

      if (qNum === 2 || qId === 302) {
        // Rompecabezas rectangular con esquina triangular faltante
        return (
          <svg viewBox="0 0 520 180" className="w-full h-auto max-h-56">
            <rect width="520" height="180" fill="#f8fafc" rx="8" />
            {/* Rompecabezas incompleto */}
            <g transform="translate(30, 25)">
              <text x="100" y="-8" fill="#1e293b" fontSize="12" fontWeight="bold" textAnchor="middle">Rompecabezas de Miguel</text>
              {/* Rectángulo con recorte en esquina sup der */}
              <path d="M 0 0 L 140 0 L 200 60 L 200 120 L 0 120 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
              {/* Área faltante punteada */}
              <polygon points="140,0 200,0 200,60" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" />
              <text x="180" y="28" fill="#dc2626" fontSize="11" fontWeight="extrabold" textAnchor="middle">?</text>
              <text x="100" y="70" fill="#0369a1" fontSize="12" fontWeight="bold" textAnchor="middle">Fichas ya ubicadas</text>
            </g>

            {/* Fichas opciones */}
            <g transform="translate(280, 25)">
              <text x="110" y="-8" fill="#1e293b" fontSize="12" fontWeight="bold" textAnchor="middle">Fichas candidatas</text>
              {/* Opción A */}
              <g transform="translate(0, 10)">
                <polygon points="0,0 40,0 50,35 0,35" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
                <text x="25" y="48" fill="#475569" fontSize="11" fontWeight="bold" textAnchor="middle">A</text>
              </g>
              {/* Opción B */}
              <g transform="translate(65, 10)">
                <polygon points="0,0 45,0 22,35" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
                <text x="22" y="48" fill="#475569" fontSize="11" fontWeight="bold" textAnchor="middle">B</text>
              </g>
              {/* Opción C */}
              <g transform="translate(130, 10)">
                <polygon points="0,15 35,0 45,35 10,35" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
                <text x="22" y="48" fill="#475569" fontSize="11" fontWeight="bold" textAnchor="middle">C</text>
              </g>
              {/* Opción D (Correcta) */}
              <g transform="translate(190, 10)">
                <rect x="-4" y="-4" width="48" height="58" fill="#dcfce7" rx="6" stroke="#22c55e" strokeWidth="1.5" />
                <polygon points="0,0 38,0 38,38" fill="#86efac" stroke="#16a34a" strokeWidth="2" />
                <text x="20" y="50" fill="#15803d" fontSize="11" fontWeight="extrabold" textAnchor="middle">D (Ficha)</text>
              </g>
            </g>
          </svg>
        );
      }

      if (qNum === 4 || qId === 304) {
        // Cajas con tarjetas de colores (Liliana)
        return (
          <svg viewBox="0 0 540 180" className="w-full h-auto max-h-56">
            <rect width="540" height="180" fill="#f8fafc" rx="8" />
            <text x="270" y="20" fill="#1e293b" fontSize="12" fontWeight="bold" textAnchor="middle">
              Cajas del Concurso - Tarjetas para ganar boleta (Tarjeta Amarilla = Gana)
            </text>

            {/* Caja 1 */}
            <g transform="translate(20, 35)">
              <rect width="110" height="120" rx="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
              <rect x="0" y="0" width="110" height="24" rx="8" fill="#64748b" />
              <text x="55" y="16" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">CAJA 1</text>
              <rect x="15" y="35" width="80" height="40" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" rx="4" />
              <text x="55" y="58" fill="#475569" fontSize="11" fontWeight="bold" textAnchor="middle">10 Blancas</text>
              <text x="55" y="100" fill="#dc2626" fontSize="10" fontWeight="bold" textAnchor="middle">0 Amarillas</text>
              <text x="55" y="114" fill="#991b1b" fontSize="9" textAnchor="middle">(Imposible)</text>
            </g>

            {/* Caja 2 (SEGURA) */}
            <g transform="translate(150, 35)">
              <rect width="110" height="120" rx="8" fill="#fefce8" stroke="#eab308" strokeWidth="2.5" />
              <rect x="0" y="0" width="110" height="24" rx="8" fill="#ca8a04" />
              <text x="55" y="16" fill="#ffffff" fontSize="11" fontWeight="extrabold" textAnchor="middle">CAJA 2 ★</text>
              <rect x="15" y="35" width="80" height="40" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" rx="4" />
              <text x="55" y="58" fill="#854d0e" fontSize="11" fontWeight="extrabold" textAnchor="middle">10 Amarillas</text>
              <text x="55" y="100" fill="#16a34a" fontSize="11" fontWeight="extrabold" textAnchor="middle">¡100% SEGURO!</text>
              <text x="55" y="114" fill="#15803d" fontSize="9" textAnchor="middle">(Todas amarillas)</text>
            </g>

            {/* Caja 3 */}
            <g transform="translate(280, 35)">
              <rect width="110" height="120" rx="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
              <rect x="0" y="0" width="110" height="24" rx="8" fill="#64748b" />
              <text x="55" y="16" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">CAJA 3</text>
              <rect x="15" y="35" width="38" height="40" fill="#fef08a" stroke="#eab308" rx="3" />
              <text x="34" y="58" fill="#854d0e" fontSize="10" fontWeight="bold" textAnchor="middle">5 Am.</text>
              <rect x="57" y="35" width="38" height="40" fill="#f1f5f9" stroke="#cbd5e1" rx="3" />
              <text x="76" y="58" fill="#475569" fontSize="10" fontWeight="bold" textAnchor="middle">5 Bl.</text>
              <text x="55" y="100" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">50% Posible</text>
            </g>

            {/* Caja 4 */}
            <g transform="translate(410, 35)">
              <rect width="110" height="120" rx="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
              <rect x="0" y="0" width="110" height="24" rx="8" fill="#64748b" />
              <text x="55" y="16" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">CAJA 4</text>
              <rect x="15" y="35" width="48" height="40" fill="#fef08a" stroke="#eab308" rx="3" />
              <text x="39" y="58" fill="#854d0e" fontSize="10" fontWeight="bold" textAnchor="middle">7 Am.</text>
              <rect x="67" y="35" width="28" height="40" fill="#f1f5f9" stroke="#cbd5e1" rx="3" />
              <text x="81" y="58" fill="#475569" fontSize="10" fontWeight="bold" textAnchor="middle">3 Bl.</text>
              <text x="55" y="100" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">70% Probable</text>
            </g>
          </svg>
        );
      }
    }

    // ==========================================
    // 2. GRADE 5° QUESTIONS
    // ==========================================
    if (grade === 5) {
      if (qNum === 1 || qId === 501 || lowerTitle.includes('probabilidad') || lowerStmt.includes('fútbol')) {
        // Gráfico estadístico de deportes
        return (
          <svg viewBox="0 0 520 200" className="w-full h-auto max-h-56">
            <rect width="520" height="200" fill="#f8fafc" rx="8" />
            <text x="260" y="20" fill="#0f172a" fontSize="12" fontWeight="bold" textAnchor="middle">
              Gráfico: Preferencia Deportiva de los Estudiantes (Total = 100)
            </text>
            
            {/* Ejes */}
            <line x1="60" y1="160" x2="480" y2="160" stroke="#475569" strokeWidth="2" />
            <line x1="60" y1="35" x2="60" y2="160" stroke="#475569" strokeWidth="2" />

            {/* Marcas de eje Y */}
            <text x="50" y="163" fill="#64748b" fontSize="10" textAnchor="end">0</text>
            <line x1="55" y1="130" x2="480" y2="130" stroke="#e2e8f0" strokeDasharray="3,3" />
            <text x="50" y="133" fill="#64748b" fontSize="10" textAnchor="end">15</text>
            <line x1="55" y1="95" x2="480" y2="95" stroke="#e2e8f0" strokeDasharray="3,3" />
            <text x="50" y="98" fill="#64748b" fontSize="10" textAnchor="end">30</text>
            <line x1="55" y1="60" x2="480" y2="60" stroke="#e2e8f0" strokeDasharray="3,3" />
            <text x="50" y="63" fill="#64748b" fontSize="10" textAnchor="end">45</text>

            {/* Barra 1: Fútbol (45) */}
            <rect x="90" y="60" width="65" height="100" fill="#2563eb" rx="3" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="122" y="52" fill="#1d4ed8" fontSize="11" fontWeight="extrabold" textAnchor="middle">45</text>
            <text x="122" y="176" fill="#1e293b" fontSize="11" fontWeight="bold" textAnchor="middle">Fútbol</text>

            {/* Barra 2: Baloncesto (25) */}
            <rect x="190" y="105" width="65" height="55" fill="#f97316" rx="3" stroke="#ea580c" strokeWidth="1.5" />
            <text x="222" y="97" fill="#ea580c" fontSize="11" fontWeight="extrabold" textAnchor="middle">25</text>
            <text x="222" y="176" fill="#1e293b" fontSize="11" fontWeight="bold" textAnchor="middle">Baloncesto</text>

            {/* Barra 3: Voleibol (20) */}
            <rect x="290" y="115" width="65" height="45" fill="#10b981" rx="3" stroke="#059669" strokeWidth="1.5" />
            <text x="322" y="107" fill="#059669" fontSize="11" fontWeight="extrabold" textAnchor="middle">20</text>
            <text x="322" y="176" fill="#1e293b" fontSize="11" fontWeight="bold" textAnchor="middle">Voleibol</text>

            {/* Barra 4: Natación (10) */}
            <rect x="390" y="138" width="65" height="22" fill="#8b5cf6" rx="3" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="422" y="130" fill="#7c3aed" fontSize="11" fontWeight="extrabold" textAnchor="middle">10</text>
            <text x="422" y="176" fill="#1e293b" fontSize="11" fontWeight="bold" textAnchor="middle">Natación</text>
          </svg>
        );
      }

      if (qNum === 2 || qId === 502 || lowerStmt.includes('perímetro') || lowerStmt.includes('cuadrícula') || lowerTitle.includes('figura')) {
        // Cuadrícula de área y perímetro
        return (
          <svg viewBox="0 0 520 200" className="w-full h-auto max-h-56">
            <rect width="520" height="200" fill="#f8fafc" rx="8" />
            <text x="260" y="20" fill="#0f172a" fontSize="12" fontWeight="bold" textAnchor="middle">
              Cuadrícula de Área y Perímetro (Cada cuadrícula = 1 cm × 1 cm)
            </text>

            {/* Cuadrícula de fondo */}
            <g transform="translate(60, 35)">
              {/* Grilla 12x5 */}
              {Array.from({ length: 6 }).map((_, r) => (
                <line key={`r-${r}`} x1="0" y1={r * 26} x2="400" y2={r * 26} stroke="#cbd5e1" strokeWidth="1" />
              ))}
              {Array.from({ length: 16 }).map((_, c) => (
                <line key={`c-${c}`} x1={c * 26.6} y1="0" x2={c * 26.6} y2="130" stroke="#cbd5e1" strokeWidth="1" />
              ))}

              {/* Figura A (Rectángulo 4x3) */}
              <rect x={1 * 26.6} y={1 * 26} width={4 * 26.6} height={3 * 26} fill="#bfdbfe" fillOpacity="0.75" stroke="#1d4ed8" strokeWidth="2.5" />
              <text x={3 * 26.6} y={2.6 * 26} fill="#1e3a8a" fontSize="11" fontWeight="extrabold" textAnchor="middle">Figura 1</text>
              <text x={3 * 26.6} y={0.7 * 26} fill="#1d4ed8" fontSize="10" fontWeight="bold" textAnchor="middle">4 cm</text>
              <text x={0.4 * 26.6} y={2.6 * 26} fill="#1d4ed8" fontSize="10" fontWeight="bold" textAnchor="middle">3 cm</text>

              {/* Figura B (Forma en L) */}
              <path d={`M ${8 * 26.6} ${1 * 26} L ${13 * 26.6} ${1 * 26} L ${13 * 26.6} ${4 * 26} L ${11 * 26.6} ${4 * 26} L ${11 * 26.6} ${2.5 * 26} L ${8 * 26.6} ${2.5 * 26} Z`} fill="#fed7aa" fillOpacity="0.85" stroke="#ea580c" strokeWidth="2.5" />
              <text x={10.5 * 26.6} y={2 * 26} fill="#9a3412" fontSize="11" fontWeight="extrabold" textAnchor="middle">Figura 2</text>
            </g>

            <text x="260" y="188" fill="#475569" fontSize="10" textAnchor="middle">
              Cuenta los lados exteriores para el perímetro y las cuadrículas interiores para el área.
            </text>
          </svg>
        );
      }
    }

    // ==========================================
    // 3. GRADE 7° & 8° QUESTIONS
    // ==========================================
    if (grade === 7 || grade === 8) {
      if (lowerStmt.includes('triángulo') || lowerStmt.includes('pitágoras') || lowerStmt.includes('ángulo') || lowerTitle.includes('triángulo')) {
        // Triángulo rectángulo con cotas y ángulo recto
        return (
          <svg viewBox="0 0 520 200" className="w-full h-auto max-h-56">
            <rect width="520" height="200" fill="#f8fafc" rx="8" />
            <text x="260" y="20" fill="#0f172a" fontSize="12" fontWeight="bold" textAnchor="middle">
              Esquema Geométrico: Triángulo Rectángulo y Relación de Medidas
            </text>

            <g transform="translate(130, 40)">
              {/* Triángulo */}
              <polygon points="0,120 220,120 220,0" fill="#e0e7ff" stroke="#4338ca" strokeWidth="2.5" />
              
              {/* Símbolo ángulo recto */}
              <rect x="196" y="96" width="24" height="24" fill="none" stroke="#4338ca" strokeWidth="1.5" />
              <circle cx="208" cy="108" r="2.5" fill="#4338ca" />

              {/* Cotas */}
              {/* Base (b) */}
              <line x1="0" y1="138" x2="220" y2="138" stroke="#374151" strokeWidth="1.5" />
              <text x="110" y="154" fill="#1f2937" fontSize="11" fontWeight="bold" textAnchor="middle">Cateto Base = 12 cm</text>

              {/* Altura (a) */}
              <line x1="238" y1="0" x2="238" y2="120" stroke="#374151" strokeWidth="1.5" />
              <text x="250" y="65" fill="#1f2937" fontSize="11" fontWeight="bold" textAnchor="start">Cateto Altura = 9 cm</text>

              {/* Hipotenusa (c) */}
              <text x="95" y="50" fill="#4338ca" fontSize="12" fontWeight="extrabold" textAnchor="middle">Hipotenusa c = ?</text>
            </g>
          </svg>
        );
      }

      if (lowerStmt.includes('fracción') || lowerStmt.includes('recta') || lowerTitle.includes('recta')) {
        // Recta numérica
        return (
          <svg viewBox="0 0 520 160" className="w-full h-auto max-h-48">
            <rect width="520" height="160" fill="#f8fafc" rx="8" />
            <text x="260" y="24" fill="#0f172a" fontSize="12" fontWeight="bold" textAnchor="middle">
              Recta Numérica Graduada con Intervalos Fraccionarios
            </text>

            <g transform="translate(40, 70)">
              {/* Línea principal */}
              <line x1="0" y1="0" x2="440" y2="0" stroke="#1e293b" strokeWidth="2.5" />
              <polygon points="440,-5 450,0 440,5" fill="#1e293b" />
              <polygon points="0,-5 -10,0 0,5" fill="#1e293b" />

              {/* Marcas principales 0, 1, 2 */}
              {[
                { x: 40, label: '0', val: 0 },
                { x: 220, label: '1', val: 1 },
                { x: 400, label: '2', val: 2 }
              ].map(m => (
                <g key={m.label} transform={`translate(${m.x}, 0)`}>
                  <line x1="0" y1="-14" x2="0" y2="14" stroke="#0f172a" strokeWidth="2.5" />
                  <text x="0" y="32" fill="#0f172a" fontSize="13" fontWeight="extrabold" textAnchor="middle">{m.label}</text>
                </g>
              ))}

              {/* Sub-marcas de cuartos */}
              {[
                { x: 85, label: '1/4' },
                { x: 130, label: '1/2' },
                { x: 175, label: '3/4' },
                { x: 265, label: '5/4' },
                { x: 310, label: '3/2' },
                { x: 355, label: '7/4' }
              ].map(sub => (
                <g key={sub.label} transform={`translate(${sub.x}, 0)`}>
                  <line x1="0" y1="-8" x2="0" y2="8" stroke="#64748b" strokeWidth="1.5" />
                  <text x="0" y="-14" fill="#64748b" fontSize="10" textAnchor="middle">{sub.label}</text>
                </g>
              ))}

              {/* Punto P destacado */}
              <circle cx="175" cy="0" r="6" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
              <text x="175" y="-28" fill="#dc2626" fontSize="12" fontWeight="extrabold" textAnchor="middle">Punto P</text>
            </g>
          </svg>
        );
      }
    }

    // ==========================================
    // 4. GRADE 9°, 10° & 11° QUESTIONS (MEDIA ACADÉMICA / SABER 11)
    // ==========================================
    if (grade >= 9) {
      if (qNum === 2 || qId === 1102 || lowerTitle.includes('piedra') || lowerStmt.includes('tabla 2') || lowerStmt.includes('casilla')) {
        // Tabla de doble entrada: Piedra, Papel o Tijera
        return (
          <svg viewBox="0 0 540 220" className="w-full h-auto max-h-64">
            <rect width="540" height="220" fill="#f8fafc" rx="8" />
            <text x="270" y="20" fill="#0f172a" fontSize="12" fontWeight="bold" textAnchor="middle">
              Tabla 2: Comida que obtendría Andrés según las jugadas
            </text>

            <g transform="translate(30, 35)">
              {/* Encabezado columnas */}
              <rect x="90" y="0" width="140" height="26" fill="#1e3a8a" stroke="#0f172a" />
              <text x="160" y="17" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Diego: Piedra</text>
              <rect x="230" y="0" width="140" height="26" fill="#1e3a8a" stroke="#0f172a" />
              <text x="300" y="17" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Diego: Papel</text>
              <rect x="370" y="0" width="140" height="26" fill="#1e3a8a" stroke="#0f172a" />
              <text x="440" y="17" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Diego: Tijera</text>

              {/* Fila 1: Andrés Piedra */}
              <rect x="0" y="26" width="90" height="46" fill="#1e3a8a" stroke="#0f172a" />
              <text x="45" y="52" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Andrés: Piedra</text>
              
              <rect x="90" y="26" width="140" height="46" fill="#ffffff" stroke="#94a3b8" />
              <text x="160" y="46" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">Casilla 1: Sándwich</text>
              <text x="160" y="60" fill="#16a34a" fontSize="9" textAnchor="middle">(Empate: correcto)</text>

              <rect x="230" y="26" width="140" height="46" fill="#ffffff" stroke="#94a3b8" />
              <text x="300" y="46" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">Casilla 4: Nada</text>
              <text x="300" y="60" fill="#16a34a" fontSize="9" textAnchor="middle">(Diego gana: correcto)</text>

              <rect x="370" y="26" width="140" height="46" fill="#ffffff" stroke="#94a3b8" />
              <text x="440" y="46" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">Casilla 7: Sándwich y fruta</text>
              <text x="440" y="60" fill="#16a34a" fontSize="9" textAnchor="middle">(Andrés gana: correcto)</text>

              {/* Fila 2: Andrés Papel */}
              <rect x="0" y="72" width="90" height="46" fill="#1e3a8a" stroke="#0f172a" />
              <text x="45" y="98" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Andrés: Papel</text>

              <rect x="90" y="72" width="140" height="46" fill="#ffffff" stroke="#94a3b8" />
              <text x="160" y="92" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">Casilla 2: Sándwich y fruta</text>
              <text x="160" y="106" fill="#16a34a" fontSize="9" textAnchor="middle">(Andrés gana: correcto)</text>

              <rect x="230" y="72" width="140" height="46" fill="#ffffff" stroke="#94a3b8" />
              <text x="300" y="92" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">Casilla 5: Sándwich</text>
              <text x="300" y="106" fill="#16a34a" fontSize="9" textAnchor="middle">(Empate: correcto)</text>

              <rect x="370" y="72" width="140" height="46" fill="#ffffff" stroke="#94a3b8" />
              <text x="440" y="92" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">Casilla 8: Nada</text>
              <text x="440" y="106" fill="#16a34a" fontSize="9" textAnchor="middle">(Diego gana: correcto)</text>

              {/* Fila 3: Andrés Tijera */}
              <rect x="0" y="118" width="90" height="50" fill="#1e3a8a" stroke="#0f172a" />
              <text x="45" y="146" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Andrés: Tijera</text>

              {/* CASILLA 3 INCORRECTA DESTACADA */}
              <rect x="90" y="118" width="140" height="50" fill="#fee2e2" stroke="#dc2626" strokeWidth="2.5" />
              <text x="160" y="138" fill="#991b1b" fontSize="10" fontWeight="extrabold" textAnchor="middle">Casilla 3: Sándwich y fruta</text>
              <text x="160" y="154" fill="#dc2626" fontSize="10" fontWeight="extrabold" textAnchor="middle">⚠️ [ERROR: Diego gana]</text>

              <rect x="230" y="118" width="140" height="50" fill="#ffffff" stroke="#94a3b8" />
              <text x="300" y="138" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">Casilla 6: Sándwich y fruta</text>
              <text x="300" y="154" fill="#16a34a" fontSize="9" textAnchor="middle">(Andrés gana: correcto)</text>

              <rect x="370" y="118" width="140" height="50" fill="#ffffff" stroke="#94a3b8" />
              <text x="440" y="138" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">Casilla 9: Sándwich</text>
              <text x="440" y="154" fill="#16a34a" fontSize="9" textAnchor="middle">(Empate: correcto)</text>
            </g>
          </svg>
        );
      }

      if (lowerStmt.includes('función') || lowerStmt.includes('plano') || lowerStmt.includes('parábola') || lowerTitle.includes('plano')) {
        // Plano cartesiano (x, y) con función
        return (
          <svg viewBox="0 0 520 200" className="w-full h-auto max-h-56">
            <rect width="520" height="200" fill="#f8fafc" rx="8" />
            <text x="260" y="20" fill="#0f172a" fontSize="12" fontWeight="bold" textAnchor="middle">
              Plano Cartesiano ℝ² - Comportamiento de Funciones y Puntos Críticos
            </text>

            <g transform="translate(260, 110)">
              {/* Cuadrícula interna */}
              {[-80, -40, 40, 80].map(v => (
                <React.Fragment key={v}>
                  <line x1={v} y1="-80" x2={v} y2="80" stroke="#e2e8f0" strokeWidth="1" />
                  <line x1="-220" y1={v} x2="220" y2={v} stroke="#e2e8f0" strokeWidth="1" />
                </React.Fragment>
              ))}

              {/* Ejes principales */}
              <line x1="-220" y1="0" x2="220" y2="0" stroke="#0f172a" strokeWidth="2" />
              <line x1="0" y1="-85" x2="0" y2="80" stroke="#0f172a" strokeWidth="2" />
              <text x="225" y="4" fill="#0f172a" fontSize="12" fontWeight="bold">X</text>
              <text x="4" y="-85" fill="#0f172a" fontSize="12" fontWeight="bold">Y</text>

              {/* Curva de función f(x) */}
              <path d="M -160 60 Q -60 -70 0 -10 T 60 50 T 160 -60" fill="none" stroke="#2563eb" strokeWidth="3" />
              
              {/* Puntos destacados */}
              <circle cx="0" cy="-10" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              <text x="12" y="-12" fill="#ef4444" fontSize="10" fontWeight="bold">(0, f(0))</text>

              <circle cx="95" cy="0" r="5" fill="#16a34a" stroke="#ffffff" strokeWidth="1.5" />
              <text x="95" y="16" fill="#16a34a" fontSize="10" fontWeight="bold">Raíz (x₀, 0)</text>
            </g>
          </svg>
        );
      }
    }

    // ==========================================
    // 5. GENERIC INSTITUTIONAL MATHEMATICAL SCHEME
    // ==========================================
    return (
      <svg viewBox="0 0 520 180" className="w-full h-auto max-h-56">
        <rect width="520" height="180" fill="#f8fafc" rx="8" />
        <rect x="10" y="10" width="500" height="160" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />

        {/* Encabezado del esquema */}
        <rect x="10" y="10" width="500" height="28" fill="#1e3a8a" rx="6" />
        <text x="260" y="28" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
          🏛️ I.E. TÉCNICA SIMÓN BOLÍVAR - FICHA TÉCNICA VISUAL ICFES
        </text>

        {/* Paneles de datos */}
        <g transform="translate(30, 50)">
          {/* Panel Izquierdo: Competencia y Componente */}
          <rect x="0" y="0" width="220" height="100" fill="#eff6ff" rx="6" stroke="#bfdbfe" strokeWidth="1.5" />
          <text x="15" y="24" fill="#1e40af" fontSize="11" fontWeight="bold">📊 COMPONENTE:</text>
          <text x="15" y="42" fill="#1e293b" fontSize="10" fontWeight="semibold">{question.component}</text>
          
          <text x="15" y="68" fill="#1e40af" fontSize="11" fontWeight="bold">🎯 COMPETENCIA:</text>
          <text x="15" y="86" fill="#1e293b" fontSize="10" fontWeight="semibold">{question.competency}</text>

          {/* Panel Derecho: Modelo Mental para el Cuaderno */}
          <rect x="240" y="0" width="220" height="100" fill="#f0fdf4" rx="6" stroke="#bbf7d0" strokeWidth="1.5" />
          <text x="255" y="24" fill="#15803d" fontSize="11" fontWeight="bold">📓 RUTA PARA TU CUADERNO:</text>
          <text x="255" y="44" fill="#166534" fontSize="10">• Paso 1: Anota datos conocidos</text>
          <text x="255" y="62" fill="#166534" fontSize="10">• Paso 2: Traza el esquema geométrico</text>
          <text x="255" y="80" fill="#166534" fontSize="10">• Paso 3: Resuelve operaciones paso a paso</text>
        </g>
      </svg>
    );
  };

  return (
    <div className={`bg-white rounded-xl border border-blue-200 shadow-sm overflow-hidden my-2 ${className}`}>
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#1a365d] to-[#2b4c7e] text-white px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <Layers className="w-4 h-4 text-amber-300 shrink-0" />
          <div className="min-w-0">
            <h4 className="text-xs font-bold truncate leading-tight">
              Figura / Diagrama Oficial - Pregunta #{question.questionNumber}
            </h4>
            <p className="text-[10px] text-blue-200 truncate leading-tight">
              Grado {question.grade}° • {question.component}
            </p>
          </div>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handleZoomOut}
            className="p-1 rounded bg-blue-900/80 hover:bg-blue-800 text-blue-100 text-xs transition-colors"
            title="Alejar (-)"
            aria-label="Alejar"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={handleResetZoom}
            className="px-1.5 py-0.5 rounded bg-blue-900/80 hover:bg-blue-800 text-blue-100 text-[10px] font-mono font-bold transition-colors"
            title="Restablecer escala (100%)"
          >
            {Math.round(zoomLevel * 100)}%
          </button>

          <button
            onClick={handleZoomIn}
            className="p-1 rounded bg-blue-900/80 hover:bg-blue-800 text-blue-100 text-xs transition-colors"
            title="Acercar (+)"
            aria-label="Acercar"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={toggleGrid}
            className={`p-1 rounded text-xs transition-colors ${
              showGrid ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-blue-900/80 text-blue-100 hover:bg-blue-800'
            }`}
            title="Activar/desactivar cuadrícula de guía"
            aria-label="Cuadrícula"
          >
            <Grid className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="p-1 rounded bg-blue-900/80 hover:bg-blue-800 text-blue-100 text-xs transition-colors"
            title="Ver en pantalla completa para calcar en el cuaderno"
            aria-label="Ampliar"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* SVG Canvas Container with Zoom & Optional Grid */}
      <div className="relative p-2 sm:p-3 bg-slate-50 flex items-center justify-center overflow-auto min-h-[160px]">
        {/* Optional Grid Overlay */}
        {showGrid && (
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />
        )}

        <div 
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
          className="transition-transform duration-150 w-full flex items-center justify-center"
        >
          {renderSvgContent()}
        </div>
      </div>

      {/* Pedagogical Note / Action Bar */}
      <div className="bg-blue-50/90 border-t border-blue-200/80 px-3 py-1.5 flex items-center justify-between text-[11px] gap-2">
        <span className="text-blue-950 font-semibold flex items-center gap-1 truncate">
          <BookOpen className="w-3.5 h-3.5 text-blue-700 shrink-0" />
          <span>Dibuja este esquema en tu cuaderno para la Fase 2 (Comprender).</span>
        </span>

        {onOpenCuaderno && (
          <button
            onClick={onOpenCuaderno}
            className="px-2 py-0.5 rounded bg-blue-700 hover:bg-blue-800 text-white font-bold text-[10px] shrink-0 transition-colors shadow-xs"
          >
            Abrir Cuaderno
          </button>
        )}
      </div>

      {/* Fullscreen Inspection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="bg-[#1a365d] text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-300" />
                <h3 className="font-bold text-sm sm:text-base">
                  Ampliación Vectorial - Pregunta #{question.questionNumber}: {question.title}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-blue-900/80 hover:bg-blue-800 text-white font-bold text-sm"
              >
                ✕ Cerrar
              </button>
            </div>

            <div className="p-6 bg-slate-100 flex-1 overflow-auto flex items-center justify-center">
              <div className="w-full max-w-2xl bg-white p-4 rounded-xl shadow-md border border-slate-200">
                {renderSvgContent()}
              </div>
            </div>

            <div className="p-4 bg-white border-t border-gray-200 flex items-center justify-between">
              <p className="text-xs text-gray-600">
                💡 Utiliza este gráfico para detallar los ángulos, medidas y ejes en tu cuaderno de apuntes.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-[#1a365d] hover:bg-blue-900 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Volver a la Pregunta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
