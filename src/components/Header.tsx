import React from 'react';
import { BookOpen, GraduationCap, CheckCircle, Volume2, VolumeX, Menu, Award, FileText, UserCheck, RefreshCw } from 'lucide-react';
import { EscudoInstitucional, LogoTecnoInfo } from './Branding';
import { GRADES_AVAILABLE } from '../data/questionBank';

interface HeaderProps {
  currentGrade: number | null;
  onSelectGrade: (grade: number) => void;
  studentName: string;
  onOpenCuaderno: () => void;
  onOpenEvidence: () => void;
  speechEnabled: boolean;
  onToggleSpeech: () => void;
  onToggleMobileSidebar: () => void;
  solvedCount: number;
  onResetProfile?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentGrade,
  onSelectGrade,
  studentName,
  onOpenCuaderno,
  onOpenEvidence,
  speechEnabled,
  onToggleSpeech,
  onToggleMobileSidebar,
  solvedCount,
  onResetProfile
}) => {
  return (
    <header className="flex flex-col md:flex-row items-stretch md:items-center justify-between bg-[#1a365d] px-4 md:px-6 py-2.5 md:py-3 text-white shadow-lg z-30 shrink-0 border-b border-blue-900/50 gap-2">
      {/* Left branding */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button 
            onClick={onToggleMobileSidebar}
            className="md:hidden p-1.5 rounded-lg bg-blue-900/60 text-white hover:bg-blue-800"
            title="Abrir menú y competencias"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <EscudoInstitucional size={42} className="bg-white/95" />
          
          <div>
            <h1 className="text-sm md:text-base font-black leading-tight uppercase tracking-tight text-white flex items-center gap-1.5">
              I.E. Técnica Simón Bolívar
              <span className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/30 text-blue-200 border border-blue-400/30">
                Ibagué
              </span>
            </h1>
            <p className="text-[10px] text-blue-200/90 italic font-medium">
              "Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"
            </p>
          </div>
        </div>

        {/* Mobile Status badge */}
        <div className="md:hidden flex items-center gap-1.5 bg-blue-950/60 px-2.5 py-1 rounded-full border border-blue-400/20 text-[10px]">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="font-semibold text-green-300">{studentName || 'En Línea'}</span>
        </div>
      </div>

      {/* Middle Controls: Grade Quick Select & Actions */}
      <div className="flex items-center justify-between md:justify-end gap-2 flex-wrap">
        {/* Student Profile identifier */}
        {studentName && (
          <button
            onClick={onResetProfile}
            className="hidden lg:flex items-center gap-1 bg-blue-950/60 hover:bg-blue-900 px-2.5 py-1 rounded-lg border border-blue-400/30 text-xs text-blue-100 font-semibold transition-colors"
            title="Cambiar datos de estudiante"
          >
            <span className="text-amber-300 font-bold">👤 {studentName}</span>
            <RefreshCw className="w-3 h-3 text-blue-300 ml-1 opacity-70" />
          </button>
        )}

        {/* Grade picker */}
        <div className="flex items-center bg-blue-950/70 rounded-lg p-1 border border-blue-400/30">
          <GraduationCap className="w-3.5 h-3.5 text-blue-300 ml-1.5 mr-1" />
          <span className="text-[11px] font-bold text-blue-200 mr-1.5">Grado:</span>
          <select
            value={currentGrade || ''}
            onChange={(e) => {
              if (e.target.value) {
                onSelectGrade(Number(e.target.value));
              }
            }}
            className="bg-[#1a365d] text-white text-xs font-bold rounded px-2 py-1 outline-none border border-blue-400/40 cursor-pointer focus:ring-1 focus:ring-blue-300"
          >
            <option value="" disabled>Seleccionar...</option>
            {GRADES_AVAILABLE.map((g) => (
              <option key={g} value={g} className="bg-slate-900 text-white font-medium">
                {g}° Grado {g >= 10 ? '(Media)' : g >= 6 ? '(Secundaria)' : '(Primaria)'}
              </option>
            ))}
          </select>
        </div>

        {/* Cuaderno Digital button */}
        <button
          onClick={onOpenCuaderno}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/80 hover:bg-blue-600 text-white rounded-lg text-xs font-bold transition-colors border border-blue-400/40 shadow-sm"
          title="Abrir cuaderno digital de dibujo y operaciones"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Cuaderno</span>
        </button>

        {/* Evidence report button */}
        <button
          onClick={onOpenEvidence}
          className="flex items-center gap-1 px-3 py-1.5 bg-emerald-700/80 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors border border-emerald-400/40 shadow-sm"
          title="Ver registro de evidencias y enlace institucional"
        >
          <Award className="w-3.5 h-3.5 text-emerald-300" />
          <span className="hidden sm:inline">Evidencias</span>
          <span className="bg-emerald-950/60 px-1 rounded text-[10px] ml-0.5">{solvedCount}</span>
        </button>

        {/* Voice TTS Toggle */}
        <button
          onClick={onToggleSpeech}
          className={`p-1.5 rounded-lg border transition-colors ${
            speechEnabled
              ? 'bg-amber-500/20 text-amber-300 border-amber-400/40'
              : 'bg-blue-950/50 text-gray-400 border-blue-400/20 hover:text-white'
          }`}
          title={speechEnabled ? 'Voz Socrática Activada (Lectura en voz alta)' : 'Activar lectura por voz'}
        >
          {speechEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        {/* Desktop Status */}
        <div className="hidden md:block text-right pl-2 border-l border-blue-800">
          <span className="block text-[11px] font-extrabold uppercase tracking-wider text-amber-300">
            Área de MATEMÁTICAS
          </span>
          <div className="flex items-center justify-end space-x-1.5 mt-0.5">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-[10px] font-medium text-blue-100">Tutor Socrático En Línea</span>
          </div>
        </div>
      </div>
    </header>
  );
};
