// Banco Oficial de Preguntas ICFES Evaluar para Avanzar (Grados 4° y 5°)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
import { Question } from '../types';

export const OFFICIAL_GRADE_4_5: Record<number, Question[]> = {
  // ================= GRADO 4° =================
  4: [
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
        aplicar: 'Traza en tu libreta las tres barras: Paola (altura 1), Lorena (altura 10), Juliana (altura 8).',
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
        aplicar: 'Realiza en tu libreta: (6 × 4) + (3 × 2) = 24 + 6 = 30 cm².',
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
        aplicar: 'Anota en tu libreta: Tirar basura = 1 papelito (Mínima probabilidad = 1/9).',
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
        aplicar: 'Calcula en tu libreta: 7 + 2 = 9 palillos.',
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
        aplicar: 'Calcula en tu libreta: 2 × 3 × 2 = 12 cubos.',
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
        aplicar: 'Anota en tu libreta: "Distancia total de Antonio = Longitud Tramo 1 + Longitud Tramo 2".',
        analizar: '¿Por qué la longitud de una trayectoria siempre se obtiene sumando los segmentos recorridos?'
      }
    }
  ],

  // ================= GRADO 5° =================
  5: [
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
        aplicar: 'Escribe en tu libreta: Propiedad Distributiva: (a + b) × c = (a × c) + (b × c).',
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
        aplicar: 'Escribe la tabla de posición en tu libreta: UM (3), C (0), D (3), U (3) -> 3.033.',
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
        aplicar: 'Anota en tu libreta: Manzanas = 10/19 (Mayor probabilidad).',
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
        comprender: 'Dibuja la silueta de la casa en tu libreta y anota las 5 medidas de su borde exterior.',
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
  ]
};
