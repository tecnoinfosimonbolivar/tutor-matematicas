// Banco Oficial de Preguntas ICFES Evaluar para Avanzar (Grados 7° y 8°)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
import { Question } from '../types';

export const OFFICIAL_GRADE_7_8: Record<number, Question[]> = {
  // ================= GRADO 7° =================
  7: [
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
        aplicar: 'Calcula en tu libreta: 150 × (2/5) = 300 / 5 = 60 km.',
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
        aplicar: 'Anota en tu libreta: Quinto = 4, Sexto = 8, Séptimo = 6.',
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
        aplicar: 'Escribe en tu libreta: Moda = Muñeca (4 apariciones de 10).',
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
        aplicar: 'Anota en tu libreta: "Proporcionalidad Directa: al multiplicar una magnitud por un número, la otra queda multiplicada por el mismo número".',
        analizar: '¿Por qué la relación entre cantidad y dinero es directamente proporcional?'
      }
    }
  ],

  // ================= GRADO 8° =================
  8: [
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
        aplicar: 'Anota en tu libreta: M(3,6), N(4,5), P(6,4), Q(7,3).',
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
        aplicar: 'Anota en tu libreta: "Parte superior = cilindros; Parte inferior = paralelepípedos".',
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
      id: 707,
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
        aplicar: 'Anota en tu libreta: Verde tiene 4/12 = 33.3% (Mayor probabilidad).',
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
        aplicar: 'Calcula en tu libreta: A_triángulo = (8 × 12) / 2 = 48 cm²; A_cuadrado = 12 × 12 = 144 cm² -> Total = 192 cm².',
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
        aplicar: 'Anota en tu libreta: Tabla C -> Fernando (51) y Rafael (51) -> Frecuencia = 2 (Moda).',
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
        aplicar: 'Calcula en tu libreta: 1 × 2 = 2; luego 2 × 13 = 26 cm³.',
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
        aplicar: 'Calcula en tu libreta: 9 fichas × 4 cm²/ficha = 36 cm².',
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
        aplicar: 'Anota en tu libreta: 6 p.m. -> $105 (Máximo global).',
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
  ]
};
