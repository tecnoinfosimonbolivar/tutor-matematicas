// Banco Oficial ICFES Evaluar para Avanzar - Grado 11° (Preguntas 1 a 20 Oficiales)
// Institución Educativa Técnica Simón Bolívar - Ibagué, Tolima
import { Question } from '../types';

export const OFFICIAL_GRADE_11: Question[] = [
  {
    id: 1101,
    grade: 11,
    questionNumber: 1,
    title: 'Gasto en paquetes de galletas vigentes',
    statement: 'En una tienda hay 10 paquetes de galletas del mismo precio p cada uno. Una persona revisa la fecha de vencimiento y encuentra que 4 de los paquetes están vencidos, por lo que decide comprar únicamente los paquetes que no están vencidos.\n\n¿Cuánto dinero gastó la persona en la compra de las galletas?',
    options: [
      { number: 1, letter: 'A', text: '4p' },
      { number: 2, letter: 'B', text: '10p' },
      { number: 3, letter: 'C', text: '6p' },
      { number: 4, letter: 'D', text: '14p' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Formulación y ejecución',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas que involucran el planteamiento de expresiones algebraicas de costo.',
    evidence: 'Calcula la cantidad de artículos no defectuosos y multiplica por el precio unitario.',
    standard: 'Utilizo las técnicas de aproximación en procesos numéricos y algebraicos.',
    justification: 'De los 10 paquetes en total, se descartan los 4 vencidos, quedando 10 - 4 = 6 paquetes en buen estado. Al costar cada paquete un precio p, el gasto total realizado es 6 × p = 6p.',
    invalidOptionsReasoning: {
      A: '4p es el costo de los paquetes vencidos que la persona NO compró.',
      B: '10p es el costo de todos los paquetes de la tienda si comprara todo.',
      D: '14p suma erróneamente 10 + 4.'
    },
    socraticHints: {
      recordar: '¿Cuántos paquetes de galletas había en total en la tienda (10)?',
      comprender: 'Si 4 están vencidos y no se compran, ¿cuántos paquetes aptos para el consumo quedan?',
      aplicar: 'Calcula en tu cuaderno: (10 - 4) × p = 6p.',
      analizar: '¿Por qué la expresión 6p representa exactamente el dinero pagado en caja?'
    }
  },
  {
    id: 1102,
    grade: 11,
    questionNumber: 2,
    title: 'Validación de resultados en juego de piedra, papel o tijera',
    statement: 'Andrés y Diego juegan "piedra, papel o tijera" para decidir qué merienda reciben:\n- Si gana Andrés, recibe un sándwich y una fruta.\n- Si gana Diego, Diego recibe el sándwich y Andrés recibe solo la fruta.\n\nEn la Tabla 2 de resultados posibles, la Casilla 3 registra la jugada: "Andrés juega Tijera y Diego juega Piedra", y la tabla le asigna a Andrés "Sándwich y fruta".\n\n¿Cuál casilla de la tabla presenta un error en la asignación de la merienda?',
    options: [
      { number: 1, letter: 'A', text: 'La casilla 1' },
      { number: 2, letter: 'B', text: 'La casilla 3' },
      { number: 3, letter: 'C', text: 'La casilla 5' },
      { number: 4, letter: 'D', text: 'La casilla 7' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Argumentación',
    component: 'Aleatorio',
    affirmation: 'Valida la consistencia de tablas de doble entrada según reglas de juegos estructurados.',
    evidence: 'Identifica la celda donde la regla de victoria/derrota fue invertida erróneamente.',
    standard: 'Justifico o refuto afirmaciones a partir de análisis de resultados en tablas.',
    justification: 'En las reglas del juego, la Piedra vence a la Tijera. Cuando Andrés saca Tijera y Diego saca Piedra, el ganador es Diego. Por tanto, Andrés solo debía recibir la fruta. Al asignarle la casilla 3 "Sándwich y fruta" a Andrés, se comete un error evidente.',
    invalidOptionsReasoning: {
      A: 'La casilla 1 es consistente con las reglas.',
      C: 'La casilla 5 respeta la regla asignada.',
      D: 'La casilla 7 describe adecuadamente la condición de empate o victoria.'
    },
    socraticHints: {
      recordar: 'En el juego de piedra, papel o tijera, ¿quién gana entre Tijera y Piedra?',
      comprender: 'Si Andrés sacó Tijera y Diego sacó Piedra, ¿quién ganó la ronda?',
      aplicar: 'Verifica la regla: si gana Diego, Andrés NO recibe sándwich.',
      analizar: '¿Por qué la casilla 3 contradice las reglas del juego acordadas?'
    }
  },
  {
    id: 1103,
    grade: 11,
    questionNumber: 3,
    title: 'Probabilidad de eventos independientes en días consecutivos',
    statement: 'Andrés calcula la probabilidad de ganar el juego tanto el lunes como el martes. La probabilidad de ganar un día cualquiera es 3/9 (o 1/3). Andrés afirma que la probabilidad de ganar en ambos días consecutivos es:\n3/9 + 3/9 = 6/9.\n\n¿Por qué el procedimiento de Andrés es INCORRECTO?',
    options: [
      { number: 1, letter: 'A', text: 'Porque debió restar 3/9 menos 3/9 = 0.' },
      { number: 2, letter: 'B', text: 'Porque al tratarse de dos eventos independientes en días consecutivos, las probabilidades deben multiplicarse entre sí (3/9 × 3/9 = 9/81 = 1/9), y no sumarse.' },
      { number: 3, letter: 'C', text: 'Porque la probabilidad de ganar un día no es 3/9.' },
      { number: 4, letter: 'D', text: 'Porque debió sumar los denominadores también.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Argumentación',
    component: 'Aleatorio',
    affirmation: 'Diferencia la regla del producto (eventos independientes) de la regla de la suma (eventos disjuntos).',
    evidence: 'Identifica que P(A ∩ B) = P(A) × P(B) para experimentos compuestos independientes.',
    standard: 'Resuelvo y planteo problemas usando conceptos de conteo y probabilidad condicional e independiente.',
    justification: 'Los juegos del lunes y del martes son eventos aleatorios estadísticamente independientes. La probabilidad conjunta de que ocurran ambos sucesos se rige por la regla de la multiplicación: P(Lunes ∩ Martes) = P(Lunes) × P(Martes) = (1/3) × (1/3) = 1/9 (o 9/81). Sumar probabilidades aplica para la unión de eventos mutuamente excluyentes en un mismo ensayo, no para sucesos simultáneos en etapas independientes.',
    invalidOptionsReasoning: {
      A: 'La resta no calcula probabilidades compuestas.',
      C: 'La probabilidad de 3/9 por día sí es correcta según los 9 resultados del espacio muestral.',
      D: 'Las fracciones nunca se suman adicionando denominadores.'
    },
    socraticHints: {
      recordar: '¿Cuál es la regla de probabilidad para la intersección de dos eventos independientes A y B [P(A ∩ B) = P(A) · P(B)]?',
      comprender: '¿Afecta el resultado del juego del lunes a lo que ocurra en el juego del martes?',
      aplicar: 'Calcula en tu cuaderno: (3/9) × (3/9) = 9/81 = 1/9.',
      analizar: '¿Por qué la suma de probabilidades arrojaría un valor erróneo de 6/9 (~66%) cuando ganar dos veces seguidas es mucho más difícil (~11%)?'
    }
  },
  {
    id: 1104,
    grade: 11,
    questionNumber: 4,
    title: 'Equivalencia en gráfica apilada de exportaciones por país',
    statement: 'Una entidad recopila el valor en millones de dólares de las exportaciones anuales en 2008, 2009 y 2010 hacia cuatro destinos: Ecuador, Venezuela, EE.UU. y Resto del mundo.\n\n¿Cuál gráfica apilada representa de forma equivalente los valores exportados año por año, conservando el valor total acumulado y los segmentos proporcionales de cada país?',
    options: [
      { number: 1, letter: 'A', text: 'Gráfica A (Barras apiladas donde la altura total corresponde a la suma de los cuatro destinos para 2008, 2009 y 2010)' },
      { number: 2, letter: 'B', text: 'Gráfica B (Barras con orden de países invertido y totales truncados)' },
      { number: 3, letter: 'C', text: 'Gráfica C (Gráfica de líneas que confunde variables categóricas con continuas)' },
      { number: 4, letter: 'D', text: 'Gráfica D (Barras apiladas con escala distorsionada en el año 2009)' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Interpretación y representación',
    component: 'Aleatorio',
    affirmation: 'Transforma y compara registros gráficos de datos multidimensionales.',
    evidence: 'Identifica la gráfica de barras apiladas que conserva la suma total y la partición exacta por categorías.',
    standard: 'Interpreto analítica y críticamente información estadística proveniente de diversas fuentes.',
    justification: 'Una gráfica de barras apiladas suma los componentes individuales en una única columna por año. La Gráfica A presenta con precisión matemática la altura total de las exportaciones anuales y el grosor proporcional asignado a cada uno de los cuatro destinos comerciales.',
    invalidOptionsReasoning: {
      B: 'Muestra alturas incorrectas en los años 2008 y 2010.',
      C: 'Una línea continua no representa la suma apilada de categorías independientes.',
      D: 'El segmento de EE.UU. en 2009 está sobrestimado.'
    },
    socraticHints: {
      recordar: '¿Cómo funciona una gráfica de barras apiladas (suma de segmentos hacia arriba)?',
      comprender: '¿Cuál debe ser la altura total de la barra en cada año?',
      aplicar: 'Verifica en tu cuaderno la suma de los valores para 2008, 2009 y 2010.',
      analizar: '¿Por qué la Gráfica A es la única que mantiene la coherencia numérica de las sumas parciales y totales?'
    }
  },
  {
    id: 1105,
    grade: 11,
    questionNumber: 5,
    title: 'Total de pisos en conjunto cerrado de 5 casas pentagonales',
    statement: 'En un conjunto cerrado hay 5 casas ubicadas formando los vértices de un pentágono regular. Se sabe que todas las 5 casas tienen diferente número entero de pisos (del 1 al 5). La casa del señor Pérez tiene 5 pisos (es la más alta de todas).\n\n¿Cuántos pisos tienen en total las 5 casas del conjunto cerrado?',
    options: [
      { number: 1, letter: 'A', text: '10 pisos.' },
      { number: 2, letter: 'B', text: '15 pisos.' },
      { number: 3, letter: 'C', text: '20 pisos.' },
      { number: 4, letter: 'D', text: '25 pisos.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Formulación y ejecución',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas combinatorios y aritméticos de sumatorias con restricciones de unicidad.',
    evidence: 'Aplica la suma de los primeros n enteros positivos (1 + 2 + 3 + 4 + 5 = 15).',
    standard: 'Utilizo las técnicas de aproximación en procesos numéricos algebraicos.',
    justification: 'Al tener las 5 casas diferente número de pisos y ser la máxima de 5 pisos, las alturas de las 5 casas corresponden obligatoriamente a los enteros positivos distintos: 1, 2, 3, 4 y 5 pisos. Sumando el total: 1 + 2 + 3 + 4 + 5 = 15 pisos (Fórmula: n(n+1)/2 = 5(6)/2 = 15).',
    invalidOptionsReasoning: {
      A: '10 es la suma de 1 a 4 olvidando la casa de 5 pisos.',
      C: '20 asume 4 casas de 5 pisos.',
      D: '25 asume que todas las 5 casas tienen 5 pisos (5 × 5 = 25), violando la condición de que todas tienen diferente número de pisos.'
    },
    socraticHints: {
      recordar: 'Si son 5 casas y todas tienen diferente número de pisos entre 1 y 5, ¿cuántos pisos tiene cada una?',
      comprender: 'Las casas tienen 1, 2, 3, 4 y 5 pisos respectivamente.',
      aplicar: 'Suma en tu cuaderno: 1 + 2 + 3 + 4 + 5.',
      analizar: '¿Por qué la condición de unicidad impide que haya dos casas con la misma altura?'
    }
  },
  {
    id: 1106,
    grade: 11,
    questionNumber: 6,
    title: 'Rotación de figuras 90° en sentido horario respecto al origen',
    statement: 'En una clase de geometría, el docente pide realizar una rotación de 90° en sentido de las manecillas del reloj con centro en el origen (0,0) a una figura en el plano cartesiano. Cuatro estudiantes (I, II, III y IV) presentan sus transformaciones:\n- El estudiante I rotó un segmento verificando que el ángulo con el origen sea 90° horario.\n- El estudiante II rotó un triángulo conservando distancias al origen y ortogonalidad.\n- El estudiante III hizo una reflexión sobre el eje Y.\n- El estudiante IV hizo una traslación horizontal.\n\n¿Cuáles estudiantes realizaron correctamente la rotación de 90° en sentido horario?',
    options: [
      { number: 1, letter: 'A', text: 'Los estudiantes I y II solamente.' },
      { number: 2, letter: 'B', text: 'Los estudiantes II y III solamente.' },
      { number: 3, letter: 'C', text: 'Los estudiantes I y IV solamente.' },
      { number: 4, letter: 'D', text: 'Los estudiantes III y IV solamente.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Argumentación',
    component: 'Espacial-Métrico',
    affirmation: 'Identifica transformaciones rígidas en el plano cartesiano (rotaciones, reflexiones y traslaciones).',
    evidence: 'Verifica que la rotación de 90° en sentido horario mapea cada punto (x, y) en (y, -x).',
    standard: 'Reconozco y describo curvas o lugares geométricos mediante transformaciones.',
    justification: 'Una rotación horaria de 90° alrededor del origen transforma las coordenadas (x, y) en (y, -x), manteniendo inalterada la distancia radial al origen y girando los vectores de posición 90° en sentido horario. Los estudiantes I y II aplicaron con exactitud esta transformación isométrica, mientras que el estudiante III realizó una simetría axial y el IV una traslación.',
    invalidOptionsReasoning: {
      B: 'El estudiante III hizo una reflexión respecto al eje vertical, no una rotación.',
      C: 'El estudiante IV aplicó un desplazamiento lineal (traslación).',
      D: 'Ni III ni IV ejecutaron la rotación solicitada.'
    },
    socraticHints: {
      recordar: '¿Qué fórmula algebraica transforma las coordenadas en una rotación de 90° horaria? [(x, y) -> (y, -x)].',
      comprender: '¿Mantiene la rotación la misma distancia de cada vértice al punto origen (0,0)?',
      aplicar: 'Verifica los ángulos de giro en tu cuaderno para las figuras de los estudiantes I y II.',
      analizar: '¿Por qué la reflexión axial (estudiante III) invierte la orientación mientras que la rotación la preserva?'
    }
  },
  {
    id: 1107,
    grade: 11,
    questionNumber: 7,
    title: 'Deducción de relación de pesos entre cajas en bodega',
    statement: 'En una bodega de almacenamiento se registran tres equivalencias de peso con balanzas:\n(1) El peso de 2 cajas Cafés es igual al peso de 3 cajas Rojas (2C = 3R -> C = 1,5R).\n(2) El peso de 3 cajas Blancas es igual al peso de 2 cajas Amarillas (3B = 2A).\n(3) El peso de 3 cajas Verdes es igual al peso de 2 cajas Rojas (3V = 2R -> V = 2/3 R).\n\nAdemás, se proponen dos comparaciones adicionales:\n(4) 2 cajas Verdes pesan menos que 2 cajas Cafés (2V < 2C).\n(5) 2 cajas Amarillas pesan menos que 2 cajas Verdes.\n\n¿Cuál de las comparaciones adicionales (4 o 5) se puede deducir con total certeza a partir de las tres equivalencias iniciales?',
    options: [
      { number: 1, letter: 'A', text: 'El registro 5, porque involucra cajas de colores primarios.' },
      { number: 2, letter: 'B', text: 'El registro 4, porque de las equivalencias 1 y 3 se deduce la relación directa entre cajas cafés, rojas y verdes (C > R > V).' },
      { number: 3, letter: 'C', text: 'Ambos registros 4 y 5.' },
      { number: 4, letter: 'D', text: 'Ninguno de los registros.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Deduce desigualdades y transitividad a partir de sistemas de relaciones proporcionales.',
    evidence: 'Aplica la transitividad de relaciones de orden: C > R y R > V implican C > V, luego 2V < 2C.',
    standard: 'Utilizo números reales y relaciones algebraicas para resolver y deducir propiedades.',
    justification: 'De la ecuación (1): C = (3/2)R = 1,5R, por lo que una caja café pesa más que una roja (C > R). De la ecuación (3): V = (2/3)R ≈ 0,67R, por lo que una caja verde pesa menos que una roja (V < R). Por transitividad: C > R > V -> C > V, lo que garantiza rigurosamente que 2V < 2C (Registro 4). En cambio, no existe ningún vínculo entre el grupo (Café, Roja, Verde) y el grupo (Blanca, Amarilla), por lo que el registro 5 no se puede deducir.',
    invalidOptionsReasoning: {
      A: 'No hay ninguna balanza que compare el grupo de las amarillas con las verdes o rojas.',
      C: 'El registro 5 no cuenta con información de enlace.',
      D: 'El registro 4 sí se deduce de manera formal y matemática.'
    },
    socraticHints: {
      recordar: 'Escribe las razones de peso en tu cuaderno tomando la caja Roja como base (R = 1).',
      comprender: '¿Cuánto pesa una Café? (1,5). ¿Cuánto pesa una Verde? (0,67).',
      aplicar: 'Compara 2 Verdes (2 × 0,67 = 1,33) con 2 Cafés (2 × 1,5 = 3). ¿Es 1,33 < 3? Sí.',
      analizar: '¿Por qué no es posible saber nada sobre las cajas amarillas respecto a las verdes?'
    }
  },
  {
    id: 1108,
    grade: 11,
    questionNumber: 8,
    title: 'Organización de cajas en pila de mayor a menor peso',
    statement: 'Para apilar cajas de forma segura en la bodega, se deben colocar las más pesadas en la base inferior y las más livianas arriba (de mayor a menor peso, de abajo hacia arriba). Con base en las relaciones demostradas: Café = 1,5 Rojas, Roja = 1,0 Rojas, Verde = 0,67 Rojas:\n\n¿En cuál orden deben ubicarse las cajas de abajo hacia arriba en la pila?',
    options: [
      { number: 1, letter: 'A', text: 'Abajo: Verde | En medio: Roja | Arriba: Café' },
      { number: 2, letter: 'B', text: 'Abajo: Roja | En medio: Verde | Arriba: Café' },
      { number: 3, letter: 'C', text: 'Abajo: Café | En medio: Roja | Arriba: Verde' },
      { number: 4, letter: 'D', text: 'Abajo: Café | En medio: Verde | Arriba: Roja' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Interpretación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Ordena elementos según una relación transitiva de magnitudes de mayor a menor.',
    evidence: 'Aplica el orden descendente Peso(Café) > Peso(Roja) > Peso(Verde).',
    standard: 'Utilizo representaciones y relaciones de orden para formular y resolver problemas.',
    justification: 'Al ordenar los pesos de mayor a menor: Peso(Café) > Peso(Roja) > Peso(Verde). Para que la base sostenga la mayor carga, en la parte inferior (abajo) va la caja Café, en el centro la Roja y en la cúspide (arriba) la Verde más liviana (Opción C).',
    invalidOptionsReasoning: {
      A: 'Pone la caja más liviana (Verde) en la base inferior y la más pesada (Café) arriba, desestabilizando la pila.',
      B: 'Ubica la Roja en la base cuando la Café es más pesada.',
      D: 'Invierte el orden entre la Verde y la Roja en la parte superior.'
    },
    socraticHints: {
      recordar: '¿Cuál es la caja que pesa más de las tres (Café = 1,5R)?',
      comprender: '¿Cuál es la caja más liviana (Verde = 0,67R)?',
      aplicar: 'Escribe en tu cuaderno la secuencia de abajo hacia arriba: 1.° Base (Café) -> 2.° Medio (Roja) -> 3.° Cima (Verde).',
      analizar: '¿Por qué la opción C es la única estructura físicamente estable y matemáticamente ordenada?'
    }
  },
  {
    id: 1109,
    grade: 11,
    questionNumber: 9,
    title: 'Refutación a la hipótesis de José sobre el peso de cajas rojas y verdes',
    statement: 'José afirma que si una caja roja más una caja verde pesan juntas 100 kg (R + V = 100 kg), entonces la roja debe pesar 40 kg y la verde 60 kg, porque 3(40) = 2(60) = 120.\n\nEl razonamiento de José es:',
    options: [
      { number: 1, letter: 'A', text: 'Correcto, porque 40 + 60 = 100 y 3 × 40 = 2 × 60 = 120.' },
      { number: 2, letter: 'B', text: 'Incorrecto, porque la suma de 40 + 60 no da 100.' },
      { number: 3, letter: 'C', text: 'Correcto, porque las cajas verdes siempre pesan más que las rojas.' },
      { number: 4, letter: 'D', text: 'Incorrecto, porque de la balanza inicial 3 Verdes = 2 Rojas (3V = 2R) se deduce que V = (2/3)R, es decir, el peso de una caja verde es MENOR que el peso de una roja; José asignó 60 kg a la verde y 40 kg a la roja, invirtiendo la relación de las variables.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Valida o refuta soluciones de sistemas de ecuaciones lineales identificando inconsistencias algebraicas.',
    evidence: 'Comprueba que en 3V = 2R con R + V = 100, la solución es R = 60 kg y V = 40 kg, demostrando el error de asignación de José.',
    standard: 'Justifico o refuto afirmaciones a partir de deducciones algebraicas.',
    justification: 'La equivalencia de la balanza es 3V = 2R (3 verdes equilibran a 2 rojas), lo que significa que cada verde pesa V = (2/3)R = 0,67R (la verde es más liviana). Si R + V = 100 kg -> R + (2/3)R = 100 -> (5/3)R = 100 -> R = 60 kg y V = 40 kg. José cometió el error clásico de asignar el coeficiente opuesto: le puso 60 kg a la verde y 40 kg a la roja, violando la física de la balanza.',
    invalidOptionsReasoning: {
      A: 'Aunque 3(40)=2(60), José igualó 3R = 2V en vez de 3V = 2R.',
      B: '40 + 60 sí suma 100, pero los valores están intercambiados.',
      C: 'La caja verde es más liviana, no más pesada.'
    },
    socraticHints: {
      recordar: 'Si se necesitan 3 cajas verdes para igualar a solo 2 cajas rojas, ¿cuál caja es individualmente más pesada?',
      comprender: 'La caja roja es más pesada porque se necesitan menos de ellas para equilibrar la balanza.',
      aplicar: 'Resuelve en tu cuaderno: 3V = 2R con R + V = 100 -> R = 60 kg y V = 40 kg.',
      analizar: '¿Por qué la asignación de José (V = 60 y R = 40) es exactamente lo contrario a la realidad del sistema?'
    }
  },
  {
    id: 1110,
    grade: 11,
    questionNumber: 10,
    title: 'Representación simbólica de las equivalencias de balanzas',
    statement: 'Se pide escribir en lenguaje algebraico las tres afirmaciones de las balanzas:\n- Balanza 1: El peso de 2 cajas cafés equivale a 3 rojas.\n- Balanza 2: El peso de 3 cajas blancas equivale a 2 amarillas.\n- Balanza 3: El peso de 3 cajas verdes equivale a 2 rojas.\n\n¿Cuál es la representación simbólica correcta de este sistema?',
    options: [
      { number: 1, letter: 'A', text: '3C = 2R ; 2B = 3A ; 2V = 3R' },
      { number: 2, letter: 'B', text: 'C² = R³ ; B³ = A² ; V³ = R²' },
      { number: 3, letter: 'C', text: '2C = 3R ; 3B = 2A ; 3V = 2R' },
      { number: 4, letter: 'D', text: '2C + 3R = 0 ; 3B + 2A = 0 ; 3V + 2R = 0' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Interpretación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Traduce expresiones del lenguaje natural al lenguaje algebraico simbólico.',
    evidence: 'Asocia los coeficientes numéricos a las variables correspondientes sin alteración.',
    standard: 'Utilizo representaciones y relaciones de variación para modelar situaciones.',
    justification: 'Traduciendo literalmente cada enunciado: "2 cajas cafés equivalen a 3 rojas" -> 2C = 3R; "3 cajas blancas equivalen a 2 amarillas" -> 3B = 2A; "3 cajas verdes equivalen a 2 rojas" -> 3V = 2R. Esta terna coincide en la opción C.',
    invalidOptionsReasoning: {
      A: 'Invierte los coeficientes de las variables en las tres ecuaciones.',
      B: 'Escribe potencias en lugar de múltiplos multiplicativos.',
      D: 'Escribe sumas igualadas a cero, lo cual implicaría pesos negativos.'
    },
    socraticHints: {
      recordar: '¿Cómo se representa "2 veces el peso de C igual a 3 veces el peso de R"?',
      comprender: 'Revisa cada uno de los 3 enunciados y comprueba sus coeficientes.',
      aplicar: 'Escribe en tu cuaderno: 2C = 3R; 3B = 2A; 3V = 2R.',
      analizar: '¿Por qué la opción C es la única traducción algebraica fiel al texto original?'
    }
  },
  {
    id: 1111,
    grade: 11,
    questionNumber: 11,
    title: 'Suficiencia de información en ingresos de ventas de marzo y abril',
    statement: 'En una tienda de artículos de cuero se venden cuatro productos: Billeteras, Carteras, Correas y Chaquetas. Una gráfica de barras muestra las cantidades de unidades vendidas de cada producto en marzo y en abril. El dueño del almacén sabe que el ingreso total mensual es igual a la suma del producto de las unidades vendidas por el precio de cada artículo: Ingreso = Σ (Unidades × Precio).\nUn analista observa que la suma de unidades totales vendidas en marzo y abril es similar y afirma que "los ingresos obtenidos por la tienda en marzo y abril fueron exactamente iguales".\n\n¿La información que muestra la gráfica es suficiente para confirmar la afirmación del analista?',
    options: [
      { number: 1, letter: 'A', text: 'No, porque los ingresos dependen del precio de venta de cada producto, y la gráfica únicamente muestra el número de unidades vendidas de cada artículo pero no indica los precios.' },
      { number: 2, letter: 'B', text: 'Sí, porque basta con sumar la altura de las barras de marzo y compararla con la suma de las barras de abril.' },
      { number: 3, letter: 'C', text: 'No, porque faltó incluir las ventas del mes de mayo y junio.' },
      { number: 4, letter: 'D', text: 'Sí, porque el número de productos vendidos en ambos meses es idéntico para todos los artículos.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Argumentación',
    component: 'Aleatorio',
    affirmation: 'Evalúa la suficiencia de la información estadística para validar inferencias económicas.',
    evidence: 'Identifica que para calcular el valor total de una variable dependiente (Ingreso) se requiere conocer el vector de precios ponderadores.',
    standard: 'Justifico o refuto afirmaciones a partir de análisis de información cuantitativa.',
    justification: 'El ingreso total es una suma ponderada: Ingreso = (Unidades_billeteras × Precio_billetera) + (Unidades_carteras × Precio_cartera) + (Unidades_correas × Precio_correa) + (Unidades_chaquetas × Precio_chaqueta). Como los precios de los cuatro productos son diferentes (por ejemplo, una chaqueta cuesta mucho más que una billetera), vender más chaquetas en un mes genera ingresos mucho mayores aunque el número total de unidades sea el mismo. Dado que la gráfica no proporciona los precios de los productos, la información es INSUFICIENTE para validar la afirmación.',
    invalidOptionsReasoning: {
      B: 'Sumar unidades físicas ignora el valor monetario de cada tipo de artículo.',
      C: 'El análisis solo compara marzo y abril, los meses siguientes no son el motivo de insuficiencia.',
      D: 'Las cantidades por artículo variaron entre ambos meses.'
    },
    socraticHints: {
      recordar: '¿Cuesta lo mismo una chaqueta de cuero que una billetera pequeña?',
      comprender: '¿Cómo se calcula el ingreso total en dinero de una tienda?',
      aplicar: 'Escribe en tu cuaderno: Ingreso = Unidades × Precio.',
      analizar: '¿Por qué conocer solo la cantidad de unidades sin saber el precio en pesos hace imposible saber el dinero recaudado?'
    }
  },
  {
    id: 1112,
    grade: 11,
    questionNumber: 12,
    title: 'Producto con mayor cambio porcentual en ventas',
    statement: 'Para analizar el desempeño de la tienda, se calcula el cambio porcentual en las unidades vendidas de marzo a abril mediante la fórmula:\nCambio porcentual = [ | Unidades en abril - Unidades en marzo | / Unidades en marzo ] × 100 %.\nLos datos de ventas fueron:\n- Billeteras: Marzo = 5 | Abril = 15 -> Cambio = (|15 - 5| / 5) × 100 % = (10 / 5) × 100 % = 200 %\n- Carteras: Marzo = 20 | Abril = 25 -> Cambio = (|25 - 20| / 20) × 100 % = (5 / 20) × 100 % = 25 %\n- Correas: Marzo = 30 | Abril = 40 -> Cambio = (|40 - 30| / 30) × 100 % = (10 / 30) × 100 % = 33,3 %\n- Chaquetas: Marzo = 10 | Abril = 12 -> Cambio = (|12 - 10| / 10) × 100 % = (2 / 10) × 100 % = 20 %\n\n¿Cuál producto tuvo el MAYOR cambio porcentual de ventas de marzo a abril?',
    options: [
      { number: 1, letter: 'A', text: 'Billeteras (con un cambio del 200 %).' },
      { number: 2, letter: 'B', text: 'Carteras (con un cambio del 25 %).' },
      { number: 3, letter: 'C', text: 'Correas (con un cambio del 33,3 %).' },
      { number: 4, letter: 'D', text: 'Chaquetas (con un cambio del 20 %).' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Formulación y ejecución',
    component: 'Numérico-Variacional',
    affirmation: 'Calcula y compara tasas de cambio porcentual relativo.',
    evidence: 'Aplica la fórmula de variación porcentual relativa (|V2 - V1| / V1) × 100 e identifica el valor máximo.',
    standard: 'Resuelvo y formulo problemas en contextos de variación y tasas relativas.',
    justification: 'Al evaluar la fórmula para cada artículo, las Billeteras pasaron de 5 a 15 unidades, triplicando sus ventas, lo que representa un incremento relativo del (15 - 5)/5 × 100 % = 200 %. Este porcentaje supera ampliamente al de los otros tres artículos (25%, 33,3% y 20%).',
    invalidOptionsReasoning: {
      B: '25% es muy inferior al 200%.',
      C: 'Correas aumentó 10 unidades igual que billeteras, pero sobre una base de 30 da solo 33,3%.',
      D: 'Chaquetas solo aumentó 20%.'
    },
    socraticHints: {
      recordar: '¿Cómo se calcula el porcentaje de variación respecto al valor inicial?',
      comprender: '¿Por qué un aumento de 10 sobre una base de 5 (200%) es proporcionalmente mucho mayor que 10 sobre una base de 30 (33%)?',
      aplicar: 'Calcula en tu cuaderno: (10 / 5) × 100 = 200%.',
      analizar: '¿Por qué la tasa de crecimiento relativo depende fundamentalmente del valor base inicial?'
    }
  },
  {
    id: 1113,
    grade: 11,
    questionNumber: 13,
    title: 'Actualización de tabla de relaciones comerciales con país W',
    statement: 'Una tabla describe las relaciones de compra/venta entre los países P, Q, R y S. Se incorpora un nuevo país W con las siguientes condiciones comerciales:\n- Los países P y R le compran productos al país W (es decir, W le vende a P y a R).\n- El país W no le compra productos a ninguno de los países P, Q, R ni S (todos sus registros de compra son "No").\n\n¿Cuál de las siguientes tablas incluye correctamente al país W respetando estas condiciones comerciales?',
    options: [
      { number: 1, letter: 'A', text: 'Tabla A (Donde W le compra a todos los países)' },
      { number: 2, letter: 'B', text: 'Tabla B (Donde P y R aparecen como vendedores hacia W)' },
      { number: 3, letter: 'C', text: 'Tabla C (En la columna de W: P = Sí, R = Sí, Q = No, S = No; y en la fila de W todos los registros de compra son "No")' },
      { number: 4, letter: 'D', text: 'Tabla D (Donde W le vende a Q y a S)' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Interpretación y representación',
    component: 'Aleatorio',
    affirmation: 'Construye y actualiza matrices de adyacencia y tablas de relaciones binarias.',
    evidence: 'Ubica filas y columnas según el rol emisor/receptor en una tabla de doble entrada.',
    standard: 'Interpreto analítica y críticamente información en matrices y tablas.',
    justification: 'En la matriz de relaciones de comercio: los compradores que le adquieren al país W son P y R (marcando "Sí" en sus cruces de compra a W). Como W no compra a ningún país, en la fila de compras realizadas por W todos los valores deben ser "No". Esta configuración exacta está en la Tabla C.',
    invalidOptionsReasoning: {
      A: 'Asigna compras activas a W cuando el enunciado dice que no le compra a nadie.',
      B: 'Invierte las relaciones comerciales.',
      D: 'Asigna ventas de W a los países equivocados (Q y S).'
    },
    socraticHints: {
      recordar: '¿Quiénes le compran al país W? (Los países P y R).',
      comprender: '¿A quiénes le compra el país W? (A nadie, todos son "No").',
      aplicar: 'Verifica la fila de W y la columna de W en la Tabla C.',
      analizar: '¿Por qué la Tabla C es la única matriz binaria consistente con los dos postulados comerciales?'
    }
  },
  {
    id: 1114,
    grade: 11,
    questionNumber: 14,
    title: 'Cálculo de área en potrero rectangular con razón 2 a 1',
    statement: 'Un ganadero tiene un potrero de forma rectangular en el que la longitud del lado mayor y la del lado menor están en razón 2 a 1 (Largo = 2 × Ancho). Se sabe que el lado de mayor longitud mide 20 metros.\n\n¿Cuál es el área total del potrero rectangular?',
    options: [
      { number: 1, letter: 'A', text: '40 m²' },
      { number: 2, letter: 'B', text: '100 m²' },
      { number: 3, letter: 'C', text: '200 m²' },
      { number: 4, letter: 'D', text: '400 m²' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Formulación y ejecución',
    component: 'Espacial-Métrico',
    affirmation: 'Resuelve problemas métricos aplicando razones de proporcionalidad geométrica.',
    evidence: 'Calcula la dimensión menor (20 / 2 = 10 m) y aplica la fórmula de área A = largo × ancho.',
    standard: 'Selecciono y uso técnicas e instrumentos para medir áreas con niveles de precisión adecuados.',
    justification: 'Si la razón entre el lado mayor y el menor es 2:1, y el lado mayor mide 20 m, el lado menor mide 20 / 2 = 10 m. El área de un rectángulo se calcula multiplicando base por altura: Área = 20 m × 10 m = 200 m².',
    invalidOptionsReasoning: {
      A: '40 m² surge de multiplicar 20 × 2.',
      B: '100 m² es el área de un cuadrado de 10 × 10.',
      D: '400 m² es el área de un cuadrado de 20 × 20.'
    },
    socraticHints: {
      recordar: 'Si el lado mayor es el doble del lado menor y mide 20 m, ¿cuánto mide el lado menor?',
      comprender: 'Divide: 20 ÷ 2 = 10 m.',
      aplicar: 'Calcula el área multiplicando en tu cuaderno: 20 m × 10 m = 200 m².',
      analizar: '¿Por qué 200 m² satisface tanto la escala geométrica como las dimensiones rectangulares?'
    }
  },
  {
    id: 1115,
    grade: 11,
    questionNumber: 15,
    title: 'Opciones de compra de tiquetes que agotan el presupuesto',
    statement: 'Una aerolínea ofrece tarifas con descuento por temporada:\n- Trayecto Bogotá - Manizales: Tarifa plena = $210.000 | Descuento = $10.000 -> Precio final = $200.000.\n- Trayecto Bogotá - Cartagena: Tarifa plena = $280.000 | Descuento = $30.000 -> Precio final = $250.000.\n\nUna empresa dispone de un presupuesto exacto de $5.500.000 para comprar tiquetes y evalúa tres opciones:\n- Opción 1: 15 tiquetes a Manizales y 10 a Cartagena -> 15($200.000) + 10($250.000) = $3.000.000 + $2.500.000 = $5.500.000.\n- Opción 2: 10 tiquetes a Manizales y 14 a Cartagena -> 10($200.000) + 14($250.000) = $2.000.000 + $3.500.000 = $5.500.000.\n- Opción 3: 5 tiquetes a Manizales y 16 a Cartagena -> 5($200.000) + 16($250.000) = $1.000.000 + $4.000.000 = $5.000.000.\n\n¿Cuáles de las opciones permiten gastar exactamente la totalidad de los $5.500.000?',
    options: [
      { number: 1, letter: 'A', text: 'La opción 1 solamente.' },
      { number: 2, letter: 'B', text: 'Las opciones 1 y 2 solamente.' },
      { number: 3, letter: 'C', text: 'Las opciones 2 y 3 solamente.' },
      { number: 4, letter: 'D', text: 'Las opciones 1, 2 y 3.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Formulación y ejecución',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas que involucran ecuaciones diofánticas y restricciones presupuestales.',
    evidence: 'Verifica qué combinaciones lineales enteras igualan el valor objetivo de $5.500.000.',
    standard: 'Resuelvo problemas utilizando sistemas algebraicos y modelos cuantitativos.',
    justification: 'Evaluando el costo de cada combinación con los precios netos ($200.000 y $250.000):\n- Opción 1: 15(200k) + 10(250k) = 3.000k + 2.500k = $5.500.000 (Cumple).\n- Opción 2: 10(200k) + 14(250k) = 2.000k + 3.500k = $5.500.000 (Cumple).\n- Opción 3: 5(200k) + 16(250k) = 1.000k + 4.000k = $5.000.000 (No cumple, sobran $500.000).\nPor tanto, solo las opciones 1 y 2 gastan exactamente el presupuesto.',
    invalidOptionsReasoning: {
      A: 'Olimite la opción 2 que también totaliza $5.500.000.',
      C: 'La opción 3 solo gasta $5.000.000.',
      D: 'Incluye la opción 3 que es insuficiente.'
    },
    socraticHints: {
      recordar: '¿Cuánto cuesta un tiquete neto a Manizales ($200.000) y a Cartagena ($250.000)?',
      comprender: 'Calcula el gasto total de la Opción 1, Opción 2 y Opción 3 en tu cuaderno.',
      aplicar: 'Comprueba: Opción 1 = $5,5M; Opción 2 = $5,5M; Opción 3 = $5,0M.',
      analizar: '¿Por qué solo las opciones 1 y 2 agotan de forma exacta el monto disponible?'
    }
  },
  {
    id: 1116,
    grade: 11,
    questionNumber: 16,
    title: 'Trayectos aéreos indeterminables si el costo depende del sentido de viaje',
    statement: 'Jaime consulta una tabla que solo registra las tarifas de tres rutas directas específicas:\n- Trayecto I: Bogotá -> Manizales\n- Trayecto II: Cartagena -> Medellín\n- Trayecto III: Bogotá -> Cartagena\n\nJaime necesita planear tres nuevos viajes:\n- Trayecto IV: Bogotá -> Medellín\n- Trayecto V: Medellín -> Manizales\n- Trayecto VI: Medellín -> Cartagena\n\nSi la aerolínea cobra precios diferentes según la dirección del trayecto (por ejemplo, el precio de Cartagena -> Medellín no es igual al de Medellín -> Cartagena):\n\n¿Cuáles de los tres nuevos trayectos (IV, V o VI) NO podrá determinar Jaime a partir de la tabla?',
    options: [
      { number: 1, letter: 'A', text: 'El trayecto IV solamente.' },
      { number: 2, letter: 'B', text: 'Los trayectos IV y V solamente.' },
      { number: 3, letter: 'C', text: 'Los trayectos V y VI solamente (los que tienen origen en Medellín).' },
      { number: 4, letter: 'D', text: 'Los trayectos IV, V y VI.' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Evalúa la disponibilidad y simetría de información en redes dirigidas.',
    evidence: 'Identifica grafos dirigidos donde el sentido del arco no permite reversibilidad de tarifas.',
    standard: 'Justifico o refuto afirmaciones a partir de análisis de información estructurada.',
    justification: 'La tabla solo contiene información con salidas desde Bogotá (I y III) y desde Cartagena (II). No contiene ninguna ruta que tenga como origen la ciudad de Medellín. Dado que la dirección del vuelo altera el precio, Jaime no puede invertir la ruta II (Cartagena -> Medellín) para conocer Medellín -> Cartagena (Trayecto VI), ni dispone de información sobre Medellín -> Manizales (Trayecto V). Por tanto, no podrá determinar los trayectos V y VI.',
    invalidOptionsReasoning: {
      A: 'El trayecto IV tiene origen en Bogotá y puede estimarse por combinación de rutas conocidas.',
      B: 'Olimite el trayecto VI que tampoco se puede calcular al no ser simétrica la tarifa.',
      D: 'El trayecto IV sí cuenta con tarifas desde el nodo origen Bogotá.'
    },
    socraticHints: {
      recordar: '¿Cuáles ciudades de origen están registradas en la tabla original (Bogotá y Cartagena)?',
      comprender: '¿Está registrada alguna tarifa con origen de salida en Medellín?',
      aplicar: 'Identifica los trayectos que inician en Medellín: V (Medellín-Manizales) y VI (Medellín-Cartagena).',
      analizar: '¿Por qué la asimetría de precios impide asumir que la vuelta cueste lo mismo que la ida?'
    }
  },
  {
    id: 1117,
    grade: 11,
    questionNumber: 17,
    title: 'Justificación de compra proporcional de tiquetes entre Manizales y Cartagena',
    statement: 'Una empresa planea enviar 100 personas de Bogotá a Manizales (Trayecto I = $210.000 por tiquete, Total = 100 × $210.000 = $21.000.000). Si la empresa decide cambiar de destino y enviar personas de Bogotá a Cartagena (Trayecto III = $280.000 por tiquete) utilizando exactamente los mismos $21.000.000 de presupuesto, el gerente afirma que podrá enviar a 75 personas (un 25 % menos de personas).\n\nLa afirmación del gerente es ADECUADA porque:',
    options: [
      { number: 1, letter: 'A', text: 'El valor de $280.000 es el doble de $210.000.' },
      { number: 2, letter: 'B', text: 'El valor del trayecto I ($210.000) equivale a las tres cuartas partes (3/4 = 75 %) del valor del trayecto III ($280.000), de modo que 100 × (210.000 / 280.000) = 100 × (3/4) = 75 personas.' },
      { number: 3, letter: 'C', text: 'Con $21.000.000 solo se pueden comprar 50 tiquetes.' },
      { number: 4, letter: 'D', text: 'El descuento de la temporada reduce a la mitad el número de viajeros.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Justifica relaciones de proporcionalidad inversa entre precio unitario y cantidad adquirida.',
    evidence: 'Verifica la razón $210.000 / $280.000 = 3/4 = 0,75 y multiplica por la cantidad base (100 × 0,75 = 75).',
    standard: 'Justifico o refuto afirmaciones a partir del uso de razones y proporciones.',
    justification: 'Con un presupuesto fijo P = $21.000.000, la cantidad de personas N es inversamente proporcional al precio unitario: N = P / Precio. Dividiendo 21.000.000 ÷ 280.000 = 75 personas. Esta relación se sustenta en que la razón entre los precios es 210.000 / 280.000 = 21/28 = 3/4 (75%), por lo que con el mismo dinero se compra exactamente el 75% de los tiquetes (75 personas, es decir, 25% menos).',
    invalidOptionsReasoning: {
      A: '280.000 no es el doble de 210.000 (el doble sería 420.000).',
      C: '21.000.000 ÷ 280.000 da exactamente 75, no 50.',
      D: 'El cambio de destino es una reasignación presupuestal a tarifa plena.'
    },
    socraticHints: {
      recordar: '¿Cuánto dinero se necesita para 100 tiquetes a Manizales (100 × $210.000 = $21.000.000)?',
      comprender: '¿Cuántos tiquetes de $280.000 se pueden comprar con esos mismos $21.000.000?',
      aplicar: 'Divide en tu cuaderno: 21.000.000 ÷ 280.000 = 75 personas.',
      analizar: '¿Por qué la fracción 210.000 / 280.000 se simplifica a 3/4 (75%) demostrando matemáticamente la afirmación?'
    }
  },
  {
    id: 1118,
    grade: 11,
    questionNumber: 18,
    title: 'Comparación de crecimiento de salarios entre dos trabajadores',
    statement: 'Dos trabajadores ingresan a una empresa ganando el mismo salario en el año 1 ($50 unidades). Los incrementos anuales de sus salarios siguen patrones diferentes:\n- Trabajador 1 (crecimiento aritmético constante): En cada año su salario aumenta en 5 unidades respecto al año anterior:\nAño 1: 50 | Año 2: 55 | Año 3: 60 | Año 4: 65 | Año 5: 70 | Año 6: 75\n- Trabajador 2 (incrementos acelerados): En cada año su aumento salarial se incrementa en 2 unidades respecto al aumento del año anterior (+2 en año 2, +4 en año 3, +6 en año 4, +8 en año 5, +10 en año 6):\nAño 1: 50 | Año 2: 52 | Año 3: 56 | Año 4: 62 | Año 5: 70 | Año 6: 80\n\n¿Cuál de los dos trabajadores tendrá un salario MAYOR a partir del sexto año?',
    options: [
      { number: 1, letter: 'A', text: 'El Trabajador 1, porque su aumento anual de 5 unidades es constante y estable.' },
      { number: 2, letter: 'B', text: 'El Trabajador 2, porque aunque inició con aumentos pequeños, su incremento anual crece en dos unidades cada año (+2, +4, +6, +8, +10...), alcanzando $80 en el año 6 frente a los $75 del Trabajador 1.' },
      { number: 3, letter: 'C', text: 'Ambos ganarán exactamente lo mismo siempre.' },
      { number: 4, letter: 'D', text: 'El Trabajador 1 en los años pares y el Trabajador 2 en los impares.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Compara patrones de crecimiento lineal frente a crecimiento cuadrático en sucesiones.',
    evidence: 'Calcula los términos de ambas sucesiones y demuestra que el crecimiento acelerado de segundo orden supera al crecimiento lineal.',
    standard: 'Analizo relaciones de variación y sucesiones numéricas en contextos aplicados.',
    justification: 'El Trabajador 1 tiene un crecimiento lineal S1(n) = 50 + 5(n-1) -> En n=6: S1 = 50 + 25 = 75. El Trabajador 2 tiene un crecimiento cuadrático con diferencias de segundo orden constantes d2 = 2: S2(6) = 50 + 2 + 4 + 6 + 8 + 10 = 80. Como 80 > 75 y a partir del año 6 el aumento del Trabajador 2 (+12, +14...) siempre será superior a 5, el Trabajador 2 tendrá un salario mayor.',
    invalidOptionsReasoning: {
      A: 'El aumento fijo de 5 se queda rezagado frente a los aumentos de 8, 10, 12...',
      C: 'Solo empatan en el año 1 (50) y en el año 5 (70), a partir del año 6 difieren.',
      D: 'No existe alternancia, el Trabajador 2 domina permanentemente desde el año 6.'
    },
    socraticHints: {
      recordar: 'Escribe en una tabla en tu cuaderno los salarios año a año del 1 al 6 para ambos trabajadores.',
      comprender: '¿Cuál es el salario de cada uno en el año 5? (Ambos ganan 70).',
      aplicar: 'En el año 6, ¿cuánto suma el Trabajador 1 (70 + 5 = 75) y el Trabajador 2 (70 + 10 = 80)?',
      analizar: '¿Por qué una tasa de incremento acelerada siempre termina superando a una tasa constante?'
    }
  },
  {
    id: 1119,
    grade: 11,
    questionNumber: 19,
    title: 'Determinación del horario de máximo rendimiento en revisión de celulares',
    statement: 'Una empresa de tecnología organiza tres jornadas de trabajo diarias (mañana, tarde y noche) para revisar celulares. En una tabla se registra la cantidad promedio de celulares revisados por hora por cinco técnicos (P, Q, R, S y T) en cada una de las tres jornadas:\n- Técnico P: Mañana = 110, Tarde = 90, Noche = 80\n- Técnico Q: Mañana = 95, Tarde = 100, Noche = 85\n- Técnico R: Mañana = 110, Tarde = 95, Noche = 110\n- Técnico S: Mañana = 100, Tarde = 120, Noche = 90\n- Técnico T: Mañana = 85, Tarde = 105, Noche = 100\n\nEl supervisor desea armar un horario asignando a cada jornada al técnico con mayor productividad.\n\n¿Es posible determinar con la información de la tabla el horario que maximiza la revisión de celulares?',
    options: [
      { number: 1, letter: 'A', text: 'Sí, porque se conocen los horarios de las tres jornadas y el número de celulares revisados por cada trabajador en cada una de ellas, permitiendo seleccionar el valor máximo por columna (P o R en la mañana, S en la tarde y R en la noche).' },
      { number: 2, letter: 'B', text: 'No, porque no se conoce el salario de los trabajadores.' },
      { number: 3, letter: 'C', text: 'No, porque los celulares pueden estar defectuosos.' },
      { number: 4, letter: 'D', text: 'Sí, pero solo si todos los técnicos trabajan en la mañana.' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Argumentación',
    component: 'Aleatorio',
    affirmation: 'Evalúa la completitud y suficiencia de matrices de datos para optimización de recursos.',
    evidence: 'Identifica los máximos por columna en una matriz de rendimiento para asignar turnos óptimos.',
    standard: 'Tomo decisiones a partir del análisis crítico de datos e información estadística.',
    justification: 'La tabla suministra todos los datos requeridos: las 3 jornadas y el rendimiento de los 5 trabajadores en cada jornada. Basta con elegir el máximo en cada columna: Mañana = P o R (110 celulares/h); Tarde = S (120 celulares/h); Noche = R o T (110 celulares/h). Por tanto, la información es completamente suficiente.',
    invalidOptionsReasoning: {
      B: 'El problema busca maximizar unidades revisadas, no minimizar costos salariales.',
      C: 'La variable de medición es la cantidad revisada por hora, no el estado del equipo.',
      D: 'La empresa opera en tres turnos distintos las 24 horas.'
    },
    socraticHints: {
      recordar: '¿Qué información pide el supervisor (el técnico que más celulares revisa por jornada)?',
      comprender: '¿Cuál es el valor más alto en la columna Mañana, en la columna Tarde y en la columna Noche?',
      aplicar: 'Identifica los técnicos líderes en tu cuaderno: Mañana (110), Tarde (120), Noche (110).',
      analizar: '¿Por qué la presencia de todos los datos en la tabla garantiza la solución inmediata del problema?'
    }
  },
  {
    id: 1120,
    grade: 11,
    questionNumber: 20,
    title: 'Cálculo de estudiantes preseleccionados a partir de combinaciones C(n, 3) = 10',
    statement: 'Para formar un comité de 3 estudiantes que represente al colegio en un foro nacional, el rector preselecciona a n estudiantes. La cantidad de grupos distintos de 3 personas que se pueden formar con los n preseleccionados se calcula con la fórmula de combinaciones:\nC(n, 3) = n! / [3! × (n - 3)!] = [n × (n - 1) × (n - 2)] / (3 × 2 × 1).\n\nSi el rector determinó que se pueden armar exactamente 10 grupos diferentes de 3 estudiantes (C(n, 3) = 10), ¿cuántos estudiantes preseleccionó el rector?',
    options: [
      { number: 1, letter: 'A', text: '3 estudiantes.' },
      { number: 2, letter: 'B', text: '4 estudiantes.' },
      { number: 3, letter: 'C', text: '6 estudiantes.' },
      { number: 4, letter: 'D', text: '5 estudiantes.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Formulación y ejecución',
    component: 'Aleatorio',
    affirmation: 'Resuelve problemas combinatorios calculando el tamaño muestral n en C(n, k) = N.',
    evidence: 'Evalúa la fórmula de combinaciones sin repetición para n = 5 obteniendo C(5, 3) = 10.',
    standard: 'Uso comprensivo de conceptos de conteo y combinatoria.',
    justification: 'Evaluando la fórmula combinatoria para las opciones:\n- Si n = 3: C(3, 3) = 1 grupo.\n- Si n = 4: C(4, 3) = (4 × 3 × 2) / 6 = 4 grupos.\n- Si n = 5: C(5, 3) = (5 × 4 × 3) / (3 × 2 × 1) = 60 / 6 = 10 grupos.\n- Si n = 6: C(6, 3) = (6 × 5 × 4) / 6 = 20 grupos.\nPor tanto, la cantidad de estudiantes preseleccionados es n = 5 (Opción D).',
    invalidOptionsReasoning: {
      A: 'Con 3 estudiantes solo se puede armar 1 único grupo de 3.',
      B: 'Con 4 estudiantes se arman 4 grupos.',
      C: 'Con 6 estudiantes se armarían 20 grupos.'
    },
    socraticHints: {
      recordar: '¿Cuál es la fórmula para calcular las combinaciones de n elementos tomados de 3 en 3?',
      comprender: 'Prueba con n = 5: calcula (5 × 4 × 3) ÷ (3 × 2 × 1) en tu cuaderno.',
      aplicar: 'Opera: 60 ÷ 6 = 10 grupos.',
      analizar: '¿Por qué 5 estudiantes es el único número entero positivo que genera exactamente 10 ternas posibles?'
    }
  }
];
