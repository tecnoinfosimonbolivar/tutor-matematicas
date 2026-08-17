import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '15mb' }));

// Lazy initialization for Gemini AI client
let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `Eres el "Tutor Socrático Institucional de MATEMÁTICAS" de la Institución Educativa Técnica Simón Bolívar de Ibagué, Tolima (Barrio La Pola).
Lema institucional: "Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO".

DIRECTRICES PEDAGÓGICAS FUNDAMENTALES (RUTA DE APRENDIZAJE Y 15 MINUTOS DE ESTUDIO POR PREGUNTA):

1. DISTINCIÓN CRÍTICA ENTRE OPCIONES ICFES (LETRAS) Y MENÚ DE CHAT (NÚMEROS):
- Las OPCIONES DE RESPUESTA DE LA PREGUNTA ICFES se presentan SIEMPRE Y ÚNICAMENTE CON LETRAS:
  **A.** [Texto de la opción A]
  **B.** [Texto de la opción B]
  **C.** [Texto de la opción C]
  **D.** [Texto de la opción D]
  (ESTÁ ESTRICTAMENTE PROHIBIDO mezclar números con las letras en la pregunta, como "1 A", "1️⃣ A", "2 B").
- Las OPCIONES PARA CHATEAR, RESPONDER E ITERAR EN EL MENÚ se presentan SIEMPRE CON NÚMEROS:
  1️⃣ Registrar datos y conceptos en tu cuaderno (Nivel 1: Recordar)
  2️⃣ Explicar e ilustrar el problema (Nivel 2: Comprender)
  3️⃣ Resolver y calcular paso a paso en tu libreta (Nivel 3: Aplicar)
  4️⃣ Comparar y descartar las opciones incorrectas (Nivel 4: Analizar)
  5️⃣ Argumentar y defender tu respuesta elegida (Nivel 5: Evaluar)
  6️⃣ Diseñar un problema nuevo con datos variados (Nivel 6: Crear)
  7️⃣ Solicitar una pista socrática orientadora

2. RUTA DE APRENDIZAJE RIGUROSA EN 6 NIVELES (15 MINUTOS POR PREGUNTA):
Cada pregunta del cuadernillo debe ser estudiada con un mínimo de 15 minutos de trabajo profundo en el cuaderno antes de avanzar. Guía y exige al estudiante cumplir las actividades en cada uno de los 6 niveles cognitivos:
• **Nivel 1 - Recordar** (Verbos: Definir, listar, memorizar, registrar, repetir): Registrar en el cuaderno el título, datos numéricos y condiciones del problema, y definir el concepto matemático central.
• **Nivel 2 - Comprender** (Verbos: Explicar, resumir, describir, discutir, ilustrar): Resumir con sus propias palabras la situación e ilustrar con un dibujo o esquema geométrico/gráfico en el cuaderno.
• **Nivel 3 - Aplicar** (Verbos: Calcular, emplear, resolver, usar, demostrar): Escribir la fórmula y realizar las operaciones matemáticas completas paso a paso en el cuaderno demostrando el resultado.
• **Nivel 4 - Analizar** (Verbos: Comparar, diferenciar, contrastar, clasificar, organizar): Comparar las 4 opciones (A, B, C, D) y clasificar cada una explicando qué error o trampa matemática contiene cada opción incorrecta.
• **Nivel 5 - Evaluar** (Verbos: Argumentar, defender, juzgar, valorar, criticar): Emitir juicio de valor justificando por qué la opción seleccionada es la única válida y coherente con las pruebas matemáticas.
• **Nivel 6 - Crear** (Verbos: Diseñar, construir, planear, producir, elaborar): Diseñar y construir en su cuaderno un problema análogo o variación contextualizada (ej. Barrio La Pola, Plaza de la 21, Cañón del Combeima, o vida escolar en Ibagué) cambiando datos o condiciones y resolviéndolo.

3. PROHIBICIÓN EXPRESA DE CITAR PALABRAS TEÓRICAS:
- NUNCA menciones en el chat las palabras "Taxonomía de Bloom", "Bloom", "Proyecto Zero" ni etiquetas metodológicas teóricas.
- Aplica directamente la estructura y metodología: pide al estudiante hacer los apuntes, dibujos, cálculos, descartes, argumentos y creaciones prácticas en su libreta física.

4. TRATO PERSONALIZADO EN SEGUNDA PERSONA Y NOMBRE DEL ESTUDIANTE:
- Dirígete SIEMPRE al estudiante por su nombre en segunda persona ("tú", ej: "Rene, en tu cuaderno vas a registrar...", "Carlos, analiza con atención...").
- Mantén un tono motivador, riguroso, reflexivo y de alta calidad académica.

5. IDENTIFICACIÓN Y SELECCIÓN DE PREGUNTA:
- Para abrir el cuadernillo de 20 preguntas (3° a 11°), se requiere NOMBRE y GRADO.
- Si el estudiante escribe su nombre, grado y número de pregunta (ej. "Rene grado quinto pregunta 10"), NUNCA tomes ese texto como una reflexión matemática. Presenta de inmediato la pregunta seleccionada con sus opciones A, B, C, D y su guía de estudio de 15 minutos en el cuaderno.`;

// Word to question mapping
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

function normalizeTextServer(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function detectGradeFromTextServer(text: string): number | undefined {
  const norm = normalizeTextServer(text);

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
  const gradeExplicitNumMatch = norm.match(/(?:del\s+grado|de\s+grado|grado|curso|en el grado|en)\s*[:#]?\s*(\d{1,2})\b/);
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

function detectQuestionNumberFromTextServer(text: string): number | undefined {
  const norm = normalizeTextServer(text);

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

function detectStudentNameFromTextServer(text: string, existingName?: string): string | undefined {
  const trimmed = text.trim();

  const nameExplicitMatch = trimmed.match(/(?:me llamo|mi nombre es|soy|nombre\s*[:=])\s+([A-Za-zÁÉÍÓÚáéíóúñÑ\s]{2,40})/i);
  if (nameExplicitMatch) {
    let candidate = nameExplicitMatch[1].trim();
    candidate = candidate.replace(/\b(del\s+grado|de\s+grado|en\s+el\s+grado|grado|curso|pregunta|numero|de|\d+|°).*/i, '').trim();
    if (candidate.length >= 2 && !/^(tercero|cuarto|quinto|sexto|septimo|octavo|noveno|decimo|undecimo|once)$/i.test(candidate)) {
      return candidate;
    }
  }

  const beforeGradeMatch = trimmed.match(/^([A-Za-zÁÉÍÓÚáéíóúñÑ\s]{2,35})\s+(?:del\s+grado|de\s+grado|en\s+el\s+grado|grado|curso|\d+°|pregunta)/i);
  if (beforeGradeMatch) {
    let candidate = beforeGradeMatch[1].trim();
    candidate = candidate.replace(/^(hola|buenas|tutor|profe|profesor|señor|estudiante)\s*,?\s*/i, '').trim();
    if (candidate.length >= 2 && !['buenas', 'hola', 'tutor', 'estudiante'].includes(candidate.toLowerCase())) {
      return candidate;
    }
  }

  if (!existingName) {
    const isCleanName = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,40}$/.test(trimmed);
    const norm = normalizeTextServer(trimmed);
    const isKeyword = ['opcion', 'pregunta', 'grado', 'tutor', 'hola', 'buenas', 'tercero', 'cuarto', 'quinto', 'sexto', 'septimo', 'octavo', 'noveno', 'decimo', 'undecimo'].some(w => norm.includes(w));
    if (isCleanName && !isKeyword) {
      return trimmed;
    }
  }

  return undefined;
}

// Parse student message to extract name, grade, and question number
function parseStudentMessageText(
  message: string,
  existingProfile?: any
): { name?: string; grade?: number; questionNumber?: number; isIdentityMsg: boolean } {
  const detectedGrade = detectGradeFromTextServer(message);
  const detectedQuestion = detectQuestionNumberFromTextServer(message);
  const detectedName = detectStudentNameFromTextServer(message, existingProfile?.name);

  const norm = normalizeTextServer(message);
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

  return {
    name: detectedName || existingProfile?.name,
    grade: detectedGrade || existingProfile?.grade,
    questionNumber: detectedQuestion,
    isIdentityMsg
  };
}

// Function to generate the structured institutional question presentation
function buildQuestionPresentationMessage(
  studentName: string,
  grade: number,
  q: any
): string {
  const qNum = q.questionNumber || 1;
  const qTitle = q.title || `Análisis Matemático Pregunta #${qNum}`;
  const comp = q.competency || 'Razonamiento y argumentación';
  const compo = q.component || 'Numérico-Variacional';
  const evidence = q.evidence || q.affirmation || q.standard || 'Resuelve problemas justificando procedimientos.';
  const statement = q.statement || '';

  const optA = q.options?.[0]?.text || 'Opción A';
  const optB = q.options?.[1]?.text || 'Opción B';
  const optC = q.options?.[2]?.text || 'Opción C';
  const optD = q.options?.[3]?.text || 'Opción D';

  return `🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ, TOLIMA*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Bienvenido(a), **${studentName}**! He cargado tu cuadernillo institucional de **MATEMÁTICAS** para **Grado ${grade}°** (20 Preguntas Oficiales ICFES).

⏱️ *TIEMPO DE ESTUDIO RIGUROSO: 15 MINUTOS POR PREGUNTA*
Para garantizar un aprendizaje profundo y desarrollar tus competencias, debes completar las actividades en tu libreta física siguiendo los 6 niveles cognitivos de estudio antes de avanzar.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 **PREGUNTA #${qNum}: ${qTitle.toUpperCase()}**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📖 **ENUNCIADO:**
${statement}

🔘 **OPCIONES DE RESPUESTA (ICFES):**
**A.** ${optA}
**B.** ${optB}
**C.** ${optC}
**D.** ${optD}

📋 **FICHA PEDAGÓGICA (ICFES):**
• **Componente:** ${compo}
• **Competencia:** ${comp}
• **Evidencia evaluada:** ${evidence}

📓 **GUÍA DE ESTUDIO EN TU CUADERNO (15 MINUTOS POR PREGUNTA):**
✍️ *Realiza en tu libreta física los 6 pasos de la ruta de aprendizaje:*
1. **Recordar (Nivel 1):** Registra el título, grado, los datos numéricos conocidos y define el concepto matemático central.
2. **Comprender (Nivel 2):** Resume el problema con tus propias palabras e ilustra la situación con un esquema o dibujo geométrico/gráfico.
3. **Aplicar (Nivel 3):** Escribe la fórmula o principio y resuelve todas las operaciones matemáticas paso a paso.
4. **Analizar (Nivel 4):** Compara las opciones A, B, C y D; clasifica cada una y explica qué error contiene cada distractor.
5. **Evaluar (Nivel 5):** Argumenta y defiende por escrito por qué la opción elegida es la única respuesta matemáticamente válida.
6. **Crear (Nivel 6):** Diseña en tu cuaderno un problema similar variando los datos numéricos o ambientado en Ibagué (Barrio La Pola, Plaza de la 21, Cañón del Combeima) y resuélvelo.

💬 **¿CÓMO DESEAS INTERACTUAR CON TU TUTOR SOCRÁTICO?**
1️⃣ Registrar datos y conceptos en tu cuaderno (Nivel 1: Recordar)
2️⃣ Explicar e ilustrar el problema (Nivel 2: Comprender)
3️⃣ Resolver y calcular paso a paso en tu libreta (Nivel 3: Aplicar)
4️⃣ Comparar y descartar opciones incorrectas (Nivel 4: Analizar)
5️⃣ Argumentar y defender tu respuesta elegida (Nivel 5: Evaluar)
6️⃣ Diseñar un problema nuevo con datos variados (Nivel 6: Crear)
7️⃣ Solicitar una pista socrática orientadora

${studentName}, ¿cuál de las 4 opciones (**A**, **B**, **C** o **D**) consideras correcta o qué actividad de tu cuaderno deseas revisar primero?`;
}

// Helper function to build intelligent Socratic pedagogical responses even without API key
function buildFallbackSocraticResponse(
  message: string,
  studentProfile: any,
  currentQuestion: any
): string {
  const parsed = parseStudentMessageText(message, studentProfile);
  const studentName = parsed.name || studentProfile?.name || 'Estudiante Bolivariano';
  const grade = parsed.grade || studentProfile?.grade;
  const lowerMsg = message.toLowerCase().trim();

  // 1. Check if name or grade is missing
  if (!parsed.name && !studentProfile?.name && !grade) {
    return `🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ, TOLIMA*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Bienvenido, estudiante Bolivariano! 👋 Hoy entrenaremos con gran entusiasmo y rigor pedagógico el área de **MATEMÁTICAS** (Preparación Saber).

Tu cuadernillo institucional cuenta con un banco estructurado de **20 preguntas de estudio** con una ruta de aprendizaje de **15 minutos por pregunta** (6 Niveles Cognitivos).

Para iniciar tu entrenamiento y cargar el cuadernillo adecuado:
1️⃣ ¿Cuál es tu **Nombre completo**?
2️⃣ ¿En qué **Grado** estás (3° a 11°)?
3️⃣ ¿En qué **número de pregunta (1 a 20)** deseas empezar hoy?`;
  }

  if (!parsed.name && !studentProfile?.name && grade) {
    return `🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Excelente! Tenemos listo el cuadernillo oficial de **Grado ${grade}°** con sus 20 preguntas de Matemáticas.

Para personalizar tu sesión y el registro de tus evidencias de aprendizaje:
👤 ¿Cuál es tu **Nombre completo**?`;
  }

  if ((parsed.name || studentProfile?.name) && !grade) {
    return `🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Mucho gusto, **${studentName}**!

Para saber en qué cuadernillo de estudio de Matemáticas vamos a trabajar (contamos con preguntas estructuradas desde 3° hasta 11°):
🎓 ¿En qué **Grado** te encuentras (3° a 11°)?
¿Y en qué **número de pregunta (1 a 20)** deseas empezar?`;
  }

  // 2. If this is an onboarding / identity message or explicit question navigation
  if (parsed.isIdentityMsg || parsed.questionNumber || (currentQuestion && message.includes('NUMERO DE PREGUNTA'))) {
    if (currentQuestion) {
      return buildQuestionPresentationMessage(studentName, grade || 11, currentQuestion);
    }
  }

  if (!currentQuestion) {
    return `🏛️ *I.E. TÉCNICA SIMÓN BOLÍVAR - IBAGUÉ*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Bienvenido(a), **${studentName}**! Tu cuadernillo de Grado ${grade}° cuenta con **20 preguntas** estructuradas en el área de **MATEMÁTICAS**.

¿Con cuál número de pregunta (del 1 al 20) deseas iniciar tu análisis hoy? Escríbeme: *"Tutor, empezar en la pregunta 1"* para cargarla en tu pantalla y comenzar tus apuntes de 15 minutos en el cuaderno.`;
  }

  const q = currentQuestion;
  const qTitle = q.title || `Análisis Matemático Pregunta #${q.questionNumber}`;
  const competency = q.competency || 'Razonamiento y argumentación';
  const component = q.component || 'Numérico-Variacional';

  // Detect if student selected an option (A, B, C, D)
  let selectedOption = '';
  if (
    lowerMsg.includes('opcion a') || 
    lowerMsg.includes('opción a') || 
    lowerMsg === 'a' || 
    lowerMsg.startsWith('a.') || 
    lowerMsg.startsWith('a)') || 
    lowerMsg.includes('elijo la a') ||
    lowerMsg.includes('respuesta a')
  ) {
    selectedOption = 'A';
  } else if (
    lowerMsg.includes('opcion b') || 
    lowerMsg.includes('opción b') || 
    lowerMsg === 'b' || 
    lowerMsg.startsWith('b.') || 
    lowerMsg.startsWith('b)') || 
    lowerMsg.includes('elijo la b') ||
    lowerMsg.includes('respuesta b')
  ) {
    selectedOption = 'B';
  } else if (
    lowerMsg.includes('opcion c') || 
    lowerMsg.includes('opción c') || 
    lowerMsg === 'c' || 
    lowerMsg.startsWith('c.') || 
    lowerMsg.startsWith('c)') || 
    lowerMsg.includes('elijo la c') ||
    lowerMsg.includes('respuesta c')
  ) {
    selectedOption = 'C';
  } else if (
    lowerMsg.includes('opcion d') || 
    lowerMsg.includes('opción d') || 
    lowerMsg === 'd' || 
    lowerMsg.startsWith('d.') || 
    lowerMsg.startsWith('d)') || 
    lowerMsg.includes('elijo la d') ||
    lowerMsg.includes('respuesta d')
  ) {
    selectedOption = 'D';
  }

  // Detect Bloom level actions or numbered chat actions
  const isAction1 = lowerMsg === '1' || lowerMsg.includes('1️⃣') || lowerMsg.includes('recordar') || lowerMsg.includes('datos') || lowerMsg.includes('definir');
  const isAction2 = lowerMsg === '2' || lowerMsg.includes('2️⃣') || lowerMsg.includes('comprender') || lowerMsg.includes('ilustrar') || lowerMsg.includes('dibujo') || lowerMsg.includes('esquema');
  const isAction3 = lowerMsg === '3' || lowerMsg.includes('3️⃣') || lowerMsg.includes('aplicar') || lowerMsg.includes('calcular') || lowerMsg.includes('operacion') || lowerMsg.includes('operación') || lowerMsg.includes('resolver');
  const isAction4 = lowerMsg === '4' || lowerMsg.includes('4️⃣') || lowerMsg.includes('analizar') || lowerMsg.includes('descarte') || lowerMsg.includes('trampa') || lowerMsg.includes('distractor') || lowerMsg.includes('otras opciones');
  const isAction5 = lowerMsg === '5' || lowerMsg.includes('5️⃣') || lowerMsg.includes('evaluar') || lowerMsg.includes('argumentar') || lowerMsg.includes('defender') || lowerMsg.includes('justificar');
  const isAction6 = lowerMsg === '6' || lowerMsg.includes('6️⃣') || lowerMsg.includes('crear') || lowerMsg.includes('variacion') || lowerMsg.includes('variación') || lowerMsg.includes('nuevo problema') || lowerMsg.includes('reto');
  const isAction7 = lowerMsg === '7' || lowerMsg.includes('7️⃣') || lowerMsg.includes('pista') || lowerMsg.includes('ayuda') || lowerMsg.includes('orientacion') || lowerMsg.includes('orientación');

  // Option evaluation response
  if (selectedOption) {
    const isCorrectChoice = selectedOption.toUpperCase() === q.correctLetter.toUpperCase();

    return `🏛️ *TUTOR SOCRÁTICO BOLIVARIANO - EVALUACIÓN PEDAGÓGICA*
¡Gran compromiso con la *Ciencia y la Virtud*, **${studentName}**! Has propuesto analizar la **Opción ${selectedOption}**.

⏱️ *TIEMPO DE ESTUDIO EN PROCESO (15 MINUTOS)*

📓 *ACTIVIDAD EN TU CUADERNO (NIVEL 5: EVALUAR Y JUSTIFICAR):*
• **Pregunta #${q.questionNumber}:** ${qTitle}
• **Opción analizada:** ${selectedOption}
• **Principio Matemático:** ${q.standard || 'Relación lógica entre las variables del problema y operaciones fundamentales.'}
• **Competencia evaluada:** ${competency} (${component})

💡 *ORIENTACIÓN SOCRÁTICA:*
${
  isCorrectChoice 
    ? `${studentName}, tu razonamiento sobre la **Opción ${selectedOption}** es muy sólido y concuerda con las leyes de ${component}. Sin embargo, para consolidar tu aprendizaje de 15 minutos en el cuaderno, debes escribir la demostración matemática completa y descartar por escrito las opciones incorrectas.`
    : `${studentName}, al analizar la **Opción ${selectedOption}**, te invito a revisar con atención los datos del enunciado y tus operaciones en el cuaderno. ¿Hay alguna condición o restricción numérica que debas ajustar?`
}

🔍 *PREGUNTAS GUÍA PARA TU CUADERNO:*
1. **Demostración:** ¿Qué operaciones y cálculos realizaste en tu libreta para sustentar la Opción ${selectedOption}?
2. **Descarte (Nivel 4):** ¿Qué error matemático contiene cada una de las otras 3 opciones?
3. **Creación (Nivel 6):** Si duplicamos los datos del problema, ¿cómo se modificaría el resultado?

💬 *¿CÓMO DESEAS CONTINUAR TU ESTUDIO?*
1️⃣ Registrar datos y conceptos en tu cuaderno (Recordar)
2️⃣ Explicar e ilustrar el problema (Comprender)
3️⃣ Resolver y calcular paso a paso en tu libreta (Aplicar)
4️⃣ Comparar y descartar opciones incorrectas (Analizar)
5️⃣ Argumentar y defender tu respuesta elegida (Evaluar)
6️⃣ Diseñar un problema nuevo con datos variados (Crear)
7️⃣ Pasar a la siguiente pregunta tras completar tus 15 min de estudio`;
  }

  // 1. Level 1: Recordar
  if (isAction1) {
    return `🏛️ *RUTA DE APRENDIZAJE - NIVEL 1: RECORDAR*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Excelente inicio de sesión de 15 minutos, **${studentName}**! La base de la excelencia matemática es el registro riguroso de los datos.

📓 *ACTIVIDAD PARA TU CUADERNO (NIVEL 1 - RECORDAR):*
✍️ *Escribe en tu libreta con letra clara:*
• **Título:** Pregunta #${q.questionNumber} - ${qTitle}
• **Competencia:** ${competency}
• **Componente:** ${component}
• **Definición / Concepto Central:** ${q.affirmation || 'Propiedades y relaciones matemáticas del contexto evaluado.'}
• **Datos numéricos dados:** Anota cada valor numérico y condición explícita del enunciado.
• **Incógnita:** Escribe con precisión qué es lo que el problema nos pide encontrar.

💡 *PREGUNTA DE ORIENTACIÓN:*
${q.socraticHints?.recordar || '¿Cuáles son las cantidades iniciales y qué relación guardan entre sí?'}

${studentName}, cuando tengas los datos registrados en tu libreta, presiona **2️⃣** para ilustrar la situación (Comprender) o indícame qué opción (**A**, **B**, **C** o **D**) consideras correcta.`;
  }

  // 2. Level 2: Comprender
  if (isAction2) {
    return `🏛️ *RUTA DE APRENDIZAJE - NIVEL 2: COMPRENDER*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Muy bien, **${studentName}**! Comprender es interpretar el significado del problema sin limitarse a memorizar.

📓 *ACTIVIDAD PARA TU CUADERNO (NIVEL 2 - COMPRENDER):*
✍️ *Desarrolla en tu cuaderno:*
• **Resumen explicativo:** Escribe con tus propias palabras qué ocurre en la situación del problema.
• **Ilustración / Esquema gráfico:** Dibuja la figura geométrica, tabla de datos o diagrama que represente las cantidades en juego.
• **Principio Matemático:** ${q.standard || 'Relación matemática entre las magnitudes del problema.'}

💡 *ORIENTACIÓN SOCRÁTICA:*
${q.socraticHints?.comprender || '¿Cómo ilustrarías de forma visual la relación entre las partes y el todo en este problema?'}

${studentName}, una vez tengas tu dibujo o esquema listo, presiona **3️⃣** para realizar las operaciones (Aplicar) o escríbeme qué opción (**A**, **B**, **C** o **D**) responde a tu esquema.`;
  }

  // 3. Level 3: Aplicar
  if (isAction3) {
    return `🏛️ *RUTA DE APRENDIZAJE - NIVEL 3: APLICAR*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡A trabajar con las operaciones, **${studentName}**! En este nivel aplicamos fórmulas y métodos para resolver la situación.

📓 *ACTIVIDAD PARA TU CUADERNO (NIVEL 3 - APLICAR):*
✍️ *Calcula y demuestra en tu libreta:*
• **Fórmula / Relación matemática:** Escribe la ecuación o relación aritmética necesaria.
• **Operaciones paso a paso:** Realiza las sumas, restas, multiplicaciones, divisiones o conversiones con números completos (sin saltar pasos).
• **Demostración del resultado:** Verifica que el valor final cumpla todas las condiciones del enunciado.

💡 *PISTA DE CÁLCULO:*
${q.socraticHints?.aplicar || 'Efectúa la operación principal y comprueba si tu resultado coincide con alguna opción.'}

${studentName}, ¿qué resultado numérico obtuviste al operar en tu cuaderno? Indícame si coincide con la opción **A**, **B**, **C** o **D**.`;
  }

  // 4. Level 4: Analizar
  if (isAction4) {
    return `🏛️ *RUTA DE APRENDIZAJE - NIVEL 4: ANALIZAR (DESCARTE DE DISTRACTORES)*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Excelente ejercicio de pensamiento crítico, **${studentName}**! Analizar las 4 opciones (A, B, C y D) te permite detectar las trampas del examen.

📓 *ACTIVIDAD PARA TU CUADERNO (NIVEL 4 - ANALIZAR):*
✍️ *Escribe en tu cuaderno la justificación de descarte para cada opción:*
• **Opción A:** ¿Es válida o qué error contiene?
• **Opción B:** ¿Qué cálculo erróneo llevaría a marcarla?
• **Opción C:** ¿Qué condición omite o por qué es correcta/incorrecta?
• **Opción D:** ¿Por qué no cumple con lo pedido en el enunciado?

💡 *ORIENTACIÓN PARA EL DESCARTE:*
${q.socraticHints?.analizar || 'Compara cada distractor con el enunciado e identifica la trampa matemática.'}

${studentName}, ¿cuáles opciones descartaste y cuál de las opciones (**A**, **B**, **C** o **D**) confirmas como la verdadera?`;
  }

  // 5. Level 5: Evaluar
  if (isAction5) {
    return `🏛️ *RUTA DE APRENDIZAJE - NIVEL 5: EVALUAR Y ARGUMENTAR*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Momento de juzgar y defender con argumentos, **${studentName}**! En las pruebas Saber, la argumentación matemática es fundamental.

📓 *ACTIVIDAD PARA TU CUADERNO (NIVEL 5 - EVALUAR):*
✍️ *Redacta en tu libreta tu juicio crítico:*
• **Tesis:** "La opción correcta es la [A/B/C/D] porque..."
• **Pruebas matemáticas:** Explica los teoremas, propiedades y cálculos que hacen imposible otra respuesta.
• **Juicio de consistencia:** Explica por qué las soluciones alternas son matemáticamente inconsistentes.

${studentName}, ¿cómo sustentas tu elección final ante tu docente? Escríbeme tu argumento en el chat.`;
  }

  // 6. Level 6: Crear
  if (isAction6) {
    return `🏛️ *RUTA DE APRENDIZAJE - NIVEL 6: CREAR Y CONTEXTUALIZAR (TOLIMA / IBAGUÉ)*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡El nivel más alto de dominio matemático, **${studentName}**! Vamos a diseñar una nueva situación matemática.

📓 *ACTIVIDAD PARA TU CUADERNO (NIVEL 6 - CREAR):*
✍️ *Diseña y resuelve en tu libreta:*
1. **Nuevo planteamiento:** Redacta un problema análogo ambientado en tu entorno (ej. una panadería del Barrio La Pola, compras en la Plaza de la 21, o un recorrido por el Cañón del Combeima).
2. **Modificación de datos:** Duplica los valores o añade una nueva restricción.
3. **Resolución completa:** Plantea y resuelve el nuevo ejercicio demostrando la respuesta.

${studentName}, ¿cuál es el nuevo enunciado que creaste y qué resultado te dio al resolverlo en tu libreta?`;
  }

  // 7. Hint / Orientación socrática
  if (isAction7) {
    return `🏛️ *ORIENTACIÓN SOCRÁTICA - PREGUNTA #${q.questionNumber}*
*"Ciencia y Virtud: EL CAMINO HACIA UN FUTURO EXITOSO"*

¡Con gusto, **${studentName}**! Aquí tienes una guía conceptual para orientar tus 15 minutos de estudio:

💡 *PISTAS SOCRÁTICAS PARA TU CUADERNO:*
• **Pista 1 (Datos):** ${q.socraticHints?.recordar || 'Revisa atentamente las cantidades y unidades del enunciado.'}
• **Pista 2 (Relación):** ${q.socraticHints?.comprender || 'Identifica qué operación relaciona las variables sin omitir restricciones.'}
• **Pista 3 (Operación):** ${q.socraticHints?.aplicar || 'Realiza el cálculo en tu libreta y comprueba el resultado obtenido.'}

${studentName}, ¿qué resultado te da al operar en tu libreta y cuál de las opciones (**A**, **B**, **C** o **D**) consideras correcta?`;
  }

  // General conversational message
  return `🏛️ *TUTOR SOCRÁTICO BOLIVARIANO*
¡Muy bien, **${studentName}**! Analicemos este planteamiento con rigor pedagógico.

📓 *REGISTRO EN TU CUADERNO (15 MINUTOS POR PREGUNTA):*
• **Tema:** ${component}
• **Competencia:** ${competency}
• **Operaciones:** Realiza el cálculo o esquema paso a paso en tu libreta física.

💡 *PREGUNTA ORIENTADORA:*
${q.socraticHints?.analizar || '¿De qué manera tus cálculos en el cuaderno respaldan esta conclusión?'}

💬 *OPCIONES PARA CONTINUAR EN EL CHAT:*
1️⃣ Registrar datos y conceptos (Recordar)
2️⃣ Ilustrar y explicar (Comprender)
3️⃣ Calcular paso a paso (Aplicar)
4️⃣ Descartar distractores (Analizar)
5️⃣ Argumentar respuesta (Evaluar)
6️⃣ Crear nuevo problema (Crear)
7️⃣ Pedir pista socrática

${studentName}, ¿cuál de las opciones (**A**, **B**, **C** o **D**) consideras correcta y cómo la justificas en tu cuaderno?`;
}

app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history, studentProfile, currentQuestion, imageBase64 } = req.body;
    const ai = getAIClient();

    const parsed = parseStudentMessageText(message, studentProfile);
    const studentName = parsed.name || studentProfile?.name;
    const grade = parsed.grade || studentProfile?.grade;

    // 1. Missing Name or Grade: Insist on obtaining identity to know which booklet to study
    if (!studentName || !grade) {
      const askMissingReply = buildFallbackSocraticResponse(message, studentProfile, currentQuestion);
      return res.json({ reply: askMissingReply });
    }

    // 2. Onboarding / Question Presentation Message: Present the chosen question clearly
    if (parsed.isIdentityMsg || parsed.questionNumber || (currentQuestion && message.toLowerCase().includes('numero de pregunta'))) {
      if (currentQuestion) {
        const presentation = buildQuestionPresentationMessage(studentName, grade, currentQuestion);
        return res.json({ reply: presentation });
      }
    }

    let fullPrompt = '';
    if (studentProfile) {
      fullPrompt += `[ESTUDIANTE INSTITUCIONAL: Nombre="${studentName}", Grado=${grade}°, Bloque=${studentProfile.blockSolvedCount || 0}/4 preguntas]\n`;
    }
    if (currentQuestion) {
      fullPrompt += `[PREGUNTA ACTIVA #${currentQuestion.questionNumber} (Grado ${grade}°):
Título="${currentQuestion.title}"
Enunciado="${currentQuestion.statement}"
Opciones: 1(A)="${currentQuestion.options[0]?.text}", 2(B)="${currentQuestion.options[1]?.text}", 3(C)="${currentQuestion.options[2]?.text}", 4(D)="${currentQuestion.options[3]?.text}"
Opción Correcta=${currentQuestion.correctOption} (${currentQuestion.correctLetter})
Competencia="${currentQuestion.competency}"
Componente="${currentQuestion.component}"
Estándar/Evidencia="${currentQuestion.evidence || currentQuestion.standard}"
Justificación Pedagógica="${currentQuestion.justification}"
Pistas Socráticas: Recordar="${currentQuestion.socraticHints?.recordar}", Comprender="${currentQuestion.socraticHints?.comprender}", Aplicar="${currentQuestion.socraticHints?.aplicar}", Analizar="${currentQuestion.socraticHints?.analizar}"
]\n`;
    }
    fullPrompt += `[MENSAJE / RESPUESTA DEL ESTUDIANTE]: ${message}\n[INSTRUCCIÓN]: Continúa el diálogo socrático guiando el pensamiento del estudiante hacia el cuaderno y el descarte de distractores. NUNCA trates datos de identificación como una reflexión matemática.`;

    if (!ai) {
      // Use rich fallback Socratic generator
      const fallbackReply = buildFallbackSocraticResponse(message, { ...studentProfile, name: studentName, grade }, currentQuestion);
      return res.json({ reply: fallbackReply });
    }

    // Call Gemini API with rich Socratic system instruction
    const contents: any[] = [];
    
    // Add brief history
    if (Array.isArray(history) && history.length > 0) {
      const recentHistory = history.slice(-6);
      for (const msg of recentHistory) {
        contents.push({
          role: msg.sender === 'student' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      }
    }

    const currentParts: any[] = [{ text: fullPrompt }];
    if (imageBase64) {
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      currentParts.push({
        inlineData: {
          mimeType: 'image/jpeg',
          data: cleanBase64
        }
      });
    }

    contents.push({
      role: 'user',
      parts: currentParts
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.65,
        maxOutputTokens: 900
      }
    });

    let reply = response.text;
    if (!reply || reply.trim().length === 0) {
      reply = buildFallbackSocraticResponse(message, { ...studentProfile, name: studentName, grade }, currentQuestion);
    }

    return res.json({ reply });
  } catch (error: any) {
    console.error('Error in /api/chat (using fallback):', error);
    const fallbackReply = buildFallbackSocraticResponse(req.body?.message || '', req.body?.studentProfile, req.body?.currentQuestion);
    return res.json({ reply: fallbackReply });
  }
});

async function startServer() {
  // Setup Vite in Dev or serve dist in production
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Tutor Socrático Bolivariano server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

