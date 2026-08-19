// Banco Oficial ICFES Evaluar para Avanzar - Grado 10° (Preguntas 1 a 20 Oficiales)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
import { Question } from '../types';

export const OFFICIAL_GRADE_10: Question[] = [
  {
    id: 1001,
    grade: 10,
    questionNumber: 1,
    title: 'Precio histórico del kilogramo de plata en 1782',
    statement: 'La gráfica muestra la variación del precio de un kilogramo de oro y un kilogramo de plata en marcos alemanes entre 1772 y 1817. En la línea punteada (plata), se observa que en el año 1782 el precio del kilogramo de plata alcanzó exactamente el valor de 10.000 marcos.\n\n¿En qué año el precio del kilogramo de plata fue de 10.000 marcos?',
    options: [
      { number: 1, letter: 'A', text: '1772' },
      { number: 2, letter: 'B', text: '1782' },
      { number: 3, letter: 'C', text: '1792' },
      { number: 4, letter: 'D', text: '1802' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Interpretación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Extrae información de gráficas cartesianas de series de tiempo.',
    evidence: 'Determina el valor de la variable independiente correspondiente a un valor dado en la ordenada.',
    standard: 'Analizo las relaciones y propiedades entre las expresiones algebraicas y las gráficas de funciones.',
    justification: 'Al trazar una línea horizontal en el valor 10.000 del eje vertical y proyectarla hacia la curva de la plata (línea punteada), la intersección desciende exactamente sobre el año 1782 en el eje horizontal.',
    invalidOptionsReasoning: {
      A: 'En 1772 el precio de la plata estaba cerca de 5.000 marcos.',
      C: 'En 1792 el precio de la plata era cercano a 14.000 marcos.',
      D: 'En 1802 el precio de la plata superaba los 18.000 marcos.'
    },
    socraticHints: {
      recordar: 'Identifica cuál de las dos curvas corresponde a la plata (línea punteada).',
      comprender: 'Ubica el valor 10.000 en el eje vertical (precio en marcos).',
      aplicar: 'Sigue la línea horizontal desde 10.000 hasta tocar la curva punteada y mira hacia abajo en el eje horizontal.',
      analizar: '¿Por qué el año 1782 es el único punto de corte con el valor de 10.000 marcos?'
    }
  },
  {
    id: 1002,
    grade: 10,
    questionNumber: 2,
    title: 'Modelación periódica de las fases lunares',
    statement: 'En un calendario astronómico se registran las fases lunares por semanas continuas:\n- Semana 1: Cuarto Menguante (CM)\n- Semana 2: Luna Nueva (LN)\n- Semana 3: Cuarto Creciente (CC)\n- Semana 4: Luna Llena (LL)\n- Semana 5: Cuarto Menguante (CM)\n- Semana 6: Luna Nueva (LN)\n- Semana 7: Cuarto Creciente (CC)\n- Semana 8: Luna Llena (LL)\n- Semana 9: Cuarto Menguante (CM)\n\n¿Cuál de las siguientes gráficas f(s) representa la fase lunar f en función de la semana s transcurrida?',
    options: [
      { number: 1, letter: 'A', text: 'Gráfica A (Curva senoidal oscilante que repite el ciclo CM -> LN -> CC -> LL cada 4 semanas)' },
      { number: 2, letter: 'B', text: 'Gráfica B (Línea recta creciente continua sin periodicidad)' },
      { number: 3, letter: 'C', text: 'Gráfica C (Gráfica con saltos discontinuos que no coincide con las semanas)' },
      { number: 4, letter: 'D', text: 'Gráfica D (Curva invertida que asigna Luna Llena a la semana 1)' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Interpretación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Modela fenómenos periódicos mediante funciones trigonométricas y gráficas periódicas.',
    evidence: 'Identifica el período fundamental T = 4 semanas y la correspondencia de puntos periódicos.',
    standard: 'Reconozco y describo curvas y lugares geométricos en el plano.',
    justification: 'Las 4 fases lunares forman un ciclo cerrado de período T = 4 semanas. En la semana 1 inicia en CM, pasa por LN en s=2, CC en s=3, LL en s=4 y vuelve a CM en s=5 y s=9. La gráfica A reproduce con exactitud este patrón periódico.',
    invalidOptionsReasoning: {
      B: 'Una función lineal monótona creciente no representa un fenómeno periódico cíclico.',
      C: 'No respeta los períodos ni los valores discretos de cada semana.',
      D: 'Asigna una fase equivocada en el inicio del ciclo.'
    },
    socraticHints: {
      recordar: '¿Cuántas semanas dura un ciclo lunar completo antes de repetirse (4 semanas)?',
      comprender: '¿Qué fase debe coincidir en las semanas 1, 5 y 9?',
      aplicar: 'Verifica en tu cuaderno: f(1) = f(5) = f(9) = CM.',
      analizar: '¿Por qué la forma oscilatoria de período 4 de la gráfica A es el modelo matemático correcto?'
    }
  },
  {
    id: 1003,
    grade: 10,
    questionNumber: 3,
    title: 'Probabilidad de accidente en la aerolínea Marte',
    statement: 'La Official Aviation Guide (OAG) afirma que la probabilidad de morir en un accidente aéreo es de 1 en 4,7 millones (1 / 4.700.000). Para verificar si la aerolínea Marte es más segura que el promedio mundial, la aerolínea registra que durante el último año transportó 10.000 personas en 100 vuelos, y en un único accidente murieron 5 pasajeros.\n\n¿Qué cálculo debe realizar la aerolínea Marte para comparar su seguridad?',
    options: [
      { number: 1, letter: 'A', text: 'La probabilidad de morir en un vuelo de la aerolínea Marte, calculando la razón entre las 5 víctimas y el total de 10.000 pasajeros transportados (5 / 10.000).' },
      { number: 2, letter: 'B', text: 'La división de 10.000 pasajeros entre los 100 vuelos realizados.' },
      { number: 3, letter: 'C', text: 'Multiplicar 4,7 millones por los 5 pasajeros fallecidos.' },
      { number: 4, letter: 'D', text: 'Restar 10.000 menos 5 personas.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Formulación y ejecución',
    component: 'Aleatorio',
    affirmation: 'Plantea estimaciones de probabilidad experimental en poblaciones dadas.',
    evidence: 'Calcula la razón entre eventos desfavorables (muertes) y el total de la muestra expuesta.',
    standard: 'Uso comprensivo de algunas medidas de tendencia central y dispersión.',
    justification: 'Para comparar su índice de riesgo con la estadística global de 1 en 4,7 millones, la aerolínea debe calcular su probabilidad empírica de fallecimiento: P = Muertes / Total pasajeros = 5 / 10.000 = 1 en 2.000.',
    invalidOptionsReasoning: {
      B: '10.000 / 100 = 100 da la media de pasajeros por vuelo, no la tasa de mortalidad.',
      C: 'No tiene fundamento probabilístico.',
      D: 'Da solo la cantidad de personas que sobrevivieron, no una probabilidad comparable.'
    },
    socraticHints: {
      recordar: '¿Cómo se define la probabilidad de un evento en una población (Casos de interés / Casos totales)?',
      comprender: '¿Cuál es el total de pasajeros expuestos en Marte (10.000) y cuántos fallecieron (5)?',
      aplicar: 'Plantea en tu cuaderno la fracción: 5 / 10.000.',
      analizar: '¿Por qué esta razón permite comparar directamente la tasa por pasajero frente a la cifra de 1 en 4,7 millones?'
    }
  },
  {
    id: 1004,
    grade: 10,
    questionNumber: 4,
    title: 'Comparación de seguridad entre avión y barco',
    statement: 'Un reporte indica que en el transporte marítimo la probabilidad de morir es de 10 en 47 millones de pasajeros (10 / 47.000.000). Un analista afirma que "viajar en avión es mucho más seguro que viajar en barco porque la probabilidad del avión es de 1 en 4,7 millones".\n\nLa afirmación del analista es:',
    options: [
      { number: 1, letter: 'A', text: 'Verdadera, porque 1 es menor que 10.' },
      { number: 2, letter: 'B', text: 'Verdadera, porque 4,7 millones es menor que 47 millones.' },
      { number: 3, letter: 'C', text: 'Falsa, porque viajar en barco es 10 veces más seguro.' },
      { number: 4, letter: 'D', text: 'Falsa, porque las dos probabilidades son equivalentes (10 / 47.000.000 = 1 / 4.700.000), por lo que ambos medios son igual de seguros.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Argumentación',
    component: 'Aleatorio',
    affirmation: 'Compara y valida argumentos numéricos basados en fracciones equivalentes de probabilidad.',
    evidence: 'Simplifica razones numéricas para comprobar la igualdad de dos tasas de probabilidad.',
    standard: 'Justifico o refuto afirmaciones a partir de datos estadísticos.',
    justification: 'Al simplificar la fracción del barco dividiendo numerador y denominador entre 10: 10 / 47.000.000 = 1 / 4.700.000. Ambas razones son numéricamente idénticas (0,0000002127), por lo que la afirmación es FALSA: tienen exactamente la misma probabilidad de riesgo.',
    invalidOptionsReasoning: {
      A: 'Ignora el denominador cometiendo el error de comparar solo numeradores.',
      B: 'Ignora la escala relativa de las fracciones.',
      C: 'Asume que una es diez veces mejor sin simplificar.'
    },
    socraticHints: {
      recordar: '¿Qué sucede si divides entre 10 el numerador y el denominador de 10 / 47.000.000?',
      comprender: '¿A qué fracción irreducible llegas (1 / 4.700.000)?',
      aplicar: 'Escribe en tu cuaderno la equivalencia: 10 / 47.000.000 = 1 / 4.700.000.',
      analizar: '¿Por qué dos tasas equivalentes significan el mismo nivel exacto de probabilidad estadística?'
    }
  },
  {
    id: 1005,
    grade: 10,
    questionNumber: 5,
    title: 'Probabilidad de reclamo NO atendido antes de 24 horas',
    statement: 'Una empresa de servicios públicos registra la fracción de reclamos atendidos antes de 24 horas por servicio:\n- Energía: 2/3\n- Acueducto: 5/6\n- Telefonía: 8/10\n- Gas: 3/5\n\nSi se escoge un reclamo al azar entre los presentados, ¿en cuál servicio hay MAYOR PROBABILIDAD de que el reclamo NO sea atendido antes de 24 horas?',
    options: [
      { number: 1, letter: 'A', text: 'Energía.' },
      { number: 2, letter: 'B', text: 'Acueducto.' },
      { number: 3, letter: 'C', text: 'Telefonía.' },
      { number: 4, letter: 'D', text: 'Gas.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Interpretación y representación',
    component: 'Aleatorio',
    affirmation: 'Calcula probabilidades de eventos complementarios P(A\') = 1 - P(A).',
    evidence: 'Compara fracciones decimales para determinar el valor máximo en un conjunto de complementos.',
    standard: 'Calculo probabilidad de eventos usando razonamiento probabilístico.',
    justification: 'Calculando el complemento (1 - P) para reclamos NO atendidos:\n- Energía: 1 - 2/3 = 1/3 ≈ 0,333\n- Acueducto: 1 - 5/6 = 1/6 ≈ 0,167\n- Telefonía: 1 - 8/10 = 2/10 = 0,200\n- Gas: 1 - 3/5 = 2/5 = 0,400\nEl valor más alto es 0,400 (Gas).',
    invalidOptionsReasoning: {
      A: 'Energía tiene 1/3 (0,333), que es menor que 2/5 (0,400).',
      B: 'Acueducto es la más eficiente, solo 1/6 (0,167) no se atienden.',
      C: 'Telefonía es 2/10 = 0,200.'
    },
    socraticHints: {
      recordar: 'Si el 3/5 de los reclamos se atienden a tiempo, ¿qué fracción NO se atiende (1 - 3/5)?',
      comprender: 'Convierte las fracciones de reclamos no atendidos a decimales en tu cuaderno: 1/3 = 0,33; 1/6 = 0,17; 2/10 = 0,20; 2/5 = 0,40.',
      aplicar: 'Compara los cuatro números decimales e identifica el mayor.',
      analizar: '¿Por qué Gas tiene la probabilidad más alta de fallar en la atención en 24 horas?'
    }
  },
  {
    id: 1006,
    grade: 10,
    questionNumber: 6,
    title: 'Rutas mínimas de 25 metros de M a P pasando por N',
    statement: 'En un mapa de calles cuadriculado donde cada segmento mide 5 metros, una persona quiere ir desde el punto M hasta el punto P pasando obligatoriamente por el punto N mediante trayectorias mínimas de 25 metros.\n- De M a N la distancia mínima es 15 metros y existen 3 caminos distintos.\n- De N a P la distancia mínima es 10 metros y existen 2 caminos distintos.\n\n¿Cuál representación resume correctamente todas las opciones de rutas posibles?',
    options: [
      { number: 1, letter: 'A', text: 'M(2)N(3)P' },
      { number: 2, letter: 'B', text: 'M(5)P' },
      { number: 3, letter: 'C', text: 'M(3)N(2)P (3 caminos de M a N y 2 caminos de N a P para un total de 6 rutas)' },
      { number: 4, letter: 'D', text: 'M(1)N(1)P' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Interpretación y representación',
    component: 'Espacial-Métrico',
    affirmation: 'Representa combinaciones de rutas en redes de cuadrículas.',
    evidence: 'Aplica el principio de multiplicación en etapas secuenciales sobre grafos.',
    standard: 'Uso conceptos básicos de métodos de conteo (principio multiplicativo).',
    justification: 'Al analizar el recorrido en dos etapas independientes: para la primera etapa (M -> N) existen 3 opciones; para la segunda etapa (N -> P) existen 2 opciones. La notación combinatoria correcta es M(3)N(2)P, generando 3 × 2 = 6 trayectorias de 25 m.',
    invalidOptionsReasoning: {
      A: 'Invierte las cantidades de caminos asignando 2 a MN y 3 a NP.',
      B: 'Suma los caminos desconociendo el punto intermedio N.',
      D: 'Solo cuenta 1 camino por tramo.'
    },
    socraticHints: {
      recordar: '¿Cuántos caminos mínimos diferentes van de M a N (3)? ¿Y de N a P (2)?',
      comprender: '¿Cómo se combinan las opciones de la primera etapa con las de la segunda etapa?',
      aplicar: 'Multiplica en tu cuaderno: 3 × 2 = 6 caminos totales pasando por N.',
      analizar: '¿Por qué la notación M(3)N(2)P expresa con claridad el producto cartesiano de las rutas?'
    }
  },
  {
    id: 1007,
    grade: 10,
    questionNumber: 7,
    title: 'Razón de vida útil entre bombillo LED y bombillo LFC',
    statement: 'Un almacén compara la vida útil de dos tipos de bombillos:\n- Bombillo LED: dura 50.000 horas.\n- Bombillo fluorescente compacto (LFC): dura 5.000 horas.\n\nPara hacer una campaña publicitaria que destaque la durabilidad del bombillo LED frente al LFC, ¿cuál de los siguientes mensajes es matemáticamente correcto?',
    options: [
      { number: 1, letter: 'A', text: 'Un bombillo LED dura 5 veces más que un bombillo LFC.' },
      { number: 2, letter: 'B', text: 'Un bombillo LED dura 50 veces más que un bombillo LFC.' },
      { number: 3, letter: 'C', text: 'Un bombillo LED dura lo mismo que 10 bombillos LFC.' },
      { number: 4, letter: 'D', text: 'Un bombillo LED dura 45.000 veces más que un bombillo LFC.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Formulación y ejecución',
    component: 'Numérico-Variacional',
    affirmation: 'Calcula razones multiplicativas entre magnitudes numéricas.',
    evidence: 'Halla el cociente 50.000 / 5.000 = 10 para expresar la equivalencia.',
    standard: 'Resuelvo y formulo problemas en contextos de medidas relativas.',
    justification: 'Dividiendo la vida útil del LED entre la del LFC: 50.000 h ÷ 5.000 h = 10. Esto significa que 1 bombillo LED rinde exactamente lo mismo que 10 bombillos LFC consecutivos.',
    invalidOptionsReasoning: {
      A: '5 surge de mirar el primer dígito sin considerar los ceros.',
      B: '50 surge de un error de división.',
      D: '45.000 es la diferencia aritmética (50.000 - 5.000), no una razón multiplicativa.'
    },
    socraticHints: {
      recordar: '¿Cuántas horas dura el LED y cuántas el LFC?',
      comprender: '¿Cuántas veces cabe 5.000 en 50.000?',
      aplicar: 'Divide en tu cuaderno: 50.000 ÷ 5.000 = 10.',
      analizar: '¿Por qué decir "1 LED dura lo mismo que 10 LFC" es la traducción exacta de la razón de 10 a 1?'
    }
  },
  {
    id: 1008,
    grade: 10,
    questionNumber: 8,
    title: 'Cálculo de población encuestada según porcentaje',
    statement: 'En una encuesta realizada a 2.000 personas sobre hábitos de lectura, se determinó que el 60 % de los encuestados tienen edades comprendidas entre los 18 y los 38 años.\n\n¿Cuántas personas encuestadas tienen entre 18 y 38 años?',
    options: [
      { number: 1, letter: 'A', text: '600 personas.' },
      { number: 2, letter: 'B', text: '1.200 personas.' },
      { number: 3, letter: 'C', text: '1.400 personas.' },
      { number: 4, letter: 'D', text: '1.800 personas.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Formulación y ejecución',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas que involucran el cálculo de porcentajes directos.',
    evidence: 'Multiplica la población total por la fracción decimal correspondiente al 60%.',
    standard: 'Utilizo números reales en sus diferentes representaciones.',
    justification: 'Calculando el 60% de 2.000: Cantidad = 2.000 × (60 / 100) = 2.000 × 0,60 = 1.200 personas.',
    invalidOptionsReasoning: {
      A: 'Calcula el 30% (600).',
      C: 'Calcula el 70% (1.400).',
      D: 'Calcula el 90% (1.800).'
    },
    socraticHints: {
      recordar: '¿A qué fracción decimal equivale el 60% (0,60)?',
      comprender: '¿Cómo calculas el porcentaje de una cantidad dada?',
      aplicar: 'Multiplica en tu cuaderno: 2.000 × 60 = 120.000; luego divide entre 100 = 1.200.',
      analizar: '¿Por qué 1.200 es más de la mitad (1.000) pero menos del total (2.000)?'
    }
  },
  {
    id: 1009,
    grade: 10,
    questionNumber: 9,
    title: 'Desarrollo plano de un prisma triangular',
    statement: 'Un diseñador industrial necesita elaborar el molde plano de cartón (desarrollo plano) para armar una caja con forma de prisma recto de base triangular.\n\n¿Cuál de los siguientes moldes permite construir la caja requerida al doblarse?',
    options: [
      { number: 1, letter: 'A', text: 'Molde con 4 rectángulos y 2 triángulos en la misma cara' },
      { number: 2, letter: 'B', text: 'Molde con 3 rectángulos adyacentes y 2 triángulos en lados opuestos del rectángulo central' },
      { number: 3, letter: 'C', text: 'Molde con 2 rectángulos y 3 triángulos' },
      { number: 4, letter: 'D', text: 'Molde con 3 rectángulos con los 2 triángulos en el mismo lado horizontal' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Interpretación y representación',
    component: 'Espacial-Métrico',
    affirmation: 'Identifica desarrollos planos de poliedros regulares e irregulares.',
    evidence: 'Reconoce las caras laterales y bases requeridas para armar un prisma triangular sin superposiciones.',
    standard: 'Reconozco y describo curvas o lugares geométricos en dos y tres dimensiones.',
    justification: 'Un prisma triangular tiene exactamente 3 caras laterales rectangulares y 2 bases triangulares. Para doblarse y cerrar el poliedro sin que se superpongan las bases, los triángulos deben estar situados en bordes opuestos de los rectángulos laterales (Molde B).',
    invalidOptionsReasoning: {
      A: 'Tiene 4 caras laterales (prisma cuadrangular).',
      C: 'Tiene 3 triángulos y solo 2 rectángulos.',
      D: 'Al tener los dos triángulos en el mismo lado, al doblarse quedarían ambos en la misma base dejando la otra abierta.'
    },
    socraticHints: {
      recordar: '¿Cuántas caras laterales y cuántas bases tiene un prisma triangular (3 rectángulos y 2 triángulos)?',
      comprender: '¿Dónde deben ubicarse los triángulos para que uno tape la base superior y el otro la base inferior?',
      aplicar: 'Dibuja en tu cuaderno el desarrollo B y simula mentalmente el doblez.',
      analizar: '¿Por qué si ambos triángulos están en el mismo extremo no pueden tapar los dos extremos opuestos del prisma?'
    }
  },
  {
    id: 1010,
    grade: 10,
    questionNumber: 10,
    title: 'Corrección en fórmula de compra financiada de vehículo',
    statement: 'Isabel quiere comprar un automóvil financiado y propone calcular el costo total con la expresión:\nCosto = (Cuota inicial × Número de cuotas mensuales) + Valor de la cuota mensual.\n\nSu hermano le dice que esa expresión es incorrecta. ¿Por qué tiene razón el hermano de Isabel?',
    options: [
      { number: 1, letter: 'A', text: 'Porque el valor de la cuota mensual debe multiplicarse por la cuota inicial.' },
      { number: 2, letter: 'B', text: 'Porque la operación entre paréntesis indica que paga la cuota inicial varias veces (en cada cuota), cuando la cuota inicial solo se paga una única vez.' },
      { number: 3, letter: 'C', text: 'Porque no se deben sumar los valores monetarios.' },
      { number: 4, letter: 'D', text: 'Porque el número de cuotas debe restarse del valor del vehículo.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Justifica la validez de modelos algebraicos en transacciones financieras.',
    evidence: 'Identifica la variable que debe ser multiplicada por el número de cuotas (la cuota mensual, no la inicial).',
    standard: 'Justifico o refuto afirmaciones a partir de modelos matemáticos.',
    justification: 'La cuota inicial es un pago único de contado. Lo que se paga periódicamente durante n meses es la cuota mensual. Por tanto, la fórmula correcta es: Costo = Cuota inicial + (Valor cuota mensual × Número de cuotas). Al multiplicar la cuota inicial por el número de meses, Isabel multiplicó indebidamente el pago único.',
    invalidOptionsReasoning: {
      A: 'Multiplicar cuota mensual por cuota inicial distorsiona las dimensiones monetarias ($²).',
      C: 'La suma sí es necesaria para consolidar el costo total.',
      D: 'El número de cuotas es una cantidad de meses, no una cantidad de dinero a restar.'
    },
    socraticHints: {
      recordar: '¿Cuántas veces en la vida de un crédito se paga la "cuota inicial"? (Solo 1 vez al inicio).',
      comprender: '¿Cuál valor es el que se repite mes tras mes durante todo el plazo?',
      aplicar: 'Escribe la fórmula correcta: Costo = Cuota inicial + (Número de cuotas × Cuota mensual).',
      analizar: '¿Por qué la expresión de Isabel haría que el comprador pague la cuota inicial decenas de veces?'
    }
  },
  {
    id: 1011,
    grade: 10,
    questionNumber: 11,
    title: 'Semejanza de triángulos opuestos por el vértice',
    statement: 'En la figura, las rectas DJ e IA se intersecan en el punto F formando dos triángulos: triángulo DFI y triángulo AFJ. Se conocen las medidas:\n- Segmento DF = 2 cm\n- Segmento IF = 2 cm\n- Segmento FA = 1 cm\n- Segmento FJ = 1 cm\n\n¿Por qué los triángulos DFI y AFJ son semejantes?',
    options: [
      { number: 1, letter: 'A', text: 'Porque tienen todos sus lados de la misma longitud.' },
      { number: 2, letter: 'B', text: 'Porque sus perímetros son iguales.' },
      { number: 3, letter: 'C', text: 'Porque sus áreas son equivalentes.' },
      { number: 4, letter: 'D', text: 'Porque comparten el ángulo opuesto por el vértice en F y la razón entre sus lados correspondientes es constante: DF / FA = IF / FJ = 2 / 1 = 2 (Criterio Lado-Ángulo-Lado de semejanza).' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Argumentación',
    component: 'Espacial-Métrico',
    affirmation: 'Aplica criterios de semejanza de triángulos (LAL, LLL, AA).',
    evidence: 'Justifica la semejanza comprobando la proporcionalidad de dos pares de lados y la congruencia del ángulo comprendido.',
    standard: 'Aplico y justifico criterios de congruencia y semejanza entre triángulos.',
    justification: 'Los ángulos ∠DFI y ∠AFJ son congruentes por ser opuestos por el vértice. Además, las razones de los lados que forman dichos ángulos son iguales: DF / FA = 2/1 = 2 y IF / FJ = 2/1 = 2. Por el criterio de semejanza Lado-Ángulo-Lado (LAL), los dos triángulos son semejantes.',
    invalidOptionsReasoning: {
      A: 'Sus lados no miden lo mismo (unos miden 2 y otros miden 1).',
      B: 'El perímetro del triángulo grande es el doble del pequeño.',
      C: 'El área del triángulo grande es 4 veces la del pequeño.'
    },
    socraticHints: {
      recordar: '¿Cómo son entre sí dos ángulos opuestos por el vértice (congruentes/iguales)?',
      comprender: 'Calcula la razón entre los lados homólogos: 2 ÷ 1 = 2.',
      aplicar: 'Anota en tu cuaderno el Criterio LAL: "Dos triángulos son semejantes si tienen un ángulo igual y los lados que lo forman son proporcionales".',
      analizar: '¿Por qué la razón constante k=2 demuestra rigurosamente la semejanza?'
    }
  },
  {
    id: 1012,
    grade: 10,
    questionNumber: 12,
    title: 'Validación de semejanza en rectángulos construidos',
    statement: 'Un estudiante tiene un rectángulo inicial de 1 cm de ancho por 2 cm de largo. Para construir otro rectángulo semejante, decide sumar 1 cm a cada una de sus dimensiones, obteniendo un rectángulo de 2 cm de ancho por 3 cm de largo.\n\n¿Es correcto afirmar que el nuevo rectángulo es semejante al inicial?',
    options: [
      { number: 1, letter: 'A', text: 'Sí, porque se le sumó la misma cantidad a ambos lados.' },
      { number: 2, letter: 'B', text: 'No, porque la razón entre los anchos (2/1 = 2) es diferente a la razón entre los largos (3/2 = 1,5), por lo que los lados no son proporcionales.' },
      { number: 3, letter: 'C', text: 'Sí, porque ambos siguen siendo figuras de cuatro lados.' },
      { number: 4, letter: 'D', text: 'No, porque un rectángulo nuevo nunca puede ser semejante a otro.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Argumentación',
    component: 'Espacial-Métrico',
    affirmation: 'Diferencia transformaciones aditivas de transformaciones proporcionales en geometría.',
    evidence: 'Verifica si la razón entre lados homólogos se mantiene constante para determinar semejanza.',
    standard: 'Aplico y justifico criterios de congruencia y semejanza entre figuras.',
    justification: 'La semejanza geométrica requiere que los lados homólogos sean proporcionales (razón multiplicativa constante). Al sumar una constante fija (1 cm), las razones son 2/1 = 2 y 3/2 = 1,5. Como 2 ≠ 1,5, los rectángulos NO son semejantes.',
    invalidOptionsReasoning: {
      A: 'Sumar una constante cambia la proporción y distorsiona la figura.',
      C: 'Tener 4 lados no garantiza semejanza de forma.',
      D: 'Dos rectángulos sí pueden ser semejantes si se multiplican por un mismo factor de escala.'
    },
    socraticHints: {
      recordar: '¿Qué propiedad matemática define la semejanza geométrica (proporcionalidad en los lados)?',
      comprender: 'Calcula la razón de anchos (2/1 = 2) y la razón de largos (3/2 = 1,5).',
      aplicar: 'Compara en tu cuaderno: ¿Es 2 igual a 1,5? No.',
      analizar: '¿Por qué la adición altera la escala mientras que la multiplicación la conserva?'
    }
  },
  {
    id: 1013,
    grade: 10,
    questionNumber: 13,
    title: 'Crítica a la división homogénea de pasajeros por el alcalde',
    statement: 'Un reporte del DANE señala que en Colombia 9 áreas metropolitanas movilizan conjuntamente el 51,5 % de todos los pasajeros del país. El alcalde de una de esas 9 ciudades afirma que en su ciudad se transporta exactamente el 5,72 % de los pasajeros del país, porque calculó 51,5 % ÷ 9 = 5,72 %.\n\n¿Por qué el procedimiento del alcalde NO es apropiado?',
    options: [
      { number: 1, letter: 'A', text: 'Porque debió multiplicar 51,5 % por 9.' },
      { number: 2, letter: 'B', text: 'Porque el porcentaje total del país no es 100 %.' },
      { number: 3, letter: 'C', text: 'Porque asume incorrectamente que en las 9 áreas metropolitanas se transporta la misma cantidad exacta de pasajeros, ignorando las diferencias de población.' },
      { number: 4, letter: 'D', text: 'Porque 51,5 dividido 9 no da 5,72.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Argumentación',
    component: 'Aleatorio',
    affirmation: 'Evalúa la validez de inferencias estadísticas y supuestos homogéneos erróneos.',
    evidence: 'Identifica que una media aritmética simple no describe la participación individual de subgrupos desiguales.',
    standard: 'Interpreto analítica y críticamente información estadística.',
    justification: 'Dividir entre 9 asume una distribución perfectamente uniforme entre las 9 áreas metropolitanas. En la realidad, ciudades grandes como Bogotá o Medellín concentran volúmenes de pasajeros mucho mayores que ciudades más pequeñas, por lo que el supuesto de igualdad es inválido.',
    invalidOptionsReasoning: {
      A: 'Multiplicar por 9 generaría un porcentaje mayor a 400%, lo cual es absurdo.',
      B: 'El total de una población siempre representa el 100%.',
      D: 'El cálculo aritmético 51,5 / 9 sí es aproximadamente 5,72, pero el modelo conceptual es erróneo.'
    },
    socraticHints: {
      recordar: '¿Tienen las 9 ciudades la misma cantidad de habitantes y sistemas de transporte?',
      comprender: '¿Qué suposición matemática implícita se hace cuando se divide un total en partes iguales?',
      aplicar: 'Anota en tu cuaderno: "La división simple asume homogeneidad que no existe entre ciudades de diferente tamaño".',
      analizar: '¿Por qué la inferencia del alcalde comete una falacia de distribución equitativa?'
    }
  },
  {
    id: 1014,
    grade: 10,
    questionNumber: 14,
    title: 'Cálculo de lado en triángulo oblicuángulo con Ley del Coseno',
    statement: 'En un triángulo PQR se conocen las medidas: el lado r = 4 cm, el lado q = 2 cm, el ángulo comprendido en el vértice P mide 60°, y se sabe que cos(60°) = 1/2. Aplicando la Ley del Coseno: p² = q² + r² - 2qr·cos(P).\n\n¿Cuál es la longitud del lado opuesto p?',
    options: [
      { number: 1, letter: 'A', text: 'p = 2 cm' },
      { number: 2, letter: 'B', text: 'p = 4 cm' },
      { number: 3, letter: 'C', text: 'p = √8 cm' },
      { number: 4, letter: 'D', text: 'p = √12 cm' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Formulación y ejecución',
    component: 'Espacial-Métrico',
    affirmation: 'Aplica el teorema del coseno para hallar longitudes en triángulos no rectángulos.',
    evidence: 'Sustituye valores numéricos en la expresión p² = q² + r² - 2qr·cos(P) y despeja la raíz cuadrada.',
    standard: 'Uso la ley del seno y del coseno para resolver problemas con triángulos.',
    justification: 'Reemplazando en la Ley del Coseno:\np² = 2² + 4² - 2(2)(4)·cos(60°)\np² = 4 + 16 - 16·(1/2) = 20 - 8 = 12.\nExtrayendo la raíz cuadrada: p = √12 cm (que equivale a 2√3 cm).',
    invalidOptionsReasoning: {
      A: 'Asume p = q = 2 ignorando el teorema.',
      B: 'Asume p = r = 4.',
      C: 'Calcula 20 - 12 = 8 olvidando multiplicar por 1/2.'
    },
    socraticHints: {
      recordar: '¿Cuál es la fórmula del Teorema del Coseno?',
      comprender: 'Calcula: 2² = 4, 4² = 16, y el término 2 × 2 × 4 × 0,5 = 8.',
      aplicar: 'Opera en tu cuaderno: p² = 4 + 16 - 8 = 12 -> p = √12.',
      analizar: '¿Por qué la Ley del Coseno generaliza el Teorema de Pitágoras para cualquier ángulo?'
    }
  },
  {
    id: 1015,
    grade: 10,
    questionNumber: 15,
    title: 'Resolución de ecuación cuadrática para longitud física',
    statement: 'Federico calcula el área de una figura compuesta formada por un cuadrado de lado x y un triángulo adosado, obteniendo la ecuación de área total: x² + (8x / 2) = 45 -> x² + 4x - 45 = 0. Al resolver la ecuación cuadrática obtiene dos soluciones matemáticas: x = -9 y x = 5.\n\nPara responder a la pregunta sobre la medida del lado x de la figura, ¿cuál valor debe elegir Federico?',
    options: [
      { number: 1, letter: 'A', text: 'x = -9, porque es el número con mayor valor absoluto.' },
      { number: 2, letter: 'B', text: 'Ambos valores, x = -9 y x = 5, porque ambos satisfacen la ecuación.' },
      { number: 3, letter: 'C', text: 'x = 45, porque es el área total.' },
      { number: 4, letter: 'D', text: 'x = 5, porque las longitudes geométricas en el espacio real no pueden ser negativas.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Interpreta y restringe el dominio de soluciones de modelos cuadráticos en contextos físicos.',
    evidence: 'Descarta soluciones algebraicas extrañas o negativas al tratarse de medidas de distancia.',
    standard: 'Identifico relaciones entre propiedades algebraicas y contextos reales de medición.',
    justification: 'Aunque algebraicamente tanto x = -9 como x = 5 anulan la ecuación cuadrática ((-9)² + 4(-9) - 45 = 81 - 36 - 45 = 0 y 5² + 4(5) - 45 = 25 + 20 - 45 = 0), una dimensión geométrica de longitud debe ser estrictamente positiva (x > 0). Por tanto, la única medida admisible es x = 5 cm.',
    invalidOptionsReasoning: {
      A: 'Una longitud negativa no existe en el plano euclidiano.',
      B: 'No contextualiza el resultado en el marco geométrico real.',
      C: 'Confunde la longitud de la arista con el área de la superficie.'
    },
    socraticHints: {
      recordar: '¿Puede una mesa o un terreno medir -9 metros de longitud?',
      comprender: '¿Por qué las ecuaciones de segundo grado dan dos raíces pero los problemas de física o geometría exigen x > 0?',
      aplicar: 'Descarta en tu cuaderno la solución negativa: x = -9 (no válida) -> x = 5 (válida).',
      analizar: '¿Por qué la verificación en el contexto real es el paso final de todo modelado matemático?'
    }
  },
  {
    id: 1016,
    grade: 10,
    questionNumber: 16,
    title: 'Equivalencia en el cálculo del 7% de atletas',
    statement: 'En los Juegos Panamericanos participaron 6.000 atletas y el 7 % compitió en natación. Un estadístico sugiere calcular la cantidad de nadadores multiplicando: 0,07 × 6.000.\n\nEl procedimiento sugerido por el estadístico es:',
    options: [
      { number: 1, letter: 'A', text: 'Incorrecto, porque debió multiplicar por 0,7 en lugar de 0,07.' },
      { number: 2, letter: 'B', text: 'Incorrecto, porque debió dividir 6.000 entre 7.' },
      { number: 3, letter: 'C', text: 'Correcto, porque el 7% equivale a multiplicar por 70.' },
      { number: 4, letter: 'D', text: 'Correcto, porque multiplicar por 7 y dividir entre 100 es exactamente equivalente a multiplicar por el decimal 0,07.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Justifica equivalencias entre representaciones porcentuales, fraccionarias y decimales.',
    evidence: 'Verifica que 7% = 7 / 100 = 0,07.',
    standard: 'Utilizo números reales en sus diferentes representaciones.',
    justification: 'Por definición de porcentaje, el 7% de una cantidad representa la razón 7/100, cuyo equivalente decimal exacto es 0,07. Al calcular 0,07 × 6.000 = 420 nadadores, el procedimiento es 100% correcto.',
    invalidOptionsReasoning: {
      A: '0,7 representa el 70%, no el 7%.',
      B: 'Dividir entre 7 no calcula el 7%.',
      C: 'Multiplicar por 70 aumentaría la cantidad a 420.000.'
    },
    socraticHints: {
      recordar: '¿Cómo se convierte un porcentaje a número decimal dividiendo entre 100?',
      comprender: 'Calcula en tu cuaderno: 7 ÷ 100 = 0,07.',
      aplicar: 'Multiplica 0,07 × 6.000 = 420.',
      analizar: '¿Por qué multiplicar por 0,07 es la forma más directa de calcular el 7% en cualquier calculadora?'
    }
  },
  {
    id: 1017,
    grade: 10,
    questionNumber: 17,
    title: 'Cursos extraescolares con mayor cantidad de estudiantes inscritos',
    statement: 'En un colegio se ofrecen cuatro cursos extraescolares para primaria, con cupos y porcentajes de inscripción dados:\n- Deportes: Cupo = 120 | Inscritos = 40 % (120 × 0,40 = 48 estudiantes)\n- Teatro: Cupo = 120 | Inscritos = 55 % (120 × 0,55 = 66 estudiantes)\n- Música: Cupo = 90 | Inscritos = 70 % (90 × 0,70 = 63 estudiantes)\n- Danza: Cupo = 110 | Inscritos = 60 % (110 × 0,60 = 66 estudiantes)\n\n¿En cuáles cursos se inscribió la MAYOR cantidad de estudiantes?',
    options: [
      { number: 1, letter: 'A', text: 'Solo en Música.' },
      { number: 2, letter: 'B', text: 'En Deportes y Teatro.' },
      { number: 3, letter: 'C', text: 'Solo en Danza.' },
      { number: 4, letter: 'D', text: 'En Teatro y Danza (con 66 estudiantes cada uno).' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Interpretación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Compara cantidades absolutas derivadas de porcentajes relativos.',
    evidence: 'Calcula los valores absolutos de cada categoría y determina el valor máximo compartido.',
    standard: 'Interpreto analítica y críticamente información cuantitativa.',
    justification: 'Calculando la cantidad absoluta de estudiantes:\n- Deportes: 120 × 0,40 = 48\n- Teatro: 120 × 0,55 = 66\n- Música: 90 × 0,70 = 63\n- Danza: 110 × 0,60 = 66\nLos cursos con la mayor cantidad son Teatro y Danza, empatados con 66 estudiantes.',
    invalidOptionsReasoning: {
      A: 'Música tiene el mayor porcentaje (70%), pero al tener un cupo menor (90) solo suma 63 estudiantes.',
      B: 'Deportes solo tiene 48 estudiantes.',
      C: 'Danza empata con Teatro en 66 estudiantes.'
    },
    socraticHints: {
      recordar: '¿Por qué un porcentaje más alto no siempre significa más personas si el total base es menor?',
      comprender: 'Calcula la cantidad exacta de estudiantes multiplicando cupo × porcentaje en tu cuaderno.',
      aplicar: 'Compara los 4 totales: 48, 66, 63, 66.',
      analizar: '¿Por qué Teatro y Danza logran exactamente la misma cifra máxima de 66 inscritos?'
    }
  },
  {
    id: 1018,
    grade: 10,
    questionNumber: 18,
    title: 'Inconsistencia en gráfica de ingresos extraescolares',
    statement: 'Un contador elabora una gráfica de barras para representar los ingresos mensuales de los cursos según si el estudiante asiste a 1, 2 o 3 sesiones por semana. La tarifa por sesión es constante ($15.000 por sesión).\n\nEn la gráfica se observa que en algunas barras el ingreso con 2 sesiones aparece menor o igual que con 1 sesión. ¿Cuál es la inconsistencia técnica en la gráfica?',
    options: [
      { number: 1, letter: 'A', text: 'Que los valores están expresados en pesos.' },
      { number: 2, letter: 'B', text: 'Que asistir a 2 o 3 sesiones debe generar necesariamente mayores ingresos que asistir a 1 sesión en todas las actividades, al ser una relación lineal estrictamente creciente con la cantidad de sesiones.' },
      { number: 3, letter: 'C', text: 'Que las barras deberían ser circulares.' },
      { number: 4, letter: 'D', text: 'Que el número de cursos no coincide.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Identifica contradicciones lógicas y fallas de proporcionalidad en representaciones gráficas.',
    evidence: 'Verifica la propiedad de monotonía creciente en funciones de ingreso lineal.',
    standard: 'Justifico o refuto afirmaciones a partir de análisis de gráficas.',
    justification: 'Dado que el cobro por sesión es una tarifa positiva fija, a mayor número de sesiones semanales tomadas por un estudiante, el ingreso total recaudado debe ser estrictamente mayor (1 sesión = $15k, 2 sesiones = $30k, 3 sesiones = $45k). Por tanto, es una inconsistencia que las barras de 2 o 3 sesiones aparezcan menores.',
    invalidOptionsReasoning: {
      A: 'Expresar en pesos es la unidad financiera correcta.',
      C: 'Los diagramas de barras son perfectamente válidos.',
      D: 'La cantidad de cursos está completa.'
    },
    socraticHints: {
      recordar: 'Si una clase cuesta $15.000, ¿cuánto cuestan 2 clases ($30.000) y 3 clases ($45.000)?',
      comprender: '¿Cómo debe comportarse la altura de las barras conforme aumenta el número de sesiones?',
      aplicar: 'Anota en tu cuaderno: "Ingreso = Tarifa unitaria × Sesiones (Función estrictamente creciente)".',
      analizar: '¿Por qué cualquier barra donde 2 sesiones sea menor que 1 sesión representa un error de dibujo?'
    }
  },
  {
    id: 1019,
    grade: 10,
    questionNumber: 19,
    title: 'Condición de paralelismo entre rectas cortadas por transversal',
    statement: 'En una construcción geométrica, la recta transversal PST corta a las rectas PQ y RS. Se forman los ángulos alternos internos ∠3 (en el vértice P) y ∠4 (en el vértice S).\n\n¿Cuál condición es suficiente para garantizar que la recta PQ sea PARALELA a la recta RS?',
    options: [
      { number: 1, letter: 'A', text: 'Que los segmentos PQ y RS tengan la misma longitud.' },
      { number: 2, letter: 'B', text: 'Que el ángulo 3 sea un ángulo recto de 90°.' },
      { number: 3, letter: 'C', text: 'Que la recta PST sea perpendicular a PQ únicamente.' },
      { number: 4, letter: 'D', text: 'Que los ángulos alternos internos 3 y 4 tengan exactamente la misma medida (∠3 = ∠4) y los puntos P, T y S sean colineales sobre la misma recta transversal.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Argumentación',
    component: 'Espacial-Métrico',
    affirmation: 'Aplica los teoremas de rectas paralelas cortadas por una transversal.',
    evidence: 'Justifica el paralelismo mediante la igualdad de ángulos alternos internos.',
    standard: 'Aplico y justifico criterios de paralelismo y perpendicularidad en geometría.',
    justification: 'Por el Teorema Fundamental de Paralelismo: dos rectas cortadas por una transversal son paralelas si y solo si los ángulos alternos internos son congruentes (∠3 = ∠4). Al ser P, T y S colineales en la transversal común, la igualdad de estos ángulos garantiza que PQ || RS.',
    invalidOptionsReasoning: {
      A: 'La longitud de los segmentos no determina la inclinación ni el paralelismo.',
      B: 'Si solo el ángulo 3 es de 90° pero el 4 no, no serán paralelas.',
      C: 'Si PST es perpendicular a PQ pero no se sabe sobre RS, no se garantiza paralelismo.'
    },
    socraticHints: {
      recordar: '¿Qué relación deben tener los ángulos alternos internos para que dos rectas sean paralelas?',
      comprender: 'Si el ángulo 3 mide 50°, ¿cuánto debe medir el ángulo 4?',
      aplicar: 'Enuncia en tu cuaderno: "Rectas cortadas por secante son paralelas si sus ángulos alternos internos son iguales".',
      analizar: '¿Por qué la opción D reúne todas las condiciones euclidianas necesarias y suficientes?'
    }
  },
  {
    id: 1020,
    grade: 10,
    questionNumber: 20,
    title: 'Comportamiento trigonométrico de la distancia KP al variar el ángulo',
    statement: 'En la figura geométrica, un punto K se desplaza sobre el segmento horizontal QT desde Q hacia T. El segmento vertical PQ tiene altura fija h. Para cada posición de K se forma un ángulo de elevación α = ∠PKQ y la distancia desde K hasta P es el segmento KP.\nSabiendo que sen(α) = h / KP, de donde KP = h / sen(α):\n\nAl desplazarse el punto K acercándose a Q, el ángulo α aumenta hacia 90° y sen(α) crece hacia 1, por lo que la distancia KP disminuye desde un valor inicial hasta alcanzar la altura mínima h.\n\n¿Cuál gráfica representa correctamente la longitud del segmento KP en función del ángulo α?',
    options: [
      { number: 1, letter: 'A', text: 'Gráfica A (Línea horizontal constante sin variación)' },
      { number: 2, letter: 'B', text: 'Gráfica B (Curva convexa decreciente que disminuye continuamente a medida que el ángulo α aumenta, alcanzando el valor h cuando α = 90°)' },
      { number: 3, letter: 'C', text: 'Gráfica C (Línea recta creciente que va hacia el infinito)' },
      { number: 4, letter: 'D', text: 'Gráfica D (Parábola con vértice en 45°)' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Interpretación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Analiza el comportamiento de funciones trigonométricas inversas respecto a variables angulares.',
    evidence: 'Identifica la función cosecante/inversa KP(α) = h / sen(α) como una curva decreciente en el primer cuadrante.',
    standard: 'Analizo en representaciones gráficas los comportamientos de cambio de funciones trigonométricas.',
    justification: 'En la función KP(α) = h / sen(α) (la función cosecante multiplicada por h): cuando el ángulo α aumenta en el intervalo (0°, 90°], el denominador sen(α) crece de 0 a 1, lo que produce que el valor total KP disminuya de manera suave y convexa hasta alcanzar su valor mínimo h en α = 90°. Esta curva corresponde exactamente a la Gráfica B.',
    invalidOptionsReasoning: {
      A: 'La distancia KP claramente cambia de tamaño al mover el punto K.',
      C: 'Al acercarse K a Q la distancia se acorta, no crece.',
      D: 'La función cosecante no presenta simetría parabólica en este intervalo.'
    },
    socraticHints: {
      recordar: 'Observa la figura: ¿dónde es más largo el segmento KP: cuando K está lejos a la derecha o cuando K está justo debajo de P?',
      comprender: '¿Qué le pasa al cociente h / sen(α) cuando sen(α) se hace más grande?',
      aplicar: 'Anota en tu cuaderno: "A mayor ángulo α -> Mayor sen(α) -> Menor cociente h / sen(α)".',
      analizar: '¿Por qué la Gráfica B ilustra de manera rigurosa este decrecimiento continuo?'
    }
  }
];
