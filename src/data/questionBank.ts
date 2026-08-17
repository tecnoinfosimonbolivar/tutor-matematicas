import { Question } from '../types';
import { OFFICIAL_GRADE_3 } from './officialQuestionsP1';
import { OFFICIAL_GRADE_4_5 } from './officialQuestionsP2';
import { OFFICIAL_GRADE_6_7_8 } from './officialQuestionsP3';
import { OFFICIAL_GRADE_7_8 } from './officialQuestionsP4';
import { OFFICIAL_GRADE_9_10_11 } from './officialQuestionsP5';

// Map containing verified official ICFES Evaluar para Avanzar questions for all grades (3° to 11°)
export const OFFICIAL_QUESTIONS_MAP: Record<number, Question[]> = {
  3: OFFICIAL_GRADE_3[3] || [],
  4: OFFICIAL_GRADE_4_5[4] || [],
  5: OFFICIAL_GRADE_4_5[5] || [],
  6: OFFICIAL_GRADE_6_7_8[6] || [],
  7: OFFICIAL_GRADE_7_8[7] || [],
  8: OFFICIAL_GRADE_7_8[8] || [],
  9: OFFICIAL_GRADE_9_10_11[9] || [],
  10: OFFICIAL_GRADE_9_10_11[10] || [],
  11: OFFICIAL_GRADE_9_10_11[11] || []
};

export const QUESTION_BANK: Question[] = [
  // ================= GRADO 11° =================
  {
    id: 1101,
    grade: 11,
    questionNumber: 1,
    title: 'Gasto en paquetes de galletas',
    statement: 'En un almacén el precio de un paquete de galletas es p. Una persona va a comprar los 10 paquetes que quedan, pero al examinarlos nota que 4 de ellos han pasado la fecha de vencimiento por lo que solo compra los otros. El dinero que gastó la persona es:',
    options: [
      { number: 1, letter: 'A', text: '14p' },
      { number: 2, letter: 'B', text: '10p' },
      { number: 3, letter: 'C', text: '6p' },
      { number: 4, letter: 'D', text: '4p' }
    ],
    correctOption: 3,
    correctLetter: 'C',
    competency: 'Interpretación y representación',
    component: 'Numérico-Variacional / Álgebra y cálculo',
    affirmation: 'Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos.',
    evidence: 'Transforma la representación de una o más piezas de información.',
    standard: 'Analizo las relaciones y propiedades entre las expresiones algebraicas y las funciones.',
    justification: 'De los 10 paquetes que quedan, se descuentan los 4 vencidos: 10 - 4 = 6 paquetes en buen estado. Si cada paquete cuesta p, el gasto total es 6p.',
    invalidOptionsReasoning: {
      A: 'Suma los 10 paquetes con los 4 vencidos (10 + 4 = 14p).',
      B: 'Asume que compra los 10 paquetes sin descontar los vencidos (10p).',
      D: 'Calcula únicamente el costo de los 4 paquetes vencidos (4p).'
    },
    socraticHints: {
      recordar: '¿Cuántos paquetes de galletas había en total y cuántos estaban vencidos?',
      comprender: '¿Cuál operación matemática representa comprar solo los paquetes que NO están vencidos?',
      aplicar: 'Si cada paquete apto cuesta p pesos, ¿cómo multiplicas esa cantidad por p?',
      analizar: '¿Por qué 6p refleja exactamente la compra real del cliente y descarta las pérdidas?'
    }
  },
  {
    id: 1102,
    grade: 11,
    questionNumber: 2,
    title: 'Juego de piedra, papel o tijera y comidas',
    statement: 'Andrés y Diego juegan "Piedra, papel o tijera". Si Andrés pierde le da su fruta a Diego; si Diego pierde le da su sándwich a Andrés; si empatan, intercambian sus comidas.\n\nAndrés construyó la Tabla 2 con la comida que obtendría él según las jugadas:\n- Casilla 1 (Piedra vs Piedra = Empate): Sándwich\n- Casilla 2 (Papel vs Piedra = Andrés gana): Sándwich y fruta\n- Casilla 3 (Tijera vs Piedra = Diego gana): Sándwich y fruta [!] \n- Casilla 4 (Piedra vs Papel = Diego gana): Nada\n- Casilla 5 (Papel vs Papel = Empate): Sándwich\n- Casilla 6 (Tijera vs Papel = Andrés gana): Sándwich y fruta\n- Casilla 7 (Piedra vs Tijera = Andrés gana): Sándwich y fruta\n- Casilla 8 (Papel vs Tijera = Diego gana): Nada\n- Casilla 9 (Tijera vs Tijera = Empate): Sándwich\n\n¿Cuál es la casilla de contenido incorrecto?',
    options: [
      { number: 1, letter: 'A', text: 'la 2' },
      { number: 2, letter: 'B', text: 'la 3' },
      { number: 3, letter: 'C', text: 'la 5' },
      { number: 4, letter: 'D', text: 'la 7' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Interpretación y representación',
    component: 'Aleatorio / Estadística',
    affirmation: 'Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos.',
    evidence: 'Da cuenta de las características básicas de la información presentada en tablas y esquemas.',
    standard: 'Interpreto y comparo resultados de estudios con información estadística.',
    justification: 'En la casilla 3 (Andrés saca Tijera y Diego saca Piedra), Diego gana. Según las reglas, si Andrés pierde, entrega su fruta y no recibe nada. Por tanto, la casilla 3 debería decir "Nada" en lugar de "Sándwich y fruta".',
    invalidOptionsReasoning: {
      A: 'En la casilla 2 Andrés gana con papel sobre piedra, recibe sándwich y conserva fruta: es correcto.',
      C: 'En la casilla 5 empatan, intercambian comidas y Andrés recibe sándwich: es correcto.',
      D: 'En la casilla 7 Andrés gana con piedra sobre tijera, recibe sándwich y conserva fruta: es correcto.'
    },
    socraticHints: {
      recordar: '¿Qué objeto vence a la tijera cuando Andrés saca tijera y Diego saca piedra?',
      comprender: 'Si Diego es el ganador de esa ronda, ¿qué le ocurre a la comida de Andrés?',
      aplicar: 'Verifica la regla: "si Andrés pierde le da su fruta a Diego". ¿Qué comida le queda a Andrés?',
      analizar: 'Compara lo que dice la casilla 3 con la consecuencia real de que Diego gane la jugada.'
    }
  },
  {
    id: 1103,
    grade: 11,
    questionNumber: 3,
    title: 'Probabilidad en días independientes',
    statement: 'Andrés calcula la probabilidad de ganar lunes y martes. Enumera 9 posibilidades para el lunes donde gana en 3 (P = 3/9 = 1/3), y lo mismo para el martes (P = 3/9 = 1/3). Luego suma 3/9 + 3/9 = 6/9.\n\nEl procedimiento es incorrecto, porque:',
    options: [
      { number: 1, letter: 'A', text: 'La probabilidad de ganar el lunes no es 3/9. La fracción correcta es 1/3.' },
      { number: 2, letter: 'B', text: 'El resultado final no es 6/9. La operación correcta es 3/9 × 3/9 que es 1/9.' },
      { number: 3, letter: 'C', text: 'La probabilidad de ganar el lunes no es 3/9. La fracción correcta es 1/9.' },
      { number: 4, letter: 'D', text: 'El resultado final no es 6/9. La operación correcta es (3+3)/(9+9) que es 1/3.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Formulación y ejecución',
    component: 'Aleatorio / Estadística',
    affirmation: 'Plantea e implementa estrategias que lleven a soluciones adecuadas.',
    evidence: 'Diseña planes para la solución de problemas que involucran probabilidad.',
    standard: 'Resuelvo y planteo problemas usando conceptos básicos de conteo y probabilidad de eventos independientes.',
    justification: 'Al ser eventos independientes (el resultado del lunes no afecta al martes), la probabilidad conjunta P(A y B) se obtiene multiplicando: (3/9) × (3/9) = 9/81 = 1/9, no sumando.',
    invalidOptionsReasoning: {
      A: '3/9 es equivalente a 1/3, por lo que la probabilidad individual del lunes sí es correcta.',
      C: 'La probabilidad de ganar un solo día es 3/9 (1/3), no 1/9.',
      D: 'La regla de probabilidad conjunta de eventos independientes nunca suma numeradores y denominadores.'
    },
    socraticHints: {
      recordar: '¿Qué tipo de eventos son el juego del lunes y el juego del martes? ¿Dependen el uno del otro?',
      comprender: '¿Cuál es la regla de probabilidad para la ocurrencia simultánea de dos eventos independientes?',
      aplicar: 'Si multiplicas la probabilidad del lunes (1/3) por la del martes (1/3), ¿qué fracción obtienes?',
      analizar: '¿Por qué la suma de probabilidades sobrestimaría la posibilidad real de ganar dos días seguidos?'
    }
  },
  {
    id: 1104,
    grade: 11,
    questionNumber: 4,
    title: 'Representación de exportaciones por país y año',
    statement: 'Una gráfica de barras agrupadas presenta las exportaciones industriales en millones de dólares para Ecuador, Venezuela, Estados Unidos y Resto del mundo en los años 2008, 2009 y 2010.\n\n¿Cuál otra representación gráfica muestra TODA la información de forma completa y equivalente?',
    options: [
      { number: 1, letter: 'A', text: 'Gráfica de barras apiladas horizontales que consolida por cada año (2008, 2009, 2010) los valores de los 4 destinos.' },
      { number: 2, letter: 'B', text: 'Diagrama circular que muestra únicamente los datos de un solo año (2008).' },
      { number: 3, letter: 'C', text: 'Gráfico de líneas que omite el año 2008 y traza tendencias inexactas.' },
      { number: 4, letter: 'D', text: 'Gráfica de columnas que omite la categoría "Resto del mundo".' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Interpretación y representación',
    component: 'Aleatorio / Estadística',
    affirmation: 'Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos.',
    evidence: 'Transforma la representación de una o más piezas de información.',
    standard: 'Interpreto y comparo resultados de estudios con información estadística.',
    justification: 'La opción A mantiene todas las variables: los 3 años (2008, 2009, 2010) y los 4 países/regiones con sus magnitudes exactas apiladas, preservando el 100% de la información.',
    invalidOptionsReasoning: {
      B: 'Solo presenta la información del año 2008, perdiendo los años 2009 y 2010.',
      C: 'Omite el año 2008 y añade interpolaciones no fundamentadas.',
      D: 'Excluye la categoría "Resto del mundo", por lo que la información queda incompleta.'
    },
    socraticHints: {
      recordar: '¿Cuántos años y cuántos destinos comerciales contiene la gráfica original?',
      comprender: '¿Qué condición debe cumplir una gráfica equivalente para no perder ningún dato?',
      aplicar: 'Examina cada opción: ¿cuál incluye los 3 años y los 4 destinos sin omitir ninguno?',
      analizar: '¿Por qué una barra apilada por año permite ver tanto el total anual como la porción de cada país?'
    }
  },
  {
    id: 1105,
    grade: 11,
    questionNumber: 5,
    title: 'Pisos de casas en el pentágono',
    statement: 'En un conjunto cerrado hay 5 casas formando un pentágono. Todas las casas tienen una cantidad DIFERENTE de pisos (números enteros positivos). El señor Pérez tiene la casa más alta con 5 pisos. El total de pisos construidos en el conjunto es:',
    options: [
      { number: 1, letter: 'A', text: '9' },
      { number: 2, letter: 'B', text: '15' },
      { number: 3, letter: 'C', text: '20' },
      { number: 4, letter: 'D', text: '25' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Formulación y ejecución',
    component: 'Numérico-Variacional',
    affirmation: 'Plantea e implementa estrategias que lleven a soluciones adecuadas.',
    evidence: 'Resuelve un problema que involucra información cuantitativa o esquemática.',
    standard: 'Comparo y contrasto las propiedades de los números naturales y enteros.',
    justification: 'Si hay 5 casas, todas con diferente número de pisos y la máxima tiene 5 pisos, las cantidades obligatorias de pisos deben ser 1, 2, 3, 4 y 5. La suma total es 1 + 2 + 3 + 4 + 5 = 15 pisos.',
    invalidOptionsReasoning: {
      A: 'Suma 5 con las 4 casas restantes de forma errónea (5 + 4 = 9).',
      B: 'Es la suma correcta: 1 + 2 + 3 + 4 + 5 = 15.',
      C: 'Suma 5 pisos repetidos en varias casas alcanzando 20.',
      D: 'Multiplica 5 casas × 5 pisos = 25, ignorando que todas tienen cantidades diferentes.'
    },
    socraticHints: {
      recordar: '¿Cuántas casas hay en total y qué dice el problema sobre la cantidad de pisos de cada una?',
      comprender: 'Si la más alta tiene 5 pisos y ninguna se repite, ¿cuántos pisos tiene cada una de las otras 4 casas?',
      aplicar: 'Escribe en tu cuaderno los números de pisos de las 5 casas y realiza la suma.',
      analizar: '¿Por qué ninguna casa puede tener 0 pisos ni repetir número con otra?'
    }
  },
  {
    id: 1114,
    grade: 11,
    questionNumber: 14,
    title: 'Teorema del Coseno en Triángulo PQR',
    statement: 'En el triángulo PQR se verifica: p² = q² + r² - 2qr·cos(P). Se conocen r = 4, r = 2q (por tanto q = 2), P = 60° y cos(60°) = 1/2. ¿Cuál es la medida del lado p?',
    options: [
      { number: 1, letter: 'A', text: '28' },
      { number: 2, letter: 'B', text: '12' },
      { number: 3, letter: 'C', text: '√28' },
      { number: 4, letter: 'D', text: '√12' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Formulación y ejecución',
    component: 'Geometría y Trigonometría',
    affirmation: 'Plantea e implementa estrategias que lleven a soluciones adecuadas.',
    evidence: 'Resuelve un problema trigonométrico usando relaciones analíticas.',
    standard: 'Uso argumentos geométricos y trigonométricos para resolver problemas.',
    justification: 'p² = 2² + 4² - 2(2)(4)(1/2) = 4 + 16 - 8 = 12. Extrayendo raíz cuadrada: p = √12.',
    invalidOptionsReasoning: {
      A: 'Suma el término del coseno en lugar de restarlo y no extrae raíz (4 + 16 + 8 = 28).',
      B: 'Calcula p² = 12 pero olvida sacar la raíz cuadrada para hallar la longitud p.',
      C: 'Comete error de signo al calcular p² = 28 y extrae √28.'
    },
    socraticHints: {
      recordar: '¿Cuál es el valor de q si r = 4 y r = 2q?',
      comprender: 'Sustituye en la fórmula: q=2, r=4, cos(60°)=1/2. ¿Cuánto vale 2·q·r·cos(P)?',
      aplicar: 'Calcula p² = 4 + 16 - 8. ¿Qué valor da p²?',
      analizar: 'Para despejar p a partir de p² = 12, ¿cuál operación final debes aplicar?'
    }
  },
  {
    id: 1120,
    grade: 11,
    questionNumber: 20,
    title: 'Combinatoria: Selección de grupo de estudiantes',
    statement: 'Un docente preselecciona estudiantes para una actividad. Escogerá al azar un grupo de 3 estudiantes y encuentra que puede hacer exactamente 10 selecciones posibles distintas. ¿Cuántos estudiantes conforman el grupo preseleccionado?',
    options: [
      { number: 1, letter: 'A', text: '13' },
      { number: 2, letter: 'B', text: '10' },
      { number: 3, letter: 'C', text: '6' },
      { number: 4, letter: 'D', text: '5' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Formulación y ejecución',
    component: 'Aleatorio / Estadística',
    affirmation: 'Plantea e implementa estrategias cuantitativas.',
    evidence: 'Resuelve problemas usando combinaciones C(n, k).',
    standard: 'Resuelvo y planteo problemas usando conceptos de conteo y combinatoria.',
    justification: 'El número de combinaciones sin orden es C(n, 3) = n! / (3!(n-3)!) = n(n-1)(n-2)/6 = 10. Si n = 5: 5×4×3 / 6 = 60/6 = 10.',
    invalidOptionsReasoning: {
      A: 'Suma 10 selecciones + 3 estudiantes = 13.',
      B: 'Confunde el número de combinaciones totales (10) con la cantidad de alumnos.',
      C: 'Para n=6, C(6,3) = 6×5×4/6 = 20 selecciones, lo cual excede 10.'
    },
    socraticHints: {
      recordar: '¿Importa el orden en que se eligen los 3 estudiantes para el grupo deportivo?',
      comprender: '¿Cómo se calcula la combinación de n elementos tomados de 3 en 3?',
      aplicar: 'Prueba con n=5: (5 × 4 × 3) / (3 × 2 × 1) = 60 / 6 = ?',
      analizar: '¿Por qué con n=6 nos daría 20 posibilidades y no las 10 del enunciado?'
    }
  },

  // ================= GRADO 10° =================
  {
    id: 1001,
    grade: 10,
    questionNumber: 1,
    title: 'Precio histórico de la plata',
    statement: 'En la gráfica se muestra el precio en marcos por kg de plata y de oro entre 1772 y 1817. ¿En qué año el precio del kilogramo de plata fue de 10.000 marcos?',
    options: [
      { number: 1, letter: 'A', text: '1778' },
      { number: 2, letter: 'B', text: '1782' },
      { number: 3, letter: 'C', text: '1803' },
      { number: 4, letter: 'D', text: '1816' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Interpretación y representación',
    component: 'Álgebra y cálculo / Funciones',
    affirmation: 'Comprende y transforma la información cuantitativa presentada en series y gráficas.',
    evidence: 'Identifica datos de referencia en una gráfica cartesiana.',
    standard: 'Interpreto y comparo resultados de estudios con información estadística.',
    justification: 'Al ubicar 10.000 en el eje vertical (marcos) y trazar una línea horizontal hacia la curva de la plata, el punto de corte cae entre 1780 y 1785, exactamente correspondiente al año 1782.',
    invalidOptionsReasoning: {
      A: 'En 1778 la plata apenas superaba los 2.000 marcos.',
      C: 'En 1803 la curva de la plata estaba cerca de 22.000 marcos.',
      D: 'En 1816 la curva que corta en 10.000 marcos es la del oro, no la de la plata.'
    },
    socraticHints: {
      recordar: '¿Cuál de las dos curvas corresponde a la plata según la convención del gráfico?',
      comprender: 'Ubica en el eje vertical el valor 10.000 marcos. Traza una línea horizontal imaginaria.',
      aplicar: '¿En qué año del eje horizontal corta esa línea a la gráfica de la plata?',
      analizar: '¿Por qué no debemos confundir la curva del oro con la de la plata en el año 1816?'
    }
  },
  {
    id: 1008,
    grade: 10,
    questionNumber: 8,
    title: 'Muestreo estratificado de votantes',
    statement: '2.000 personas se encuestarán para conocer su intención de voto. El 60% de los votantes tiene entre 18 y 38 años, y el 40% restante es mayor de 38 años. La muestra será representativa cuando la cantidad de encuestados entre 18 y 38 años sea:',
    options: [
      { number: 1, letter: 'A', text: '2.000' },
      { number: 2, letter: 'B', text: '1.200' },
      { number: 3, letter: 'C', text: '1.000' },
      { number: 4, letter: 'D', text: '600' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Formulación y ejecución',
    component: 'Estadística / Aleatorio',
    affirmation: 'Plantea e implementa estrategias que lleven a soluciones adecuadas.',
    evidence: 'Calcula el valor correspondiente a un porcentaje en un contexto de muestreo.',
    standard: 'Comparo y contrasto propiedades de números reales y proporciones estadísticas.',
    justification: 'Para mantener la representatividad proporcional del 60%: 2.000 × 60% = 2.000 × 0.60 = 1.200 personas.',
    invalidOptionsReasoning: {
      A: '2.000 es la población total de encuestados, no el 60%.',
      C: '1.000 sería el 50% de la muestra, ignorando la proporción del 60%.',
      D: '600 corresponde al 30% o a un error de cálculo con el 60%.'
    },
    socraticHints: {
      recordar: '¿Cuál es el tamaño total de la muestra que se va a encuestar?',
      comprender: '¿Qué porcentaje de la población corresponde al rango de 18 a 38 años?',
      aplicar: 'Multiplica 2.000 por 0.60 o calcula (2.000 × 60) / 100.',
      analizar: '¿Por qué 1.200 personas garantiza que la muestra refleje fielmente la proporción poblacional?'
    }
  },
  {
    id: 1015,
    grade: 10,
    questionNumber: 15,
    title: 'Ecuación cuadrática y dimensiones geométricas',
    statement: 'Federico resuelve la ecuación x² + 8x/2 = 45 para hallar el lado x (en cm) de un cuadrado. Las soluciones algebraicas son x = -9 y x = 5. Para el problema geométrico, ¿cuál solución debe presentar?',
    options: [
      { number: 1, letter: 'A', text: '-9, porque 9 es el único cuadrado perfecto en las soluciones.' },
      { number: 2, letter: 'B', text: 'Las dos, porque al ser soluciones de la ecuación lo son del problema.' },
      { number: 3, letter: 'C', text: 'Ninguna, porque la ecuación no corresponde al problema.' },
      { number: 4, letter: 'D', text: '5, porque la longitud del lado de una figura física debe ser un valor positivo.' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Argumentación',
    component: 'Geometría y Álgebra',
    affirmation: 'Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas.',
    evidence: 'Establece la validez o pertinencia de una solución en un contexto físico o geométrico.',
    standard: 'Analizo relaciones entre expresiones algebraicas y modelos geométricos.',
    justification: 'En geometría, las longitudes de los lados de figuras reales no pueden ser negativas. Aunque x = -9 satisface algebraicamente la ecuación, solo x = 5 tiene sentido físico para la longitud del lado.',
    invalidOptionsReasoning: {
      A: 'El hecho de que 9 sea cuadrado perfecto no permite que una longitud sea negativa (-9 cm).',
      B: 'Una solución algebraica no siempre es válida en el dominio del contexto real (no existen lados de -9 cm).',
      C: 'La ecuación modela perfectamente el área del cuadrado x² más el triángulo 8x/2 = 45.'
    },
    socraticHints: {
      recordar: '¿Qué representa la variable x en la figura geométrica de Federico?',
      comprender: '¿Puede un lado de un cuadrado medir -9 centímetros en la realidad?',
      aplicar: 'Descarta la solución no física y conserva la solución geométricamente válida.',
      analizar: '¿Por qué en física y geometría siempre debemos restringir el dominio a valores reales positivos?'
    }
  },

  // ================= GRADO 9° =================
  {
    id: 901,
    grade: 9,
    questionNumber: 1,
    title: 'Duración de lavadoras según mantenimientos',
    statement: 'La gráfica muestra la duración y (en años) de una lavadora en función de x (números de mantenimientos al año). La recta pasa por (0, 5), (1, 13), (2, 21), (3, 29). ¿Cuál tabla relaciona correctamente esta información?',
    options: [
      { number: 1, letter: 'A', text: 'Tabla que invierte los ejes (x=5 años, y=0).' },
      { number: 2, letter: 'B', text: 'Tabla con: x=0 (5 años), x=1 (13 años), x=2 (21 años), x=3 (29 años).' },
      { number: 3, letter: 'C', text: 'Tabla que inicia en x=1 para 5 años.' },
      { number: 4, letter: 'D', text: 'Tabla con valores desordenados.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Contrasta las equivalencias entre diferentes registros de relaciones de variación.',
    evidence: 'Caracteriza las gráficas de funciones lineales según las tablas que las representan.',
    standard: 'Analizo en representaciones gráficas cartesianas comportamientos lineales.',
    justification: 'En la gráfica, cuando x=0 mantenimientos, y=5 años; con x=1, y=13 años; con x=2, y=21 años; con x=3, y=29 años. Esto coincide de forma exacta con la tabla B.',
    invalidOptionsReasoning: {
      A: 'Invierte las variables colocando años en el eje x y mantenimientos en y.',
      C: 'Asigna incorrectamente x=1 para 5 años cuando el intercepto con el eje y es en x=0.',
      D: 'Mezcla los valores de los ejes sin respetar los pares ordenados.'
    },
    socraticHints: {
      recordar: '¿Qué representa la variable x en el eje horizontal y qué representa y en el vertical?',
      comprender: '¿Cuál es el valor de y cuando x = 0 (punto de corte con el eje vertical)?',
      aplicar: 'Verifica los puntos (0, 5), (1, 13), (2, 21) y (3, 29) en las opciones.',
      analizar: '¿Por qué la tabla B es la única que mantiene la correspondencia exacta de cada par ordenado?'
    }
  },
  {
    id: 902,
    grade: 9,
    questionNumber: 2,
    title: 'Rapidez máxima de un helicóptero',
    statement: 'La gráfica muestra la rapidez (en km/h) de un helicóptero durante los primeros 120 segundos. ¿Cuál fue la máxima rapidez alcanzada por el helicóptero?',
    options: [
      { number: 1, letter: 'A', text: '300 km/h' },
      { number: 2, letter: 'B', text: '250 km/h' },
      { number: 3, letter: 'C', text: '200 km/h' },
      { number: 4, letter: 'D', text: '150 km/h' }
    ],
    correctOption: 1,
    correctLetter: 'A',
    competency: 'Razonamiento y argumentación',
    component: 'Numérico-Variacional',
    affirmation: 'Contrasta equivalencias en registros de variación.',
    evidence: 'Identifica el valor máximo de una función a partir de su gráfica.',
    standard: 'Analizo en representaciones cartesianas comportamientos de funciones.',
    justification: 'El punto más alto de la curva de rapidez en el eje vertical alcanza el valor de 300 km/h entre los segundos 50 a 70.',
    invalidOptionsReasoning: {
      B: '250 km/h es la rapidez final en el segundo 120, pero no la máxima.',
      C: '200 km/h es un valor intermedio alcanzado a los 20 segundos.',
      D: '150 km/h es el valor mínimo relativo cerca de los 100 segundos.'
    },
    socraticHints: {
      recordar: '¿En qué eje se lee la rapidez del helicóptero?',
      comprender: 'Busca la cresta o punto más elevado de toda la línea en la gráfica.',
      aplicar: 'Proyecta ese punto hacia el eje vertical de rapidez.',
      analizar: '¿Qué valor exacto indica la escala en esa altura máxima?'
    }
  },
  {
    id: 913,
    grade: 9,
    questionNumber: 13,
    title: 'Sistema de ecuaciones lineales 2x2',
    statement: 'La relación entre las cantidades x y y de dos artículos producidos en una fábrica se representa con:\n-x + y = 10\nx + 3y = 50\n\n¿Cuál es la cantidad x y y de cada artículo?',
    options: [
      { number: 1, letter: 'A', text: 'x = 5 artículos; y = 5 artículos' },
      { number: 2, letter: 'B', text: 'x = 5 artículos; y = 15 artículos' },
      { number: 3, letter: 'C', text: 'x = 20 artículos; y = 10 artículos' },
      { number: 4, letter: 'D', text: 'x = 20 artículos; y = 30 artículos' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas con ecuaciones y sistemas lineales.',
    evidence: 'Usa métodos de resolución de sistemas 2x2.',
    standard: 'Identifico diferentes métodos para solucionar sistemas de ecuaciones lineales.',
    justification: 'Sumando ambas ecuaciones por eliminación: (-x + y) + (x + 3y) = 10 + 50 => 4y = 60 => y = 15. Sustituyendo en la primera: -x + 15 = 10 => x = 5.',
    invalidOptionsReasoning: {
      A: 'Si x=5 y y=5, -5+5=0 != 10.',
      C: 'Si x=20 y y=10, -20+10=-10 != 10.',
      D: 'Si x=20 y y=30, 20+3(30)=110 != 50.'
    },
    socraticHints: {
      recordar: '¿Qué método algebraico (sustitución, igualación o eliminación) te resulta más rápido aquí?',
      comprender: 'Observa que una ecuación tiene -x y la otra tiene +x. ¿Qué ocurre si sumas ambas ecuaciones miembro a miembro?',
      aplicar: 'Al sumar obtienes 4y = 60. ¿Cuánto vale y? Luego despeja x.',
      analizar: 'Comprueba tu resultado sustituyendo x=5 e y=15 en ambas ecuaciones originales.'
    }
  },

  // ================= GRADO 8° =================
  {
    id: 801,
    grade: 8,
    questionNumber: 1,
    title: 'Recorrido en mapa cuadriculado',
    statement: 'A un conductor se le entrega un mapa con cuadrícula donde cada cuadro mide 20 m de lado. Para ir desde el punto de inicio hasta el parque, ¿cuál es el recorrido correcto?',
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
    affirmation: 'Reconoce características medibles y de posición en sistemas de referencia.',
    evidence: 'Identifica movimientos en un plano con escala.',
    standard: 'Selecciono y uso técnicas para medir distancias en planos.',
    justification: 'Contando los segmentos de la ruta: 4 cuadros al occidente (4×20=80 m), 3 cuadros al norte (3×20=60 m), 8 cuadros al oriente (8×20=160 m) y 2 cuadros al norte (2×20=40 m).',
    invalidOptionsReasoning: {
      A: 'Traza una línea diagonal directa ignorando las calles transitables.',
      C: 'Confunde las unidades y direcciones cardinales.',
      D: 'Asume erróneamente que cada cuadro mide 10 m en vez de 20 m.'
    },
    socraticHints: {
      recordar: '¿Cuánto mide cada lado de los cuadros de la cuadrícula según la convención?',
      comprender: 'Sigue la flecha desde el punto de inicio paso a paso: ¿hacia qué dirección se mueve primero?',
      aplicar: 'Cuenta el número de cuadros en cada tramo y multiplícalo por 20 metros.',
      analizar: 'Verifica la secuencia completa: occidente, norte, oriente y norte.'
    }
  },
  {
    id: 810,
    grade: 8,
    questionNumber: 10,
    title: 'Comparación de promedios de flores en parques',
    statement: 'En el Parque 1 hay 150 rosas y 60 girasoles. En el Parque 2 hay 10 rosas y 20 girasoles. ¿Cuál de las siguientes afirmaciones sobre los promedios es correcta?',
    options: [
      { number: 1, letter: 'A', text: 'El promedio de girasoles es cuatro veces el promedio de rosas.' },
      { number: 2, letter: 'B', text: 'El promedio de rosas de los dos parques es dos veces el promedio de girasoles.' },
      { number: 3, letter: 'C', text: 'El promedio de girasoles es tres veces el promedio de rosas.' },
      { number: 4, letter: 'D', text: 'El promedio de rosas es siete veces el promedio de girasoles.' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio-Estadístico',
    affirmation: 'Resuelve problemas que requieren el uso de medidas estadísticas como el promedio.',
    evidence: 'Usa el promedio para comparar el comportamiento de conjuntos de datos.',
    standard: 'Interpreto y utilizo conceptos de media en distribuciones.',
    justification: 'Promedio de rosas = (150 + 10) / 2 = 160 / 2 = 80. Promedio de girasoles = (60 + 20) / 2 = 80 / 2 = 40. Como 80 = 2 × 40, el promedio de rosas es el doble (dos veces) el de girasoles.',
    invalidOptionsReasoning: {
      A: 'El promedio de rosas (80) es mayor que el de girasoles (40), no al revés.',
      C: 'Confunde los datos de un solo parque en vez del promedio de ambos.',
      D: 'Calcula proporciones de totales brutos sin promediar.'
    },
    socraticHints: {
      recordar: '¿Cómo se calcula el promedio de rosas entre los dos parques?',
      comprender: 'Calcula: (150 + 10) / 2 para rosas, y (60 + 20) / 2 para girasoles.',
      aplicar: 'Compara los dos resultados obtenidos: 80 y 40. ¿Qué relación multiplicativa existe entre 80 y 40?',
      analizar: '¿Por qué podemos afirmar que 80 es exactamente el doble de 40?'
    }
  },

  // ================= GRADO 7° =================
  {
    id: 701,
    grade: 7,
    questionNumber: 1,
    title: 'Consumo de agua acumulado',
    statement: 'Un señor arrienda una casa el 1 de septiembre. El consumo total de enero a noviembre es de 200 m³. La gráfica muestra los consumos de los últimos meses: Agosto (5 m³), Septiembre (17 m³), Octubre (19 m³), Noviembre (18 m³). ¿Cuál fue el consumo acumulado desde enero hasta el 1 de septiembre?',
    options: [
      { number: 1, letter: 'A', text: '141 m³' },
      { number: 2, letter: 'B', text: '146 m³' },
      { number: 3, letter: 'C', text: '182 m³' },
      { number: 4, letter: 'D', text: '195 m³' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Aleatorio-Estadístico',
    affirmation: 'Resuelve problemas extrayendo información de gráficas y tablas.',
    evidence: 'Realiza operaciones aritméticas a partir de datos en diagramas de barras.',
    standard: 'Resuelvo y formulo problemas a partir de conjuntos de datos.',
    justification: 'Hasta el 1 de septiembre aún no han ocurrido los consumos de septiembre (17), octubre (19) ni noviembre (18). Restando estos meses del total: 200 - 17 - 19 - 18 = 200 - 54 = 146 m³.',
    invalidOptionsReasoning: {
      A: 'Resta también el mes de agosto (200 - 5 - 17 - 19 - 18 = 141), pero agosto sí ocurrió antes del 1 de septiembre.',
      C: 'Solo resta el mes de noviembre (200 - 18 = 182).',
      D: 'Solo resta el mes de agosto (200 - 5 = 195).'
    },
    socraticHints: {
      recordar: '¿Cuál es el consumo total registrado de enero a noviembre?',
      comprender: '¿Cuáles meses transcurren DESPUÉS del 1 de septiembre?',
      aplicar: 'Suma los consumos de septiembre (17), octubre (19) y noviembre (18) y réstalos de 200.',
      analizar: '¿Por qué el consumo de agosto sí debe quedar incluido en el acumulado previo a septiembre?'
    }
  },
  {
    id: 702,
    grade: 7,
    questionNumber: 2,
    title: 'Porcentaje de juegos ganados en voleibol',
    statement: 'Martín ganó el 50% de los juegos de voleibol en los que participó. Si en esta temporada Martín ganó 20 juegos, ¿en cuántos juegos participó en total?',
    options: [
      { number: 1, letter: 'A', text: '10 juegos' },
      { number: 2, letter: 'B', text: '25 juegos' },
      { number: 3, letter: 'C', text: '30 juegos' },
      { number: 4, letter: 'D', text: '40 juegos' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Numérico-Variacional',
    affirmation: 'Resuelve problemas de proporcionalidad directa en contextos aplicados.',
    evidence: 'Usa propiedades de porcentajes y razones.',
    standard: 'Resuelvo problemas en contextos de medidas relativas y variaciones.',
    justification: 'Si el 50% equivale a 20 juegos, el 100% (total de juegos) es el doble: 20 × 2 = 40 juegos.',
    invalidOptionsReasoning: {
      A: 'Calcula el 50% de 20 (10 juegos), confundiendo la parte con el total.',
      B: 'Suma 20 + 5 = 25 de forma arbitraria.',
      C: 'Calcula la diferencia 50 - 20 = 30.'
    },
    socraticHints: {
      recordar: '¿A qué fracción simple equivale el 50% de una cantidad?',
      comprender: 'Si la mitad de todos los juegos es 20, ¿cuánto es el total completo de juegos?',
      aplicar: 'Plantea la ecuación: 0.50 × Total = 20 => Total = 20 / 0.50.',
      analizar: '¿Por qué 40 juegos verifica que exactamente la mitad (20) fueron ganados?'
    }
  },

  // ================= GRADO 6° =================
  {
    id: 601,
    grade: 6,
    questionNumber: 1,
    title: 'Corrección del tiempo en carrera de ciclistas',
    statement: 'En la premiación de una carrera, el reloj marcó 3 minutos de más por un error. Los tiempos mostrados en el podio fueron: Puesto 1 (26 min), Puesto 2 (27 min), Puesto 3 (29 min). ¿Cuáles son los tiempos reales corregidos?',
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
    standard: 'Resuelvo problemas utilizando operaciones básicas y relaciones de orden.',
    justification: 'Restando los 3 minutos de exceso a cada ciclista: Puesto 1: 26 - 3 = 23 min; Puesto 2: 27 - 3 = 24 min; Puesto 3: 29 - 3 = 26 min.',
    invalidOptionsReasoning: {
      A: 'No resta los 3 minutos al puesto 1 y desordena los puestos.',
      B: 'Asigna el tiempo del puesto 1 al puesto 2.',
      C: 'Invierte el orden de los ciclistas en el podio.'
    },
    socraticHints: {
      recordar: 'Si el cronómetro marcó 3 minutos de más, ¿qué operación debes hacerle a cada tiempo?',
      comprender: 'Calcula 26 - 3, 27 - 3 y 29 - 3 en tu cuaderno.',
      aplicar: 'Asocia cada nuevo tiempo con su respectivo puesto en el podio (1°, 2° y 3°).',
      analizar: '¿Por qué el ganador siempre tiene el menor tiempo (23 min)?'
    }
  },
  {
    id: 611,
    grade: 6,
    questionNumber: 11,
    title: 'Probabilidad en la ruleta de premios',
    statement: 'Nicolás gira una ruleta dividida en 3 partes iguales. Una de las tres partes está sombreada en verde y da premio. ¿Cuál es la probabilidad de que Nicolás gane el premio?',
    options: [
      { number: 1, letter: 'A', text: '1/2' },
      { number: 2, letter: 'B', text: '3/2' },
      { number: 3, letter: 'C', text: '2/3' },
      { number: 4, letter: 'D', text: '1/3' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comunicación, modelación y representación',
    component: 'Aleatorio-Estadístico',
    affirmation: 'Interpreta la naturaleza y posibilidad de ocurrencia de eventos simples.',
    evidence: 'Expresa el grado de probabilidad usando razones.',
    standard: 'Conjeturo acerca del resultado de un experimento aleatorio.',
    justification: 'Hay 1 sector favorable (sombreado) de un total de 3 sectores iguales. La probabilidad es 1/3.',
    invalidOptionsReasoning: {
      A: 'Compara 1 sector favorable contra 2 no favorables (1/2).',
      B: 'Una probabilidad nunca puede ser mayor que 1 (3/2 = 1.5).',
      C: '2/3 corresponde a la probabilidad de NO ganar el premio.'
    },
    socraticHints: {
      recordar: '¿En cuántas partes iguales está dividida la ruleta en total?',
      comprender: '¿Cuántas de esas partes están sombreadas para ganar el premio?',
      aplicar: 'Forma la fracción: Casos favorables / Casos totales.',
      analizar: '¿Por qué 1/3 representa la probabilidad exacta de ganar en un solo giro?'
    }
  },

  // ================= GRADO 5° =================
  {
    id: 501,
    grade: 5,
    questionNumber: 1,
    title: 'Chocolates rellenos en la bolsa',
    statement: 'En una bolsa hay 10 chocolates: 3 rellenos de piña, 4 rellenos de fresa, 2 rellenos de coco y 1 relleno de durazno. ¿Cuál es la probabilidad de sacar al azar un chocolate relleno de fresa?',
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
    standard: 'Conjeturo y pongo a prueba predicciones sobre eventos.',
    justification: 'Hay 4 chocolates de fresa de un total de 10 chocolates en la bolsa. La probabilidad es 4/10.',
    invalidOptionsReasoning: {
      A: '6/10 es la probabilidad de sacar un chocolate que NO sea de fresa.',
      C: '4/3 es una fracción impropia (mayor a 1), imposible para probabilidad.',
      D: '4/6 relaciona los de fresa contra los otros sabores, no contra el total.'
    },
    socraticHints: {
      recordar: '¿Cuántos chocolates hay en total dentro de la bolsa?',
      comprender: '¿Cuántos de esos chocolates tienen relleno de fresa?',
      aplicar: 'Escribe en tu cuaderno la fracción colocando arriba los de fresa y abajo el total.',
      analizar: '¿Por qué el denominador siempre debe ser el total de chocolates (10)?'
    }
  },
  {
    id: 503,
    grade: 5,
    questionNumber: 3,
    title: 'Precio de pastelitos proporcionales',
    statement: 'Felipe vende 6 pastelitos por $12.000. Si cada pastelito vale lo mismo, ¿cuál sería el precio de 9 pastelitos?',
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
    evidence: 'Utiliza la proporcionalidad directa en contextos cotidianos.',
    standard: 'Resuelvo y formulo problemas en situaciones de proporcionalidad directa.',
    justification: 'El precio unitario de 1 pastelito es $12.000 / 6 = $2.000. Por tanto, 9 pastelitos cuestan 9 × $2.000 = $18.000.',
    invalidOptionsReasoning: {
      B: 'Duplica el precio de 6 asumiendo que 9 es el doble ($24.000).',
      C: 'Calcula con precio unitario erróneo de $3.000 ($27.000).',
      D: 'Multiplica 6 × 12.000 = 72.000 sin sentido de proporción.'
    },
    socraticHints: {
      recordar: 'Si 6 pastelitos valen $12.000, ¿cuánto vale un solo pastelito?',
      comprender: 'Divide 12.000 entre 6 en tu cuaderno.',
      aplicar: 'Ahora multiplica ese valor de 1 pastelito por 9 pastelitos.',
      analizar: '¿Por qué $18.000 concuerda con comprar 3 pastelitos más que antes?'
    }
  },
  {
    id: 518,
    grade: 5,
    questionNumber: 18,
    title: 'Perímetro frontal de la casa de muñecas',
    statement: 'Jacinta compró una casa de muñecas. El frente tiene forma de casa con base de 20 cm, dos paredes laterales de 12 cm cada una, y dos caídas de techo de 14 cm cada una. ¿Cuál es el perímetro del contorno frontal?',
    options: [
      { number: 1, letter: 'A', text: '26 cm' },
      { number: 2, letter: 'B', text: '46 cm' },
      { number: 3, letter: 'C', text: '52 cm' },
      { number: 4, letter: 'D', text: '72 cm' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Planteamiento y resolución de problemas',
    component: 'Espacial-Métrico',
    affirmation: 'Resuelve problemas de medición de perímetro usando patrones estándar.',
    evidence: 'Usa patrones para calcular perímetros de figuras poligonales.',
    standard: 'Diferencio y ordeno longitudes y distancias.',
    justification: 'El perímetro es la suma de todos los lados exteriores: 20 cm (base) + 12 cm (pared izquierda) + 12 cm (pared derecha) + 14 cm (techo izquierdo) + 14 cm (techo derecho) = 72 cm.',
    invalidOptionsReasoning: {
      A: 'Suma solo un techo y una pared (14 + 12 = 26).',
      B: 'Suma la base, una pared y un techo (20 + 12 + 14 = 46).',
      C: 'Olvida sumar la base inferior de 20 cm (14 + 14 + 12 + 12 = 52).'
    },
    socraticHints: {
      recordar: '¿Qué es el perímetro de una figura geométrica?',
      comprender: 'Dibuja en tu cuaderno el contorno exterior de la casa y anota la medida de cada uno de sus 5 lados.',
      aplicar: 'Suma: 20 + 12 + 12 + 14 + 14.',
      analizar: '¿Por qué no debemos dejar por fuera ningún lado exterior al calcular el contorno completo?'
    }
  },

  // ================= GRADO 4° =================
  {
    id: 401,
    grade: 4,
    questionNumber: 1,
    title: 'Lectura y escritura de números',
    statement: 'Johan va a visitar a su amigo que vive en la casa trescientos veinte. ¿Cuál de los siguientes números corresponde a la casa de su amigo?',
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
    affirmation: 'Reconoce el significado y equivalencia de números naturales en el sistema decimal.',
    evidence: 'Asigna códigos numéricos a expresiones textuales teniendo en cuenta el valor posicional.',
    standard: 'Describo, comparo y cuantifico situaciones con números.',
    justification: 'Trescientos corresponde a 3 centenas (300) y veinte a 2 decenas (20). El número resultante es 320.',
    invalidOptionsReasoning: {
      A: 'Escribe 300 y luego 20 juntos creando 30.020.',
      C: 'Escribe 32, omitiendo el valor posicional de las centenas.',
      D: 'Escribe 3.200 (tres mil doscientos).'
    },
    socraticHints: {
      recordar: '¿Cuántas centenas tiene la palabra "trescientos"?',
      comprender: '¿Cuántas decenas tiene la palabra "veinte"?',
      aplicar: 'Ubica en tu cuaderno una tabla de Centenas (C), Decenas (D) y Unidades (U).',
      analizar: '¿Por qué 3 centenas y 2 decenas forman el número 320?'
    }
  },
  {
    id: 402,
    grade: 4,
    questionNumber: 2,
    title: 'Secuencia geométrica de puntos',
    statement: 'Observa la secuencia de puntos:\n- Posición 1: 1 punto\n- Posición 2: 3 puntos (1 + 2)\n- Posición 3: 6 puntos (1 + 2 + 3)\n- Posición 4: 10 puntos (1 + 2 + 3 + 4)\n\nSi se sigue el mismo patrón, ¿cuántos puntos habrá en la quinta posición?',
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
    affirmation: 'Descubre regularidades en secuencias numéricas y geométricas.',
    evidence: 'Describe las regularidades en secuencias y predice el término siguiente.',
    standard: 'Predigo patrones de variación en secuencias numéricas y gráficas.',
    justification: 'En cada paso se suma el número de la posición: para la posición 5 se suman 5 puntos a la anterior: 10 + 5 = 15 puntos (números triangulares: 1+2+3+4+5=15).',
    invalidOptionsReasoning: {
      A: '10 es la cantidad de puntos de la posición 4.',
      C: 'Duplica 10 obteniendo 20.',
      D: 'Calcula 5 × 5 = 25 (como si fuera un cuadrado).'
    },
    socraticHints: {
      recordar: '¿Cuántos puntos se sumaron de la posición 1 a la 2? ¿Y de la 2 a la 3?',
      comprender: 'Observa el patrón: +2, +3, +4... ¿Cuánto debemos sumar para pasar a la posición 5?',
      aplicar: 'A los 10 puntos de la posición 4, súmale 5 puntos.',
      analizar: '¿Por qué 15 puntos forman una pirámide perfecta de 5 filas?'
    }
  },

  // ================= GRADO 3° =================
  {
    id: 301,
    grade: 3,
    questionNumber: 1,
    title: 'Posición ordinal en la fila escolar',
    statement: 'La profesora pidió a sus estudiantes organizarse en fila frente al tablero: Mario, Gabriela, Leonardo, Felipe y Alejandra. ¿En qué posición de la fila se encuentra Gabriela?',
    options: [
      { number: 1, letter: 'A', text: 'Quinta' },
      { number: 2, letter: 'B', text: 'Tercera' },
      { number: 3, letter: 'C', text: 'Primera' },
      { number: 4, letter: 'D', text: 'Segunda' }
    ],
    correctOption: 4,
    correctLetter: 'D',
    competency: 'Comunicación, modelación y representación',
    component: 'Numérico-Variacional',
    affirmation: 'Reconoce el significado de números ordinales en situaciones con orden.',
    evidence: 'Asigna códigos de orden (primero, segundo, etc.) a objetos y personas.',
    standard: 'Reconozco significados del número en diferentes contextos.',
    justification: 'Al ordenar desde el tablero hacia atrás: Mario es 1.° (Primero), Gabriela es 2.ª (Segunda), Leonardo es 3.° (Tercero), Felipe es 4.° (Cuarto) y Alejandra es 5.ª (Quinta).',
    invalidOptionsReasoning: {
      A: 'Quinta es Alejandra, la última de la fila.',
      B: 'Tercero es Leonardo.',
      C: 'Primero es Mario, el más cercano a la profesora.'
    },
    socraticHints: {
      recordar: '¿Quién está de primero en la fila frente a la profesora?',
      comprender: 'Cuenta de izquierda a derecha desde el primer estudiante: 1°, 2°...',
      aplicar: '¿Quién está inmediatamente después de Mario?',
      analizar: '¿Qué palabra ordinal le corresponde al número 2: Primera, Segunda, Tercera o Quinta?'
    }
  },
  {
    id: 304,
    grade: 3,
    questionNumber: 4,
    title: 'Evento seguro al sacar una tarjeta',
    statement: 'Liliana concursa sacando una tarjeta de una caja. Si la tarjeta es amarilla, gana otra boleta.\n- Caja 1: Solo tarjetas blancas\n- Caja 2: Todas las tarjetas son amarillas\n- Caja 3: Tarjetas amarillas y blancas\n- Caja 4: Tarjetas amarillas y blancas\n\n¿Cuál caja debe escoger Liliana para que sea SEGURO que gane otra boleta?',
    options: [
      { number: 1, letter: 'A', text: 'Caja 1' },
      { number: 2, letter: 'B', text: 'Caja 2' },
      { number: 3, letter: 'C', text: 'Caja 3' },
      { number: 4, letter: 'D', text: 'Caja 4' }
    ],
    correctOption: 2,
    correctLetter: 'B',
    competency: 'Razonamiento y argumentación',
    component: 'Aleatorio',
    affirmation: 'Explica la naturaleza de los eventos posibles, imposibles o seguros.',
    evidence: 'Determina cuándo un evento es seguro.',
    standard: 'Explico desde mi experiencia la posibilidad o imposibilidad de eventos.',
    justification: 'En la Caja 2 todas las tarjetas son amarillas, por lo que es un evento 100% seguro (probabilidad 1). En las otras cajas es imposible (Caja 1) o solo probable (Cajas 3 y 4).',
    invalidOptionsReasoning: {
      A: 'En la Caja 1 es imposible ganar porque no hay tarjetas amarillas.',
      C: 'En la Caja 3 es posible pero no seguro, porque podría salir una blanca.',
      D: 'En la Caja 4 es posible pero no seguro, pues también hay tarjetas blancas.'
    },
    socraticHints: {
      recordar: '¿De qué color debe ser la tarjeta para que Liliana gane el premio?',
      comprender: '¿Qué significa que algo sea "SEGURO" (que no hay ninguna posibilidad de fallar)?',
      aplicar: 'Revisa cada caja: ¿cuál de ellas tiene ÚNICAMENTE tarjetas amarillas?',
      analizar: '¿Por qué si sacas de la Caja 2 siempre ganarás sin importar cuál tarjeta tomes?'
    }
  }
];

export const GRADES_AVAILABLE = [3, 4, 5, 6, 7, 8, 9, 10, 11];

// Template topics for creating complete 20 questions per grade
const GRADE_TOPICS: Record<number, Array<{ title: string; statement: string; options: [string, string, string, string]; correct: number; comp: string; compo: string; just: string; std: string }>> = {
  11: [
    { title: 'Gasto en paquetes de galletas', statement: 'En un almacén el precio de un paquete de galletas es p. Una persona va a comprar los 10 paquetes que quedan, pero 4 han vencido. ¿Cuánto gastó en los aptos?', options: ['14p', '10p', '6p', '4p'], correct: 3, comp: 'Interpretación y representación', compo: 'Numérico-Variacional', just: '10 - 4 = 6 paquetes aptos × p = 6p.', std: 'Álgebra y funciones' },
    { title: 'Juego de piedra, papel o tijera y comidas', statement: 'Andrés y Diego juegan. Si Andrés pierde entrega fruta; si gana recibe sándwich. En la casilla 3 Diego gana, pero dice que Andrés recibe sándwich y fruta. ¿Cuál casilla es incorrecta?', options: ['la 2', 'la 3', 'la 5', 'la 7'], correct: 2, comp: 'Interpretación y representación', compo: 'Aleatorio', just: 'La casilla 3 debería indicar Nada para Andrés.', std: 'Tablas estadísticas' },
    { title: 'Probabilidad en días independientes', statement: 'Andrés calcula probabilidad de ganar lunes (1/3) y martes (1/3). Suma 1/3 + 1/3 = 2/3. ¿Por qué es incorrecto?', options: ['La prob. de lunes no es 1/3', 'Debe multiplicar (1/3) × (1/3) = 1/9', 'La prob. correcta es 1/9', 'Debe sumar denominadores'], correct: 2, comp: 'Formulación y ejecución', compo: 'Aleatorio', just: 'Eventos independientes se multiplican: 1/3 × 1/3 = 1/9.', std: 'Probabilidad de eventos independientes' },
    { title: 'Representación de exportaciones por país y año', statement: 'Se tienen datos de 4 países y 3 años. ¿Qué gráfico muestra toda la información sin pérdidas?', options: ['Barras apiladas por año con los 4 países', 'Circular solo del 2008', 'Líneas omitiendo 2008', 'Columnas sin resto del mundo'], correct: 1, comp: 'Interpretación y representación', compo: 'Aleatorio', just: 'Barras apiladas conservan el 100% de años y países.', std: 'Gráficos estadísticos' },
    { title: 'Pisos de casas en el pentágono', statement: '5 casas tienen distinta cantidad de pisos enteros positivos. La más alta tiene 5 pisos. ¿Cuántos pisos hay en total?', options: ['9', '15', '20', '25'], correct: 2, comp: 'Formulación y ejecución', compo: 'Numérico-Variacional', just: '1 + 2 + 3 + 4 + 5 = 15 pisos.', std: 'Propiedades numéricas' },
    { title: 'Área sombreada en círculo y cuadrado inscrito', statement: 'Un círculo tiene radio r = 10 cm y dentro hay un cuadrado inscrito con diagonal d = 20 cm. ¿Cuál es el área sombreada exterior al cuadrado?', options: ['100π - 200 cm²', '100π - 400 cm²', '50π - 100 cm²', '200π - 200 cm²'], correct: 1, comp: 'Formulación y ejecución', compo: 'Geométrico-Métrico', just: 'Área círculo = π(10)² = 100π. Área cuadrado = d²/2 = 400/2 = 200. Diferencia = 100π - 200.', std: 'Cálculo de áreas compuestas' },
    { title: 'Velocidad promedio en trayecto Ibagué - Bogotá', statement: 'Un bus recorre 200 km. Los primeros 100 km a 50 km/h y los siguientes 100 km a 100 km/h. ¿Cuál es la velocidad promedio en todo el trayecto?', options: ['75 km/h', '66.67 km/h', '60 km/h', '80 km/h'], correct: 2, comp: 'Formulación y ejecución', compo: 'Numérico-Variacional', just: 'Tiempo total = 100/50 + 100/100 = 2h + 1h = 3h. Vprom = 200 km / 3h = 66.67 km/h.', std: 'Razones y proporciones' },
    { title: 'Muestreo estratificado de votantes', statement: 'De 2.000 ciudadanos encuestados en Ibagué, el 60% tiene entre 18 y 38 años. ¿Cuántos jóvenes debe haber en la muestra?', options: ['2.000', '1.200', '1.000', '600'], correct: 2, comp: 'Formulación y ejecución', compo: 'Aleatorio', just: '2.000 × 0.60 = 1.200 personas.', std: 'Muestreo y proporciones' },
    { title: 'Función cuadrática de trayectoria de proyectil', statement: 'La altura h(t) = -5t² + 20t en metros. ¿En qué segundo alcanza su altura máxima?', options: ['1 s', '2 s', '4 s', '20 s'], correct: 2, comp: 'Razonamiento y argumentación', compo: 'Numérico-Variacional', just: 'Vértice en t = -b / (2a) = -20 / (2 × -5) = 2 segundos.', std: 'Funciones cuadráticas' },
    { title: 'Interés compuesto en ahorro escolar', statement: 'Un capital de $1.000.000 se invierte al 10% anual compuesto durante 2 años. ¿Cuál es el monto final?', options: ['$1.200.000', '$1.210.000', '$1.100.000', '$1.300.000'], correct: 2, comp: 'Formulación y ejecución', compo: 'Numérico-Variacional', just: '1.000.000 × (1.10)² = 1.000.000 × 1.21 = $1.210.000.', std: 'Modelos exponenciales' },
    { title: 'Trigonometría: Altura de la Torre del Panóptico', statement: 'Desde un punto a 30 m de la base con ángulo de elevación de 45° (tan 45° = 1), ¿cuál es la altura aproximada de la torre?', options: ['15 m', '30 m', '45 m', '60 m'], correct: 2, comp: 'Formulación y ejecución', compo: 'Geométrico-Métrico', just: 'h = 30 × tan(45°) = 30 × 1 = 30 metros.', std: 'Razones trigonométricas' },
    { title: 'Volumen de cilindro en tanque de agua', statement: 'Un tanque cilíndrico en el Cañón del Combeima tiene radio r = 2 m y altura h = 5 m. Su volumen es V = π·r²·h:', options: ['10π m³', '20π m³', '40π m³', '50π m³'], correct: 2, comp: 'Formulación y ejecución', compo: 'Geométrico-Métrico', just: 'V = π × 2² × 5 = π × 4 × 5 = 20π m³.', std: 'Cuerpos geométricos y volumen' },
    { title: 'Desviación estándar y consistencia', statement: 'El grupo A tiene promedio 75 con desviación 2; el grupo B tiene promedio 75 con desviación 12. ¿Qué grupo es más homogéneo?', options: ['Grupo A porque su desviación es menor', 'Grupo B porque tiene mayor variabilidad', 'Ambos son idénticos en dispersión', 'No se puede saber sin el total'], correct: 1, comp: 'Razonamiento y argumentación', compo: 'Aleatorio', just: 'Menor desviación estándar indica mayor consistencia y homogeneidad alrededor de la media.', std: 'Medidas de dispersión' },
    { title: 'Teorema del Coseno en Triángulo PQR', statement: 'En triángulo PQR con q=2, r=4, P=60° y cos(60°)=1/2. Si p² = q² + r² - 2qr·cos(P), ¿cuánto mide p?', options: ['28', '12', '√28', '√12'], correct: 4, comp: 'Formulación y ejecución', compo: 'Geométrico-Métrico', just: 'p² = 4 + 16 - 8 = 12 → p = √12.', std: 'Teorema del coseno' },
    { title: 'Dominio de función racional', statement: 'Dada la función f(x) = (x + 3) / (2x - 8), ¿cuál es el valor de x excluido del dominio?', options: ['x = -3', 'x = 0', 'x = 4', 'x = 8'], correct: 3, comp: 'Razonamiento y argumentación', compo: 'Numérico-Variacional', just: 'El denominador se anula cuando 2x - 8 = 0 → 2x = 8 → x = 4.', std: 'Dominio y asíntotas' },
    { title: 'Límites al infinito en modelo poblacional', statement: 'La población P(t) = (500t + 100) / (t + 2) cuando el tiempo t tiende a infinito se aproxima a:', options: ['50', '100', '250', '500'], correct: 4, comp: 'Razonamiento y argumentación', compo: 'Numérico-Variacional', just: 'Dividiendo entre t: lim (500 + 100/t) / (1 + 2/t) = 500 / 1 = 500.', std: 'Comportamiento asintótico' },
    { title: 'Logaritmos y escala de decibeles', statement: 'Si la intensidad del sonido es I = 10⁴ · I₀ y la fórmula es β = 10·log₁₀(I / I₀), el nivel en decibeles es:', options: ['10 dB', '40 dB', '100 dB', '400 dB'], correct: 2, comp: 'Formulación y ejecución', compo: 'Numérico-Variacional', just: 'β = 10 × log₁₀(10⁴) = 10 × 4 = 40 dB.', std: 'Funciones logarítmicas' },
    { title: 'Probabilidad condicional en feria escolar', statement: 'El 40% de estudiantes juega ajedrez y el 20% juega ajedrez y tenis. Dado que un estudiante juega ajedrez, ¿cuál es la probabilidad de que juegue tenis?', options: ['10%', '20%', '50%', '80%'], correct: 3, comp: 'Razonamiento y argumentación', compo: 'Aleatorio', just: 'P(Tenis | Ajedrez) = P(Ajedrez ∩ Tenis) / P(Ajedrez) = 0.20 / 0.40 = 0.50 = 50%.', std: 'Probabilidad condicional' },
    { title: 'Geometría analítica: Pendiente de recta perpendicular', statement: 'Una recta L₁ tiene ecuación y = 2x + 5. ¿Cuál es la pendiente m₂ de una recta perpendicular L₂?', options: ['2', '-2', '1/2', '-1/2'], correct: 4, comp: 'Razonamiento y argumentación', compo: 'Geométrico-Métrico', just: 'Rectas perpendiculares cumplen m₁ × m₂ = -1 → 2 × m₂ = -1 → m₂ = -1/2.', std: 'Geometría analítica' },
    { title: 'Combinatoria: Selección de grupo de estudiantes', statement: 'Un docente escoge 3 estudiantes de un grupo y obtiene 10 combinaciones distintas posibles C(n, 3) = 10. ¿Cuántos alumnos hay en el grupo?', options: ['13', '10', '6', '5'], correct: 4, comp: 'Formulación y ejecución', compo: 'Aleatorio', just: 'C(5, 3) = (5 × 4 × 3) / 6 = 10 alumnos.', std: 'Combinatoria y conteo' }
  ]
};

// Generates or retrieves a full question for any grade (3 to 11) and number (1 to 20)
export function getQuestionForGradeAndNumber(grade: number, questionNumber: number): Question {
  // First check in OFFICIAL_QUESTIONS_MAP (Grades 3° to 11°)
  if (OFFICIAL_QUESTIONS_MAP[grade]) {
    const official = OFFICIAL_QUESTIONS_MAP[grade].find(q => q.questionNumber === questionNumber);
    if (official) return official;
  }

  // Second check if directly exists in QUESTION_BANK
  const direct = QUESTION_BANK.find(q => q.grade === grade && q.questionNumber === questionNumber);
  if (direct) return direct;

  const letterMap: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];
  const gradeTopicList = GRADE_TOPICS[grade] || GRADE_TOPICS[11];
  const topic = gradeTopicList[(questionNumber - 1) % gradeTopicList.length];

  const correctLetter = letterMap[topic.correct - 1] || 'B';

  return {
    id: grade * 100 + questionNumber,
    grade,
    questionNumber,
    title: topic.title,
    statement: `[Pregunta #${questionNumber} - Grado ${grade}°]: ${topic.statement}`,
    options: [
      { number: 1, letter: 'A', text: topic.options[0] },
      { number: 2, letter: 'B', text: topic.options[1] },
      { number: 3, letter: 'C', text: topic.options[2] },
      { number: 4, letter: 'D', text: topic.options[3] }
    ],
    correctOption: topic.correct,
    correctLetter: correctLetter,
    competency: topic.comp,
    component: topic.compo,
    affirmation: `Comprende y aplica conceptos de ${topic.compo} en situaciones del contexto.`,
    evidence: `Resuelve problemas matemáticos justificando procedimientos en el cuaderno.`,
    standard: topic.std,
    justification: topic.just,
    invalidOptionsReasoning: {
      A: 'Presenta un error conceptual o cálculo incompleto en el cuaderno.',
      B: 'Omite una de las restricciones esenciales del enunciado.',
      C: 'Aplica una operación inversa no justificada.',
      D: 'Confunde las unidades o magnitudes del problema.'
    },
    socraticHints: {
      recordar: `¿Cuáles son los datos numéricos y condiciones iniciales de la pregunta #${questionNumber}?`,
      comprender: `Explica en tus propias palabras qué te pide calcular este problema de ${topic.compo}.`,
      aplicar: `Realiza las operaciones matemáticas paso a paso en tu cuaderno de apuntes.`,
      analizar: `¿Por qué la opción ${correctLetter} es coherente y cómo descartas las otras tres opciones?`
    }
  };
}

// Get all 20 questions for a given grade
export function getGradeQuestionsList(grade: number): Question[] {
  const list: Question[] = [];
  for (let i = 1; i <= 20; i++) {
    list.push(getQuestionForGradeAndNumber(grade, i));
  }
  return list;
}

export const COMPETENCIES_INFO = {
  primaria_secundaria: [
    {
      title: 'Comunicación, modelación y representación',
      desc: 'Expresar ideas matemáticas oralmente y por escrito, traducir entre registros gráficos, simbólicos y naturales.'
    },
    {
      title: 'Razonamiento y argumentación',
      desc: 'Justificar estrategias, descubrir regularidades y patrones, validar hipótesis y formular conjeturas.'
    },
    {
      title: 'Planteamiento y resolución de problemas',
      desc: 'Interpretar y resolver situaciones matemáticas cotidianas y escolares con planes efectivos.'
    }
  ],
  media: [
    {
      title: 'Interpretación y representación',
      desc: 'Comprender y transformar información cuantitativa y esquemática en tablas, gráficos y modelos algebraicos.'
    },
    {
      title: 'Formulación y ejecución',
      desc: 'Plantear y ejecutar estrategias matemáticas para solucionar problemas cotidianos o científicos.'
    },
    {
      title: 'Argumentación',
      desc: 'Validar o refutar procedimientos, conjeturas y decisiones teóricas frente a criterios del ICFES.'
    }
  ]
};
