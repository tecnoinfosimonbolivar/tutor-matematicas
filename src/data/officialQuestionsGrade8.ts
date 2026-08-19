// Banco Oficial ICFES Evaluar para Avanzar - Grado 8° (Preguntas 1 a 20 Oficiales)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
import { Question } from '../types';

export const OFFICIAL_GRADE_8: Question[] = [
  {
    id: 801,
    grade: 8,
    questionNumber: 1,
    title: 'Recorrido en mapa cuadriculado a escala',
    statement: 'A un conductor se le entrega el mapa de la ciudad en una cuadrícula donde cada cuadrado mide 20 metros de lado. Para ir desde el punto de inicio hasta el parque siguiendo la ruta demarcada:\n\n¿Cuál es el recorrido que debe hacer el conductor?',
    options: [
      { number: 1, letter: 'A', text: '100 m al norte y 80 m al oriente.' },
      { number: 2, letter: 'B', text: '80 m al occidente, 60 m al norte, 160 m al oriente y 40 m al norte.' },
      { number: 3, letter: 'C', text: '40 m al oriente y 50 m al norte.' },
      { number: 4, letter: 'D', text: '50 m al occidente, 30 m al norte, 80 m al occidente y 20 m al norte.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comunicación, modelación y representación',
    component: 'Espacial-Métrico',
    affirmation: 'Identifica movimientos en un plano con escala y puntos cardinales.',
    evidence: 'Calcula distancias multiplicando el número de cuadros por 20 metros.',
    standard: 'Selecciono y uso técnicas para medir longitudes en planos.',
    justification: 'Siguiendo las flechas:\n1. 4 cuadros a la izquierda (occidente): 4 × 20 m = 80 m.\n2. 3 cuadros arriba (norte): 3 × 20 m = 60 m.\n3. 8 cuadros a la derecha (oriente): 8 × 20 m = 160 m.\n4. 2 cuadros arriba (norte): 2 × 20 m = 40 m.',
    invalidOptionsReasoning: {
      A: 'Traza una diagonal recta ignorando la cuadrícula.',
      C: 'Confunde las direcciones cardinales.',
      D: 'Asume erróneamente que cada cuadro mide 10 m en lugar de 20 m.'
    },
    socraticHints: {
      recordar: '¿Cuánto mide cada lado de los cuadrados de la cuadrícula?',
      comprender: 'Cuenta los cuadros en cada tramo de la ruta: 4 (Oeste), 3 (Norte), 8 (Este), 2 (Norte).',
      aplicar: 'Multiplica cada tramo por 20 m: 4×20=80, 3×20=60, 8×20=160, 2×20=40.',
      analizar: '¿Por qué la opción B es la única que describe con exactitud distancias y direcciones?'
    }
  },
  {
    id: 802,
    grade: 8,
    questionNumber: 2,
    title: 'Gráfica de dispersión de peso y estatura de trabajadores',
    statement: 'María, Marta, Juan, Pedro y Luis se practicaron un control médico:\n- María: (1,60 m; 65 kg)\n- Marta: (1,65 m; 70 kg)\n- Juan: (1,75 m; 75 kg)\n- Pedro: (1,72 m; 80 kg)\n- Luis: (1,80 m; 79 kg)\n\n¿Cuál gráfica relaciona correctamente la estatura (eje X) y el peso (eje Y)?',
    options: [
      { number: 1, letter: 'A', text: 'Gráfica A (puntos exactos en coordenadas de estatura y peso)' },
      { number: 2, letter: 'B', text: 'Gráfica B (diagrama de barras solo de peso)' },
      { number: 3, letter: 'C', text: 'Gráfica C (diagrama de barras solo de estatura)' },
      { number: 4, letter: 'D', text: 'Gráfica D (puntos ordenados artificialmente)' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Identifica la gráfica bivariada que representa los datos de una tabla.',
    evidence: 'Localiza puntos cartesianos bivariados (Estatura, Peso).',
    standard: 'Utilizo números reales en sus diferentes representaciones.',
    justification: 'La gráfica A ubica en el plano cartesiano cada pareja ordenada: (1.60, 65), (1.65, 70), (1.72, 80 para Pedro), (1.75, 75 para Juan), (1.80, 79 para Luis).',
    invalidOptionsReasoning: {
      B: 'Solo grafica una variable en barras.',
      C: 'Solo grafica estaturas sin relacionar el peso.',
      D: 'Intercambia las estaturas de Pedro y Juan para forzar un orden creciente.'
    },
    socraticHints: {
      recordar: '¿Qué variable está en el eje horizontal y cuál en el vertical?',
      comprender: 'Verifica el punto de Pedro: en X busca 1,72 m y en Y busca 80 kg.',
      aplicar: 'Comprueba los 5 puntos en la gráfica A.',
      analizar: '¿Por qué Pedro (1,72 m, 80 kg) está más a la izquierda pero más alto que Juan (1,75 m, 75 kg)?'
    }
  },
  {
    id: 803,
    grade: 8,
    questionNumber: 3,
    title: 'Coordenadas de sillas disponibles en sala de cine',
    statement: 'En una sala de cine la convención indica: escribir primero el número de la columna (X) y luego el de la fila (Y). Las sillas disponibles son M, N, P y Q.\n\n¿Cuál de las siguientes listas corresponde a las sillas disponibles?',
    options: [
      { number: 1, letter: 'A', text: 'M(6, 3), N(5, 4), P(4, 5) y Q(3, 6).' },
      { number: 2, letter: 'B', text: 'M(3, 6), N(4, 5), P(6, 4) y Q(7, 3).' },
      { number: 3, letter: 'C', text: 'M(6, 3), N(5, 4), P(4, 6) y Q(3, 7).' },
      { number: 4, letter: 'D', text: 'M(3, 6), N(4, 5), P(5, 4) y Q(6, 3).' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional / Geométrico',
    affirmation: 'Reconoce la pareja ordenada que representa un punto en el plano.',
    evidence: 'Identifica pares (columna, fila) respetando la convención dada.',
    standard: 'Utilizo sistemas de coordenadas para especificar localizaciones.',
    justification: 'Ubicando (columna, fila):\n- M está en columna 3, fila 6 -> M(3, 6)\n- N está en columna 4, fila 5 -> N(4, 5)\n- P está en columna 6, fila 4 -> P(6, 4)\n- Q está en columna 7, fila 3 -> Q(7, 3).',
    invalidOptionsReasoning: {
      A: 'Invierte el orden escribiendo (fila, columna).',
      C: 'Invierte y confunde coordenadas de P y Q.',
      D: 'Asigna columna 5 a P y 6 a Q de forma desfasada.'
    },
    socraticHints: {
      recordar: '¿Qué número va primero según la instrucción: columna o fila?',
      comprender: 'Para la silla M: baja la vista a la columna (3) y mira la fila a la izquierda (6).',
      aplicar: 'Anota en tu cuaderno: M(3,6), N(4,5), P(6,4), Q(7,3).',
      analizar: '¿Por qué la opción B es la única con el orden (columna, fila) exacto?'
    }
  },
  {
    id: 804,
    grade: 8,
    questionNumber: 4,
    title: 'Tasa de interés lineal de préstamo a 12 meses',
    statement: 'La gráfica muestra la tasa de interés de un préstamo: (2 meses, 0,012), (4 meses, 0,014), (6 meses, 0,016), (8 meses, 0,020). La pendiente es de 0,001 por cada mes adicional.\n\nSi se mantiene el comportamiento, ¿cuál sería la tasa de interés para un préstamo de 12 meses?',
    options: [
      { number: 1, letter: 'A', text: '0,024, porque cada mes de plazo adicional representa un aumento de 0,001 en la tasa de interés.' },
      { number: 2, letter: 'B', text: '0,022, porque el aumento de la tasa de interés en el eje vertical es de 0,002 unidades.' },
      { number: 3, letter: 'C', text: '0,020, porque esta es la tasa máxima que ofrece la entidad financiera.' },
      { number: 4, letter: 'D', text: '0,012, porque este es el valor donde la gráfica corta el eje vertical.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Determina nuevos valores a partir de una variable con comportamiento lineal.',
    evidence: 'Calcula la razón de cambio (pendiente) y proyecta el valor a 12 meses.',
    standard: 'Identifico y utilizo diferentes maneras de definir y medir la pendiente de una recta.',
    justification: 'La tasa de cambio es m = 0,002 / 2 meses = 0,001 por mes. A partir del mes 8 (tasa = 0,020), para llegar a 12 meses faltan 4 meses: Tasa = 0,020 + (4 × 0,001) = 0,024.',
    invalidOptionsReasoning: {
      B: '0,022 correspondería a 10 meses (8 + 2 meses).',
      C: 'Asume que la tasa se detiene en 8 meses.',
      D: '0,012 es el valor para 2 meses.'
    },
    socraticHints: {
      recordar: '¿Cuánto aumenta la tasa cada 2 meses? (0,014 - 0,012 = 0,002 -> 0,001 por mes).',
      comprender: '¿Cuántos meses transcurren entre el mes 8 y el mes 12? (4 meses).',
      aplicar: 'Calcula en tu cuaderno: 0,020 + (4 × 0,001) = 0,024.',
      analizar: '¿Por qué una tasa de cambio constante permite proyectar valores futuros con la ecuación de la recta?'
    }
  },
  {
    id: 805,
    grade: 8,
    questionNumber: 5,
    title: 'Clasificación de cuerpos geométricos en el estante',
    statement: 'En la figura del estante de doña Eduviges:\n- Parte superior: frascos cilíndricos de base circular.\n- Parte inferior: cajas en forma de paralelepípedos (6 caras) y prismas truncados.\n\n¿Cuál de las siguientes afirmaciones NO es correcta?',
    options: [
      { number: 1, letter: 'A', text: 'En la parte inferior del estante, doña Eduviges organiza envases cilíndricos.' },
      { number: 2, letter: 'B', text: 'En la parte superior del estante, doña Eduviges organiza envases que tienen base circular.' },
      { number: 3, letter: 'C', text: 'En la parte inferior del estante, doña Eduviges organiza envases que tienen 6 caras.' },
      { number: 4, letter: 'D', text: 'En la parte superior del estante, doña Eduviges organiza envases con 2 caras paralelas.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Razonamiento y argumentación',
    component: 'Espacial-Métrico',
    affirmation: 'Conjetura sobre propiedades de cuerpos geométricos tridimensionales.',
    evidence: 'Identifica propiedades falsas en la clasificación de cilindros y poliedros.',
    standard: 'Uso representaciones geométricas para clasificar objetos tridimensionales.',
    justification: 'En la parte inferior SOLO hay envases con forma de paralelepípedos rectangulares y prismas. Los cilindros están en la parte SUPERIOR. Por tanto, la afirmación A es falsa (NO correcta).',
    invalidOptionsReasoning: {
      B: 'Es verdadera: los cilindros superiores sí tienen base circular.',
      C: 'Es verdadera: las cajas inferiores tipo caja de cereal tienen 6 caras.',
      D: 'Es verdadera: las bases superior e inferior de los cilindros son planos paralelos.'
    },
    socraticHints: {
      recordar: 'Observa detenidamente la parte superior y la parte inferior del estante.',
      comprender: '¿Dónde están ubicados los frascos cilíndricos redondeados?',
      aplicar: 'Anota en tu cuaderno: "Parte superior = cilindros; Parte inferior = paralelepípedos".',
      analizar: '¿Por qué la afirmación A es incorrecta al ubicar cilindros en la parte inferior?'
    }
  },
  {
    id: 806,
    grade: 8,
    questionNumber: 6,
    title: 'Probabilidad equiprobable en dados de parqués',
    statement: 'En un juego de parqués con un dado estándar de 6 caras (1 al 6), al jugador 1 le faltan 3 casillas y al jugador 2 le falta 1 casilla. El jugador 1 afirma que es más probable obtener un 3 que un 1.\n\nEsta afirmación es:',
    options: [
      { number: 1, letter: 'A', text: 'verdadera, porque 3 es mayor que 1 y, por tanto, es el más probable.' },
      { number: 2, letter: 'B', text: 'falsa, porque es más probable sacar 1, por estar la ficha más cerca a la llegada.' },
      { number: 3, letter: 'C', text: 'verdadera, porque seguro en 8 lanzamientos no se obtiene 1.' },
      { number: 4, letter: 'D', text: 'falsa, porque tanto 1 como 3 tienen la misma probabilidad de obtenerse.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Explica la naturaleza de eventos equiprobables en juegos de azar.',
    evidence: 'Reconoce que en un dado justo cada cara tiene idéntica probabilidad P = 1/6.',
    standard: 'Comparo resultados de experimentos aleatorios con modelos de probabilidad.',
    justification: 'Un dado balanceado tiene 6 caras equiprobables. La probabilidad de obtener 1 es P(1) = 1/6 y la de obtener 3 es P(3) = 1/6. Ambas probabilidades son exactamente iguales.',
    invalidOptionsReasoning: {
      A: 'El valor numérico de la cara no influye en su probabilidad.',
      B: 'La distancia en el tablero no altera la probabilidad física del dado.',
      C: 'Falacia del jugador: los lanzamientos pasados no condicionan los futuros.'
    },
    socraticHints: {
      recordar: '¿Cuántas caras tiene un dado y cuántas veces aparece el número 1 y el número 3?',
      comprender: '¿Cuál es la probabilidad de que caiga cualquier cara específica de un dado justo? (1/6).',
      aplicar: 'Escribe en tu cuaderno: P(sacar 1) = 1/6 = P(sacar 3) = 1/6 (Sucesos equiprobables).',
      analizar: '¿Por qué la posición de la ficha en el tablero no afecta la física del dado?'
    }
  },
  {
    id: 807,
    grade: 8,
    questionNumber: 7,
    title: 'Probabilidad de bolas de colores en la caja',
    statement: 'Una caja contiene: 3 bolas blancas, 2 negras, 3 rojas y 4 verdes (Total = 12 bolas). Un participante afirma que la probabilidad de ganar es la misma sin importar el color elegido.\n\n¿El participante tiene razón?',
    options: [
      { number: 1, letter: 'A', text: 'No, porque el verde tiene mayor probabilidad que los otros colores.' },
      { number: 2, letter: 'B', text: 'Sí, porque hay bolas de los cuatro colores dentro de la caja.' },
      { number: 3, letter: 'C', text: 'No, porque sacar una bola roja es más probable que sacar una blanca.' },
      { number: 4, letter: 'D', text: 'Sí, porque cada color tiene igual probabilidad de ser elegido.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Determina la veracidad de una afirmación en experimentos no equiprobables.',
    evidence: 'Calcula las probabilidades por color: Blanco (3/12), Negro (2/12), Rojo (3/12), Verde (4/12).',
    standard: 'Uso conceptos básicos de probabilidad (espacio muestral, eventos).',
    justification: 'Como hay 4 bolas verdes (4/12 = 1/3) frente a 3 blancas (3/12), 3 rojas (3/12) y 2 negras (2/12), el color verde tiene mayor probabilidad. El participante no tiene razón.',
    invalidOptionsReasoning: {
      B: 'Que haya 4 colores no significa que estén en iguales proporciones.',
      C: 'Rojas (3) y blancas (3) tienen exactamente la misma probabilidad.',
      D: 'No son equiprobables porque las frecuencias son distintas.'
    },
    socraticHints: {
      recordar: 'Calcula la fracción de probabilidad para cada color sobre el total de 12 bolas.',
      comprender: 'Compara: Blanco 3/12, Negro 2/12, Rojo 3/12, Verde 4/12.',
      aplicar: 'Anota en tu cuaderno: Verde tiene 4/12 = 33.3% (Mayor probabilidad).',
      analizar: '¿Por qué elegir el color verde ofrece mayor ventaja matemática para ganar?'
    }
  },
  {
    id: 808,
    grade: 8,
    questionNumber: 8,
    title: 'Diagrama de árbol de recorridos en parque natural',
    statement: 'En un parque natural las opciones de recorrido son:\n- Museo -> Zoológico -> Piscinas\n- Museo -> Zoológico -> Deportes\n- Museo -> Lago -> Deportes\n- Museo -> Lago -> Piscinas\n\n¿Cuál diagrama de árbol resume los recorridos ofrecidos?',
    options: [
      { number: 1, letter: 'A', text: 'Diagrama A (Museo se ramifica en Zoológico y Lago, y cada uno en Piscinas y Lago)' },
      { number: 2, letter: 'B', text: 'Diagrama B (Inicia en Piscinas)' },
      { number: 3, letter: 'C', text: 'Diagrama C (Museo se ramifica en Zoológico y Lago; Zoológico se abre en Piscinas y Deportes; Lago se abre en Piscinas y Deportes)' },
      { number: 4, letter: 'D', text: 'Diagrama D (Inicia en Piscinas y Deportes)' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comunicación, modelación y representación',
    component: 'Aleatorio',
    affirmation: 'Identifica el diagrama de árbol que representa un conjunto de rutas.',
    evidence: 'Construye ramificaciones jerárquicas en etapas sucesivas.',
    standard: 'Selecciono y uso métodos estadísticos para representar opciones.',
    justification: 'Todos los recorridos inician en Museo (nodo raíz). De allí salen dos ramas: Zoológico y Lago. De cada una de ellas salen dos ramas finales: Piscinas y Deportes. Esto coincide con el diagrama C.',
    invalidOptionsReasoning: {
      A: 'En las hojas repite Zoológico y Lago.',
      B: 'Coloca Piscinas como inicio del recorrido.',
      D: 'Desordena la secuencia lógica de las etapas.'
    },
    socraticHints: {
      recordar: '¿Cuál es el primer lugar obligatorio de visita en todos los recorridos? (Museo).',
      comprender: '¿Cuáles son las 2 opciones en la segunda etapa? (Zoológico y Lago).',
      aplicar: 'Dibuja el árbol en tu cuaderno: Museo -> [Zoológico, Lago] -> [Piscinas, Deportes].',
      analizar: '¿Por qué el diagrama C contiene las 4 rutas posibles sin errores?'
    }
  },
  {
    id: 809,
    grade: 8,
    questionNumber: 9,
    title: 'Procedimiento para calcular área compuesta (cuadrado y triángulo)',
    statement: 'Se construye una figura compuesta por un triángulo de base 8 cm y altura 12 cm, junto a un cuadrado de lado 12 cm (base total 20 cm, altura 12 cm).\n- Juan plantea: (8 cm × 12 cm)/2 + (12 cm × 12 cm)\n- Camilo plantea: 20 cm × 12 cm\n\n¿Cuál de los procedimientos permite hallar correctamente el área de la figura?',
    options: [
      { number: 1, letter: 'A', text: 'Solamente el de Juan.' },
      { number: 2, letter: 'B', text: 'Solamente el de Camilo.' },
      { number: 3, letter: 'C', text: 'El de Juan y el de Camilo.' },
      { number: 4, letter: 'D', text: 'Ni el de Juan ni el de Camilo.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Establece procedimientos correctos para calcular el área de figuras compuestas.',
    evidence: 'Aplica descomposición en figuras regulares conocidas (triángulo + cuadrado).',
    standard: 'Selecciono técnicas para medir áreas de superficies.',
    justification: 'El procedimiento de Juan suma el área del triángulo (8×12/2 = 48 cm²) más el área del cuadrado (12×12 = 144 cm²) = 192 cm². El procedimiento de Camilo calcula el área de un rectángulo completo de 20×12 = 240 cm², incluyendo un espacio vacío no perteneciente a la figura.',
    invalidOptionsReasoning: {
      B: 'Camilo calcula un rectángulo completo sobreestimando el área.',
      C: 'Camilo está equivocado.',
      D: 'Juan sí está en lo correcto.'
    },
    socraticHints: {
      recordar: '¿Cuáles dos figuras forman la silueta total?',
      comprender: '¿Cómo se calcula el área del triángulo y la del cuadrado por separado?',
      aplicar: 'Calcula en tu cuaderno: A_triángulo = (8 × 12) / 2 = 48 cm²; A_cuadrado = 12 × 12 = 144 cm² -> Total = 192 cm².',
      analizar: '¿Por qué el cálculo de Camilo (20 × 12 = 240) añade un triángulo fantasma que no existe en la figura?'
    }
  },
  {
    id: 810,
    grade: 8,
    questionNumber: 10,
    title: 'Comparación de promedios de rosas y girasoles en dos parques',
    statement: 'En la tabla se muestra la cantidad de flores en dos parques:\n- Parque 1: 150 rosas y 60 girasoles\n- Parque 2: 10 rosas y 20 girasoles\n\n¿Cuál de las siguientes afirmaciones es correcta?',
    options: [
      { number: 1, letter: 'A', text: 'El promedio de girasoles de los dos parques es cuatro veces el promedio de rosas.' },
      { number: 2, letter: 'B', text: 'El promedio de rosas de los dos parques es dos veces el promedio de girasoles.' },
      { number: 3, letter: 'C', text: 'El promedio de girasoles de los dos parques es tres veces el promedio de rosas.' },
      { number: 4, letter: 'D', text: 'El promedio de rosas de los dos parques es siete veces el promedio de girasoles.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Compara promedios de distintos conjuntos de datos.',
    evidence: 'Calcula medias aritméticas y determina razones de comparación entre ellas.',
    standard: 'Interpreto y utilizo conceptos de media en distribuciones.',
    justification: 'Promedio de rosas = (150 + 10) ÷ 2 = 160 ÷ 2 = 80 rosas. Promedio de girasoles = (60 + 20) ÷ 2 = 80 ÷ 2 = 40 girasoles. Como 80 = 2 × 40, el promedio de rosas es dos veces (el doble) el de girasoles.',
    invalidOptionsReasoning: {
      A: 'El promedio de rosas (80) es mayor que el de girasoles (40), no al revés.',
      C: 'Toma datos de un solo parque en vez del promedio conjunto.',
      D: 'Calcula proporciones de totales brutos sin promediar.'
    },
    socraticHints: {
      recordar: 'Calcula en tu cuaderno el promedio de rosas: (150 + 10) / 2 = ?',
      comprender: 'Calcula el promedio de girasoles: (60 + 20) / 2 = ?',
      aplicar: 'Compara 80 frente a 40: ¿cuántas veces cabe 40 en 80?',
      analizar: '¿Por qué 80 es exactamente el doble (dos veces) de 40?'
    }
  },
  {
    id: 811,
    grade: 8,
    questionNumber: 11,
    title: 'Tiempo de ascenso de una pelota lanzada verticalmente',
    statement: 'Un estudiante lanzó una pelota hacia arriba desde una altura de 5 metros. La gráfica cuadrática muestra la altura con respecto al tiempo: inicia en (0 s, 5 m), alcanza su altura máxima de 9 metros a los 2 segundos, y cae al suelo a los 5 segundos.\n\n¿Cuánto tiempo duró subiendo la pelota?',
    options: [
      { number: 1, letter: 'A', text: '1 segundo.' },
      { number: 2, letter: 'B', text: '2 segundos.' },
      { number: 3, letter: 'C', text: '5 segundos.' },
      { number: 4, letter: 'D', text: '9 segundos.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Identifica intervalos de crecimiento y puntos máximos en gráficas de funciones.',
    evidence: 'Lee el tiempo correspondiente al vértice superior de una parábola.',
    standard: 'Modelo situaciones de variación con funciones polinómicas.',
    justification: 'La pelota asciende desde t = 0 s hasta que alcanza su altura máxima (9 m) en t = 2 s. A partir de t = 2 s comienza a descender. Por tanto, duró subiendo exactamente 2 segundos.',
    invalidOptionsReasoning: {
      A: 'A 1 segundo la pelota aún está en pleno ascenso.',
      C: '5 segundos es el tiempo total de vuelo hasta tocar el piso.',
      D: '9 es la altura máxima en metros, no el tiempo en segundos.'
    },
    socraticHints: {
      recordar: '¿En qué punto de la gráfica la curva deja de subir y empieza a bajar?',
      comprender: 'Mira en el eje horizontal (Tiempo en segundos) el valor correspondiente a la cima de la curva.',
      aplicar: 'Escribe en tu cuaderno: Vértice = (2 s, 9 m) -> Tiempo de subida = 2 segundos.',
      analizar: '¿Por qué el intervalo de subida corresponde únicamente a [0 s, 2 s]?'
    }
  },
  {
    id: 812,
    grade: 8,
    questionNumber: 12,
    title: 'Extracción de información en diagrama de árbol de color de ojos',
    statement: 'En el diagrama de árbol de un salón de clases:\n- Género Mujer se divide en: Azul, Café y Verde.\n- Género Hombre se divide en: Azul, Café y Negro.\n\nSegún el diagrama de la figura, ¿cuál de las siguientes afirmaciones es correcta?',
    options: [
      { number: 1, letter: 'A', text: 'Una mujer puede tener ojos azules.' },
      { number: 2, letter: 'B', text: 'Un hombre puede tener ojos verdes.' },
      { number: 3, letter: 'C', text: 'Hay 4 colores de ojos para mujeres.' },
      { number: 4, letter: 'D', text: 'Hay 6 distintos colores de ojos.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comunicación, modelación y representación',
    component: 'Aleatorio',
    affirmation: 'Reconoce distintos tipos de representación en diagramas de árbol.',
    evidence: 'Identifica combinaciones válidas siguiendo las ramas del árbol.',
    standard: 'Interpreto analítica y críticamente información estadística.',
    justification: 'Siguiendo la rama "Mujer", una de las opciones posibles es "Azul". Por tanto, es totalmente correcto afirmar que una mujer puede tener ojos azules.',
    invalidOptionsReasoning: {
      B: 'En la rama "Hombre" solo están Azul, Café y Negro (no Verde).',
      C: 'Para mujeres solo hay 3 opciones en el diagrama (Azul, Café, Verde).',
      D: 'Los colores únicos son 4 (Azul, Café, Verde, Negro), no 6.'
    },
    socraticHints: {
      recordar: 'Sigue con tu dedo la rama que dice "Mujer".',
      comprender: '¿Cuáles 3 colores de ojos aparecen conectados a esa rama?',
      aplicar: 'Anota en tu cuaderno: Opciones para mujer = {Azul, Café, Verde}.',
      analizar: '¿Por qué la afirmación A es la única respaldada por el diagrama?'
    }
  },
  {
    id: 813,
    grade: 8,
    questionNumber: 13,
    title: 'Identificación de la moda de 51 años en tablas de edades',
    statement: 'Juliana le preguntó la edad a sus 5 tíos y encontró que la MODA es de 51 años.\n\n¿Cuál de las siguientes tablas representa las edades de los tíos de Juliana?',
    options: [
      { number: 1, letter: 'A', text: 'Tabla A (36, 48, 51, 57, 63 - todas edades distintas)' },
      { number: 2, letter: 'B', text: 'Tabla B (40, 45, 49, 50, 51 - todas edades distintas)' },
      { number: 3, letter: 'C', text: 'Tabla C (Alberto 36, Carmen 48, Fernando 51, Rafael 51, Lucía 63)' },
      { number: 4, letter: 'D', text: 'Tabla D (49, 50, 51, 52, 53 - 51 es la mediana, no la moda)' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Aleatorio',
    affirmation: 'Encuentra el conjunto de datos que cumple con un valor de moda establecido.',
    evidence: 'Identifica que la moda requiere que el dato 51 tenga la mayor frecuencia repetida.',
    standard: 'Interpreto y utilizo conceptos de media, mediana y moda.',
    justification: 'En la Tabla C, la edad de 51 años se repite dos veces (Fernando y Rafael), mientras las demás edades aparecen una sola vez. Al ser el dato más frecuente, la moda es 51 años.',
    invalidOptionsReasoning: {
      A: 'En la tabla A ningún valor se repite (amodal).',
      B: 'En la tabla B todos los datos son únicos.',
      D: 'En la tabla D todos son únicos y 51 es la mediana central, no la moda.'
    },
    socraticHints: {
      recordar: '¿Qué requisito estadístico define a la "Moda"? (El dato con mayor frecuencia de repetición).',
      comprender: 'Revisa las 4 tablas: ¿en cuál tabla el número 51 aparece repetido más de una vez?',
      aplicar: 'Anota en tu cuaderno: Tabla C -> Fernando (51) y Rafael (51) -> Frecuencia = 2 (Moda).',
      analizar: '¿Por qué si ningún dato se repite no existe moda?'
    }
  },
  {
    id: 814,
    grade: 8,
    questionNumber: 14,
    title: 'Tasa de variación entre edad humana y edad canina',
    statement: 'La gráfica muestra la relación entre la edad de un humano y la de un perro: (2, 24), (4, 28), (6, 32), (8, 36).\n\n¿Cuál es la relación entre la edad biológica del humano y la del perro, a partir del segundo año?',
    options: [
      { number: 1, letter: 'A', text: 'Por cada 2 años humanos, la edad del perro aumenta 2 años.' },
      { number: 2, letter: 'B', text: 'Por cada 4 años humanos, la edad del perro aumenta 2 años.' },
      { number: 3, letter: 'C', text: 'Por cada 2 años humanos, la edad del perro aumenta 4 años.' },
      { number: 4, letter: 'D', text: 'Por cada 4 años humanos, la edad del perro aumenta 4 años.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Establece la razón de cambio lineal entre dos variables.',
    evidence: 'Calcula la pendiente m = Δy / Δx en una recta de variación.',
    standard: 'Identifico la pendiente de una curva en situaciones de variación.',
    justification: 'Calculando las diferencias entre puntos consecutivos:\n- En humanos (eje X): 4 - 2 = 2 años humanos.\n- En perros (eje Y): 28 - 24 = 4 años caninos.\nPor tanto, por cada 2 años humanos, la edad del perro aumenta 4 años (tasa = 2 años caninos por año humano).',
    invalidOptionsReasoning: {
      A: 'Asume que ambos aumentan 2.',
      B: 'Invierte las magnitudes de cambio.',
      D: 'Asume que ambos aumentan 4.'
    },
    socraticHints: {
      recordar: 'Compara el punto (2, 24) con el punto (4, 28).',
      comprender: '¿Cuánto aumentó X (humanos)? 4 - 2 = 2. ¿Cuánto aumentó Y (perro)? 28 - 24 = 4.',
      aplicar: 'Escribe en tu cuaderno: Razón de cambio = ΔY / ΔX = +4 años caninos / +2 años humanos.',
      analizar: '¿Por qué la opción C describe con total precisión la pendiente de la gráfica?'
    }
  },
  {
    id: 815,
    grade: 8,
    questionNumber: 15,
    title: 'Cálculo del volumen de un ladrillo prismático',
    statement: 'En la figura se muestra un ladrillo rectangular con las siguientes dimensiones: 1 cm de ancho, 2 cm de profundidad y 13 cm de altura.\n\n¿Cuál es el volumen de este ladrillo?',
    options: [
      { number: 1, letter: 'A', text: '15 cm³' },
      { number: 2, letter: 'B', text: '28 cm³' },
      { number: 3, letter: 'C', text: '26 cm³' },
      { number: 4, letter: 'D', text: '39 cm³' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Calcula volúmenes de sólidos rectangulares a partir de sus dimensiones.',
    evidence: 'Aplica la fórmula V = largo × ancho × alto.',
    standard: 'Selecciono técnicas para medir volúmenes de cuerpos sólidos.',
    justification: 'Volumen = 1 cm × 2 cm × 13 cm = 26 cm³.',
    invalidOptionsReasoning: {
      A: 'Suma las dimensiones (13 + 2 = 15).',
      B: 'Calcula (13 + 1) × 2 = 28 cm³.',
      D: 'Multiplica 13 × 3 = 39 cm³.'
    },
    socraticHints: {
      recordar: '¿Cuál es la fórmula para calcular el volumen de un prisma rectangular?',
      comprender: 'Multiplica las tres dimensiones: base (1 cm) × profundidad (2 cm) × altura (13 cm).',
      aplicar: 'Calcula en tu cuaderno: 1 × 2 = 2; luego 2 × 13 = 26 cm³.',
      analizar: '¿Por qué la unidad resultante debe ser cúbica (cm³)?'
    }
  },
  {
    id: 816,
    grade: 8,
    questionNumber: 16,
    title: 'Triángulo semejante por reducción a escala de una pirámide',
    statement: 'Un artista dibujó una reducción a escala de una de las caras triangulares de una pirámide cuyas medidas reales son: 410 cm, 410 cm y 440 cm en la base.\n\nDe acuerdo con las medidas, ¿cuál de los siguientes triángulos es el dibujo del artista?',
    options: [
      { number: 1, letter: 'A', text: 'Triángulo equilátero de 4 cm × 4 cm × 4 cm' },
      { number: 2, letter: 'B', text: 'Triángulo escaleno de 41 cm, 42 cm, 43 cm' },
      { number: 3, letter: 'C', text: 'Triángulo isósceles de 41 cm, 41 cm y 44 cm de base (escala 1:10)' },
      { number: 4, letter: 'D', text: 'Triángulo de 41 cm, 41 cm y 55 cm' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Espacial-Métrico',
    affirmation: 'Verifica criterios de semejanza en triángulos proporcionales.',
    evidence: 'Identifica la reducción a escala 1:10 dividiendo todos los lados por 10.',
    standard: 'Aplico y justifico criterios de semejanza entre triángulos.',
    justification: 'Una reducción semejante debe tener todos sus lados proporcionales por una misma constante k. Al dividir cada lado entre 10: 410/10 = 41 cm, 410/10 = 41 cm y 440/10 = 44 cm (Triángulo C).',
    invalidOptionsReasoning: {
      A: 'Convierte el triángulo isósceles en equilátero perdiendo la forma.',
      B: 'Altera las proporciones individuales.',
      D: 'Aumenta la base a 55 cm deformando el triángulo.'
    },
    socraticHints: {
      recordar: '¿Qué tipo de triángulo es la cara de la pirámide (isósceles con dos lados de 410 cm y base de 440 cm)?',
      comprender: 'Si divides todas las medidas entre 10 (escala 1:10), ¿qué medidas obtienes?',
      aplicar: 'Anota en tu cuaderno: 410/10 = 41 cm, 410/10 = 41 cm, 440/10 = 44 cm.',
      analizar: '¿Por qué la semejanza geométrica exige que la razón sea la misma para los tres lados?'
    }
  },
  {
    id: 817,
    grade: 8,
    questionNumber: 17,
    title: 'Área total de figura armada con 9 fichas cuadradas',
    statement: 'Paula posee fichas cuadradas de 2 cm × 2 cm (área = 4 cm² cada una). Con ellas formó una figura compuesta por exactamente 9 fichas sin sobreponerse.\n\n¿Cuál es el área de la figura formada por Paula?',
    options: [
      { number: 1, letter: 'A', text: '4 cm²' },
      { number: 2, letter: 'B', text: '9 cm²' },
      { number: 3, letter: 'C', text: '36 cm²' },
      { number: 4, letter: 'D', text: '40 cm²' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Calcula el área de figuras bidimensionales a partir de un patrón repetido.',
    evidence: 'Multiplica el área de la ficha unitaria por el número total de fichas.',
    standard: 'Generalizo procedimientos de cálculo para encontrar el área de regiones planas.',
    justification: 'Área de 1 ficha = 2 cm × 2 cm = 4 cm². Como la figura está compuesta por 9 fichas: Área total = 9 × 4 cm² = 36 cm².',
    invalidOptionsReasoning: {
      A: '4 cm² es solo el área de una ficha individual.',
      B: '9 cm² confunde la cantidad de fichas con el valor del área.',
      D: '40 cm² calcula el área como si fueran 10 fichas.'
    },
    socraticHints: {
      recordar: '¿Cuánto mide el área de un cuadrado de 2 cm de lado? (2 × 2 = 4 cm²).',
      comprender: 'Si juntas 9 de esos cuadrados, ¿cuál es la superficie total?',
      aplicar: 'Calcula en tu cuaderno: 9 fichas × 4 cm²/ficha = 36 cm².',
      analizar: '¿Por qué la suma de las áreas de las 9 fichas produce 36 cm² exactos?'
    }
  },
  {
    id: 818,
    grade: 8,
    questionNumber: 18,
    title: 'Hora pico de valor máximo por unidad en transporte',
    statement: 'El valor de la unidad de transporte varía según la hora: 3 p.m. ($76), 4 p.m. ($85), 5 p.m. ($100), 6 p.m. ($105), 7 p.m. ($100), 8 p.m. ($85), 9 p.m. ($76).\n\n¿Cuál es la hora del día en la que se paga el valor MÁXIMO por unidad?',
    options: [
      { number: 1, letter: 'A', text: '3 p.m.' },
      { number: 2, letter: 'B', text: '5 p.m.' },
      { number: 3, letter: 'C', text: '6 p.m.' },
      { number: 4, letter: 'D', text: '9 p.m.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Determina el punto máximo de una variable a partir de su representación gráfica.',
    evidence: 'Identifica la coordenada con la mayor ordenada Y.',
    standard: 'Modelo situaciones de variación con funciones polinómicas.',
    justification: 'De los 7 registros, la cúspide de la curva alcanza el valor máximo de $105 a las 6 p.m. (punto (6 p.m., $105)).',
    invalidOptionsReasoning: {
      A: 'A las 3 p.m. el valor es de $76 (el mínimo).',
      B: 'A las 5 p.m. es de $100.',
      D: 'A las 9 p.m. es de $76.'
    },
    socraticHints: {
      recordar: 'Compara los valores de la unidad en cada una de las horas.',
      comprender: '¿Cuál es el valor monetario más alto de la gráfica? ($105).',
      aplicar: 'Anota en tu cuaderno: 6 p.m. -> $105 (Máximo global).',
      analizar: '¿Por qué el punto más alto del gráfico representa el precio máximo por unidad?'
    }
  },
  {
    id: 819,
    grade: 8,
    questionNumber: 19,
    title: 'Elección de sala de cine con presupuesto exacto de $10.000',
    statement: 'Se pagó exactamente $10.000 por una boleta de niño y una de adulto. Precios por sala:\n- Cine 1: Adultos $7.500, Niños $3.350 (Total = $10.850)\n- Cine 2: Adultos $6.800, Niños $3.200 (Total = $10.000)\n- Cine 3: Adultos $5.000, Niños $4.000 (Total = $9.000)\n- Cine 4: Adultos $6.600, Niños $4.400 (Total = $11.000)\n\n¿En cuál cine se compraron las boletas?',
    options: [
      { number: 1, letter: 'A', text: 'Cine 1.' },
      { number: 2, letter: 'B', text: 'Cine 2.' },
      { number: 3, letter: 'C', text: 'Cine 3.' },
      { number: 4, letter: 'D', text: 'Cine 4.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Establece valores que al ser sumados dan una cifra determinada.',
    evidence: 'Verifica la suma exacta de dos precios en diferentes opciones.',
    standard: 'Resuelvo problemas y simplifico cálculos usando operaciones de números reales.',
    justification: 'Sumando los precios del Cine 2: $6.800 + $3.200 = $10.000 pesos exactos.',
    invalidOptionsReasoning: {
      A: 'Cine 1 suma $7.500 + $3.350 = $10.850.',
      C: 'Cine 3 suma $5.000 + $4.000 = $9.000.',
      D: 'Cine 4 suma $6.600 + $4.400 = $11.000.'
    },
    socraticHints: {
      recordar: 'Suma el precio de adulto + niño para cada uno de los 4 cines.',
      comprender: '¿Cuál cine suma exactamente $10.000 sin sobrar ni faltar?',
      aplicar: 'Calcula en tu cuaderno: Cine 2 = 6.800 + 3.200 = 10.000.',
      analizar: '¿Por qué el Cine 2 es la única sala compatible con el recibo de $10.000?'
    }
  },
  {
    id: 820,
    grade: 8,
    questionNumber: 20,
    title: 'Comparación de promedio de vida de guepardos y elefantes',
    statement: 'La gráfica muestra el promedio de vida de animales salvajes:\n- Guepardo: 10 años\n- Babuino: 30 años\n- Elefante: 70 años\n\n¿Cuántas veces el promedio de vida de los guepardos es igual al promedio de vida de los elefantes?',
    options: [
      { number: 1, letter: 'A', text: '8' },
      { number: 2, letter: 'B', text: '7' },
      { number: 3, letter: 'C', text: '6' },
      { number: 4, letter: 'D', text: '3' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Aleatorio',
    affirmation: 'Compara promedios y calcula razones multiplicativas entre datos de diagramas de barras.',
    evidence: 'Halla el cociente entre dos valores para determinar cuántas veces cabe uno en el otro.',
    standard: 'Resuelvo problemas seleccionando información relevante en conjuntos de datos.',
    justification: 'Dividiendo la esperanza de vida del elefante (70 años) entre la del guepardo (10 años): 70 ÷ 10 = 7 veces (o 7 × 10 = 70).',
    invalidOptionsReasoning: {
      A: '8 toma el valor máximo del eje (80 / 10 = 8).',
      C: '6 calcula la diferencia (70 - 10 = 60) y divide entre 10.',
      D: '3 compara babuino con guepardo (30 / 10 = 3).'
    },
    socraticHints: {
      recordar: '¿Cuántos años vive en promedio el guepardo (10) y cuántos el elefante (70)?',
      comprender: '¿Por qué número debes multiplicar 10 para llegar a 70?',
      aplicar: 'Divide en tu cuaderno: 70 ÷ 10 = 7 veces.',
      analizar: '¿Por qué 7 veces la vida del guepardo equivale a la longevidad del elefante?'
    }
  }
];
