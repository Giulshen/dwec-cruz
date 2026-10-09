/*
  Tarea 3 · DWEC · Giulshen Hueso Cruz
  Variables, tipos y conversiones.
  Cada función se ejecuta al pulsar su botón "Ejecutar" de index.html.
  Solo console.log() y alert(). let y const, nunca var.
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");


// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  // Uso const porque estos valores NO van a cambiar
  const edad = 20;   // número entero → tipo number
  console.log("edad =", edad, "→", typeof edad);

  const curso = "2º DAW";   // texto → tipo string
  console.log("curso =", curso, "→", typeof curso);

  const estudiaDaw = true;   // valor lógico → tipo boolean
  console.log("estudiaDaw =", estudiaDaw, "→", typeof estudiaDaw);

  const premio = null;   // null significa “no hay valor” a propósito
  console.log("premio =", premio, "→", typeof premio); // typeof null devuelve "object" por un error histórico de JS

  const numeroGrande = 10n;   // número muy grande → tipo bigint
  console.log("numeroGrande =", numeroGrande, "→", typeof numeroGrande);

  // Uso let porque la variable se va a asignar más tarde
  let horasEstudiadas;   // sin valor inicial → undefined
  console.log("horasEstudiadas =", horasEstudiadas, "→", typeof horasEstudiadas);

  // Ahora sí le doy un valor
  horasEstudiadas = 6;
  console.log("horasEstudiadas =", horasEstudiadas, "→", typeof horasEstudiadas);
}


// Ejercicio 2 · Conversiones explícitas
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  // Convierto el número 123 a string
  const a = String(123);   // espero "123"
  console.log("String(123) →", a, typeof a);

  // Convierto la cadena "123" a número
  const b = Number("123");   // espero 123
  console.log('Number("123") →', b, typeof b);

  // Intento convertir "12abc": no es un número válido
  const c = Number("12abc");   // espero NaN
  console.log('Number("12abc") →', c, typeof c);

  // Cadena vacía → se convierte a 0
  const d = Number("");   // espero 0
  console.log('Number("") →', d, typeof d);

  // true → 1
  const e = Number(true);   // espero 1
  console.log("Number(true) →", e, typeof e);

  // 0 → false
  const f = Boolean(0);   // espero false
  console.log("Boolean(0) →", f, typeof f);

  // Cadena no vacía → true
  const g = Boolean("texto");   // espero true
  console.log('Boolean("texto") →', g, typeof g);

  // Cadena vacía → false
  const h = Boolean("");   // espero false
  console.log('Boolean("") →', h, typeof h);

  // null convertido a string → "null"
  const i = String(null);   // espero "null"
  console.log("String(null) →", i, typeof i);

  // undefined convertido a número → NaN
  const j = Number(undefined);   // espero NaN
  console.log("Number(undefined) →", j, typeof j);
}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  // Expresiones que mezclan tipos
  console.log('"5" - 2 →', "5" - 2);   // espero 3
  console.log('"5" + 2 →', "5" + 2);   // espero "52"
  console.log("true + 1 →", true + 1);   // espero 2
  console.log('"3" + 4 + 5 →', "3" + 4 + 5);   // espero "345"
  console.log('4 + 5 + "3" →', 4 + 5 + "3");   // espero "93"
  console.log('"hola" - 1 →', "hola" - 1);   // espero NaN

  // Comparaciones con == y con ===
  console.log('5 == "5" →', 5 == "5");     // espero true
  console.log('5 === "5" →', 5 === "5");   // espero false

  console.log("0 == false →", 0 == false);     // espero true
  console.log("0 === false →", 0 === false);   // espero false

  console.log("null == undefined →", null == undefined);     // espero true
  console.log("null === undefined →", null === undefined);   // espero false
}

function ejercicio4() {
  // Muestro en la consola el nombre del ejercicio
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Guardo mis datos en constantes porque no necesito cambiarlos
  const nombre = "Giulshen Hueso Cruz";
  const ciclo = "Desarrollo de Aplicaciones Web";
  const curso = "2º curso";
  const aficion = "la fotografía";

  // Uso let porque las horas estudiadas van a cambiar
  let horasEstudiadas = 5;

  // Sumo tres horas a las cinco que tenía inicialmente
  horasEstudiadas += 3;

  // Creo una frase usando backticks y ${} para incluir las variables
  const ficha = `Soy ${nombre}, estudio ${ciclo} en ${curso} y mi afición es ${aficion}. Esta semana he estudiado ${horasEstudiadas} horas.`;

  // Muestro la ficha en una ventana emergente y también en la consola
  alert(ficha);
  console.log(ficha);

  // Creo la misma frase utilizando el operador + para unir los textos
  const fichaConMas = "Soy " + nombre + ", estudio " + ciclo + " en " + curso + " y mi afición es " + aficion + ". Esta semana he estudiado " + horasEstudiadas + " horas.";
  console.log(fichaConMas);

  // Comparo las dos frases para comprobar si son exactamente iguales
  console.log("¿Son iguales las dos fichas? →", ficha === fichaConMas);
}