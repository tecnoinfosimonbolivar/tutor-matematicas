// Comprehensive Parser for Student Onboarding, Grade, and Question Number

export interface ParsedStudentInput {
  name?: string;
  grade?: number;
  questionNumber?: number;
  isInitialOnboarding: boolean;
  isSwitchingQuestion: boolean;
  missingFields: ('name' | 'grade')[];
  isIdentityMsg: boolean;
}

// Map of word representations for question numbers
const WORD_TO_QUESTION: Record<string, number> = {
  'uno': 1, 'primero': 1, 'primera': 1, 'primer': 1, '1': 1, '01': 1,
  'dos': 2, 'segundo': 2, 'segunda': 2, '2': 2, '02': 2,
  'tres': 3, 'tercero': 3, 'tercera': 3, 'tercer': 3, '3': 3, '03': 3,
  'cuatro': 4, 'cuarto': 4, 'cuarta': 4, '4': 4, '04': 4,
  'cinco': 5, 'quinto': 5, 'quinta': 5, '5': 5, '05': 5,
  'seis': 6, 'sexto': 6, 'sexta': 6, '6': 6, '06': 6,
  'siete': 7, 'septimo': 7, 'séptimo': 7, 'septima': 7, 'séptima': 7, '7': 7, '07': 7,
  'ocho': 8, 'octavo': 8, 'octava': 8, '8': 8, '08': 8,
  'nueve': 9, 'noveno': 9, 'novena': 9, '9': 9, '09': 9,
  'diez': 10, 'decimo': 10, 'décimo': 10, 'decima': 10, 'décima': 10, '10': 10,
  'once': 11, 'undecimo': 11, 'undécimo': 11, 'undecima': 11, 'undécima': 11, '11': 11,
  'doce': 12, 'duodecimo': 12, 'duodécimo': 12, '12': 12,
  'trece': 13, '13': 13,
  'catorce': 14, '14': 14,
  'quince': 15, '15': 15,
  'dieciseis': 16, 'dieciséis': 16, '16': 16,
  'diecisiete': 17, '17': 17,
  'dieciocho': 18, '18': 18,
  'diecinueve': 19, '19': 19,
  'veinte': 20, 'vigesimo': 20, 'vigésimo': 20, '20': 20
};

// Normalize text: remove multiple spaces, accents for easy matching
function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function detectGradeFromText(text: string): number | undefined {
  const norm = normalizeText(text);

  // 1. Group code checks like 301, 302, 401, 402, 501, 601, 701, 801, 901, 1001, 1101, 1102
  const groupCodeMatch = norm.match(/\b(30[1-9]|40[1-9]|50[1-9]|60[1-9]|70[1-9]|80[1-9]|90[1-9]|100[1-9]|110[1-9])\b/);
  if (groupCodeMatch) {
    const code = parseInt(groupCodeMatch[1], 10);
    if (code >= 300 && code < 400) return 3;
    if (code >= 400 && code < 500) return 4;
    if (code >= 500 && code < 600) return 5;
    if (code >= 600 && code < 700) return 6;
    if (code >= 700 && code < 800) return 7;
    if (code >= 800 && code < 900) return 8;
    if (code >= 900 && code < 1000) return 9;
    if (code >= 1000 && code < 1100) return 10;
    if (code >= 1100 && code < 1200) return 11;
  }

  // 2. Sub-group format like 3.1, 3.2, 4.1, 4.2, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1 or 3-1, 4-2, etc.
  const subGroupMatch = norm.match(/\b(3|4|5|6|7|8|9|10|11)[.\-_]([1-9])\b/);
  if (subGroupMatch) {
    return parseInt(subGroupMatch[1], 10);
  }

  // 3. Word patterns for grades
  if (/\b(tercero|tercera|tercer grado|grado tercero)\b/.test(norm)) return 3;
  if (/\b(cuarto|cuarta|cuarto grado|grado cuarto)\b/.test(norm)) return 4;
  if (/\b(quinto|quinta|quinto grado|grado quinto)\b/.test(norm)) return 5;
  if (/\b(sexto|sexta|sexto grado|grado sexto)\b/.test(norm)) return 6;
  if (/\b(septimo|septima|septimo grado|grado septimo)\b/.test(norm)) return 7;
  if (/\b(octavo|octava|octavo grado|grado octavo)\b/.test(norm)) return 8;
  if (/\b(noveno|novena|noveno grado|grado noveno)\b/.test(norm)) return 9;
  if (/\b(decimo|decima|decimo grado|grado decimo)\b/.test(norm)) return 10;
  if (/\b(undecimo|undecima|once|undecimo grado|grado undecimo|grado once)\b/.test(norm)) return 11;

  // 4. Numeric formats: "grado 7", "7°", "7º", "7mo", "7mo grado", "7to", "7ro", "7do", "en 7"
  const gradeExplicitNumMatch = norm.match(/(?:grado|curso|en el grado|del grado|en)\s*[:#]?\s*(\d{1,2})\b/);
  if (gradeExplicitNumMatch) {
    const g = parseInt(gradeExplicitNumMatch[1], 10);
    if (g >= 3 && g <= 11) return g;
  }

  // 5. Standalone degree symbol or suffix: 3°, 7°, 11°, 6to, 7mo, 8vo, 9no, 10mo, 11mo
  const suffixMatch = norm.match(/\b([3-9]|10|11)\s*(?:°|º|vo|mo|to|ro|do|grade)\b/);
  if (suffixMatch) {
    const g = parseInt(suffixMatch[1], 10);
    if (g >= 3 && g <= 11) return g;
  }

  return undefined;
}

export function detectQuestionNumberFromText(text: string): number | undefined {
  const norm = normalizeText(text);

  // 1. Direct regex matching "pregunta [numero|palabra]"
  const qRegex = /(?:pregunta|pregunta\s*#|número\s*de\s*pregunta|numero\s*de\s*pregunta|num\s*pregunta|pregunta\s*número|pregunta\s*numero|p|vamos\s*a\s*la|ir\s*a\s*la|empezar\s*en\s*la|iniciar\s*en\s*la|voy\s*en\s*la|estoy\s*en\s*la)\s*[:#]?\s*([a-z0-9]+)/i;
  const qMatch = norm.match(qRegex);
  if (qMatch) {
    const token = qMatch[1];
    if (WORD_TO_QUESTION[token] !== undefined) {
      return WORD_TO_QUESTION[token];
    }
    const num = parseInt(token, 10);
    if (!isNaN(num) && num >= 1 && num <= 20) {
      return num;
    }
  }

  // 2. Trailing question number pattern like "... pregunta 20" or "... pregunta veinte"
  const trailingMatch = norm.match(/\bpregunta\s+([a-z0-9]+)\b/);
  if (trailingMatch) {
    const token = trailingMatch[1];
    if (WORD_TO_QUESTION[token] !== undefined) {
      return WORD_TO_QUESTION[token];
    }
    const num = parseInt(token, 10);
    if (!isNaN(num) && num >= 1 && num <= 20) {
      return num;
    }
  }

  return undefined;
}

export function detectStudentNameFromText(
  text: string, 
  existingName?: string
): string | undefined {
  const trimmed = text.trim();

  // Pattern 1: Explicit introductions: "soy X", "me llamo X", "mi nombre es X", "nombre: X"
  const nameExplicitMatch = trimmed.match(/(?:me llamo|mi nombre es|soy|nombre\s*[:=])\s+([A-Za-zÁÉÍÓÚáéíóúñÑ\s]{2,40})/i);
  if (nameExplicitMatch) {
    let candidate = nameExplicitMatch[1].trim();
    // Stop at keywords like "del grado", "de grado", "grado", "curso", "pregunta", "de 7", etc.
    candidate = candidate.replace(/\b(del\s+grado|de\s+grado|en\s+el\s+grado|grado|curso|pregunta|numero|de|\d+|°).*/i, '').trim();
    if (candidate.length >= 2 && !/^(tercero|cuarto|quinto|sexto|septimo|octavo|noveno|decimo|undecimo|once)$/i.test(candidate)) {
      return candidate;
    }
  }

  // Pattern 2: Name appears before "GRADO" or "DE GRADO" or "CURSO"
  const beforeGradeMatch = trimmed.match(/^([A-Za-zÁÉÍÓÚáéíóúñÑ\s]{2,35})\s+(?:del\s+grado|de\s+grado|en\s+el\s+grado|grado|curso|\d+°|pregunta)/i);
  if (beforeGradeMatch) {
    let candidate = beforeGradeMatch[1].trim();
    candidate = candidate.replace(/^(hola|buenas|tutor|profe|profesor|señor|estudiante)\s*,?\s*/i, '').trim();
    if (candidate.length >= 2 && !['buenas', 'hola', 'tutor', 'estudiante'].includes(candidate.toLowerCase())) {
      return candidate;
    }
  }

  // Pattern 3: If no name exists yet, and message is just 1-4 words with letters (e.g. "Harrison Rene Valencia Motta")
  if (!existingName) {
    const isCleanName = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,40}$/.test(trimmed);
    const norm = normalizeText(trimmed);
    const isKeyword = ['opcion', 'pregunta', 'grado', 'tutor', 'hola', 'buenas', 'tercero', 'cuarto', 'quinto', 'sexto', 'septimo', 'octavo', 'noveno', 'decimo', 'undecimo'].some(w => norm.includes(w));
    if (isCleanName && !isKeyword) {
      return trimmed;
    }
  }

  return undefined;
}

export function parseStudentMessage(
  message: string,
  existingProfile?: { name?: string; grade?: number; currentQuestionIndex?: number }
): ParsedStudentInput {
  const detectedGrade = detectGradeFromText(message);
  const detectedQuestion = detectQuestionNumberFromText(message);
  const detectedName = detectStudentNameFromText(message, existingProfile?.name);

  const finalName = detectedName || existingProfile?.name;
  const finalGrade = detectedGrade || existingProfile?.grade;

  const missingFields: ('name' | 'grade')[] = [];
  if (!finalName) missingFields.push('name');
  if (!finalGrade) missingFields.push('grade');

  const norm = normalizeText(message);
  const isIdentityMsg = Boolean(
    detectedName ||
    detectedGrade !== undefined ||
    norm.includes('grado') ||
    norm.includes('curso') ||
    norm.includes('pregunta') ||
    norm.includes('me llamo') ||
    norm.includes('soy') ||
    norm.includes('tercero') ||
    norm.includes('cuarto') ||
    norm.includes('quinto') ||
    norm.includes('sexto') ||
    norm.includes('septimo') ||
    norm.includes('octavo') ||
    norm.includes('noveno') ||
    norm.includes('decimo') ||
    norm.includes('undecimo') ||
    norm.includes('once')
  );

  const isSwitchingQuestion = Boolean(detectedQuestion !== undefined);
  const isInitialOnboarding = Boolean(!existingProfile?.name || !existingProfile?.grade || detectedGrade || detectedName);

  return {
    name: detectedName,
    grade: detectedGrade,
    questionNumber: detectedQuestion,
    isInitialOnboarding,
    isSwitchingQuestion,
    missingFields,
    isIdentityMsg
  };
}
