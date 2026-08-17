// Banco Oficial de Preguntas ICFES Evaluar para Avanzar (Grados 9°, 10° y 11°)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
import { Question } from '../types';

export const OFFICIAL_GRADE_9_10_11: Record<number, Question[]> = {
  // ================= GRADO 9° =================
  9: [
    {
      id: 901,
      grade: 9,
      questionNumber: 1,
      title: 'Combinaciones en heladería con principio multiplicativo',
      statement: 'En una heladería se ofrecen 3 sabores de helado (Vainilla, Chocolate, Fresa) y 3 tipos de cobertura (Arequipe, Maní, Chispas). Cada cliente elige exactamente 1 sabor y 1 cobertura.\n\n¿Cuántas combinaciones diferentes de helado se pueden armar?',
      options: [
        { number: 1, letter: 'A', text: '6 combinaciones.' },
        { number: 2, letter: 'B', text: '9 combinaciones.' },
        { number: 3, letter: 'C', text: '12 combinaciones.' },
        { number: 4, letter: 'D', text: '27 combinaciones.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Aleatorio',
      affirmation: 'Aplica el principio fundamental del conteo y técnicas combinatorias.',
      evidence: 'Calcula el número de elementos del espacio muestral multiplicando las opciones de cada etapa.',
      standard: 'Uso conceptos básicos de probabilidad y métodos de conteo (combinaciones y permutaciones).',
      justification: 'Por el principio multiplicativo de conteo: Número total de combinaciones = 3 sabores × 3 coberturas = 9 combinaciones distintas.',
      invalidOptionsReasoning: {
        A: 'Suma 3 + 3 = 6 en lugar de multiplicar eventos independientes.',
        C: 'Multiplica 3 × 4 = 12.',
        D: 'Calcula 3³ = 27.'
      },
      socraticHints: {
        recordar: '¿Cuántos sabores hay y cuántas coberturas disponibles?',
        comprender: 'Si para cada uno de los 3 sabores puedes elegir 3 coberturas, ¿qué operación representa el total?',
        aplicar: 'Anota en tu libreta: 3 sabores × 3 coberturas = 9 opciones en el espacio muestral.',
        analizar: '¿Por qué el diagrama de árbol confirma las 9 ramas terminales?'
      }
    },
    {
      id: 902,
      grade: 9,
      questionNumber: 2,
      title: 'Altura de un poste usando el Teorema de Tales y sombras',
      statement: 'Un poste vertical proyecta una sombra de 6 metros en el suelo en el mismo instante en que una estaca vertical de 2 metros de altura proyecta una sombra de 1,5 metros.\n\n¿Cuál es la altura del poste vertical?',
      options: [
        { number: 1, letter: 'A', text: '4,5 metros.' },
        { number: 2, letter: 'B', text: '6,0 metros.' },
        { number: 3, letter: 'C', text: '8,0 metros.' },
        { number: 4, letter: 'D', text: '9,0 metros.' }
      ],
      correctOption: 3,
      correctLetter: 'C',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Espacial-Métrico',
      affirmation: 'Aplica el Teorema de Tales y semejanza de triángulos en situaciones geométricas.',
      evidence: 'Plantea y resuelve proporciones entre lados homólogos de triángulos rectángulos semejantes.',
      standard: 'Aplico y justifico criterios de congruencia y semejanza entre triángulos en la resolución de problemas.',
      justification: 'Por semejanza de triángulos rectángulos con los rayos solares paralelos: Altura_poste / Sombra_poste = Altura_estaca / Sombra_estaca -> h / 6 = 2 / 1,5 -> h = (2 × 6) / 1,5 = 12 / 1,5 = 8 metros.',
      invalidOptionsReasoning: {
        A: 'Calcula 6 - 1,5 = 4,5 m.',
        B: 'Iguala la altura a la longitud de la sombra.',
        D: 'Multiplica 6 × 1,5 = 9 m.'
      },
      socraticHints: {
        recordar: '¿Qué dice el criterio de semejanza cuando los rayos del sol inciden con el mismo ángulo?',
        comprender: 'Plantea la proporción: Altura del poste / 6 m = 2 m / 1,5 m.',
        aplicar: 'Despeja en tu cuaderno: Altura = (2 × 6) ÷ 1,5 = 12 ÷ 1,5 = 8 m.',
        analizar: '¿Por qué la razón entre altura y sombra (2 / 1,5 = 1,333) se mantiene idéntica para ambos objetos?'
      }
    },
    {
      id: 903,
      grade: 9,
      questionNumber: 3,
      title: 'Vértice y altura máxima en trayectoria parabólica de proyectil',
      statement: 'La trayectoria de un proyectil lanzado verticalmente está dada por la función cuadrática: h(t) = -5t² + 20t + 25, donde h es la altura en metros y t el tiempo en segundos.\n\n¿En qué segundo t el proyectil alcanza su altura máxima?',
      options: [
        { number: 1, letter: 'A', text: 't = 2 segundos.' },
        { number: 2, letter: 'B', text: 't = 4 segundos.' },
        { number: 3, letter: 'C', text: 't = 5 segundos.' },
        { number: 4, letter: 'D', text: 't = 20 segundos.' }
      ],
      correctOption: 1,
      correctLetter: 'A',
      competency: 'Razonamiento y argumentación',
      component: 'Numérico-Variacional',
      affirmation: 'Identifica el vértice y extremos relativos en funciones polinómicas de segundo grado.',
      evidence: 'Aplica la fórmula del vértice cuadrático t = -b / (2a).',
      standard: 'Identifico relaciones entre propiedades de las gráficas y propiedades de las ecuaciones algebraicas.',
      justification: 'Para h(t) = at² + bt + c con a = -5 y b = 20: El tiempo del vértice es t_v = -b / (2a) = -20 / (2 × -5) = -20 / -10 = 2 segundos (alcanzando una altura de h(2) = -5(4) + 20(2) + 25 = 45 m).',
      invalidOptionsReasoning: {
        B: 't = 4 segundos es cuando el proyectil vuelve a la altura inicial.',
        C: 't = 5 segundos es cuando impacta contra el suelo (h=0).',
        D: 'Toma el coeficiente lineal b = 20 directamente.'
      },
      socraticHints: {
        recordar: '¿Cuál es la fórmula para hallar el eje de simetría o tiempo del vértice de una parábola cuadrática? (t = -b / 2a).',
        comprender: 'Identifica los coeficientes: a = -5, b = 20, c = 25.',
        aplicar: 'Calcula en tu libreta: t = -20 / (2 × -5) = -20 / -10 = 2 segundos.',
        analizar: '¿Por qué en t = 2 segundos la derivada de la altura se hace cero y se alcanza la cúspide?'
      }
    },
    {
      id: 904,
      grade: 9,
      questionNumber: 4,
      title: 'Sistema de ecuaciones lineales 2x2 en compra de útiles',
      statement: 'En una papelería, 3 cuadernos y 2 lápices cuestan $14.000 (3c + 2L = 14.000). Además, 2 cuadernos y 4 lápices cuestan $12.000 (2c + 4L = 12.000).\n\n¿Cuál es el precio de un solo cuaderno (c)?',
      options: [
        { number: 1, letter: 'A', text: '$1.000' },
        { number: 2, letter: 'B', text: '$2.000' },
        { number: 3, letter: 'C', text: '$4.000' },
        { number: 4, letter: 'D', text: '$5.000' }
      ],
      correctOption: 3,
      correctLetter: 'C',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Numérico-Variacional',
      affirmation: 'Resuelve sistemas de dos ecuaciones lineales con dos incógnitas.',
      evidence: 'Aplica métodos algebraicos (eliminación o sustitución) para hallar el valor de una variable.',
      standard: 'Resuelvo problemas utilizando sistemas de ecuaciones lineales.',
      justification: 'Multiplicando la primera ecuación por 2: 6c + 4L = 28.000. Restando la segunda ecuación (2c + 4L = 12.000): 4c = 16.000 -> c = $4.000 (y cada lápiz cuesta L = $1.000).',
      invalidOptionsReasoning: {
        A: '$1.000 es el precio del lápiz (L).',
        B: '$2.000 no satisface la primera ecuación (3×2.000 + 2L = 14.000 -> L = 4.000, pero 2×2.000 + 4×4.000 = 20.000 ≠ 12.000).',
        D: '$5.000 sobrepasa el presupuesto.'
      },
      socraticHints: {
        recordar: 'Plantea el sistema en tu cuaderno: (1) 3c + 2L = 14.000; (2) 2c + 4L = 12.000.',
        comprender: 'Multiplica la ecuación (1) por 2 para igualar el coeficiente de los lápices: 6c + 4L = 28.000.',
        aplicar: 'Resta: (6c + 4L) - (2c + 4L) = 28.000 - 12.000 -> 4c = 16.000 -> c = 4.000.',
        analizar: '¿Por qué c = $4.000 y L = $1.000 verifican simultáneamente ambas compras en la papelería?'
      }
    },
    {
      id: 905,
      grade: 9,
      questionNumber: 5,
      title: 'Cálculo de la hipotenusa con el Teorema de Pitágoras',
      statement: 'Un terreno triangular rectangular tiene un cateto de 9 metros y otro cateto de 12 metros.\n\n¿Cuánto mide la hipotenusa (el lado más largo del terreno)?',
      options: [
        { number: 1, letter: 'A', text: '15 metros.' },
        { number: 2, letter: 'B', text: '21 metros.' },
        { number: 3, letter: 'C', text: '108 metros.' },
        { number: 4, letter: 'D', text: '225 metros.' }
      ],
      correctOption: 1,
      correctLetter: 'A',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Espacial-Métrico',
      affirmation: 'Aplica el Teorema de Pitágoras para resolver problemas métricos en triángulos rectángulos.',
      evidence: 'Calcula c = √(a² + b²) para valores enteros.',
      standard: 'Uso representaciones geométricas para resolver y formular problemas en las matemáticas y en otras disciplinas.',
      justification: 'Aplicando el Teorema de Pitágoras: c² = a² + b² = 9² + 12² = 81 + 144 = 225 -> c = √225 = 15 metros.',
      invalidOptionsReasoning: {
        B: 'Suma linealmente los catetos: 9 + 12 = 21 m (ignora que c² = a² + b²).',
        C: 'Multiplica 9 × 12 = 108.',
        D: '225 es c² (el cuadrado de la hipotenusa), olvidando extraer la raíz cuadrada.'
      },
      socraticHints: {
        recordar: '¿Cuál es la fórmula del Teorema de Pitágoras en triángulos rectángulos?',
        comprender: 'Eleva al cuadrado los dos catetos: 9² = 81 y 12² = 144.',
        aplicar: 'Suma en tu cuaderno: 81 + 144 = 225. Luego saca la raíz cuadrada: √225 = 15.',
        analizar: '¿Por qué 15 metros cumple la terna pitagórica fundamental (3-4-5 multiplicada por 3)?'
      }
    }
  ],

  // ================= GRADO 10° =================
  10: [
    {
      id: 1001,
      grade: 10,
      questionNumber: 1,
      title: 'Ecuación canónica de la circunferencia en el plano',
      statement: 'Una antena de telecomunicaciones está ubicada en el punto (3, -2) y emite una señal circular con un radio de cobertura de 5 km.\n\n¿Cuál es la ecuación canónica que describe el límite exterior del área de cobertura?',
      options: [
        { number: 1, letter: 'A', text: '(x - 3)² + (y + 2)² = 25' },
        { number: 2, letter: 'B', text: '(x + 3)² + (y - 2)² = 25' },
        { number: 3, letter: 'C', text: '(x - 3)² + (y + 2)² = 5' },
        { number: 4, letter: 'D', text: '(x + 3)² + (y - 2)² = 5' }
      ],
      correctOption: 1,
      correctLetter: 'A',
      competency: 'Comunicación, modelación y representación',
      component: 'Espacial-Métrico',
      affirmation: 'Identifica la ecuación canónica de secciones cónicas a partir de sus parámetros.',
      evidence: 'Escribe la ecuación canónica de la circunferencia con centro (h, k) y radio r.',
      standard: 'Identifico características de cónicas en representaciones algebraicas y geométricas.',
      justification: 'La ecuación canónica de una circunferencia con centro (h, k) y radio r es (x - h)² + (y - k)² = r². Reemplazando h = 3, k = -2 y r = 5: (x - 3)² + (y - (-2))² = 5² -> (x - 3)² + (y + 2)² = 25.',
      invalidOptionsReasoning: {
        B: 'Invierte los signos de las coordenadas del centro (-3 y +2).',
        C: 'No eleva el radio al cuadrado (deja 5 en lugar de 25).',
        D: 'Invierte los signos del centro y no eleva el radio al cuadrado.'
      },
      socraticHints: {
        recordar: '¿Cuál es la fórmula canónica de la circunferencia con centro (h, k) y radio r?',
        comprender: 'Reemplaza h = 3 y k = -2 en (x - h)² + (y - k)².',
        aplicar: 'Calcula r² = 5² = 25. Escribe en tu libreta: (x - 3)² + (y + 2)² = 25.',
        analizar: '¿Por qué el signo menos de la fórmula convierte el (-2) en (+2)?'
      }
    },
    {
      id: 1002,
      grade: 10,
      questionNumber: 2,
      title: 'Ley del Seno para calcular distancia entre barcos',
      statement: 'En un triángulo oblicuángulo formado por dos barcos A y B y un faro C: el ángulo en A mide 30°, el ángulo en B mide 45°, y la distancia del faro C al barco B (lado a opuesto a A) es de 10 millas náuticas.\n\n¿Cuál es la distancia del faro C al barco A (lado b opuesto a B)? [Dato: sen(30°) = 1/2; sen(45°) = √2/2]',
      options: [
        { number: 1, letter: 'A', text: '5√2 millas.' },
        { number: 2, letter: 'B', text: '10√2 millas.' },
        { number: 3, letter: 'C', text: '20 millas.' },
        { number: 4, letter: 'D', text: '20√2 millas.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Espacial-Métrico',
      affirmation: 'Aplica el teorema del seno en triángulos oblicuángulos.',
      evidence: 'Plantea la razón a / sen(A) = b / sen(B) y despeja la longitud desconocida.',
      standard: 'Uso la ley del seno y del coseno para resolver problemas trigonométricos.',
      justification: 'Aplicando la Ley del Seno: a / sen(A) = b / sen(B) -> 10 / sen(30°) = b / sen(45°) -> 10 / (1/2) = b / (√2/2) -> 20 = 2b / √2 -> b = 20 × (√2/2) = 10√2 millas náuticas.',
      invalidOptionsReasoning: {
        A: 'Divide entre 2 de más (5√2).',
        C: 'Multiplica por 1/2 ignorando la raíz cuadrada.',
        D: 'Duplica el resultado (20√2).'
      },
      socraticHints: {
        recordar: '¿Cómo se enuncia la Ley del Seno entre lados y ángulos opuestos? [a / sen(A) = b / sen(B)].',
        comprender: 'Reemplaza: a = 10, sen(30°) = 0,5, sen(45°) = √2 / 2.',
        aplicar: 'Despeja en tu cuaderno: b = 10 × (√2/2) / (1/2) = 10√2 millas.',
        analizar: '¿Por qué la Ley del Seno es la herramienta trigonométrica adecuada cuando se conocen dos ángulos y un lado opuesto?'
      }
    }
  ],

  // ================= GRADO 11° =================
  11: [
    {
      id: 1101,
      grade: 11,
      questionNumber: 1,
      title: 'Probabilidad de seleccionar una ficha negra en dos urnas',
      statement: 'En una feria de juegos se tienen dos urnas con fichas de colores:\n- Urna 1: 3 fichas blancas y 2 fichas negras (Total = 5 fichas).\n- Urna 2: 4 fichas blancas y 6 fichas negras (Total = 10 fichas).\n\nPara jugar, primero se lanza una moneda justa (Cara = Urna 1, Sello = Urna 2) y luego se extrae una ficha al azar de la urna seleccionada.\n\n¿Cuál es la probabilidad total de que la ficha extraída sea de color negro?',
      options: [
        { number: 1, letter: 'A', text: '1/2' },
        { number: 2, letter: 'B', text: '8/15' },
        { number: 3, letter: 'C', text: '2/5' },
        { number: 4, letter: 'D', text: '3/5' }
      ],
      correctOption: 1,
      correctLetter: 'A',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Aleatorio',
      affirmation: 'Aplica el teorema de probabilidad total en experimentos compuestos de etapas sucesivas.',
      evidence: 'Calcula la probabilidad de un evento combinando probabilidades condicionales: P(B) = Σ P(Ai)·P(B|Ai).',
      standard: 'Resuelvo y planteo problemas usando conceptos básicos de conteo y probabilidad (probabilidad condicional, probabilidad total e independencia).',
      justification: 'Aplicando el Teorema de Probabilidad Total:\nP(Negra) = P(Urna 1)·P(Negra|Urna 1) + P(Urna 2)·P(Negra|Urna 2)\nP(Negra) = (1/2)·(2/5) + (1/2)·(6/10) = (1/2)·(0.4) + (1/2)·(0.6) = 0.2 + 0.3 = 0.5 = 1/2.',
      invalidOptionsReasoning: {
        A: '',
        B: '8/15 surge de sumar numeradores y denominadores directamente (2+6)/(5+10) sin ponderar por la probabilidad de la moneda.',
        C: '2/5 es únicamente la probabilidad condicional de sacar negra en la Urna 1.',
        D: '3/5 es únicamente la probabilidad condicional de sacar negra en la Urna 2.'
      },
      socraticHints: {
        recordar: '¿Cuál es la probabilidad de que la moneda caiga en Cara (Urna 1) o en Sello (Urna 2)?',
        comprender: '¿Cuál es la probabilidad de extraer una ficha negra si te encuentras en la Urna 1? ¿Y en la Urna 2?',
        aplicar: 'Aplica en tu libreta el Teorema de la Probabilidad Total: P(Negra) = (1/2)·(2/5) + (1/2)·(6/10).',
        analizar: 'Calcula la suma de fracciones y simplifícala hasta su mínima expresión. ¿A qué valor decimal equivale 0.2 + 0.3?'
      }
    }
  ]
};
