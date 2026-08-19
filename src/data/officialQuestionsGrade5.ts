// Banco Oficial ICFES Evaluar para Avanzar - Grado 5° (Preguntas 1 a 20 Oficiales)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
import { Question } from '../types';

export const OFFICIAL_GRADE_5: Question[] = [
  {
    id: 501,
    grade: 5,
    questionNumber: 1,
    title: 'Probabilidad de chocolates rellenos de fresa',
    statement: 'En una bolsa hay 10 chocolates: 3 de ellos están rellenos de piña, 4 están rellenos de fresa, 2 están rellenos de coco y uno está relleno de durazno.\n\n¿Cuál es la probabilidad de sacar al azar un chocolate relleno de fresa?',
    options: [
      { number: 1, letter: 'A', text: '6/10' },
      { number: 2, letter: 'B', text: '4/10' },
      { number: 3, letter: 'C', text: '4/3' },
      { number: 4, letter: 'D', text: '4/6' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comunicación, modelación y representación',
    component: 'Aleatorio',
    affirmation: 'Interpreta la naturaleza y posibilidad de ocurrencia de eventos aleatorios simples.',
    evidence: 'Expresa grado de probabilidad de un evento usando frecuencias o razones.',
    standard: 'Conjeturo y pongo a prueba predicciones acerca de la posibilidad de ocurrencia de eventos.',
    justification: 'Hay 4 chocolates rellenos de fresa (casos favorables) de un total de 10 chocolates (casos posibles). La probabilidad es 4/10 (o 2/5 simplificado).',
    invalidOptionsReasoning: {
      A: '6/10 es la probabilidad de los chocolates de otros sabores (10 - 4 = 6).',
      C: '4/3 compara fresas con piñas, formando una razón incorrecta impropia.',
      D: '4/6 compara fresas con el resto de chocolates, omitiendo el espacio muestral total (10).'
    },
    socraticHints: {
      recordar: '¿Cuántos chocolates de fresa hay en la bolsa y cuántos chocolates hay en total?',
      comprender: '¿Cuál es la fórmula clásica de probabilidad (Regla de Laplace)? P = Casos favorables / Casos totales.',
      aplicar: 'Escribe en tu cuaderno: Casos favorables = 4, Casos totales = 10 -> P = 4/10.',
      analizar: '¿Por qué el denominador debe ser 10 y no la cantidad de los otros chocolates?'
    }
  },
  {
    id: 502,
    grade: 5,
    questionNumber: 2,
    title: 'Propiedad distributiva en festival de música',
    statement: 'A un festival de música se invitan 2 bandas nacionales y 4 internacionales, y cada una tocará 5 canciones. Para saber la cantidad total de canciones que habrá en el festival, el organizador sumó la cantidad de bandas y multiplicó el resultado por 5, así:\n(2 + 4) × 5 = 30\n\n¿De qué otra forma puede llegar el organizador al mismo resultado?',
    options: [
      { number: 1, letter: 'A', text: '(2 + 5) × (4 + 5)' },
      { number: 2, letter: 'B', text: '(2 × 4 × 5)' },
      { number: 3, letter: 'C', text: '(2 × 5) + (4 × 5)' },
      { number: 4, letter: 'D', text: '(2 + 4 + 5)' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Explica las características y propiedades de expresiones numéricas.',
    evidence: 'Establece equivalencias a partir de la propiedad distributiva de la multiplicación respecto a la suma.',
    standard: 'Construyo igualdades numéricas como representación de relaciones entre distintos datos.',
    justification: 'Por la propiedad distributiva de la multiplicación sobre la suma: (2 + 4) × 5 = (2 × 5) + (4 × 5) = 10 + 20 = 30 canciones.',
    invalidOptionsReasoning: {
      A: 'Suma 5 a cada sumando obteniendo 7 × 9 = 63.',
      B: 'Multiplica todos los factores de forma continua: 2 × 4 × 5 = 40.',
      D: 'Suma todas las cantidades: 2 + 4 + 5 = 11.'
    },
    socraticHints: {
      recordar: '¿Cuántas canciones tocan las 2 bandas nacionales juntas y cuántas las 4 internacionales?',
      comprender: 'Nacionales: 2 × 5 = 10 canciones; Internacionales: 4 × 5 = 20 canciones. ¿Cómo se suman?',
      aplicar: 'Escribe en tu cuaderno: Propiedad Distributiva: (a + b) × c = (a × c) + (b × c).',
      analizar: '¿Por qué (2 × 5) + (4 × 5) = 10 + 20 = 30 da exactamente el mismo resultado?'
    }
  },
  {
    id: 503,
    grade: 5,
    questionNumber: 3,
    title: 'Precio proporcional de pastelitos de Felipe',
    statement: 'Felipe vende 6 pastelitos por $12.000.\n\nSi cada pastelito vale lo mismo, ¿cuál sería el precio de 9 pastelitos?',
    options: [
      { number: 1, letter: 'A', text: '$18.000' },
      { number: 2, letter: 'B', text: '$24.000' },
      { number: 3, letter: 'C', text: '$27.000' },
      { number: 4, letter: 'D', text: '$72.000' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas aditivos, multiplicativos y de proporción.',
    evidence: 'Utiliza la proporcionalidad directa en contextos de relacionamiento de magnitudes.',
    standard: 'Resuelvo y formulo problemas en situaciones de proporcionalidad directa.',
    justification: 'El precio unitario de un pastelito es $12.000 ÷ 6 = $2.000. Por 9 pastelitos se paga: 9 × $2.000 = $18.000 (o mediante regla de tres: 9 × 12.000 / 6 = 18.000).',
    invalidOptionsReasoning: {
      B: 'Duplica $12.000 ($24.000) asumiendo erróneamente que 9 es el doble de 6.',
      C: 'Calcula con precio unitario equivocado de $3.000 (9 × 3.000 = 27.000).',
      D: 'Multiplica 6 × 12.000 = 72.000 sin aplicar la división previa.'
    },
    socraticHints: {
      recordar: 'Si 6 pastelitos cuestan $12.000, ¿cuánto cuesta 1 solo pastelito?',
      comprender: 'Divide en tu cuaderno: 12.000 ÷ 6 = 2.000 pesos por pastelito.',
      aplicar: 'Ahora multiplica ese valor por los 9 pastelitos: 9 × 2.000 = ?',
      analizar: '¿Por qué $18.000 representa la relación de proporcionalidad directa exacta?'
    }
  },
  {
    id: 504,
    grade: 5,
    questionNumber: 4,
    title: 'Pictograma de anotaciones de baloncesto',
    statement: 'La imagen muestra la cantidad de anotaciones que hicieron 4 estudiantes en un partido de baloncesto. La convención indica: 🏀 = Representa 2 anotaciones.\n- Laura: 6 balones\n- Leonardo: 3 balones\n- Alejandra: 5 balones\n- Felipe: 2 balones\n\n¿Cuál de las siguientes tablas representa la información de la imagen?',
    options: [
      { number: 1, letter: 'A', text: 'Tabla A (Laura 2, Leonardo 5, Alejandra 3, Felipe 6)' },
      { number: 2, letter: 'B', text: 'Tabla B (Laura 6, Leonardo 3, Alejandra 5, Felipe 2)' },
      { number: 3, letter: 'C', text: 'Tabla C (Laura 4, Leonardo 10, Alejandra 6, Felipe 12)' },
      { number: 4, letter: 'D', text: 'Tabla D (Laura 12, Leonardo 6, Alejandra 10, Felipe 4)' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Analiza datos representados de diferentes formas.',
    evidence: 'Relaciona dos representaciones de un mismo conjunto de datos: pictogramas y tablas.',
    standard: 'Represento datos usando tablas y gráficas (pictogramas y tablas).',
    justification: 'Multiplicando cada icono de balón por su valor (2 anotaciones):\n- Laura: 6 × 2 = 12 anotaciones\n- Leonardo: 3 × 2 = 6 anotaciones\n- Alejandra: 5 × 2 = 10 anotaciones\n- Felipe: 2 × 2 = 4 anotaciones. Esto coincide con la tabla D.',
    invalidOptionsReasoning: {
      A: 'Invierte el orden y toma el conteo de iconos al revés.',
      B: 'Toma únicamente la cantidad de iconos sin multiplicar por la convención (2).',
      C: 'Invierte la correspondencia de los estudiantes de derecha a izquierda.'
    },
    socraticHints: {
      recordar: '¿Cuánto vale cada símbolo de balón de baloncesto según el recuadro?',
      comprender: 'Multiplica los balones de cada alumno por 2: Laura (6×2), Leonardo (3×2), Alejandra (5×2), Felipe (2×2).',
      aplicar: 'Escribe en tu cuaderno los totales reales de anotaciones: 12, 6, 10 y 4.',
      analizar: '¿Por qué la tabla D es la única que refleja el valor total con la convención aplicada?'
    }
  },
  {
    id: 505,
    grade: 5,
    questionNumber: 5,
    title: 'Suma de dos números para obtener 9.865',
    statement: 'Laura ha obtenido como resultado 9.865 al sumar dos números.\n\n¿Cuál de las siguientes opciones corresponde a los dos números que fueron sumados?',
    options: [
      { number: 1, letter: 'A', text: '7.641 y 1.284' },
      { number: 2, letter: 'B', text: '5.837 y 2.328' },
      { number: 3, letter: 'C', text: '3.483 y 4.382' },
      { number: 4, letter: 'D', text: '1.895 y 7.970' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas aditivos usando adición en contextos escolares.',
    evidence: 'Modela y resuelve algoritmos de adición con números naturales.',
    standard: 'Resuelvo situaciones aditivas de composición y transformación.',
    justification: 'Realizando la adición paso a paso: 1.895 + 7.970 = 9.865 (5+0=5, 9+7=16 llevo 1, 1+8+9=18 llevo 1, 1+1+7=9).',
    invalidOptionsReasoning: {
      A: '7.641 + 1.284 = 8.925 (error al sumar unidades de mil).',
      B: '5.837 + 2.328 = 8.165.',
      C: '3.483 + 4.382 = 7.865.'
    },
    socraticHints: {
      recordar: '¿Cuál es la cifra de las unidades del resultado (5)?',
      comprender: 'Suma las unidades de cada opción: 1+4=5, 7+8=15, 3+2=5, 5+0=5.',
      aplicar: 'Efectúa la suma completa de 1.895 + 7.970 en tu cuaderno alineando unidades, decenas, centenas y millares.',
      analizar: '¿Por qué solo la opción D produce exactamente 9.865?'
    }
  },
  {
    id: 506,
    grade: 5,
    questionNumber: 6,
    title: 'Diagrama de barras en campeonato de patinaje',
    statement: 'En una escuela se realiza un campeonato de patinaje. De 10 carreras: Sara ganó 4, Mateo ganó 3, Natalia ganó 3 y Robín no ganó ninguna (0 carreras).\n\n¿Cuál de los siguientes diagramas de barras representa las carreras ganadas por Sara, Mateo, Natalia y Robín?',
    options: [
      { number: 1, letter: 'A', text: 'Gráfica A (Sara 10, Mateo 4, Natalia 3, Robín 3)' },
      { number: 2, letter: 'B', text: 'Gráfica B (Sara 4, Mateo 2, Natalia 2, Robín 0)' },
      { number: 3, letter: 'C', text: 'Gráfica C (Sara 14, Mateo 13, Natalia 13, Robín 10)' },
      { number: 4, letter: 'D', text: 'Gráfica D (Sara 4, Mateo 3, Natalia 3, Robín 0)' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Analiza datos representados en diferentes formas.',
    evidence: 'Relaciona la representación gráfica con una lista de datos cualitativos y cuantitativos.',
    standard: 'Represento datos usando gráficas de barras.',
    justification: 'La gráfica D muestra la barra de Sara con altura 4, Mateo con altura 3, Natalia con altura 3 y Robín sin barra (altura 0), coincidiendo con la lista.',
    invalidOptionsReasoning: {
      A: 'Asigna el total de 10 carreras a Sara y no deja a Robín en 0.',
      B: 'Pone a Mateo y Natalia con 2 carreras en vez de 3.',
      C: 'Suma 10 a cada participante de forma errónea.'
    },
    socraticHints: {
      recordar: '¿Cuántas carreras ganó Sara, cuántas Mateo, cuántas Natalia y cuántas Robín?',
      comprender: '¿Qué altura debe tener la barra de Robín si no ganó ninguna carrera?',
      aplicar: 'Dibuja en tu cuaderno las 4 barras sobre el eje: Sara (4), Mateo (3), Natalia (3), Robín (0).',
      analizar: '¿Por qué la gráfica D es la única fiel a todos los registros?'
    }
  },
  {
    id: 507,
    grade: 5,
    questionNumber: 7,
    title: 'Completar figura simétrica con ficha congruente',
    statement: 'Jorge quiere completar una figura poligonal en una cuadrícula de 1 cm × 1 cm. La parte superior faltante tiene forma de punta de flecha / triángulo cóncavo de base 4 cm y altura 3 cm.\n\n¿Qué ficha le hace falta a Jorge para completar la figura?',
    options: [
      { number: 1, letter: 'A', text: 'Ficha A (punta triangular cóncava de base 4 cm y vértice superior)' },
      { number: 2, letter: 'B', text: 'Ficha B (rombo simétrico)' },
      { number: 3, letter: 'C', text: 'Ficha C (punta cóncava invertida más achatada)' },
      { number: 4, letter: 'D', text: 'Ficha D (triángulo plano regular)' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Razonamiento y argumentación',
    component: 'Espacial-Métrico',
    affirmation: 'Comprende las condiciones de congruencia en figuras poligonales.',
    evidence: 'Determina figuras congruentes o condiciones para que se dé la congruencia en recubrimientos.',
    standard: 'Construyo y descompongo figuras y sólidos a partir de condiciones dadas.',
    justification: 'Al superponer la ficha A sobre la figura de Jorge, sus vértices, lados y ángulos coinciden punto a punto con el espacio en blanco superior (mide 4 cm de base y 3 cm de alto).',
    invalidOptionsReasoning: {
      B: 'El rombo cubre áreas exteriores no deseadas.',
      C: 'Tiene una curvatura y base de dimensiones diferentes.',
      D: 'El triángulo plano deja vacíos en los lados cóncavos.'
    },
    socraticHints: {
      recordar: 'Cuenta cuántos cuadritos mide la base del hueco que Jorge debe rellenar.',
      comprender: 'Observa la silueta: ¿tiene forma triangular con base recortada hacia arriba?',
      aplicar: 'Dibuja la silueta de la ficha A y compárala con el espacio en blanco.',
      analizar: '¿Por qué la congruencia geométrica exige misma forma y mismo tamaño exactos?'
    }
  },
  {
    id: 508,
    grade: 5,
    questionNumber: 8,
    title: 'Propiedad asociativa en el peso de tres animales',
    statement: 'En la tabla se muestra el peso de tres animales: Vaca (650 kg), Cerdo (250 kg) y Burro (150 kg).\nPara calcular el peso total, se puede hacer la suma:\n(650 + 250) + 150\nO también se puede hacer la suma:\n650 + (150 + 250)\n\n¿Cuál propiedad se cumple para que las dos formas de calcular el peso de los tres animales sean equivalentes?',
    options: [
      { number: 1, letter: 'A', text: 'Las cantidades son múltiplos de 10.' },
      { number: 2, letter: 'B', text: 'En ambas sumas el número más grande está primero.' },
      { number: 3, letter: 'C', text: 'El orden en que los números se suman no altera el resultado (Propiedad asociativa/conmutativa).' },
      { number: 4, letter: 'D', text: 'Los dos últimos dígitos de todos los números son los mismos.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Explica las propiedades de las expresiones numéricas y operaciones.',
    evidence: 'Establece en lenguaje natural la propiedad asociativa y conmutativa de la adición.',
    standard: 'Justifico regularidades y propiedades de los números, sus relaciones y operaciones.',
    justification: 'En la adición de números reales se cumple la propiedad asociativa y conmutativa: agrupar u ordenar los sumandos de formas diferentes no altera la suma total: (650+250)+150 = 900+150 = 1.050 kg; 650+(150+250) = 650+400 = 1.050 kg.',
    invalidOptionsReasoning: {
      A: 'Ser múltiplos de 10 es una cualidad numérica, no la propiedad que garantiza la igualdad de la suma.',
      B: 'El tamaño de los números no condiciona la validez de la adición.',
      D: 'La coincidencia de dígitos finales no justifica la ley matemática de la suma.'
    },
    socraticHints: {
      recordar: '¿Cuánto da (650 + 250) + 150? ¿Y cuánto da 650 + (150 + 250)?',
      comprender: '¿Cómo se llama la ley matemática que dice que agrupar los sumandos de diferente forma da el mismo resultado?',
      aplicar: 'Escribe en tu cuaderno: "Propiedad Asociativa: (a + b) + c = a + (b + c)".',
      analizar: '¿Por qué la opción C expresa en palabras cotidianas el principio fundamental de la adición?'
    }
  },
  {
    id: 509,
    grade: 5,
    questionNumber: 9,
    title: 'Razón de castillos embrujados sobre castillos vacíos',
    statement: 'En un reino hay 15 castillos vacíos, de los cuales 3 están embrujados.\n\n¿Cuál fracción representa la razón entre la cantidad de castillos embrujados y el total de castillos vacíos?',
    options: [
      { number: 1, letter: 'A', text: '15/3' },
      { number: 2, letter: 'B', text: '12/3' },
      { number: 3, letter: 'C', text: '3/12' },
      { number: 4, letter: 'D', text: '3/15' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Reconoce las propiedades de las fracciones y relaciones parte-todo.',
    evidence: 'Representa razones numéricas en contextos aplicados.',
    standard: 'Interpreto las fracciones en diferentes contextos: relación parte-todo y razones.',
    justification: 'La razón solicitada compara: (Castillos embrujados) / (Total de castillos vacíos) = 3 / 15 (que simplificado equivale a 1/5).',
    invalidOptionsReasoning: {
      A: '15/3 invierte los términos (total sobre embrujados).',
      B: '12/3 compara castillos no embrujados con embrujados.',
      C: '3/12 compara embrujados (3) contra no embrujados (15 - 3 = 12), omitiendo el total.'
    },
    socraticHints: {
      recordar: '¿Qué cantidad va en el numerador (arriba) y cuál en el denominador (abajo) según la pregunta?',
      comprender: 'Preguntan por: (embrujados) / (total vacíos). Identifica cada número.',
      aplicar: 'Escribe en tu cuaderno: Embrujados = 3, Total = 15 -> Fracción = 3/15.',
      analizar: '¿Por qué 3/15 representa que 3 de cada 15 castillos están embrujados?'
    }
  },
  {
    id: 510,
    grade: 5,
    questionNumber: 10,
    title: 'Composición de un bloque rectangular con fichas',
    statement: 'Usando fichas como la que se muestra en la figura 1 (dimensiones: 4 cm de largo, 2 cm de alto, 3 cm de profundidad), Andrea arma la figura 2 (un bloque de 16 cm de largo, 2 cm de alto, 3 cm de profundidad).\n\n¿Cuántas fichas necesita Andrea para armar la figura 2?',
    options: [
      { number: 1, letter: 'A', text: '16' },
      { number: 2, letter: 'B', text: '12' },
      { number: 3, letter: 'C', text: '4' },
      { number: 4, letter: 'D', text: '2' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Resuelve problemas de medición y volumen de diversos objetos por descomposición.',
    evidence: 'Compone y descompone sólidos regulares de acuerdo con sus medidas y forma.',
    standard: 'Diferencio y ordeno longitudes y volúmenes de cuerpos sólidos.',
    justification: 'El alto (2 cm) y la profundidad (3 cm) son exactamente iguales en ambas figuras. Por tanto, solo cambia la longitud a lo largo: 16 cm ÷ 4 cm = 4 fichas alineadas una tras otra.',
    invalidOptionsReasoning: {
      A: '16 toma la longitud en centímetros como si fuera el número de fichas.',
      B: 'Calcula la resta 16 - 4 = 12 en vez de dividir.',
      D: 'Divide 4 / 2 = 2 de forma arbitraria.'
    },
    socraticHints: {
      recordar: '¿Cuánto mide el largo de la ficha pequeña y cuánto el largo del bloque grande?',
      comprender: '¿Cuántas veces cabe una pieza de 4 cm en una longitud de 16 cm?',
      aplicar: 'Divide en tu cuaderno: 16 cm ÷ 4 cm = 4 fichas.',
      analizar: '¿Por qué si colocas 4 fichas de 4 cm de largo juntas obtienes exactamente 16 cm?'
    }
  },
  {
    id: 511,
    grade: 5,
    questionNumber: 11,
    title: 'Menor posibilidad de sacar bola negra y pagar penitencia',
    statement: 'Para un juego en la clase de matemáticas, hay 4 bolsas con bolas de varios colores. Cada niño debe meter la mano en alguna de las bolsas y si saca una bola negra debe pagar una penitencia:\n- Bolsa 1: 10 bolas negras de 10 bolas en total (10/10 = 1 = 100%)\n- Bolsa 2: 10 bolas negras de 11 bolas en total (10/11 ≈ 91%)\n- Bolsa 3: 1 bola negra de 10 bolas en total (1/10 = 0.1 = 10%)\n- Bolsa 4: 1 bola negra de 2 bolas en total (1/2 = 0.5 = 50%)\n\n¿En cuál de las 4 bolsas un niño tiene MENOS POSIBILIDAD de pagar una penitencia?',
    options: [
      { number: 1, letter: 'A', text: 'En la bolsa 1.' },
      { number: 2, letter: 'B', text: 'En la bolsa 2.' },
      { number: 3, letter: 'C', text: 'En la bolsa 3.' },
      { number: 4, letter: 'D', text: 'En la bolsa 4.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Explica la naturaleza de eventos posibles e identifica la menor probabilidad.',
    evidence: 'Toma decisiones a partir de la comparación del nivel de posibilidad de eventos simples.',
    standard: 'Predigo si la posibilidad de ocurrencia de un evento es mayor o menor que la de otro.',
    justification: 'Calculando la probabilidad de bola negra en cada bolsa:\n- Bolsa 1: 10/10 = 1 (100%)\n- Bolsa 2: 10/11 = 0,909 (90,9%)\n- Bolsa 3: 1/10 = 0,10 (10%)\n- Bolsa 4: 1/2 = 0,50 (50%)\nLa menor probabilidad es 1/10 (10%), en la Bolsa 3.',
    invalidOptionsReasoning: {
      A: 'En la Bolsa 1 es un evento seguro (100% penitencia).',
      B: 'En la Bolsa 2 la posibilidad es altísima (10 de 11).',
      D: 'En la Bolsa 4 hay 50% de probabilidad, mayor que el 10% de la Bolsa 3.'
    },
    socraticHints: {
      recordar: 'Escribe la fracción de bolas negras sobre el total para cada una de las 4 bolsas.',
      comprender: 'Compara las fracciones: ¿cuál es más pequeña, 1/10 (0.1) o 1/2 (0.5)?',
      aplicar: 'Anota en tu cuaderno: Bolsa 3 = 1 bola negra entre 10 = 10% (Mínima probabilidad).',
      analizar: '¿Por qué tener 9 bolas que NO son negras hace que la Bolsa 3 sea la más segura para no pagar penitencia?'
    }
  },
  {
    id: 512,
    grade: 5,
    questionNumber: 12,
    title: 'Construcción de bloque cúbico con fichas de 4 cubitos',
    statement: 'Ramón quiere construir un bloque que tiene 48 cubos unitarios en total (dimensiones 4 × 4 × 3). Dispone de fichas compuestas por 4 cubitos (bloque de 2 × 2 cubos).\n\n¿Cuántas fichas como esta necesita Ramón para construir el bloque completo?',
    options: [
      { number: 1, letter: 'A', text: '24' },
      { number: 2, letter: 'B', text: '18' },
      { number: 3, letter: 'C', text: '12' },
      { number: 4, letter: 'D', text: '6' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Resuelve problemas de medición de volumen usando recubrimientos no estandarizados.',
    evidence: 'Compone y descompone sólidos regulares a partir del conteo de unidades.',
    standard: 'Diferencio y ordeno volúmenes de cuerpos sólidos.',
    justification: 'El bloque total tiene 48 cubitos. Cada ficha está formada por 2 × 2 = 4 cubitos. Por tanto, se necesitan: 48 ÷ 4 = 12 fichas.',
    invalidOptionsReasoning: {
      A: 'Divide 48 ÷ 2 = 24 asumiendo que cada ficha tiene solo 2 cubos.',
      B: 'Ubica fichas de forma incompleta sobreponiendo algunas.',
      D: '6 fichas solo cubrirían la mitad del volumen (6 × 4 = 24 cubitos).'
    },
    socraticHints: {
      recordar: '¿Cuántos cubitos unitarios componen cada ficha (2 × 2)?',
      comprender: '¿Cuántos cubitos tiene el bloque grande que Ramón quiere armar (48)?',
      aplicar: 'Divide en tu cuaderno: 48 ÷ 4 = 12 fichas.',
      analizar: '¿Por qué 12 fichas de 4 cubitos cada una completan los 48 cubitos exactos?'
    }
  },
  {
    id: 513,
    grade: 5,
    questionNumber: 13,
    title: 'Porcentaje de la cuarta parte de un campo de maíz',
    statement: 'Si la cuarta parte (1/4) de un campo de cultivo se usa para la siembra de maíz, ¿qué porcentaje del campo de cultivo se usa en la siembra de maíz?',
    options: [
      { number: 1, letter: 'A', text: '25 %' },
      { number: 2, letter: 'B', text: '40 %' },
      { number: 3, letter: 'C', text: '50 %' },
      { number: 4, letter: 'D', text: '75 %' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Representa fracciones y decimales en representación porcentual.',
    evidence: 'Resuelve una situación de proporcionalidad parte-todo en forma de porcentaje.',
    standard: 'Interpreto las fracciones y porcentajes en diferentes contextos.',
    justification: 'El campo entero representa el 100%. La cuarta parte equivale a dividir 100% entre 4: 1/4 × 100% = 25%.',
    invalidOptionsReasoning: {
      B: 'Relaciona erróneamente el número 4 del denominador con el 40%.',
      C: '50% corresponde a la mitad (1/2), no a la cuarta parte.',
      D: '75% corresponde a tres cuartas partes (3/4).'
    },
    socraticHints: {
      recordar: '¿A qué porcentaje equivale la unidad completa (todo el terreno)?',
      comprender: '¿Qué operación debes hacerle al 100% para hallar su cuarta parte (dividir entre 4)?',
      aplicar: 'Calcula en tu cuaderno: 100 ÷ 4 = 25%.',
      analizar: '¿Por qué 25% + 25% + 25% + 25% = 100% completa el círculo entero?'
    }
  },
  {
    id: 514,
    grade: 5,
    questionNumber: 14,
    title: 'Precio de 5 botellas de jugo proporcionales',
    statement: 'Dos botellas de jugo cuestan $1.400 y cada botella cuesta lo mismo.\n\n¿Cuánto cuestan 5 botellas de jugo?',
    options: [
      { number: 1, letter: 'A', text: '$3.500' },
      { number: 2, letter: 'B', text: '$3.000' },
      { number: 3, letter: 'C', text: '$1.500' },
      { number: 4, letter: 'D', text: '$1.400' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas aditivos, multiplicativos y de proporción.',
    evidence: 'Determina los valores asociados a una situación de proporcionalidad directa.',
    standard: 'Resuelvo y formulo problemas en situaciones de proporcionalidad directa.',
    justification: 'Si 2 botellas valen $1.400, cada botella cuesta $1.400 ÷ 2 = $700. Por tanto, 5 botellas cuestan: 5 × $700 = $3.500 pesos.',
    invalidOptionsReasoning: {
      B: 'Multiplica 1.400 × 5 cometiendo un error en el algoritmo.',
      C: 'Suma $1.400 + $100 de forma errónea.',
      D: 'Repite el precio de 2 botellas sin aplicar el cambio de cantidad.'
    },
    socraticHints: {
      recordar: '¿Cuánto cuesta 1 sola botella de jugo si 2 valen $1.400?',
      comprender: 'Divide en tu cuaderno: 1.400 ÷ 2 = 700 pesos.',
      aplicar: 'Ahora multiplica ese precio unitario por 5 botellas: 5 × 700 = ?',
      analizar: '¿Por qué $3.500 es el valor exacto para 5 botellas de jugo?'
    }
  },
  {
    id: 515,
    grade: 5,
    questionNumber: 15,
    title: 'Valor posicional del número "Tres mil treinta y tres"',
    statement: 'Clara observó la siguiente cifra escrita en letras en un documento de su mamá:\n"LA SUMA DE Tres mil treinta y tres"\n\n¿Cuál de los siguientes números representa esta cifra?',
    options: [
      { number: 1, letter: 'A', text: '300.033' },
      { number: 2, letter: 'B', text: '3.303' },
      { number: 3, letter: 'C', text: '3.033' },
      { number: 4, letter: 'D', text: '31.033' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Reconoce las propiedades de los números naturales en el sistema decimal.',
    evidence: 'Traduce del lenguaje natural al numérico teniendo en cuenta el valor posicional.',
    standard: 'Describo, comparo y cuantifico situaciones con números.',
    justification: 'Descomponiendo según el valor posicional:\n- Unidades de mil: 3 (3.000)\n- Centenas: 0 (0)\n- Decenas: 3 (30)\n- Unidades: 3 (3)\nEl número resultante es 3.033.',
    invalidOptionsReasoning: {
      A: 'Escribe 300.033 (trescientos mil treinta y tres).',
      B: 'Escribe 3.303 (tres mil trescientos tres).',
      D: 'Escribe 31.033 (treinta y un mil treinta y tres).'
    },
    socraticHints: {
      recordar: '¿Cuántas unidades de mil, centenas, decenas y unidades tiene "Tres mil treinta y tres"?',
      comprender: 'Como no se mencionan centenas ("trescientos"), ¿qué dígito debe ir en la casilla de las centenas?',
      aplicar: 'Escribe la tabla de posición en tu cuaderno: UM (3), C (0), D (3), U (3) -> 3.033.',
      analizar: '¿Por qué el 0 en las centenas es indispensable para mantener el valor de las unidades de mil?'
    }
  },
  {
    id: 516,
    grade: 5,
    questionNumber: 16,
    title: 'Fruta más probable de extraer en la canasta de Martina',
    statement: 'Martina tiene varias frutas en una canasta y saca una de ellas sin mirar:\n- 10 manzanas\n- 4 peras\n- 3 duraznos\n- 2 mandarinas\n(Total = 19 frutas)\n\n¿Cuál fruta es MÁS PROBABLE que tome Martina?',
    options: [
      { number: 1, letter: 'A', text: 'Una pera.' },
      { number: 2, letter: 'B', text: 'Un durazno.' },
      { number: 3, letter: 'C', text: 'Una manzana.' },
      { number: 4, letter: 'D', text: 'Una mandarina.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Explica la naturaleza de los eventos posibles y compara casos favorables.',
    evidence: 'Determina el evento con mayor probabilidad a partir de frecuencias.',
    standard: 'Predigo si la posibilidad de ocurrencia de un evento es mayor que la de otro.',
    justification: 'La mayor cantidad de frutas corresponde a la manzana (10 unidades de 19, P = 10/19 ≈ 52.6%). Por tener la mayor frecuencia, es la más probable.',
    invalidOptionsReasoning: {
      A: 'Peras solo hay 4 (4/19).',
      B: 'Duraznos solo hay 3 (3/19).',
      D: 'Mandarinas solo hay 2 (2/19).'
    },
    socraticHints: {
      recordar: 'Compara las cantidades de cada fruta: Manzanas (10), Peras (4), Duraznos (3), Mandarinas (2).',
      comprender: '¿Cuál número es el mayor de todos?',
      aplicar: 'Anota en tu cuaderno: Manzanas = 10/19 (Mayor probabilidad).',
      analizar: '¿Por qué más de la mitad de las frutas en la canasta son manzanas?'
    }
  },
  {
    id: 517,
    grade: 5,
    questionNumber: 17,
    title: 'Costo total de 5 helados en la tienda',
    statement: 'Jimena observa la siguiente tabla en la tienda:\n- 1 helado = $600\n- 2 helados = $1.200\n- 3 helados = $1.800\n\nSi ella quiere comprar 5 helados, ¿cuánto dinero en total necesita?',
    options: [
      { number: 1, letter: 'A', text: '$3.000' },
      { number: 2, letter: 'B', text: '$2.400' },
      { number: 3, letter: 'C', text: '$600' },
      { number: 4, letter: 'D', text: '$500' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Modela y resuelve situaciones multiplicativas y de proporción.',
    evidence: 'Aplica el producto del precio unitario por la cantidad deseada.',
    standard: 'Resuelvo y formulo problemas en situaciones de proporcionalidad directa.',
    justification: 'El valor de un helado es $600. Por 5 helados necesita: 5 × $600 = $3.000 pesos.',
    invalidOptionsReasoning: {
      B: 'Suma el primero y el último de la tabla (600 + 1.800 = 2.400).',
      C: '$600 es solo el precio de 1 helado.',
      D: 'Relaciona la cantidad 5 con $500.'
    },
    socraticHints: {
      recordar: '¿Cuánto cuesta un solo helado según la primera fila de la tabla?',
      comprender: 'Si cada helado cuesta $600, ¿qué operación realizas para comprar 5?',
      aplicar: 'Multiplica en tu cuaderno: 5 × 600 = 3.000 pesos.',
      analizar: '¿Por qué la tabla va sumando $600 en cada helado adicional?'
    }
  },
  {
    id: 518,
    grade: 5,
    questionNumber: 18,
    title: 'Perímetro de la vista frontal de la casa de muñecas',
    statement: 'Jacinta compró una casa de muñecas de la que vio la foto del frente:\n- Base inferior del suelo: 20 cm\n- Dos paredes laterales: 12 cm cada una\n- Dos caídas del techo: 14 cm cada una\n\n¿Cuál es el perímetro de la vista frontal de la casa de Jacinta?',
    options: [
      { number: 1, letter: 'A', text: '26 cm.' },
      { number: 2, letter: 'B', text: '46 cm.' },
      { number: 3, letter: 'C', text: '52 cm.' },
      { number: 4, letter: 'D', text: '72 cm.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Resuelve problemas de medición de perímetro usando patrones estándar.',
    evidence: 'Calcula perímetros de figuras poligonales sumando todos sus lados exteriores.',
    standard: 'Diferencio y ordeno longitudes y distancias.',
    justification: 'El perímetro es la suma de todos los lados del contorno exterior: 20 cm (base) + 12 cm (pared izq) + 12 cm (pared der) + 14 cm (techo izq) + 14 cm (techo der) = 72 cm.',
    invalidOptionsReasoning: {
      A: 'Suma solo una pared y un techo (14 + 12 = 26 cm).',
      B: 'Suma una pared, un techo y la base (14 + 12 + 20 = 46 cm).',
      C: 'Omite sumar la base del suelo (14 + 14 + 12 + 12 = 52 cm).'
    },
    socraticHints: {
      recordar: '¿Qué es el perímetro de una figura geométrica plana?',
      comprender: 'Dibuja la silueta de la casa en tu cuaderno y anota las 5 medidas de su borde exterior.',
      aplicar: 'Suma: 20 + 12 + 12 + 14 + 14 = 72 cm.',
      analizar: '¿Por qué el perímetro debe incluir obligatoriamente el suelo de la casa?'
    }
  },
  {
    id: 519,
    grade: 5,
    questionNumber: 19,
    title: 'Arreglo rectangular y adición repetida 5 × 3',
    statement: 'Para indicar la cantidad de balones que hay en la figura organizada en 3 filas de 5 balones cada una, se utilizó la expresión 5 × 3.\n\n¿Cuál de las siguientes es OTRA forma correcta de indicar la cantidad de balones que hay?',
    options: [
      { number: 1, letter: 'A', text: '5 + 5 + 5 + 5 + 5' },
      { number: 2, letter: 'B', text: '5 + 5 + 5' },
      { number: 3, letter: 'C', text: '5 + 5 + 5 + 3 + 3 + 3 + 3 + 3' },
      { number: 4, letter: 'D', text: '3 + 3 + 3' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Descubre regularidades sobre equivalencias entre situaciones aditivas y multiplicativas.',
    evidence: 'Relaciona diferentes formas de describir arreglos rectangulares (adición repetida).',
    standard: 'Construyo igualdades numéricas como representación de relaciones.',
    justification: 'La expresión 5 × 3 representa "3 grupos de 5" (o 3 filas de 5 balones), lo que equivale exactamente a sumar 5 tres veces consigo mismo: 5 + 5 + 5 = 15 balones.',
    invalidOptionsReasoning: {
      A: 'Suma 5 cinco veces (5 × 5 = 25).',
      C: 'Suma 5×3 + 3×5 dando 30 balones.',
      D: 'Suma 3 tres veces (3 × 3 = 9).'
    },
    socraticHints: {
      recordar: '¿Cuántas filas de balones hay y cuántos balones hay en cada fila?',
      comprender: '¿Cómo expresas "3 veces el número 5" como una suma repetida?',
      aplicar: 'Escribe en tu cuaderno: 5 × 3 = 5 + 5 + 5 = 15.',
      analizar: '¿Por qué la adición repetida de sumandos iguales es el fundamento de la multiplicación?'
    }
  },
  {
    id: 520,
    grade: 5,
    questionNumber: 20,
    title: 'Figura congruente en la cuadrícula',
    statement: 'Observa la figura poligonal que Federico pintó en su cuaderno (figura simétrica de 16 lados en forma de cruz/torre sobre cuadrícula).\n\n¿Cuál de las siguientes figuras es CONGRUENTE con la que pintó Federico?',
    options: [
      { number: 1, letter: 'A', text: 'Figura A (deformada en el brazo derecho)' },
      { number: 2, letter: 'B', text: 'Figura B (con proporciones ensanchadas)' },
      { number: 3, letter: 'C', text: 'Figura C (misma figura rotada 90° con 16 lados y dimensiones idénticas)' },
      { number: 4, letter: 'D', text: 'Figura D (con base invertida asimétrica)' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Espacial-Métrico',
    affirmation: 'Comprende las condiciones de congruencia en figuras poligonales.',
    evidence: 'Reconoce la forma y medidas de una figura congruente bajo rotación en el plano.',
    standard: 'Identifico y justifico relaciones de congruencia y semejanza entre figuras.',
    justification: 'La figura C tiene exactamente los mismos 16 lados, longitudes de aristas y ángulos internos que la figura de Federico, encontrándose simplemente en una rotación en el plano. En geometría, la rotación conserva la congruencia.',
    invalidOptionsReasoning: {
      A: 'Modifica la longitud de los brazos horizontales.',
      B: 'Altera el ancho de la columna central.',
      D: 'Presenta asimetría en la base.'
    },
    socraticHints: {
      recordar: '¿Qué significa que dos figuras sean congruentes en geometría?',
      comprender: '¿Cambia el tamaño o la forma de una figura cuando se rota en el plano?',
      aplicar: 'Cuenta las unidades de cada lado de la figura de Federico y compáralas con la opción C.',
      analizar: '¿Por qué la opción C es exactamente idéntica en forma y tamaño, solo con diferente orientación?'
    }
  }
];
