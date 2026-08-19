// Banco Oficial ICFES Evaluar para Avanzar - Grado 6° (Preguntas 1 a 20 Oficiales)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
import { Question } from '../types';

export const OFFICIAL_GRADE_6: Question[] = [
  {
    id: 601,
    grade: 6,
    questionNumber: 1,
    title: 'Corrección del tiempo en carrera de ciclistas',
    statement: 'En la premiación de una carrera, el reloj marcó 3 minutos de más por un error. Los tiempos mostrados en el podio fueron: Puesto 1 (26 min), Puesto 2 (27 min), Puesto 3 (29 min).\n\n¿Cuál sería la imagen de la premiación si se corrige el error del reloj?',
    options: [
      { number: 1, letter: 'A', text: 'Puesto 1: 26 min, Puesto 2: 23 min, Puesto 3: 24 min' },
      { number: 2, letter: 'B', text: 'Puesto 1: 24 min, Puesto 2: 23 min, Puesto 3: 26 min' },
      { number: 3, letter: 'C', text: 'Puesto 1: 26 min, Puesto 2: 24 min, Puesto 3: 23 min' },
      { number: 4, letter: 'D', text: 'Puesto 1: 23 min, Puesto 2: 24 min, Puesto 3: 26 min' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Reconoce propiedades de números naturales y sus operaciones.',
    evidence: 'Realiza operaciones entre números naturales manteniendo el orden.',
    standard: 'Resuelvo y formulo problemas utilizando operaciones básicas de números naturales.',
    justification: 'Restando los 3 minutos de exceso a cada ciclista: Puesto 1: 26 - 3 = 23 min; Puesto 2: 27 - 3 = 24 min; Puesto 3: 29 - 3 = 26 min (Opción D).',
    invalidOptionsReasoning: {
      A: 'No resta al puesto 1 y desordena los puestos.',
      B: 'Asigna el tiempo del puesto 1 al puesto 2.',
      C: 'Invierte el orden de llegada en el podio.'
    },
    socraticHints: {
      recordar: 'Si el reloj marcó 3 minutos de más, ¿qué operación debes aplicar a cada tiempo?',
      comprender: 'Calcula: 26 - 3 = ?, 27 - 3 = ?, 29 - 3 = ? en tu cuaderno.',
      aplicar: 'Asigna cada tiempo resultante a su posición en el podio: 1.°, 2.° y 3.°. ',
      analizar: '¿Por qué el ciclista en el puesto 1 debe conservar el menor tiempo corregido (23 min)?'
    }
  },
  {
    id: 602,
    grade: 6,
    questionNumber: 2,
    title: 'Unidades de medida para la longitud de cintura',
    statement: 'A una estudiante le tomaron diferentes medidas para confeccionarle un saco nuevo, entre las cuales está la medida de la longitud de la cintura.\n\nLa medida de la longitud de la cintura de la estudiante puede expresarse en:',
    options: [
      { number: 1, letter: 'A', text: 'décadas.' },
      { number: 2, letter: 'B', text: 'centímetros.' },
      { number: 3, letter: 'C', text: 'metros cuadrados.' },
      { number: 4, letter: 'D', text: 'kilogramos.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comunicación, modelación y representación',
    component: 'Espacial-Métrico',
    affirmation: 'Reconoce unidades de medida apropiadas para cada magnitud.',
    evidence: 'Identifica el centímetro como unidad estándar para medir longitudes corporales.',
    standard: 'Identifico relaciones entre distintas unidades utilizadas para medir cantidades de la misma magnitud.',
    justification: 'La cintura es una magnitud de longitud unidimensional. Entre las opciones, los centímetros son la unidad adecuada para medir longitudes.',
    invalidOptionsReasoning: {
      A: 'Décadas es una unidad de tiempo (10 años).',
      C: 'Metros cuadrados mide superficie o área, no longitud lineal.',
      D: 'Kilogramos mide masa o peso.'
    },
    socraticHints: {
      recordar: '¿Qué magnitud física representa el contorno o circunferencia de la cintura?',
      comprender: '¿Cuáles unidades miden longitud, cuáles área, masa o tiempo?',
      aplicar: 'Escribe en tu cuaderno: "Longitud -> metros, centímetros, milímetros".',
      analizar: '¿Por qué para una prenda de vestir usamos cinta métrica en centímetros?'
    }
  },
  {
    id: 603,
    grade: 6,
    questionNumber: 3,
    title: 'Largo de fichas semejantes en rectángulo',
    statement: 'Se construye un rectángulo de 6 cm de largo y 4 cm de ancho, a partir de tres fichas semejantes del mismo tamaño, donde el ancho de cada ficha es 2 cm.\n\n¿Cuál es el largo de las fichas pequeñas?',
    options: [
      { number: 1, letter: 'A', text: '1 cm.' },
      { number: 2, letter: 'B', text: '2 cm.' },
      { number: 3, letter: 'C', text: '3 cm.' },
      { number: 4, letter: 'D', text: '4 cm.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Aplica fórmulas y proporciones en problemas de semejanza de figuras.',
    evidence: 'Calcula dimensiones desconocidas a partir de razones de escala.',
    standard: 'Resuelvo y formulo problemas que involucren relaciones de semejanza.',
    justification: 'Como las fichas son semejantes al rectángulo total de 6×4 (razón 6/4 = 1.5), con ancho 2 cm, su largo debe cumplir: Largo / 2 = 6 / 4 = 1.5 -> Largo = 3 cm.',
    invalidOptionsReasoning: {
      A: '1 cm daría una razón 1/2 = 0.5 distinta de 1.5.',
      B: '2 cm formaría un cuadrado de 2×2 no semejante.',
      D: '4 cm daría una razón 4/2 = 2.'
    },
    socraticHints: {
      recordar: '¿Cuál es la proporción entre largo y ancho en el rectángulo grande (6 a 4)?',
      comprender: 'Simplifica la fracción 6/4 = 3/2.',
      aplicar: 'Si el ancho de la ficha es 2 cm, ¿cuánto debe medir su largo para mantener la proporción 3/2?',
      analizar: '¿Por qué 3 cm es el valor que conserva la forma exacta del rectángulo?'
    }
  },
  {
    id: 604,
    grade: 6,
    questionNumber: 4,
    title: 'Ubicación relativa en el plano urbano',
    statement: 'En el plano de una ciudad con carreras verticales y calles horizontales, la iglesia está en la Carrera 6 con Calle 7 y el hospital en la Carrera 3 con Calle 12.\n\n¿Cuál es la ubicación del hospital respecto a la iglesia?',
    options: [
      { number: 1, letter: 'A', text: '3 carreras hacia el sur y 5 calles hacia el oriente.' },
      { number: 2, letter: 'B', text: '5 carreras hacia el norte y 6 calles hacia el oriente.' },
      { number: 3, letter: 'C', text: '6 carreras hacia el sur y 10 calles hacia el oriente.' },
      { number: 4, letter: 'D', text: '7 carreras hacia el norte y 14 calles hacia el oriente.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comunicación, modelación y representación',
    component: 'Espacial-Métrico',
    affirmation: 'Reconoce la ubicación de puntos en el plano cartesiano y sus desplazamientos.',
    evidence: 'Calcula desplazamientos paralelos en ejes ortogonales y puntos cardinales.',
    standard: 'Identifico características de localización en sistemas cartesianos y geográficos.',
    justification: 'Partiendo de la iglesia (Carrera 6, Calle 7) hacia el hospital (Carrera 3, Calle 12): se disminuyen 3 carreras hacia el sur (6 - 3 = 3) y se avanzan 5 calles hacia el oriente (12 - 7 = 5).',
    invalidOptionsReasoning: {
      B: 'Confunde norte con sur y toma valores absolutos de coordenadas.',
      C: 'Toma la coordenada total en lugar del desplazamiento relativo.',
      D: 'Usa los límites máximos del mapa urbano.'
    },
    socraticHints: {
      recordar: '¿En qué carrera y calle está la iglesia y en cuáles el hospital?',
      comprender: 'Calcula la diferencia de carreras (6 a 3) y de calles (7 a 12).',
      aplicar: 'Anota en tu cuaderno: Carrera 6 -> 3 = 3 carreras al Sur; Calle 7 -> 12 = 5 calles al Oriente.',
      analizar: '¿Por qué este vector de desplazamiento conecta con precisión ambos puntos?'
    }
  },
  {
    id: 605,
    grade: 6,
    questionNumber: 5,
    title: 'Probabilidad de 7/10 en juego de tiro de dardos',
    statement: 'Al lanzar un dardo a un tablero circular se obtienen puntajes. En la zona roja caen los puntajes 100, 60 y 20. Se registran 10 lanzamientos por jugador:\n- Jugador P: 2 en 100, 1 en 60, 2 en 20 (Total rojo = 2+1+2 = 5 de 10)\n- Jugador Q: 2 en 100, 2 en 60, 3 en 20 (Total rojo = 2+2+3 = 7 de 10)\n- Jugador R: 1 en 100, 0 en 60, 1 en 20 (Total rojo = 1+0+1 = 2 de 10)\n\n¿Para cuál jugador la probabilidad empírica de caer en rojo es 7/10?',
    options: [
      { number: 1, letter: 'A', text: 'Los jugadores P y R.' },
      { number: 2, letter: 'B', text: 'Los jugadores Q y R.' },
      { number: 3, letter: 'C', text: 'El jugador Q.' },
      { number: 4, letter: 'D', text: 'El jugador P.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comunicación, modelación y representación',
    component: 'Aleatorio',
    affirmation: 'Interpreta la posibilidad de ocurrencia de eventos a partir de tablas de frecuencia.',
    evidence: 'Obtiene medidas de probabilidad comparando casos favorables y totales.',
    standard: 'Conjeturo acerca del resultado de un experimento aleatorio.',
    justification: 'Para el jugador Q, los aciertos en color rojo suman: 2 (100 pts) + 2 (60 pts) + 3 (20 pts) = 7 aciertos de 10 lanzamientos. Probabilidad = 7/10.',
    invalidOptionsReasoning: {
      A: 'P tiene 5/10 y R tiene 2/10.',
      B: 'R solo tiene 2/10.',
      D: 'P tiene 5/10 (1/2).'
    },
    socraticHints: {
      recordar: '¿Cuáles franjas de puntaje tienen color rojo según el tablero?',
      comprender: 'Suma las frecuencias de 100, 60 y 20 para cada uno de los 3 jugadores.',
      aplicar: 'Verifica en tu cuaderno: Jugador Q -> 2 + 2 + 3 = 7 sobre 10.',
      analizar: '¿Por qué la razón 7/10 corresponde única y exclusivamente al jugador Q?'
    }
  },
  {
    id: 606,
    grade: 6,
    questionNumber: 6,
    title: 'Relación lineal de puntos de atención vs vendedores',
    statement: 'La gráfica cartesiana muestra la cantidad de vendedores que necesita una empresa según los puntos de atención: (2, 4), (3, 6), (5, 10), (8, 16).\n\nPara tener 8 puntos de atención, ¿cuál es la cantidad exacta de vendedores que se necesitan?',
    options: [
      { number: 1, letter: 'A', text: '4' },
      { number: 2, letter: 'B', text: '8' },
      { number: 3, letter: 'C', text: '10' },
      { number: 4, letter: 'D', text: '16' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Reconoce valores en pares ordenados y funciones de proporcionalidad directa.',
    evidence: 'Lee directamente coordenadas en el plano cartesiano.',
    standard: 'Describo y represento situaciones de variación lineal.',
    justification: 'Buscando el valor 8 en el eje horizontal (Puntos de atención), el punto de la recta sube hasta 16 en el eje vertical (Vendedores). La relación es V = 2 × P.',
    invalidOptionsReasoning: {
      A: '4 es el valor para 2 puntos de atención.',
      B: '8 confunde la coordenada X con la coordenada Y.',
      C: '10 es el valor para 5 puntos de atención.'
    },
    socraticHints: {
      recordar: '¿Cuál eje representa los puntos de atención y cuál los vendedores?',
      comprender: 'Ubica el número 8 en el eje horizontal y sube en línea vertical hasta tocar el punto.',
      aplicar: 'Anota la coordenada en tu cuaderno: (8, 16).',
      analizar: '¿Por qué la constante de proporcionalidad k = 16/8 = 2 se cumple para todos los puntos?'
    }
  },
  {
    id: 607,
    grade: 6,
    questionNumber: 7,
    title: 'Pictograma de estudiantes aprobados en Geometría',
    statement: 'En un colegio la nota mínima para aprobar Geometría es 3.0 (escala 0 a 5). El pictograma muestra:\n- Desde 3 hasta menos de 4: 7 figuras\n- Superior o igual a 4: 4 figuras\nCada figura 👤 representa 2 estudiantes.\n\n¿Cuántos estudiantes de grado sexto aprobaron Geometría?',
    options: [
      { number: 1, letter: 'A', text: '9 estudiantes.' },
      { number: 2, letter: 'B', text: '11 estudiantes.' },
      { number: 3, letter: 'C', text: '18 estudiantes.' },
      { number: 4, letter: 'D', text: '22 estudiantes.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Aleatorio',
    affirmation: 'Resuelve problemas reconociendo convenciones en pictogramas y tablas.',
    evidence: 'Calcula frecuencias totales aplicando factores de escala.',
    standard: 'Comparo e interpreto datos provenientes de diversas fuentes.',
    justification: 'Aprueban las notas ≥ 3: 7 figuras + 4 figuras = 11 figuras. Como cada figura vale 2 estudiantes: 11 × 2 = 22 estudiantes aprobados.',
    invalidOptionsReasoning: {
      A: 'Suma las figuras de notas reprobadas (< 3).',
      B: 'Cuenta solo las 11 figuras sin multiplicar por 2.',
      C: 'Olvida una de las categorías aprobadas.'
    },
    socraticHints: {
      recordar: '¿Cuáles categorías corresponden a notas mayores o iguales a 3?',
      comprender: 'Suma el número de iconos de esas dos categorías: 7 + 4 = 11 iconos.',
      aplicar: 'Multiplica por el valor de cada icono: 11 × 2 = 22 estudiantes.',
      analizar: '¿Por qué es indispensable aplicar la convención del pictograma para obtener el valor real?'
    }
  },
  {
    id: 608,
    grade: 6,
    questionNumber: 8,
    title: 'Promedio de almuerzo entre amigos',
    statement: 'María, Juan y Ana fueron a almorzar. Cada uno aportó $10.000 (total $30.000 entre los tres). En la tabla se muestran 4 opciones de precios:\n- Opción 1: $8.000 + $9.000 + $13.000\n- Opción 2: $9.000 + $10.000 + $12.000\n- Opción 3: $10.000 + $10.000 + $11.000\n- Opción 4: $8.000 + $9.000 + $10.000\n\n¿Cuál de las anteriores opciones pidieron María, Juan y Ana?',
    options: [
      { number: 1, letter: 'A', text: 'La 1.' },
      { number: 2, letter: 'B', text: 'La 2.' },
      { number: 3, letter: 'C', text: 'La 3.' },
      { number: 4, letter: 'D', text: 'La 4.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Aleatorio',
    affirmation: 'Reconoce y calcula el promedio de un conjunto de datos.',
    evidence: 'Identifica la combinación cuya suma coincide con el total aportado.',
    standard: 'Uso medidas de tendencia central para interpretar comportamiento de datos.',
    justification: 'Total pagado = 3 amigos × $10.000 = $30.000. Sumando la Opción 1: 8.000 + 9.000 + 13.000 = $30.000 (Promedio = 30.000 / 3 = $10.000).',
    invalidOptionsReasoning: {
      B: 'Opción 2 suma 9.000 + 10.000 + 12.000 = $31.000.',
      C: 'Opción 3 suma 10.000 + 10.000 + 11.000 = $31.000.',
      D: 'Opción 4 suma 8.000 + 9.000 + 10.000 = $27.000.'
    },
    socraticHints: {
      recordar: 'Si 3 personas ponen $10.000 cada una, ¿cuánto dinero tienen en total?',
      comprender: 'Suma los tres precios en cada una de las 4 opciones.',
      aplicar: 'Calcula en tu cuaderno: Opción 1 = 8.000 + 9.000 + 13.000 = 30.000 pesos.',
      analizar: '¿Por qué la Opción 1 es la única que coincide exactamente con el presupuesto reunido?'
    }
  },
  {
    id: 609,
    grade: 6,
    questionNumber: 9,
    title: 'Probabilidad en subconjunto de estados de ánimo',
    statement: 'Al salir del cine se registran: 45 alegres, 15 normales y 30 tristes (Total 90 personas). Se forma un nuevo grupo solo con las personas alegres o tristes (45 + 30 = 75 personas).\n\n¿Cuál es la probabilidad de que al escoger al azar una persona del nuevo grupo esta haya salido alegre?',
    options: [
      { number: 1, letter: 'A', text: 'Ahora es 1/2.' },
      { number: 2, letter: 'B', text: 'Ahora es 2/3.' },
      { number: 3, letter: 'C', text: 'Ahora es 2/5.' },
      { number: 4, letter: 'D', text: 'Ahora es 3/5.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Aleatorio',
    affirmation: 'Calcula la probabilidad de eventos simples tras redefinir el espacio muestral.',
    evidence: 'Determina la fracción irreducible entre casos favorables y el nuevo total.',
    standard: 'Conjeturo acerca del resultado de un experimento aleatorio usando proporcionalidad.',
    justification: 'El nuevo espacio muestral es 45 (alegres) + 30 (tristes) = 75 personas. La probabilidad de alegre es 45/75. Simplificando entre 15: 45÷15 / 75÷15 = 3/5.',
    invalidOptionsReasoning: {
      A: '1/2 era la probabilidad en el grupo original de 90 (45/90).',
      B: '2/3 relaciona 2 categorías sobre 3.',
      C: '2/5 es la probabilidad de sacar una persona triste (30/75 = 2/5).'
    },
    socraticHints: {
      recordar: '¿Cuántas personas componen el NUEVO grupo (alegres + tristes)?',
      comprender: '¿Cuántas de esas 75 personas salieron alegres?',
      aplicar: 'Escribe la fracción 45/75 y simplifícala sacando quinta (9/15) y luego tercera (3/5).',
      analizar: '¿Por qué la probabilidad aumentó de 1/2 (50%) a 3/5 (60%) al eliminar al grupo normal?'
    }
  },
  {
    id: 610,
    grade: 6,
    questionNumber: 10,
    title: 'Rotación secuencial de 45° a la derecha',
    statement: 'Ricardo debe colocar una figura en 4 posiciones teniendo en cuenta que gira siempre 45° hacia la derecha (sentido horario):\n- Posición 1: vertical 0°\n- Posición 2: inclinada 45°\n- Posición 3: horizontal 90°\n\n¿Cuál opción corresponde a la posición 4 (135°)?',
    options: [
      { number: 1, letter: 'A', text: 'Figura inclinada a 135° con vértice derecho hacia abajo.' },
      { number: 2, letter: 'B', text: 'Figura vertical invertida 180°.' },
      { number: 3, letter: 'C', text: 'Figura horizontal 90°.' },
      { number: 4, letter: 'D', text: 'Figura vertical inicial 0°.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional / Geométrico',
    affirmation: 'Reconoce la posición de objetos al ser rotados de acuerdo con un patrón angular.',
    evidence: 'Aplica rotaciones consecutivas de 45° en sentido horario.',
    standard: 'Predigo y comparo resultados de transformaciones rígidas.',
    justification: 'Partiendo de la Posición 3 (90° horizontal), un giro de 45° adicionales a la derecha sitúa la figura a 135°, correspondiente exactamente a la opción A.',
    invalidOptionsReasoning: {
      B: 'Gira 90° de más (180° media vuelta).',
      C: 'Permanece en la posición 3 sin rotar.',
      D: 'Vuelve al inicio sin completar el ciclo.'
    },
    socraticHints: {
      recordar: '¿Cuántos grados gira la figura en cada paso?',
      comprender: 'Si en la posición 3 está horizontal (90°), ¿cuánto es 90° + 45°?',
      aplicar: 'Dibuja en tu cuaderno el reloj y marca los giros: 12:00 -> 1:30 -> 3:00 -> 4:30.',
      analizar: '¿Por qué la opción A es la única con la inclinación exacta de 135°?'
    }
  },
  {
    id: 611,
    grade: 6,
    questionNumber: 11,
    title: 'Probabilidad en ruleta dividida en 3 partes iguales',
    statement: 'Nicolás debe girar una ruleta circular dividida en tres partes iguales. Si la flecha cae en la parte sombreada en verde, Nicolás ganará un premio.\n\n¿Cuál es la probabilidad de que Nicolás gane un premio?',
    options: [
      { number: 1, letter: 'A', text: '1/2' },
      { number: 2, letter: 'B', text: '3/2' },
      { number: 3, letter: 'C', text: '2/3' },
      { number: 4, letter: 'D', text: '1/3' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comunicación, modelación y representación',
    component: 'Aleatorio',
    affirmation: 'Interpreta la naturaleza y posibilidad de ocurrencia de eventos simples en sectores circulares.',
    evidence: 'Expresa la probabilidad como la razón entre el sector favorable y el total de sectores.',
    standard: 'Conjeturo y comparo eventos en experimentos aleatorios.',
    justification: 'La ruleta tiene 3 partes iguales en total y 1 sola de ellas está sombreada para premio. La probabilidad es 1/3.',
    invalidOptionsReasoning: {
      A: '1/2 asume 2 sectores en total.',
      B: '3/2 es una fracción impropia > 1, imposible en probabilidad.',
      C: '2/3 es la probabilidad de NO ganar el premio (sectores blancos).'
    },
    socraticHints: {
      recordar: '¿En cuántas partes iguales está dividida la ruleta completa?',
      comprender: '¿Cuántas partes sombreadas dan premio?',
      aplicar: 'Escribe en tu cuaderno: P(Premio) = 1 parte sombreada / 3 partes totales = 1/3.',
      analizar: '¿Por qué la suma de ganar (1/3) y no ganar (2/3) da exactamente 1?'
    }
  },
  {
    id: 612,
    grade: 6,
    questionNumber: 12,
    title: 'Consumo de combustible de la nave espacial Hope',
    statement: 'Para una expedición a la Luna, se calcula que la nave Hope gasta 100 litros de combustible en 2 días de viaje. Si la nave tiene en el tanque 400 litros de combustible, ¿para cuántos días de viaje a la Luna le alcanza?',
    options: [
      { number: 1, letter: 'A', text: '20' },
      { number: 2, letter: 'B', text: '10' },
      { number: 3, letter: 'C', text: '8' },
      { number: 4, letter: 'D', text: '4' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas aditivos, multiplicativos y de proporción.',
    evidence: 'Calcula factores de proporcionalidad directa en situaciones de viaje.',
    standard: 'Formulo y resuelvo problemas en situaciones multiplicativas y de proporción.',
    justification: 'La nave gasta 100 L en 2 días, lo que equivale a 50 L por día (o 2 días cada 100 L). Con 400 L alcanza para: 400 × 2 ÷ 100 = 8 días.',
    invalidOptionsReasoning: {
      A: 'Multiplica 10 × 2 = 20 sin sustento.',
      B: 'Plantea una proporción errónea con 500 L.',
      D: 'Divide 400 / 100 = 4 olvidando multiplicar por los 2 días que dura cada 100 L.'
    },
    socraticHints: {
      recordar: '¿Cuántos paquetes de 100 litros hay en 400 litros? (400 ÷ 100 = 4).',
      comprender: 'Si cada paquete de 100 litros rinde para 2 días, ¿cuánto rinden 4 paquetes?',
      aplicar: 'Calcula en tu cuaderno: 4 × 2 días = 8 días.',
      analizar: '¿Por qué 400 L rinden exactamente 4 veces más que 100 L?'
    }
  },
  {
    id: 613,
    grade: 6,
    questionNumber: 13,
    title: 'Pictograma de entradas de cinema vendidas',
    statement: 'La figura muestra las entradas vendidas en un cinema. Cada icono 🎟️ CINE representa 3 entradas:\n- Lunes: 4 iconos\n- Martes: 5 iconos\n- Miércoles: 5 iconos\n- Jueves: 2 iconos\n\n¿Cuál tabla muestra la cantidad de entradas vendidas en cada uno de los 4 días?',
    options: [
      { number: 1, letter: 'A', text: 'Tabla A (Lunes 4, Martes 4, Miércoles 3, Jueves 3)' },
      { number: 2, letter: 'B', text: 'Tabla B (Lunes 12, Martes 15, Miércoles 15, Jueves 6)' },
      { number: 3, letter: 'C', text: 'Tabla C (Lunes 12, Martes 12, Miércoles 9, Jueves 9)' },
      { number: 4, letter: 'D', text: 'Tabla D (Lunes 3, Martes 4, Miércoles 4, Jueves 2)' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Determina similitudes y equivalencias en distintas representaciones de datos.',
    evidence: 'Traduce un pictograma con escala ×3 a una tabla numérica de frecuencias.',
    standard: 'Reconozco la relación entre un conjunto de datos y su representación.',
    justification: 'Multiplicando los iconos de cada día por 3:\n- Lunes: 4 × 3 = 12 entradas\n- Martes: 5 × 3 = 15 entradas\n- Miércoles: 5 × 3 = 15 entradas\n- Jueves: 2 × 3 = 6 entradas. Corresponde a la tabla B.',
    invalidOptionsReasoning: {
      A: 'Cuenta verticalmente iconos.',
      C: 'Modifica los valores de martes y miércoles.',
      D: 'Muestra los iconos sin multiplicar por la convención (3).'
    },
    socraticHints: {
      recordar: '¿Cuánto vale cada boleto dibujado en el pictograma?',
      comprender: 'Multiplica por 3 cada día: Lunes (4×3), Martes (5×3), Miércoles (5×3), Jueves (2×3).',
      aplicar: 'Anota en tu cuaderno: Lunes = 12, Martes = 15, Miércoles = 15, Jueves = 6.',
      analizar: '¿Por qué la tabla B es la única fiel al pictograma?'
    }
  },
  {
    id: 614,
    grade: 6,
    questionNumber: 14,
    title: 'Estuche congruente para la llave del tesoro',
    statement: 'Un cazador de tesoros encontró una llave antigua. Debe guardarla en un estuche que tenga exactamente su misma forma y tamaño (sin que le sobre o falte espacio).\n\n¿En cuál de los siguientes estuches se puede guardar la llave?',
    options: [
      { number: 1, letter: 'A', text: 'Estuche A (coincidencia exacta en longitud, dientes y anillo)' },
      { number: 2, letter: 'B', text: 'Estuche B (anillo más ancho y dientes alargados)' },
      { number: 3, letter: 'C', text: 'Estuche C (vástago más corto)' },
      { number: 4, letter: 'D', text: 'Estuche D (dientes asimétricos desfasados)' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Razonamiento y argumentación',
    component: 'Espacial-Métrico',
    affirmation: 'Caracteriza las condiciones de congruencia geométrica entre formas.',
    evidence: 'Identifica la figura con idéntica forma y dimensiones milimétricas.',
    standard: 'Resuelvo y formulo problemas que involucren relaciones de congruencia.',
    justification: 'Al superponer la llave sobre el estuche A, todas las partes (anillo circular, vástago recto y dientes de la cerradura) coinciden en forma y escala 1:1.',
    invalidOptionsReasoning: {
      B: 'El estuche es más grande y le sobra espacio.',
      C: 'El estuche es más corto y no cabe la llave.',
      D: 'La forma de los dientes no encaja en la cerradura.'
    },
    socraticHints: {
      recordar: '¿Qué condiciones exige la palabra "congruente" en geometría plana?',
      comprender: 'Compara la longitud del vástago y el tamaño del anillo circular en cada estuche.',
      aplicar: 'Dibuja la silueta de la llave en tu cuaderno y compárala con el estuche A.',
      analizar: '¿Por qué el estuche A es el único con dimensiones idénticas?'
    }
  },
  {
    id: 615,
    grade: 6,
    questionNumber: 15,
    title: 'Representación de la fracción 3/16 en un cuadrado',
    statement: 'Juan sombreó exactamente 3/16 de un cuadrado dividido en una cuadrícula de 4 × 4 (16 cuadritos iguales en total).\n\n¿En cuál opción se representa correctamente la parte que sombreó Juan?',
    options: [
      { number: 1, letter: 'A', text: 'Cuadrado con 4 cuadritos sombreados (4/16).' },
      { number: 2, letter: 'B', text: 'Cuadrado con exactamente 3 cuadritos sombreados (3/16).' },
      { number: 3, letter: 'C', text: 'Cuadrado con 6 cuadritos sombreados (6/16).' },
      { number: 4, letter: 'D', text: 'Cuadrado con 5 cuadritos sombreados (5/16).' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Reconoce e interpreta el significado de números racionales en forma de fracción.',
    evidence: 'Representa fracciones parte-todo en áreas divididas en partes congruentes.',
    standard: 'Utilizo números racionales en sus distintas expresiones para resolver problemas.',
    justification: 'El cuadrado total está dividido en 16 cuadritos iguales (denominador = 16). La fracción 3/16 exige sombrear exactamente 3 de esos 16 cuadritos (opción B).',
    invalidOptionsReasoning: {
      A: 'Sombrea 4 cuadritos (4/16 = 1/4).',
      C: 'Sombrea 6 cuadritos (6/16 = 3/8).',
      D: 'Sombrea 5 cuadritos (5/16).'
    },
    socraticHints: {
      recordar: '¿Qué indica el numerador (3) y qué indica el denominador (16)?',
      comprender: 'Cuenta los cuadritos azules en cada figura de las opciones.',
      aplicar: 'Dibuja en tu cuaderno la cuadrícula 4x4 y colorea 3 cuadritos.',
      analizar: '¿Por qué la opción B cumple exactamente con 3 partes sombreadas de 16 totales?'
    }
  },
  {
    id: 616,
    grade: 6,
    questionNumber: 16,
    title: 'Precio de 7 botellas de jugo en la tienda',
    statement: 'En una tienda se observa que 4 botellas de jugo cuestan $2.800.\n\n¿Cuánto se debería pagar por 7 botellas de jugo iguales a las de la figura?',
    options: [
      { number: 1, letter: 'A', text: '$3.500' },
      { number: 2, letter: 'B', text: '$4.900' },
      { number: 3, letter: 'C', text: '$16.000' },
      { number: 4, letter: 'D', text: '$19.600' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Calcula factores en situaciones de proporcionalidad directa.',
    evidence: 'Halla el precio unitario y calcula el valor total para una nueva cantidad.',
    standard: 'Formulo y resuelvo problemas en situaciones multiplicativas.',
    justification: 'Precio de 1 botella = $2.800 ÷ 4 = $700. Por 7 botellas se paga: 7 × $700 = $4.900 pesos (o regla de tres: 7 × 2.800 / 4 = 4.900).',
    invalidOptionsReasoning: {
      A: 'Suma 700 + 2.800 = 3.500 (costo de 5 botellas).',
      C: 'Multiplica valores incorrectos.',
      D: 'Multiplica 7 × 2.800 = 19.600 sin dividir entre 4.'
    },
    socraticHints: {
      recordar: 'Si 4 botellas valen $2.800, ¿cuánto cuesta 1 botella?',
      comprender: 'Divide en tu cuaderno: 2.800 ÷ 4 = 700 pesos.',
      aplicar: 'Multiplica 7 botellas × 700 pesos/botella = ?',
      analizar: '¿Por qué $4.900 mantiene constante la razón de precio unitario?'
    }
  },
  {
    id: 617,
    grade: 6,
    questionNumber: 17,
    title: 'Pieza para completar el cohete simétrico',
    statement: 'Jorge quiere armar la figura 1 (un cohete/casa con punta triangular cóncava). Ha ubicado dos fichas como se observa en la figura 2 y le falta la parte superior.\n\n¿Qué ficha le hace falta para completar la figura?',
    options: [
      { number: 1, letter: 'A', text: 'Ficha A (punta triangular simétrica de base cóncava)' },
      { number: 2, letter: 'B', text: 'Ficha B (rombo regular)' },
      { number: 3, letter: 'C', text: 'Ficha C (punta cóncava ensanchada)' },
      { number: 4, letter: 'D', text: 'Ficha D (triángulo plano)' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Razonamiento y argumentación',
    component: 'Espacial-Métrico',
    affirmation: 'Caracteriza las condiciones de congruencia en composición de figuras.',
    evidence: 'Determina la figura congruente exacta para completar un polígono compuesto.',
    standard: 'Resuelvo y formulo problemas de congruencia usando representaciones visuales.',
    justification: 'La ficha A coincide milimétricamente en base y ángulo cóncavo superior con el espacio restante de la figura 2 para formar la figura 1.',
    invalidOptionsReasoning: {
      B: 'El rombo sobresale de los bordes.',
      C: 'Tiene una curvatura y anchura no coincidentes.',
      D: 'El triángulo plano deja huecos en los lados oblicuos.'
    },
    socraticHints: {
      recordar: 'Compara la Figura 1 completa con la Figura 2 incompleta.',
      comprender: '¿Qué contorno tiene exactamente el espacio en blanco de arriba?',
      aplicar: 'Dibuja la pieza faltante en tu cuaderno y compárala con la opción A.',
      analizar: '¿Por qué la opción A encaja perfectamente sin dejar vacíos ni sobreponerse?'
    }
  },
  {
    id: 618,
    grade: 6,
    questionNumber: 18,
    title: 'Fichas de 1 × 3 para armar una superficie',
    statement: 'Usando fichas de 1 × 3 (3 cuadritos cada una) que se pueden rotar, Eduardo armó una figura simétrica que contiene un total de 21 cuadritos en la cuadrícula.\n\n¿Cuántas fichas necesitó Eduardo para armar la figura sin que se sobrepongan?',
    options: [
      { number: 1, letter: 'A', text: '21' },
      { number: 2, letter: 'B', text: '10' },
      { number: 3, letter: 'C', text: '8' },
      { number: 4, letter: 'D', text: '7' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Halla áreas de superficies usando patrones o cubrimientos.',
    evidence: 'Calcula el número de piezas dividiendo el área total entre el área unitaria.',
    standard: 'Calculo áreas a través de composición y descomposición.',
    justification: 'El área total de la figura es de 21 cuadritos. Como cada ficha cubre exactamente 3 cuadritos, se necesitan: 21 ÷ 3 = 7 fichas.',
    invalidOptionsReasoning: {
      A: '21 es el número de cuadritos unitarios, no de fichas de 3.',
      B: '10 fichas cubrirían 30 cuadritos.',
      C: '8 fichas cubrirían 24 cuadritos.'
    },
    socraticHints: {
      recordar: 'Cuenta cuántos cuadritos tiene la figura completa (21) y cuántos tiene cada ficha (3).',
      comprender: '¿Qué operación permite saber cuántos grupos de 3 caben en 21?',
      aplicar: 'Divide en tu cuaderno: 21 ÷ 3 = 7 fichas.',
      analizar: '¿Por qué 7 fichas de 3 cuadritos cubren exactamente los 21 cuadritos sin sobreponerse?'
    }
  },
  {
    id: 619,
    grade: 6,
    questionNumber: 19,
    title: 'Total de felinos en el zoológico',
    statement: 'En un zoológico hay tres especies de felinos: 65 tigres, 20 pumas y 16 leones.\n\n¿Cuántos felinos hay en total en el zoológico?',
    options: [
      { number: 1, letter: 'A', text: '91 felinos.' },
      { number: 2, letter: 'B', text: '195 felinos.' },
      { number: 3, letter: 'C', text: '110 felinos.' },
      { number: 4, letter: 'D', text: '101 felinos.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Reconoce una situación aditiva y calcula el total de composición.',
    evidence: 'Aplica el algoritmo de suma llevando decenas.',
    standard: 'Formulo y resuelvo problemas aditivos con números naturales.',
    justification: 'Sumando los tres grupos: 65 + 20 + 16 = 101 felinos (5+0+6=11 unidades, llevo 1 decena; 1+6+2+1=10 decenas -> 101).',
    invalidOptionsReasoning: {
      A: 'Olvida sumar la decena que se lleva (65+20+16 = 91).',
      B: 'Multiplica 65 × 3 = 195.',
      C: 'Redondea erróneamente a 110.'
    },
    socraticHints: {
      recordar: 'Alinea los tres números verticalmente en tu cuaderno: 65, 20 y 16.',
      comprender: 'Suma las unidades: 5 + 0 + 6 = 11 (escribes 1 y llevas 1 a las decenas).',
      aplicar: 'Suma las decenas: 1 (llevado) + 6 + 2 + 1 = 10. Número final = 101.',
      analizar: '¿Por qué 101 es el conteo exacto de los felinos del zoológico?'
    }
  },
  {
    id: 620,
    grade: 6,
    questionNumber: 20,
    title: 'Repartición equivalente de 8 tajadas de jamón',
    statement: 'Alejandro utiliza 8 tajadas de jamón para hacer 2 sándwiches, cada uno con 4 tajadas de jamón (2 × 4 = 8).\n\n¿De qué otra manera puede repartir las 8 tajadas de jamón para hacer sándwiches iguales?',
    options: [
      { number: 1, letter: 'A', text: 'Haciendo 8 sándwiches con 4 tajadas de jamón cada uno.' },
      { number: 2, letter: 'B', text: 'Haciendo 6 sándwiches con 4 tajadas de jamón cada uno.' },
      { number: 3, letter: 'C', text: 'Haciendo 4 sándwiches con 2 tajadas de jamón cada uno.' },
      { number: 4, letter: 'D', text: 'Haciendo 2 sándwiches con 2 tajadas de jamón cada uno.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Determina equivalencias entre modelos multiplicativos y factores de 8.',
    evidence: 'Identifica pares de factores (4 × 2 = 8) equivalentes a 2 × 4 = 8.',
    standard: 'Justifico el uso de representaciones y procedimientos en situaciones multiplicativas.',
    justification: 'Los divisores y factores de 8 son: 1×8, 2×4 y 4×2. La otra forma equivalente es hacer 4 sándwiches de 2 tajadas cada uno: 4 × 2 = 8 tajadas.',
    invalidOptionsReasoning: {
      A: '8 sándwiches de 4 tajadas requerirían 8 × 4 = 32 tajadas.',
      B: '6 sándwiches de 4 requerirían 24 tajadas.',
      D: '2 sándwiches de 2 solo usarían 4 tajadas, sobrando la mitad.'
    },
    socraticHints: {
      recordar: '¿Cuántas tajadas de jamón tiene Alejandro en total (8)?',
      comprender: '¿Cuáles dos números multiplicados dan 8 además de 2 × 4?',
      aplicar: 'Escribe en tu cuaderno: 4 sándwiches × 2 tajadas = 8 tajadas.',
      analizar: '¿Por qué la propiedad conmutativa de la multiplicación (2×4 = 4×2 = 8) asegura la igualdad?'
    }
  }
];
