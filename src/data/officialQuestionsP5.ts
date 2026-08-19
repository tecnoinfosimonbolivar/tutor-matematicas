// Banco Oficial de Preguntas ICFES Evaluar para Avanzar (Grados 9°, 10° y 11°)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
import { Question } from '../types';
import { OFFICIAL_GRADE_9 } from './officialQuestionsGrade9';
import { OFFICIAL_GRADE_10 } from './officialQuestionsGrade10';
import { OFFICIAL_GRADE_11 } from './officialQuestionsGrade11';

export const OFFICIAL_GRADE_9_10_11: Record<number, Question[]> = {
  9: OFFICIAL_GRADE_9,
  10: OFFICIAL_GRADE_10,
  11: OFFICIAL_GRADE_11
};
