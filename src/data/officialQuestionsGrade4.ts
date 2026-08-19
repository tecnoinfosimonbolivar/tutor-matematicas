// Banco Oficial ICFES Evaluar para Avanzar - Grado 4° (Preguntas 1 a 20 Oficiales)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
import { Question } from '../types';

export const OFFICIAL_GRADE_4: Question[] = [
  {
    id: 401,
    grade: 4,
    questionNumber: 1,
    title: 'Lectura y escritura de números naturales',
    statement: 'Johan va a visitar a su amigo que vive en la casa trescientos veinte.\n\n¿Cuál de las siguientes es la casa del amigo de Johan?',
    options: [
      { number: 1, letter: 'A', text: '30020' },
      { number: 2, letter: 'B', text: '320' },
      { number: 3, letter: 'C', text: '32' },
      { number: 4, letter: 'D', text: '3200' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Reconoce el significado, uso y equivalencia de números naturales en el sistema decimal.',
    evidence: 'Asigna códigos numéricos en sistema decimal a expresiones textuales respetando el valor posicional.',
    standard: 'Describo, comparo y cuantifico situaciones con números en diferentes contextos.',
    justification: 'Trescientos equivale a 3 centenas (300) y veinte a 2 decenas (20). Al componer el número se obtiene 320.',
    invalidOptionsReasoning: {
      A: 'Escribe 300 y 20 de forma adyacente generando 30.020.',
      C: 'Omite el cero de las unidades escribiendo 32.',
      D: 'Agrega un cero adicional generando 3.200 (tres mil doscientos).'
    },
    socraticHints: {
      recordar: '¿Cuántas centenas representa la palabra "trescientos"?',
      comprender: '¿Cuántas decenas y unidades hay en el número "veinte"?',
      aplicar: 'Construye en tu cuaderno la tabla de posición: Centena (3), Decena (2), Unidad (0).',
      analizar: '¿Por qué 320 es la representación posicional exacta del número textual?'
    }
  },
  {
    id: 402,
    grade: 4,
    questionNumber: 2,
    title: 'Patrón en secuencia triangular de puntos',
    statement: 'Observa la siguiente secuencia de puntos:\n- Primera posición: 1 punto\n- Segunda posición: 3 puntos (1 + 2)\n- Tercera posición: 6 puntos (1 + 2 + 3)\n- Cuarta posición: 10 puntos (1 + 2 + 3 + 4)\n\nSi se sigue el mismo patrón, ¿cuál es la cantidad de puntos que habrá en la quinta posición?',
    options: [
      { number: 1, letter: 'A', text: '10' },
      { number: 2, letter: 'B', text: '15' },
      { number: 3, letter: 'C', text: '20' },
      { number: 4, letter: 'D', text: '25' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Descubre regularidades de las secuencias numéricas y patrones de variación.',
    evidence: 'Describe regularidades en secuencias y calcula el término siguiente.',
    standard: 'Predigo patrones de variación en una secuencia numérica o gráfica.',
    justification: 'En cada posición n se suman n puntos al término anterior: en la quinta posición se suman 5 puntos a la cuarta posición: 10 + 5 = 15 puntos.',
    invalidOptionsReasoning: {
      A: '10 es la cantidad de puntos de la cuarta posición.',
      C: 'Duplica 10 asumiendo un patrón multiplicativo erróneo.',
      D: 'Calcula 5 × 5 = 25 como si fuera un arreglo cuadrado.'
    },
    socraticHints: {
      recordar: '¿Cuántos puntos se agregaron en cada fila sucesiva?',
      comprender: 'El patrón de aumento es: +2, +3, +4... ¿Cuánto debes sumar para la fila 5?',
      aplicar: 'Escribe en tu cuaderno: 10 + 5 = 15 (Suma de números triangulares: 1+2+3+4+5).',
      analizar: '¿Por qué la figura resultante forma una pirámide de 15 puntos distribuidos en 5 filas?'
    }
  },
  {
    id: 403,
    grade: 4,
    questionNumber: 3,
    title: 'Animal más frecuente en la tabla de cuento',
    statement: 'La tabla muestra el número de veces que aparece cada animal en un cuento:\n- León: 3\n- Gato: 6\n- Conejo: 5\n- Elefante: 11\n\nLuis se va a disfrazar del animal que más veces apareció en el cuento. ¿De qué se va a disfrazar Luis?',
    options: [
      { number: 1, letter: 'A', text: 'León.' },
      { number: 2, letter: 'B', text: 'Gato.' },
      { number: 3, letter: 'C', text: 'Conejo.' },
      { number: 4, letter: 'D', text: 'Elefante.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Aleatorio',
    affirmation: 'Resuelve problemas que requieran el uso de frecuencias de datos representados en tablas.',
    evidence: 'Usa la moda o máxima frecuencia para solucionar situaciones cotidianas.',
    standard: 'Interpreto información presentada en tablas y gráficos estadísticos.',
    justification: 'El elefante tiene 11 apariciones, que es el mayor registro en la tabla de frecuencias (la moda estadística). Por tanto, Luis se disfrazará de elefante.',
    invalidOptionsReasoning: {
      A: 'El león aparece de primero en la tabla, pero solo tiene 3 apariciones.',
      B: 'El gato tiene 6 apariciones.',
      C: 'El conejo tiene 5 apariciones.'
    },
    socraticHints: {
      recordar: '¿Cuál es el valor numérico más alto en la columna de cantidad de apariciones?',
      comprender: '¿A cuál animal corresponde el valor 11?',
      aplicar: 'Anota en tu cuaderno: "Elefante = 11 apariciones (Frecuencia máxima o Moda)".',
      analizar: '¿Por qué la posición en la que está escrito un dato no determina su frecuencia?'
    }
  },
  {
    id: 404,
    grade: 4,
    questionNumber: 4,
    title: 'Evento imposible en la caja de implementos deportivos',
    statement: 'Efraín está en clase de Deportes y encuentra una caja con los siguientes elementos: balones de voleibol, balones de fútbol, balones de baloncesto, un balón de fútbol americano y bates de béisbol.\n\n¿Cuál de los siguientes elementos es IMPOSIBLE que pueda sacar Efraín de la caja?',
    options: [
      { number: 1, letter: 'A', text: 'Balón de fútbol.' },
      { number: 2, letter: 'B', text: 'Cronómetro.' },
      { number: 3, letter: 'C', text: 'Balón de fútbol americano.' },
      { number: 4, letter: 'D', text: 'Balón de baloncesto.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Explica la naturaleza de los eventos posibles, imposibles o seguros.',
    evidence: 'Determina cuándo un evento es imposible en un experimento aleatorio.',
    standard: 'Conjeturo y pongo a prueba predicciones sobre eventos cotidianos.',
    justification: 'El cronómetro es un artículo deportivo, pero NO se encuentra dentro de la caja. Por tanto, es imposible sacarlo al azar (probabilidad 0).',
    invalidOptionsReasoning: {
      A: 'El balón de fútbol sí está en la caja (evento posible).',
      C: 'El balón de fútbol americano sí está en la caja (evento posible).',
      D: 'El balón de baloncesto sí está en la caja (evento posible).'
    },
    socraticHints: {
      recordar: 'Haz un inventario de todos los objetos visibles dentro de la caja de deportes.',
      comprender: '¿Aparece algún cronómetro dibujado dentro de la caja?',
      aplicar: 'Escribe en tu cuaderno: "Evento Imposible = aquel elemento que no pertenece al espacio muestral".',
      analizar: '¿Por qué aunque el cronómetro sea deportivo, no se puede extraer de esa caja?'
    }
  },
  {
    id: 405,
    grade: 4,
    questionNumber: 5,
    title: 'Diagrama de barras de bombillos en casa',
    statement: 'Paola, Lorena y Juliana registraron en la tabla el número de bombillos que tienen en su casa:\n- Paola: 1 bombillo\n- Lorena: 10 bombillos\n- Juliana: 8 bombillos\n\n¿Cuál de las siguientes gráficas muestra el número de bombillos que tiene cada una en su casa?',
    options: [
      { number: 1, letter: 'A', text: 'Gráfica A (Paola 9, Lorena 2, Juliana 8)' },
      { number: 2, letter: 'B', text: 'Gráfica B (Paola 6, Lorena 6, Juliana 6)' },
      { number: 3, letter: 'C', text: 'Gráfica C (Paola 1, Lorena 10, Juliana 8)' },
      { number: 4, letter: 'D', text: 'Gráfica D (Paola 10, Lorena 8, Juliana 1)' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Aleatorio',
    affirmation: 'Resuelve problemas que requieran el uso de frecuencias de datos en tablas y gráficas.',
    evidence: 'Representa en diagrama de barras un conjunto de datos presentado en tabla de frecuencias.',
    standard: 'Represento datos usando tablas y gráficas de barras.',
    justification: 'La gráfica C representa con total exactitud las alturas de las barras: Paola llega al nivel 1, Lorena al nivel 10 y Juliana al nivel 8.',
    invalidOptionsReasoning: {
      A: 'Intercambia los datos de Paola y Lorena.',
      B: 'Iguala todas las barras a 6 (promedio no solicitado).',
      D: 'Ordena de mayor a menor pero cambia las personas asociadas.'
    },
    socraticHints: {
      recordar: '¿Cuántos bombillos tiene Paola, cuántos Lorena y cuántos Juliana?',
      comprender: 'En el eje vertical (Y), verifica la altura de cada barra con su nombre.',
      aplicar: 'Traza en tu cuaderno las tres barras: Paola (altura 1), Lorena (altura 10), Juliana (altura 8).',
      analizar: '¿Por qué la gráfica C es la única que mantiene la correspondencia exacta?'
    }
  },
  {
    id: 406,
    grade: 4,
    questionNumber: 6,
    title: 'Representación simbólica de conteo de flores',
    statement: 'Mariana está contando flores. Cada vez que cuenta 1 flor, la representa con un círculo verde: 🟢 = 1 flor. Y cuando ha contado 5 flores, las representa con un triángulo morado: 🟣▲ = 5 flores.\n\nSi ella solo usa estas dos representaciones, ¿cuál de las siguientes representaciones corresponde a 7 flores?',
    options: [
      { number: 1, letter: 'A', text: '3 círculos verdes (🟢🟢🟢)' },
      { number: 2, letter: 'B', text: '3 triángulos morados (▲▲▲)' },
      { number: 3, letter: 'C', text: '1 triángulo morado y 2 círculos verdes (▲🟢🟢)' },
      { number: 4, letter: 'D', text: '2 triángulos morados y 1 círculo verde (▲▲🟢)' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Reconoce la codificación numérica y el valor de símbolos en sistemas aditivos.',
    evidence: 'Relaciona un número con una representación pictórica aditiva de base 5.',
    standard: 'Describo y represento cantidades con diversas representaciones simbólicas.',
    justification: 'Descomponiendo 7 en grupos de 5 y unidades: 7 = 5 + 1 + 1. Corresponde a 1 triángulo morado (5) y 2 círculos verdes (1+1).',
    invalidOptionsReasoning: {
      A: 'Representa solo 1 + 1 + 1 = 3 flores.',
      B: 'Representa 5 + 5 + 5 = 15 flores.',
      D: 'Representa 5 + 5 + 1 = 11 flores.'
    },
    socraticHints: {
      recordar: '¿Cuánto vale cada triángulo morado y cuánto cada círculo verde?',
      comprender: '¿Cómo descompones el número 7 usando un grupo de 5 y unidades sueltas?',
      aplicar: 'Calcula en tu cuaderno: 5 (▲) + 1 (🟢) + 1 (🟢) = 7.',
      analizar: '¿Por qué 1 triángulo y 2 círculos suman exactamente 7 flores?'
    }
  },
  {
    id: 407,
    grade: 4,
    questionNumber: 7,
    title: 'Libros leídos en varias semanas',
    statement: 'Cada semana, Ana lee 2 libros de la biblioteca del colegio.\n\n¿Cuántos libros lee Ana en 5 semanas?',
    options: [
      { number: 1, letter: 'A', text: '2 libros.' },
      { number: 2, letter: 'B', text: '5 libros.' },
      { number: 3, letter: 'C', text: '10 libros.' },
      { number: 4, letter: 'D', text: '25 libros.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve situaciones multiplicativas en diferentes contextos.',
    evidence: 'Usa estrategias multiplicativas directas para calcular totales.',
    standard: 'Resuelvo y formulo problemas de proporcionalidad directa.',
    justification: 'Si lee 2 libros por semana durante 5 semanas, el total es 2 × 5 = 10 libros (o 2+2+2+2+2=10).',
    invalidOptionsReasoning: {
      A: '2 libros es lo que lee en una sola semana.',
      B: '5 es el número de semanas transcurridas.',
      D: 'Multiplica 5 × 5 = 25 sin considerar la tasa de 2 libros semanales.'
    },
    socraticHints: {
      recordar: '¿Cuántos libros lee en la semana 1, semana 2, semana 3, semana 4 y semana 5?',
      comprender: '¿Qué operación resume sumar 5 veces el número 2?',
      aplicar: 'Multiplica en tu cuaderno: 5 semanas × 2 libros/semana = 10 libros.',
      analizar: '¿Por qué la multiplicación de la tasa semanal por el tiempo da el total acumulado?'
    }
  },
  {
    id: 408,
    grade: 4,
    questionNumber: 8,
    title: 'Medición de área con patrones de recubrimiento',
    statement: 'Luisa está midiendo la superficie de 3 hojas:\n- Hoja 1: rectángulo de 3 cm²\n- Hoja 2: cuadrado de 4 cm² (2 cm × 2 cm)\n- Hoja 3: cuadrícula grande que se puede cubrir exactamente con 6 hojas tipo 2 y 3 hojas tipo 1.\n\n¿Cuál es la medida de la superficie de la hoja 3?',
    options: [
      { number: 1, letter: 'A', text: '5 cm²' },
      { number: 2, letter: 'B', text: '10 cm²' },
      { number: 3, letter: 'C', text: '18 cm²' },
      { number: 4, letter: 'D', text: '30 cm²' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Resuelve problemas de medición que requieran el uso de patrones de área.',
    evidence: 'Calcula áreas de figuras regulares utilizando composición de recubrimientos.',
    standard: 'Construyo y descompongo figuras y sólidos a partir de condiciones dadas.',
    justification: 'Superficie Hoja 3 = (6 hojas tipo 2 × 4 cm²) + (3 hojas tipo 1 × 2 cm² / baldosas equivalentes) = 24 + 6 = 30 cm².',
    invalidOptionsReasoning: {
      A: '5 cm es solo el ancho de una dimensión de la cuadrícula.',
      B: 'Suma las cantidades de hojas sin multiplicar por su área respectiva (6 + 4 = 10).',
      C: 'Calcula solo una parte del área interior.'
    },
    socraticHints: {
      recordar: '¿Cuánto mide el área de una hoja tipo 2 y cuánto la de tipo 1?',
      comprender: '¿Cómo calculas el área total si juntas 6 hojas de 4 cm² y 3 hojas de 2 cm²?',
      aplicar: 'Realiza en tu cuaderno: (6 × 4) + (3 × 2) = 24 + 6 = 30 cm².',
      analizar: '¿Por qué la propiedad aditiva del área nos permite sumar las superficies de las piezas?'
    }
  },
  {
    id: 409,
    grade: 4,
    questionNumber: 9,
    title: 'Comparación de probabilidad con frutas en bolsa',
    statement: 'Daniela tiene las siguientes frutas en una bolsa: 1 ciruela, 4 peras y 6 naranjas (total 11 frutas). Las revuelve y saca una sin mirar.\n\n¿Cuál de las siguientes afirmaciones es VERDADERA?',
    options: [
      { number: 1, letter: 'A', text: 'Es más posible sacar una ciruela que sacar una pera.' },
      { number: 2, letter: 'B', text: 'Es igual de posible sacar una pera que sacar una naranja.' },
      { number: 3, letter: 'C', text: 'Es más posible sacar una naranja que sacar una ciruela.' },
      { number: 4, letter: 'D', text: 'Es igual de posible sacar una ciruela que sacar una naranja.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Compara el grado de posibilidad de dos eventos en un experimento aleatorio.',
    evidence: 'Toma decisiones a partir de la comparación de cantidades de casos favorables.',
    standard: 'Conjeturo y pongo a prueba predicciones sobre eventos aleatorios.',
    justification: 'Hay 6 naranjas y solo 1 ciruela. Como 6 > 1, la probabilidad de sacar naranja (6/11) es estrictamente mayor que la de ciruela (1/11).',
    invalidOptionsReasoning: {
      A: 'Ciruela (1) es menor que pera (4), por lo que es MENOS posible.',
      B: 'Pera (4) no es igual a naranja (6).',
      D: 'Ciruela (1) y naranja (6) tienen cantidades muy distintas.'
    },
    socraticHints: {
      recordar: '¿Cuántas naranjas hay y cuántas ciruelas hay en la bolsa?',
      comprender: 'Si un tipo de fruta está en mayor cantidad, ¿qué pasa con su posibilidad de salir?',
      aplicar: 'Escribe en tu cuaderno: P(naranja) = 6/11 > P(ciruela) = 1/11.',
      analizar: '¿Por qué tener más unidades de un elemento aumenta directamente su probabilidad?'
    }
  },
  {
    id: 410,
    grade: 4,
    questionNumber: 10,
    title: 'Tarea del hogar menos posible al azar',
    statement: 'Sara saca un papelito de una bolsa con tareas del hogar:\n- Servir la comida: 2 papelitos\n- Limpiar las ventanas: 2 papelitos\n- Dar de comer a la mascota: 4 papelitos\n- Tirar la basura: 1 papelito\n\n¿Cuál es la tarea que es MENOS POSIBLE que Sara deba hacer?',
    options: [
      { number: 1, letter: 'A', text: 'Limpiar las ventanas.' },
      { number: 2, letter: 'B', text: 'Servir la comida.' },
      { number: 3, letter: 'C', text: 'Tirar la basura.' },
      { number: 4, letter: 'D', text: 'Dar de comer a la mascota.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Identifica el evento con menor grado de posibilidad de ocurrencia.',
    evidence: 'Compara frecuencias para determinar el evento menos probable.',
    standard: 'Conjeturo y pongo a prueba predicciones sobre eventos.',
    justification: 'Solo hay 1 papelito marcado con "Tirar la basura" de un total de 9 papelitos (1/9). Como 1 es la menor cantidad, es el evento menos posible.',
    invalidOptionsReasoning: {
      A: 'Limpiar ventanas tiene 2 papelitos (2/9).',
      B: 'Servir comida tiene 2 papelitos (2/9).',
      D: 'Dar de comer a la mascota tiene 4 papelitos (es el MÁS posible).'
    },
    socraticHints: {
      recordar: 'Cuenta cuántos papelitos hay de cada tarea en el cuadro.',
      comprender: '¿Cuál tarea tiene el menor número de papelitos en la bolsa?',
      aplicar: 'Anota en tu cuaderno: Tirar basura = 1 papelito (Mínima probabilidad = 1/9).',
      analizar: '¿Por qué tener la menor cantidad de casos favorables produce la menor probabilidad?'
    }
  },
  {
    id: 411,
    grade: 4,
    questionNumber: 11,
    title: 'Orden ascendente de prendas de ropa',
    statement: 'Se observan las prendas colgadas: 1 camiseta, 2 vestidos y 3 pantalones.\n\nSe quiere organizar las prendas de ropa de MENOR a MAYOR cantidad. ¿En qué orden se deben organizar?',
    options: [
      { number: 1, letter: 'A', text: 'Pantalones, camisetas y vestidos.' },
      { number: 2, letter: 'B', text: 'Camisetas, pantalones y vestidos.' },
      { number: 3, letter: 'C', text: 'Vestidos, pantalones y camisetas.' },
      { number: 4, letter: 'D', text: 'Camisetas, vestidos y pantalones.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Ordena datos numéricos en orden ascendente (menor a mayor).',
    evidence: 'Establece relaciones de orden < en conjuntos de datos.',
    standard: 'Resuelvo problemas utilizando relaciones y propiedades de los números naturales.',
    justification: 'Las cantidades son: Camisetas = 1, Vestidos = 2, Pantalones = 3. Ordenando de menor a mayor (1 < 2 < 3): Camisetas, vestidos y pantalones.',
    invalidOptionsReasoning: {
      A: 'Inicia por pantalones (3), que es la prenda de mayor cantidad.',
      B: 'Ubica pantalones (3) antes que vestidos (2).',
      C: 'Inicia en vestidos (2) y termina en camisetas (1).'
    },
    socraticHints: {
      recordar: '¿Cuántas camisetas, vestidos y pantalones hay respectivamente?',
      comprender: '¿Qué significa ordenar de "menor a mayor" cantidad?',
      aplicar: 'Escribe en tu cuaderno: 1 < 2 < 3 (Camiseta < Vestido < Pantalón).',
      analizar: '¿Por qué la opción D es la única secuencia estrictamente creciente?'
    }
  },
  {
    id: 412,
    grade: 4,
    questionNumber: 12,
    title: 'Transformación geométrica de ampliación',
    statement: 'José transformó un rectángulo original de 4 cm de largo por 2 cm de alto en una cuadrícula. El nuevo rectángulo mide 8 cm de largo por 4 cm de alto.\n\n¿Qué transformación se hizo al rectángulo original para volverlo el rectángulo cambiado?',
    options: [
      { number: 1, letter: 'A', text: 'Una traslación.' },
      { number: 2, letter: 'B', text: 'Una ampliación.' },
      { number: 3, letter: 'C', text: 'Una rotación.' },
      { number: 4, letter: 'D', text: 'Una reflexión.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comunicación, modelación y representación',
    component: 'Espacial-Métrico',
    affirmation: 'Reconoce transformaciones en figuras planas: ampliaciones y reducciones (homotecias).',
    evidence: 'Identifica la transformación geométrica que duplica las dimensiones de los lados.',
    standard: 'Identifico y justifico relaciones de semejanza entre figuras.',
    justification: 'Las medidas del rectángulo se multiplicaron por 2: largo pasó de 4 a 8 cm (4×2=8) y alto de 2 a 4 cm (2×2=4). La figura conservó su forma pero aumentó de tamaño, lo que define una ampliación (homotecia de factor 2).',
    invalidOptionsReasoning: {
      A: 'La traslación solo cambia la posición en el plano, conservando el tamaño exacto.',
      C: 'La rotación gira la figura sin alterar sus medidas.',
      D: 'La reflexión produce una imagen espejo de iguales dimensiones.'
    },
    socraticHints: {
      recordar: '¿Cuánto medían el largo y el alto del rectángulo inicial y cuánto miden ahora?',
      comprender: '¿Cambió la forma de la figura o cambió su tamaño multiplicándose por 2?',
      aplicar: 'Escribe en tu cuaderno: "Ampliación = transformación que multiplica todas las dimensiones lineales por un factor > 1".',
      analizar: '¿Por qué las transformaciones rígidas (traslación, rotación, reflexión) no cambian el tamaño?'
    }
  },
  {
    id: 413,
    grade: 4,
    questionNumber: 13,
    title: 'Secuencia de polígonos formados con palillos',
    statement: 'Jorge forma con palillos las figuras que se muestran en la imagen, aumentando cada vez 2 palillos:\n- Figura 1 (Triángulo): 3 palillos\n- Figura 2 (Pentágono): 5 palillos\n- Figura 3 (Heptágono): 7 palillos\n\nSiguiendo la secuencia, ¿cuál es la siguiente figura de la secuencia de Jorge?',
    options: [
      { number: 1, letter: 'A', text: 'Figura de 9 palillos (Nonágono/Eneágono).' },
      { number: 2, letter: 'B', text: 'Figura de 6 palillos (Hexágono).' },
      { number: 3, letter: 'C', text: 'Figura de 8 palillos (Octágono).' },
      { number: 4, letter: 'D', text: 'Figura de 4 palillos (Cuadrado).' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Señala el patrón y término siguiente de secuencias con elementos geométricos.',
    evidence: 'Predice el término siguiente de una sucesión aritmética de diferencia +2.',
    standard: 'Predigo patrones de variación en una secuencia numérica o gráfica.',
    justification: 'El patrón consiste en sumar 2 palillos a la figura anterior: 3 + 2 = 5, 5 + 2 = 7, 7 + 2 = 9 palillos. La figura 4 debe ser un polígono de 9 lados (9 palillos).',
    invalidOptionsReasoning: {
      B: '6 palillos no sigue la regla de números impares (+2).',
      C: '8 palillos sumaría solo 1 palillo a 7.',
      D: '4 palillos retrocedería en la secuencia.'
    },
    socraticHints: {
      recordar: '¿Cuántos palillos tienen las tres primeras figuras (3, 5, 7)?',
      comprender: '¿Cuál es la regla de formación dada: sumar 2 palillos en cada paso?',
      aplicar: 'Calcula en tu cuaderno: 7 + 2 = 9 palillos.',
      analizar: '¿Por qué la secuencia de números impares (3, 5, 7, 9) determina el número de lados del siguiente polígono?'
    }
  },
  {
    id: 414,
    grade: 4,
    questionNumber: 14,
    title: 'Rotación de media vuelta (180°) de un triángulo',
    statement: 'Observa la figura en la cuadrícula: un triángulo con vértice apuntando hacia la derecha y un punto rojo marcado en el centro de su base vertical izquierda.\n\nSi se rota la figura media vuelta (180°) alrededor del punto marcado, ¿cómo quedaría?',
    options: [
      { number: 1, letter: 'A', text: 'Triángulo apuntando hacia arriba.' },
      { number: 2, letter: 'B', text: 'Triángulo apuntando hacia la izquierda con el punto rojo a la derecha.' },
      { number: 3, letter: 'C', text: 'Triángulo apuntando hacia abajo.' },
      { number: 4, letter: 'D', text: 'Triángulo en la misma posición original.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Comunicación, modelación y representación',
    component: 'Espacial-Métrico',
    affirmation: 'Reconoce transformaciones rígidas de rotación en el plano.',
    evidence: 'Identifica la imagen resultante tras un giro de 180° (media vuelta).',
    standard: 'Conjeturo y verifico los resultados de aplicar transformaciones a figuras en el plano.',
    justification: 'Una media vuelta corresponde a un giro de 180°. Al girar 180° alrededor del punto de su base, el vértice que apuntaba hacia la derecha ahora apunta hacia la izquierda (opción B).',
    invalidOptionsReasoning: {
      A: 'Girar 90° (un cuarto de vuelta) lo pondría apuntando hacia arriba.',
      C: 'Girar 270° (tres cuartos de vuelta) lo pondría apuntando hacia abajo.',
      D: 'Corresponde a una vuelta completa (360°) sin cambio.'
    },
    socraticHints: {
      recordar: '¿Cuántos grados equivale "media vuelta"? (360° / 2 = 180°).',
      comprender: 'Si algo apunta al oriente (derecha) y gira 180°, ¿hacia dónde apunta ahora?',
      aplicar: 'Dibuja la flecha original → y gírala 180° para obtener ←.',
      analizar: '¿Por qué la opción B muestra la orientación invertida exacta del giro de media vuelta?'
    }
  },
  {
    id: 415,
    grade: 4,
    questionNumber: 15,
    title: 'Patrón exponencial en regalos de duendes mineros',
    statement: 'Cada año, los duendes mineros aumentan los cofres de regalo para el dragón:\n- Año 1: 1 cofre\n- Año 2: 3 cofres\n- Año 3: 9 cofres\n\nSi los duendes ofrecieran 27 cofres al dragón en el año 4, ¿cuál de las siguientes reglas estarían siguiendo?',
    options: [
      { number: 1, letter: 'A', text: 'Duplicar la cantidad de cofres con respecto al año anterior.' },
      { number: 2, letter: 'B', text: 'Aumentar 6 cofres con respecto al año anterior.' },
      { number: 3, letter: 'C', text: 'Triplicar la cantidad de cofres con respecto al año anterior.' },
      { number: 4, letter: 'D', text: 'Aumentar 18 cofres con respecto al año anterior.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Descubre regularidades en secuencias multiplicativas y patrones de crecimiento.',
    evidence: 'Determina la regla de formación multiplicativa de una sucesión geométrica.',
    standard: 'Predigo patrones de variación en secuencias numéricas.',
    justification: 'Al relacionar los términos: 1 × 3 = 3; 3 × 3 = 9; 9 × 3 = 27. La regla constante es triplicar (multiplicar por 3) la cantidad del año anterior.',
    invalidOptionsReasoning: {
      A: 'Duplicar sería 1 -> 2 -> 4 -> 8.',
      B: 'Sumar 6 solo funciona entre el año 2 y 3 (3+6=9), pero falla en el año 1 (1+6=7) y año 4 (9+6=15).',
      D: 'Sumar 18 solo describe la diferencia entre 9 y 27, no la regla general.'
    },
    socraticHints: {
      recordar: '¿Qué operación haces para pasar de 1 a 3, de 3 a 9 y de 9 a 27?',
      comprender: 'Divide cada término entre el anterior: 3/1 = 3, 9/3 = 3, 27/9 = 3.',
      aplicar: 'Escribe en tu cuaderno: "Regla = Triplicar (× 3) cada año".',
      analizar: '¿Por qué una multiplicación sucesiva por 3 se llama crecimiento geométrico o exponencial?'
    }
  },
  {
    id: 416,
    grade: 4,
    questionNumber: 16,
    title: 'Precio unitario en compra de helados con monedas',
    statement: 'Tres helados valen 6 monedas y cada helado vale lo mismo.\n\n¿Cuánto vale solo un helado?',
    options: [
      { number: 1, letter: 'A', text: '1 moneda.' },
      { number: 2, letter: 'B', text: '2 monedas.' },
      { number: 3, letter: 'C', text: '4 monedas.' },
      { number: 4, letter: 'D', text: '8 monedas.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve situaciones de reparto equitativo y proporcionalidad directa.',
    evidence: 'Calcula el valor unitario dividiendo el costo total entre la cantidad de artículos.',
    standard: 'Resuelvo y formulo problemas de proporcionalidad directa.',
    justification: 'Dividiendo las 6 monedas entre los 3 helados: 6 ÷ 3 = 2 monedas por cada helado (o 6 × 1/3 = 2).',
    invalidOptionsReasoning: {
      A: 'Si valieran 1 moneda, los 3 costarían solo 3 monedas.',
      C: '4 monedas por helado daría 3 × 4 = 12 monedas.',
      D: '8 monedas excede el total pagado.'
    },
    socraticHints: {
      recordar: '¿Cuántas monedas se pagaron en total por los 3 helados?',
      comprender: '¿Qué número multiplicado por 3 da como resultado 6?',
      aplicar: 'Divide en tu cuaderno: 6 ÷ 3 = 2 monedas.',
      analizar: '¿Por qué 2 + 2 + 2 = 6 verifica el valor unitario de cada helado?'
    }
  },
  {
    id: 417,
    grade: 4,
    questionNumber: 17,
    title: 'Tiempo de exposición proporcional por grupos',
    statement: 'En una clase destinada a exposiciones, el profesor divide el tiempo total de la clase en partes iguales. Si se tienen 4 grupos, el tiempo de exposición de cada grupo es de 15 minutos.\n\n¿Cuál sería el tiempo de exposición de cada grupo si se hicieran 5 grupos de estudiantes?',
    options: [
      { number: 1, letter: 'A', text: '11 minutos.' },
      { number: 2, letter: 'B', text: '12 minutos.' },
      { number: 3, letter: 'C', text: '13 minutos.' },
      { number: 4, letter: 'D', text: '14 minutos.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas de proporcionalidad inversa en situaciones escolares.',
    evidence: 'Calcula el tiempo individual manteniendo constante el producto total.',
    standard: 'Resuelvo y formulo problemas en situaciones de proporcionalidad inversa.',
    justification: 'El tiempo total de la clase es 4 grupos × 15 min = 60 minutos. Al repartir esos 60 minutos entre 5 grupos: 60 ÷ 5 = 12 minutos por grupo.',
    invalidOptionsReasoning: {
      A: 'Resta 15 - 4 = 11 sin justificación matemática.',
      C: 'Comete un error en la división de 60 ÷ 5.',
      D: 'Resta 1 minuto a 15 de manera arbitraria.'
    },
    socraticHints: {
      recordar: '¿Cuántos minutos dura la clase completa en total? (4 × 15 min = ?)',
      comprender: 'Si hay más grupos (5 en vez de 4), ¿cada grupo tendrá más o menos tiempo?',
      aplicar: 'Calcula en tu cuaderno: 60 minutos ÷ 5 grupos = 12 minutos por grupo.',
      analizar: '¿Por qué a mayor cantidad de grupos corresponde menor tiempo para cada uno (proporcionalidad inversa)?'
    }
  },
  {
    id: 418,
    grade: 4,
    questionNumber: 18,
    title: 'Distancia de atracciones a la reja del parque',
    statement: 'La figura muestra la ubicación de 4 atracciones en un parque sobre una cuadrícula donde cada rectángulo mide 10 m de largo por 5 m de ancho:\n- Dardos (arriba izquierda)\n- Carrusel (arriba derecha)\n- Trampolín (centro a 4 rectángulos de 5 m de la reja)\n- Tobogán (abajo a 4 rectángulos de la reja)\n\nSegún la ubicación de las atracciones, ¿cuál de las siguientes afirmaciones es VERDADERA?',
    options: [
      { number: 1, letter: 'A', text: 'La distancia entre el carrusel y el tobogán es 10 m.' },
      { number: 2, letter: 'B', text: 'El tobogán está a 10 m de la reja.' },
      { number: 3, letter: 'C', text: 'La distancia entre los dardos y el carrusel es 5 m.' },
      { number: 4, letter: 'D', text: 'El trampolín está a 20 m de la reja.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Realiza mediciones en sistemas de referencia convencionales.',
    evidence: 'Determina distancias perpendiculares respecto a una recta de referencia (la reja).',
    standard: 'Utilizo sistemas de coordenadas para describir relaciones espaciales.',
    justification: 'El trampolín está separado de la reja vertical por 4 espacios de 5 metros: 4 × 5 m = 20 metros de distancia a la reja.',
    invalidOptionsReasoning: {
      A: 'La distancia vertical entre carrusel y tobogán es de varios tramos mayores a 10 m.',
      B: 'El tobogán está a 4 tramos de 5 m = 20 m, no 10 m.',
      C: 'La distancia horizontal entre dardos y carrusel son 2 rectángulos de 10 m = 20 m, no 5 m.'
    },
    socraticHints: {
      recordar: '¿Cuánto mide el ancho de cada franja según la convención (5 metros)?',
      comprender: 'Cuenta cuántas franjas horizontales hay desde la reja hasta el punto del trampolín.',
      aplicar: 'Multiplica en tu cuaderno: 4 franjas × 5 metros = 20 metros.',
      analizar: '¿Por qué la opción D es la única afirmación geométrica verdadera?'
    }
  },
  {
    id: 419,
    grade: 4,
    questionNumber: 19,
    title: 'Volumen y conteo de cubos de una caja',
    statement: 'Sandra armó la figura de una caja usando cubos iguales. El bloque tiene 2 cubos de ancho frontal × 3 cubos de alto vertical × 2 cubos de fondo.\n\n¿Cuántos cubos usó Sandra?',
    options: [
      { number: 1, letter: 'A', text: '6' },
      { number: 2, letter: 'B', text: '10' },
      { number: 3, letter: 'C', text: '12' },
      { number: 4, letter: 'D', text: '16' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Resuelve problemas de medición de volumen por descomposición de sólidos regulares.',
    evidence: 'Calcula el número total de unidades cúbicas en un prisma rectangular.',
    standard: 'Utilizo diferentes procedimientos de cálculo para hallar el volumen de cuerpos sólidos.',
    justification: 'En la parte frontal se observan 2 × 3 = 6 cubos visibles. Como tiene 2 capas de profundidad (frente y respaldo), el total es 6 × 2 = 12 cubos (o volumen = 2 × 3 × 2 = 12).',
    invalidOptionsReasoning: {
      A: '6 cuenta únicamente los cubos visibles de la cara frontal.',
      B: '10 suma los cubos frontales más los 4 superiores sin estructurar el fondo.',
      D: '16 cuenta erróneamente caras exteriores.'
    },
    socraticHints: {
      recordar: '¿Cuántos cubos hay en la capa de adelante y cuántos en la capa de atrás?',
      comprender: '¿Cómo multiplicas ancho (2) × alto (3) × profundidad (2)?',
      aplicar: 'Calcula en tu cuaderno: 2 × 3 × 2 = 12 cubos.',
      analizar: '¿Por qué no podemos olvidar los cubos ocultos en el interior y respaldo del bloque?'
    }
  },
  {
    id: 420,
    grade: 4,
    questionNumber: 20,
    title: 'Cálculo de la distancia de recorrido en tramos',
    statement: 'Carlos y Antonio recorren cada uno un camino con dos tramos para llegar a la meta. Antonio recorre el Tramo 1 (horizontal arriba) y el Tramo 2 (vertical derecha hacia la meta).\n\n¿Qué se debe calcular para saber qué distancia recorrió Antonio?',
    options: [
      { number: 1, letter: 'A', text: 'La suma de las distancias de los tramos 1 y 2.' },
      { number: 2, letter: 'B', text: 'El producto de las distancias de los tramos 3 y 4.' },
      { number: 3, letter: 'C', text: 'El producto de las distancias de los tramos 1 y 4.' },
      { number: 4, letter: 'D', text: 'La suma de las distancias de los tramos 2 y 3.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Comunicación, modelación y representación',
    component: 'Espacial-Métrico',
    affirmation: 'Reconoce atributos medibles de longitud en trayectorias compuestas.',
    evidence: 'Identifica que la distancia total recorrida es la suma escalar de sus tramos.',
    standard: 'Diferencio y ordeno propiedades que se puedan medir (longitudes y distancias).',
    justification: 'El trayecto de Antonio está formado por la línea punteada superior (Tramo 1) y la línea lateral derecha (Tramo 2). La longitud total de su viaje es la suma de ambos tramos: Tramo 1 + Tramo 2.',
    invalidOptionsReasoning: {
      B: 'Tramos 3 y 4 corresponden al recorrido de Carlos, y la distancia es suma, no producto.',
      C: 'Multiplica tramos de atletas distintos.',
      D: 'Combina el Tramo 2 de Antonio con el Tramo 3 de Carlos.'
    },
    socraticHints: {
      recordar: '¿Por cuáles tramos específicos camina Antonio desde su punto de partida hasta la meta?',
      comprender: 'Para encontrar la distancia total de una caminata en dos partes, ¿qué operación realizas?',
      aplicar: 'Anota en tu cuaderno: "Distancia total de Antonio = Longitud Tramo 1 + Longitud Tramo 2".',
      analizar: '¿Por qué la longitud de una trayectoria siempre se obtiene sumando los segmentos recorridos?'
    }
  }
];
