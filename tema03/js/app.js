/*
  Tarea 3 · DWEC · Giulshen Hueso Cruz
  Variables, tipos y conversiones.
  Cada función se ejecuta al pulsar su botón «Ejecutar» de index.html.
  Solo console.log() y alert(). let y const, nunca var.
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");


// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  // const para lo que no cambia
  const edad = 20;   // number
  console.log("edad =", edad, "→", typeof edad);

  const curso = "2º DAW";   // string
  console.log("curso =", curso, "→", typeof curso);

  const estudiaDaw = true;   // boolean
  console.log("estudiaDaw =", estudiaDaw, "→", typeof estudiaDaw);

  const premio = null;   // null: «no hay valor», puesto a propósito
  console.log("premio =", premio, "→", typeof premio);

  const numeroGrande = 10n;   // bigint
  console.log("numeroGrande =", numeroGrande, "→", typeof numeroGrande);

  // let porque le daré valor más tarde
  let horasEstudiadas;   // undefined: todavía no tiene valor
  console.log("horasEstudiadas =", horasEstudiadas, "→", typeof horasEstudiadas);

  horasEstudiadas = 6;
  console.log("horasEstudiadas =", horasEstudiadas, "→", typeof horasEstudiadas);
}


// Ejercicio 2 · Conversiones explícitas
// El comentario «espero …» se escribe ANTES de ejecutar.
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  const a = String(123);   // espero "123", un string
  console.log("String(123) →", a, typeof a);

  const b = Number("123");   // espero 123, un number
  console.log('Number("123") →', b, typeof b);

  const c = Number("12abc");   // espero NaN, porque no es un número entero
  console.log('Number("12abc") →', c, typeof c);

  const d = Number("");   // espero 0, una cadena vacía cuenta como 0
  console.log('Number("") →', d, typeof d);

  const e = Number(true);   // espero 1
  console.log("Number(true) →", e, typeof e);

  const f = Boolean(0);   // espero false
  console.log("Boolean(0) →", f, typeof f);

  const g = Boolean("texto");   // espero true, porque la cadena no está vacía
  console.log('Boolean("texto") →', g, typeof g);

  const h = Boolean("");   // espero false, porque la cadena está vacía
  console.log('Boolean("") →', h, typeof h);

  const i = String(null);   // espero "null", un string
  console.log("String(null) →", i, typeof i);

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
  console.log('"3" + 4 + 5 →', "3" + 4 + 5);   // espero "345", mía
  console.log('4 + 5 + "3" →', 4 + 5 + "3");   // espero "93", mía
  console.log('"hola" - 1 →', "hola" - 1);   // espero NaN

  // Comparaciones con == y con ===
  console.log('5 == "5" →', 5 == "5");     // espero true
  console.log('5 === "5" →', 5 === "5");   // espero false

  console.log("0 == false →", 0 == false);     // espero true
  console.log("0 === false →", 0 === false);   // espero false

  console.log("null == undefined →", null == undefined);     // espero true
  console.log("null === undefined →", null === undefined);   // espero false
}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Mis datos, con const
  const nombre = "Giulshen Hueso Cruz";
  const ciclo = "Desarrollo de Aplicaciones Web";
  const curso = "2º curso";
  const aficion = "la fotografía";

  // Un dato que cambia, con let
  let horasEstudiadas = 5;
  horasEstudiadas += 3;

  // La ficha con plantilla de cadena: backticks y ${ }
  const ficha = `Soy ${nombre}, estudio ${ciclo} en ${curso} y mi afición es ${aficion}. Esta semana he estudiado ${horasEstudiadas} horas.`;
  alert(ficha);
  console.log(ficha);

  // La misma ficha concatenando con +
  const fichaConMas = "Soy " + nombre + ", estudio " + ciclo + " en " + curso + " y mi afición es " + aficion + ". Esta semana he estudiado " + horasEstudiadas + " horas.";
  console.log(fichaConMas);

  // Comparo las dos con ===: tiene que salir true
  console.log("¿Son iguales las dos fichas? →", ficha === fichaConMas);
}
