// Banco Oficial ICFES Evaluar para Avanzar - Grado 9° (Preguntas 1 a 20 Oficiales)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
import { Question } from '../types';

export const OFFICIAL_GRADE_9: Question[] = [
  {
    id: 901,
    grade: 9,
    questionNumber: 1,
    title: 'Duración de lavadoras según mantenimientos anuales',
    statement: 'Un fabricante de lavadoras afirma que la duración y en años de sus lavadoras se puede predecir usando la siguiente gráfica lineal, donde x es el número de mantenimientos al año y los puntos representados son (0, 5), (1, 13), (2, 21) y (3, 29).\n\nSegún la información de la gráfica, ¿cuál de las siguientes tablas relaciona correctamente la duración de una lavadora con el número de mantenimientos al año que se le realiza?',
    options: [
      { number: 1, letter: 'A', text: 'Tabla con x: 5, 13, 21, 29 y con y: 0 años, 1 año, 2 años, 3 años' },
      { number: 2, letter: 'B', text: 'Tabla con x: 0 (5 años), 1 (13 años), 2 (21 años), 3 (29 años)' },
      { number: 3, letter: 'C', text: 'Tabla con x: 1 (5 años), 2 (13 años), 3 (21 años), 4 (29 años)' },
      { number: 4, letter: 'D', text: 'Tabla con x: 5 (1 año), 13 (2 años), 21 (3 años), 29 (4 años)' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Contrasta las equivalencias entre diferentes registros de relaciones de variación entre variables.',
    evidence: 'Caracteriza las gráficas de funciones lineales según las ecuaciones y tablas que las representan.',
    standard: 'Analizo en representaciones gráficas cartesianas los comportamientos de cambio de funciones específicas.',
    justification: 'A partir de la gráfica se determina que cuando se realizan 0 mantenimientos la duración es 5 años; con 1 mantenimiento es 13 años; con 2 es 21 años y con 3 es 29 años (Ecuación: y = 8x + 5). Esta correspondencia exacta está en la opción B.',
    invalidOptionsReasoning: {
      A: 'Invierte los ejes considerando que el eje vertical es x y el horizontal es y.',
      C: 'Inicia el conteo de mantenimientos en 1 en lugar de 0.',
      D: 'Invierte los ejes y desajusta el inicio en 1 año.'
    },
    socraticHints: {
      recordar: '¿Qué representa el eje horizontal x y qué representa el eje vertical y en la gráfica?',
      comprender: '¿Cuál es el valor de la duración y cuando la variable x es igual a 0?',
      aplicar: 'Verifica en tu cuaderno los pares ordenados: (0,5), (1,13), (2,21), (3,29).',
      analizar: '¿Por qué la tabla B es la única que mantiene la variable independiente x en el orden de mantenimientos?'
    }
  },
  {
    id: 902,
    grade: 9,
    questionNumber: 2,
    title: 'Máxima rapidez de helicóptero en gráfica temporal',
    statement: 'La gráfica muestra la rapidez de un helicóptero durante los primeros 120 segundos de un recorrido.\n- De 0 a 20 s sube a 200 km/h.\n- De 20 a 50 s sube a 300 km/h.\n- De 50 a 70 s se mantiene constante en 300 km/h.\n- De 70 a 100 s baja a 150 km/h.\n- A los 110 s vuelve a alcanzar 300 km/h.\n- A los 120 s termina en 250 km/h.\n\n¿Cuál fue la máxima rapidez del helicóptero durante los primeros 120 segundos del recorrido?',
    options: [
      { number: 1, letter: 'A', text: '300 km/h.' },
      { number: 2, letter: 'B', text: '250 km/h.' },
      { number: 3, letter: 'C', text: '200 km/h.' },
      { number: 4, letter: 'D', text: '150 km/h.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Contrasta las equivalencias entre diferentes registros de relaciones de variación entre variables.',
    evidence: 'Identifica propiedades y puntos máximos de gráficas de funciones.',
    standard: 'Analizo en representaciones gráficas cartesianas los comportamientos de cambio de funciones específicas.',
    justification: 'Dado que el eje vertical representa la rapidez del helicóptero, la cresta superior más alta de la curva llega al nivel de 300 km/h (alcanzada entre los 50 y 70 s, y a los 110 s).',
    invalidOptionsReasoning: {
      B: '250 km/h es la rapidez final en el segundo 120.',
      C: '200 km/h es la rapidez en el segundo 20.',
      D: '150 km/h es el mínimo relativo en el segundo 100.'
    },
    socraticHints: {
      recordar: 'Observa el eje vertical: ¿cuál es el valor más alto que toca la línea del gráfico?',
      comprender: '¿En qué momentos del tiempo el helicóptero alcanza la cima de la gráfica?',
      aplicar: 'Traza una línea horizontal imaginaria en el punto más alto del gráfico hacia el eje Y.',
      analizar: '¿Por qué 300 km/h es el máximo absoluto de toda la función en el intervalo [0, 120]?'
    }
  },
  {
    id: 903,
    grade: 9,
    questionNumber: 3,
    title: 'Ecuación lineal de presupuesto de viaje',
    statement: 'Felipe tiene $750.000 para viajar y sabe que cada día gastará $50.000. Si y representa la cantidad de dinero que le queda cada día del viaje, y x la cantidad de días que transcurren del viaje, ¿cuál de las siguientes ecuaciones le permitirá saber a Felipe qué día se quedará sin dinero?',
    options: [
      { number: 1, letter: 'A', text: 'y = 700.000 – x' },
      { number: 2, letter: 'B', text: 'y = 750.000x – 50.000' },
      { number: 3, letter: 'C', text: 'y = 750.000 – 50.000x' },
      { number: 4, letter: 'D', text: 'y = 50.000x + 750.000' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas con ecuaciones lineales en contextos aplicados.',
    evidence: 'Plantea una expresión algebraica lineal que modela el decrecimiento de una cantidad.',
    standard: 'Modelo situaciones de variación con funciones polinómicas.',
    justification: 'El gasto acumulado en x días es 50.000x. El dinero restante y es el dinero inicial disponible menos el gasto acumulado: y = 750.000 - 50.000x. Para saber cuándo se queda sin dinero se hace y = 0.',
    invalidOptionsReasoning: {
      A: 'Resta directamente $50.000 una sola vez y luego resta x días sin multiplicar.',
      B: 'Multiplica los 750.000 iniciales por x en lugar del gasto diario.',
      D: 'Suma el gasto en lugar de restarlo al presupuesto disponible.'
    },
    socraticHints: {
      recordar: '¿Cuánto dinero tiene Felipe al inicio (día 0)?',
      comprender: 'Si pasan x días y en cada uno gasta $50.000, ¿cuánto dinero ha gastado en total?',
      aplicar: 'Escribe en tu cuaderno: Dinero restante = Dinero inicial - (Gasto diario × días).',
      analizar: '¿Por qué la pendiente negativa (-50.000) representa una disminución continua del saldo?'
    }
  },
  {
    id: 904,
    grade: 9,
    questionNumber: 4,
    title: 'Diagrama de árbol para control de calidad de bombillos',
    statement: 'De 140 bombillos producidos por una fábrica, se elige la mitad para una revisión tipo I y el resto para una revisión tipo II. Si en cada tipo de revisión hay bombillos que aprueban y bombillos que no aprueban, ¿cuál representación muestra todos los posibles resultados de las revisiones?',
    options: [
      { number: 1, letter: 'A', text: 'Diagrama que primero divide en Aprueba/No aprueba y luego en Tipo I/Tipo II' },
      { number: 2, letter: 'B', text: 'Diagrama que asigna solo Aprueba al Tipo I y solo No aprueba al Tipo II' },
      { number: 3, letter: 'C', text: 'Diagrama que bifurca a No aprueba en Tipo II pero Aprueba solo en Tipo I' },
      { number: 4, letter: 'D', text: 'Diagrama donde Bombillo se divide en Tipo I y Tipo II, y cada tipo se divide en Aprueba y No aprueba' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Aleatorio',
    affirmation: 'Resuelve problemas que requieren la obtención de probabilidad de eventos aleatorios.',
    evidence: 'Construye y selecciona diagramas de árbol correspondientes a experimentos por etapas.',
    standard: 'Selecciono y uso métodos estadísticos adecuados al tipo de problema.',
    justification: 'El proceso ocurre en dos etapas consecutivas: primero el bombillo es asignado a Tipo I o Tipo II (1.ª etapa); luego, en cualquiera de los dos tipos, el bombillo puede Aprobar o No Aprobar (2.ª etapa), generando 4 ramas terminales en la opción D.',
    invalidOptionsReasoning: {
      A: 'Invierte las etapas evaluando la aprobación antes de realizar la revisión.',
      B: 'Asume erróneamente que el Tipo I siempre aprueba y el Tipo II siempre reprueba.',
      C: 'Olimina ramas posibles en cada tipo de revisión.'
    },
    socraticHints: {
      recordar: '¿Cuál es el primer paso que se le hace a un bombillo (elegir Tipo I o Tipo II)?',
      comprender: 'Una vez que un bombillo está en Tipo I, ¿cuáles son los dos resultados posibles?',
      aplicar: 'Dibuja en tu cuaderno el árbol: Raíz (Bombillo) -> Ramas 1 (Tipo I, Tipo II) -> Sub-ramas (Aprueba, No aprueba).',
      analizar: '¿Por qué deben existir 4 combinaciones finales posibles en total?'
    }
  },
  {
    id: 905,
    grade: 9,
    questionNumber: 5,
    title: 'Distancia de salto del atleta en recta numérica',
    statement: 'Para una competencia, un atleta realiza un salto en la pista como muestra la figura. La sección de la pista entre los 3 m y los 4 m está dividida en 10 partes iguales de 0,1 m cada una. La huella de llegada del atleta cae en la sexta marca después del 3 m.\n\nTeniendo en cuenta la figura, ¿cuál fue la distancia del salto realizado por el atleta?',
    options: [
      { number: 1, letter: 'A', text: '3,8 m.' },
      { number: 2, letter: 'B', text: '3,6 m.' },
      { number: 3, letter: 'C', text: '3,4 m.' },
      { number: 4, letter: 'D', text: '3,2 m.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Reconoce el uso y propiedades de los números reales en la recta numérica.',
    evidence: 'Identifica el número decimal asociado a una posición en un sistema de referencia métrico.',
    standard: 'Utilizo números reales en sus diferentes representaciones y contextos.',
    justification: 'Al estar dividida la distancia de 1 metro en 10 partes iguales, cada división mide 1 / 10 = 0,1 m. La posición situada 6 marcas después de 3 m es 3 + (6 × 0,1) = 3 + 0,6 = 3,6 m.',
    invalidOptionsReasoning: {
      A: 'Asume erróneamente divisiones de 0,2 m contando desde 4 m hacia atrás.',
      C: 'Cuenta 4 marcas en vez de 6 (3,4 m).',
      D: 'Asume divisiones de 0,2 m desde 3 m (3 + 0,2 = 3,2 m).'
    },
    socraticHints: {
      recordar: '¿Cuánto vale cada pequeña división si entre 3 m y 4 m hay 10 partes iguales?',
      comprender: 'Cuenta cuántas marcas hay desde 3 m hasta el punto donde cayó el atleta.',
      aplicar: 'Calcula en tu cuaderno: 3,0 + (6 × 0,1) = 3,6 m.',
      analizar: '¿Por qué 3,6 m está exactamente al 60% del camino entre 3 m y 4 m?'
    }
  },
  {
    id: 906,
    grade: 9,
    questionNumber: 6,
    title: 'Dimensiones de la sala en plano cuadriculado de casa de muñecas',
    statement: 'Un carpintero va a construir una casa de muñecas usando un modelo plano sobre una cuadrícula donde cada cuadrado mide 5 cm de ancho × 5 cm de alto. En el plano, la sala ocupa un rectángulo de 5 cuadrados de ancho por 2 cuadrados de alto.\n\nSe puede afirmar correctamente que la sala de la casa de muñecas medirá:',
    options: [
      { number: 1, letter: 'A', text: '25 cm de ancho y 10 cm de alto.' },
      { number: 2, letter: 'B', text: '15 cm de ancho y 8 cm de alto.' },
      { number: 3, letter: 'C', text: '10 cm de ancho y 3 cm de alto.' },
      { number: 4, letter: 'D', text: '5 cm de ancho y 2 cm de alto.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comunicación, modelación y representación',
    component: 'Espacial-Métrico',
    affirmation: 'Reconoce características medibles de objetos bidimensionales a escala.',
    evidence: 'Calcula longitudes reales multiplicando el número de cuadrículas por la escala unitaria.',
    standard: 'Selecciono y uso técnicas e instrumentos para medir longitudes con niveles de precisión apropiados.',
    justification: 'Multiplicando las unidades de la cuadrícula por la dimensión unitaria (5 cm): Ancho = 5 cuadrados × 5 cm = 25 cm. Alto = 2 cuadrados × 5 cm = 10 cm.',
    invalidOptionsReasoning: {
      B: 'Multiplica por 4 en lugar de 5 (5×4=20, 2×4=8).',
      C: 'Toma el ancho de toda la casa (10) y suma 1 al alto.',
      D: 'Toma solo el conteo de cuadrados (5 y 2) ignorando que cada uno mide 5 cm.'
    },
    socraticHints: {
      recordar: '¿Cuánto mide cada lado de un cuadrito de la cuadrícula (5 cm)?',
      comprender: '¿Cuántos cuadritos de ancho y cuántos de alto tiene la sala?',
      aplicar: 'Multiplica en tu cuaderno: Ancho = 5 × 5 cm = 25 cm; Alto = 2 × 5 cm = 10 cm.',
      analizar: '¿Por qué es fundamental multiplicar el número de unidades por la escala dada?'
    }
  },
  {
    id: 907,
    grade: 9,
    questionNumber: 7,
    title: 'Cálculo de área de un trapecio con fórmula',
    statement: 'La figura muestra un trapecio con base mayor B = 4 cm, base menor b = 3 cm y altura h = 2 cm, junto con la fórmula para calcular su área: Área = [(B + b) × h] / 2.\n\n¿Cuál es el área del trapecio con estas medidas?',
    options: [
      { number: 1, letter: 'A', text: '7 cm².' },
      { number: 2, letter: 'B', text: '9 cm².' },
      { number: 3, letter: 'C', text: '14 cm².' },
      { number: 4, letter: 'D', text: '28 cm².' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Resuelve problemas que requieren cálculo de medidas de superficies.',
    evidence: 'Calcula áreas de polígonos aplicando fórmulas geométricas estándar.',
    standard: 'Selecciono y uso técnicas e instrumentos para medir áreas de superficies.',
    justification: 'Aplicando la fórmula del trapecio: Área = [(4 cm + 3 cm) × 2 cm] / 2 = (7 cm × 2 cm) / 2 = 14 / 2 = 7 cm².',
    invalidOptionsReasoning: {
      B: 'Suma las 3 medidas directamente: 4 + 3 + 2 = 9.',
      C: 'Olimite la división entre 2: (4 + 3) × 2 = 14 cm².',
      D: 'Multiplica por 2 en vez de dividir: 14 × 2 = 28 cm².'
    },
    socraticHints: {
      recordar: '¿Cuál es la fórmula del área del trapecio?',
      comprender: 'Suma las dos bases: 4 cm + 3 cm = 7 cm.',
      aplicar: 'Multiplica por la altura y divide entre 2: (7 × 2) / 2 = 14 / 2 = 7 cm².',
      analizar: '¿Por qué la división entre 2 es necesaria para no calcular el área de un paralelogramo doble?'
    }
  },
  {
    id: 908,
    grade: 9,
    questionNumber: 8,
    title: 'Interpretación de opciones de transporte en diagrama de árbol',
    statement: 'Para ir de la casa a la escuela, Fernanda tiene varias opciones:\n- Tomar un bus directo: bus R o bus S.\n- Tomar dos buses: primero toma el bus P (opciones: P1, P2, P3) y luego el bus Q (opciones: Q1, Q2).\n\nFernanda elabora un diagrama de árbol que muestra las ramas:\nP1 -> (Q1, Q2)\nP2 -> (Q1, Q2)\nP3 -> (Q1, Q2)\n\nEl diagrama muestra:',
    options: [
      { number: 1, letter: 'A', text: 'un recorrido en el que Fernanda tomó 9 buses para ir de la casa a la escuela.' },
      { number: 2, letter: 'B', text: 'las posibilidades en las que toma 2 buses para ir de la casa a la escuela.' },
      { number: 3, letter: 'C', text: 'todas las posibilidades que tiene Fernanda para ir de la casa a la escuela.' },
      { number: 4, letter: 'D', text: 'los buses directos que puede tomar para ir de la casa a la escuela.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Analiza datos representados en diagramas de árbol.',
    evidence: 'Determina el subconjunto de eventos representados en un árbol de decisión.',
    standard: 'Reconozco cómo diferentes maneras de presentación de información originan distintas interpretaciones.',
    justification: 'El diagrama elaborado por Fernanda solo detalla las combinaciones compuestas por dos buses sucesivos (P1-Q1, P1-Q2, P2-Q1, P2-Q2, P3-Q1, P3-Q2). No incluye los buses directos R y S, por lo que representa únicamente las opciones de tomar 2 buses.',
    invalidOptionsReasoning: {
      A: 'Cuenta los nodos del gráfico (3 buses P + 6 buses Q = 9) confundiéndolos con buses tomados en un solo viaje.',
      C: 'No incluye los buses directos R y S, por lo que no son todas las posibilidades.',
      D: 'El diagrama muestra trayectos de 2 buses, no los directos.'
    },
    socraticHints: {
      recordar: '¿Cuáles rutas directas tenía Fernanda que NO aparecen en el diagrama?',
      comprender: '¿Qué tipo de viajes están representados por las parejas P1-Q1, P2-Q2, etc.?',
      aplicar: 'Anota en tu cuaderno: "El diagrama ilustra las 3 × 2 = 6 formas de combinar 2 buses".',
      analizar: '¿Por qué no se puede afirmar que representa "todas" las opciones si faltaron los buses R y S?'
    }
  },
  {
    id: 909,
    grade: 9,
    questionNumber: 9,
    title: 'Cálculo de área de oficinas compuestas',
    statement: 'En una empresa quieren saber la cantidad de alfombra necesaria para cubrir el piso de sus seis oficinas (1, 2, 3, 4, 5, 6), cuyo plano forma un polígono compuesto por triángulos y rectángulos congruentes a la oficina 5 (triángulo rectángulo base).\n\nUn proceso que permite hallar el área de todas las oficinas es:',
    options: [
      { number: 1, letter: 'A', text: 'multiplicar por tres el área correspondiente a la oficina 3.' },
      { number: 2, letter: 'B', text: 'adicionar el área de las oficinas 4, 5 y 6 y multiplicar por dos.' },
      { number: 3, letter: 'C', text: 'establecer el área de la oficina 5, y multiplicarla por las veces que esta cabe en todas las oficinas.' },
      { number: 4, letter: 'D', text: 'determinar el área de la oficina 2 y multiplicar por seis, que corresponde al total de oficinas.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Resuelve problemas de cálculo de áreas en figuras bidimensionales compuestas.',
    evidence: 'Aplica descomposición en figuras unitarias congruentes para hallar el área total.',
    standard: 'Selecciono y uso técnicas e instrumentos para medir áreas de superficies.',
    justification: 'Al subdividir todo el plano en triángulos rectángulos congruentes con la oficina 5, el área total es simplemente el área de la oficina 5 multiplicada por la cantidad total de triángulos que caben en el plano.',
    invalidOptionsReasoning: {
      A: 'La oficina 3 no es un tercio exacto del total.',
      B: 'Las oficinas 1 y 2 no tienen la misma forma ni área que 4, 5 y 6.',
      D: 'Las seis oficinas tienen formas y tamaños muy diferentes entre sí, no se puede multiplicar una sola por 6.'
    },
    socraticHints: {
      recordar: '¿Tienen todas las oficinas el mismo tamaño y forma?',
      comprender: '¿Cómo se puede descomponer una figura irregular usando una figura básica que se repite?',
      aplicar: 'Escribe en tu cuaderno: "Área total = Área de figura base (Oficina 5) × número de veces que cabe".',
      analizar: '¿Por qué la teselación o recubrimiento con triángulos congruentes garantiza la medida exacta?'
    }
  },
  {
    id: 910,
    grade: 9,
    questionNumber: 10,
    title: 'Propiedades geométricas de un cajón cúbico',
    statement: 'El cajón de la figura tiene forma de un cubo sin tapa. Este cajón se compone de una base cuadrada, cuatro caras laterales perpendiculares a la base, un marco/soporte superior y cuatro soportes verticales.\n\n¿Cuál de las siguientes propiedades NO tiene el cajón?',
    options: [
      { number: 1, letter: 'A', text: 'La base es perpendicular a las caras laterales.' },
      { number: 2, letter: 'B', text: 'La base es perpendicular a los cuatro soportes verticales.' },
      { number: 3, letter: 'C', text: 'La base es perpendicular al soporte superior.' },
      { number: 4, letter: 'D', text: 'La base es perpendicular a la cara frontal del cajón.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comunicación, modelación y representación',
    component: 'Espacial-Métrico',
    affirmation: 'Reconoce relaciones de paralelismo y perpendicularidad en objetos tridimensionales.',
    evidence: 'Identifica propiedades geométricas que NO corresponden a la estructura de un prisma o cubo.',
    standard: 'Uso representaciones geométricas para resolver problemas en las matemáticas.',
    justification: 'En un cubo, la base inferior y el marco/soporte superior son planos horizontales paralelos entre sí. Por tanto, la afirmación de que "la base es perpendicular al soporte superior" es FALSA (es la propiedad que NO tiene el cajón).',
    invalidOptionsReasoning: {
      A: 'La base sí es perpendicular a las 4 caras laterales (ángulo de 90°).',
      B: 'La base sí es perpendicular a las aristas/soportes verticales.',
      D: 'La cara frontal es una de las caras laterales, por lo que sí es perpendicular a la base.'
    },
    socraticHints: {
      recordar: '¿Qué ángulo forman el piso y el techo de una habitación cúbica?',
      comprender: '¿La base y el soporte superior están frente a frente en planos paralelos?',
      aplicar: 'Dibuja en tu cuaderno un cubo y marca los planos paralelos (base y tapa) y los perpendiculares (base y paredes).',
      analizar: '¿Por qué dos planos horizontales opuestos nunca pueden ser perpendiculares entre sí?'
    }
  },
  {
    id: 911,
    grade: 9,
    questionNumber: 11,
    title: 'Probabilidad de diseño de zapatos según calibre de suela',
    statement: 'Juan cuenta con 4 distintos tipos de tela y con suelas de 3 calibres (delgada, mediana y gruesa), para fabricar zapatos. En total produce 4 × 3 = 12 diseños distintos.\n\nSi se escoge al azar uno de los diseños de zapato que Juan elabora, ¿cuál de los siguientes eventos tiene una probabilidad de 4 / (4 × 3) de ocurrir?',
    options: [
      { number: 1, letter: 'A', text: 'Que el diseño escogido tenga tela tipo estampado y suela gruesa.' },
      { number: 2, letter: 'B', text: 'Que el diseño escogido tenga suela delgada y gruesa.' },
      { number: 3, letter: 'C', text: 'Que el diseño escogido tenga suela calibre mediano.' },
      { number: 4, letter: 'D', text: 'Que el diseño escogido tenga tela tipo flores o tela tipo rayas.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Calcula probabilidades a partir del número de casos favorables y casos totales.',
    evidence: 'Identifica el evento cuyo número de casos favorables es igual a 4 de un total de 12.',
    standard: 'Interpreto analítica y críticamente información estadística.',
    justification: 'Existen exactamente 4 diseños que tienen suela de calibre mediano (uno por cada tipo de tela). Por tanto, la probabilidad de elegir un zapato con suela mediana es 4 / (4 × 3) = 4/12 = 1/3.',
    invalidOptionsReasoning: {
      A: 'Un tipo específico de tela con suela gruesa es solo 1 caso favorable de 12 (probabilidad 1/12).',
      B: 'Un zapato no puede tener simultáneamente suela delgada y gruesa (evento imposible, prob = 0).',
      D: 'Dos tipos de tela con 3 suelas cada una da 2 × 3 = 6 casos favorables (probabilidad 6/12).'
    },
    socraticHints: {
      recordar: '¿Cuántos casos totales hay en el espacio muestral (4 × 3 = 12)?',
      comprender: '¿Cuántos zapatos diferentes tienen suela mediana?',
      aplicar: 'Calcula: 4 telas × 1 suela mediana = 4 casos favorables. Probabilidad = 4/12.',
      analizar: '¿Por qué la opción C coincide exactamente con la fracción 4 / (4×3)?'
    }
  },
  {
    id: 912,
    grade: 9,
    questionNumber: 12,
    title: 'Probabilidad al unir animales de dos acuarios',
    statement: 'Se tienen dos acuarios, P y Q:\n- Acuario P: 4 peces, 3 caballos de mar y 3 pulpos (Total = 10 animales).\n- Acuario Q: 4 peces, 3 caballos de mar y 3 pulpos (Total = 10 animales).\n\nSi se reúnen los animales de los acuarios P y Q en un solo acuario, ¿cuál es la probabilidad de sacar al azar un caballo de mar del nuevo acuario?',
    options: [
      { number: 1, letter: 'A', text: '6/10' },
      { number: 2, letter: 'B', text: '3/20' },
      { number: 3, letter: 'C', text: '3/10' },
      { number: 4, letter: 'D', text: '1/20' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Aleatorio',
    affirmation: 'Calcula probabilidades en unión de conjuntos.',
    evidence: 'Determina casos favorables totales y casos posibles totales simplificando la fracción.',
    standard: 'Calculo probabilidad de eventos simples usando métodos diversos.',
    justification: 'En el nuevo acuario hay en total 10 + 10 = 20 animales, de los cuales 3 + 3 = 6 son caballos de mar. Probabilidad = 6 / 20 = 3 / 10.',
    invalidOptionsReasoning: {
      A: 'Divide 6 caballos de mar entre 10 animales de un solo acuario.',
      B: 'Toma solo los 3 caballos de mar de un acuario sobre los 20 totales (3/20).',
      D: 'Asume que solo hay 1 caso favorable de 20.'
    },
    socraticHints: {
      recordar: '¿Cuántos caballos de mar hay en total al juntar ambos acuarios (3 + 3 = 6)?',
      comprender: '¿Cuál es el total de animales en el nuevo acuario (10 + 10 = 20)?',
      aplicar: 'Plantea la fracción: 6/20 y simplifícala sacando mitad: 3/10.',
      analizar: '¿Por qué la proporción de caballos de mar se mantiene igual al 30% (3/10)?'
    }
  },
  {
    id: 913,
    grade: 9,
    questionNumber: 13,
    title: 'Solución de sistema de ecuaciones lineales 2x2',
    statement: 'La relación entre las cantidades x y y de dos artículos que se producen en una fábrica se representa con el siguiente sistema de ecuaciones:\n-x + y = 10\nx + 3y = 50\n\n¿Cuál es la cantidad x y y de cada artículo?',
    options: [
      { number: 1, letter: 'A', text: 'x = 5 artículos; y = 5 artículos.' },
      { number: 2, letter: 'B', text: 'x = 5 artículos; y = 15 artículos.' },
      { number: 3, letter: 'C', text: 'x = 20 artículos; y = 10 artículos.' },
      { number: 4, letter: 'D', text: 'x = 20 artículos; y = 30 artículos.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas con sistemas de ecuaciones lineales 2x2.',
    evidence: 'Aplica el método de reducción sumando directamente las ecuaciones.',
    standard: 'Identifico diferentes métodos para solucionar sistemas de ecuaciones lineales.',
    justification: 'Sumando miembro a miembro las dos ecuaciones: (-x + x) + (y + 3y) = 10 + 50 -> 4y = 60 -> y = 15. Reemplazando en la primera ecuación: -x + 15 = 10 -> x = 15 - 10 = 5. Por tanto, x = 5 y y = 15.',
    invalidOptionsReasoning: {
      A: '-5 + 5 = 0 ≠ 10.',
      C: '-20 + 10 = -10 ≠ 10.',
      D: '-20 + 30 = 10 pero 20 + 3(30) = 110 ≠ 50.'
    },
    socraticHints: {
      recordar: 'Observa los coeficientes de x: en una ecuación es -1 y en la otra es +1.',
      comprender: '¿Qué ocurre con la variable x si sumas ambas ecuaciones hacia abajo?',
      aplicar: 'Suma en tu cuaderno: 4y = 60 -> y = 15. Luego halla x: -x + 15 = 10 -> x = 5.',
      analizar: 'Verifica: 5 + 3(15) = 5 + 45 = 50. Ambas ecuaciones se cumplen a la perfección.'
    }
  },
  {
    id: 914,
    grade: 9,
    questionNumber: 14,
    title: 'Distancia de un escenario al origen en la recta numérica',
    statement: 'Un escritor construyó una línea que describe la ubicación de los escenarios más importantes donde se desarrolla su novela:\n- Origen: 0 km\n- Casa del protagonista: 10 km\n- Puerto: 20 km\n- Biblioteca: 25 km\n- Teatro: 35 km\n\n¿A cuántos kilómetros del origen se encuentra el Puerto?',
    options: [
      { number: 1, letter: 'A', text: 'A 35 kilómetros.' },
      { number: 2, letter: 'B', text: 'A 25 kilómetros.' },
      { number: 3, letter: 'C', text: 'A 20 kilómetros.' },
      { number: 4, letter: 'D', text: 'A 10 kilómetros.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Reconoce relaciones de orden y posición en la recta numérica.',
    evidence: 'Identifica la coordenada de un punto referenciado al origen 0.',
    standard: 'Utilizo números reales en sus diferentes representaciones y en diversos contextos.',
    justification: 'Dado que las unidades en la recta representan distancias en kilómetros desde el origen (0 km), la marca del Puerto coincide directamente con el valor 20 km.',
    invalidOptionsReasoning: {
      A: '35 km es la distancia al Teatro (el punto más alejado).',
      B: '25 km es la distancia a la Biblioteca.',
      D: '10 km es la distancia a la Casa del protagonista.'
    },
    socraticHints: {
      recordar: '¿En qué número comienza el Origen (0 km)?',
      comprender: 'Ubica la etiqueta "Puerto" en la recta y mira el número exacto que está debajo.',
      aplicar: 'Anota en tu cuaderno: "Posición del Puerto = 20 km".',
      analizar: '¿Por qué la distancia desde el origen 0 a cualquier punto x en la recta es simplemente x?'
    }
  },
  {
    id: 915,
    grade: 9,
    questionNumber: 15,
    title: 'Identificación de tabla con moda de tallas de zapatos',
    statement: 'En una oficina la moda de las tallas de zapatos es 36. ¿Cuál de las siguientes tablas de frecuencias puede representar correctamente las tallas de zapatos de esa oficina?',
    options: [
      { number: 1, letter: 'A', text: 'Talla 36: 5 personas | Talla 38: 1 persona | Talla 42: 3 personas' },
      { number: 2, letter: 'B', text: 'Talla 36: 2 personas | Talla 38: 4 personas | Talla 42: 3 personas' },
      { number: 3, letter: 'C', text: 'Talla 36: 3 personas | Talla 38: 4 personas | Talla 42: 4 personas' },
      { number: 4, letter: 'D', text: 'Talla 36: 2 personas | Talla 38: 3 personas | Talla 42: 1 persona' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Aleatorio',
    affirmation: 'Resuelve problemas que requieren el uso de medidas de tendencia central (moda).',
    evidence: 'Selecciona la distribución de frecuencias donde el valor modal tiene la mayor frecuencia absoluta.',
    standard: 'Interpreto y utilizo conceptos de media, mediana y moda.',
    justification: 'La moda es el dato con mayor frecuencia. En la tabla A, la talla 36 tiene 5 personas, superando a la talla 38 (1) y a la 42 (3), por lo que la moda es 36.',
    invalidOptionsReasoning: {
      B: 'La mayor frecuencia la tiene la talla 38 (4 personas), por lo que la moda sería 38.',
      C: 'Las tallas 38 y 42 tienen mayor frecuencia (4 personas cada una).',
      D: 'La mayor frecuencia la tiene la talla 38 (3 personas).'
    },
    socraticHints: {
      recordar: '¿Qué es la moda en estadística?',
      comprender: 'Para que la talla 36 sea la moda, ¿cómo debe ser su cantidad de personas frente a las demás tallas?',
      aplicar: 'Compara las frecuencias de la tabla A: 5 es mayor que 1 y mayor que 3.',
      analizar: '¿Por qué en las otras tres tablas la talla 36 nunca tiene la frecuencia más alta?'
    }
  },
  {
    id: 916,
    grade: 9,
    questionNumber: 16,
    title: 'Estimación lineal de llenado de tanque a las 4 p.m.',
    statement: 'En una finca se utilizó una manguera para llenar un tanque con agua. La gráfica muestra los litros en el tanque a diferentes horas:\n- 1 p.m.: 20 L | 2 p.m.: 28 L | 3 p.m.: 35 L\n- [Corte de medición]\n- 6 p.m.: 55 L | 7 p.m.: 63 L | 8 p.m.: 70 L\n\nTeniendo en cuenta la tendencia lineal de la gráfica, ¿cuál de los siguientes valores es una mejor aproximación de la cantidad de agua que había en el tanque a las 4 p.m.?',
    options: [
      { number: 1, letter: 'A', text: '70 litros.' },
      { number: 2, letter: 'B', text: '55 litros.' },
      { number: 3, letter: 'C', text: '45 litros.' },
      { number: 4, letter: 'D', text: '20 litros.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Aplica aproximaciones lineales en situaciones de variación.',
    evidence: 'Interpola valores de una función continua a partir de su recta de tendencia.',
    standard: 'Analizo en representaciones gráficas los comportamientos de cambio de funciones.',
    justification: 'A las 3 p.m. hay ~35 L y a las 6 p.m. hay ~55 L. Siguiendo una tasa constante de ~7-8 L por hora: a las 4 p.m. el volumen se ubica en 35 + 8 = ~43-45 L (entre 40 y 50 L). La mejor aproximación es 45 litros.',
    invalidOptionsReasoning: {
      A: '70 litros corresponde a las 8 p.m.',
      B: '55 litros corresponde a las 6 p.m.',
      D: '20 litros corresponde a la 1 p.m.'
    },
    socraticHints: {
      recordar: '¿Cuánto marcaba el tanque a las 3 p.m. (35 L) y a las 6 p.m. (55 L)?',
      comprender: '¿En qué rango debe estar el volumen a las 4 p.m. si el agua entra a ritmo constante?',
      aplicar: 'Traza la recta continua en tu cuaderno y evalúa en x = 4 p.m. -> Y ≈ 45 L.',
      analizar: '¿Por qué 45 L es la interpolación lineal coherente entre 35 L y 55 L?'
    }
  },
  {
    id: 917,
    grade: 9,
    questionNumber: 17,
    title: 'Tabla de frecuencias de reforestación anual',
    statement: 'Desde el 2015, el Gobierno impulsó una campaña de reforestación. La gráfica de barras muestra el área reforestada cada año:\n- 2015: 2 ha\n- 2016: 6 ha\n- 2017: 10 ha\n- 2018: 6 ha\n\n¿Cuál tabla representa toda la información de la gráfica?',
    options: [
      { number: 1, letter: 'A', text: 'Tabla con 2015: 2 ha | 2016: 6 ha | 2017: 6 ha | 2018: 10 ha' },
      { number: 2, letter: 'B', text: 'Tabla incompleta que omite el año 2016' },
      { number: 3, letter: 'C', text: 'Tabla acumulada (2 ha, 8 ha, 18 ha)' },
      { number: 4, letter: 'D', text: 'Tabla con 2015: 2 ha | 2016: 6 ha | 2017: 10 ha | 2018: 6 ha' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comunicación, modelación y representación',
    component: 'Aleatorio',
    affirmation: 'Elabora diversas representaciones de uno o varios conjuntos de datos.',
    evidence: 'Construye tablas de frecuencias idénticas a diagramas de barras dados.',
    standard: 'Interpreto analítica y críticamente información estadística proveniente de diversas fuentes.',
    justification: 'Leyendo la altura de cada barra: 2015 = 2 ha; 2016 = 6 ha; 2017 = 10 ha; 2018 = 6 ha. Esta correspondencia exacta año a año está en la tabla D.',
    invalidOptionsReasoning: {
      A: 'Intercambia los valores de los años 2017 y 2018.',
      B: 'Olimite el año 2016.',
      C: 'Suma acumulativamente las hectáreas año tras año.'
    },
    socraticHints: {
      recordar: 'Observa la barra de 2017: ¿hasta qué número sube en el eje vertical (10)?',
      comprender: 'Observa las barras de 2016 y 2018: ambas miden exactamente 6 ha.',
      aplicar: 'Compara fila por fila la tabla D con las 4 barras de la gráfica.',
      analizar: '¿Por qué la tabla D es la única que mantiene la fidelidad cronológica de los datos?'
    }
  },
  {
    id: 918,
    grade: 9,
    questionNumber: 18,
    title: 'Probabilidad de seleccionar libro por materia en biblioteca',
    statement: 'En la biblioteca de un colegio hay libros representados mediante un pictograma donde cada símbolo representa 100 libros:\n- Sociales: 2 símbolos (200 libros)\n- Matemáticas: 4 símbolos (400 libros)\n- Dibujo: 1 símbolo (100 libros)\n- Ciencias: 2 símbolos (200 libros)\nTotal = 900 libros.\n\nSi se elige un libro al azar de la biblioteca, ¿de qué materia es MÁS PROBABLE que sea?',
    options: [
      { number: 1, letter: 'A', text: 'Matemáticas.' },
      { number: 2, letter: 'B', text: 'Sociales.' },
      { number: 3, letter: 'C', text: 'Dibujo.' },
      { number: 4, letter: 'D', text: 'Ciencias.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comunicación, modelación y representación',
    component: 'Aleatorio',
    affirmation: 'Interpreta la naturaleza y posibilidad de ocurrencia de eventos aleatorios simples.',
    evidence: 'Clasifica eventos según los casos favorables calculando probabilidades simples.',
    standard: 'Interpreto analítica y críticamente información estadística.',
    justification: 'Calculando las probabilidades: Matemáticas = 400/900 = 4/9 (~44,4%), Sociales = 200/900 = 2/9 (~22,2%), Ciencias = 200/900 = 2/9, Dibujo = 100/900 = 1/9 (~11,1%). Como Matemáticas tiene la mayor cantidad de libros, es el evento con mayor probabilidad.',
    invalidOptionsReasoning: {
      B: 'Sociales solo tiene 200 libros (probabilidad menor que Matemáticas).',
      C: 'Dibujo es la materia con menor probabilidad (100 libros).',
      D: 'Ciencias tiene 200 libros.'
    },
    socraticHints: {
      recordar: '¿Cuántos libros hay de cada materia?',
      comprender: 'A mayor cantidad de elementos en una urna o biblioteca, ¿qué ocurre con la probabilidad de extraerlo?',
      aplicar: 'Compara en tu cuaderno: 400 > 200 > 100.',
      analizar: '¿Por qué tener 4 de los 9 grupos totales (4/9) hace que Matemáticas sea la opción más probable?'
    }
  },
  {
    id: 919,
    grade: 9,
    questionNumber: 19,
    title: 'Mes en que las ventas de crema superaron a las de jabón',
    statement: 'Una empresa fabrica dos productos: jabón (línea continua) y crema (línea punteada). Las ventas mensuales muestran que de enero a junio las ventas de crema estuvieron por debajo de las de jabón. Al inicio de julio las dos curvas se cruzan y a partir de ese momento la crema se mantiene por encima del jabón.\n\n¿A partir de qué mes las ventas de crema superaron a las de jabón?',
    options: [
      { number: 1, letter: 'A', text: 'Julio.' },
      { number: 2, letter: 'B', text: 'Agosto.' },
      { number: 3, letter: 'C', text: 'Noviembre.' },
      { number: 4, letter: 'D', text: 'Diciembre.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Identifica propiedades e intersecciones de gráficas de variación temporal.',
    evidence: 'Reconoce el punto de corte a partir del cual una variable supera a otra.',
    standard: 'Analizo en representaciones gráficas los comportamientos de cambio de funciones.',
    justification: 'En la gráfica, las dos curvas se cortan exactamente al inicio de Julio. Desde Julio en adelante (Jul, Ago, Sep, Oct, Nov, Dic), la curva de crema está siempre por encima de la de jabón.',
    invalidOptionsReasoning: {
      B: 'En Agosto la crema ya superaba al jabón, pero el cambio ocurrió antes (en Julio).',
      C: 'En Noviembre la diferencia es amplia, pero la superación comenzó en Julio.',
      D: 'Diciembre es el final del periodo registrado.'
    },
    socraticHints: {
      recordar: 'Ubica el punto exacto donde se cruzan las dos líneas en la gráfica.',
      comprender: '¿Cuál mes está marcado en el eje horizontal en ese punto de intersección?',
      aplicar: 'Anota en tu cuaderno: "Intersección en Julio; desde Julio Crema > Jabón".',
      analizar: '¿Por qué la frase "a partir de qué mes" solicita el momento inicial del cambio de dominancia?'
    }
  },
  {
    id: 920,
    grade: 9,
    questionNumber: 20,
    title: 'Paralelogramo con dos parejas de lados opuestos paralelos',
    statement: 'Lucía es pintora y desea dibujar un cuadrilátero en el que las dos parejas de lados opuestos sean paralelas (un paralelogramo).\n\n¿Cuál de los siguientes dibujos cumple con el requerimiento de Lucía?',
    options: [
      { number: 1, letter: 'A', text: 'Dibujo A (un trapecio con solo una pareja de lados paralelos)' },
      { number: 2, letter: 'B', text: 'Dibujo B (un trapezoide rectángulo sin lados paralelos)' },
      { number: 3, letter: 'C', text: 'Dibujo C (un paralelogramo/romboide con lados opuestos paralelos 2 a 2)' },
      { number: 4, letter: 'D', text: 'Dibujo D (un cuadrilátero irregular escaleno)' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Espacial-Métrico',
    affirmation: 'Conjetura sobre propiedades de paralelismo en figuras bidimensionales.',
    evidence: 'Identifica paralelogramos por la condición de paralelismo en sus dos pares de lados opuestos.',
    standard: 'Uso representaciones geométricas para resolver y formular problemas.',
    justification: 'Un paralelogramo es un cuadrilátero cuyos pares de lados opuestos son paralelos dos a dos. La figura C es un paralelogramo inclinado donde los lados superior/inferior son paralelos y los laterales son paralelos entre sí.',
    invalidOptionsReasoning: {
      A: 'La figura A es un trapecio (solo tiene 1 pareja de lados paralelos, los laterales no lo son).',
      B: 'La figura B tiene lados perpendiculares pero no opuestos paralelos.',
      D: 'La figura D es un cuadrilátero irregular sin lados paralelos.'
    },
    socraticHints: {
      recordar: '¿Cuántas parejas de lados paralelos exige la definición de paralelogramo (2 parejas)?',
      comprender: 'Revisa la figura A: si prolongas los lados laterales inclinados, ¿se cruzan arriba? Sí, luego no son paralelos.',
      aplicar: 'Verifica la figura C: los lados opuestos nunca se cortan si se prolongan indefinidamente.',
      analizar: '¿Por qué la figura C cumple con precisión matemática la condición de paralelismo dual?'
    }
  }
];
