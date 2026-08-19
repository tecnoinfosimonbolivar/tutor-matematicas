// Banco Oficial ICFES Evaluar para Avanzar - Grado 7° (Preguntas 1 a 20 Oficiales)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
import { Question } from '../types';

export const OFFICIAL_GRADE_7: Question[] = [
  {
    id: 701,
    grade: 7,
    questionNumber: 1,
    title: 'Consumo acumulado de agua en recibo',
    statement: 'Un señor arrienda una casa el 1 de septiembre. El consumo total de enero a noviembre es de 200 m³. En la gráfica se observan los últimos consumos: Agosto (5 m³), Septiembre (17 m³), Octubre (19 m³), Noviembre (18 m³).\n\n¿Cuál fue el consumo de agua en el año, hasta el 1 de septiembre?',
    options: [
      { number: 1, letter: 'A', text: '141 m³.' },
      { number: 2, letter: 'B', text: '146 m³.' },
      { number: 3, letter: 'C', text: '182 m³.' },
      { number: 4, letter: 'D', text: '195 m³.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Aleatorio',
    affirmation: 'Resuelve problemas que requieran el uso de datos presentados en diagramas de barras.',
    evidence: 'Extrae información de diagramas y realiza operaciones aritméticas sobre los datos.',
    standard: 'Resuelvo y formulo problemas a partir de un conjunto de datos presentados en diagramas de barras.',
    justification: 'Hasta el 1 de septiembre no han transcurrido septiembre (17 m³), octubre (19 m³) ni noviembre (18 m³). Restando estos 3 meses del total de 200 m³: 200 - 17 - 19 - 18 = 200 - 54 = 146 m³.',
    invalidOptionsReasoning: {
      A: 'Resta también el mes de agosto (200 - 5 - 17 - 19 - 18 = 141 m³), pero agosto sí ocurrió antes del 1 de septiembre.',
      C: 'Solo resta el mes de noviembre (200 - 18 = 182 m³).',
      D: 'Solo resta el mes de agosto (200 - 5 = 195 m³).'
    },
    socraticHints: {
      recordar: '¿Cuál es el consumo total registrado en el recibo de enero a noviembre?',
      comprender: '¿Cuáles meses ocurrieron DESPUÉS del 1 de septiembre?',
      aplicar: 'Suma los consumos de septiembre (17), octubre (19) y noviembre (18), y réstalos de 200.',
      analizar: '¿Por qué el consumo de agosto (5 m³) sí debe formar parte del acumulado previo a septiembre?'
    }
  },
  {
    id: 702,
    grade: 7,
    questionNumber: 2,
    title: 'Total de partidos a partir del 50% de victorias',
    statement: 'Martín es un jugador de voleibol que ganó el 50 % de los juegos en los que participó. Si en esta temporada Martín ganó 20 juegos, ¿en cuántos juegos participó él?',
    options: [
      { number: 1, letter: 'A', text: '10 juegos.' },
      { number: 2, letter: 'B', text: '25 juegos.' },
      { number: 3, letter: 'C', text: '30 juegos.' },
      { number: 4, letter: 'D', text: '40 juegos.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas de proporcionalidad directa en contextos aplicados.',
    evidence: 'Calcula valores totales a partir de un porcentaje conocido.',
    standard: 'Resuelvo y formulo problemas en contextos de medidas relativas y variaciones.',
    justification: 'Si el 50% (la mitad) equivale a 20 juegos, el 100% (total de juegos) se calcula mediante: Total = 20 × (100 / 50) = 40 juegos.',
    invalidOptionsReasoning: {
      A: 'Calcula el 50% de 20 (10 juegos).',
      B: 'Suma 20 + 5 = 25.',
      C: 'Resta 50 - 20 = 30.'
    },
    socraticHints: {
      recordar: '¿A qué fracción corresponde el 50% de cualquier cantidad?',
      comprender: 'Si 20 partidos es exactamente la mitad, ¿cuánto es el doble de 20?',
      aplicar: 'Plantea la ecuación: 0.50 × X = 20 -> X = 20 / 0.5 = 40.',
      analizar: '¿Por qué 40 juegos verifica que 20 de ellos corresponden al 50%?'
    }
  },
  {
    id: 703,
    grade: 7,
    questionNumber: 3,
    title: 'Nota mínima para alcanzar el promedio deseado',
    statement: 'Carlos obtuvo las siguientes notas en sus evaluaciones: Nota 1 (4,4), Nota 2 (2,4), Nota 3 (3,5) y le falta la Nota 4. Necesita que el promedio de sus 4 notas sea como mínimo 3,5.\n\n¿Cuál es la mínima calificación que debe obtener en la nota 4?',
    options: [
      { number: 1, letter: 'A', text: '4,3' },
      { number: 2, letter: 'B', text: '4,1' },
      { number: 3, letter: 'C', text: '3,7' },
      { number: 4, letter: 'D', text: '3,4' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Aleatorio',
    affirmation: 'Usa el promedio para interpretar y solucionar situaciones cuantitativas.',
    evidence: 'Aplica las propiedades de la media aritmética para despejar un dato faltante.',
    standard: 'Uso medidas de tendencia central para interpretar comportamiento de datos.',
    justification: 'Para que el promedio sea 3,5 en 4 notas, la suma total debe ser 4 × 3,5 = 14,0. Sumando las 3 primeras: 4,4 + 2,4 + 3,5 = 10,3. Por tanto: Nota 4 = 14,0 - 10,3 = 3,7.',
    invalidOptionsReasoning: {
      A: 'Promedia con estimación visual hacia 4,3.',
      B: 'Calcula con suma total de 14,4.',
      D: 'Calcula el promedio simple de las tres primeras notas (10,3 / 3 ≈ 3,43).'
    },
    socraticHints: {
      recordar: '¿Cuánto debe sumar el total de las 4 notas para que al dividir entre 4 dé 3,5?',
      comprender: 'Calcula: 4 × 3,5 = 14,0 puntos necesarios en total.',
      aplicar: 'Suma las 3 notas que ya tiene (4,4 + 2,4 + 3,5 = 10,3) y réstalas de 14,0.',
      analizar: '¿Por qué una nota de 3,7 compensa exactamente las notas anteriores para promediar 3,5?'
    }
  },
  {
    id: 704,
    grade: 7,
    questionNumber: 4,
    title: 'Distancia faltante en carrera de ciclismo de 150 km',
    statement: 'Álvaro participa en una carrera de ciclismo de 150 km. Cuando le falta por recorrer 2/5 del total del trayecto, su bicicleta se daña.\n\n¿Cuántos kilómetros le faltaron por recorrer a Álvaro para terminar la carrera?',
    options: [
      { number: 1, letter: 'A', text: '30 km.' },
      { number: 2, letter: 'B', text: '60 km.' },
      { number: 3, letter: 'C', text: '90 km.' },
      { number: 4, letter: 'D', text: '149 km.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Aplica la fracción como operador multiplicativo sobre una cantidad.',
    evidence: 'Calcula valores asociados a proporcionalidad en contextos de medida.',
    standard: 'Utilizo números racionales para resolver problemas en contextos de medida.',
    justification: 'Calculando los 2/5 de 150 km: (150 ÷ 5) × 2 = 30 × 2 = 60 km faltantes.',
    invalidOptionsReasoning: {
      A: '30 km es solo 1/5 del recorrido (150 ÷ 5).',
      C: '90 km es la distancia que SÍ alcanzó a recorrer (3/5 de 150 = 90 km).',
      D: 'Resta 150 - 1 = 149.'
    },
    socraticHints: {
      recordar: '¿Cuánto es la quinta parte (1/5) de 150 km?',
      comprender: 'Si 1/5 son 30 km, ¿cuánto son dos quintas partes (2/5)?',
      aplicar: 'Calcula en tu cuaderno: 150 × (2/5) = 300 / 5 = 60 km.',
      analizar: '¿Por qué 60 km faltantes y 90 km recorridos completan los 150 km totales?'
    }
  },
  {
    id: 705,
    grade: 7,
    questionNumber: 5,
    title: 'Diagrama de barras de medallas olímpicas',
    statement: 'La tabla muestra las medallas de Londres 2012:\n- Australia: 7 oro, 12 bronce\n- Brasil: 3 oro, 9 bronce\n- Jamaica: 4 oro, 4 bronce\n\n¿Cuál de los siguientes diagramas representa la cantidad de medallas de ORO y BRONCE conseguidas por Australia, Brasil y Jamaica?',
    options: [
      { number: 1, letter: 'A', text: 'Diagrama A (Australia 7 oro y 16 bronce)' },
      { number: 2, letter: 'B', text: 'Diagrama B (Jamaica 1 oro y 12 bronce)' },
      { number: 3, letter: 'C', text: 'Diagrama C (Australia 7 oro y 16 plata)' },
      { number: 4, letter: 'D', text: 'Diagrama D (Australia 7 oro/12 bronce, Brasil 3 oro/9 bronce, Jamaica 4 oro/4 bronce)' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comunicación, modelación y representación',
    component: 'Aleatorio',
    affirmation: 'Reconoce información relevante en tablas y la asocia a diagramas de barras dobles.',
    evidence: 'Compara pares de categorías (Oro y Bronce) para cada país.',
    standard: 'Interpreto y comparo representaciones gráficas de datos.',
    justification: 'El diagrama D muestra fielmente las dos barras por país: Australia (azul=7, rayado=12), Brasil (azul=3, rayado=9) y Jamaica (azul=4, rayado=4).',
    invalidOptionsReasoning: {
      A: 'Usa las medallas de plata de Australia (16) en vez de bronce (12).',
      B: 'Usa datos de Canadá (1 y 12) etiquetándolos como Jamaica.',
      C: 'Grafica medallas de plata en lugar de bronce.'
    },
    socraticHints: {
      recordar: 'Busca en la tabla las columnas de "Medallas de oro" y "Medallas de bronce".',
      comprender: 'Anota los pares: Australia (7, 12), Brasil (3, 9), Jamaica (4, 4).',
      aplicar: 'Verifica la altura de las barras azul y rayada en el diagrama D.',
      analizar: '¿Por qué el diagrama D es el único que descarta la columna de plata?'
    }
  },
  {
    id: 706,
    grade: 7,
    questionNumber: 6,
    title: 'Patrón de razón en figuras con fichas negras y blancas',
    statement: 'Cada figura se obtiene agregando 2 fichas negras y 3 blancas a la anterior:\n- Figura 1: 2/3 (2 negras, 3 blancas)\n- Figura 2: 4/6 (4 negras, 6 blancas)\n- Figura 3: 6/9 (6 negras, 9 blancas)\n\n¿Cuál es la razón entre fichas negras y blancas de la figura 4?',
    options: [
      { number: 1, letter: 'A', text: '12/27' },
      { number: 2, letter: 'B', text: '11/15' },
      { number: 3, letter: 'C', text: '9/13' },
      { number: 4, letter: 'D', text: '8/12' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Determina patrones y propiedades de secuencias numéricas y fracciones equivalentes.',
    evidence: 'Descifra la progresión aritmética en numerador (+2) y denominador (+3).',
    standard: 'Describo y represento situaciones de variación relacionando tablas y expresiones.',
    justification: 'Para la figura 4: fichas negras = 6 + 2 = 8; fichas blancas = 9 + 3 = 12. La razón es 8/12 (fracción equivalente a 2/3).',
    invalidOptionsReasoning: {
      A: 'Duplica numerador y triplica denominador de forma errónea.',
      B: 'Suma 5 al numerador y suma denominadores anteriores.',
      C: 'Invierte las razones de incremento.'
    },
    socraticHints: {
      recordar: '¿Cuánto aumenta el numerador en cada paso? ¿Y el denominador?',
      comprender: 'Numerador: 2, 4, 6... -> siguiente = 6 + 2 = 8. Denominador: 3, 6, 9... -> siguiente = 9 + 3 = 12.',
      aplicar: 'Escribe en tu cuaderno la fracción resultante: 8/12.',
      analizar: '¿Por qué todas las razones (2/3, 4/6, 6/9, 8/12) son fracciones equivalentes?'
    }
  },
  {
    id: 707,
    grade: 7,
    questionNumber: 7,
    title: 'Consolidado de inasistencias por grado en tres meses',
    statement: 'El coordinador registra inasistencias en Febrero, Marzo y Abril:\n- Quinto: 2 en Feb, 1 en Mar, 1 en Abr (Total = 2+1+1 = 4)\n- Sexto: 3 en Feb, 2 en Mar, 3 en Abr (Total = 3+2+3 = 8)\n- Séptimo: 2 en Feb, 2 en Mar, 2 en Abr (Total = 2+2+2 = 6)\n\n¿Cuál tabla representa el total de inasistencias por grado durante los tres meses?',
    options: [
      { number: 1, letter: 'A', text: 'Tabla A (Quinto: 4, Sexto: 8, Séptimo: 6)' },
      { number: 2, letter: 'B', text: 'Tabla B (Quinto: 7, Sexto: 5, Séptimo: 6)' },
      { number: 3, letter: 'C', text: 'Tabla C (Quinto: 6, Sexto: 6, Séptimo: 6)' },
      { number: 4, letter: 'D', text: 'Tabla D (Quinto: 3, Sexto: 5, Séptimo: 4)' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comunicación, modelación y representación',
    component: 'Aleatorio',
    affirmation: 'Extrae y construye tablas de frecuencias agregadas a partir de registros individuales.',
    evidence: 'Agrupa datos cualitativos sumando ocurrencias por categorías.',
    standard: 'Reconozco la relación entre un conjunto de datos y su representación.',
    justification: 'Sumando las inasistencias de cada grado a lo largo de los 3 meses: Quinto = 4 inasistencias, Sexto = 8 inasistencias, Séptimo = 6 inasistencias (Tabla A).',
    invalidOptionsReasoning: {
      B: 'Totaliza inasistencias por mes en lugar de por grado.',
      C: 'Promedia arbitrariamente a 6 todas las filas.',
      D: 'Omite estudiantes repetidos en diferentes meses.'
    },
    socraticHints: {
      recordar: 'Cuenta cuántas veces aparece la palabra "Quinto" en las listas de los 3 meses.',
      comprender: 'Haz lo mismo para "Sexto" y para "Séptimo".',
      aplicar: 'Anota en tu cuaderno: Quinto = 4, Sexto = 8, Séptimo = 6.',
      analizar: '¿Por qué la tabla A consolida con exactitud el total trimestral de inasistencias?'
    }
  },
  {
    id: 708,
    grade: 7,
    questionNumber: 8,
    title: 'Coordenada del punto más alto de una casa',
    statement: 'Un arquitecto dibujó los planos de una casa en el plano cartesiano. La cumbrera (punto más alto del techo) se ubica en el centro horizontal sobre el eje x = 5 y alcanza la altura máxima en el eje y = 8.\n\n¿Cuál es la coordenada del punto más alto de la casa?',
    options: [
      { number: 1, letter: 'A', text: '(5, 8)' },
      { number: 2, letter: 'B', text: '(5, 5)' },
      { number: 3, letter: 'C', text: '(10, 3)' },
      { number: 4, letter: 'D', text: '(10, 9)' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comunicación, modelación y representación',
    component: 'Espacial-Métrico',
    affirmation: 'Reconoce la ubicación de puntos y coordenadas en el plano cartesiano.',
    evidence: 'Identifica la pareja ordenada (x, y) del vértice superior de un polígono.',
    standard: 'Identifico características de localización en sistemas de representación cartesiana.',
    justification: 'Trazando la vertical hacia el eje x se obtiene 5 (abscisa); trazando la horizontal hacia el eje y se obtiene 8 (ordenada). La coordenada es (5, 8).',
    invalidOptionsReasoning: {
      B: '(5, 5) es la altura de la base del techo.',
      C: '(10, 3) es la esquina inferior derecha del alero.',
      D: '(10, 9) excede los límites del dibujo.'
    },
    socraticHints: {
      recordar: '¿Cómo se ordenan los valores en una pareja cartesiana? Siempre primero (x) horizontal, luego (y) vertical.',
      comprender: 'Ubica el vértice del techo y baja la mirada al eje horizontal: ¿qué número está? (5). Luego mira a la izquierda: ¿qué número está? (8).',
      aplicar: 'Escribe en tu cuaderno: Vértice = (x, y) = (5, 8).',
      analizar: '¿Por qué (5, 8) ubica con precisión milimétrica la cúspide del plano?'
    }
  },
  {
    id: 709,
    grade: 7,
    questionNumber: 9,
    title: 'Gráfica lineal de máquinas vs producción de zapatos',
    statement: 'En una fábrica, la producción de zapatos depende del número de máquinas: (2 máquinas -> 4 zapatos), (3 máquinas -> 6 zapatos), (4 máquinas -> 8 zapatos), (7 máquinas -> 14 zapatos).\n\n¿Cuál de las siguientes gráficas describe la relación entre el número de máquinas y el número de zapatos?',
    options: [
      { number: 1, letter: 'A', text: 'Gráfica A (puntos alineados en una recta que pasa por el origen y = 2x)' },
      { number: 2, letter: 'B', text: 'Gráfica B (curva decreciente)' },
      { number: 3, letter: 'C', text: 'Gráfica C (curva cóncava exponencial)' },
      { number: 4, letter: 'D', text: 'Gráfica D (curva parabólica convexa)' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Reconoce y representa gráficamente relaciones de variación lineal.',
    evidence: 'Asocia una tabla de proporcionalidad directa con una línea recta creciente.',
    standard: 'Describo situaciones de variación relacionando tablas y gráficas.',
    justification: 'Por cada máquina adicional se producen exactamente 2 zapatos más (razón constante k = 4/2 = 6/3 = 8/4 = 2). La relación es lineal directa: y = 2x, representada por la recta de la gráfica A.',
    invalidOptionsReasoning: {
      B: 'La curva B es decreciente (indica que a más máquinas habría menos zapatos).',
      C: 'La curva C muestra una aceleración no lineal.',
      D: 'La curva D es exponencial/cuadrática.'
    },
    socraticHints: {
      recordar: '¿Cuánto es 4÷2, 6÷3, 8÷4 y 14÷7?',
      comprender: 'Como la razón de cambio es constante e igual a 2, ¿qué forma geométrica tienen los puntos en la gráfica?',
      aplicar: 'Anota en tu cuaderno: "Proporcionalidad directa constante -> Gráfica lineal (línea recta)".',
      analizar: '¿Por qué la gráfica A es la única que representa una función lineal creciente?'
    }
  },
  {
    id: 710,
    grade: 7,
    questionNumber: 10,
    title: 'Repartición equitativa de premio descontando gastos',
    statement: 'Nicolás, Andrea y María ganaron un premio de $90.000. De allí deben pagar $36.000 por los materiales usados y el resto se lo reparten en partes iguales entre los 3 compañeros.\n\n¿Qué cantidad de dinero le corresponde a María?',
    options: [
      { number: 1, letter: 'A', text: '$18.000' },
      { number: 2, letter: 'B', text: '$20.000' },
      { number: 3, letter: 'C', text: '$30.000' },
      { number: 4, letter: 'D', text: '$54.000' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Calcula valores en situaciones combinadas aditivas y multiplicativas.',
    evidence: 'Resta el costo de materiales y divide el saldo neto en partes iguales.',
    standard: 'Formulo y resuelvo problemas en situaciones aditivas y multiplicativas.',
    justification: 'Dinero neto restante = $90.000 - $36.000 = $54.000. Repartiendo entre los 3 integrantes: $54.000 ÷ 3 = $18.000 para cada uno.',
    invalidOptionsReasoning: {
      B: 'Resta $30.000 en vez de $36.000 (60.000 / 3 = 20.000).',
      C: 'Divide $90.000 ÷ 3 = $30.000 sin descontar los materiales.',
      D: '$54.000 es el total a repartir entre los tres, no la parte de María.'
    },
    socraticHints: {
      recordar: '¿Cuánto dinero queda disponible después de pagar los $36.000 de materiales?',
      comprender: 'Calcula la resta: 90.000 - 36.000 = 54.000 pesos.',
      aplicar: 'Ahora divide 54.000 entre las 3 personas: 54.000 ÷ 3 = ?',
      analizar: '¿Por qué cada uno recibe exactamente $18.000 y juntos suman $54.000?'
    }
  },
  {
    id: 711,
    grade: 7,
    questionNumber: 11,
    title: 'Propiedad común de caras laterales en prismas rectos',
    statement: 'Una empresa de borradores tiene tres diseños con forma de prisma: prisma triangular, prisma pentagonal y prisma hexagonal.\n\nBasado en la figura, es correcto afirmar que los tres diseños tienen:',
    options: [
      { number: 1, letter: 'A', text: 'la misma cantidad de aristas.' },
      { number: 2, letter: 'B', text: 'todas las caras con forma de polígono regular.' },
      { number: 3, letter: 'C', text: 'la misma cantidad de caras.' },
      { number: 4, letter: 'D', text: 'todas las caras laterales con forma de rectángulo.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Razonamiento y argumentación',
    component: 'Espacial-Métrico',
    affirmation: 'Reconoce patrones y propiedades estructurales en poliedros y prismas.',
    evidence: 'Identifica que en todo prisma recto las caras laterales son paralelogramos o rectángulos.',
    standard: 'Identifico y describo figuras y cuerpos tridimensionales.',
    justification: 'Por definición de prisma recto, las caras laterales que unen las dos bases son rectangulares. Los tres prismas tienen diferente número de aristas (9, 15, 18) y caras (5, 7, 8), pero todos comparten caras laterales rectangulares.',
    invalidOptionsReasoning: {
      A: 'Aristas: triangular tiene 9, pentagonal 15, hexagonal 18.',
      B: 'Los rectángulos de las caras laterales no son polígonos regulares.',
      C: 'Caras totales: triangular tiene 5, pentagonal 7, hexagonal 8.'
    },
    socraticHints: {
      recordar: '¿Qué forma geométrica tienen las paredes o caras laterales de los tres prismas?',
      comprender: '¿Tienen la misma cantidad de caras o aumenta según los lados de la base?',
      aplicar: 'Escribe en tu cuaderno: "Prisma recto -> caras laterales siempre rectangulares".',
      analizar: '¿Por qué la opción D es la única propiedad geométrica compartida por los 3 modelos?'
    }
  },
  {
    id: 712,
    grade: 7,
    questionNumber: 12,
    title: 'Espacio muestral en encuesta de hijos de familias',
    statement: 'En una encuesta se registra el orden de nacimiento de hijos en familias de hasta 3 hijos: {H, M, HH, HM, MH, MM, HHH, HHM, HMH, HMM, MHH, MHM, MMH, MMM}.\n\nSegún las opciones de respuesta, NO se puede saber el número de familias que tengan:',
    options: [
      { number: 1, letter: 'A', text: '2 mujeres y 2 hombres.' },
      { number: 2, letter: 'B', text: '3 hombres.' },
      { number: 3, letter: 'C', text: '2 mujeres y 1 hombre.' },
      { number: 4, letter: 'D', text: '1 mujer.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Establece características de los espacios muestrales en experimentos.',
    evidence: 'Identifica eventos que quedan fuera del alcance del espacio muestral definido.',
    standard: 'Uso modelos para discutir y predecir la posibilidad de ocurrencia de un evento.',
    justification: 'El espacio muestral solo contempla familias con 1, 2 o 3 hijos (cadenas de longitud 1 a 3). Tener 2 mujeres y 2 hombres suma 4 hijos, caso que no existe en las opciones de respuesta.',
    invalidOptionsReasoning: {
      B: '3 hombres corresponde a HHH (sí está en la lista).',
      C: '2 mujeres y 1 hombre corresponde a HMM, MHM, MMH (sí están).',
      D: '1 mujer corresponde a M (sí está).'
    },
    socraticHints: {
      recordar: '¿Cuál es la cantidad máxima de hijos registrada en las opciones de la encuesta?',
      comprender: 'Cuenta cuántos hijos suman 2 mujeres y 2 hombres juntos (2 + 2 = 4 hijos).',
      aplicar: 'Verifica la lista dada: la cadena más larga tiene solo 3 letras (ej. HHH, MMM).',
      analizar: '¿Por qué una familia de 4 hijos no puede ser clasificada con esas opciones?'
    }
  },
  {
    id: 713,
    grade: 7,
    questionNumber: 13,
    title: 'Presupuesto de compras de comida en la tienda',
    statement: 'Sebastián debe gastar mínimo $1.500 y máximo $4.000. Los precios son: Arepa ($1.500), Chocolatina ($500), Jugo ($500), Ensalada ($3.500).\n\n¿Cuál de las siguientes afirmaciones es correcta?',
    options: [
      { number: 1, letter: 'A', text: 'Sebastián puede comprar una arepa, dos chocolatinas y un jugo.' },
      { number: 2, letter: 'B', text: 'Sebastián puede comprar una chocolatina y un jugo.' },
      { number: 3, letter: 'C', text: 'Sebastián puede comprar una arepa y una ensalada.' },
      { number: 4, letter: 'D', text: 'Sebastián puede comprar una chocolatina, una arepa y una ensalada.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Compara números reales en contextos cotidianos respetando intervalos de presupuesto.',
    evidence: 'Evalúa combinaciones de precios que cumplan: $1.500 ≤ Gasto ≤ $4.000.',
    standard: 'Justifico la pertinencia de cálculos en la solución de problemas.',
    justification: 'Opción A: 1 arepa ($1.500) + 2 chocolatinas ($1.000) + 1 jugo ($500) = $3.000. Como $1.500 ≤ $3.000 ≤ $4.000, cumple perfectamente con las condiciones.',
    invalidOptionsReasoning: {
      B: '1 chocolatina ($500) + 1 jugo ($500) = $1.000 (menor que el mínimo de $1.500).',
      C: '1 arepa ($1.500) + 1 ensalada ($3.500) = $5.000 (excede el máximo de $4.000).',
      D: 'Suma $500 + $1.500 + $3.500 = $5.500 (excede el presupuesto).'
    },
    socraticHints: {
      recordar: '¿Cuál es el rango de dinero permitido? Entre $1.500 (mínimo) y $4.000 (máximo).',
      comprender: 'Calcula el costo total de cada una de las 4 opciones.',
      aplicar: 'Anota en tu cuaderno: Opción A = 1.500 + 1.000 + 500 = $3.000 (Válido).',
      analizar: '¿Por qué las opciones B, C y D incumplen los límites del presupuesto?'
    }
  },
  {
    id: 714,
    grade: 7,
    questionNumber: 14,
    title: 'Frecuencia de calcomanías de muñecas en chocolates',
    statement: 'Un niño compra un chocolate cada día durante 10 días y anota la calcomanía obtenida: Muñeca, Muñeca, Carro, Muñeca, Robot, Robot, Robot, Muñeca, Carro, Animal (4 muñecas, 3 robots, 2 carros, 1 animal).\n\nSegún la tabla, la afirmación del niño ("lo más probable es que salga muñeca") es:',
    options: [
      { number: 1, letter: 'A', text: 'verdadera, porque la mayor cantidad de dibujos son muñecas.' },
      { number: 2, letter: 'B', text: 'falsa, porque la mayor cantidad de dibujos seguidos son robots.' },
      { number: 3, letter: 'C', text: 'verdadera, porque el primer dibujo que le salió es una muñeca.' },
      { number: 4, letter: 'D', text: 'falsa, porque en el último día el dibujo que le salió es un animal.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Toma decisiones sobre situaciones a partir de frecuencias observadas.',
    evidence: 'Valida conjeturas probabilísticas basándose en el conteo de frecuencias.',
    standard: 'Conjeturo acerca del resultado de experimentos usando nociones de probabilidad.',
    justification: 'De los 10 días, 4 calcomanías fueron de muñecas (4/10 = 40%), que es la mayor frecuencia de todos los tipos. Por tanto, la afirmación es verdadera sustentada en la frecuencia relativa.',
    invalidOptionsReasoning: {
      B: 'Tener apariciones seguidas no altera la frecuencia total acumulada.',
      C: 'El orden de la primera calcomanía no determina la probabilidad global.',
      D: 'El último resultado individual no invalida la tendencia estadística.'
    },
    socraticHints: {
      recordar: 'Cuenta la frecuencia de cada figura: Muñeca (4), Robot (3), Carro (2), Animal (1).',
      comprender: '¿Cuál figura tiene el mayor número total de apariciones en el experimento?',
      aplicar: 'Escribe en tu cuaderno: Moda = Muñeca (4 apariciones de 10).',
      analizar: '¿Por qué la mayor frecuencia empírica respalda que la muñeca es el resultado más probable?'
    }
  },
  {
    id: 715,
    grade: 7,
    questionNumber: 15,
    title: 'Porcentaje de descuento en libro de librería',
    statement: 'Juan quiere comprar un libro que cuesta $20.000. La librería tiene la oferta: "Recibe $6.000 de descuento en cada libro".\n\n¿A qué porcentaje del precio del libro corresponde este descuento?',
    options: [
      { number: 1, letter: 'A', text: '70 %.' },
      { number: 2, letter: 'B', text: '60 %.' },
      { number: 3, letter: 'C', text: '40 %.' },
      { number: 4, letter: 'D', text: '30 %.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Calcula porcentajes de números naturales en situaciones cotidianas.',
    evidence: 'Aplica la fórmula de porcentaje: (Descuento / Total) × 100%.',
    standard: 'Resuelvo problemas en contextos de medidas relativas y porcentajes.',
    justification: 'Porcentaje = (6.000 ÷ 20.000) × 100% = 0,30 × 100% = 30% de descuento.',
    invalidOptionsReasoning: {
      A: '70% es el porcentaje que termina pagando por el libro ($14.000 / $20.000).',
      B: 'Calcula 6.000 / 100 cometiendo error de escala.',
      C: 'Calcula restas sin sustento porcentual.'
    },
    socraticHints: {
      recordar: '¿Cuál es el valor del descuento y cuál el precio total original?',
      comprender: 'Divide el descuento entre el precio original: 6.000 ÷ 20.000 = ?',
      aplicar: 'Calcula en tu cuaderno: 0,30 × 100% = 30%.',
      analizar: '¿Por qué el 30% de $20.000 es exactamente $6.000?'
    }
  },
  {
    id: 716,
    grade: 7,
    questionNumber: 16,
    title: 'Traslación de ficha en tablero cuadriculado',
    statement: 'En un juego de tablero con columnas (H, I, J, K, L, M) y filas numeradas (1 a 6), una ficha se encuentra en la posición (K, 1). Un jugador mueve la ficha tres unidades hacia la izquierda y dos unidades hacia arriba.\n\n¿Cuál es la posición final de la ficha?',
    options: [
      { number: 1, letter: 'A', text: '(K, 2).' },
      { number: 2, letter: 'B', text: '(I, 4).' },
      { number: 3, letter: 'C', text: '(H, 3).' },
      { number: 4, letter: 'D', text: '(J, 1).' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comunicación, modelación y representación',
    component: 'Espacial-Métrico',
    affirmation: 'Ubica puntos en el plano y realiza traslaciones sobre ejes ortogonales.',
    evidence: 'Aplica desplazamientos vectoriales (-3 horizontal, +2 vertical).',
    standard: 'Identifico características de localización en sistemas de representación cartesiana.',
    justification: 'Partiendo de (K, 1):\n- Mover 3 unidades a la izquierda: K -> J (1) -> I (2) -> H (3).\n- Mover 2 unidades hacia arriba: 1 -> 2 (1) -> 3 (2).\nLa posición final es (H, 3).',
    invalidOptionsReasoning: {
      A: 'Solo sube 1 unidad sin moverse a la izquierda.',
      B: 'Mueve 2 a la izquierda y 3 arriba.',
      D: 'Mueve 1 a la izquierda sin subir.'
    },
    socraticHints: {
      recordar: 'Anota el alfabeto de las columnas: H, I, J, K, L, M.',
      comprender: 'Retrocede 3 letras desde K hacia la izquierda: ¿a qué letra llegas? (H).',
      aplicar: 'Suma 2 a la fila vertical: 1 + 2 = 3. Posición = (H, 3).',
      analizar: '¿Por qué la coordenada cartesiana final debe ser (H, 3)?'
    }
  },
  {
    id: 717,
    grade: 7,
    questionNumber: 17,
    title: 'Medidas para calcular el área de una cometa compuesta',
    statement: 'Una cometa con superficie de plástico se forma con la unión de un semicírculo superior y un triángulo inferior.\n\n¿Cuáles de las siguientes medidas se requiere conocer para hallar la cantidad de plástico que se necesita para armar la cometa?',
    options: [
      { number: 1, letter: 'A', text: 'El perímetro del semicírculo y el lado de unión con el triángulo.' },
      { number: 2, letter: 'B', text: 'La altura del triángulo y el radio del semicírculo.' },
      { number: 3, letter: 'C', text: 'Únicamente el diámetro del semicírculo.' },
      { number: 4, letter: 'D', text: 'Únicamente el área del triángulo.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Calcula áreas de figuras compuestas descomponiéndolas en figuras regulares.',
    evidence: 'Identifica las dimensiones necesarias para aplicar las fórmulas de área del semicírculo y triángulo.',
    standard: 'Calculo áreas a través de composición y descomposición de figuras.',
    justification: 'Con el radio r se calcula el área del semicírculo (A = πr²/2) y su base compartida con el triángulo (base = 2r). Con la altura h se calcula el área del triángulo (A = base × h / 2 = 2r × h / 2 = r × h). Sumando ambas áreas se obtiene el plástico total.',
    invalidOptionsReasoning: {
      A: 'El perímetro mide el borde exterior, no la superficie de plástico requerida.',
      C: 'Solo con el diámetro no se puede calcular el área del triángulo inferior sin su altura.',
      D: 'Omite por completo el área del semicírculo superior.'
    },
    socraticHints: {
      recordar: '¿Cuáles dos figuras componen la superficie de la cometa?',
      comprender: '¿Qué fórmula se usa para el área de un semicírculo y cuál para la de un triángulo?',
      aplicar: 'Escribe en tu cuaderno: Áreas -> A_semicírculo(r) = πr²/2 y A_triángulo(b, h) = (2r × h)/2.',
      analizar: '¿Por qué conocer el radio y la altura del triángulo es suficiente para calcular el 100% del área?'
    }
  },
  {
    id: 718,
    grade: 7,
    questionNumber: 18,
    title: 'Traslación de un polígono en el plano cartesiano',
    statement: 'Un polígono tiene su base en y = 2, entre x = -3 y x = -1. Si se traslada 3 unidades hacia abajo y después 4 unidades a la derecha, ¿cuál de las siguientes gráficas representa el polígono resultante?',
    options: [
      { number: 1, letter: 'A', text: 'Gráfica A (polígono con base en y = -1, entre x = 1 y x = 3)' },
      { number: 2, letter: 'B', text: 'Gráfica B (trasladado a la izquierda)' },
      { number: 3, letter: 'C', text: 'Gráfica C (trasladado hacia arriba)' },
      { number: 4, letter: 'D', text: 'Gráfica D (con base en y = 0)' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Razonamiento y argumentación',
    component: 'Espacial-Métrico',
    affirmation: 'Aplica transformaciones rígidas de traslación en el plano cartesiano.',
    evidence: 'Calcula las nuevas coordenadas de los vértices: (x + 4, y - 3).',
    standard: 'Predigo y comparo resultados de aplicar traslaciones sobre figuras bidimensionales.',
    justification: 'Para cada punto (x, y):\n- Nuevo x = x + 4 (de -3 a 1, y de -1 a 3).\n- Nuevo y = y - 3 (de 2 a -1, y del pico 4 a 1).\nLa figura resultante se ubica con base en y = -1 entre x = 1 y 3 (Gráfica A).',
    invalidOptionsReasoning: {
      B: 'Aplica el desplazamiento horizontal hacia la izquierda.',
      C: 'No aplica la traslación hacia abajo.',
      D: 'Baja solo 2 unidades en vez de 3.'
    },
    socraticHints: {
      recordar: '¿Qué operación se hace a la coordenada x cuando te mueves a la derecha? (+4). ¿Y a la y cuando bajas? (-3).',
      comprender: 'Toma el vértice (-3, 2): nuevo x = -3 + 4 = 1; nuevo y = 2 - 3 = -1 -> (1, -1).',
      aplicar: 'Grafica en tu cuaderno la nueva posición de todos los vértices.',
      analizar: '¿Por qué la Gráfica A reproduce con total fidelidad la figura trasladada?'
    }
  },
  {
    id: 719,
    grade: 7,
    questionNumber: 19,
    title: 'Plano del terreno uniendo 4 coordenadas cartesianas',
    statement: 'El arquitecto pide unir los siguientes puntos en el plano cartesiano: (7, 4) con (-3, 4), luego con (-3, -1), luego con (7, -1) y finalmente cerrar en (7, 4).\n\n¿Cuál es el dibujo correcto del plano del terreno?',
    options: [
      { number: 1, letter: 'A', text: 'Plano A (ubicado solo en el primer cuadrante positivo)' },
      { number: 2, letter: 'B', text: 'Plano B (con coordenadas x e y invertidas)' },
      { number: 3, letter: 'C', text: 'Plano C (rectángulo reducido)' },
      { number: 4, letter: 'D', text: 'Plano D (rectángulo que abarca x desde -3 hasta 7, y desde -1 hasta 4)' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comunicación, modelación y representación',
    component: 'Espacial-Métrico',
    affirmation: 'Ubica coordenadas y construye figuras poligonales en el plano cartesiano.',
    evidence: 'Traza polígonos a partir de coordenadas con signos positivos y negativos.',
    standard: 'Identifico características de localización en sistemas de representación cartesiana.',
    justification: 'El plano D muestra el rectángulo con base horizontal desde x = -3 hasta x = 7 (longitud 10 unidades) y altura vertical desde y = -1 hasta y = 4 (altura 5 unidades).',
    invalidOptionsReasoning: {
      A: 'Considera todos los puntos como positivos (3 a 7, 1 a 4).',
      B: 'Intercambia los ejes x e y (dibuja un rectángulo vertical).',
      C: 'Omite los cuadrantes negativos.'
    },
    socraticHints: {
      recordar: 'Verifica los 4 puntos: (-3, 4), (7, 4), (7, -1), (-3, -1).',
      comprender: '¿El terreno cruza el eje Y (de -3 a 7) y el eje X (de -1 a 4)?',
      aplicar: 'Dibuja el plano cartesiano en tu cuaderno y une los 4 puntos con regla.',
      analizar: '¿Por qué el plano D es el único con los 4 vértices en las coordenadas exactas?'
    }
  },
  {
    id: 720,
    grade: 7,
    questionNumber: 20,
    title: 'Proporcionalidad directa en venta de perros calientes',
    statement: 'Un vendedor ambulante hace cuentas de su negocio: "Por cada perro caliente vendido, recibo $2.000".\n\n¿Cuál es la relación entre el número de perros calientes vendidos y el dinero recibido?',
    options: [
      { number: 1, letter: 'A', text: 'De proporcionalidad inversa.' },
      { number: 2, letter: 'B', text: 'De proporcionalidad directa.' },
      { number: 3, letter: 'C', text: 'De correlación nula.' },
      { number: 4, letter: 'D', text: 'De correlación negativa.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Reconoce y clasifica relaciones de proporcionalidad entre magnitudes.',
    evidence: 'Identifica que al duplicar o triplicar una variable, la otra aumenta en la misma proporción.',
    standard: 'Analizo propiedades de proporcionalidad directa e inversa en contextos cotidianos.',
    justification: 'Si se vende el doble de perros calientes, se recibe el doble de dinero (Dinero = 2.000 × Cantidad). La razón Dinero / Cantidad = $2.000 es constante, lo que define una proporcionalidad directa.',
    invalidOptionsReasoning: {
      A: 'Inversa significaría que a más perros vendidos, menos dinero se recibe.',
      C: 'Correlación nula significaría que no hay relación entre ventas y dinero.',
      D: 'Correlación negativa implica que una variable disminuye cuando la otra aumenta.'
    },
    socraticHints: {
      recordar: 'Si vende 1 perro recibe $2.000. Si vende 2 recibe $4.000. Si vende 10 recibe $20.000.',
      comprender: 'Cuando aumenta la cantidad de perros vendidos, ¿qué le ocurre al dinero recibido?',
      aplicar: 'Anota en tu cuaderno: "Proporcionalidad Directa: al multiplicar una magnitud por un número, la otra queda multiplicada por el mismo número".',
      analizar: '¿Por qué la relación entre cantidad y dinero es directamente proporcional?'
    }
  }
];
