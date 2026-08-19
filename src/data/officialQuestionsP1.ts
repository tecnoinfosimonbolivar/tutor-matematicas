// Banco Oficial de Preguntas ICFES Evaluar para Avanzar (Grados 3° a 11°)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
import { Question } from '../types';

export const OFFICIAL_GRADE_3: Record<number, Question[]> = {
  // ================= GRADO 3° =================
  3: [
    {
      id: 301,
      grade: 3,
      questionNumber: 1,
      title: 'Posición ordinal en la fila escolar',
      statement: 'La profesora les ha pedido a sus estudiantes que se organicen en fila para tomar distancia: Mario, Gabriela, Leonardo, Felipe y Alejandra.\n\n¿En qué posición de la fila se encuentra Gabriela?',
      options: [
        { number: 1, letter: 'A', text: 'Quinta.' },
        { number: 2, letter: 'B', text: 'Tercera.' },
        { number: 3, letter: 'C', text: 'Primera.' },
        { number: 4, letter: 'D', text: 'Segunda.' }
      ],
      correctOption: 4,
      correctLetter: 'D',
      competency: 'Comunicación, modelación y representación',
      component: 'Numérico-Variacional',
      affirmation: 'Reconoce el significado, el uso y equivalencia de números naturales y números ordinales.',
      evidence: 'Asigna códigos numéricos y ordinales en situaciones en las que existe orden.',
      standard: 'Reconozco significados del número en diferentes contextos (conteo, codificación, localización y orden).',
      justification: 'Al ordenar desde la profesora hacia atrás: 1.° Mario (Primero), 2.ª Gabriela (Segunda), 3.° Leonardo (Tercero), 4.° Felipe (Cuarto) y 5.ª Alejandra (Quinta). Por tanto, Gabriela está en la segunda posición.',
      invalidOptionsReasoning: {
        A: 'Quinta corresponde a Alejandra, la última niña de la fila.',
        B: 'Tercera posición corresponde a Leonardo.',
        C: 'Primera posición corresponde a Mario, quien está frente al tablero.'
      },
      socraticHints: {
        recordar: '¿Quién es el primer estudiante ubicado justo al lado de la profesora?',
        comprender: 'Si contamos ordenadamente de izquierda a derecha (1.°, 2.°, 3.°...), ¿qué lugar ocupa Gabriela?',
        aplicar: 'Escribe en tu cuaderno los números ordinales del 1 al 5 junto a cada nombre.',
        analizar: '¿Por qué la palabra "Segunda" representa con precisión el número ordinal 2.º?'
      }
    },
    {
      id: 302,
      grade: 3,
      questionNumber: 2,
      title: 'Rompecabezas rectangular y pieza faltante',
      statement: 'Miguel está armando un rompecabezas rectangular, y le falta ubicar una ficha para terminarlo. En la esquina superior derecha queda un espacio triangular.\n\n¿Con cuál de las siguientes fichas completa Miguel su rompecabezas?',
      options: [
        { number: 1, letter: 'A', text: 'Ficha trapecial cuadrangular' },
        { number: 2, letter: 'B', text: 'Triángulo invertido' },
        { number: 3, letter: 'C', text: 'Cuadrilátero oblicuo' },
        { number: 4, letter: 'D', text: 'Ficha triangular de esquina' }
      ],
      correctOption: 4,
      correctLetter: 'D',
      competency: 'Comunicación, modelación y representación',
      component: 'Espacial-Métrico',
      affirmation: 'Reconoce las características de figuras bidimensionales.',
      evidence: 'Señala atributos de forma para realizar recubrimientos en el plano.',
      standard: 'Realizo construcciones y diseños utilizando figuras geométricas bidimensionales.',
      justification: 'La ficha triangular de la opción D tiene exactamente la forma, orientación y medidas requeridas para encajar en el hueco triangular superior derecho del rectángulo.',
      invalidOptionsReasoning: {
        A: 'Cubre partes adicionales y tiene 4 lados en lugar de 3.',
        B: 'Tiene orientación invertida con vértice hacia abajo.',
        C: 'Es un cuadrilátero que no coincide con el corte triangular.'
      },
      socraticHints: {
        recordar: '¿Cuántos lados y qué forma tiene el espacio en blanco que falta por llenar?',
        comprender: 'Observa la orientación de la esquina del rompecabezas: ¿hacia dónde apunta el ángulo recto?',
        aplicar: 'Dibuja en tu cuaderno el rectángulo completo y resalta la pieza faltante.',
        analizar: '¿Por qué la pieza D es la única que completa el borde recto del rectángulo?'
      }
    },
    {
      id: 303,
      grade: 3,
      questionNumber: 3,
      title: 'Recorte de hoja rectangular y rotación',
      statement: 'Observa la figura de una hoja rectangular a la que le recortaron una parte curva en la esquina superior derecha.\n\n¿Cuál es la parte que recortaron de la hoja?',
      options: [
        { number: 1, letter: 'A', text: 'Pieza con arco cóncavo superior' },
        { number: 2, letter: 'B', text: 'Pieza con semicírculo superior (rotación de un cuarto de vuelta)' },
        { number: 3, letter: 'C', text: 'Pieza con concavidad lateral doble' },
        { number: 4, letter: 'D', text: 'Pieza rectangular con base curva' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Espacial-Métrico',
      affirmation: 'Resuelve problemas de medición y recubrimientos con patrones.',
      evidence: 'Realiza recubrimientos con figuras regulares e irregulares bajo rotación.',
      standard: 'Realizo diseños utilizando figuras bidimensionales.',
      justification: 'Al girar un cuarto de vuelta en contra de las manecillas del reloj (90° antihorario), la pieza B encaja exactamente en el recorte de la hoja.',
      invalidOptionsReasoning: {
        A: 'Presenta la curvatura en una orientación no coincidente con el recorte.',
        C: 'Posee concavidad invertida.',
        D: 'Modifica la curvatura de los lados rectos adyacentes.'
      },
      socraticHints: {
        recordar: '¿Cuántos cuadros de ancho y alto abarca la sección recortada?',
        comprender: 'Si giras mentalmente la pieza B un cuarto de vuelta, ¿hacia dónde queda el arco redondeado?',
        aplicar: 'Dibuja la cuadrícula en tu cuaderno y calca la silueta del recorte.',
        analizar: '¿Por qué la rotación conserva las medidas exactas del área recortada?'
      }
    },
    {
      id: 304,
      grade: 3,
      questionNumber: 4,
      title: 'Evento seguro al sacar una tarjeta',
      statement: 'Por la compra de una boleta, Liliana puede participar en un concurso en el que debe escoger una caja y extraer una tarjeta. Si la tarjeta es amarilla, gana otra boleta:\n- Caja 1: 10 tarjetas blancas\n- Caja 2: 10 tarjetas amarillas (todas amarillas)\n- Caja 3: 5 amarillas y 5 blancas\n- Caja 4: 7 amarillas y 3 blancas\n\n¿Cuál caja debe escoger Liliana para que sea SEGURO que gane otra boleta?',
      options: [
        { number: 1, letter: 'A', text: 'Caja 1.' },
        { number: 2, letter: 'B', text: 'Caja 2.' },
        { number: 3, letter: 'C', text: 'Caja 3.' },
        { number: 4, letter: 'D', text: 'Caja 4.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Razonamiento y argumentación',
      component: 'Aleatorio',
      affirmation: 'Explica la naturaleza de los eventos posibles, imposibles o seguros.',
      evidence: 'Determina cuándo un evento es seguro que ocurra en un experimento aleatorio.',
      standard: 'Explico desde mi experiencia la posibilidad o imposibilidad de ocurrencia de eventos cotidianos.',
      justification: 'Como en la Caja 2 todas las tarjetas son amarillas (10 de 10), la probabilidad es 10/10 = 1 (100% seguro). En la Caja 1 es imposible (0%) y en las Cajas 3 y 4 es probable pero no seguro.',
      invalidOptionsReasoning: {
        A: 'En la Caja 1 es imposible ganar (0 tarjetas amarillas).',
        C: 'En la Caja 3 existe 50% de probabilidad de sacar blanca y perder.',
        D: 'En la Caja 4 hay riesgo de extraer una tarjeta blanca.'
      },
      socraticHints: {
        recordar: '¿Qué condición debe cumplirse para que un suceso sea llamado "Evento Seguro"?',
        comprender: '¿Cuántas tarjetas de otro color que no sea amarillo hay en la Caja 2?',
        aplicar: 'Calcula la fracción de tarjetas amarillas en cada caja (0/10, 10/10, 5/10, 7/10).',
        analizar: '¿Por qué la certeza total solo existe cuando no hay ningún caso desfavorable?'
      }
    },
    {
      id: 305,
      grade: 3,
      questionNumber: 5,
      title: 'Representación en diagrama de barras de girasoles',
      statement: 'En una salida de campo del colegio, Pilar y Estefanía registraron en una tabla el número de girasoles que observaron:\n- Pilar: 1 girasol\n- Estefanía: 10 girasoles\n\n¿Cuál de las siguientes gráficas muestra el número de girasoles que observó cada estudiante?',
      options: [
        { number: 1, letter: 'A', text: 'Gráfica con barra de Pilar en 10 y Estefanía en 10.' },
        { number: 2, letter: 'B', text: 'Gráfica con barra de Pilar en 1 y Estefanía en 10.' },
        { number: 3, letter: 'C', text: 'Gráfica con barra de Pilar en 1 y Estefanía en 1.' },
        { number: 4, letter: 'D', text: 'Gráfica con barra de Pilar en 5 y Estefanía en 5.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Aleatorio',
      affirmation: 'Resuelve problemas que requieran el uso de frecuencias de datos.',
      evidence: 'Representa en diagrama de barras un conjunto de datos presentado en tabla de frecuencias.',
      standard: 'Represento datos relativos a mi entorno usando diagramas de barras.',
      justification: 'La gráfica B muestra la barra azul de Pilar con altura en el nivel 1 y la barra rosada de Estefanía con altura exacta en el nivel 10, coincidiendo fielmente con la tabla.',
      invalidOptionsReasoning: {
        A: 'Asigna 10 girasoles a ambas estudiantes.',
        C: 'Asigna 1 girasol a ambas estudiantes.',
        D: 'Promedia los datos (5 y 5) en lugar de representar los datos individuales.'
      },
      socraticHints: {
        recordar: '¿Qué valor numérico tiene registrado Pilar en la tabla y cuál Estefanía?',
        comprender: 'En el eje vertical de la gráfica, ¿hasta qué número debe subir la barra de Pilar?',
        aplicar: 'Dibuja en tu cuaderno los dos ejes: horizontal (nombres) y vertical (del 0 al 10).',
        analizar: '¿Por qué la gráfica B es la única que respeta la frecuencia exacta de cada niña?'
      }
    },
    {
      id: 306,
      grade: 3,
      questionNumber: 6,
      title: 'Moda en personajes de historias',
      statement: 'Rocío cuenta la cantidad de personajes que aparecen en su libro de historias:\n- Princesas: 6\n- Príncipes: 12\n- Caballeros: 10\n- Animales: 22\n\n¿Cuál tipo de personaje es más frecuente en las historias del libro de Rocío?',
      options: [
        { number: 1, letter: 'A', text: 'Princesas.' },
        { number: 2, letter: 'B', text: 'Príncipes.' },
        { number: 3, letter: 'C', text: 'Caballeros.' },
        { number: 4, letter: 'D', text: 'Animales.' }
      ],
      correctOption: 4,
      correctLetter: 'D',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Aleatorio',
      affirmation: 'Usa la moda o frecuencia de los datos para solucionar situaciones cotidianas.',
      evidence: 'Identifica la categoría con mayor frecuencia absoluta.',
      standard: 'Interpreto cualitativamente datos referidos a situaciones del entorno escolar.',
      justification: 'La mayor frecuencia registrada en la tabla es 22, la cual corresponde al tipo de personaje "Animales". En estadística, el dato con mayor frecuencia es la moda.',
      invalidOptionsReasoning: {
        A: 'Princesas tiene la menor frecuencia (6).',
        B: 'Príncipes tiene 12, superado ampliamente por 22.',
        C: 'Caballeros tiene 10 apariciones.'
      },
      socraticHints: {
        recordar: '¿Qué número es el más grande entre 6, 12, 10 y 22?',
        comprender: '¿A qué categoría de personajes pertenece el valor 22?',
        aplicar: 'Escribe en tu cuaderno: "Moda = dato con mayor frecuencia = Animales (22)".',
        analizar: '¿Por qué la frecuencia nos indica qué elemento se repite más veces en un conjunto?'
      }
    },
    {
      id: 307,
      grade: 3,
      questionNumber: 7,
      title: 'Posiciones relativas en fila de teatro',
      statement: 'Un grupo de niños está haciendo una fila para ingresar a una obra de teatro frente a la taquilla:\n[Taquilla] -> Pilar -> Estiven -> Santiago -> Milena -> Simón\n\n¿Quién está dos puestos adelante de Santiago?',
      options: [
        { number: 1, letter: 'A', text: 'Milena.' },
        { number: 2, letter: 'B', text: 'Pilar.' },
        { number: 3, letter: 'C', text: 'Estiven.' },
        { number: 4, letter: 'D', text: 'Simón.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Comunicación, modelación y representación',
      component: 'Numérico-Variacional',
      affirmation: 'Reconoce relaciones espaciales y de orden posicional.',
      evidence: 'Determina posiciones relativas hacia adelante o hacia atrás en una secuencia ordenada.',
      standard: 'Reconozco significados del número en codificación y localización.',
      justification: 'Estando en Santiago: un puesto adelante (hacia la taquilla) está Estiven; dos puestos adelante de Santiago está Pilar.',
      invalidOptionsReasoning: {
        A: 'Milena está un puesto ATRÁS de Santiago.',
        C: 'Estiven está solo UN puesto adelante de Santiago.',
        D: 'Simón está dos puestos ATRÁS de Santiago.'
      },
      socraticHints: {
        recordar: '¿Hacia qué lado de la fila está "adelante" (hacia la taquilla o hacia la salida)?',
        comprender: 'Párate mentalmente en la posición de Santiago y avanza dos pasos hacia la taquilla.',
        aplicar: 'Escribe la secuencia en tu cuaderno: 1.° Pilar, 2.° Estiven, 3.° Santiago.',
        analizar: '¿Por qué avanzar dos puestos adelante nos lleva directamente a Pilar?'
      }
    },
    {
      id: 308,
      grade: 3,
      questionNumber: 8,
      title: 'Total de pasajeros transportados en barco',
      statement: 'Un barco realiza un viaje desde la Isla Rosario hasta la Isla Palma con 45 personas, y un viaje de regreso desde la Isla Palma hasta la Isla Rosario con 27 personas.\n\n¿Cuántas personas transportó el barco durante los dos viajes?',
      options: [
        { number: 1, letter: 'A', text: '90 personas.' },
        { number: 2, letter: 'B', text: '72 personas.' },
        { number: 3, letter: 'C', text: '45 personas.' },
        { number: 4, letter: 'D', text: '18 personas.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Numérico-Variacional',
      affirmation: 'Resuelve situaciones aditivas de composición.',
      evidence: 'Usa estrategias aditivas de composición de dos cantidades.',
      standard: 'Resuelvo y formulo problemas en situaciones aditivas de composición y transformación.',
      justification: 'Sumando las personas del viaje de ida y las del viaje de regreso: 45 + 27 = 72 personas.',
      invalidOptionsReasoning: {
        A: 'Duplica 45 (45 + 45 = 90) asumiendo igual número de regreso.',
        C: 'Toma únicamente los pasajeros de ida.',
        D: 'Calcula la diferencia (45 - 27 = 18) en vez del total.'
      },
      socraticHints: {
        recordar: '¿Cuántos pasajeros viajaron en la ida y cuántos en el regreso?',
        comprender: '¿Qué operación aritmética nos permite unir o juntar ambas cantidades?',
        aplicar: 'Realiza la suma vertical en tu cuaderno: 45 + 27 (sumando unidades 5+7=12, llevas 1 decena).',
        analizar: '¿Por qué 72 representa la totalidad de personas movilizadas en ambos trayectos?'
      }
    },
    {
      id: 309,
      grade: 3,
      questionNumber: 9,
      title: 'Repartición de globos multiplicativa',
      statement: 'En el parque hay 6 niños jugando. El payaso dice: "Voy a regalar 2 globos a cada uno de los niños que hay en el parque".\n\n¿Con cuál de las siguientes multiplicaciones se puede calcular el total de globos que va a regalar el payaso?',
      options: [
        { number: 1, letter: 'A', text: '7 × 2' },
        { number: 2, letter: 'B', text: '6 × 1' },
        { number: 3, letter: 'C', text: '7 × 1' },
        { number: 4, letter: 'D', text: '6 × 2' }
      ],
      correctOption: 4,
      correctLetter: 'D',
      competency: 'Razonamiento y argumentación',
      component: 'Numérico-Variacional',
      affirmation: 'Determina equivalencias entre modelos multiplicativos y adición repetida.',
      evidence: 'Reconoce las cantidades que deben multiplicarse en una situación de grupos iguales.',
      standard: 'Uso diversas estrategias de cálculo para resolver problemas multiplicativos.',
      justification: 'Son 6 niños y cada uno recibe 2 globos. El modelo multiplicativo es 6 grupos de 2, es decir, 6 × 2 = 12 globos (equivalente a 2+2+2+2+2+2).',
      invalidOptionsReasoning: {
        A: 'Suma al payaso como si fuera un niño receptor (7 × 2).',
        B: 'Asume erróneamente que regala solo 1 globo por niño (6 × 1).',
        C: 'Cuenta 7 personas y 1 globo.'
      },
      socraticHints: {
        recordar: '¿Cuántos niños recibirán globos y cuántos globos le tocan a cada uno?',
        comprender: '¿Cómo se expresa matemáticamente "6 veces el número 2"?',
        aplicar: 'Escribe en tu cuaderno: 2 + 2 + 2 + 2 + 2 + 2 = 6 × 2 = 12.',
        analizar: '¿Por qué la multiplicación es una forma abreviada de sumar sumandos iguales?'
      }
    },
    {
      id: 310,
      grade: 3,
      questionNumber: 10,
      title: 'Compra de dulces en la tienda',
      statement: 'Pablo quiere comprar 9 dulces para compartir con sus amigos. En el cartel se lee: "$50 c/u" (cada dulce vale $50).\n\nSi Pablo compra los 9 dulces, ¿cuánto debe pagar en total?',
      options: [
        { number: 1, letter: 'A', text: '$450' },
        { number: 2, letter: 'B', text: '$400' },
        { number: 3, letter: 'C', text: '$59' },
        { number: 4, letter: 'D', text: '$45' }
      ],
      correctOption: 1,
      correctLetter: 'A',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Numérico-Variacional',
      affirmation: 'Resuelve situaciones multiplicativas en diferentes contextos.',
      evidence: 'Aplica el producto de un número de dos dígitos por uno de un dígito.',
      standard: 'Uso estrategias de cálculo mental y escrito para resolver problemas multiplicativos.',
      justification: 'Multiplicando el valor unitario por la cantidad: 9 × $50 = $450 pesos.',
      invalidOptionsReasoning: {
        B: 'Comete un error de cálculo (8 × 50 = 400).',
        C: 'Suma los números del enunciado (50 + 9 = 59).',
        D: 'Multiplica 5 × 9 = 45 olvidando el cero de las decenas ($450).'
      },
      socraticHints: {
        recordar: '¿Cuánto vale un solo dulce y cuántos dulces va a comprar Pablo?',
        comprender: 'Si multiplicas 5 decenas por 9, ¿cuántas decenas obtienes?',
        aplicar: 'Calcula en tu cuaderno: 50 × 9 = 450.',
        analizar: '¿Por qué sumar 9 veces el 50 da exactamente $450?'
      }
    },
    {
      id: 311,
      grade: 3,
      questionNumber: 11,
      title: 'Evento imposible con pelotas en la bolsa',
      statement: 'Pedro tiene una bolsa que contiene únicamente pelotas blancas y negras.\n\nSi Pedro elige al azar una de las pelotas de la bolsa, ¿qué tan posible es que saque una pelota azul?',
      options: [
        { number: 1, letter: 'A', text: 'Poco posible.' },
        { number: 2, letter: 'B', text: 'Muy posible.' },
        { number: 3, letter: 'C', text: 'Seguro.' },
        { number: 4, letter: 'D', text: 'Imposible.' }
      ],
      correctOption: 4,
      correctLetter: 'D',
      competency: 'Razonamiento y argumentación',
      component: 'Aleatorio',
      affirmation: 'Explica la naturaleza de eventos posibles, imposibles o seguros.',
      evidence: 'Determina cuándo un evento tiene probabilidad cero (imposible).',
      standard: 'Explico desde mi experiencia la posibilidad o imposibilidad de eventos.',
      justification: 'Como en la bolsa no hay ninguna pelota azul (0 casos favorables), es completamente imposible sacar una pelota azul.',
      invalidOptionsReasoning: {
        A: 'Poco posible implica probabilidad mayor a cero.',
        B: 'Muy posible requiere una alta proporción de casos favorables.',
        C: 'Seguro significa que todas las pelotas tendrían que ser azules.'
      },
      socraticHints: {
        recordar: '¿Hay alguna pelota azul dentro de la bolsa de Pedro?',
        comprender: 'Si un objeto no existe en el conjunto, ¿puede ser extraído al azar?',
        aplicar: 'Escribe en tu cuaderno: "Evento Imposible = aquel que nunca puede ocurrir (Probabilidad = 0)".',
        analizar: '¿Por qué la ausencia total de pelotas azules hace que el suceso sea imposible?'
      }
    },
    {
      id: 312,
      grade: 3,
      questionNumber: 12,
      title: 'Fruta más probable en el frutero',
      statement: 'Un vendedor tiene una bolsa con frutas: 3 naranjas, 2 bananos, 2 piñas y 1 limón. Le dará a Rosalba una fruta del tipo del que más haya en la bolsa.\n\n¿Cuál es la fruta que el vendedor le dará a Rosalba?',
      options: [
        { number: 1, letter: 'A', text: 'Piña.' },
        { number: 2, letter: 'B', text: 'Limón.' },
        { number: 3, letter: 'C', text: 'Naranja.' },
        { number: 4, letter: 'D', text: 'Banano.' }
      ],
      correctOption: 3,
      correctLetter: 'C',
      competency: 'Razonamiento y argumentación',
      component: 'Aleatorio',
      affirmation: 'Toma decisiones a partir de la comparación del nivel de posibilidad.',
      evidence: 'Identifica el dato con mayor frecuencia en un conjunto.',
      standard: 'Describo situaciones o eventos a partir de un conjunto de datos.',
      justification: 'La fruta con mayor cantidad en la bolsa es la naranja (3 unidades), frente a bananos (2), piñas (2) y limón (1). Por tanto, la naranja es la que tiene mayor probabilidad.',
      invalidOptionsReasoning: {
        A: 'Piñas solo hay 2 unidades.',
        B: 'Limón solo hay 1 unidad (es la menos frecuente).',
        D: 'Bananos solo hay 2 unidades.'
      },
      socraticHints: {
        recordar: 'Haz el conteo de cada fruta: ¿cuántas naranjas, bananos, piñas y limones hay?',
        comprender: '¿Cuál número es mayor entre 3, 2, 2 y 1?',
        aplicar: 'Anota en tu cuaderno: Naranjas = 3 (Mayor cantidad).',
        analizar: '¿Por qué la mayor cantidad de elementos otorga la mayor probabilidad de elección?'
      }
    },
    {
      id: 313,
      grade: 3,
      questionNumber: 13,
      title: 'Propiedad común en edades de niños elegidos',
      statement: 'A nueve niños les preguntaron su edad: 7, 6, 8, 6, 7, 9, 9, 10 y 6 años. Luego, se escogieron 4 niños con las siguientes edades: 8 años, 9 años, 9 años y 10 años.\n\n¿Qué tienen en común las edades de los niños elegidos?',
      options: [
        { number: 1, letter: 'A', text: 'Sus edades son números pares.' },
        { number: 2, letter: 'B', text: 'Sus edades son mayores que 7 años.' },
        { number: 3, letter: 'C', text: 'Sus edades son menores que 7 años.' },
        { number: 4, letter: 'D', text: 'Sus edades son números impares.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Razonamiento y argumentación',
      component: 'Numérico-Variacional',
      affirmation: 'Reconoce relaciones de orden y propiedades entre números.',
      evidence: 'Identifica características que cumple un subconjunto numérico.',
      standard: 'Reconozco relaciones entre números (ser mayor que, ser menor que) en diferentes contextos.',
      justification: 'Las edades del grupo seleccionado son 8, 9, 9 y 10. Todos estos números son estrictamente mayores que 7 (8>7, 9>7, 10>7).',
      invalidOptionsReasoning: {
        A: '9 es un número impar, por lo que no todas son pares.',
        C: 'Ninguno tiene menos de 7 años.',
        D: '8 y 10 son números pares, por lo que no todas son impares.'
      },
      socraticHints: {
        recordar: '¿Cuáles son las 4 edades seleccionadas?',
        comprender: 'Compara 8, 9, 9 y 10 con el número 7: ¿son mayores o menores?',
        aplicar: 'Verifica la propiedad de par/impar: 8 (par), 9 (impar), 10 (par). ¿Se cumple para todos?',
        analizar: '¿Por qué la afirmación "mayores que 7 años" es la única que se cumple sin excepción?'
      }
    },
    {
      id: 314,
      grade: 3,
      questionNumber: 14,
      title: 'Comparación de puntajes en torneo deportivo',
      statement: 'En un torneo, Juliana obtuvo: Gimnasia 3 puntos, Atletismo 5 puntos. Felipe obtuvo en el gráfico: Gimnasia 2 puntos, Atletismo 4 puntos.\n\n¿Cuántos puntos le faltaron a Felipe en gimnasia para tener la misma cantidad que Juliana en gimnasia?',
      options: [
        { number: 1, letter: 'A', text: '1 punto.' },
        { number: 2, letter: 'B', text: '2 puntos.' },
        { number: 3, letter: 'C', text: '3 puntos.' },
        { number: 4, letter: 'D', text: '4 puntos.' }
      ],
      correctOption: 1,
      correctLetter: 'A',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Aleatorio',
      affirmation: 'Compara información presentada en distintos tipos de registro.',
      evidence: 'Determina diferencias entre datos de tablas y gráficas.',
      standard: 'Resuelvo y formulo preguntas que requieran coleccionar y analizar datos.',
      justification: 'Juliana en gimnasia obtuvo 3 puntos y Felipe obtuvo 2 puntos. La diferencia es 3 - 2 = 1 punto.',
      invalidOptionsReasoning: {
        B: '2 puntos es el puntaje que obtuvo Felipe, no la diferencia faltante.',
        C: '3 puntos es el puntaje de Juliana.',
        D: '4 puntos es el puntaje de Felipe en atletismo.'
      },
      socraticHints: {
        recordar: '¿Cuánto sacó Juliana en gimnasia y cuánto sacó Felipe en gimnasia?',
        comprender: '¿Qué operación te permite saber cuánto le falta a 2 para llegar a 3?',
        aplicar: 'Resta en tu cuaderno: 3 - 2 = 1.',
        analizar: '¿Por qué 1 punto adicional igualaría los puntajes en esa disciplina?'
      }
    },
    {
      id: 315,
      grade: 3,
      questionNumber: 15,
      title: 'Variación lineal del peso del perro',
      statement: 'La gráfica muestra el peso (kg) de un perro a medida que crece:\n- A los 3 meses pesa 3 kg\n- A los 4 meses pesa 6 kg\n- A los 5 meses pesa 9 kg\n\n¿Cuál de las siguientes afirmaciones es verdadera sobre el peso del perro a medida que crece?',
      options: [
        { number: 1, letter: 'A', text: 'Cada tres meses aumenta 1 kg.' },
        { number: 2, letter: 'B', text: 'Cada mes aumenta 3 kg.' },
        { number: 3, letter: 'C', text: 'Cada mes aumenta el doble del mes anterior.' },
        { number: 4, letter: 'D', text: 'Cada tres meses aumenta un peso diferente.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Razonamiento y argumentación',
      component: 'Numérico-Variacional',
      affirmation: 'Describe regularidades de variación lineal utilizando gráficas.',
      evidence: 'Identifica la razón de cambio constante entre dos magnitudes.',
      standard: 'Describo cualitativamente situaciones de cambio y variación.',
      justification: 'De 3 a 4 meses aumenta 6 - 3 = 3 kg. De 4 a 5 meses aumenta 9 - 6 = 3 kg. La tasa de crecimiento mensual es constante e igual a 3 kg por mes.',
      invalidOptionsReasoning: {
        A: 'Invierte las magnitudes (confunde meses con kilogramos).',
        C: 'No se duplica (3 a 6 es el doble, pero 6 a 9 no es el doble).',
        D: 'El aumento es perfectamente constante y regular.'
      },
      socraticHints: {
        recordar: '¿Cuánto pesaba a los 3 meses y cuánto a los 4 meses?',
        comprender: 'Calcula la resta: 6 - 3 = ? y luego 9 - 6 = ?',
        aplicar: 'Escribe en tu cuaderno: "Patrón de cambio = +3 kg por cada 1 mes".',
        analizar: '¿Por qué una línea recta en la gráfica representa un crecimiento constante?'
      }
    },
    {
      id: 316,
      grade: 3,
      questionNumber: 16,
      title: 'Costo unitario de bolas de helado',
      statement: 'El heladero dice: "Cada bola de helado vale lo mismo y con 8 monedas se pueden comprar 4 bolas de helado".\n\n¿Cuánto vale solo una bola de helado?',
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
      affirmation: 'Identifica la relación de reparto y división entre dos magnitudes.',
      evidence: 'Calcula el valor unitario a partir de un total agrupado.',
      standard: 'Uso diversas estrategias de cálculo para resolver problemas multiplicativos.',
      justification: 'Dividiendo las 8 monedas en partes iguales entre las 4 bolas: 8 ÷ 4 = 2 monedas por cada bola.',
      invalidOptionsReasoning: {
        A: 'Con 1 moneda solo compraría 4 monedas en total (4 × 1 = 4).',
        C: '4 es la cantidad de bolas de helado.',
        D: '8 monedas es el costo de las 4 bolas juntas.'
      },
      socraticHints: {
        recordar: '¿Cuántas monedas pagó en total y cuántas bolas recibió?',
        comprender: '¿Qué número multiplicado por 4 da 8?',
        aplicar: 'Divide en tu cuaderno: 8 ÷ 4 = 2.',
        analizar: '¿Por qué 4 bolas a 2 monedas cada una suman exactamente 8 monedas?'
      }
    },
    {
      id: 317,
      grade: 3,
      questionNumber: 17,
      title: 'Distancia entre islas consecutivas en recta numérica',
      statement: 'Un barco navega en línea recta hacia una ciudad pasando por islas:\n- Barco: 0 km\n- Isla 1: 3 km\n- Isla 2: 6 km\n- Isla 3: 9 km\n- Ciudad: 12 km\n\nSegún el mapa, ¿cuál es la distancia entre dos islas consecutivas?',
      options: [
        { number: 1, letter: 'A', text: '1 km.' },
        { number: 2, letter: 'B', text: '3 km.' },
        { number: 3, letter: 'C', text: '6 km.' },
        { number: 4, letter: 'D', text: '12 km.' }
      ],
      correctOption: 2,
      correctLetter: 'B',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Espacial-Métrico',
      affirmation: 'Realiza mediciones en sistemas de referencia convencionales.',
      evidence: 'Calcula la distancia constante entre puntos de una escala lineal.',
      standard: 'Realizo y describo procesos de medición de distancias con patrones.',
      justification: 'Restando las posiciones de islas seguidas: 6 - 3 = 3 km, o 9 - 6 = 3 km. La distancia entre islas consecutivas es de 3 km.',
      invalidOptionsReasoning: {
        A: 'Confunde islas consecutivas con unidades de 1 en la recta.',
        C: '6 km es la distancia del barco a la Isla 2.',
        D: '12 km es la distancia total del barco hasta la ciudad.'
      },
      socraticHints: {
        recordar: '¿En qué kilómetros están ubicadas la primera y la segunda isla?',
        comprender: '¿Cuántos kilómetros hay que recorrer para ir desde el km 3 hasta el km 6?',
        aplicar: 'Escribe en tu cuaderno: 6 km - 3 km = 3 km.',
        analizar: '¿Por qué el patrón 0, 3, 6, 9, 12 va de 3 en 3 kilómetros?'
      }
    },
    {
      id: 318,
      grade: 3,
      questionNumber: 18,
      title: 'Reflexión geométrica con témpera en hoja doblada',
      statement: 'Gabriela dibujó con témpera un triángulo; después, dobló la hoja por la mitad en dos partes iguales y, como la témpera no se había secado, se formó otro triángulo al lado derecho de la hoja.\n\nCuando Gabriela desdobla y abre la hoja, observa que el triángulo que ella dibujó ha sido:',
      options: [
        { number: 1, letter: 'A', text: 'reducido.' },
        { number: 2, letter: 'B', text: 'trasladado.' },
        { number: 3, letter: 'C', text: 'reflejado.' },
        { number: 4, letter: 'D', text: 'ampliado.' }
      ],
      correctOption: 3,
      correctLetter: 'C',
      competency: 'Comunicación, modelación y representación',
      component: 'Espacial-Métrico',
      affirmation: 'Reconoce movimientos simples en el plano: rotación, traslación y reflexión.',
      evidence: 'Identifica la imagen refleja respecto a un eje de simetría (pliegue de la hoja).',
      standard: 'Reconozco y valoro simetrías en distintos aspectos del arte y el diseño.',
      justification: 'Al doblar la hoja por la mitad, la línea del pliegue actúa como un eje de simetría axial, produciendo una figura reflejada (efecto espejo) del mismo tamaño pero orientación opuesta.',
      invalidOptionsReasoning: {
        A: 'No cambia de tamaño (no se reduce).',
        B: 'En una traslación la figura no se invierte como en un espejo.',
        D: 'No se amplía, conserva las mismas dimensiones.'
      },
      socraticHints: {
        recordar: '¿Qué ocurre con tu imagen cuando te miras en un espejo?',
        comprender: '¿Qué representa la línea de doblez de la hoja en geometría?',
        aplicar: 'Anota en tu cuaderno: "Reflexión = transformación geométrica que genera una imagen especular respecto a un eje".',
        analizar: '¿Por qué doblar la hoja crea una reflexión y no una simple traslación?'
      }
    },
    {
      id: 319,
      grade: 3,
      questionNumber: 19,
      title: 'Ubicación y distancias frente a la tarima escolar',
      statement: 'En la figura se observa la ubicación de 4 estudiantes frente a una tarima escolar en una cuadrícula (cada cuadro mide 100 cm de ancho por 50 cm de alto):\n- María y Ana están en la fila superior.\n- Sofía está ubicada a 2 cuadros de 100 cm a la derecha de la tarima.\n\nSegún la ubicación de los estudiantes, ¿cuál de las siguientes afirmaciones es verdadera?',
      options: [
        { number: 1, letter: 'A', text: 'La distancia entre Ana y Juan es 100 cm.' },
        { number: 2, letter: 'B', text: 'Juan está a 100 cm de la tarima.' },
        { number: 3, letter: 'C', text: 'La distancia entre María y Ana es 50 cm.' },
        { number: 4, letter: 'D', text: 'Sofía está a 200 cm de la tarima.' }
      ],
      correctOption: 4,
      correctLetter: 'D',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Espacial-Métrico',
      affirmation: 'Realiza mediciones en sistemas de referencia bidimensionales.',
      evidence: 'Calcula distancias horizontales y verticales a partir de escalas dadas.',
      standard: 'Reconozco nociones de horizontalidad y verticalidad con respecto a sistemas de referencia.',
      justification: 'Sofía está separada de la tarima por 2 cuadros horizontales. Como cada cuadro mide 100 cm de ancho, la distancia es 2 × 100 cm = 200 cm.',
      invalidOptionsReasoning: {
        A: 'Ana y Juan tienen separación vertical y horizontal mucho mayor.',
        B: 'Juan está a 3 cuadros horizontales de la tarima (300 cm).',
        C: 'María y Ana están separadas por 2 cuadros horizontales (200 cm), no 50 cm.'
      },
      socraticHints: {
        recordar: '¿Cuánto mide el ancho de cada cuadro en la convención de la figura?',
        comprender: 'Cuenta cuántos cuadros separan a Sofía del borde de la tarima.',
        aplicar: 'Multiplica en tu cuaderno: 2 cuadros × 100 cm = 200 cm.',
        analizar: '¿Por qué la opción D es la única afirmación matemáticamente exacta?'
      }
    },
    {
      id: 320,
      grade: 3,
      questionNumber: 20,
      title: 'Conteo de cubos en una caja tridimensional',
      statement: 'Martina armó la figura de una caja cúbica usando cubos iguales de madera (2 cubos de ancho × 2 cubos de largo × 2 cubos de alto).\n\n¿Cuántos cubos usó Martina en total para armar la caja?',
      options: [
        { number: 1, letter: 'A', text: '8' },
        { number: 2, letter: 'B', text: '6' },
        { number: 3, letter: 'C', text: '4' },
        { number: 4, letter: 'D', text: '2' }
      ],
      correctOption: 1,
      correctLetter: 'A',
      competency: 'Planteamiento y resolución de problemas',
      component: 'Espacial-Métrico',
      affirmation: 'Resuelve problemas de medición y volumen de sólidos regulares.',
      evidence: 'Usa composición para encontrar la cantidad de unidades cúbicas de un sólido.',
      standard: 'Diferencio atributos y propiedades de objetos tridimensionales.',
      justification: 'El cubo tiene 2 unidades de largo, 2 de ancho y 2 de altura. Su volumen en cubitos es: 2 × 2 × 2 = 8 cubos (4 en la base inferior y 4 en el piso superior).',
      invalidOptionsReasoning: {
        B: '6 es el número de caras que tiene un cubo, no la cantidad de cubitos.',
        C: '4 es solo la cantidad de cubitos visibles en la cara frontal.',
        D: '2 es únicamente la medida de una de sus aristas.'
      },
      socraticHints: {
        recordar: '¿Cuántos cubos hay en el primer piso (base) y cuántos en el segundo piso?',
        comprender: '¿Cómo se calcula el volumen multiplicando largo × ancho × alto?',
        aplicar: 'Calcula en tu cuaderno: 2 × 2 × 2 = 8.',
        analizar: '¿Por qué para formar un bloque sólido 3D de 2x2x2 se requieren exactamente 8 cubitos?'
      }
    }
  ]
};
